# 🚀 快速开始

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 安装

```bash
# 克隆项目
git clone <your-repo-url>
cd pnpm-monorpo-vue-project

# 安装依赖
pnpm install
```

## 开发

```bash
# 启动所有应用
pnpm dev

# 或者使用演示脚本
./scripts/demo.sh
```

## 访问应用

- 🌐 Web应用: http://localhost:3000
- ⚙️ 管理后台: http://localhost:3001

## 常用命令

```bash
# 构建所有包
pnpm build

# 代码检查
pnpm lint

# 启动特定应用
pnpm --filter @monorepo/web dev
pnpm --filter @monorepo/admin dev

# 构建特定包
pnpm --filter @monorepo/ui build
pnpm --filter @monorepo/utils build
```

## 项目特点

✅ **单仓多包管理** - 使用 pnpm workspace  
✅ **共享组件库** - 可复用的 Vue 组件  
✅ **工具函数库** - 通用工具函数  
✅ **TypeScript 支持** - 完整的类型定义  
✅ **现代化构建** - 使用 Vite 快速构建  
✅ **代码规范** - ESLint + Prettier  

## 下一步

查看 [详细文档](./docs/MONOREPO_GUIDE.md) 了解更多信息。 