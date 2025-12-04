#!/bin/bash
set -e

# 环境变量默认值
export YPROMPT_PORT=${YPROMPT_PORT:-80}
export YPROMPT_HOST=${YPROMPT_HOST:-0.0.0.0}
export CACHE_PATH=${CACHE_PATH:-/app/data/cache}
export LOG_PATH=${LOG_PATH:-/app/data/logs}

# 默认管理员账号配置
export ADMIN_USERNAME=${ADMIN_USERNAME:-admin}
export ADMIN_PASSWORD=${ADMIN_PASSWORD:-admin123}

echo "========================================"
echo "正在启动YPrompt服务"
echo "========================================"
echo "配置信息："
echo "- 服务地址: ${YPROMPT_HOST}:${YPROMPT_PORT}"
echo "- 前端目录: /app/frontend/dist"
echo "- 缓存目录: ${CACHE_PATH}"
echo "- 日志目录: ${LOG_PATH}"
echo "- 管理员用户名: ${ADMIN_USERNAME}"
echo "========================================"

# 创建必要的目录（统一在/app/data下）
mkdir -p /app/data/cache
mkdir -p /app/data/logs/backend

# 优雅关闭处理
cleanup() {
    echo ""
    echo "========================================"
    echo "接收到停止信号，正在优雅关闭服务..."
    echo "========================================"
    
    # 停止后端服务
    if [ ! -z "$BACKEND_PID" ]; then
        echo "✓ 停止后端服务 (PID: $BACKEND_PID)"
        kill -TERM $BACKEND_PID 2>/dev/null || true
        wait $BACKEND_PID 2>/dev/null || true
    fi
    
    echo "========================================"
    echo "所有服务已停止"
    echo "========================================"
    exit 0
}

# 注册信号处理
trap cleanup SIGTERM SIGINT SIGQUIT

# 启动后端服务（前台运行）
echo "========================================"
echo "启动YPrompt后端服务..."
echo "========================================"
cd /app/backend

# 设置环境变量，让Sanic知道前端目录位置
export FRONTEND_DIST_PATH=/app/frontend/dist

# 直接运行Python服务（前台运行，便于Docker管理）
exec python3 run.py --host=${YPROMPT_HOST} --port=${YPROMPT_PORT}
