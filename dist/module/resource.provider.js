"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceProviders = void 0;
const auth_module_1 = require("./auth/auth.module");
const cache_module_1 = require("./cache/cache.module");
const redis_module_1 = require("./redis/redis.module");
const user_module_1 = require("./user/user.module");
exports.resourceProviders = [auth_module_1.AuthModule, user_module_1.UserModule, redis_module_1.RedisModule, cache_module_1.CacheModule];
//# sourceMappingURL=resource.provider.js.map