#!/bin/bash

echo "🚀 启动 Vue Monorepo 开发环境"

echo "📦 构建共享包..."
pnpm --filter @monorepo/ui build &
pnpm --filter @monorepo/utils build &
wait

echo "🌐 启动 Web 应用 (端口: 3000)..."
pnpm --filter @monorepo/web dev &

echo "⚙️  启动管理后台 (端口: 3001)..."
pnpm --filter @monorepo/admin dev &

echo "✅ 所有应用已启动！"
echo "📱 Web 应用: http://localhost:3000"
echo "🔧 管理后台: http://localhost:3001"

wait 