"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisProvider = exports.REDIS_CLIENT = void 0;
const redis_1 = require("redis");
const env_module_1 = require("../../infra/config/env.module");
const env_service_1 = require("../../infra/config/env.service");
exports.REDIS_CLIENT = Symbol('REDIS_CLIENT');
exports.redisProvider = {
    provide: exports.REDIS_CLIENT,
    imports: [env_module_1.EnvModule],
    inject: [env_service_1.EnvService],
    useFactory: async (envService) => {
        const client = (0, redis_1.createClient)({
            socket: {
                host: envService.variables.redisHost,
                port: envService.variables.redisPort,
            },
            password: envService.variables.redisPassword || undefined,
        });
        await client.connect();
        client.on('error', (err) => {
            console.error('Redis Client Error', err);
        });
        return client;
    }
};
//# sourceMappingURL=redis.provider.js.map