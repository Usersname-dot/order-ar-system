// ==================== 数据管理层 (data.js) ====================
// 云端数据库版 - 通过API与MySQL数据库交互
// 内存缓存 + 异步API同步

const API_BASE = window.API_BASE_URL || '';

// API请求工具函数
async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

async function apiPut(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

async function apiDelete(path) {
  const res = await fetch(`${API_BASE}${path}`, { method: 'DELETE' });
  return res.json();
}

// 异步同步到API（失败时静默处理，仅控制台报错）
function syncPost(table, item) {
  fetch(`${API_BASE}/api/${table}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  }).catch(e => console.error(`同步新增${table}失败:`, e));
}

function syncPut(table, id, updates) {
  fetch(`${API_BASE}/api/${table}/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  }).catch(e => console.error(`同步更新${table}失败:`, e));
}

function syncDelete(table, id) {
  fetch(`${API_BASE}/api/${table}/${encodeURIComponent(id)}`, {
    method: 'DELETE'
  }).catch(e => console.error(`同步删除${table}失败:`, e));
}

const Store = {
  data: null,
  loading: false,

  // ===== 初始化：从API加载全部数据 =====
  async init() {
    this.loading = true;
    try {
      const res = await fetch(`${API_BASE}/api/all`);
      if (!res.ok) throw new Error('API返回错误: ' + res.status);
      this.data = await res.json();
      // 确保所有表存在
      if (!this.data.seq) this.data.seq = {};
      if (!this.data.currentDept) this.data.currentDept = 1;
    } catch(e) {
      console.error('从API加载数据失败:', e);
      // 降级：使用localStorage缓存
      const stored = localStorage.getItem('order_ar_system_data');
      if (stored) {
        try { this.data = JSON.parse(stored); } catch(_) { this.data = this.defaultData(); }
      } else {
        this.data = this.defaultData();
      }
    } finally {
      this.loading = false;
    }
  },

  // 刷新数据（重新从API加载）
  async refresh() {
    await this.init();
  },

  // save() 已废弃 - 数据通过API自动同步
  // 保留方法以兼容旧代码调用
  save() {
    // 不再需要手动保存，数据变更时已自动同步到API
  },

  // 重置数据
  async reset() {
    try {
      await apiPost('/api/import', this.defaultData());
      await this.init();
    } catch(e) {
      console.error('重置数据失败:', e);
      this.data = this.defaultData();
    }
  },

  // ===== 用户认证 =====
  SESSION_KEY: 'order_ar_session',

  async login(username, password) {
    try {
      const session = await apiPost('/api/auth/login', { username, password });
      if (session) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
        return session;
      }
    } catch(e) {
      console.error('登录失败:', e);
    }
    return null;
  },

  logout() { localStorage.removeItem(this.SESSION_KEY); },

  getSession() {
    const s = localStorage.getItem(this.SESSION_KEY);
    if (!s) return null;
    try { return JSON.parse(s); } catch(e) { return null; }
  },

  getCurrentDept() {
    const session = this.getSession();
    return session ? session.deptId : 1;
  },

  // ===== 密码重置 / 验证码管理 =====
  VERIFY_KEY: 'order_ar_verify',

  // 查找用户（从内存缓存）
  findUserByUsername(username) {
    const user = (this.data.users || []).find(u => u.username === username);
    if (user) return { ...user, accountType: 'employee' };
    return null;
  },

  // 根据手机号查找客户
  findCustomerByPhone(phone) {
    const customer = (this.data.customers || []).find(c => c.phone === phone);
    if (customer) return { ...customer, accountType: 'customer' };
    return null;
  },

  // 生成验证码（本地存储，临时数据）
  generateVerifyCode(username, channel) {
    const store = this._getVerifyStore();
    const key = username + '_' + channel;
    const now = Date.now();

    if (store.locks && store.locks[username] && store.locks[username].until > now) {
      return { error: 'locked', until: store.locks[username].until };
    }

    if (store.codes && store.codes[key] && store.codes[key].sentAt && now - store.codes[key].sentAt < 60000) {
      return { error: 'cooldown', remaining: 60 - Math.floor((now - store.codes[key].sentAt) / 1000) };
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expireMs = channel === 'sms' ? 5 * 60 * 1000 : 10 * 60 * 1000;

    if (!store.codes) store.codes = {};
    if (!store.attempts) store.attempts = {};
    store.codes[key] = { code, sentAt: now, expiresAt: now + expireMs, channel };
    if (!store.attempts[username]) store.attempts[username] = 0;

    this._saveVerifyStore(store);
    return { code, expiresAt: now + expireMs };
  },

  // 校验验证码
  verifyCode(username, code, channel) {
    const store = this._getVerifyStore();
    const key = username + '_' + channel;
    const now = Date.now();

    if (store.locks && store.locks[username] && store.locks[username].until > now) {
      return { error: 'locked', until: store.locks[username].until };
    }

    const entry = store.codes && store.codes[key];
    if (!entry) return { error: 'no_code' };
    if (now > entry.expiresAt) return { error: 'expired' };

    if (entry.code !== String(code).trim()) {
      store.attempts[username] = (store.attempts[username] || 0) + 1;
      if (store.attempts[username] >= 5) {
        if (!store.locks) store.locks = {};
        store.locks[username] = { until: now + 10 * 60 * 1000, reason: '验证码错误次数过多' };
        this._saveVerifyStore(store);
        return { error: 'locked', until: store.locks[username].until };
      }
      this._saveVerifyStore(store);
      return { error: 'wrong', attempts: store.attempts[username], remaining: 5 - store.attempts[username] };
    }

    store.codes[key] = null;
    store.attempts[username] = 0;
    this._saveVerifyStore(store);
    return { success: true };
  },

  // 更新密码（异步，写入数据库）
  async updatePassword(username, newPassword) {
    try {
      const result = await apiPost('/api/auth/update-password', { username, newPassword });
      // 同步更新内存
      const user = (this.data.users || []).find(u => u.username === username);
      if (user) user.password = newPassword;
      return result.success === true;
    } catch(e) {
      console.error('更新密码失败:', e);
      return false;
    }
  },

  // 更新用户信息（异步，写入数据库）
  async updateUser(username, updates) {
    try {
      const result = await apiPut('/api/auth/update-user', { username, updates });
      if (result.error) return result;

      // 同步更新内存
      const user = (this.data.users || []).find(u => u.username === username);
      if (user) {
        if (updates.username && updates.username !== username) user.username = updates.username;
        if (updates.password) user.password = updates.password;
        if (updates.name) user.name = updates.name;
        if (updates.role !== undefined) user.role = updates.role;
        if (updates.phone !== undefined) user.phone = updates.phone;
        if (updates.email !== undefined) user.email = updates.email;
      }

      // 更新 session
      const session = this.getSession();
      if (session && (session.username === username || (result.user && session.username === username))) {
        const newUsername = updates.username || username;
        session.username = newUsername;
        if (updates.name) session.name = updates.name;
        if (updates.role !== undefined) session.role = updates.role;
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      }
      return result;
    } catch(e) {
      console.error('更新用户信息失败:', e);
      return { error: '网络错误，请重试' };
    }
  },

  // 检查密码强度
  checkPasswordStrength(password) {
    if (!password || password.length < 8) return { level: 0, label: '弱', tips: '密码至少8位' };
    let score = 0;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;
    if (score < 3) return { level: 1, label: '弱', tips: '建议加入大写字母、数字和特殊符号' };
    if (score < 4) return { level: 2, label: '中', tips: '建议加入特殊符号增强安全性' };
    return { level: 3, label: '强', tips: '密码强度合格' };
  },

  // 验证密码是否符合规则
  validatePassword(password) {
    if (!password || password.length < 8) return { valid: false, msg: '密码长度至少8位' };
    if (!/[a-z]/.test(password)) return { valid: false, msg: '密码需包含小写字母' };
    if (!/[A-Z]/.test(password)) return { valid: false, msg: '密码需包含大写字母' };
    if (!/[0-9]/.test(password)) return { valid: false, msg: '密码需包含数字' };
    return { valid: true };
  },

  // 客户业务信息二次校验
  verifyCustomerBusiness(customerId, companyName, taxNumber) {
    const c = this.getById('customers', customerId);
    if (!c) return { error: '客户不存在' };
    if (companyName && c.companyName !== companyName && c.billingCompany !== companyName) return { error: '公司名称不匹配' };
    if (taxNumber && c.taxNumber !== taxNumber) return { error: '税号不匹配' };
    return { success: true };
  },

  _getVerifyStore() {
    const s = localStorage.getItem(this.VERIFY_KEY);
    return s ? JSON.parse(s) : { codes: {}, attempts: {}, locks: {} };
  },

  _saveVerifyStore(store) { localStorage.setItem(this.VERIFY_KEY, JSON.stringify(store)); },

  getDeptPermissions(deptId) {
    const dept = (this.data.departments || []).find(d => d.id === deptId);
    return dept ? dept.permissions : [];
  },

  defaultData() {
    return {
      customers: [
        { id: 'C001', customerName: '杭州树园音响有限公司', phone: '13800138001', wechat: 'tree_audio', companyName: '杭州树园音响有限公司', address: '浙江省杭州市西湖区文三路100号', settlementMethod: '月结30天', creditLimit: 500000, creditLevel: 'A级', region: '浙江', billingCompany: '杭州树园音响有限公司', taxNumber: '91330106MA2ABC123X', bankName: '中国工商银行杭州西湖支行', bankAccount: '1202060909900123456', taxLevel: '一般纳税人' },
        { id: 'C002', customerName: '上海音妙电子科技', phone: '13900139002', wechat: 'yinmiao', companyName: '上海音妙电子科技有限公司', address: '上海市浦东新区张江高科技园区', settlementMethod: '月结60天', creditLimit: 300000, creditLevel: 'B级', region: '上海', billingCompany: '上海音妙电子科技有限公司', taxNumber: '91310115MA1XYZ4567', bankName: '招商银行上海张江支行', bankAccount: '1219038765432109876', taxLevel: '一般纳税人' },
        { id: 'C003', customerName: '深圳声达电器', phone: '13700137003', wechat: 'shengda2024', companyName: '深圳市声达电器有限公司', address: '广东省深圳市宝安区西乡街道', settlementMethod: '现结', creditLimit: 200000, creditLevel: 'A级', region: '广东', billingCompany: '深圳市声达电器有限公司', taxNumber: '91440300MA5DEF7890', bankName: '中国建设银行深圳宝安支行', bankAccount: '4405018765432101234', taxLevel: '一般纳税人' }
      ],
      products: [
        { id: 'P001', productCode: 'SP-X8', brand: '声霸', model: 'X8 Pro', guidePrice: 2999, category: '音响', image: '', correspondingModel: 'X8-P', remark: '旗舰款' },
        { id: 'P002', productCode: 'SP-S5', brand: '声霸', model: 'S5 Mini', guidePrice: 1299, category: '音响', image: '', correspondingModel: 'S5-M', remark: '迷你便携款' },
        { id: 'P003', productCode: 'SP-B12', brand: '声霸', model: 'B12 Bass', guidePrice: 4599, category: '低音炮', image: '', correspondingModel: 'B12', remark: '重低音' },
        { id: 'P004', productCode: 'SP-A3', brand: '声霸', model: 'A3 Air', guidePrice: 899, category: '配件', image: '', correspondingModel: 'A3', remark: '无线适配器' },
        { id: 'P005', productCode: 'YH-T10', brand: '音海', model: 'T10 Studio', guidePrice: 1899, category: '监听耳机', image: '', correspondingModel: 'T10', remark: '专业监听' }
      ],
      orders: [
        { id: 'O001', orderNo: 'DD20250806001', customerId: 'C001', salesperson: '张三', date: '2025-08-06', warehouse: '杭州仓', settlementMethod: '月结30天', items: [ { brand: '声霸', model: 'X8 Pro', quantity: 50, unit: '台', price: 2999, correspondingModel: 'X8-P', remark: '加急' } ], status: '待排产' },
        { id: 'O002', orderNo: 'DD20250806002', customerId: 'C002', salesperson: '李四', date: '2025-08-06', warehouse: '上海仓', settlementMethod: '月结60天', items: [ { brand: '声霸', model: 'S5 Mini', quantity: 100, unit: '台', price: 1299, correspondingModel: 'S5-M', remark: '' }, { brand: '声霸', model: 'B12 Bass', quantity: 30, unit: '台', price: 4599, correspondingModel: 'B12', remark: '' } ], status: '待排产' },
        { id: 'O003', orderNo: 'DD20250805001', customerId: 'C003', salesperson: '王五', date: '2025-08-05', warehouse: '深圳仓', settlementMethod: '现结', items: [ { brand: '音海', model: 'T10 Studio', quantity: 80, unit: '台', price: 1899, correspondingModel: 'T10', remark: '' } ], status: '生产中' }
      ],
      returns: [
        { id: 'R001', returnNo: 'TH20250804001', customerId: 'C001', salesperson: '张三', date: '2025-08-04', items: [ { brand: '声霸', model: 'S5 Mini', quantity: 5, unit: '台', correspondingModel: 'S5-M', remark: '外观瑕疵' } ], status: '已处理' }
      ],
      productions: [
        { id: 'PR001', orderNo: 'DD20250805001', brand: '音海', model: 'T10 Studio', quantity: 80, unit: '台', correspondingModel: 'T10', workGroup: '车间A组', completeDate: '2025-08-12', remark: '优先排产', status: '进行中' },
        { id: 'PR002', orderNo: 'DD20250806001', brand: '声霸', model: 'X8 Pro', quantity: 50, unit: '台', correspondingModel: 'X8-P', workGroup: '车间B组', completeDate: '2025-08-15', remark: '加急订单', status: '待开始' }
      ],
      warehouse: [
        { id: 'W001', orderNo: 'DD20250805001', brand: '音海', model: 'T10 Studio', quantity: 80, unit: '台', correspondingModel: 'T10', completeDate: '2025-08-12', remark: '已入库', status: '在库' }
      ],
      shipments: [
        { id: 'S001', orderNo: 'DD20250804001', brand: '声霸', model: 'A3 Air', quantity: 200, unit: '个', shipDate: '2025-08-04', trackingNo: 'SF1234567890', freight: 350, trackingPhoto: '', status: '已发货' }
      ],
      payments: [
        { id: 'P001', customerId: 'C003', paymentDate: '2025-08-05', settlementMethod: '银行转账', amount: 151920, taxRate: 13, tax: 17549.38, total: 169469.38, remittanceUnit: '深圳市声达电器有限公司' },
        { id: 'P002', customerId: 'C001', paymentDate: '2025-08-01', settlementMethod: '银行转账', amount: 100000, taxRate: 13, tax: 11504.42, total: 111504.42, remittanceUnit: '杭州树园音响有限公司' }
      ],
      departments: [
        { id: 1, name: '总经办', desc: '查看全部数据，管理所有模块', permissions: ['dashboard','customers','products','orders','returns','production','warehouse','shipping','finance','settings'] },
        { id: 2, name: '业务部', desc: '业务员独立登录，下单和退货登记', permissions: ['dashboard','orders','returns','customers','products'] },
        { id: 3, name: '生产部', desc: '分成品和车间，排产管理', permissions: ['dashboard','production','warehouse'] },
        { id: 4, name: '发货部', desc: '发货及物流管理', permissions: ['dashboard','shipping'] },
        { id: 5, name: '财务部', desc: '财务对账和收款管理', permissions: ['dashboard','finance'] }
      ],
      users: [
        { username: 'boss', password: '123456', name: '总经理', deptId: 1, deptName: '总经办', role: '系统管理员', phone: '13800000001', email: 'boss@company.com', securityQuestion: '您的入职日期是？', securityAnswer: '2020-01-01' },
        { username: 'sales', password: '123456', name: '业务员', deptId: 2, deptName: '业务部', role: '业务专员', phone: '13800000002', email: 'sales@company.com', securityQuestion: '您的入职日期是？', securityAnswer: '2021-03-15' },
        { username: 'production', password: '123456', name: '生产管理员', deptId: 3, deptName: '生产部', role: '生产主管', phone: '13800000003', email: 'production@company.com', securityQuestion: '您的入职日期是？', securityAnswer: '2020-06-20' },
        { username: 'shipping', password: '123456', name: '发货管理员', deptId: 4, deptName: '发货部', role: '物流主管', phone: '13800000004', email: 'shipping@company.com', securityQuestion: '您的入职日期是？', securityAnswer: '2021-09-10' },
        { username: 'finance', password: '123456', name: '财务管理员', deptId: 5, deptName: '财务部', role: '财务主管', phone: '13800000005', email: 'finance@company.com', securityQuestion: '您的入职日期是？', securityAnswer: '2020-11-05' }
      ],
      currentDept: 1,
      seq: { customer: 4, product: 6, order: 4, return: 2, production: 3, warehouse: 2, shipment: 2, payment: 3 }
    };
  },

  // ===== Generic CRUD =====
  getAll(table) { return this.data[table] || []; },

  getById(table, id) {
    const items = this.data[table] || [];
    return items.find(x => x.id == id || String(x.id) === String(id));
  },

  add(table, item) {
    const seqKey = table.endsWith('s') ? table.slice(0, -1) : table;
    if (item.id === undefined || item.id === '') {
      const prefix = this.getSeqPrefix(table);
      item.id = prefix + String(this.data.seq[seqKey] || 1).padStart(3, '0');
      this.data.seq[seqKey] = (this.data.seq[seqKey] || 1) + 1;
    }
    if (!this.data[table]) this.data[table] = [];
    this.data[table].push(item);
    // 异步同步到API
    syncPost(table, item);
    return item;
  },

  update(table, id, updates) {
    const items = this.data[table];
    if (!items) return null;
    const idx = items.findIndex(x => String(x.id) === String(id));
    if (idx >= 0) {
      items[idx] = { ...items[idx], ...updates, id: items[idx].id };
      // 异步同步到API
      syncPut(table, id, updates);
      return items[idx];
    }
    return null;
  },

  remove(table, id) {
    const items = this.data[table];
    if (!items) return null;
    const idx = items.findIndex(x => String(x.id) === String(id));
    if (idx >= 0) {
      const removed = items.splice(idx, 1)[0];
      // 异步同步到API
      syncDelete(table, id);
      return removed;
    }
    return null;
  },

  getSeqPrefix(table) {
    const map = { customers: 'C', products: 'P', orders: 'O', returns: 'R', productions: 'PR', warehouse: 'W', shipments: 'S', payments: 'P' };
    return map[table] || 'ID';
  },

  // ===== 部门管理（异步，写入数据库）=====
  async createDepartment(data) {
    try {
      const result = await apiPost('/api/departments/create', data);
      if (result.success) {
        // 同步更新内存
        const newDept = { id: result.deptId, name: data.name, desc: data.desc, permissions: data.permissions };
        if (!this.data.departments) this.data.departments = [];
        this.data.departments.push(newDept);
        if (!this.data.users) this.data.users = [];
        this.data.users.push({
          username: data.username, password: data.password,
          name: data.userName, deptId: result.deptId, deptName: data.name, role: data.role
        });
      }
      return result;
    } catch(e) {
      console.error('创建部门失败:', e);
      return { error: '网络错误' };
    }
  },

  async updatePermissions(deptId, permissions) {
    try {
      const result = await apiPut(`/api/departments/${deptId}/permissions`, { permissions });
      if (result.success) {
        // 同步更新内存
        const dept = (this.data.departments || []).find(d => d.id === deptId);
        if (dept) dept.permissions = permissions;
      }
      return result;
    } catch(e) {
      console.error('更新权限失败:', e);
      return { error: '网络错误' };
    }
  },

  // ===== 数据导入 =====
  async importData(data) {
    try {
      await apiPost('/api/import', data);
      this.data = data;
    } catch(e) {
      console.error('导入数据失败:', e);
      this.data = data;
    }
  },

  // ===== Business Logic =====
  getOrderTotal(order) {
    if (!order.items) return 0;
    return order.items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0);
  },

  getCustomerBalance(customerId) {
    const orders = this.data.orders.filter(o => o.customerId === customerId);
    const returns = this.data.returns.filter(r => r.customerId === customerId);
    const payments = this.data.payments.filter(p => p.customerId === customerId);
    const totalOrders = orders.reduce((s, o) => s + this.getOrderTotal(o), 0);
    const totalReturns = returns.reduce((s, r) => {
      return s + (r.items || []).reduce((ss, item) => ss + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0);
    }, 0);
    const totalPayments = payments.reduce((s, p) => s + (Number(p.total) || 0), 0);
    return {
      totalOrders,
      totalReturns,
      totalPayments,
      receivable: totalOrders - totalReturns - totalPayments
    };
  },

  getStats() {
    const orders = this.data.orders;
    const customers = this.data.customers;
    const products = this.data.products;
    const returns = this.data.returns;
    const productions = this.data.productions;
    const shipments = this.data.shipments;

    const totalSales = orders.reduce((s, o) => s + this.getOrderTotal(o), 0);
    const totalReceivable = customers.reduce((s, c) => s + Math.max(0, this.getCustomerBalance(c.id).receivable), 0);
    const totalReceived = this.data.payments.reduce((s, p) => s + (Number(p.total) || 0), 0);
    const pendingOrders = orders.filter(o => o.status === '待排产' || o.status === '待发货').length;
    const productionCount = productions.filter(p => p.status === '进行中' || p.status === '待开始').length;
    const shippingCount = shipments.length;

    return {
      totalSales,
      totalReceivable,
      totalReceived,
      pendingOrders,
      productionCount,
      shippingCount,
      customerCount: customers.length,
      productCount: products.length,
      returnCount: returns.length,
      recentOrders: orders.slice(-5).reverse()
    };
  }
};
