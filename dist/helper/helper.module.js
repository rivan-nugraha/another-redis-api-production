"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperModule = void 0;
const common_1 = require("@nestjs/common");
const env_module_1 = require("../infra/config/env.module");
const hash_service_1 = require("./module/hash.service");
const signature_service_1 = require("./module/signature.service");
const transaction_provider_1 = require("./module/transaction/transaction.provider");
const redis_module_1 = require("./redis-cache/redis.module");
let HelperModule = class HelperModule {
};
exports.HelperModule = HelperModule;
exports.HelperModule = HelperModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [env_module_1.EnvModule, redis_module_1.RedisServiceModule],
        providers: [signature_service_1.SignatureService, hash_service_1.HashService, ...transaction_provider_1.transactionProvider],
        exports: [signature_service_1.SignatureService, hash_service_1.HashService, ...transaction_provider_1.transactionProvider, redis_module_1.RedisServiceModule],
    })
], HelperModule);
//# sourceMappingURL=helper.module.js.map