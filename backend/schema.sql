-- ===== 订单与应收账款管理系统 - MySQL 数据库结构 =====
-- 适用于 TiDB Cloud / MySQL 8.0+

-- 客户表
CREATE TABLE IF NOT EXISTS customers (
  id VARCHAR(50) PRIMARY KEY,
  customerName VARCHAR(100),
  phone VARCHAR(30),
  wechat VARCHAR(50),
  companyName VARCHAR(200),
  address VARCHAR(500),
  settlementMethod VARCHAR(50),
  creditLimit DECIMAL(12,2) DEFAULT 0,
  creditLevel VARCHAR(10),
  region VARCHAR(50),
  billingCompany VARCHAR(200),
  taxNumber VARCHAR(50),
  bankName VARCHAR(100),
  bankAccount VARCHAR(50),
  taxLevel VARCHAR(50)
);

-- 产品表
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  productCode VARCHAR(50),
  brand VARCHAR(50),
  model VARCHAR(100),
  guidePrice DECIMAL(10,2) DEFAULT 0,
  category VARCHAR(50),
  image LONGTEXT,
  correspondingModel VARCHAR(50),
  remark TEXT
);

-- 订单表
CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(50) PRIMARY KEY,
  orderNo VARCHAR(50),
  customerId VARCHAR(50),
  salesperson VARCHAR(50),
  date VARCHAR(20),
  warehouse VARCHAR(50),
  settlementMethod VARCHAR(50),
  items JSON,
  status VARCHAR(20)
);

-- 退货表 (returns 是 MySQL 保留字，需加反引号)
CREATE TABLE IF NOT EXISTS `returns` (
  id VARCHAR(50) PRIMARY KEY,
  returnNo VARCHAR(50),
  customerId VARCHAR(50),
  salesperson VARCHAR(50),
  date VARCHAR(20),
  items JSON,
  status VARCHAR(20)
);

-- 排产表
CREATE TABLE IF NOT EXISTS productions (
  id VARCHAR(50) PRIMARY KEY,
  orderNo VARCHAR(50),
  brand VARCHAR(50),
  model VARCHAR(100),
  quantity INT DEFAULT 0,
  unit VARCHAR(20),
  correspondingModel VARCHAR(50),
  workGroup VARCHAR(50),
  completeDate VARCHAR(20),
  remark TEXT,
  status VARCHAR(20)
);

-- 仓库表
CREATE TABLE IF NOT EXISTS warehouse (
  id VARCHAR(50) PRIMARY KEY,
  orderNo VARCHAR(50),
  brand VARCHAR(50),
  model VARCHAR(100),
  quantity INT DEFAULT 0,
  unit VARCHAR(20),
  correspondingModel VARCHAR(50),
  completeDate VARCHAR(20),
  remark TEXT,
  status VARCHAR(20)
);

-- 发货表
CREATE TABLE IF NOT EXISTS shipments (
  id VARCHAR(50) PRIMARY KEY,
  orderNo VARCHAR(50),
  brand VARCHAR(50),
  model VARCHAR(100),
  quantity INT DEFAULT 0,
  unit VARCHAR(20),
  shipDate VARCHAR(20),
  trackingNo VARCHAR(100),
  freight DECIMAL(10,2) DEFAULT 0,
  trackingPhoto LONGTEXT,
  status VARCHAR(20)
);

-- 收款表
CREATE TABLE IF NOT EXISTS payments (
  id VARCHAR(50) PRIMARY KEY,
  customerId VARCHAR(50),
  paymentDate VARCHAR(20),
  settlementMethod VARCHAR(50),
  amount DECIMAL(12,2) DEFAULT 0,
  taxRate DECIMAL(5,2) DEFAULT 13,
  tax DECIMAL(12,2) DEFAULT 0,
  total DECIMAL(12,2) DEFAULT 0,
  remittanceUnit VARCHAR(200)
);

-- 部门表 (desc 是保留字)
CREATE TABLE IF NOT EXISTS departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  `desc` VARCHAR(200),
  permissions JSON
);

-- 用户表
CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(50) PRIMARY KEY,
  password VARCHAR(100),
  name VARCHAR(50),
  deptId INT,
  deptName VARCHAR(50),
  role VARCHAR(50),
  phone VARCHAR(30),
  email VARCHAR(100),
  securityQuestion VARCHAR(200),
  securityAnswer VARCHAR(200)
);

-- 序列表 (自增ID计数器)
CREATE TABLE IF NOT EXISTS seq (
  name VARCHAR(50) PRIMARY KEY,
  value INT DEFAULT 1
);
