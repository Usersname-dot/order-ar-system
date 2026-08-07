// ===== 订单与应收账款管理系统 - 后端API服务 =====
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// ===== 数据库连接 =====
const DB_NAME = process.env.DB_NAME || 'order_ar_system';
const sslConfig = process.env.DB_SSL === 'true' 
  ? { ssl: { rejectUnauthorized: true, minVersion: 'TLSv1.2' } } 
  : {};

const poolConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ...sslConfig,
  charset: 'utf8mb4'
};

// 先用无database的连接创建数据库，再用带database的pool
let pool;

// ===== 表配置 =====
const TABLE_CONFIG = {
  customers: {
    columns: ['id', 'customerName', 'phone', 'wechat', 'companyName', 'address', 'settlementMethod', 'creditLimit', 'creditLevel', 'region', 'billingCompany', 'taxNumber', 'bankName', 'bankAccount', 'taxLevel'],
    jsonColumns: [],
    numericColumns: ['creditLimit'],
    primaryKey: 'id'
  },
  products: {
    columns: ['id', 'productCode', 'brand', 'model', 'guidePrice', 'category', 'image', 'correspondingModel', 'remark'],
    jsonColumns: [],
    numericColumns: ['guidePrice'],
    primaryKey: 'id'
  },
  orders: {
    columns: ['id', 'orderNo', 'customerId', 'salesperson', 'date', 'warehouse', 'settlementMethod', 'items', 'status'],
    jsonColumns: ['items'],
    numericColumns: [],
    primaryKey: 'id'
  },
  returns: {
    columns: ['id', 'returnNo', 'customerId', 'salesperson', 'date', 'items', 'status'],
    jsonColumns: ['items'],
    numericColumns: [],
    primaryKey: 'id'
  },
  productions: {
    columns: ['id', 'orderNo', 'brand', 'model', 'quantity', 'unit', 'correspondingModel', 'workGroup', 'completeDate', 'remark', 'status'],
    jsonColumns: [],
    numericColumns: ['quantity'],
    primaryKey: 'id'
  },
  warehouse: {
    columns: ['id', 'orderNo', 'brand', 'model', 'quantity', 'unit', 'correspondingModel', 'completeDate', 'remark', 'status'],
    jsonColumns: [],
    numericColumns: ['quantity'],
    primaryKey: 'id'
  },
  shipments: {
    columns: ['id', 'orderNo', 'brand', 'model', 'quantity', 'unit', 'shipDate', 'trackingNo', 'freight', 'trackingPhoto', 'status'],
    jsonColumns: [],
    numericColumns: ['quantity', 'freight'],
    primaryKey: 'id'
  },
  payments: {
    columns: ['id', 'customerId', 'paymentDate', 'settlementMethod', 'amount', 'taxRate', 'tax', 'total', 'remittanceUnit'],
    jsonColumns: [],
    numericColumns: ['amount', 'taxRate', 'tax', 'total'],
    primaryKey: 'id'
  },
  departments: {
    columns: ['id', 'name', 'desc', 'permissions'],
    jsonColumns: ['permissions'],
    numericColumns: ['id'],
    primaryKey: 'id'
  },
  users: {
    columns: ['username', 'password', 'name', 'deptId', 'deptName', 'role', 'phone', 'email', 'securityQuestion', 'securityAnswer'],
    jsonColumns: [],
    numericColumns: ['deptId'],
    primaryKey: 'username'
  }
};

const SEQ_PREFIX = { customers: 'C', products: 'P', orders: 'O', returns: 'R', productions: 'PR', warehouse: 'W', shipments: 'S', payments: 'P' };
const VALID_TABLES = Object.keys(TABLE_CONFIG);

// ===== 工具函数 =====
function processRow(row, config) {
  const result = { ...row };
  // 解析 JSON 列
  config.jsonColumns.forEach(col => {
    if (result[col] !== null && result[col] !== undefined) {
      if (typeof result[col] === 'string') {
        try { result[col] = JSON.parse(result[col]); } catch(e) {}
      }
    } else {
      result[col] = [];
    }
  });
  // 转换数字列
  config.numericColumns.forEach(col => {
    if (result[col] !== null && result[col] !== undefined) {
      result[col] = Number(result[col]);
    }
  });
  return result;
}

