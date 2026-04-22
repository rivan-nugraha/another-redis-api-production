"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path_1 = require("path");
const helmet_1 = require("helmet");
const logger_1 = require("./infra/logger/logger");
const base_http_exception_filter_1 = require("./core/base/http/base-http-exception.filter");
const debug_logger_interceptor_1 = require("./core/interceptor/debug-logger.interceptor");
const os = require("os");
async function bootstrap() {
    const httpsMode = !!Number(process.env.HTTPS_MODE);
    const secureOptions = generateHttpsModeOption(httpsMode);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        ...secureOptions,
        logger: new logger_1.CustomLogger(),
        cors: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    app.useGlobalInterceptors(new debug_logger_interceptor_1.DebugLoggerInterceptor());
    app.useGlobalFilters(new base_http_exception_filter_1.AllExceptionFilter());
    app.use((0, helmet_1.default)());
    const port = process.env.PORT;
    const host = '0.0.0.0';
    const logger = new common_1.Logger('NestBoilerplate');
    await app.listen(port, host, () => {
        logger.log(`Application Started at port: ${port}, httpsMode: ${httpsMode}`);
        if (process.env.MODE == 'DEVELOPMENT')
            logger.log(`Current IP: ${getLocalIP()}`);
    });
}
function generateHttpsModeOption(httpsMode) {
    if (httpsMode) {
        const privateKey = fs.readFileSync((0, path_1.resolve)('/home/cert/private.key'), 'utf-8');
        const certificate = fs.readFileSync((0, path_1.resolve)('/home/cert/certificate.crt'), 'utf-8');
        const credentials = {
            key: privateKey,
            cert: certificate,
            passphrase: '??',
        };
        return { httpsOptions: credentials };
    }
    return {};
}
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return '127.0.0.1';
}
bootstrap();
//# sourceMappingURL=main.js.map