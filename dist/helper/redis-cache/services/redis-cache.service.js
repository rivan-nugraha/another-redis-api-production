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
exports.RedisCacheService = void 0;
const common_1 = require("@nestjs/common");
const redis_client_registry_service_1 = require("../redis-client-registry.service");
let RedisCacheService = class RedisCacheService {
    constructor(redisRegistry) {
        this.redisRegistry = redisRegistry;
    }
    async overview(serverKey) {
        return this.redisRegistry.runWithClient(async (client) => {
            const [stats, memory, keyspace] = await Promise.all([
                client.info('stats'),
                client.info('memory'),
                client.info('keyspace'),
            ]);
            return { stats, memory, keyspace };
        }, serverKey);
    }
    async keyInfo(key, selectedDb = 0, serverKey) {
        return this.redisRegistry.runWithClient(async (client) => {
            await client.select(selectedDb);
            const [exists, ttl, type, memoryRaw] = await Promise.all([
                client.exists(key),
                client.ttl(key),
                client.type(key),
                client.sendCommand(['MEMORY', 'USAGE', key]),
            ]);
            const memory = memoryRaw !== null ? String(memoryRaw) : null;
            return { exists, ttl, type, memory };
        }, serverKey);
    }
    async scan(pattern = '*', cursor = '0', serverKey) {
        return this.redisRegistry.runWithClient((client) => {
            return client.scan(cursor, {
                MATCH: pattern,
                COUNT: 100,
            });
        }, serverKey);
    }
    async getCacheByKeys(keys, selectedDb = 0, serverKey) {
        return this.redisRegistry.runWithClient(async (client) => {
            await client.select(selectedDb);
            const type = await client.type(keys);
            switch (type) {
                case 'string':
                    return client.get(keys);
                case 'hash':
                    return client.hGetAll(keys);
                case 'list': {
                    return client.lRange(keys, 0, -1);
                }
                case 'set':
                    return client.sMembers(keys);
                case 'zset': {
                    const members = await client.zRangeWithScores(keys, 0, -1);
                    return members.map(m => ({ value: m.value, score: m.score }));
                }
                case 'stream': {
                    const entries = await client.xRange(keys, '-', '+');
                    return entries;
                }
                default:
                    return null;
            }
        }, serverKey);
    }
    async getAllKeysFromDB(selectedDb, serverKey) {
        return this.redisRegistry.runWithClient(async (client) => {
            await client.select(selectedDb);
            const keys = [];
            let cursor = '0';
            do {
                const result = await client.scan(cursor, {
                    COUNT: 100,
                });
                cursor = result.cursor;
                keys.push(...result.keys);
            } while (cursor !== '0');
            return keys;
        }, serverKey);
    }
    async deleteCacheByKeys(keys, selectedDb = 0, serverKey) {
        return this.redisRegistry.runWithClient(async (client) => {
            await client.select(selectedDb);
            return client.del(keys);
        }, serverKey);
    }
};
exports.RedisCacheService = RedisCacheService;
exports.RedisCacheService = RedisCacheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_client_registry_service_1.RedisClientRegistryService])
], RedisCacheService);
//# sourceMappingURL=redis-cache.service.js.map