function prepareValue(value, isJson) {
  if (isJson && value !== null && value !== undefined) {
    return JSON.stringify(value);
  }
  if (value === undefined) return null;
  return value;
}

// ===== 初始化数据库 =====
async function initDatabase() {
  console.log('正在初始化数据库...');
  
  // 第一步：创建数据库（连接时不指定database）
  const tempPool = mysql.createPool(poolConfig);
  try {
    await tempPool.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci`);
    console.log(`数据库 ${DB_NAME} 已就绪`);
  } catch(e) {
    console.error('创建数据库失败:', e.message);
  }
  await tempPool.end();

  // 第二步：用带database的连接池创建表
  pool = mysql.createPool({ ...poolConfig, database: DB_NAME });

  const fs = require('fs');
  const path = require('path');

  try {
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    const statements = schema.split(';').filter(s => s.trim());
    for (const stmt of statements) {
      if (stmt.trim()) await pool.query(stmt);
    }
    console.log('数据库表结构已就绪');
  } catch(e) {
    console.error('初始化表结构失败:', e.message);
  }

  // 检查是否需要填充初始数据
  const [rows] = await pool.query('SELECT COUNT(*) as cnt FROM users');
  if (rows[0].cnt === 0) {
    console.log('数据库为空，正在填充初始数据...');
    await seedData();
  } else {
    console.log('数据库已有数据，跳过填充');
  }
}

// ===== 初始数据 =====
async function seedData() {
  const conn = await pool.getConnection();
  try {
    // 客户
    const customers = [
      ['C001', '杭州树园音响有限公司', '13800138001', 'tree_audio', '杭州树园音响有限公司', '浙江省杭州市西湖区文三路100号', '月结30天', 500000, 'A级', '浙江', '杭州树园音响有限公司', '91330106MA2ABC123X', '中国工商银行杭州西湖支行', '1202060909900123456', '一般纳税人'],
      ['C002', '上海音妙电子科技', '13900139002', 'yinmiao', '上海音妙电子科技有限公司', '上海市浦东新区张江高科技园区', '月结60天', 300000, 'B级', '上海', '上海音妙电子科技有限公司', '91310115MA1XYZ4567', '招商银行上海张江支行', '1219038765432109876', '一般纳税人'],
      ['C003', '深圳声达电器', '13700137003', 'shengda2024', '深圳市声达电器有限公司', '广东省深圳市宝安区西乡街道', '现结', 200000, 'A级', '广东', '深圳市声达电器有限公司', '91440300MA5DEF7890', '中国建设银行深圳宝安支行', '4405018765432101234', '一般纳税人']
    ];
    for (const c of customers) {
      await conn.query('INSERT INTO customers (id, customerName, phone, wechat, companyName, address, settlementMethod, creditLimit, creditLevel, region, billingCompany, taxNumber, bankName, bankAccount, taxLevel) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', c);
    }

    // 产品
    const products = [
      ['P001', 'SP-X8', '声霸', 'X8 Pro', 2999, '音响', '', 'X8-P', '旗舰款'],
      ['P002', 'SP-S5', '声霸', 'S5 Mini', 1299, '音响', '', 'S5-M', '迷你便携款'],
      ['P003', 'SP-B12', '声霸', 'B12 Bass', 4599, '低音炮', '', 'B12', '重低音'],
      ['P004', 'SP-A3', '声霸', 'A3 Air', 899, '配件', '', 'A3', '无线适配器'],
      ['P005', 'YH-T10', '音海', 'T10 Studio', 1899, '监听耳机', '', 'T10', '专业监听']
    ];
    for (const p of products) {
      await conn.query('INSERT INTO products (id, productCode, brand, model, guidePrice, category, image, correspondingModel, remark) VALUES (?,?,?,?,?,?,?,?,?)', p);
    }

    // 订单
    const orders = [
      ['O001', 'DD20250806001', 'C001', '张三', '2025-08-06', '杭州仓', '月结30天', JSON.stringify([{brand:'声霸',model:'X8 Pro',quantity:50,unit:'台',price:2999,correspondingModel:'X8-P',remark:'加急'}]), '待排产'],
      ['O002', 'DD20250806002', 'C002', '李四', '2025-08-06', '上海仓', '月结60天', JSON.stringify([{brand:'声霸',model:'S5 Mini',quantity:100,unit:'台',price:1299,correspondingModel:'S5-M',remark:''},{brand:'声霸',model:'B12 Bass',quantity:30,unit:'台',price:4599,correspondingModel:'B12',remark:''}]), '待排产'],
      ['O003', 'DD20250805001', 'C003', '王五', '2025-08-05', '深圳仓', '现结', JSON.stringify([{brand:'音海',model:'T10 Studio',quantity:80,unit:'台',price:1899,correspondingModel:'T10',remark:''}]), '生产中']
    ];
    for (const o of orders) {
      await conn.query('INSERT INTO orders (id, orderNo, customerId, salesperson, date, warehouse, settlementMethod, items, status) VALUES (?,?,?,?,?,?,?,?,?)', o);
    }

    // 退货
    const returns = [
      ['R001', 'TH20250804001', 'C001', '张三', '2025-08-04', JSON.stringify([{brand:'声霸',model:'S5 Mini',quantity:5,unit:'台',correspondingModel:'S5-M',remark:'外观瑕疵'}]), '已处理']
    ];
    for (const r of returns) {
      await conn.query('INSERT INTO `returns` (id, returnNo, customerId, salesperson, date, items, status) VALUES (?,?,?,?,?,?,?)', r);
    }

    // 排产
    const productions = [
      ['PR001', 'DD20250805001', '音海', 'T10 Studio', 80, '台', 'T10', '车间A组', '2025-08-12', '优先排产', '进行中'],
      ['PR002', 'DD20250806001', '声霸', 'X8 Pro', 50, '台', 'X8-P', '车间B组', '2025-08-15', '加急订单', '待开始']
    ];
    for (const p of productions) {
      await conn.query('INSERT INTO productions (id, orderNo, brand, model, quantity, unit, correspondingModel, workGroup, completeDate, remark, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)', p);
    }

    // 仓库
    const warehouse = [
      ['W001', 'DD20250805001', '音海', 'T10 Studio', 80, '台', 'T10', '2025-08-12', '已入库', '在库']
    ];
    for (const w of warehouse) {
      await conn.query('INSERT INTO warehouse (id, orderNo, brand, model, quantity, unit, correspondingModel, completeDate, remark, status) VALUES (?,?,?,?,?,?,?,?,?,?)', w);
    }

    // 发货
    const shipments = [
      ['S001', 'DD20250804001', '声霸', 'A3 Air', 200, '个', '2025-08-04', 'SF1234567890', 350, '', '已发货']
    ];
    for (const s of shipments) {
      await conn.query('INSERT INTO shipments (id, orderNo, brand, model, quantity, unit, shipDate, trackingNo, freight, trackingPhoto, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)', s);
    }

    // 收款
    const payments = [
      ['P001', 'C003', '2025-08-05', '银行转账', 151920, 13, 17549.38, 169469.38, '深圳市声达电器有限公司'],
      ['P002', 'C001', '2025-08-01', '银行转账', 100000, 13, 11504.42, 111504.42, '杭州树园音响有限公司']
    ];
    for (const p of payments) {
      await conn.query('INSERT INTO payments (id, customerId, paymentDate, settlementMethod, amount, taxRate, tax, total, remittanceUnit) VALUES (?,?,?,?,?,?,?,?,?)', p);
    }

    // 部门
    const departments = [
      [1, '总经办', '查看全部数据，管理所有模块', JSON.stringify(['dashboard','customers','products','orders','returns','production','warehouse','shipping','finance','settings'])],
      [2, '业务部', '业务员独立登录，下单和退货登记', JSON.stringify(['dashboard','orders','returns','customers','products'])],
      [3, '生产部', '分成品和车间，排产管理', JSON.stringify(['dashboard','production','warehouse'])],
      [4, '发货部', '发货及物流管理', JSON.stringify(['dashboard','shipping'])],
      [5, '财务部', '财务对账和收款管理', JSON.stringify(['dashboard','finance'])]
    ];
    for (const d of departments) {
      await conn.query('INSERT INTO departments (id, name, `desc`, permissions) VALUES (?,?,?,?)', d);
    }

    // 用户
    const users = [
      ['boss', '123456', '总经理', 1, '总经办', '系统管理员', '13800000001', 'boss@company.com', '您的入职日期是？', '2020-01-01'],
      ['sales', '123456', '业务员', 2, '业务部', '业务专员', '13800000002', 'sales@company.com', '您的入职日期是？', '2021-03-15'],
      ['production', '123456', '生产管理员', 3, '生产部', '生产主管', '13800000003', 'production@company.com', '您的入职日期是？', '2020-06-20'],
      ['shipping', '123456', '发货管理员', 4, '发货部', '物流主管', '13800000004', 'shipping@company.com', '您的入职日期是？', '2021-09-10'],
      ['finance', '123456', '财务管理员', 5, '财务部', '财务主管', '13800000005', 'finance@company.com', '您的入职日期是？', '2020-11-05']
    ];
    for (const u of users) {
      await conn.query('INSERT INTO users (username, password, name, deptId, deptName, role, phone, email, securityQuestion, securityAnswer) VALUES (?,?,?,?,?,?,?,?,?,?)', u);
    }

    // 序列号
    const seqs = [
      ['customer', 4], ['product', 6], ['order', 4], ['return', 2],
      ['production', 3], ['warehouse', 2], ['shipment', 2], ['payment', 3]
    ];
    for (const [name, value] of seqs) {
      await conn.query('INSERT INTO seq (name, value) VALUES (?,?)', [name, value]);
    }

    console.log('初始数据填充完成');
  } finally {
    conn.release();
  }
}

// ===== API 路由 =====

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// 获取所有数据 (Store.init 用)
app.get('/api/all', async (req, res) => {
  try {
    const result = {};
    for (const table of VALID_TABLES) {
      const config = TABLE_CONFIG[table];
      const [rows] = await pool.query(`SELECT * FROM \`${table}\``);
      result[table] = rows.map(r => processRow(r, config));
    }
    // seq 表转为对象
    const [seqRows] = await pool.query('SELECT * FROM seq');
    result.seq = {};
    seqRows.forEach(r => { result.seq[r.name] = r.value; });
    result.currentDept = 1;
    res.json(result);
  } catch(e) {
    console.error('获取所有数据失败:', e);
    res.status(500).json({ error: e.message });
  }
});

