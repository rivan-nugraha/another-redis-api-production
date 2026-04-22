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
exports.RedisStreamService = void 0;
const common_1 = require("@nestjs/common");
const redis_client_registry_service_1 = require("../redis-client-registry.service");
let RedisStreamService = class RedisStreamService {
    constructor(redisRegistry) {
        this.redisRegistry = redisRegistry;
    }
    async listStreams(cursor = '0') {
        const { cursor: nextCursor, keys } = await this.redisRegistry.runWithClient((client) => client.scan(cursor, {
            MATCH: '*',
            COUNT: 100,
            TYPE: 'stream',
        }));
        return {
            cursor: nextCursor,
            keys,
        };
    }
    async streamInfo(key) {
        return this.redisRegistry.runWithClient((client) => client.sendCommand([
            'XINFO',
            'STREAM',
            key,
        ]));
    }
    async messages(key, options) {
        const { start = '-', end = '+', count = 100, reverse = false, } = options || {};
        const command = reverse
            ? ['XREVRANGE', key, end, start, 'COUNT', count.toString()]
            : ['XRANGE', key, start, end, 'COUNT', count.toString()];
        return this.redisRegistry.runWithClient((client) => client.sendCommand(command));
    }
    async groups(key) {
        return this.redisRegistry.runWithClient((client) => client.sendCommand([
            'XINFO',
            'GROUPS',
            key,
        ]));
    }
    async consumers(key, group) {
        return this.redisRegistry.runWithClient((client) => client.sendCommand([
            'XINFO',
            'CONSUMERS',
            key,
            group,
        ]));
    }
    async pending(key, group) {
        return this.redisRegistry.runWithClient((client) => client.sendCommand([
            'XPENDING',
            key,
            group,
        ]));
    }
};
exports.RedisStreamService = RedisStreamService;
exports.RedisStreamService = RedisStreamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_client_registry_service_1.RedisClientRegistryService])
], RedisStreamService);
//# sourceMappingURL=redis-stream.service.js.map