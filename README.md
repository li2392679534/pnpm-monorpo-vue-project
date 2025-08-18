# Vue Monorepo 项目

这是一个使用 pnpm 管理的 Vue 单仓多包项目。

## 项目结构

```
├── apps/                 # 应用目录
│   ├── web/             # Web前端应用
│   └── admin/           # 管理后台应用
├── packages/            # 共享包目录
│   ├── ui/              # UI组件库
│   ├── utils/           # 工具函数库
│   └── config/          # 共享配置
└── tools/               # 开发工具
    └── eslint-config/   # ESLint配置
```

## 快速开始

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm --filter @monorepo/web dev
pnpm --filter @monorepo/admin dev
```

### 构建
```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @monorepo/ui build
```

### 代码检查
```bash
pnpm lint
```

## 包说明

### 应用
- `@monorepo/web`: Web前端应用 (端口: 3000)
- `@monorepo/admin`: 管理后台应用 (端口: 3001)

### 共享包
- `@monorepo/ui`: Vue组件库
- `@monorepo/utils`: 工具函数库
- `@monorepo/config`: 共享配置文件

### 开发工具
- `@monorepo/eslint-config`: ESLint配置

## 技术栈

- Vue 3 + TypeScript
- Vite
- pnpm Workspace
- ESLint + Prettier