// 新增记录
app.post('/api/:table', async (req, res) => {
  const { table } = req.params;
  if (!VALID_TABLES.includes(table)) return res.status(400).json({ error: '无效的数据表: ' + table });

  const config = TABLE_CONFIG[table];
  const data = { ...req.body };

  try {
    // 如果没有ID，自动生成
    if (data.id === undefined || data.id === '') {
      const seqKey = table.endsWith('s') ? table.slice(0, -1) : table;
      const prefix = SEQ_PREFIX[table] || 'ID';
      const [seqRows] = await pool.query('SELECT value FROM seq WHERE name = ?', [seqKey]);
      let nextVal = 1;
      if (seqRows.length > 0) {
        nextVal = seqRows[0].value;
        await pool.query('UPDATE seq SET value = value + 1 WHERE name = ?', [seqKey]);
      } else {
        await pool.query('INSERT INTO seq (name, value) VALUES (?, ?)', [seqKey, 2]);
      }
      data.id = prefix + String(nextVal).padStart(3, '0');
    }

    // 构建INSERT
    const cols = config.columns.filter(c => data[c] !== undefined);
    const colNames = cols.map(c => '`' + c + '`').join(', ');
    const placeholders = cols.map(() => '?').join(', ');
    const values = cols.map(c => prepareValue(data[c], config.jsonColumns.includes(c)));

    await pool.query(
      `INSERT INTO \`${table}\` (${colNames}) VALUES (${placeholders})`,
      values
    );

    // 如果客户端提供了ID，同步更新seq
    if (data.id && SEQ_PREFIX[table]) {
      const seqKey = table.endsWith('s') ? table.slice(0, -1) : table;
      const prefix = SEQ_PREFIX[table];
      if (data.id.startsWith(prefix)) {
        const num = parseInt(data.id.substring(prefix.length));
        if (!isNaN(num)) {
          const [seqRows] = await pool.query('SELECT value FROM seq WHERE name = ?', [seqKey]);
          if (seqRows.length > 0) {
            if (seqRows[0].value <= num) {
              await pool.query('UPDATE seq SET value = ? WHERE name = ?', [num + 1, seqKey]);
            }
          } else {
            await pool.query('INSERT INTO seq (name, value) VALUES (?, ?)', [seqKey, num + 1]);
          }
        }
      }
    }

    res.json(data);
  } catch(e) {
    console.error(`新增${table}失败:`, e);
    res.status(500).json({ error: e.message });
  }
});

