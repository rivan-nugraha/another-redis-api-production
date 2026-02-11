"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisServiceModule = void 0;
const common_1 = require("@nestjs/common");
const env_module_1 = require("../../infra/config/env.module");
const redis_provider_1 = require("./redis.provider");
const redis_cache_service_1 = require("./services/redis-cache.service");
const redis_stream_service_1 = require("./services/redis-stream.service");
const redis_info_service_1 = require("./services/redis-info.service");
let RedisServiceModule = class RedisServiceModule {
};
exports.RedisServiceModule = RedisServiceModule;
exports.RedisServiceModule = RedisServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [env_module_1.EnvModule],
        providers: [redis_provider_1.redisProvider, redis_cache_service_1.RedisCacheService, redis_stream_service_1.RedisStreamService, redis_info_service_1.RedisInfoService],
        exports: [redis_cache_service_1.RedisCacheService, redis_stream_service_1.RedisStreamService, redis_info_service_1.RedisInfoService],
    })
], RedisServiceModule);
//# sourceMappingURL=redis.module.js.map