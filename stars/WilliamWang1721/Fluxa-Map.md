---
project: Fluxa-Map
stars: 58
description: |-
    Payments-Maps is a payment method browsing map created for credit card enthusiasts. Anyone can add a marked location on the map, and all users can view it.
url: https://github.com/WilliamWang1721/Fluxa-Map
---

# 🗺️ Payments Maps - 智能支付地图平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green.svg)](https://supabase.com/)

一个专为信用卡和支付爱好者设计的智能地图平台，帮助用户发现和分享支持多种支付方式的商户信息。特别针对外国来华人士优化，提供多语言支持和新手引导功能。

## ✨ 核心功能

### 🌍 多语言支持
- **完整国际化**：支持中文、英语、俄语、德语四种语言
- **智能语言检测**：自动识别用户浏览器语言偏好
- **实时切换**：无需刷新即可切换界面语言
- **本地化存储**：记住用户语言偏好设置

### 🗺️ 智能地图功能
- **高德地图集成**：精确的地理位置服务
- **实时定位**：自动获取用户当前位置
- **商户标记**：直观的图标显示不同支付方式
- **聚合显示**：智能聚合附近商户，避免标记重叠
- **搜索功能**：支持商户名称和地址搜索

### 💳 支付信息管理
- **多种支付方式**：Apple Pay、Google Pay、外卡、银联、移动支付等
- **详细POS信息**：POS机型号、收单机构、支持的卡种
- **验证系统**：用户可验证商户信息的真实性
- **品牌管理**：支持商户品牌分类和筛选

### 👥 用户系统
- **多平台登录**：支持LinuxDo、GitHub、Google等第三方登录
- **权限分级**：普通用户、管理员、超级管理员不同权限
- **角色管理**：管理员可在管理中心调整用户角色与默认地点
- **用户历史**：记录用户的搜索和访问历史

### 🎯 外国用户优化
- **新手引导**：详细的支付方式科普和使用教程
- **外卡友好标识**：特殊标记支持外卡的商户
- **支付指南**：图文并茂的支付操作指导
- **紧急帮助**：24小时多语言客服支持

### 📱 移动端优化
- **响应式设计**：完美适配手机、平板、桌面端
- **触摸优化**：针对移动设备的交互体验
- **离线支持**：基础功能支持离线使用
- **快速加载**：优化的资源加载和缓存策略

## 🛠️ 技术架构

### 前端技术栈
```
├── React 18.3.1          # 前端框架
├── TypeScript 5.8.3      # 类型安全
├── Vite 6.3.5           # 构建工具
├── Tailwind CSS 3.4.17  # 样式框架
├── React Router 7.3.0    # 路由管理
├── Framer Motion 12.23   # 动画库
├── React i18next 15.7    # 国际化
├── Zustand 5.0.3        # 状态管理
└── Lucide React 0.511    # 图标库
```

### 后端服务
```
├── Supabase             # 后端即服务
│   ├── PostgreSQL       # 数据库
│   ├── Auth             # 用户认证
│   ├── Storage          # 文件存储
│   └── Real-time        # 实时数据同步
├── 高德地图 API          # 地图服务
└── 第三方登录 OAuth      # 社交登录
```

### 数据库设计
```sql
-- 核心表结构
pos_machines        # POS机信息表
users              # 用户信息表
brands             # 品牌信息表
user_favorites     # 用户收藏表
user_history       # 用户历史表
comments           # 评论表
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐)
- 现代浏览器支持

### 1. 克隆项目
```bash
git clone https://github.com/WilliamWang1721/Payments-Maps.git
cd Payments-Maps
```

### 2. 安装依赖
```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 环境配置
复制环境变量模板文件：
```bash
cp .env.example .env
```

编辑 `.env` 文件，配置必要的API密钥：
```env
# Supabase 配置
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# 高德地图配置
VITE_AMAP_KEY=your_amap_api_key
VITE_AMAP_SECURITY_JS_CODE=your_amap_security_js_code

# 第三方登录配置 (可选)
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_MICROSOFT_CLIENT_ID=your_microsoft_client_id
VITE_LINUXDO_CLIENT_ID=your_linuxdo_client_id

# LinuxDO 仅服务端密钥（禁止放到 VITE_ 前缀）
LINUXDO_CLIENT_ID=your_linuxdo_client_id
LINUXDO_CLIENT_SECRET=your_linuxdo_client_secret
LINUXDO_REDIRECT_URI=https://your-domain.com/auth/linuxdo/callback

# API 安全配置
APP_ORIGIN=https://your-domain.com
ALLOWED_ORIGINS=https://your-domain.com
PASSKEY_ORIGIN=https://your-domain.com
```
⚠️ `VITE_*` 变量会被打包到浏览器端，任何密钥（如 OAuth client secret / Supabase service role key）都必须使用非 `VITE_` 变量并只在服务端配置。

### 4. 启动开发服务器
```bash
pnpm dev
```

应用将在 `http://localhost:5173` 启动。

### 5. 构建生产版本
```bash
# 构建
pnpm build

# 预览构建结果
pnpm preview
```

## 📋 API 配置指南

