# 🚀 熊清泉 | Portfolio

个人作品集网站 — Network Engineer | DevOps Engineer

## 技术栈

- **框架:** Next.js 16 + TypeScript
- **样式:** Tailwind CSS 4 + shadcn/ui
- **动画:** Framer Motion
- **图标:** Lucide Icons
- **部署:** Vercel

## 特性

- 🌃 深蓝科技风主题 + 粒子背景
- ✨ Framer Motion 流畅动画
- 🎴 3D 倾斜卡片 + Glassmorphism
- 📱 响应式设计
- 🔍 SEO 优化
- ⚡ 页面加载速度快

## 项目结构

```
├── app/                  # Next.js App Router
│   ├── globals.css       # 全局样式 + 主题
│   ├── layout.tsx        # 根布局 + SEO 元数据
│   └── page.tsx          # 首页
├── components/           # 组件
│   ├── Navbar.tsx        # 导航栏
│   ├── ParticleBackground.tsx  # 粒子 + 星空背景
│   ├── HeroSection.tsx   # Hero 区域
│   ├── AboutSection.tsx  # 关于我（时间轴）
│   ├── SkillsSection.tsx # 技能栈（进度条）
│   ├── ProjectsSection.tsx # 项目经验
│   ├── Card3D.tsx        # 3D 倾斜卡片
│   ├── SectionWrapper.tsx # 滚动动画包装
│   └── Footer.tsx        # 页脚
├── data/                 # 数据文件
│   ├── profile.ts        # 个人资料
│   ├── skills.ts         # 技能数据
│   └── projects.ts       # 项目数据
└── public/               # 静态资源
```

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 构建部署

```bash
npm run build
npm start
```

可直接部署到 [Vercel](https://vercel.com)。

## 自定义

修改 `data/` 目录下的数据文件即可更新网站内容：

- `data/profile.ts` — 个人信息、教育背景、时间轴
- `data/skills.ts` — 技能分类与熟练度
- `data/projects.ts` — 项目展示

头像可替换 `HeroSection.tsx` 中的 avatar 占位符为实际图片。
