import os
import sys
from apps import create_app

app = create_app()


if __name__ == '__main__':
    # 从环境变量读取配置，支持Docker部署
    host = os.getenv('YPROMPT_HOST', '0.0.0.0')
    port = int(os.getenv('YPROMPT_PORT', '8888'))
    workers = int(os.getenv('WORKERS', '1'))
    
    # 支持命令行参数覆盖
    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            if arg.startswith('--host='):
                host = arg.split('=', 1)[1]
            elif arg.startswith('--port='):
                port = int(arg.split('=', 1)[1])
            elif arg.startswith('--workers='):
                workers = int(arg.split('=', 1)[1])
    
    # 开发环境启用自动重载，生产环境关闭
    auto_reload = os.getenv('AUTO_RELOAD', 'false').lower() == 'true'
    debug = os.getenv('DEBUG', 'false').lower() == 'true'
    
    print(f"🚀 启动YPrompt服务: http://{host}:{port}")
    print(f"   - Workers: {workers}")
    print(f"   - Auto Reload: {auto_reload}")
    print(f"   - Debug: {debug}")
    
    app.run(host=host, port=port, workers=workers, auto_reload=auto_reload, debug=debug)