### Supabase 设置
1. 在 [Supabase](https://supabase.com) 创建新项目
2. 在项目设置中获取 URL 和 anon key
3. 运行数据库迁移文件（位于 `supabase/migrations/`）
4. 配置行级安全策略（RLS）

### 高德地图设置
1. 在 [高德开放平台](https://lbs.amap.com) 注册账号
2. 创建应用并获取 API Key
3. 配置安全密钥和域名白名单
4. 启用所需的地图服务

### 第三方登录设置
详细配置请参考：
- [GitHub OAuth 设置](./GOOGLE_OAUTH_SETUP.md)
- [Google OAuth 设置](./GOOGLE_OAUTH_SETUP.md)

## 🗂️ 项目结构

```
src/
├── components/          # 可复用组件
│   ├── ui/             # 基础UI组件
│   ├── Layout.tsx      # 布局组件
│   ├── LanguageSwitcher.tsx  # 语言切换
│   └── ...
├── pages/              # 页面组件
│   ├── Map.tsx         # 地图页面
│   ├── List.tsx        # 列表页面
│   ├── AddPOS.tsx      # 添加POS页面
│   └── ...
├── hooks/              # 自定义Hooks
│   ├── usePermissions.ts
│   ├── useTheme.ts
│   └── ...
├── lib/                # 工具库
│   ├── supabase.ts     # Supabase客户端
│   ├── i18n.ts         # 国际化配置
│   ├── utils.ts        # 通用工具函数
│   └── ...
├── locales/            # 多语言文件
│   ├── en.json         # 英语
│   ├── ru.json         # 俄语
│   ├── de.json         # 德语
│   └── ...
├── stores/             # 状态管理
│   ├── useAuthStore.ts # 认证状态
│   └── useMapStore.ts  # 地图状态
├── types/              # TypeScript类型定义
├── utils/              # 工具函数
└── styles/             # 样式文件
```

## 🎨 设计系统

### 颜色规范
```css
/* 主色调 */
--primary: #2563EB;      /* 蓝色 */
--secondary: #10B981;    /* 绿色 */
--accent: #F59E0B;       /* 橙色 */

/* 功能色 */
--success: #059669;      /* 成功 */
--warning: #D97706;      /* 警告 */
--error: #DC2626;        /* 错误 */
--info: #0284C7;         /* 信息 */

/* 中性色 */
--gray-50: #F9FAFB;
--gray-900: #111827;
```

### 字体规范
- **标题**：16px-24px，font-weight: 600
- **正文**：14px，font-weight: 400
- **辅助文字**：12px，font-weight: 400
- **按钮文字**：14px，font-weight: 500

## 🔧 开发指南

### 代码规范
- 使用 ESLint 进行代码检查
- 使用 TypeScript 确保类型安全
- 遵循 React Hooks 最佳实践
- 组件采用函数式编程风格

### 提交规范
```bash
# 功能开发
git commit -m "feat: 添加新手引导功能"

# 问题修复
git commit -m "fix: 修复地图标记显示问题"

# 文档更新
git commit -m "docs: 更新API文档"

# 样式调整
git commit -m "style: 优化移动端布局"
```

### 测试
```bash
# 类型检查
pnpm check

# 代码检查
pnpm lint

# 构建测试
pnpm build
```

## 🚀 部署指南

### Vercel 部署 (推荐)
1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

### 手动部署
```bash
# 构建项目
pnpm build

# 部署 dist 目录到服务器
# 配置 nginx 或其他 web 服务器
```

### Docker 部署
```dockerfile
# Dockerfile 示例
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📊 功能特性

### ✅ 已实现功能
- [x] 基础地图展示和商户标记
- [x] 用户认证和权限管理
- [x] POS机信息的增删改查
- [x] 多语言支持（中英俄德）
- [x] 品牌管理和筛选
- [x] 用户收藏和历史记录
- [x] 用户角色与默认地点管理
- [x] 响应式设计
- [x] 第三方登录集成

### 🚧 开发中功能
- [ ] 新手引导系统（交互式教程、支付方式介绍）
- [ ] 外国用户支付体验优化
- [ ] 智能问答和帮助中心
- [ ] 语音导航功能
- [ ] 离线地图支持
- [ ] 实时聊天客服

### 🔮 计划功能
- [ ] POS机使用模拟器
- [ ] 个性化支付推荐
- [ ] 用户反馈和评价系统
- [ ] 商户评价系统
- [ ] 支付成功率统计
- [ ] 个性化推荐算法
- [ ] 社区论坛功能
- [ ] 移动端 App
- [ ] 推送通知系统

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 贡献类型
- 🐛 Bug 修复
- ✨ 新功能开发
- 📝 文档改进
- 🎨 UI/UX 优化
- 🌍 多语言翻译
- 🔧 性能优化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://reactjs.org/) - 前端框架
- [Supabase](https://supabase.com/) - 后端服务
- [高德地图](https://lbs.amap.com/) - 地图服务
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [Lucide](https://lucide.dev/) - 图标库

## 📞 联系我们

- **项目主页**：[GitHub Repository](https://github.com/WilliamWang1721/Payments-Maps)
- **问题反馈**：[GitHub Issues](https://github.com/WilliamWang1721/Payments-Maps/issues)
- **功能建议**：[GitHub Discussions](https://github.com/WilliamWang1721/Payments-Maps/discussions)

---

<div align="center">
  <p>如果这个项目对你有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by the Payments Maps Team</p>
</div>

