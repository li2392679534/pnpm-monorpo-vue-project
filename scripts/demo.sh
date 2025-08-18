#!/bin/bash

echo "🎯 Vue Monorepo 功能演示"
echo "=========================="

echo ""
echo "1️⃣  查看项目结构..."
tree -I 'node_modules|dist|.git' -L 3

echo ""
echo "2️⃣  查看所有包..."
pnpm list --depth=0

echo ""
echo "3️⃣  构建共享包..."
pnpm --filter @monorepo/ui build
pnpm --filter @monorepo/utils build

echo ""
echo "4️⃣  启动开发服务器..."
echo "Web应用将在 http://localhost:3000 启动"
echo "管理后台将在 http://localhost:3001 启动"
echo ""
echo "按 Ctrl+C 停止服务器"

# 并行启动两个应用
pnpm --filter @monorepo/web dev &
pnpm --filter @monorepo/admin dev &

# 等待用户中断
wait 