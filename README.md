# Vue 3 个人作品集网站

一个使用 Vue 3 + Vite + TailwindCSS 构建的现代化个人作品集网站，支持多主题切换和响应式设计。

## ✨ 特性

- 🎨 **多主题支持** - 6种精美主题（霓虹、玻璃态、极简、复古、樱花、海洋）
- 🌙 **明暗模式** - 支持明暗模式切换，跟随系统偏好
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- ⚡ **现代技术栈** - Vue 3 + Vite + TailwindCSS
- 🚀 **GitHub Pages** - 一键部署到 GitHub Pages
- 🎯 **单页应用** - 流畅的锚点导航体验
- 🎭 **动画效果** - 精心设计的过渡动画

## 🛠️ 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **样式框架**: TailwindCSS
- **开发语言**: JavaScript (ES6+)
- **部署平台**: GitHub Pages

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 自动部署

1. Fork 或下载此项目到您的 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 推送代码到 `main` 分支
4. GitHub Actions 会自动构建并部署网站

### 访问地址

部署成功后，您的网站将可以通过以下地址访问：

```
https://yourusername.github.io/vue-portfolio/
```

### 自定义域名

如果您想使用自定义域名：

1. 在项目根目录创建 `CNAME` 文件
2. 在文件中写入您的域名（如：`www.yoursite.com`）
3. 在域名 DNS 设置中添加 CNAME 记录指向 `yourusername.github.io`

## 🔧 自定义配置

### 修改个人信息

1. **基本信息**: 编辑 `src/sections/Hero.vue` 和 `src/sections/About.vue`
2. **项目数据**: 编辑 `src/data/projects.js`
3. **联系方式**: 编辑 `src/sections/Contact.vue`
4. **SEO 信息**: 编辑 `index.html` 中的 meta 标签

### 添加新主题

1. 在 `src/styles/themes.css` 中定义新主题的 CSS 变量
2. 在 `src/composables/useTheme.js` 中添加主题信息

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！