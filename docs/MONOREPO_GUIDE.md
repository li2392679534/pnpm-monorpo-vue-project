# Vue Monorepo 使用指南

## 什么是 Monorepo？

Monorepo（单仓多包）是一种项目管理策略，将多个相关的项目或包存储在同一个代码仓库中。使用 pnpm 的 workspace 功能可以高效地管理这种结构。

## 项目结构说明

```
vue-monorepo/
├── apps/                    # 应用目录
│   ├── web/                # Web前端应用
│   │   ├── src/           # 源代码
│   │   ├── package.json   # 应用配置
│   │   └── vite.config.ts # 构建配置
│   └── admin/             # 管理后台应用
│       ├── src/           # 源代码
│       ├── package.json   # 应用配置
│       └── vite.config.ts # 构建配置
├── packages/               # 共享包目录
│   ├── ui/                # UI组件库
│   │   ├── src/          # 组件源码
│   │   ├── package.json  # 包配置
│   │   └── vite.config.ts # 构建配置
│   ├── utils/             # 工具函数库
│   │   ├── src/          # 工具函数
│   │   ├── package.json  # 包配置
│   │   └── vite.config.ts # 构建配置
│   └── config/            # 共享配置
│       ├── package.json  # 包配置
│       └── tsconfig.base.json # 基础TS配置
├── tools/                  # 开发工具
│   └── eslint-config/     # ESLint配置
├── package.json           # 根目录配置
├── pnpm-workspace.yaml    # pnpm workspace配置
└── README.md             # 项目说明
```

## 核心概念

### 1. Workspace 配置

`pnpm-workspace.yaml` 定义了哪些目录包含包：

```yaml
packages:
  - 'apps/*'      # 所有应用
  - 'packages/*'  # 所有共享包
  - 'tools/*'     # 所有工具
```

### 2. 包依赖管理

使用 `workspace:*` 协议引用本地包：

```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*",
    "@monorepo/utils": "workspace:*"
  }
}
```

### 3. 脚本管理

根目录的 `package.json` 包含全局脚本：

```json
{
  "scripts": {
    "dev": "pnpm -r --parallel dev",    # 并行启动所有应用
    "build": "pnpm -r build",           # 构建所有包
    "lint": "pnpm -r lint"              # 检查所有包
  }
}
```

## 常用命令

### 安装依赖
```bash
# 安装所有依赖
pnpm install

# 为特定包安装依赖
pnpm --filter @monorepo/web install lodash
```

### 开发模式
```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm --filter @monorepo/web dev
pnpm --filter @monorepo/admin dev

# 并行启动多个应用
pnpm --filter @monorepo/web --filter @monorepo/admin dev
```

### 构建
```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @monorepo/ui build
pnpm --filter @monorepo/utils build
```

### 代码检查
```bash
# 检查所有包
pnpm lint

# 检查特定包
pnpm --filter @monorepo/web lint
```

## 最佳实践

### 1. 包命名规范
- 使用 `@monorepo/` 前缀
- 应用：`@monorepo/web`, `@monorepo/admin`
- 包：`@monorepo/ui`, `@monorepo/utils`

### 2. 依赖管理
- 共享依赖放在根目录
- 包特定依赖放在各自的 `package.json`
- 使用 `peerDependencies` 声明框架依赖

### 3. 构建配置
- 每个包都有自己的构建配置
- 使用 Vite 进行快速构建
- 配置 TypeScript 路径映射

### 4. 版本管理
- 使用 `workspace:*` 引用本地包
- 发布时使用 `pnpm publish -r` 批量发布

## 扩展建议

### 1. 添加测试
```bash
# 为每个包添加测试脚本
pnpm --filter @monorepo/utils test
```

### 2. 添加 CI/CD
```yaml
# .github/workflows/ci.yml
- name: Install dependencies
  run: pnpm install

- name: Build packages
  run: pnpm build

- name: Run tests
  run: pnpm test
```

### 3. 添加文档
- 使用 Storybook 展示组件
- 使用 TypeDoc 生成 API 文档

### 4. 性能优化
- 使用 `pnpm -r --parallel` 并行执行
- 配置构建缓存
- 使用 `pnpm --filter` 精确控制执行范围 