// 更新记录
app.put('/api/:table/:id', async (req, res) => {
  const { table, id } = req.params;
  if (!VALID_TABLES.includes(table)) return res.status(400).json({ error: '无效的数据表' });

  const config = TABLE_CONFIG[table];
  const pk = config.primaryKey;
  const data = { ...req.body };

  try {
    const cols = config.columns.filter(c => data[c] !== undefined && c !== pk);
    if (cols.length === 0) {
      return res.json({ success: true });
    }
    const setClause = cols.map(c => '`' + c + '` = ?').join(', ');
    const values = cols.map(c => prepareValue(data[c], config.jsonColumns.includes(c)));
    values.push(id);

    await pool.query(
      `UPDATE \`${table}\` SET ${setClause} WHERE \`${pk}\` = ?`,
      values
    );

    // 返回更新后的记录
    const [rows] = await pool.query(`SELECT * FROM \`${table}\` WHERE \`${pk}\` = ?`, [id]);
    res.json(rows.length > 0 ? processRow(rows[0], config) : { success: true });
  } catch(e) {
    console.error(`更新${table}失败:`, e);
    res.status(500).json({ error: e.message });
  }
});

// 删除记录
app.delete('/api/:table/:id', async (req, res) => {
  const { table, id } = req.params;
  if (!VALID_TABLES.includes(table)) return res.status(400).json({ error: '无效的数据表' });

  const config = TABLE_CONFIG[table];
  const pk = config.primaryKey;

  try {
    await pool.query(`DELETE FROM \`${table}\` WHERE \`${pk}\` = ?`, [id]);
    res.json({ success: true });
  } catch(e) {
    console.error(`删除${table}失败:`, e);
    res.status(500).json({ error: e.message });
  }
});

