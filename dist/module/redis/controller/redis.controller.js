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
exports.RedisController = void 0;
const common_1 = require("@nestjs/common");
const get_info_use_case_1 = require("../use-case/get-info.use-case");
const secure_get_decorator_1 = require("../../../core/decorator/secure-get.decorator");
let RedisController = class RedisController {
    constructor(getInfoUseCase) {
        this.getInfoUseCase = getInfoUseCase;
    }
    async getInfoHandler() {
        return this.getInfoUseCase.execute();
    }
};
exports.RedisController = RedisController;
__decorate([
    (0, secure_get_decorator_1.SecureGet)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "getInfoHandler", null);
exports.RedisController = RedisController = __decorate([
    (0, common_1.Controller)('v1/redis'),
    __metadata("design:paramtypes", [get_info_use_case_1.GetInfo])
], RedisController);
//# sourceMappingURL=redis.controller.js.map