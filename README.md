# YPrompt

AI通过对话挖掘用户需求，并自动生成专业的提示词，支持系统/用户提示词优化、效果对比，版本管理和支持即时渲染的操练场

## 功能特性

- AI引导对话挖掘用户需求后生成专业系统提示词
- 系统/用户(支持构建对话上下文)优化、效果对比
- 提示词版本管理与历史回滚
- 操练场支持多种输出类型即时渲染，效果看得见
- 本地用户名密码认证
- SQLite 数据库（默认，零配置）
- 响应式设计（桌面/移动端）

## 界面

![](imgs/1.gif)
![](imgs/2.gif)
![](imgs/3.gif)
![](imgs/4.gif)
![](imgs/5.gif)
![](imgs/6.gif)
![](imgs/7.gif)
![](imgs/8.gif)
![](imgs/9.gif)
![](imgs/10.gif)
![](imgs/11.gif)
![](imgs/12.gif)
![](imgs/13.gif)
![](imgs/14.gif)
![](imgs/15.gif)

## 系统架构

```
YPrompt/
├── frontend/                  # Vue 3 + TypeScript 前端
│   └── dist/                 # 构建产物（由Sanic直接提供）
├── backend/                   # Sanic Python 后端
│   ├── apps/                 # 应用代码
│   │   ├── modules/          # 业务模块（蓝图自动注册）
│   │   └── utils/           # 工具类（数据库、认证等）
│   ├── config/               # 配置文件
│   └── migrations/           # 数据库脚本
├── data/                      # 数据目录（持久化）
│   ├── yprompt.db            # SQLite数据库
│   ├── cache/                # 缓存文件
│   └── logs/                 # 日志文件
│       └── backend/          # 后端日志
├── Dockerfile                 # Docker镜像
├── docker-compose.yml         # Docker Compose配置
└── start.sh                   # 容器启动脚本
```

### 架构说明

- **后端框架**: Sanic（异步高性能Python Web框架）
- **静态文件服务**: 由Sanic直接提供静态文件服务
- **SPA路由**: 通过404异常处理器实现前端路由回退
- **API路由**: 优先匹配，确保API请求不被静态文件路由拦截

## 快速启动

### Docker Run

```bash
docker run -d \
  --name yprompt \
  -p 80:80 \
  -v ./data:/app/data \
  -e SECRET_KEY=your-random-secret-key \
  -e YPROMPT_PORT=80 \
  -e YPROMPT_HOST=0.0.0.0 \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_PASSWORD=admin123 \
  ghcr.io/fish2018/yprompt:latest
```

**注意**: 
- 默认监听80端口（HTTP）
- 生产环境请修改 `SECRET_KEY` 和 `ADMIN_PASSWORD`

### Docker Compose

使用项目根目录的 `docker-compose.yml`:

```bash
docker-compose up -d
```

**注意**: 
- 默认监听80端口（HTTP）
- 生产环境请修改 `SECRET_KEY`、`ADMIN_PASSWORD` 等敏感配置

## 环境变量说明

### 必需参数

| 变量 | 说明 | 示例 |
|------|------|------|
| `SECRET_KEY` | JWT密钥（至少32位随机字符） | `a1b2c3d4e5f6...` |

### 服务器配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `YPROMPT_HOST` | `0.0.0.0` | 服务监听地址 |
| `YPROMPT_PORT` | `80` | 服务监听端口 |
| `WORKERS` | `1` | Sanic worker数量（生产环境建议设置为CPU核心数） |
| `AUTO_RELOAD` | `false` | 自动重载（开发环境可设为true） |
| `DEBUG` | `false` | 调试模式（生产环境必须为false） |

### 数据库配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `DB_TYPE` | `sqlite` | 数据库类型：`sqlite` |
| `SQLITE_DB_PATH` | `../data/yprompt.db` | SQLite数据库文件路径 |

### 本地认证配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `ADMIN_USERNAME` | `admin` | 默认管理员用户名 |
| `ADMIN_PASSWORD` | `admin123` | 默认管理员密码 |

## 开发说明

### 本地开发

#### 前端开发
```bash
cd frontend
npm install
npm run dev  # 开发服务器运行在 http://localhost:5173
```

#### 后端开发
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py  # 默认运行在 http://localhost:8888
```

#### 前端构建
```bash
cd frontend
npm run build  # 构建产物在 frontend/dist/
```

### 架构特点

- **简化部署**: 后端Sanic直接提供静态文件服务，无需额外Web服务器
- **蓝图自动注册**: 后端自动发现并注册 `apps/modules/` 下的所有蓝图
- **SQLite 数据库**: 默认数据库，零配置启动
- **认证方式**: 本地用户名密码认证
- **SPA路由支持**: 通过404异常处理器实现前端路由回退

### 常见问题

**Q: 如何添加新的API端点？**  
A: 在 `backend/apps/modules/` 下创建新模块，定义蓝图（变量名必须与模块名相同），系统会自动注册。

**Q: 默认管理员账号是什么？**  
A: 用户名 `admin`，密码 `admin123`。首次启动后请立即修改。

**Q: 如何修改服务端口？**  
A: 通过环境变量 `YPROMPT_PORT` 设置，例如 `-e YPROMPT_PORT=8080`。


## 许可证

MIT License