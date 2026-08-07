// ==================== 应用核心 (app.js) ====================

// ===== 导航配置 =====
const NAV_CONFIG = [
  {
    group: '工作台',
    items: [
      { id: 'dashboard', text: '工作台', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>' }
    ]
  },
  {
    group: '基础数据',
    items: [
      { id: 'customers', text: '客户建档', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>' },
      { id: 'products', text: '产品建档', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>' }
    ]
  },
  {
    group: '业务管理',
    items: [
      { id: 'orders', text: '业务下单', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
      { id: 'returns', text: '退货登记', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>' }
    ]
  },
  {
    group: '生产物流',
    items: [
      { id: 'production', text: '订单排产', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h6a4 4 0 004-4V8M22 20h-6a4 4 0 01-4-4V8"/><rect x="2" y="2" width="20" height="6" rx="1"/></svg>' },
      { id: 'warehouse', text: '成品仓库', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { id: 'shipping', text: '发货及物流', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' }
    ]
  },
  {
    group: '财务管理',
    items: [
      { id: 'finance', text: '财务对账', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>' }
    ]
  },
  {
    group: '系统',
    items: [
      { id: 'settings', text: '系统设置', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>' },
      { id: 'profile', text: '我的', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' }
    ]
  }
];

// 移动端底部导航 (精选5个，最后一个是"我的")
const BOTTOM_NAV = ['dashboard', 'orders', 'production', 'shipping', 'profile'];

// ===== 全局状态 =====
const App = {
  currentPage: 'dashboard',
  searchQuery: '',
  currentUser: null,

  async init() {
    // 显示加载状态
    const loadingEl = document.getElementById('loginScreen');
    if (loadingEl) {
      const loadingMsg = document.createElement('div');
      loadingMsg.id = 'appLoadingMsg';
      loadingMsg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;color:#1677ff;font-size:16px;';
      loadingMsg.textContent = '正在连接数据库...';
      document.body.appendChild(loadingMsg);
    }

    await Store.init();

    const msgEl = document.getElementById('appLoadingMsg');
    if (msgEl) msgEl.remove();

    this.bindLoginEvents();
    this.bindEvents();
    window.addEventListener('hashchange', () => this.route());
    window.addEventListener('resize', () => this.handleResize());

    // 检查登录状态
    this.currentUser = Store.getSession();
    if (!this.currentUser) {
      this.showLogin();
      return;
    }
    this.showApp();
    this.renderNav();
    this.renderBottomNav();
    this.updateUserCard();
    this.route();
    this.handleResize();
  },

  // ===== 登录界面 =====
  showLogin() {
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('app').style.setProperty('display', 'none', 'important');
  },

  showApp() {
    document.getElementById('loginScreen').classList.add('hidden');
    const appEl = document.getElementById('app');
    appEl.style.setProperty('display', 'flex', 'important');
  },

  bindLoginEvents() {
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const errorDiv = document.getElementById('loginError');

    const doLogin = async () => {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      if (!username || !password) {
        errorDiv.textContent = '请输入用户名和密码';
        return;
      }
      loginBtn.disabled = true;
      loginBtn.textContent = '登录中...';
      const session = await Store.login(username, password);
      loginBtn.disabled = false;
      loginBtn.textContent = '登录';
      if (session) {
        errorDiv.textContent = '';
        this.currentUser = session;
        this.showApp();
        this.renderNav();
        this.renderBottomNav();
        this.updateUserCard();
        this.route();
        this.handleResize();
        UI.toast('欢迎回来，' + session.name, 'success');
      } else {
        errorDiv.textContent = '用户名或密码错误，请重试';
        passwordInput.value = '';
        passwordInput.focus();
      }
    };

    if (!loginBtn._bound) {
      loginBtn._bound = true;
      loginBtn.addEventListener('click', doLogin);
      usernameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') passwordInput.focus(); });
      passwordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
    }

    // 忘记密码入口
    const forgotLink = document.getElementById('forgotPwdLink');
    if (forgotLink && !forgotLink._bound) {
      forgotLink._bound = true;
      forgotLink.addEventListener('click', () => ForgotPwd.open());
    }
  },

  logout() {
    Store.logout();
    this.currentUser = null;
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').textContent = '';
    this.showLogin();
    UI.toast('已安全退出登录', 'info');
  },

  // ===== 更新用户卡片 =====
  updateUserCard() {
    if (!this.currentUser) return;
    const avatarMap = { '总经理': '总', '业务员': '业', '生产管理员': '产', '发货管理员': '发', '财务管理员': '财' };
    document.getElementById('userAvatar').textContent = avatarMap[this.currentUser.name] || this.currentUser.name.charAt(0);
    document.getElementById('userName').textContent = this.currentUser.deptName;
    document.getElementById('userRole').textContent = this.currentUser.name;
  },

  // ===== 获取当前用户权限 =====
  getPermissions() {
    if (!this.currentUser) return [];
    const perms = Store.getDeptPermissions(this.currentUser.deptId);
    // 'profile' 页面所有人都能访问
    if (!perms.includes('profile')) perms.push('profile');
    return perms;
  },

  // ===== 路由 =====
  route() {
    const perms = this.getPermissions();
    const hash = window.location.hash.slice(1) || 'dashboard';
    // 权限检查：无权限则跳转到工作台
    if (!perms.includes(hash)) {
      this.currentPage = 'dashboard';
      window.location.hash = 'dashboard';
      return;
    }
    this.currentPage = hash;
    this.updateNavActive(hash);
    this.renderPage(hash);
    this.updateBreadcrumb(hash);
    // 移动端关闭侧边栏
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('sidebarOverlay').classList.remove('show');
    // 滚动到顶部
    document.getElementById('content').scrollTop = 0;
  },

  // ===== 导航渲染 =====
  renderNav() {
    const nav = document.getElementById('sidebarNav');
    const perms = this.getPermissions();
    let html = '';
    NAV_CONFIG.forEach(group => {
      const visibleItems = group.items.filter(item => perms.includes(item.id));
      if (visibleItems.length === 0) return;
      html += `<div class="nav-group-title">${group.group}</div>`;
      visibleItems.forEach(item => {
        html += `
          <div class="nav-item" data-page="${item.id}">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-text">${item.text}</span>
          </div>`;
      });
    });
    nav.innerHTML = html;

    nav.querySelectorAll('.nav-item').forEach(el => {
      el.addEventListener('click', () => {
        window.location.hash = el.dataset.page;
      });
    });
  },

  renderBottomNav() {
    const nav = document.getElementById('bottomNav');
    const perms = this.getPermissions();
    let html = '';
    BOTTOM_NAV.forEach(id => {
      if (!perms.includes(id)) return;
      const group = NAV_CONFIG.find(g => g.items.some(i => i.id === id));
      const item = group.items.find(i => i.id === id);
      html += `
        <div class="bottom-nav-item" data-page="${id}">
          ${item.icon}
          <span>${item.text}</span>
        </div>`;
    });
    nav.innerHTML = html;
    nav.querySelectorAll('.bottom-nav-item').forEach(el => {
      el.addEventListener('click', () => {
        window.location.hash = el.dataset.page;
      });
    });
  },

  updateNavActive(page) {
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
    document.querySelectorAll('.bottom-nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  },

  updateBreadcrumb(page) {
    const names = {};
    NAV_CONFIG.forEach(g => g.items.forEach(i => names[i.id] = i.text));
    document.getElementById('breadcrumb').textContent = names[page] || '工作台';
  },

  // ===== 页面渲染分发 =====
  renderPage(page) {
    const content = document.getElementById('content');
    const renderers = {
      dashboard: () => Page.dashboard(),
      customers: () => Page.customers(),
      products: () => Page.products(),
      orders: () => Page.orders(),
      returns: () => Page.returns(),
      production: () => Page.production(),
      warehouse: () => Page.warehouse(),
      shipping: () => Page.shipping(),
      finance: () => Page.finance(),
      settings: () => Page.settings(),
      profile: () => Page.profile()
    };
    content.innerHTML = (renderers[page] || renderers.dashboard)();
    this.bindPageEvents(page);
  },

  // ===== 事件绑定 =====
  bindEvents() {
    // 侧边栏折叠(桌面)
    document.getElementById('collapseBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });
    // 菜单开关(移动)
    document.getElementById('menuToggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('show');
      document.getElementById('sidebarOverlay').classList.toggle('show');
    });
    document.getElementById('sidebarOverlay').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('show');
      document.getElementById('sidebarOverlay').classList.remove('show');
    });
    // 模态框关闭
    document.getElementById('modalClose').addEventListener('click', () => UI.closeModal());
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') UI.closeModal();
    });
    // 确认框
    document.getElementById('confirmCancel').addEventListener('click', () => UI.closeConfirm());
    document.getElementById('confirmOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'confirmOverlay') UI.closeConfirm();
    });
    // 刷新
    document.getElementById('refreshBtn').addEventListener('click', async () => {
      UI.toast('正在同步数据...', 'info');
      await Store.refresh();
      this.route();
      UI.toast('数据已刷新', 'success');
    });
    // 搜索
    const searchInput = document.getElementById('globalSearch');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim();
      this.renderPage(this.currentPage);
    });
    // 退出登录
    document.getElementById('logoutBtn').addEventListener('click', () => {
      UI.confirm('确定要退出登录吗？', () => this.logout(), '退出登录');
    });
    // 点击用户头像/信息 → 打开个人信息编辑
    document.getElementById('userCard').addEventListener('click', (e) => {
      // 避免点到退出按钮
      if (e.target.closest('#logoutBtn')) return;
      ProfileForm.open();
    });
  },

  bindPageEvents(page) {
    if (page === 'profile') {
      const installBtn = document.getElementById('pwaInstallBtn');
      const installHint = document.getElementById('pwaInstalledHint');
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

      if (isStandalone) {
        // 已安装
        if (installBtn) installBtn.style.display = 'none';
        if (installHint) installHint.style.display = 'flex';
      } else {
        // 检测 iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
          // iOS 不支持 beforeinstallprompt，显示引导提示
          if (installBtn) {
            installBtn.style.display = 'flex';
            installBtn.querySelector('span').textContent = '添加到主屏幕';
            installBtn.addEventListener('click', () => {
              UI.modal('安装引导', '<div style="padding:8px 0;line-height:1.8;font-size:15px;">请点击浏览器底部的<strong>分享按钮</strong>（方框+向上箭头图标），然后选择<strong>「添加到主屏幕」</strong>即可安装为独立应用。</div>', '<button class="btn btn-primary" onclick="UI.closeModal()">知道了</button>');
            });
          }
        } else if (deferredPrompt) {
          // Android/桌面端，支持直接安装
          if (installBtn) {
            installBtn.style.display = 'flex';
            installBtn.addEventListener('click', () => triggerPWAInstall());
          }
        } else {
          // 还没触发 beforeinstallprompt，绑定事件等触发后显示
          if (installBtn) {
            installBtn.addEventListener('click', () => triggerPWAInstall());
          }
        }
      }
    }
  },

  handleResize() {
    const w = window.innerWidth;
    const bottomNav = document.getElementById('bottomNav');
    const sidebar = document.getElementById('sidebar');
    if (w <= 768) {
      bottomNav.classList.add('show');
      sidebar.classList.remove('collapsed');
    } else {
      bottomNav.classList.remove('show');
      sidebar.classList.remove('show');
      document.getElementById('sidebarOverlay').classList.remove('show');
    }
  }
};

// ===== 忘记密码 / 密码重置流程 =====
const ForgotPwd = {
  state: { step: 1, username: '', accountType: 'employee', verifyMethod: 'sms', user: null, countdownTimer: null },

  open() {
    this.state = { step: 1, username: '', accountType: 'employee', verifyMethod: 'sms', user: null, countdownTimer: null };
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('forgotScreen').classList.remove('hidden');
    document.getElementById('forgotUsername').value = '';
    document.getElementById('forgotError1').textContent = '';
    document.getElementById('forgotError2').textContent = '';
    document.getElementById('forgotError3').textContent = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('pwdStrength').innerHTML = '';
    this.goStep(1);
    this.bindEvents();
  },

  close() {
    if (this.state.countdownTimer) { clearInterval(this.state.countdownTimer); this.state.countdownTimer = null; }
    document.getElementById('forgotScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
  },

  bindEvents() {
    // 返回按钮
    const backBtn = document.getElementById('forgotBackBtn');
    if (!backBtn._bound) {
      backBtn._bound = true;
      backBtn.addEventListener('click', () => this.close());
    }

    // 单选切换
    const radioEmp = document.getElementById('radioEmployee');
    const radioCust = document.getElementById('radioCustomer');
    if (!radioEmp._bound) {
      radioEmp._bound = true;
      radioEmp.addEventListener('click', () => {
        radioEmp.classList.add('active'); radioCust.classList.remove('active');
        this.state.accountType = 'employee';
      });
      radioCust.addEventListener('click', () => {
        radioCust.classList.add('active'); radioEmp.classList.remove('active');
        this.state.accountType = 'customer';
      });
    }

    // 步骤1 下一步
    const step1Btn = document.getElementById('step1NextBtn');
    if (!step1Btn._bound) {
      step1Btn._bound = true;
      step1Btn.addEventListener('click', () => this.handleStep1());
      document.getElementById('forgotUsername').addEventListener('keydown', (e) => { if (e.key === 'Enter') this.handleStep1(); });
    }

    // 步骤2
    const step2Back = document.getElementById('step2BackBtn');
    const step2Next = document.getElementById('step2NextBtn');
    if (!step2Back._bound) {
      step2Back._bound = true;
      step2Back.addEventListener('click', () => this.goStep(1));
      step2Next.addEventListener('click', () => this.handleStep2());
    }

    // 步骤3
    const step3Back = document.getElementById('step3BackBtn');
    const step3Submit = document.getElementById('step3SubmitBtn');
    const newPwdInput = document.getElementById('newPassword');
    if (!step3Back._bound) {
      step3Back._bound = true;
      step3Back.addEventListener('click', () => this.goStep(2));
      step3Submit.addEventListener('click', () => this.handleStep3());
      newPwdInput.addEventListener('input', () => this.updateStrength());
    }

    // 密码显示/隐藏
    this.bindPwdToggle('toggleNewPwd', 'newPassword');
    this.bindPwdToggle('toggleConfirmPwd', 'confirmPassword');
  },

  bindPwdToggle(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (!toggle || toggle._bound) return;
    toggle._bound = true;
    toggle.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        toggle.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1677ff" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
      } else {
        input.type = 'password';
        toggle.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
      }
    });
  },

  goStep(step) {
    this.state.step = step;
    for (let i = 1; i <= 4; i++) {
      const el = document.getElementById('forgotStep' + i);
      if (el) el.classList.toggle('hidden', i !== step);
    }
    // 更新步骤指示器
    const dots = document.querySelectorAll('.step-dot');
    const lines = document.querySelectorAll('.step-line');
    dots.forEach((d, i) => {
      d.classList.remove('active', 'done');
      if (i + 1 < step) d.classList.add('done');
      if (i + 1 === step) d.classList.add('active');
    });
    lines.forEach((l, i) => {
      l.classList.toggle('active', i + 1 < step);
    });
  },

  // ===== 步骤1: 验证身份 =====
  handleStep1() {
    const username = document.getElementById('forgotUsername').value.trim();
    const errDiv = document.getElementById('forgotError1');
    errDiv.textContent = '';

    if (!username) { errDiv.textContent = '请输入用户名'; return; }
    this.state.username = username;

    if (this.state.accountType === 'employee') {
      const user = Store.findUserByUsername(username);
      if (!user) { errDiv.textContent = '未找到该内部员工账号，请检查用户名'; return; }
      this.state.user = user;
      this.renderStep2Employee();
    } else {
      // 客户端：用手机号作为账号
      const customer = Store.findCustomerByPhone(username);
      if (!customer) { errDiv.textContent = '未找到该手机号对应的客户，请检查后重试'; return; }
      this.state.user = customer;
      this.renderStep2Customer();
    }
    this.goStep(2);
  },

  // ===== 步骤2: 内部员工验证方式 =====
  renderStep2Employee() {
    const user = this.state.user;
    const phoneMasked = user.phone ? user.phone.slice(0,3) + '****' + user.phone.slice(-4) : '未绑定';
    const emailMasked = user.email ? user.email.replace(/^(.{2}).*@/, '$1***@') : '未绑定';

    const methods = [];
    if (user.phone) methods.push({ id: 'sms', title: '手机短信验证码', desc: '验证码将发送至 ' + phoneMasked, icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>' });
    if (user.email) methods.push({ id: 'email', title: '邮箱验证码', desc: '验证码将发送至 ' + emailMasked, icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' });
    if (user.securityQuestion) methods.push({ id: 'security', title: '安全问题验证', desc: user.securityQuestion, icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' });

    const container = document.getElementById('verifyMethodsContainer');
    container.innerHTML = `
      <div class="forgot-field">
        <label class="forgot-label">选择验证方式</label>
      </div>
      <div class="verify-method-list" id="verifyMethodList">
        ${methods.map((m, i) => `
          <div class="verify-method-card ${i === 0 ? 'active' : ''}" data-method="${m.id}">
            <div class="vm-icon">${m.icon}</div>
            <div class="vm-info">
              <div class="vm-title">${m.title}</div>
              <div class="vm-desc">${m.desc}</div>
            </div>
            <div class="vm-check"></div>
          </div>
        `).join('')}
      </div>
      <div id="verifyCodeContainer"></div>
    `;

    // 默认选第一个
    this.state.verifyMethod = methods[0]?.id || 'sms';
    this.renderVerifyArea();

    // 绑定切换
    document.querySelectorAll('.verify-method-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.verify-method-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.state.verifyMethod = card.dataset.method;
        this.renderVerifyArea();
      });
    });
  },

  // ===== 步骤2: 外部客户验证方式 =====
  renderStep2Customer() {
    const customer = this.state.user;
    const phoneMasked = customer.phone ? customer.phone.slice(0,3) + '****' + customer.phone.slice(-4) : '未绑定';

    const container = document.getElementById('verifyMethodsContainer');
    container.innerHTML = `
      <div class="forgot-field">
        <label class="forgot-label">短信验证码验证</label>
        <div class="verify-code-area">
          <div class="vc-info">验证码将发送至客户预留手机号 <strong>${phoneMasked}</strong></div>
          <div class="verify-code-row">
            <input type="text" class="verify-code-input" id="custVerifyCode" placeholder="请输入6位验证码" maxlength="6">
            <button class="verify-code-btn" id="custSendCodeBtn" onclick="ForgotPwd.sendCode('sms')">获取验证码</button>
          </div>
          <div id="custCodeHint"></div>
        </div>
      </div>
      <div class="forgot-field">
        <label class="forgot-label">业务信息二次校验（辅助安全验证）</label>
        <div class="customer-verify-area">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">公司名称</label>
              <input class="form-input" id="custCompanyName" placeholder="请输入客户公司全称">
            </div>
            <div class="form-group">
              <label class="form-label">税号</label>
              <input class="form-input" id="custTaxNumber" placeholder="请输入纳税人识别号">
            </div>
          </div>
        </div>
      </div>
    `;
    this.state.verifyMethod = 'sms';
  },

  // ===== 渲染验证码/安全问题输入区 =====
  renderVerifyArea() {
    const container = document.getElementById('verifyCodeContainer');
    const method = this.state.verifyMethod;
    const user = this.state.user;

    if (method === 'security') {
      container.innerHTML = `
        <div class="security-q-area">
          <div class="sq-question">${user.securityQuestion || '安全问题'}</div>
          <div class="sq-hint">请输入预留的安全问题答案</div>
          <input type="text" class="forgot-input" id="securityAnswer" placeholder="请输入答案">
        </div>
      `;
    } else {
      const phoneMasked = method === 'sms' && user.phone ? user.phone.slice(0,3) + '****' + user.phone.slice(-4) : '';
      const emailMasked = method === 'email' && user.email ? user.email.replace(/^(.{2}).*@/, '$1***@') : '';
      const desc = method === 'sms' ? '验证码已发送至 ' + phoneMasked : '验证码已发送至 ' + emailMasked;
      container.innerHTML = `
        <div class="verify-code-area">
          <div class="vc-info">${desc}</div>
          <div class="verify-code-row">
            <input type="text" class="verify-code-input" id="empVerifyCode" placeholder="请输入6位验证码" maxlength="6">
            <button class="verify-code-btn" id="empSendCodeBtn" onclick="ForgotPwd.sendCode('${method}')">获取验证码</button>
          </div>
          <div id="empCodeHint"></div>
        </div>
      `;
    }
  },

  // ===== 发送验证码 =====
  sendCode(channel) {
    const username = this.state.username;
    const result = Store.generateVerifyCode(username, channel);

    if (result.error === 'cooldown') {
      UI.toast('请等待 ' + result.remaining + ' 秒后再获取验证码', 'warning');
      return;
    }
    if (result.error === 'locked') {
      const mins = Math.ceil((result.until - Date.now()) / 60000);
      UI.toast('账号已锁定，请 ' + mins + ' 分钟后再试', 'error');
      return;
    }

    // 启动倒计时
    this.startCountdown(channel);

    // 【演示模式】因为没有后端，验证码前端展示
    const hintId = this.state.accountType === 'customer' ? 'custCodeHint' : 'empCodeHint';
    const hintEl = document.getElementById(hintId);
    if (hintEl) {
      hintEl.innerHTML = `<div class="demo-code-hint">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>【演示模式】验证码：<strong>${result.code}</strong>（有效期${channel === 'sms' ? '5' : '10'}分钟）</span>
      </div>`;
    }
  },

  startCountdown(channel) {
    let seconds = 60;
    const btns = document.querySelectorAll('.verify-code-btn');
    const btn = Array.from(btns).find(b => b.id && b.id.includes('SendCode'));
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = seconds + '秒后重新获取';
    if (this.state.countdownTimer) clearInterval(this.state.countdownTimer);
    this.state.countdownTimer = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        clearInterval(this.state.countdownTimer);
        this.state.countdownTimer = null;
        btn.disabled = false;
        btn.textContent = '重新获取验证码';
      } else {
        btn.textContent = seconds + '秒后重新获取';
      }
    }, 1000);
  },

  // ===== 步骤2: 验证提交 =====
  handleStep2() {
    const errDiv = document.getElementById('forgotError2');
    errDiv.textContent = '';

    if (this.state.accountType === 'employee') {
      const method = this.state.verifyMethod;
      if (method === 'security') {
        const answer = document.getElementById('securityAnswer').value.trim();
        if (!answer) { errDiv.textContent = '请输入安全问题答案'; return; }
        if (answer !== this.state.user.securityAnswer) {
          errDiv.textContent = '安全问题答案不正确'; return;
        }
      } else {
        const code = document.getElementById('empVerifyCode').value.trim();
        if (!code) { errDiv.textContent = '请输入验证码'; return; }
        const result = Store.verifyCode(this.state.username, code, method);
        if (result.error === 'locked') {
          const mins = Math.ceil((result.until - Date.now()) / 60000);
          errDiv.textContent = '验证码错误次数过多，账号已锁定 ' + mins + ' 分钟';
          return;
        }
        if (result.error === 'expired') { errDiv.textContent = '验证码已过期，请重新获取'; return; }
        if (result.error === 'wrong') { errDiv.textContent = '验证码错误，剩余 ' + result.remaining + ' 次机会'; return; }
        if (result.error === 'no_code') { errDiv.textContent = '请先获取验证码'; return; }
      }
    } else {
      // 客户端验证
      const code = document.getElementById('custVerifyCode').value.trim();
      if (!code) { errDiv.textContent = '请输入短信验证码'; return; }
      const result = Store.verifyCode(this.state.username, code, 'sms');
      if (result.error === 'locked') {
        const mins = Math.ceil((result.until - Date.now()) / 60000);
        errDiv.textContent = '验证码错误次数过多，已锁定 ' + mins + ' 分钟';
        return;
      }
      if (result.error === 'expired') { errDiv.textContent = '验证码已过期，请重新获取'; return; }
      if (result.error === 'wrong') { errDiv.textContent = '验证码错误，剩余 ' + result.remaining + ' 次机会'; return; }
      if (result.error === 'no_code') { errDiv.textContent = '请先获取验证码'; return; }

      // 业务信息二次校验
      const companyName = document.getElementById('custCompanyName').value.trim();
      const taxNumber = document.getElementById('custTaxNumber').value.trim();
      const bizResult = Store.verifyCustomerBusiness(this.state.user.id, companyName, taxNumber);
      if (!bizResult.success) { errDiv.textContent = bizResult.error; return; }
    }

    // 验证通过，进入步骤3
    if (this.state.countdownTimer) { clearInterval(this.state.countdownTimer); this.state.countdownTimer = null; }
    this.goStep(3);
  },

  // ===== 密码强度实时更新 =====
  updateStrength() {
    const pwd = document.getElementById('newPassword').value;
    const el = document.getElementById('pwdStrength');
    if (!pwd) { el.innerHTML = ''; return; }
    const s = Store.checkPasswordStrength(pwd);
    const levelClass = s.level === 0 ? 'weak' : s.level === 1 ? 'weak' : s.level === 2 ? 'medium' : 'strong';
    el.innerHTML = `
      <div class="ps-bars">
        <div class="ps-bar ${s.level >= 1 ? levelClass : ''}"></div>
        <div class="ps-bar ${s.level >= 2 ? levelClass : ''}"></div>
        <div class="ps-bar ${s.level >= 3 ? levelClass : ''}"></div>
      </div>
      <span class="ps-label ${levelClass}">${s.label}</span>
      <span style="color:#999">${s.tips}</span>
    `;
  },

  // ===== 步骤3: 提交新密码 =====
  async handleStep3() {
    const errDiv = document.getElementById('forgotError3');
    errDiv.textContent = '';
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmPassword').value;

    const validation = Store.validatePassword(newPwd);
    if (!validation.valid) { errDiv.textContent = validation.msg; return; }
    if (newPwd !== confirmPwd) { errDiv.textContent = '两次输入的密码不一致'; return; }

    // 更新密码
    const success = await Store.updatePassword(this.state.username, newPwd);
    if (success) {
      this.goStep(4);
      // 3秒后自动跳转登录
      setTimeout(() => {
        this.close();
        document.getElementById('loginUsername').value = this.state.username;
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginError').textContent = '';
        document.getElementById('loginUsername').focus();
        UI.toast('密码修改成功，请重新登录', 'success');
      }, 3000);
    } else {
      errDiv.textContent = '密码重置失败，请稍后重试';
    }
  }
};

// ===== 个人信息编辑 =====
const ProfileForm = {
  open() {
    const session = Store.getSession();
    if (!session) return;
    const user = (Store.data.users || []).find(u => u.username === session.username);
    if (!user) { UI.toast('未找到用户信息', 'error'); return; }

    const avatarMap = { '总经理': '总', '业务员': '业', '生产管理员': '产', '发货管理员': '发', '财务管理员': '财' };
    const avatarText = avatarMap[user.name] || user.name.charAt(0);

    const phoneMasked = user.phone ? user.phone.slice(0,3) + '****' + user.phone.slice(-4) : '未绑定';

    UI.modal('个人信息', `
      <div class="profile-header">
        <div class="profile-avatar">${avatarText}</div>
        <div class="profile-meta">
          <div class="profile-name">${user.name}</div>
          <div class="profile-dept">${user.deptName} · ${user.role || ''}</div>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">用户名 <span class="required">*</span></label>
          <input class="form-input" id="pf_username" value="${user.username}" placeholder="登录用户名">
        </div>
        <div class="form-group">
          <label class="form-label">姓名 <span class="required">*</span></label>
          <input class="form-input" id="pf_name" value="${user.name || ''}" placeholder="显示姓名">
        </div>
        <div class="form-group">
          <label class="form-label">角色</label>
          <input class="form-input" id="pf_role" value="${user.role || ''}" placeholder="角色/职位">
        </div>
        <div class="form-group">
          <label class="form-label">所属部门</label>
          <input class="form-input" value="${user.deptName || ''}" disabled>
        </div>
        <div class="form-group">
          <label class="form-label">手机号</label>
          <input class="form-input" id="pf_phone" value="${user.phone || ''}" placeholder="手机号码">
        </div>
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input class="form-input" id="pf_email" value="${user.email || ''}" placeholder="电子邮箱">
        </div>
      </div>

      <div class="profile-divider"></div>

      <div class="profile-pwd-section">
        <label class="form-label">修改密码</label>
        <div class="form-hint" style="margin-bottom:8px">如需修改密码请输入新密码，留空则不修改。修改后需重新登录。</div>
        <div class="pwd-input-wrap" style="position:relative">
          <input type="password" class="form-input" id="pf_password" placeholder="输入新密码（留空不修改）" style="padding-right:40px">
          <button class="pwd-toggle-inline" id="pf_togglePwd" type="button" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:4px">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div id="pf_strength" class="pwd-strength-inline"></div>
      </div>
    `, `
      <button class="btn btn-default" onclick="UI.closeModal()">取消</button>
      <button class="btn btn-primary" onclick="ProfileForm.save()">保存修改</button>
    `);

    // 密码显示/隐藏
    const toggle = document.getElementById('pf_togglePwd');
    const pwdInput = document.getElementById('pf_password');
    if (toggle) {
      toggle.addEventListener('click', () => {
        if (pwdInput.type === 'password') {
          pwdInput.type = 'text';
          toggle.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1677ff" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
        } else {
          pwdInput.type = 'password';
          toggle.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        }
      });
    }

    // 密码强度实时更新
    if (pwdInput) {
      pwdInput.addEventListener('input', () => {
        const val = pwdInput.value;
        const el = document.getElementById('pf_strength');
        if (!val) { el.innerHTML = ''; return; }
        const s = Store.checkPasswordStrength(val);
        const levelClass = s.level === 0 ? 'weak' : s.level === 1 ? 'weak' : s.level === 2 ? 'medium' : 'strong';
        el.innerHTML = `
          <div class="ps-bars" style="display:flex;gap:4px;margin-top:6px">
            <div class="ps-bar ${s.level >= 1 ? levelClass : ''}" style="flex:1;height:4px;border-radius:2px;background:${s.level >= 1 ? '' : '#e8e8e8'}"></div>
            <div class="ps-bar ${s.level >= 2 ? levelClass : ''}" style="flex:1;height:4px;border-radius:2px;background:${s.level >= 2 ? '' : '#e8e8e8'}"></div>
            <div class="ps-bar ${s.level >= 3 ? levelClass : ''}" style="flex:1;height:4px;border-radius:2px;background:${s.level >= 3 ? '' : '#e8e8e8'}"></div>
          </div>
          <span style="font-size:12px;color:${levelClass === 'weak' ? '#ff4d4f' : levelClass === 'medium' ? '#faad14' : '#52c41a'};margin-top:4px;display:inline-block">${s.label} - ${s.tips}</span>
        `;
      });
    }
  },

  async save() {
    const session = Store.getSession();
    if (!session) return;
    const username = document.getElementById('pf_username').value.trim();
    const name = document.getElementById('pf_name').value.trim();
    const role = document.getElementById('pf_role').value.trim();
    const phone = document.getElementById('pf_phone').value.trim();
    const email = document.getElementById('pf_email').value.trim();
    const password = document.getElementById('pf_password').value;

    if (!username) { UI.toast('用户名不能为空', 'error'); return; }
    if (!name) { UI.toast('姓名不能为空', 'error'); return; }

    // 如果填了密码，校验强度
    if (password) {
      const validation = Store.validatePassword(password);
      if (!validation.valid) { UI.toast(validation.msg, 'error'); return; }
    }

    const updates = { username, name, role, phone, email };
    if (password) updates.password = password;

    const result = await Store.updateUser(session.username, updates);
    if (result && result.error) {
      UI.toast(result.error, 'error');
      return;
    }

    // 更新当前用户状态
    if (result && result.success) {
      App.currentUser = Store.getSession();
      App.updateUserCard();
    }

    UI.closeModal();

    // 如果改了密码或用户名，提示重新登录
    if (password || username !== session.username) {
      UI.confirm('个人信息已更新。由于修改了' + (password ? '密码' : '用户名') + '，需要重新登录。是否立即退出？', () => {
        App.logout();
      }, '重新登录');
    } else {
      UI.toast('个人信息修改成功', 'success');
    }
  }
};

// ===== UI 工具 =====
const UI = {
  toast(msg, type = 'info', duration = 2500) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = {
      success: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#52c41a" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      error: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ff4d4f" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      warning: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#faad14" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      info: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1677ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };
    toast.innerHTML = `${icons[type] || icons.info}<span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; setTimeout(() => toast.remove(), 250); }, duration);
  },

  modal(title, bodyHtml, footerHtml = '', size = '') {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = bodyHtml;
    document.getElementById('modalFooter').innerHTML = footerHtml;
    modal.className = 'modal ' + size;
    overlay.classList.add('show');
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
  },

  confirm(message, onOk, title = '确认操作') {
    const overlay = document.getElementById('confirmOverlay');
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    const okBtn = document.getElementById('confirmOk');
    const newOk = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    newOk.addEventListener('click', () => { UI.closeConfirm(); onOk(); });
    overlay.classList.add('show');
  },

  closeConfirm() {
    document.getElementById('confirmOverlay').classList.remove('show');
  },

  empty(icon, title, desc) {
    return `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 15h6"/></svg>
      <div class="empty-title">${title}</div>
      <div class="empty-desc">${desc || ''}</div>
    </div>`;
  },

  formatMoney(num) {
    return '¥' + (Number(num) || 0).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  formatDate(d) {
    if (!d) return '';
    return d;
  },

  getCustomerName(id) {
    const c = Store.getById('customers', id);
    return c ? c.customerName : id;
  },

  statusTag(status) {
    const map = {
      '待排产': 'tag-orange', '生产中': 'tag-blue', '待发货': 'tag-orange', '已发货': 'tag-green', '已完成': 'tag-green', '已入库': 'tag-green', '在库': 'tag-green', '已出库': 'tag-gray', '已处理': 'tag-green', '待开始': 'tag-orange', '进行中': 'tag-blue', '待付款': 'tag-red', '已付款': 'tag-green'
    };
    const cls = map[status] || 'tag-gray';
    return `<span class="tag ${cls}">${status}</span>`;
  }
};

// ===== 页面渲染器 =====
const Page = {};

// ---- 工作台 ----
Page.dashboard = function() {
  const stats = Store.getStats();
  return `
    <div class="page-header">
      <div>
        <div class="page-title">工作台</div>
        <div class="page-subtitle">欢迎使用订单与应收账款管理系统</div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-card" onclick="DashboardDetail.totalSales()">
        <div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">总销售额</div>
          <div class="stat-value">${UI.formatMoney(stats.totalSales)}</div>
          <div class="stat-trend up"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> 本月新增</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.receivable()">
        <div class="stat-icon red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">应收账款</div>
          <div class="stat-value text-danger">${UI.formatMoney(stats.totalReceivable)}</div>
          <div class="stat-trend down">待收款</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.received()">
        <div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">已收货款</div>
          <div class="stat-value">${UI.formatMoney(stats.totalReceived)}</div>
          <div class="stat-trend up">累计收款</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.pendingOrders()">
        <div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">待处理订单</div>
          <div class="stat-value">${stats.pendingOrders}</div>
          <div class="stat-trend">待排产/待发货</div>
        </div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-card" onclick="DashboardDetail.customers()">
        <div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">客户总数</div>
          <div class="stat-value">${stats.customerCount}</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.products()">
        <div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">产品总数</div>
          <div class="stat-value">${stats.productCount}</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.production()">
        <div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h6a4 4 0 004-4V8M22 20h-6a4 4 0 01-4-4V8"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">生产中</div>
          <div class="stat-value">${stats.productionCount}</div>
        </div>
      </div>
      <div class="stat-card" onclick="DashboardDetail.shipping()">
        <div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg></div>
        <div class="stat-info">
          <div class="stat-label">发货记录</div>
          <div class="stat-value">${stats.shippingCount}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">最近订单</span>
        <button class="btn btn-default btn-sm" onclick="location.hash='orders'">查看全部</button>
      </div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>客户</th>
              <th>经办人</th>
              <th>日期</th>
              <th class="text-right">金额</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            ${stats.recentOrders.length === 0 ? `<tr><td colspan="6" class="text-center text-secondary">暂无订单数据</td></tr>` : ''}
            ${stats.recentOrders.map(o => `
              <tr>
                <td class="text-primary">${o.orderNo}</td>
                <td>${UI.getCustomerName(o.customerId)}</td>
                <td>${o.salesperson}</td>
                <td>${UI.formatDate(o.date)}</td>
                <td class="text-right font-bold">${UI.formatMoney(Store.getOrderTotal(o))}</td>
                <td>${UI.statusTag(o.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 客户建档 ----
Page.customers = function() {
  const customers = Store.getAll('customers');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? customers.filter(c =>
    c.customerName.toLowerCase().includes(q) ||
    c.phone.includes(q) ||
    c.companyName.toLowerCase().includes(q) ||
    c.region.toLowerCase().includes(q)
  ) : customers;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">客户建档</div>
        <div class="page-subtitle">管理客户基本信息、开票信息及信用额度</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="CustomerForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增客户
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" id="customerSearch" placeholder="搜索客户名/电话/公司/地区..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('customers')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>编号</th>
              <th>客户名</th>
              <th>联系电话</th>
              <th>公司名</th>
              <th>地区</th>
              <th>结算方式</th>
              <th>信用等级</th>
              <th class="text-right">信用额度</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9">${UI.empty('', '暂无客户数据', '点击新增客户添加')}</td></tr>` : ''}
            ${filtered.map(c => `
              <tr>
                <td>${c.id}</td>
                <td class="text-primary" style="cursor:pointer" onclick="CustomerForm.view('${c.id}')">${c.customerName}</td>
                <td>${c.phone}</td>
                <td>${c.companyName}</td>
                <td>${c.region}</td>
                <td><span class="tag tag-blue">${c.settlementMethod}</span></td>
                <td><span class="tag ${c.creditLevel === 'A级' ? 'tag-green' : c.creditLevel === 'B级' ? 'tag-orange' : 'tag-gray'}">${c.creditLevel}</span></td>
                <td class="text-right">${UI.formatMoney(c.creditLimit)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="CustomerForm.open('${c.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除客户「${c.customerName}」吗？', ()=>{Store.remove('customers','${c.id}');UI.toast('删除成功','success');App.renderPage('customers');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 产品建档 ----
Page.products = function() {
  const products = Store.getAll('products');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? products.filter(p =>
    p.productCode.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.model.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ) : products;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">产品建档</div>
        <div class="page-subtitle">管理产品编号、品牌、型号及指导单价</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="ProductForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增产品
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索产品编号/品牌/型号/类别..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('products')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>产品编号</th>
              <th>品牌</th>
              <th>型号</th>
              <th>类别</th>
              <th>对应型号</th>
              <th class="text-right">指导单价</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="8">${UI.empty('', '暂无产品数据', '点击新增产品添加')}</td></tr>` : ''}
            ${filtered.map(p => `
              <tr>
                <td class="text-primary">${p.productCode}</td>
                <td class="font-bold">${p.brand}</td>
                <td>${p.model}</td>
                <td><span class="tag tag-purple">${p.category}</span></td>
                <td>${p.correspondingModel}</td>
                <td class="text-right font-bold">${UI.formatMoney(p.guidePrice)}</td>
                <td class="text-secondary">${p.remark || '-'}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="ProductForm.viewDetail('${p.id}')">详情</button>
                  <button class="btn btn-ghost btn-sm" onclick="ProductForm.open('${p.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除产品「${p.brand} ${p.model}」吗？', ()=>{Store.remove('products','${p.id}');UI.toast('删除成功','success');App.renderPage('products');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 业务下单 ----
Page.orders = function() {
  const orders = Store.getAll('orders');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? orders.filter(o =>
    o.orderNo.toLowerCase().includes(q) ||
    o.salesperson.toLowerCase().includes(q) ||
    UI.getCustomerName(o.customerId).toLowerCase().includes(q)
  ) : orders;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">业务下单</div>
        <div class="page-subtitle">录入销售订单，选择客户和产品明细</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="OrderForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增订单
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索订单号/客户/经办人..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('orders')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>客户</th>
              <th>经办人</th>
              <th>日期</th>
              <th>发货仓</th>
              <th>结算方式</th>
              <th>产品明细</th>
              <th class="text-right">合计金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="10">${UI.empty('', '暂无订单数据', '点击新增订单添加')}</td></tr>` : ''}
            ${filtered.map(o => `
              <tr>
                <td class="text-primary" style="cursor:pointer" onclick="OrderForm.view('${o.id}')">${o.orderNo}</td>
                <td>${UI.getCustomerName(o.customerId)}</td>
                <td>${o.salesperson}</td>
                <td>${UI.formatDate(o.date)}</td>
                <td>${o.warehouse || '-'}</td>
                <td><span class="tag tag-blue">${o.settlementMethod}</span></td>
                <td class="text-secondary font-sm">${(o.items||[]).length} 项</td>
                <td class="text-right font-bold">${UI.formatMoney(Store.getOrderTotal(o))}</td>
                <td>${UI.statusTag(o.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="OrderForm.open('${o.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除订单「${o.orderNo}」吗？', ()=>{Store.remove('orders','${o.id}');UI.toast('删除成功','success');App.renderPage('orders');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 退货登记 ----
Page.returns = function() {
  const returns = Store.getAll('returns');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? returns.filter(r =>
    r.returnNo.toLowerCase().includes(q) ||
    r.salesperson.toLowerCase().includes(q) ||
    UI.getCustomerName(r.customerId).toLowerCase().includes(q)
  ) : returns;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">退货登记</div>
        <div class="page-subtitle">登记客户退货信息，关联订单和产品</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="ReturnForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增退货
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索退货编号/客户/经办人..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('returns')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>退货编号</th>
              <th>客户</th>
              <th>经办人</th>
              <th>日期</th>
              <th>产品明细</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="7">${UI.empty('', '暂无退货数据', '点击新增退货添加')}</td></tr>` : ''}
            ${filtered.map(r => `
              <tr>
                <td class="text-primary">${r.returnNo}</td>
                <td>${UI.getCustomerName(r.customerId)}</td>
                <td>${r.salesperson}</td>
                <td>${UI.formatDate(r.date)}</td>
                <td class="text-secondary font-sm">${(r.items||[]).length} 项</td>
                <td>${UI.statusTag(r.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="ReturnForm.open('${r.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除退货单「${r.returnNo}」吗？', ()=>{Store.remove('returns','${r.id}');UI.toast('删除成功','success');App.renderPage('returns');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 订单排产 ----
Page.production = function() {
  const productions = Store.getAll('productions');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? productions.filter(p =>
    p.orderNo.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.model.toLowerCase().includes(q) ||
    p.workGroup.toLowerCase().includes(q)
  ) : productions;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">订单排产</div>
        <div class="page-subtitle">车间排产管理，分配工作组及完成日期</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="ProductionForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增排产
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索订单号/品牌/型号/工作组..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('production')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>品牌</th>
              <th>产品型号</th>
              <th class="text-right">数量</th>
              <th>对应型号</th>
              <th>工作组</th>
              <th>完成日期</th>
              <th>备注</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="10">${UI.empty('', '暂无排产数据', '点击新增排产添加')}</td></tr>` : ''}
            ${filtered.map(p => `
              <tr>
                <td class="text-primary">${p.orderNo}</td>
                <td class="font-bold">${p.brand}</td>
                <td>${p.model}</td>
                <td class="text-right">${p.quantity} ${p.unit}</td>
                <td>${p.correspondingModel}</td>
                <td><span class="tag tag-purple">${p.workGroup}</span></td>
                <td>${UI.formatDate(p.completeDate)}</td>
                <td class="text-secondary font-sm">${p.remark || '-'}</td>
                <td>${UI.statusTag(p.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="ProductionForm.open('${p.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除此排产记录吗？', ()=>{Store.remove('productions','${p.id}');UI.toast('删除成功','success');App.renderPage('production');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 成品仓库 ----
Page.warehouse = function() {
  const warehouse = Store.getAll('warehouse');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? warehouse.filter(w =>
    w.orderNo.toLowerCase().includes(q) ||
    w.brand.toLowerCase().includes(q) ||
    w.model.toLowerCase().includes(q)
  ) : warehouse;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">成品仓库</div>
        <div class="page-subtitle">成品入库管理，记录完成日期和状态</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="WarehouseForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增入库
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索订单号/品牌/型号..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('warehouse')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>品牌</th>
              <th>产品型号</th>
              <th class="text-right">数量</th>
              <th>对应型号</th>
              <th>完成日期</th>
              <th>备注</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9">${UI.empty('', '暂无仓库数据', '点击新增入库添加')}</td></tr>` : ''}
            ${filtered.map(w => `
              <tr>
                <td class="text-primary">${w.orderNo}</td>
                <td class="font-bold">${w.brand}</td>
                <td>${w.model}</td>
                <td class="text-right">${w.quantity} ${w.unit}</td>
                <td>${w.correspondingModel}</td>
                <td>${UI.formatDate(w.completeDate)}</td>
                <td class="text-secondary font-sm">${w.remark || '-'}</td>
                <td>${UI.statusTag(w.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="WarehouseForm.open('${w.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除此入库记录吗？', ()=>{Store.remove('warehouse','${w.id}');UI.toast('删除成功','success');App.renderPage('warehouse');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 发货及物流 ----
Page.shipping = function() {
  const shipments = Store.getAll('shipments');
  const q = App.searchQuery.toLowerCase();
  const filtered = q ? shipments.filter(s =>
    s.orderNo.toLowerCase().includes(q) ||
    s.brand.toLowerCase().includes(q) ||
    s.trackingNo.toLowerCase().includes(q)
  ) : shipments;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">发货及物流</div>
        <div class="page-subtitle">管理发货记录、运单号及运费</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="ShippingForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新增发货
        </button>
      </div>
    </div>

    <div class="filter-bar">
      <input class="form-input" placeholder="搜索订单号/品牌/运单号..." value="${App.searchQuery}" oninput="App.searchQuery=this.value;App.renderPage('shipping')">
      <span class="text-secondary font-sm">共 ${filtered.length} 条</span>
    </div>

    <div class="card">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>品牌</th>
              <th>产品型号</th>
              <th class="text-right">数量</th>
              <th>发货日期</th>
              <th>运单号</th>
              <th class="text-right">运费</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9">${UI.empty('', '暂无发货数据', '点击新增发货添加')}</td></tr>` : ''}
            ${filtered.map(s => `
              <tr>
                <td class="text-primary">${s.orderNo}</td>
                <td class="font-bold">${s.brand}</td>
                <td>${s.model}</td>
                <td class="text-right">${s.quantity} ${s.unit}</td>
                <td>${UI.formatDate(s.shipDate)}</td>
                <td>${s.trackingNo}</td>
                <td class="text-right">${UI.formatMoney(s.freight)}</td>
                <td>${UI.statusTag(s.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="ShippingForm.open('${s.id}')">编辑</button>
                  <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除此发货记录吗？', ()=>{Store.remove('shipments','${s.id}');UI.toast('删除成功','success');App.renderPage('shipping');})">删除</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// ---- 财务对账 ----
Page.finance = function() {
  const customers = Store.getAll('customers');
  const payments = Store.getAll('payments');

  return `
    <div class="page-header">
      <div>
        <div class="page-title">财务对账</div>
        <div class="page-subtitle">客户明细对账单、应收账款及收款明细</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="PaymentForm.open()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          登记收款
        </button>
      </div>
    </div>

    <div class="tabs" id="financeTabs">
      <div class="tab active" data-tab="balance">客户对账</div>
      <div class="tab" data-tab="payments">收款明细</div>
    </div>

    <div id="tab-balance" class="tab-content">
      <div class="card">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>客户编号</th>
                <th>客户名称</th>
                <th>信用等级</th>
                <th class="text-right">订单总额</th>
                <th class="text-right">退货总额</th>
                <th class="text-right">已收货款</th>
                <th class="text-right">应收账款</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${customers.map(c => {
                const bal = Store.getCustomerBalance(c.id);
                return `
                <tr>
                  <td>${c.id}</td>
                  <td class="text-primary" style="cursor:pointer" onclick="FinanceForm.view('${c.id}')">${c.customerName}</td>
                  <td><span class="tag ${c.creditLevel === 'A级' ? 'tag-green' : c.creditLevel === 'B级' ? 'tag-orange' : 'tag-gray'}">${c.creditLevel}</span></td>
                  <td class="text-right">${UI.formatMoney(bal.totalOrders)}</td>
                  <td class="text-right text-danger">${UI.formatMoney(bal.totalReturns)}</td>
                  <td class="text-right text-success">${UI.formatMoney(bal.totalPayments)}</td>
                  <td class="text-right font-bold ${bal.receivable > 0 ? 'text-danger' : 'text-success'}">${UI.formatMoney(bal.receivable)}</td>
                  <td><button class="btn btn-ghost btn-sm" onclick="FinanceForm.view('${c.id}')">明细</button></td>
                </tr>`;
              }).join('')}
            </tbody>
            <tfoot>
              <tr style="border-top: 2px solid #d9d9d9;">
                <td colspan="3" class="font-bold">合计</td>
                <td class="text-right font-bold">${UI.formatMoney(customers.reduce((s,c) => s + Store.getCustomerBalance(c.id).totalOrders, 0))}</td>
                <td class="text-right font-bold text-danger">${UI.formatMoney(customers.reduce((s,c) => s + Store.getCustomerBalance(c.id).totalReturns, 0))}</td>
                <td class="text-right font-bold text-success">${UI.formatMoney(customers.reduce((s,c) => s + Store.getCustomerBalance(c.id).totalPayments, 0))}</td>
                <td class="text-right font-bold text-danger">${UI.formatMoney(customers.reduce((s,c) => s + Math.max(0, Store.getCustomerBalance(c.id).receivable), 0))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>

    <div id="tab-payments" class="tab-content hidden">
      <div class="card">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>编号</th>
                <th>客户</th>
                <th>收款日期</th>
                <th>结算方式</th>
                <th class="text-right">金额</th>
                <th class="text-right">税率</th>
                <th class="text-right">税额</th>
                <th class="text-right">合计</th>
                <th>汇款单位</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${payments.length === 0 ? `<tr><td colspan="10">${UI.empty('', '暂无收款记录', '点击登记收款添加')}</td></tr>` : ''}
              ${payments.map(p => `
                <tr>
                  <td>${p.id}</td>
                  <td>${UI.getCustomerName(p.customerId)}</td>
                  <td>${UI.formatDate(p.paymentDate)}</td>
                  <td><span class="tag tag-blue">${p.settlementMethod}</span></td>
                  <td class="text-right">${UI.formatMoney(p.amount)}</td>
                  <td class="text-right text-secondary">${p.taxRate !== undefined && p.taxRate !== null ? p.taxRate + '%' : '13%'}</td>
                  <td class="text-right text-secondary">${UI.formatMoney(p.tax)}</td>
                  <td class="text-right font-bold">${UI.formatMoney(p.total)}</td>
                  <td class="text-secondary">${p.remittanceUnit}</td>
                  <td>
                    <button class="btn btn-ghost btn-sm" onclick="PaymentForm.open('${p.id}')">编辑</button>
                    <button class="btn btn-ghost btn-sm text-danger" onclick="UI.confirm('确定删除此收款记录吗？', ()=>{Store.remove('payments','${p.id}');UI.toast('删除成功','success');App.renderPage('finance');})">删除</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

// ---- 系统设置 ----
Page.settings = function() {
  const depts = Store.getAll('departments');
  const isBoss = App.currentUser && App.currentUser.deptId === 1;
  return `
    <div class="page-header">
      <div>
        <div class="page-title">系统设置</div>
        <div class="page-subtitle">部门权限管理（分控软件）</div>
      </div>
      ${isBoss ? `
      <div class="page-actions">
        <button class="btn btn-primary" onclick="DeptForm.openCreate()">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          新建部门
        </button>
      </div>` : ''}
    </div>

    <div class="card mb-16">
      <div class="card-header">
        <span class="card-title">部门列表</span>
        ${isBoss ? '<span class="form-hint">点击「编辑权限」可赋予或收回模块权限</span>' : ''}
      </div>
      <div class="card-body">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>编号</th>
                <th>部门名称</th>
                <th>说明</th>
                <th>模块权限</th>
                ${isBoss ? '<th>操作</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${depts.map(d => `
                <tr>
                  <td>${d.id}</td>
                  <td class="font-bold">${d.name}</td>
                  <td class="text-secondary">${d.desc}</td>
                  <td>${(d.permissions || []).map(p => `<span class="tag tag-blue">${NAV_CONFIG.find(g => g.items.some(i => i.id === p))?.items.find(i => i.id === p)?.text || p}</span>`).join(' ')}</td>
                  ${isBoss ? `<td><button class="btn btn-ghost btn-sm" onclick="DeptForm.openEdit(${d.id})">编辑权限</button></td>` : ''}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    ${isBoss ? `
    <div class="card mb-16">
      <div class="card-header"><span class="card-title">权限赋予</span></div>
      <div class="card-body">
        <div class="perm-grid">
          ${depts.map(d => `
            <div class="perm-dept-card">
              <div class="perm-dept-header">
                <div>
                  <span class="perm-dept-name">${d.name}</span>
                  <span class="perm-dept-id">#${d.id}</span>
                </div>
                <button class="btn btn-ghost btn-sm" onclick="DeptForm.openEdit(${d.id})">编辑</button>
              </div>
              <div class="perm-tags">
                ${(d.permissions || []).map(p => {
                  const text = NAV_CONFIG.find(g => g.items.some(i => i.id === p))?.items.find(i => i.id === p)?.text || p;
                  return `<span class="perm-tag on">${text}</span>`;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>` : ''}

    <div class="card">
      <div class="card-header"><span class="card-title">数据管理</span></div>
      <div class="card-body">
        <div class="flex gap-8 flex-wrap">
          <button class="btn btn-default" onclick="exportData()">导出数据</button>
          <button class="btn btn-default" onclick="document.getElementById('importFile').click()">导入数据</button>
          <input type="file" id="importFile" accept=".json" style="display:none" onchange="importData(event)">
          <button class="btn btn-danger" onclick="UI.confirm('确定重置所有数据吗？此操作不可恢复！', async ()=>{await Store.reset();UI.toast('数据已重置','success');App.renderPage('settings');}, '重置数据')">重置数据</button>
        </div>
        <div class="form-hint mt-8">导出的数据为JSON格式，可用于备份和恢复。重置将恢复到初始演示数据。</div>
      </div>
    </div>
  `;
};

// ===== 个人中心页面 =====
Page.profile = function() {
  const user = App.currentUser;
  if (!user) return '';
  const dept = (Store.data.departments || []).find(d => d.id === user.deptId);
  const avatarMap = { '总经理': '总', '业务员': '业', '生产管理员': '产', '发货管理员': '发', '财务管理员': '财' };
  const avatarText = avatarMap[user.name] || (user.name ? user.name.charAt(0) : '用');
  const phoneMasked = user.phone ? user.phone.slice(0,3) + '****' + user.phone.slice(-4) : '未绑定';
  const emailMasked = user.email || '未绑定';

  return `
    <div class="profile-page">
      <div class="profile-page-header">
        <div class="profile-page-avatar">${avatarText}</div>
        <div class="profile-page-info">
          <div class="profile-page-name">${user.name || user.username}</div>
          <div class="profile-page-role">${dept ? dept.name : ''} · ${user.role || ''}</div>
        </div>
      </div>

      <div class="card mb-16">
        <div class="card-header"><span class="card-title">账号信息</span></div>
        <div class="card-body">
          <div class="profile-info-list">
            <div class="profile-info-row">
              <span class="profile-info-label">用户名</span>
              <span class="profile-info-value">${user.username}</span>
            </div>
            <div class="profile-info-row">
              <span class="profile-info-label">姓名</span>
              <span class="profile-info-value">${user.name || '-'}</span>
            </div>
            <div class="profile-info-row">
              <span class="profile-info-label">角色</span>
              <span class="profile-info-value">${user.role || '-'}</span>
            </div>
            <div class="profile-info-row">
              <span class="profile-info-label">所属部门</span>
              <span class="profile-info-value">${dept ? dept.name : '-'}</span>
            </div>
            <div class="profile-info-row">
              <span class="profile-info-label">手机号</span>
              <span class="profile-info-value">${phoneMasked}</span>
            </div>
            <div class="profile-info-row">
              <span class="profile-info-label">邮箱</span>
              <span class="profile-info-value">${emailMasked}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-16">
        <div class="card-header"><span class="card-title">操作</span></div>
        <div class="card-body">
          <div class="profile-action-list">
            <button class="profile-action-item" onclick="ProfileForm.open()">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span>编辑个人信息</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" class="profile-arrow"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <button class="profile-action-item" id="pwaInstallBtn" style="display:none">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>安装到桌面</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" class="profile-arrow"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div class="profile-action-item profile-action-hint" id="pwaInstalledHint" style="display:none">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>已安装，可在桌面直接打开</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <button class="btn btn-danger w-full" onclick="App.logout()">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            退出登录
          </button>
        </div>
      </div>

      <div class="profile-footer">
        <span>订单与应收账款管理系统 v1.0</span>
      </div>
    </div>
  `;
};

// ===== PWA 安装提示 =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  const btn = document.getElementById('pwaInstallBtn');
  const hint = document.getElementById('pwaInstalledHint');
  if (btn) btn.style.display = 'none';
  if (hint) hint.style.display = 'flex';
});
function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      const btn = document.getElementById('pwaInstallBtn');
      if (btn) btn.style.display = 'none';
    });
  }
}

// ===== 部门权限管理表单 =====
const DeptForm = {
  // 获取所有可分配的权限项
  getAllPermissions() {
    const perms = [];
    NAV_CONFIG.forEach(group => {
      group.items.forEach(item => {
        perms.push({ id: item.id, text: item.text, group: group.group });
      });
    });
    return perms;
  },

  // 新建部门
  openCreate() {
    const allPerms = this.getAllPermissions();
    const nextId = (Store.data.departments || []).reduce((max, d) => Math.max(max, d.id), 0) + 1;
    UI.modal('新建部门', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">部门名称 <span class="required">*</span></label>
          <input class="form-input" id="df_name" placeholder="如: 售后服务部">
        </div>
        <div class="form-group">
          <label class="form-label">部门编号</label>
          <input class="form-input" id="df_id" value="${nextId}" readonly>
        </div>
        <div class="form-group" style="grid-column:1/-1">
          <label class="form-label">部门说明</label>
          <input class="form-input" id="df_desc" placeholder="描述部门职责">
        </div>
        <div class="form-group">
          <label class="form-label">登录用户名 <span class="required">*</span></label>
          <input class="form-input" id="df_username" placeholder="如: service">
        </div>
        <div class="form-group">
          <label class="form-label">登录密码</label>
          <input class="form-input" id="df_password" value="123456" placeholder="默认123456">
        </div>
        <div class="form-group">
          <label class="form-label">用户姓名</label>
          <input class="form-input" id="df_userName" placeholder="如: 售后专员">
        </div>
        <div class="form-group">
          <label class="form-label">用户角色</label>
          <input class="form-input" id="df_role" placeholder="如: 售后主管">
        </div>
      </div>
      <div style="margin-top:16px">
        <label class="form-label" style="margin-bottom:8px">模块权限（勾选该部门可访问的模块）</label>
        <div class="perm-checkbox-grid">
          ${allPerms.map(p => `
            <label class="perm-checkbox">
              <input type="checkbox" value="${p.id}" class="df_perm" ${p.id === 'dashboard' ? 'checked' : ''}>
              <span class="perm-checkbox-text">${p.text}</span>
              <span class="perm-checkbox-group">${p.group}</span>
            </label>
          `).join('')}
        </div>
        <div class="form-hint mt-8">工作台默认开启，所有部门均需访问工作台。</div>
      </div>
    `, `
      <button class="btn btn-default" onclick="UI.closeModal()">取消</button>
      <button class="btn btn-primary" onclick="DeptForm.saveCreate()">创建部门</button>
    `, 'large');
  },

  async saveCreate() {
    const name = document.getElementById('df_name').value.trim();
    const desc = document.getElementById('df_desc').value.trim();
    const username = document.getElementById('df_username').value.trim();
    const password = document.getElementById('df_password').value.trim() || '123456';
    const userName = document.getElementById('df_userName').value.trim() || name + '管理员';
    const role = document.getElementById('df_role').value.trim() || '专员';
    const perms = Array.from(document.querySelectorAll('.df_perm:checked')).map(cb => cb.value);
    if (!perms.includes('dashboard')) perms.push('dashboard');

    if (!name) { UI.toast('请输入部门名称', 'error'); return; }
    if (!username) { UI.toast('请输入登录用户名', 'error'); return; }

    const existingUsers = Store.data.users || [];
    if (existingUsers.some(u => u.username === username)) {
      UI.toast('用户名已存在，请更换', 'error');
      return;
    }

    const nextId = (Store.data.departments || []).reduce((max, d) => Math.max(max, d.id), 0) + 1;

    const result = await Store.createDepartment({
      name, desc, permissions: perms, username, password, userName, role
    });

    if (result.error) {
      UI.toast(result.error, 'error');
      return;
    }

    UI.closeModal();
    UI.toast('部门创建成功', 'success');
    App.renderPage('settings');
  },

  // 编辑权限
  openEdit(deptId) {
    const dept = Store.data.departments.find(d => d.id === deptId);
    if (!dept) return;
    const allPerms = this.getAllPermissions();
    const currentPerms = dept.permissions || [];
    const linkedUser = (Store.data.users || []).find(u => u.deptId === deptId);

    UI.modal('编辑权限 - ' + dept.name, `
      <div class="perm-edit-info">
        <div class="info-item"><span class="info-label">部门名称</span><span class="info-value">${dept.name}</span></div>
        <div class="info-item"><span class="info-label">部门编号</span><span class="info-value">#${dept.id}</span></div>
        <div class="info-item"><span class="info-label">部门说明</span><span class="info-value">${dept.desc || '-'}</span></div>
        ${linkedUser ? `
        <div class="info-item"><span class="info-label">登录账号</span><span class="info-value">${linkedUser.username}</span></div>
        <div class="info-item"><span class="info-label">用户姓名</span><span class="info-value">${linkedUser.name}</span></div>
        ` : '<div class="info-item"><span class="info-label">登录账号</span><span class="info-value text-secondary">未关联</span></div>'}
      </div>
      <div style="margin-top:16px">
        <label class="form-label" style="margin-bottom:8px">模块权限（勾选该部门可访问的模块）</label>
        <div class="perm-checkbox-grid">
          ${allPerms.map(p => `
            <label class="perm-checkbox ${currentPerms.includes(p.id) ? 'checked' : ''}">
              <input type="checkbox" value="${p.id}" class="ef_perm" ${currentPerms.includes(p.id) ? 'checked' : ''}>
              <span class="perm-checkbox-text">${p.text}</span>
              <span class="perm-checkbox-group">${p.group}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `, `
      <button class="btn btn-default" onclick="UI.closeModal()">取消</button>
      <button class="btn btn-primary" onclick="DeptForm.saveEdit(${deptId})">保存权限</button>
    `, 'large');
  },

  async saveEdit(deptId) {
    const dept = Store.data.departments.find(d => d.id === deptId);
    if (!dept) return;
    const perms = Array.from(document.querySelectorAll('.ef_perm:checked')).map(cb => cb.value);
    if (!perms.includes('dashboard')) perms.push('dashboard');

    await Store.updatePermissions(deptId, perms);

    UI.closeModal();
    UI.toast('权限已更新，该部门下次登录后生效', 'success');
    App.renderPage('settings');
  }
};

// ===== 工作台卡片详情弹窗 =====
const DashboardDetail = {
  // 1. 总销售额明细
  totalSales() {
    const orders = Store.getAll('orders');
    const total = orders.reduce((s, o) => s + Store.getOrderTotal(o), 0);
    let body = `<div class="detail-summary">共 ${orders.length} 笔订单，合计 <span class="text-danger font-bold">${UI.formatMoney(total)}</span></div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>订单编号</th><th>客户</th><th>经办人</th><th>日期</th><th>状态</th><th class="text-right">金额</th></tr></thead><tbody>`;
    if (orders.length === 0) body += '<tr><td colspan="6" class="text-center text-secondary">暂无订单</td></tr>';
    orders.forEach(o => {
      body += `<tr><td class="text-primary">${o.orderNo}</td><td>${UI.getCustomerName(o.customerId)}</td><td>${o.salesperson}</td><td>${UI.formatDate(o.date)}</td><td>${UI.statusTag(o.status)}</td><td class="text-right font-bold">${UI.formatMoney(Store.getOrderTotal(o))}</td></tr>`;
    });
    body += `</tbody><tfoot><tr style="border-top:2px solid #d9d9d9"><td colspan="5" class="font-bold text-right">合计</td><td class="text-right font-bold text-danger">${UI.formatMoney(total)}</td></tr></tfoot></table></div>`;
    UI.modal('总销售额明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 2. 应收账款明细
  receivable() {
    const customers = Store.getAll('customers');
    let totalReceivable = 0;
    const rows = customers.map(c => {
      const bal = Store.getCustomerBalance(c.id);
      const recv = Math.max(0, bal.receivable);
      totalReceivable += recv;
      return { c, bal, recv };
    }).filter(r => r.recv > 0).sort((a, b) => b.recv - a.recv);
    let body = `<div class="detail-summary">应收账款合计 <span class="text-danger font-bold">${UI.formatMoney(totalReceivable)}</span>（仅显示有欠款的客户）</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>客户</th><th>地区</th><th>信用等级</th><th class="text-right">订单总额</th><th class="text-right">退货总额</th><th class="text-right">已收货款</th><th class="text-right">应收账款</th></tr></thead><tbody>`;
    if (rows.length === 0) body += '<tr><td colspan="7" class="text-center text-secondary">暂无应收账款</td></tr>';
    rows.forEach(r => {
      body += `<tr><td class="font-bold">${r.c.customerName}</td><td>${r.c.region}</td><td><span class="tag tag-blue">${r.c.creditLevel}</span></td><td class="text-right">${UI.formatMoney(r.bal.totalOrders)}</td><td class="text-right text-secondary">${UI.formatMoney(r.bal.totalReturns)}</td><td class="text-right">${UI.formatMoney(r.bal.totalPayments)}</td><td class="text-right font-bold text-danger">${UI.formatMoney(r.recv)}</td></tr>`;
    });
    body += `</tbody><tfoot><tr style="border-top:2px solid #d9d9d9"><td colspan="6" class="font-bold text-right">合计</td><td class="text-right font-bold text-danger">${UI.formatMoney(totalReceivable)}</td></tr></tfoot></table></div>`;
    UI.modal('应收账款明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 3. 已收货款明细
  received() {
    const payments = Store.getAll('payments');
    const total = payments.reduce((s, p) => s + (Number(p.total) || 0), 0);
    let body = `<div class="detail-summary">共 ${payments.length} 笔收款，合计 <span class="text-success font-bold">${UI.formatMoney(total)}</span></div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>编号</th><th>客户</th><th>收款日期</th><th>结算方式</th><th class="text-right">金额</th><th class="text-right">税率</th><th class="text-right">税额</th><th class="text-right">合计</th><th>汇款单位</th></tr></thead><tbody>`;
    if (payments.length === 0) body += '<tr><td colspan="9" class="text-center text-secondary">暂无收款记录</td></tr>';
    payments.forEach(p => {
      body += `<tr><td>${p.id}</td><td>${UI.getCustomerName(p.customerId)}</td><td>${UI.formatDate(p.paymentDate)}</td><td><span class="tag tag-blue">${p.settlementMethod}</span></td><td class="text-right">${UI.formatMoney(p.amount)}</td><td class="text-right text-secondary">${p.taxRate !== undefined ? p.taxRate + '%' : '13%'}</td><td class="text-right text-secondary">${UI.formatMoney(p.tax)}</td><td class="text-right font-bold">${UI.formatMoney(p.total)}</td><td class="text-secondary">${p.remittanceUnit || '-'}</td></tr>`;
    });
    body += `</tbody><tfoot><tr style="border-top:2px solid #d9d9d9"><td colspan="7" class="font-bold text-right">合计</td><td class="text-right font-bold text-success">${UI.formatMoney(total)}</td><td></td></tr></tfoot></table></div>`;
    UI.modal('已收货款明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 4. 待处理订单明细
  pendingOrders() {
    const orders = Store.getAll('orders').filter(o => o.status === '待排产' || o.status === '待发货');
    let body = `<div class="detail-summary">待处理订单共 <span class="text-warning font-bold">${orders.length}</span> 笔</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>订单编号</th><th>客户</th><th>经办人</th><th>日期</th><th>仓库</th><th>明细</th><th class="text-right">金额</th><th>状态</th></tr></thead><tbody>`;
    if (orders.length === 0) body += '<tr><td colspan="8" class="text-center text-secondary">暂无待处理订单</td></tr>';
    orders.forEach(o => {
      const itemsText = (o.items || []).map(i => `${i.brand} ${i.model} ×${i.quantity}${i.unit}`).join('<br>');
      body += `<tr><td class="text-primary">${o.orderNo}</td><td>${UI.getCustomerName(o.customerId)}</td><td>${o.salesperson}</td><td>${UI.formatDate(o.date)}</td><td>${o.warehouse || '-'}</td><td class="text-secondary">${itemsText}</td><td class="text-right font-bold">${UI.formatMoney(Store.getOrderTotal(o))}</td><td>${UI.statusTag(o.status)}</td></tr>`;
    });
    body += `</tbody></table></div>`;
    UI.modal('待处理订单明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 5. 客户总数明细
  customers() {
    const customers = Store.getAll('customers');
    let body = `<div class="detail-summary">共 <span class="font-bold">${customers.length}</span> 个客户</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>编号</th><th>客户名称</th><th>联系电话</th><th>地区</th><th>结算方式</th><th>信用等级</th><th class="text-right">信用额度</th><th class="text-right">应收账款</th></tr></thead><tbody>`;
    if (customers.length === 0) body += '<tr><td colspan="8" class="text-center text-secondary">暂无客户</td></tr>';
    customers.forEach(c => {
      const bal = Store.getCustomerBalance(c.id);
      body += `<tr><td>${c.id}</td><td class="font-bold">${c.customerName}</td><td>${c.phone}</td><td>${c.region}</td><td><span class="tag tag-blue">${c.settlementMethod}</span></td><td><span class="tag ${c.creditLevel==='A级'?'tag-green':c.creditLevel==='B级'?'tag-blue':'tag-orange'}">${c.creditLevel}</span></td><td class="text-right">${UI.formatMoney(c.creditLimit)}</td><td class="text-right ${bal.receivable>0?'text-danger font-bold':''}">${UI.formatMoney(Math.max(0, bal.receivable))}</td></tr>`;
    });
    body += `</tbody></table></div>`;
    UI.modal('客户总数明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 6. 产品总数明细
  products() {
    const products = Store.getAll('products');
    let body = `<div class="detail-summary">共 <span class="font-bold">${products.length}</span> 个产品</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>编号</th><th>产品编号</th><th>品牌</th><th>型号</th><th>类别</th><th>对应型号</th><th class="text-right">指导单价</th><th>图片</th></tr></thead><tbody>`;
    if (products.length === 0) body += '<tr><td colspan="8" class="text-center text-secondary">暂无产品</td></tr>';
    products.forEach(p => {
      const hasImg = p.images && p.images.length > 0;
      body += `<tr><td>${p.id}</td><td class="text-primary">${p.productCode}</td><td class="font-bold">${p.brand}</td><td>${p.model}</td><td><span class="tag tag-purple">${p.category}</span></td><td>${p.correspondingModel || '-'}</td><td class="text-right font-bold">${UI.formatMoney(p.guidePrice)}</td><td>${hasImg ? '<span class="tag tag-green">' + p.images.length + '张</span>' : '<span class="text-secondary">无</span>'}</td></tr>`;
    });
    body += `</tbody></table></div>`;
    UI.modal('产品总数明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 7. 生产中明细
  production() {
    const productions = Store.getAll('productions').filter(p => p.status === '进行中' || p.status === '待开始');
    let body = `<div class="detail-summary">生产中共 <span class="text-warning font-bold">${productions.length}</span> 个工单</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>编号</th><th>订单编号</th><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>工作组</th><th>预计完成</th><th>状态</th></tr></thead><tbody>`;
    if (productions.length === 0) body += '<tr><td colspan="8" class="text-center text-secondary">暂无生产中工单</td></tr>';
    productions.forEach(p => {
      body += `<tr><td>${p.id}</td><td class="text-primary">${p.orderNo}</td><td class="font-bold">${p.brand}</td><td>${p.model}</td><td class="text-right">${p.quantity} ${p.unit}</td><td><span class="tag tag-blue">${p.workGroup}</span></td><td>${UI.formatDate(p.completeDate)}</td><td>${UI.statusTag(p.status)}</td></tr>`;
    });
    body += `</tbody></table></div>`;
    UI.modal('生产中明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // 8. 发货记录明细
  shipping() {
    const shipments = Store.getAll('shipments');
    let body = `<div class="detail-summary">共 <span class="font-bold">${shipments.length}</span> 条发货记录</div>`;
    body += `<div class="table-wrapper"><table class="data-table"><thead><tr><th>编号</th><th>订单编号</th><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>发货日期</th><th>运单号</th><th class="text-right">运费</th><th>状态</th></tr></thead><tbody>`;
    if (shipments.length === 0) body += '<tr><td colspan="9" class="text-center text-secondary">暂无发货记录</td></tr>';
    shipments.forEach(s => {
      body += `<tr><td>${s.id}</td><td class="text-primary">${s.orderNo}</td><td class="font-bold">${s.brand}</td><td>${s.model}</td><td class="text-right">${s.quantity} ${s.unit}</td><td>${UI.formatDate(s.shipDate)}</td><td>${s.trackingNo || '-'}</td><td class="text-right">${UI.formatMoney(s.freight)}</td><td>${UI.statusTag(s.status)}</td></tr>`;
    });
    body += `</tbody></table></div>`;
    UI.modal('发货记录明细', body, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  }
};

// ===== 表单组件 =====

// ---- 客户表单 ----
const CustomerForm = {
  open(id) {
    const c = id ? Store.getById('customers', id) : {};
    const isEdit = !!id;
    UI.modal(isEdit ? '编辑客户' : '新增客户', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">客户名 <span class="required">*</span></label>
          <input class="form-input" id="cf_customerName" value="${c.customerName || ''}" placeholder="请输入客户名">
        </div>
        <div class="form-group">
          <label class="form-label">联系电话 <span class="required">*</span></label>
          <input class="form-input" id="cf_phone" value="${c.phone || ''}" placeholder="请输入联系电话">
        </div>
        <div class="form-group">
          <label class="form-label">微信号</label>
          <input class="form-input" id="cf_wechat" value="${c.wechat || ''}" placeholder="请输入微信号">
        </div>
        <div class="form-group">
          <label class="form-label">公司名</label>
          <input class="form-input" id="cf_companyName" value="${c.companyName || ''}" placeholder="请输入公司名">
        </div>
        <div class="form-group" style="grid-column:1/-1">
          <label class="form-label">地址</label>
          <input class="form-input" id="cf_address" value="${c.address || ''}" placeholder="请输入地址">
        </div>
        <div class="form-group">
          <label class="form-label">结算方式</label>
          <select class="form-select" id="cf_settlementMethod">
            ${['现结','月结30天','月结60天','月结90天','预付款'].map(s => `<option value="${s}" ${c.settlementMethod===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">信用额度</label>
          <input class="form-input" id="cf_creditLimit" type="number" value="${c.creditLimit || 0}" placeholder="请输入信用额度">
        </div>
        <div class="form-group">
          <label class="form-label">信用等级</label>
          <select class="form-select" id="cf_creditLevel">
            ${['A级','B级','C级','D级'].map(s => `<option value="${s}" ${c.creditLevel===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">地区</label>
          <input class="form-input" id="cf_region" value="${c.region || ''}" placeholder="请输入地区">
        </div>
      </div>
      <div class="section-title">开票信息</div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">开票公司名</label>
          <input class="form-input" id="cf_billingCompany" value="${c.billingCompany || ''}" placeholder="请输入开票公司名">
        </div>
        <div class="form-group">
          <label class="form-label">税号</label>
          <input class="form-input" id="cf_taxNumber" value="${c.taxNumber || ''}" placeholder="请输入税号">
        </div>
        <div class="form-group">
          <label class="form-label">开户银行</label>
          <input class="form-input" id="cf_bankName" value="${c.bankName || ''}" placeholder="请输入开户银行">
        </div>
        <div class="form-group">
          <label class="form-label">开户账号</label>
          <input class="form-input" id="cf_bankAccount" value="${c.bankAccount || ''}" placeholder="请输入开户账号">
        </div>
        <div class="form-group">
          <label class="form-label">税务等级号</label>
          <input class="form-input" id="cf_taxLevel" value="${c.taxLevel || ''}" placeholder="请输入税务等级号">
        </div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="CustomerForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`);
  },

  save(id) {
    const name = document.getElementById('cf_customerName').value.trim();
    if (!name) { UI.toast('请输入客户名', 'error'); return; }
    const phone = document.getElementById('cf_phone').value.trim();
    if (!phone) { UI.toast('请输入联系电话', 'error'); return; }
    const data = {
      customerName: name,
      phone,
      wechat: document.getElementById('cf_wechat').value.trim(),
      companyName: document.getElementById('cf_companyName').value.trim(),
      address: document.getElementById('cf_address').value.trim(),
      settlementMethod: document.getElementById('cf_settlementMethod').value,
      creditLimit: Number(document.getElementById('cf_creditLimit').value) || 0,
      creditLevel: document.getElementById('cf_creditLevel').value,
      region: document.getElementById('cf_region').value.trim(),
      billingCompany: document.getElementById('cf_billingCompany').value.trim(),
      taxNumber: document.getElementById('cf_taxNumber').value.trim(),
      bankName: document.getElementById('cf_bankName').value.trim(),
      bankAccount: document.getElementById('cf_bankAccount').value.trim(),
      taxLevel: document.getElementById('cf_taxLevel').value.trim()
    };
    if (id) { Store.update('customers', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('customers', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('customers');
  },

  view(id) {
    const c = Store.getById('customers', id);
    if (!c) return;
    const bal = Store.getCustomerBalance(id);
    UI.modal('客户详情', `
      <div class="info-grid">
        <div class="info-item"><div class="info-label">客户编号</div><div class="info-value">${c.id}</div></div>
        <div class="info-item"><div class="info-label">客户名</div><div class="info-value">${c.customerName}</div></div>
        <div class="info-item"><div class="info-label">联系电话</div><div class="info-value">${c.phone}</div></div>
        <div class="info-item"><div class="info-label">微信号</div><div class="info-value">${c.wechat || '-'}</div></div>
        <div class="info-item"><div class="info-label">公司名</div><div class="info-value">${c.companyName || '-'}</div></div>
        <div class="info-item"><div class="info-label">地址</div><div class="info-value">${c.address || '-'}</div></div>
        <div class="info-item"><div class="info-label">地区</div><div class="info-value">${c.region || '-'}</div></div>
        <div class="info-item"><div class="info-label">结算方式</div><div class="info-value">${c.settlementMethod}</div></div>
        <div class="info-item"><div class="info-label">信用额度</div><div class="info-value">${UI.formatMoney(c.creditLimit)}</div></div>
        <div class="info-item"><div class="info-label">信用等级</div><div class="info-value">${c.creditLevel}</div></div>
      </div>
      <div class="section-title">开票信息</div>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">开票公司名</div><div class="info-value">${c.billingCompany || '-'}</div></div>
        <div class="info-item"><div class="info-label">税号</div><div class="info-value">${c.taxNumber || '-'}</div></div>
        <div class="info-item"><div class="info-label">开户银行</div><div class="info-value">${c.bankName || '-'}</div></div>
        <div class="info-item"><div class="info-label">开户账号</div><div class="info-value">${c.bankAccount || '-'}</div></div>
        <div class="info-item"><div class="info-label">税务等级号</div><div class="info-value">${c.taxLevel || '-'}</div></div>
      </div>
      <div class="section-title">账款信息</div>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">订单总额</div><div class="info-value">${UI.formatMoney(bal.totalOrders)}</div></div>
        <div class="info-item"><div class="info-label">退货总额</div><div class="info-value text-danger">${UI.formatMoney(bal.totalReturns)}</div></div>
        <div class="info-item"><div class="info-label">已收货款</div><div class="info-value text-success">${UI.formatMoney(bal.totalPayments)}</div></div>
        <div class="info-item"><div class="info-label">应收账款</div><div class="info-value ${bal.receivable > 0 ? 'text-danger' : 'text-success'}">${UI.formatMoney(bal.receivable)}</div></div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button><button class="btn btn-primary" onclick="UI.closeModal();CustomerForm.open('${id}')">编辑</button>`, 'large');
  }
};

// ---- 产品表单 ----
const ProductForm = {
  images: [],

  open(id) {
    const p = id ? Store.getById('products', id) : {};
    const isEdit = !!id;
    this.images = p.imageList ? JSON.parse(JSON.stringify(p.imageList)) : [];
    UI.modal(isEdit ? '编辑产品' : '新增产品', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">产品编号 <span class="required">*</span></label>
          <input class="form-input" id="pf_productCode" value="${p.productCode || ''}" placeholder="如: SP-X8">
        </div>
        <div class="form-group">
          <label class="form-label">产品类别</label>
          <select class="form-select" id="pf_category">
            ${['音响','低音炮','监听耳机','配件','线材','其他'].map(s => `<option value="${s}" ${p.category===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">产品品牌名称 <span class="required">*</span></label>
          <input class="form-input" id="pf_brand" value="${p.brand || ''}" placeholder="请输入品牌">
        </div>
        <div class="form-group">
          <label class="form-label">产品型号 <span class="required">*</span></label>
          <input class="form-input" id="pf_model" value="${p.model || ''}" placeholder="请输入型号">
        </div>
        <div class="form-group">
          <label class="form-label">指导单价</label>
          <input class="form-input" id="pf_guidePrice" type="number" value="${p.guidePrice || 0}" placeholder="请输入单价">
        </div>
        <div class="form-group">
          <label class="form-label">对应型号</label>
          <input class="form-input" id="pf_correspondingModel" value="${p.correspondingModel || ''}" placeholder="请输入对应型号">
        </div>
        <div class="form-group" style="grid-column:1/-1">
          <label class="form-label">备注</label>
          <textarea class="form-textarea" id="pf_remark" placeholder="请输入备注">${p.remark || ''}</textarea>
        </div>
      </div>

      <div class="img-upload-section">
        <label class="form-label">产品图片</label>
        <div class="img-drop-zone" id="imgDropZone">
          <div class="img-drop-inner" id="imgDropInner">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <div class="img-drop-text">拖入图片或粘贴(Ctrl+V)到此区域</div>
            <div class="img-drop-sub">也可点击下方按钮选择</div>
          </div>
          <input type="file" id="imgFileInput" accept="image/*" multiple style="display:none">
          <div class="img-upload-btns">
            <button class="btn btn-default btn-sm" onclick="document.getElementById('imgFileInput').click()">从文件选择</button>
            <button class="btn btn-default btn-sm" id="btnCamera" style="display:none">拍照上传</button>
            <button class="btn btn-default btn-sm" id="btnAlbum" style="display:none">从相册选择</button>
          </div>
        </div>
        <div class="img-preview-grid" id="imgPreviewGrid"></div>
        <div class="form-hint mt-8">支持 JPG/PNG/WebP 格式，图片将自动压缩存储。可上传多张。</div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="ProductForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`, 'large');

    this.renderImagePreview();
    this.bindImageEvents();
  },

  // ===== 图片预览渲染 =====
  renderImagePreview() {
    const grid = document.getElementById('imgPreviewGrid');
    if (!grid) return;
    grid.innerHTML = this.images.length === 0
      ? ''
      : this.images.map((src, i) => `
        <div class="img-preview-item">
          <img src="${src}" onclick="ProductForm.zoomImage(${i})">
          <button class="img-preview-remove" onclick="ProductForm.removeImage(${i})">&times;</button>
        </div>
      `).join('');
  },

  // ===== 图片事件绑定 =====
  bindImageEvents() {
    const dropZone = document.getElementById('imgDropZone');
    const fileInput = document.getElementById('imgFileInput');

    // 检测移动端
    const isMobile = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent) || window.innerWidth <= 1024;
    if (isMobile) {
      document.getElementById('btnCamera').style.display = '';
      document.getElementById('btnAlbum').style.display = '';
      document.getElementById('imgDropInner').style.display = 'none';
    }

    // 桌面端拖拽
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('drag-over'); });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
      files.forEach(f => this.processImageFile(f));
    });

    // 桌面端粘贴
    dropZone.addEventListener('paste', (e) => {
      const items = (e.clipboardData || window.clipboardData).items;
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) this.processImageFile(file);
        }
      }
    });

    // 点击区域触发文件选择（桌面端）
    dropZone.addEventListener('click', (e) => {
      if (isMobile) return;
      if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
        fileInput.click();
      }
    });

    // 文件选择
    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
      files.forEach(f => this.processImageFile(f));
      fileInput.value = '';
    });

    // 移动端拍照
    const cameraBtn = document.getElementById('btnCamera');
    if (cameraBtn) {
      cameraBtn.addEventListener('click', () => {
        const camInput = document.createElement('input');
        camInput.type = 'file';
        camInput.accept = 'image/*';
        camInput.capture = 'environment';
        camInput.addEventListener('change', (e) => {
          if (e.target.files[0]) this.processImageFile(e.target.files[0]);
        });
        camInput.click();
      });
    }

    // 移动端相册
    const albumBtn = document.getElementById('btnAlbum');
    if (albumBtn) {
      albumBtn.addEventListener('click', () => {
        const albumInput = document.createElement('input');
        albumInput.type = 'file';
        albumInput.accept = 'image/*';
        albumInput.multiple = true;
        albumInput.addEventListener('change', (e) => {
          const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
          files.forEach(f => this.processImageFile(f));
        });
        albumInput.click();
      });
    }
  },

  // ===== 处理图片文件（压缩+存储） =====
  processImageFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.compressImage(e.target.result, (compressed) => {
        this.images.push(compressed);
        this.renderImagePreview();
        UI.toast('图片已添加', 'success', 1500);
      });
    };
    reader.readAsDataURL(file);
  },

  // 压缩图片：最大宽度800px，JPEG质量0.7
  compressImage(dataUrl, callback) {
    const img = new Image();
    img.onload = () => {
      const maxSize = 800;
      let w = img.width, h = img.height;
      if (w > maxSize || h > maxSize) {
        if (w >= h) { h = Math.round(h * maxSize / w); w = maxSize; }
        else { w = Math.round(w * maxSize / h); h = maxSize; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = () => { callback(dataUrl); };
    img.src = dataUrl;
  },

  removeImage(index) {
    this.images.splice(index, 1);
    this.renderImagePreview();
  },

  zoomImage(index) {
    const src = this.images[index];
    UI.modal('图片预览', `<div class="img-zoom-container"><img src="${src}" class="img-zoom-img"></div>`, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  // ===== 详情查看 =====
  viewDetail(id) {
    const p = Store.getById('products', id);
    if (!p) return;
    const images = p.imageList || [];
    UI.modal('产品详情', `
      <div class="detail-section">
        <div class="detail-section-title">基本信息</div>
        <div class="detail-grid">
          <div class="detail-item"><span class="detail-label">产品编号</span><span class="detail-value">${p.productCode || '-'}</span></div>
          <div class="detail-item"><span class="detail-label">产品品牌</span><span class="detail-value">${p.brand || '-'}</span></div>
          <div class="detail-item"><span class="detail-label">产品型号</span><span class="detail-value">${p.model || '-'}</span></div>
          <div class="detail-item"><span class="detail-label">产品类别</span><span class="detail-value"><span class="tag tag-purple">${p.category || '-'}</span></span></div>
          <div class="detail-item"><span class="detail-label">对应型号</span><span class="detail-value">${p.correspondingModel || '-'}</span></div>
          <div class="detail-item"><span class="detail-label">指导单价</span><span class="detail-value font-bold text-primary">${UI.formatMoney(p.guidePrice)}</span></div>
        </div>
      </div>
      ${p.remark ? `
      <div class="detail-section">
        <div class="detail-section-title">备注</div>
        <div class="detail-remark">${p.remark}</div>
      </div>` : ''}
      <div class="detail-section">
        <div class="detail-section-title">产品图片 ${images.length > 0 ? `(${images.length}张)` : ''}</div>
        ${images.length > 0
          ? `<div class="detail-img-grid">${images.map((src, i) => `<div class="detail-img-item" onclick="ProductForm.zoomDetailImage('${id}', ${i})"><img src="${src}"></div>`).join('')}</div>`
          : `<div class="detail-no-img">暂无图片，请点击「编辑」上传产品图片</div>`
        }
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button><button class="btn btn-primary" onclick="UI.closeModal();ProductForm.open('${id}')">编辑</button>`, 'large');
  },

  zoomDetailImage(productId, index) {
    const p = Store.getById('products', productId);
    if (!p || !p.imageList) return;
    UI.modal('图片预览', `<div class="img-zoom-container"><img src="${p.imageList[index]}" class="img-zoom-img"></div>`, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  },

  save(id) {
    const code = document.getElementById('pf_productCode').value.trim();
    const brand = document.getElementById('pf_brand').value.trim();
    const model = document.getElementById('pf_model').value.trim();
    if (!code) { UI.toast('请输入产品编号', 'error'); return; }
    if (!brand) { UI.toast('请输入品牌名称', 'error'); return; }
    if (!model) { UI.toast('请输入产品型号', 'error'); return; }
    const data = {
      productCode: code,
      brand, model,
      category: document.getElementById('pf_category').value,
      guidePrice: Number(document.getElementById('pf_guidePrice').value) || 0,
      correspondingModel: document.getElementById('pf_correspondingModel').value.trim(),
      remark: document.getElementById('pf_remark').value.trim(),
      imageList: this.images
    };
    if (id) { Store.update('products', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('products', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('products');
  }
};

// ---- 订单表单 ----
const OrderForm = {
  items: [],

  open(id) {
    this.items = [];
    const o = id ? Store.getById('orders', id) : {};
    const isEdit = !!id;
    if (isEdit && o.items) this.items = JSON.parse(JSON.stringify(o.items));
    const customers = Store.getAll('customers');
    const products = Store.getAll('products');
    const today = new Date().toISOString().slice(0, 10);

    UI.modal(isEdit ? '编辑订单' : '新增订单', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">客户 <span class="required">*</span></label>
          <select class="form-select" id="of_customerId">
            <option value="">请选择客户</option>
            ${customers.map(c => `<option value="${c.id}" ${o.customerId===c.id?'selected':''}>${c.customerName}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">经办人 <span class="required">*</span></label>
          <input class="form-input" id="of_salesperson" value="${o.salesperson || ''}" placeholder="请输入经办人">
        </div>
        <div class="form-group">
          <label class="form-label">日期</label>
          <input class="form-input" id="of_date" type="date" value="${o.date || today}">
        </div>
        <div class="form-group">
          <label class="form-label">发货仓</label>
          <input class="form-input" id="of_warehouse" value="${o.warehouse || ''}" placeholder="请输入发货仓">
        </div>
        <div class="form-group">
          <label class="form-label">结算方式</label>
          <select class="form-select" id="of_settlementMethod">
            ${['现结','月结30天','月结60天','月结90天','预付款'].map(s => `<option value="${s}" ${o.settlementMethod===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="section-title">产品明细</div>
      <div id="orderItems" class="mb-16"></div>
      <button class="btn btn-default btn-sm" onclick="OrderForm.addItem()">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> 添加产品
      </button>

      <div class="section-title">合计</div>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">订单金额</div><div class="info-value font-lg" id="of_total">¥0.00</div></div>
        <div class="info-item"><div class="info-label">产品项数</div><div class="info-value font-lg" id="of_count">0</div></div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="OrderForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`, 'large');

    this.renderItems();
  },

  addItem() {
    const products = Store.getAll('products');
    this.items.push({ brand: '', model: '', quantity: 1, unit: '台', price: 0, correspondingModel: '', remark: '' });
    this.renderItems();
  },

  removeItem(idx) { this.items.splice(idx, 1); this.renderItems(); },

  onProductChange(idx) {
    const sel = document.getElementById(`item_product_${idx}`);
    const p = Store.getById('products', sel.value);
    if (p) {
      this.items[idx].brand = p.brand;
      this.items[idx].model = p.model;
      this.items[idx].price = p.guidePrice;
      this.items[idx].correspondingModel = p.correspondingModel;
      this.items[idx].unit = '台';
    }
    this.updateItemValues(idx);
    this.updateTotal();
  },

  updateItemValues(idx) {
    const q = Number(document.getElementById(`item_qty_${idx}`).value) || 0;
    const price = Number(document.getElementById(`item_price_${idx}`).value) || 0;
    this.items[idx].quantity = q;
    this.items[idx].price = price;
    this.items[idx].brand = document.getElementById(`item_brand_${idx}`).value;
    this.items[idx].model = document.getElementById(`item_model_${idx}`).value;
    this.items[idx].unit = document.getElementById(`item_unit_${idx}`).value;
    this.items[idx].correspondingModel = document.getElementById(`item_cmodel_${idx}`).value;
    this.items[idx].remark = document.getElementById(`item_remark_${idx}`).value;
    document.getElementById(`item_total_${idx}`).textContent = UI.formatMoney(q * price);
    this.updateTotal();
  },

  updateTotal() {
    const total = this.items.reduce((s, i) => s + (Number(i.quantity) || 0) * (Number(i.price) || 0), 0);
    document.getElementById('of_total').textContent = UI.formatMoney(total);
    document.getElementById('of_count').textContent = this.items.length;
  },

  renderItems() {
    const products = Store.getAll('products');
    const container = document.getElementById('orderItems');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = '<div class="text-secondary text-center" style="padding:20px">暂无产品明细，请点击下方添加产品</div>';
      return;
    }
    container.innerHTML = `<div class="table-wrapper"><table class="data-table"><thead><tr>
      <th>选择产品</th><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>单位</th><th class="text-right">单价</th><th class="text-right">小计</th><th>对应型号</th><th>备注</th><th></th>
    </tr></thead><tbody>
    ${this.items.map((item, idx) => `
      <tr>
        <td><select class="form-select" id="item_product_${idx}" onchange="OrderForm.onProductChange(${idx})" style="width:140px">
          <option value="">手动输入</option>
          ${products.map(p => `<option value="${p.id}" ${item.brand===p.brand && item.model===p.model ? 'selected' : ''}>${p.productCode} ${p.brand} ${p.model}</option>`).join('')}
        </select></td>
        <td><input class="form-input" id="item_brand_${idx}" value="${item.brand}" onchange="OrderForm.updateItemValues(${idx})" style="width:80px"></td>
        <td><input class="form-input" id="item_model_${idx}" value="${item.model}" onchange="OrderForm.updateItemValues(${idx})" style="width:100px"></td>
        <td><input class="form-input" id="item_qty_${idx}" type="number" value="${item.quantity}" onchange="OrderForm.updateItemValues(${idx})" style="width:60px;text-align:right"></td>
        <td><input class="form-input" id="item_unit_${idx}" value="${item.unit}" onchange="OrderForm.updateItemValues(${idx})" style="width:50px"></td>
        <td><input class="form-input" id="item_price_${idx}" type="number" value="${item.price}" onchange="OrderForm.updateItemValues(${idx})" style="width:80px;text-align:right"></td>
        <td class="text-right font-bold" id="item_total_${idx}">${UI.formatMoney((Number(item.quantity)||0)*(Number(item.price)||0))}</td>
        <td><input class="form-input" id="item_cmodel_${idx}" value="${item.correspondingModel}" onchange="OrderForm.updateItemValues(${idx})" style="width:80px"></td>
        <td><input class="form-input" id="item_remark_${idx}" value="${item.remark}" onchange="OrderForm.updateItemValues(${idx})" style="width:80px"></td>
        <td><button class="btn btn-ghost btn-sm text-danger" onclick="OrderForm.removeItem(${idx})">删除</button></td>
      </tr>
    `).join('')}
    </tbody></table></div>`;
  },

  save(id) {
    const customerId = document.getElementById('of_customerId').value;
    const salesperson = document.getElementById('of_salesperson').value.trim();
    if (!customerId) { UI.toast('请选择客户', 'error'); return; }
    if (!salesperson) { UI.toast('请输入经办人', 'error'); return; }
    if (this.items.length === 0) { UI.toast('请至少添加一项产品', 'error'); return; }
    const data = {
      customerId, salesperson,
      date: document.getElementById('of_date').value,
      warehouse: document.getElementById('of_warehouse').value.trim(),
      settlementMethod: document.getElementById('of_settlementMethod').value,
      items: this.items,
      status: id ? Store.getById('orders', id).status : '待排产'
    };
    if (id) { Store.update('orders', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('orders', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('orders');
  },

  view(id) {
    const o = Store.getById('orders', id);
    if (!o) return;
    const bal = Store.getOrderTotal(o);
    UI.modal('订单详情', `
      <div class="info-grid">
        <div class="info-item"><div class="info-label">订单编号</div><div class="info-value text-primary">${o.orderNo}</div></div>
        <div class="info-item"><div class="info-label">客户</div><div class="info-value">${UI.getCustomerName(o.customerId)}</div></div>
        <div class="info-item"><div class="info-label">经办人</div><div class="info-value">${o.salesperson}</div></div>
        <div class="info-item"><div class="info-label">日期</div><div class="info-value">${o.date}</div></div>
        <div class="info-item"><div class="info-label">发货仓</div><div class="info-value">${o.warehouse || '-'}</div></div>
        <div class="info-item"><div class="info-label">结算方式</div><div class="info-value">${o.settlementMethod}</div></div>
        <div class="info-item"><div class="info-label">状态</div><div class="info-value">${UI.statusTag(o.status)}</div></div>
        <div class="info-item"><div class="info-label">合计金额</div><div class="info-value font-lg text-primary">${UI.formatMoney(bal)}</div></div>
      </div>
      <div class="section-title">产品明细</div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead><tr><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>单位</th><th class="text-right">单价</th><th class="text-right">小计</th><th>对应型号</th><th>备注</th></tr></thead>
          <tbody>
            ${(o.items||[]).map(i => `<tr>
              <td>${i.brand}</td><td>${i.model}</td><td class="text-right">${i.quantity}</td><td>${i.unit}</td>
              <td class="text-right">${UI.formatMoney(i.price)}</td><td class="text-right font-bold">${UI.formatMoney(i.quantity*i.price)}</td>
              <td>${i.correspondingModel||'-'}</td><td class="text-secondary">${i.remark||'-'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button><button class="btn btn-primary" onclick="UI.closeModal();OrderForm.open('${id}')">编辑</button>`, 'large');
  }
};

// ---- 退货表单 ----
const ReturnForm = {
  items: [],

  open(id) {
    this.items = [];
    const r = id ? Store.getById('returns', id) : {};
    const isEdit = !!id;
    if (isEdit && r.items) this.items = JSON.parse(JSON.stringify(r.items));
    const customers = Store.getAll('customers');
    const today = new Date().toISOString().slice(0, 10);

    UI.modal(isEdit ? '编辑退货' : '新增退货', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">客户 <span class="required">*</span></label>
          <select class="form-select" id="rf_customerId">
            <option value="">请选择客户</option>
            ${customers.map(c => `<option value="${c.id}" ${r.customerId===c.id?'selected':''}>${c.customerName}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">经办人 <span class="required">*</span></label>
          <input class="form-input" id="rf_salesperson" value="${r.salesperson || ''}" placeholder="请输入经办人">
        </div>
        <div class="form-group">
          <label class="form-label">日期</label>
          <input class="form-input" id="rf_date" type="date" value="${r.date || today}">
        </div>
        <div class="form-group">
          <label class="form-label">处理方式</label>
          <select class="form-select" id="rf_status">
            ${['待处理','已处理'].map(s => `<option value="${s}" ${r.status===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="section-title">退货明细</div>
      <div id="returnItems" class="mb-16"></div>
      <button class="btn btn-default btn-sm" onclick="ReturnForm.addItem()">+ 添加产品</button>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="ReturnForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`, 'large');

    this.renderItems();
  },

  addItem() {
    this.items.push({ brand: '', model: '', quantity: 1, unit: '台', correspondingModel: '', remark: '' });
    this.renderItems();
  },

  removeItem(idx) { this.items.splice(idx, 1); this.renderItems(); },

  updateItem(idx) {
    this.items[idx].brand = document.getElementById(`ri_brand_${idx}`).value;
    this.items[idx].model = document.getElementById(`ri_model_${idx}`).value;
    this.items[idx].quantity = Number(document.getElementById(`ri_qty_${idx}`).value) || 0;
    this.items[idx].unit = document.getElementById(`ri_unit_${idx}`).value;
    this.items[idx].correspondingModel = document.getElementById(`ri_cmodel_${idx}`).value;
    this.items[idx].remark = document.getElementById(`ri_remark_${idx}`).value;
  },

  renderItems() {
    const container = document.getElementById('returnItems');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = '<div class="text-secondary text-center" style="padding:20px">暂无退货明细</div>';
      return;
    }
    container.innerHTML = `<div class="table-wrapper"><table class="data-table"><thead><tr>
      <th>品牌</th><th>型号</th><th class="text-right">数量</th><th>单位</th><th>对应型号</th><th>备注</th><th></th>
    </tr></thead><tbody>
    ${this.items.map((item, idx) => `
      <tr>
        <td><input class="form-input" id="ri_brand_${idx}" value="${item.brand}" onchange="ReturnForm.updateItem(${idx})" style="width:100px"></td>
        <td><input class="form-input" id="ri_model_${idx}" value="${item.model}" onchange="ReturnForm.updateItem(${idx})" style="width:120px"></td>
        <td><input class="form-input" id="ri_qty_${idx}" type="number" value="${item.quantity}" onchange="ReturnForm.updateItem(${idx})" style="width:70px;text-align:right"></td>
        <td><input class="form-input" id="ri_unit_${idx}" value="${item.unit}" onchange="ReturnForm.updateItem(${idx})" style="width:50px"></td>
        <td><input class="form-input" id="ri_cmodel_${idx}" value="${item.correspondingModel}" onchange="ReturnForm.updateItem(${idx})" style="width:90px"></td>
        <td><input class="form-input" id="ri_remark_${idx}" value="${item.remark}" onchange="ReturnForm.updateItem(${idx})" style="width:100px"></td>
        <td><button class="btn btn-ghost btn-sm text-danger" onclick="ReturnForm.removeItem(${idx})">删除</button></td>
      </tr>
    `).join('')}
    </tbody></table></div>`;
  },

  save(id) {
    const customerId = document.getElementById('rf_customerId').value;
    const salesperson = document.getElementById('rf_salesperson').value.trim();
    if (!customerId) { UI.toast('请选择客户', 'error'); return; }
    if (!salesperson) { UI.toast('请输入经办人', 'error'); return; }
    if (this.items.length === 0) { UI.toast('请至少添加一项退货明细', 'error'); return; }
    const data = {
      customerId, salesperson,
      date: document.getElementById('rf_date').value,
      items: this.items,
      status: document.getElementById('rf_status').value
    };
    if (id) { Store.update('returns', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('returns', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('returns');
  }
};

// ---- 排产表单 ----
const ProductionForm = {
  open(id) {
    const p = id ? Store.getById('productions', id) : {};
    const isEdit = !!id;
    const today = new Date().toISOString().slice(0, 10);
    UI.modal(isEdit ? '编辑排产' : '新增排产', `
      <div class="form-grid">
        <div class="form-group"><label class="form-label">订单编号 <span class="required">*</span></label><input class="form-input" id="pr_orderNo" value="${p.orderNo || ''}" placeholder="请输入关联订单号"></div>
        <div class="form-group"><label class="form-label">品牌</label><input class="form-input" id="pr_brand" value="${p.brand || ''}" placeholder="请输入品牌"></div>
        <div class="form-group"><label class="form-label">产品型号</label><input class="form-input" id="pr_model" value="${p.model || ''}" placeholder="请输入型号"></div>
        <div class="form-group"><label class="form-label">数量</label><input class="form-input" id="pr_quantity" type="number" value="${p.quantity || 0}" placeholder="请输入数量"></div>
        <div class="form-group"><label class="form-label">单位</label><input class="form-input" id="pr_unit" value="${p.unit || '台'}" placeholder="单位"></div>
        <div class="form-group"><label class="form-label">对应型号</label><input class="form-input" id="pr_correspondingModel" value="${p.correspondingModel || ''}" placeholder="对应型号"></div>
        <div class="form-group"><label class="form-label">工作组</label><select class="form-select" id="pr_workGroup">
          ${['车间A组','车间B组','车间C组','成品组'].map(s => `<option value="${s}" ${p.workGroup===s?'selected':''}>${s}</option>`).join('')}
        </select></div>
        <div class="form-group"><label class="form-label">完成日期</label><input class="form-input" id="pr_completeDate" type="date" value="${p.completeDate || today}"></div>
        <div class="form-group"><label class="form-label">状态</label><select class="form-select" id="pr_status">
          ${['待开始','进行中','已完成'].map(s => `<option value="${s}" ${p.status===s?'selected':''}>${s}</option>`).join('')}
        </select></div>
        <div class="form-group" style="grid-column:1/-1"><label class="form-label">备注</label><textarea class="form-textarea" id="pr_remark">${p.remark || ''}</textarea></div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="ProductionForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`);
  },

  save(id) {
    const orderNo = document.getElementById('pr_orderNo').value.trim();
    if (!orderNo) { UI.toast('请输入订单编号', 'error'); return; }
    const data = {
      orderNo,
      brand: document.getElementById('pr_brand').value.trim(),
      model: document.getElementById('pr_model').value.trim(),
      quantity: Number(document.getElementById('pr_quantity').value) || 0,
      unit: document.getElementById('pr_unit').value.trim(),
      correspondingModel: document.getElementById('pr_correspondingModel').value.trim(),
      workGroup: document.getElementById('pr_workGroup').value,
      completeDate: document.getElementById('pr_completeDate').value,
      status: document.getElementById('pr_status').value,
      remark: document.getElementById('pr_remark').value.trim()
    };
    if (id) { Store.update('productions', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('productions', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('production');
  }
};

// ---- 仓库表单 ----
const WarehouseForm = {
  open(id) {
    const w = id ? Store.getById('warehouse', id) : {};
    const isEdit = !!id;
    const today = new Date().toISOString().slice(0, 10);
    UI.modal(isEdit ? '编辑入库' : '新增入库', `
      <div class="form-grid">
        <div class="form-group"><label class="form-label">订单编号 <span class="required">*</span></label><input class="form-input" id="wf_orderNo" value="${w.orderNo || ''}" placeholder="请输入关联订单号"></div>
        <div class="form-group"><label class="form-label">品牌</label><input class="form-input" id="wf_brand" value="${w.brand || ''}" placeholder="请输入品牌"></div>
        <div class="form-group"><label class="form-label">产品型号</label><input class="form-input" id="wf_model" value="${w.model || ''}" placeholder="请输入型号"></div>
        <div class="form-group"><label class="form-label">数量</label><input class="form-input" id="wf_quantity" type="number" value="${w.quantity || 0}" placeholder="请输入数量"></div>
        <div class="form-group"><label class="form-label">单位</label><input class="form-input" id="wf_unit" value="${w.unit || '台'}" placeholder="单位"></div>
        <div class="form-group"><label class="form-label">对应型号</label><input class="form-input" id="wf_correspondingModel" value="${w.correspondingModel || ''}" placeholder="对应型号"></div>
        <div class="form-group"><label class="form-label">完成日期</label><input class="form-input" id="wf_completeDate" type="date" value="${w.completeDate || today}"></div>
        <div class="form-group"><label class="form-label">状态</label><select class="form-select" id="wf_status">
          ${['在库','已出库'].map(s => `<option value="${s}" ${w.status===s?'selected':''}>${s}</option>`).join('')}
        </select></div>
        <div class="form-group" style="grid-column:1/-1"><label class="form-label">备注</label><textarea class="form-textarea" id="wf_remark">${w.remark || ''}</textarea></div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="WarehouseForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`);
  },

  save(id) {
    const orderNo = document.getElementById('wf_orderNo').value.trim();
    if (!orderNo) { UI.toast('请输入订单编号', 'error'); return; }
    const data = {
      orderNo,
      brand: document.getElementById('wf_brand').value.trim(),
      model: document.getElementById('wf_model').value.trim(),
      quantity: Number(document.getElementById('wf_quantity').value) || 0,
      unit: document.getElementById('wf_unit').value.trim(),
      correspondingModel: document.getElementById('wf_correspondingModel').value.trim(),
      completeDate: document.getElementById('wf_completeDate').value,
      status: document.getElementById('wf_status').value,
      remark: document.getElementById('wf_remark').value.trim()
    };
    if (id) { Store.update('warehouse', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('warehouse', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('warehouse');
  }
};

// ---- 发货表单 ----
const ShippingForm = {
  open(id) {
    const s = id ? Store.getById('shipments', id) : {};
    const isEdit = !!id;
    const today = new Date().toISOString().slice(0, 10);
    UI.modal(isEdit ? '编辑发货' : '新增发货', `
      <div class="form-grid">
        <div class="form-group"><label class="form-label">订单编号 <span class="required">*</span></label><input class="form-input" id="sf_orderNo" value="${s.orderNo || ''}" placeholder="请输入关联订单号"></div>
        <div class="form-group"><label class="form-label">品牌</label><input class="form-input" id="sf_brand" value="${s.brand || ''}" placeholder="请输入品牌"></div>
        <div class="form-group"><label class="form-label">产品型号</label><input class="form-input" id="sf_model" value="${s.model || ''}" placeholder="请输入型号"></div>
        <div class="form-group"><label class="form-label">数量</label><input class="form-input" id="sf_quantity" type="number" value="${s.quantity || 0}" placeholder="请输入数量"></div>
        <div class="form-group"><label class="form-label">单位</label><input class="form-input" id="sf_unit" value="${s.unit || '台'}" placeholder="单位"></div>
        <div class="form-group"><label class="form-label">发货日期</label><input class="form-input" id="sf_shipDate" type="date" value="${s.shipDate || today}"></div>
        <div class="form-group"><label class="form-label">运单号</label><input class="form-input" id="sf_trackingNo" value="${s.trackingNo || ''}" placeholder="请输入运单号"></div>
        <div class="form-group"><label class="form-label">运费</label><input class="form-input" id="sf_freight" type="number" value="${s.freight || 0}" placeholder="请输入运费"></div>
        <div class="form-group"><label class="form-label">状态</label><select class="form-select" id="sf_status">
          ${['待发货','已发货'].map(st => `<option value="${st}" ${s.status===st?'selected':''}>${st}</option>`).join('')}
        </select></div>
        <div class="form-group" style="grid-column:1/-1"><label class="form-label">运单存照(URL)</label><input class="form-input" id="sf_trackingPhoto" value="${s.trackingPhoto || ''}" placeholder="运单照片链接"></div>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="ShippingForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`);
  },

  save(id) {
    const orderNo = document.getElementById('sf_orderNo').value.trim();
    if (!orderNo) { UI.toast('请输入订单编号', 'error'); return; }
    const data = {
      orderNo,
      brand: document.getElementById('sf_brand').value.trim(),
      model: document.getElementById('sf_model').value.trim(),
      quantity: Number(document.getElementById('sf_quantity').value) || 0,
      unit: document.getElementById('sf_unit').value.trim(),
      shipDate: document.getElementById('sf_shipDate').value,
      trackingNo: document.getElementById('sf_trackingNo').value.trim(),
      freight: Number(document.getElementById('sf_freight').value) || 0,
      trackingPhoto: document.getElementById('sf_trackingPhoto').value.trim(),
      status: document.getElementById('sf_status').value
    };
    if (id) { Store.update('shipments', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('shipments', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('shipping');
  }
};

// ---- 收款表单 ----
const PaymentForm = {
  open(id) {
    const p = id ? Store.getById('payments', id) : {};
    const isEdit = !!id;
    const customers = Store.getAll('customers');
    const today = new Date().toISOString().slice(0, 10);
    UI.modal(isEdit ? '编辑收款' : '登记收款', `
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">客户 <span class="required">*</span></label>
          <select class="form-select" id="pay_customerId">
            <option value="">请选择客户</option>
            ${customers.map(c => `<option value="${c.id}" ${p.customerId===c.id?'selected':''}>${c.customerName}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">收款日期</label><input class="form-input" id="pay_paymentDate" type="date" value="${p.paymentDate || today}"></div>
        <div class="form-group">
          <label class="form-label">结算方式</label>
          <select class="form-select" id="pay_settlementMethod">
            ${['银行转账','现金','承兑汇票','微信支付','支付宝','其他'].map(s => `<option value="${s}" ${p.settlementMethod===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">金额</label><input class="form-input" id="pay_amount" type="number" value="${p.amount || 0}" placeholder="请输入金额" oninput="PaymentForm.calcTax()"></div>
        <div class="form-group"><label class="form-label">税率(%)</label><input class="form-input" id="pay_taxRate" type="number" step="0.01" value="${p.taxRate !== undefined && p.taxRate !== null ? p.taxRate : 13}" placeholder="默认13" oninput="PaymentForm.calcTax()"></div>
        <div class="form-group"><label class="form-label">税额</label><input class="form-input" id="pay_tax" type="number" value="${p.tax || 0}" placeholder="自动计算" oninput="PaymentForm.calcTotal()"></div>
        <div class="form-group"><label class="form-label">合计</label><input class="form-input" id="pay_total" type="number" value="${p.total || 0}" placeholder="自动计算" readonly></div>
        <div class="form-group" style="grid-column:1/-1"><label class="form-label">汇款单位</label><input class="form-input" id="pay_remittanceUnit" value="${p.remittanceUnit || ''}" placeholder="请输入汇款单位"></div>
      </div>
      <div class="form-hint">税额 = 金额 / (1 + 税率) * 税率，合计 = 金额 + 税额。税率不填默认13%</div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">取消</button><button class="btn btn-primary" onclick="PaymentForm.save(${id ? `'${id}'` : 'null'})">${isEdit ? '保存' : '新增'}</button>`);
  },

  calcTax() {
    const amount = Number(document.getElementById('pay_amount').value) || 0;
    let taxRate = Number(document.getElementById('pay_taxRate').value);
    if (isNaN(taxRate) || !taxRate || taxRate <= 0) taxRate = 13;
    const rate = taxRate / 100;
    const tax = amount / (1 + rate) * rate;
    document.getElementById('pay_tax').value = tax.toFixed(2);
    document.getElementById('pay_total').value = (amount + tax).toFixed(2);
  },

  calcTotal() {
    const amount = Number(document.getElementById('pay_amount').value) || 0;
    const tax = Number(document.getElementById('pay_tax').value) || 0;
    document.getElementById('pay_total').value = (amount + tax).toFixed(2);
  },

  save(id) {
    const customerId = document.getElementById('pay_customerId').value;
    if (!customerId) { UI.toast('请选择客户', 'error'); return; }
    const data = {
      customerId,
      paymentDate: document.getElementById('pay_paymentDate').value,
      settlementMethod: document.getElementById('pay_settlementMethod').value,
      amount: Number(document.getElementById('pay_amount').value) || 0,
      taxRate: Number(document.getElementById('pay_taxRate').value) || 13,
      tax: Number(document.getElementById('pay_tax').value) || 0,
      total: Number(document.getElementById('pay_total').value) || 0,
      remittanceUnit: document.getElementById('pay_remittanceUnit').value.trim()
    };
    if (id) { Store.update('payments', id, data); UI.toast('保存成功', 'success'); }
    else { Store.add('payments', data); UI.toast('新增成功', 'success'); }
    UI.closeModal();
    App.renderPage('finance');
  }
};

// ---- 财务对账详情 ----
const FinanceForm = {
  view(customerId) {
    const c = Store.getById('customers', customerId);
    if (!c) return;
    const bal = Store.getCustomerBalance(customerId);
    const orders = Store.getAll('orders').filter(o => o.customerId === customerId);
    const returns = Store.getAll('returns').filter(r => r.customerId === customerId);
    const payments = Store.getAll('payments').filter(p => p.customerId === customerId);

    UI.modal(`${c.customerName} - 客户明细对账单`, `
      <div class="info-grid mb-16">
        <div class="info-item"><div class="info-label">客户编号</div><div class="info-value">${c.id}</div></div>
        <div class="info-item"><div class="info-label">前期结存</div><div class="info-value">${UI.formatMoney(0)}</div></div>
        <div class="info-item"><div class="info-label">已收货款</div><div class="info-value text-success">${UI.formatMoney(bal.totalPayments)}</div></div>
        <div class="info-item"><div class="info-label">应收货款</div><div class="info-value ${bal.receivable > 0 ? 'text-danger' : 'text-success'}">${UI.formatMoney(bal.receivable)}</div></div>
        <div class="info-item"><div class="info-label">客户等级</div><div class="info-value">${c.creditLevel}</div></div>
      </div>

      <div class="section-title">订单明细</div>
      <div class="table-wrapper mb-16">
        <table class="data-table">
          <thead><tr><th>订单编号</th><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>单位</th><th class="text-right">单价</th><th class="text-right">运费</th><th class="text-right">合计</th><th>结算方式</th><th>备注</th></tr></thead>
          <tbody>
            ${orders.length === 0 ? '<tr><td colspan="10" class="text-center text-secondary">暂无订单</td></tr>' : ''}
            ${orders.flatMap(o => (o.items||[]).map(i => `<tr>
              <td class="text-primary">${o.orderNo}</td><td>${i.brand}</td><td>${i.model}</td>
              <td class="text-right">${i.quantity}</td><td>${i.unit}</td>
              <td class="text-right">${UI.formatMoney(i.price)}</td><td class="text-right">¥0.00</td>
              <td class="text-right font-bold">${UI.formatMoney(i.quantity*i.price)}</td>
              <td>${o.settlementMethod}</td><td class="text-secondary font-sm">${i.remark||'-'}</td>
            </tr>`)).join('')}
          </tbody>
          <tfoot><tr style="border-top:2px solid #d9d9d9"><td colspan="7" class="font-bold">合计</td><td class="text-right font-bold">${UI.formatMoney(bal.totalOrders)}</td><td colspan="2"></td></tr></tfoot>
        </table>
      </div>

      <div class="section-title">退货明细</div>
      <div class="table-wrapper mb-16">
        <table class="data-table">
          <thead><tr><th>退货编号</th><th>品牌</th><th>型号</th><th class="text-right">数量</th><th>单位</th><th>处理方式</th><th>备注</th></tr></thead>
          <tbody>
            ${returns.length === 0 ? '<tr><td colspan="7" class="text-center text-secondary">暂无退货</td></tr>' : ''}
            ${returns.flatMap(r => (r.items||[]).map(i => `<tr>
              <td class="text-primary">${r.returnNo}</td><td>${i.brand}</td><td>${i.model}</td>
              <td class="text-right">${i.quantity}</td><td>${i.unit}</td>
              <td>${r.status}</td><td class="text-secondary font-sm">${i.remark||'-'}</td>
            </tr>`)).join('')}
          </tbody>
        </table>
      </div>

      <div class="section-title">收款明细</div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead><tr><th>编号</th><th>收款日期</th><th>结算方式</th><th class="text-right">金额</th><th class="text-right">税率</th><th class="text-right">税额</th><th class="text-right">合计</th><th>汇款单位</th></tr></thead>
          <tbody>
            ${payments.length === 0 ? '<tr><td colspan="8" class="text-center text-secondary">暂无收款</td></tr>' : ''}
            ${payments.map(p => `<tr>
              <td>${p.id}</td><td>${p.paymentDate}</td><td><span class="tag tag-blue">${p.settlementMethod}</span></td>
              <td class="text-right">${UI.formatMoney(p.amount)}</td><td class="text-right text-secondary">${p.taxRate !== undefined && p.taxRate !== null ? p.taxRate + '%' : '13%'}</td><td class="text-right text-secondary">${UI.formatMoney(p.tax)}</td>
              <td class="text-right font-bold">${UI.formatMoney(p.total)}</td><td class="text-secondary">${p.remittanceUnit||'-'}</td>
            </tr>`).join('')}
          </tbody>
          <tfoot><tr style="border-top:2px solid #d9d9d9"><td colspan="4" class="font-bold">合计</td><td class="text-right font-bold">${UI.formatMoney(bal.totalPayments)}</td><td></td><td></td><td></td></tr></tfoot>
        </table>
      </div>
    `, `<button class="btn btn-default" onclick="UI.closeModal()">关闭</button>`, 'large');
  }
};

// ===== 数据导出导入 =====
function exportData() {
  const blob = new Blob([JSON.stringify(Store.data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `订单应收数据_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  UI.toast('数据已导出', 'success');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      await Store.importData(data);
      UI.toast('数据导入成功', 'success');
      App.renderPage('settings');
    } catch(err) {
      UI.toast('文件格式错误', 'error');
    }
  };
  reader.readAsText(file);
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  // 绑定财务Tab切换
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab') && e.target.dataset.tab) {
      const tab = e.target.dataset.tab;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      const target = document.getElementById('tab-' + tab);
      if (target) target.classList.remove('hidden');
    }
  });
});