// ===== 认证路由 =====

// 登录
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (rows.length === 0) {
      return res.json(null);
    }
    const user = processRow(rows[0], TABLE_CONFIG.users);
    const session = {
      username: user.username,
      name: user.name,
      deptId: user.deptId,
      deptName: user.deptName,
      role: user.role
    };
    res.json(session);
  } catch(e) {
    console.error('登录失败:', e);
    res.status(500).json({ error: e.message });
  }
});

// 更新密码
app.post('/api/auth/update-password', async (req, res) => {
  const { username, newPassword } = req.body;
  try {
    await pool.query('UPDATE users SET password = ? WHERE username = ?', [newPassword, username]);
    res.json({ success: true });
  } catch(e) {
    console.error('更新密码失败:', e);
    res.status(500).json({ error: e.message });
  }
});

// 更新用户信息
app.put('/api/auth/update-user', async (req, res) => {
  const { username, updates } = req.body;
  try {
    // 如果改了用户名，检查是否已存在
    if (updates.username && updates.username !== username) {
      const [existing] = await pool.query('SELECT username FROM users WHERE username = ?', [updates.username]);
      if (existing.length > 0) {
        return res.json({ error: '该用户名已被占用' });
      }
    }

    const setParts = [];
    const values = [];
    const fields = ['username', 'password', 'name', 'role', 'phone', 'email'];
    fields.forEach(f => {
      if (updates[f] !== undefined) {
        setParts.push('`' + f + '` = ?');
        values.push(updates[f]);
      }
    });

    if (setParts.length > 0) {
      values.push(username);
      await pool.query(`UPDATE users SET ${setParts.join(', ')} WHERE username = ?`, values);
    }

    // 返回更新后的用户
    const newUsername = updates.username || username;
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [newUsername]);
    if (rows.length > 0) {
      const user = processRow(rows[0], TABLE_CONFIG.users);
      res.json({ success: true, user });
    } else {
      res.json({ success: true });
    }
  } catch(e) {
    console.error('更新用户信息失败:', e);
    res.status(500).json({ error: e.message });
  }
});

