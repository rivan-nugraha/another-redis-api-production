"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugLoggerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../infra/logger/logger");
const rxjs_1 = require("rxjs");
let DebugLoggerInterceptor = class DebugLoggerInterceptor {
    constructor() {
        this.logger = new logger_1.CustomLogger('HttpInfo');
    }
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const body = req.body;
        const query = req.query;
        this.logger.log('Incoming Request.', `(${req.method})${req.originalUrl.split('?')[0]}`);
        if (process.env.MODE === 'DEVELOPMENT') {
            if (typeof body === 'object' && Object.keys(body).length) {
                this.logger.debug('Body' + JSON.stringify(body, null, 2));
            }
            if (typeof query === 'object' && Object.keys(query).length) {
                this.logger.debug('Query' + JSON.stringify(query, null, 2));
            }
        }
        const now = Date.now();
        return next
            .handle()
            .pipe((0, rxjs_1.tap)(() => this.logger.log(`Request Completed. ${Date.now() - now}ms`, `(${req.method})${req.originalUrl.split('?')[0]}`)));
    }
};
exports.DebugLoggerInterceptor = DebugLoggerInterceptor;
exports.DebugLoggerInterceptor = DebugLoggerInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DebugLoggerInterceptor);
//# sourceMappingURL=debug-logger.interceptor.js.map