FROM python:3.11-slim

# 安装必要的运行时依赖
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    bash \
    tzdata && \
    rm -rf /var/lib/apt/lists/*

# 设置时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 设置默认环境变量
ENV YPROMPT_PORT=80
ENV YPROMPT_HOST=0.0.0.0

# 默认管理员账号配置（可在docker run时通过-e覆盖）
ENV ADMIN_USERNAME=admin
ENV ADMIN_PASSWORD=admin123

# 数据目录统一配置（所有持久化数据都在/app/data下）
ENV CACHE_PATH=/app/data/cache
ENV LOG_PATH=/app/data/logs

# 创建应用目录
WORKDIR /app

# 获取架构信息
ARG TARGETARCH

# ==========================================
# 后端部分
# ==========================================

# 复制后端代码
COPY backend /app/backend/

# 安装Python依赖
RUN cd /app/backend && \
    pip3 install --no-cache-dir -r requirements.txt && \
    chmod +x run.py

# ==========================================
# 前端部分
# ==========================================

# 复制前端构建产物（从 build-context 目录）
COPY frontend-dist /app/frontend/dist/

# ==========================================
# 启动脚本
# ==========================================

# 复制启动脚本
COPY start.sh /app/
RUN chmod +x /app/start.sh

# 创建必要的目录结构（统一在/app/data下）
RUN mkdir -p /app/data/cache \
             /app/data/logs/backend

# 暴露端口（默认80，可通过环境变量修改）
EXPOSE 80

# 设置卷挂载点（只挂载/app/data，所有数据都在这里）
VOLUME ["/app/data"]

# 设置启动命令
CMD ["/app/start.sh"]