// ===== 部门管理 =====

// 新建部门（含用户）
app.post('/api/departments/create', async (req, res) => {
  const { name, desc, permissions, username, password, userName, role } = req.body;
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // 获取下一个部门ID
    const [maxRows] = await conn.query('SELECT MAX(id) as maxId FROM departments');
    const nextId = (maxRows[0].maxId || 0) + 1;

    await conn.query(
      'INSERT INTO departments (id, name, `desc`, permissions) VALUES (?,?,?,?)',
      [nextId, name, desc, JSON.stringify(permissions)]
    );

    await conn.query(
      'INSERT INTO users (username, password, name, deptId, deptName, role) VALUES (?,?,?,?,?,?)',
      [username, password, userName, nextId, name, role]
    );

    await conn.commit();
    res.json({ success: true, deptId: nextId });
  } catch(e) {
    await conn.rollback();
    console.error('创建部门失败:', e);
    res.status(500).json({ error: e.message });
  } finally {
    conn.release();
  }
});

// 更新部门权限
app.put('/api/departments/:id/permissions', async (req, res) => {
  const { id } = req.params;
  const { permissions } = req.body;
  try {
    await pool.query('UPDATE departments SET permissions = ? WHERE id = ?', [JSON.stringify(permissions), parseInt(id)]);
    res.json({ success: true });
  } catch(e) {
    console.error('更新权限失败:', e);
    res.status(500).json({ error: e.message });
  }
});

// ===== 数据导入 =====
app.post('/api/import', async (req, res) => {
  const data = req.body;
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // 清空所有表
    for (const table of VALID_TABLES) {
      await conn.query(`DELETE FROM \`${table}\``);
    }
    await conn.query('DELETE FROM seq');

    // 逐表导入
    for (const table of VALID_TABLES) {
      if (!data[table]) continue;
      const config = TABLE_CONFIG[table];
      for (const item of data[table]) {
        const cols = config.columns.filter(c => item[c] !== undefined);
        const colNames = cols.map(c => '`' + c + '`').join(', ');
        const placeholders = cols.map(() => '?').join(', ');
        const values = cols.map(c => prepareValue(item[c], config.jsonColumns.includes(c)));
        if (cols.length > 0) {
          await conn.query(`INSERT INTO \`${table}\` (${colNames}) VALUES (${placeholders})`, values);
        }
      }
    }

    // 导入seq
    if (data.seq) {
      for (const [name, value] of Object.entries(data.seq)) {
        await conn.query('INSERT INTO seq (name, value) VALUES (?,?)', [name, value]);
      }
    }

    await conn.commit();
    res.json({ success: true });
  } catch(e) {
    await conn.rollback();
    console.error('导入数据失败:', e);
    res.status(500).json({ error: e.message });
  } finally {
    conn.release();
  }
});

// ===== 启动服务 =====
const PORT = process.env.PORT || 3000;

initDatabase().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n========================================`);
    console.log(`  后端API服务已启动`);
    console.log(`  地址: http://0.0.0.0:${PORT}`);
    console.log(`  健康检查: http://0.0.0.0:${PORT}/api/health`);
    console.log(`========================================\n`);
  });
}).catch(err => {
  console.error('启动失败:', err);
  process.exit(1);
});
