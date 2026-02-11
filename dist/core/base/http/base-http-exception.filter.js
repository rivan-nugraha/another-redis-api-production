"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../../infra/logger/logger");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = this._getErrorStatus(exception);
        const message = this._getErrorMessage(exception);
        const messageValue = typeof message !== 'string' ? message.message : message;
        const logger = new logger_1.CustomLogger('E_FILTER');
        logger.error(messageValue, `(${request.method})${request.url.replace(/^\/api/, '')}`);
        const responseJson = {
            status: status,
            message: messageValue,
        };
        response.status(status).json(responseJson);
    }
    _getErrorStatus(exception) {
        if (exception instanceof common_1.HttpException) {
            return exception.getStatus() || 500;
        }
        else {
            return 500;
        }
    }
    _getErrorMessage(exception) {
        if (exception instanceof common_1.HttpException) {
            return exception.getResponse();
        }
        else if (exception instanceof Error) {
            return exception.message;
        }
        else {
            return 'Internal server error';
        }
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
//# sourceMappingURL=base-http-exception.filter.js.map