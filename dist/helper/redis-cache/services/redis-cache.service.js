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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheService = void 0;
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("../redis.provider");
let RedisCacheService = class RedisCacheService {
    constructor(client) {
        this.client = client;
    }
    async overview() {
        const [stats, memory, keyspace] = await Promise.all([
            this.client.info('stats'),
            this.client.info('memory'),
            this.client.info('keyspace'),
        ]);
        return { stats, memory, keyspace };
    }
    async keyInfo(key) {
        const [exists, ttl, type, memoryRaw] = await Promise.all([
            this.client.exists(key),
            this.client.ttl(key),
            this.client.type(key),
            this.client.sendCommand(['MEMORY', 'USAGE', key]),
        ]);
        const memory = memoryRaw !== null ? String(memoryRaw) : null;
        return { exists, ttl, type, memory };
    }
    async scan(pattern = '*', cursor = '0') {
        return this.client.scan(cursor, {
            MATCH: pattern,
            COUNT: 100,
        });
    }
    async getCacheByKeys(keys) {
        const type = await this.client.type(keys);
        switch (type) {
            case 'string':
                return this.client.get(keys);
            case 'hash':
                return this.client.hGetAll(keys);
            case 'list': {
                return this.client.lRange(keys, 0, -1);
            }
            case 'set':
                return this.client.sMembers(keys);
            case 'zset': {
                const members = await this.client.zRangeWithScores(keys, 0, -1);
                return members.map(m => ({ value: m.value, score: m.score }));
            }
            case 'stream': {
                const entries = await this.client.xRange(keys, '-', '+');
                return entries;
            }
            default:
                return null;
        }
    }
    async getAllKeysFromDB(selectedDb) {
        await this.client.select(selectedDb);
        const keys = [];
        let cursor = '0';
        do {
            const result = await this.client.scan(cursor, {
                COUNT: 100,
            });
            cursor = result.cursor;
            keys.push(...result.keys);
        } while (cursor !== '0');
        return keys;
    }
};
exports.RedisCacheService = RedisCacheService;
exports.RedisCacheService = RedisCacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(redis_provider_1.REDIS_CLIENT)),
    __metadata("design:paramtypes", [Object])
], RedisCacheService);
//# sourceMappingURL=redis-cache.service.js.map