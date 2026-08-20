# 朔州市实验中学校 2405班 · 班级官网

一个商务风格的班级官网，包含：班级简介、班级誓言、班级目标、师生寄语。

## 项目结构

```
2405班官网/
├── index.html      # 主页面
├── css/
│   └── style.css   # 样式（深蓝 + 金色商务风格）
├── js/
│   └── main.js     # 交互脚本（导航、滚动动画等）
└── README.md       # 本说明
```

## 本地预览

直接用浏览器打开 `index.html` 即可预览，无需安装任何东西。

## 如何部署到网上（免费，GitHub Pages）

### 前提
1. 注册一个 GitHub 账号：https://github.com/signup
2. 在电脑上安装 GitHub Desktop：https://desktop.github.com

### 步骤
1. 打开 GitHub Desktop → 登录你的账号。
2. 点击 `File → New repository`（新建仓库）：
   - Name 填：`2405ban`（或任意英文名）
   - 不要勾选 "Initialize with a README"
3. 点击 `Add → Add local repository`，选择本文件夹：
   `C:\Users\蒋浩博\Desktop\2405班官网`
   （如果提示有 Git 仓库冲突，选 “Create repository here” 把文件夹本身初始化为仓库）
4. 在 GitHub Desktop 左下角填 Commit 说明（如 "init class website"），点击 `Commit to main`。
5. 点击右上角 `Publish repository`，确认发布。
6. 打开 GitHub 网页版，进入该仓库 → `Settings` → 左侧 `Pages`：
   - Source 选 `Deploy from a branch`
   - Branch 选 `main`，目录 `/ (root)` → `Save`
7. 等待 1~2 分钟后，你的网址就是：
   `https://你的用户名.github.io/2405ban/`

### 以后修改怎么更新
在本地改完文件后 → GitHub Desktop 里点 `Commit to main` → 点 `Push origin`，网页会自动更新。

## 内容修改提示

- 修改文字：直接用记事本/VS Code 打开 `index.html`，替换对应文字即可。
- 修改颜色：打开 `css/style.css` 顶部 `:root` 里的颜色变量。
