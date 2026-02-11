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
exports.RedisInfoService = void 0;
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("../redis.provider");
let RedisInfoService = class RedisInfoService {
    constructor(client) {
        this.client = client;
    }
    async serverInfo() {
        const infoRaw = await this.client.info('server');
        const infoLines = infoRaw.split('\r\n');
        const info = {};
        infoLines.forEach(line => {
            if (line && !line.startsWith('#')) {
                const [key, value] = line.split(':');
                info[key] = value;
            }
        });
        return {
            version: info['redis_version'] || '',
            os: info['os'] || '',
            proccess_id: info['process_id'] || '',
        };
    }
    async memoryInfo() {
        const infoRaw = await this.client.info('memory');
        const infoLines = infoRaw.split('\r\n');
        const info = {};
        infoLines.forEach(line => {
            if (line && !line.startsWith('#')) {
                const [key, value] = line.split(':');
                info[key] = value;
            }
        });
        return {
            used_memory: parseInt(info['used_memory'] || '0', 10),
            used_memory_peak: parseInt(info['used_memory_peak'] || '0', 10),
            used_memory_lua: parseInt(info['used_memory_lua'] || '0', 10),
        };
    }
    async statsInfo() {
        const [statsRaw, clientsRaw] = await Promise.all([
            this.client.info('stats'),
            this.client.info('clients'),
        ]);
        const info = {};
        const parseLines = (raw) => {
            raw.split('\r\n').forEach(line => {
                if (line && !line.startsWith('#')) {
                    const [key, value] = line.split(':');
                    info[key] = value;
                }
            });
        };
        parseLines(statsRaw);
        parseLines(clientsRaw);
        return {
            connected_clients: parseInt(info['connected_clients'] || '0', 10),
            total_connections: parseInt(info['total_connections_received'] || '0', 10),
            total_commands: parseInt(info['total_commands_processed'] || '0', 10),
        };
    }
    async getListDbKeys() {
        const infoRaw = await this.client.info('keyspace');
        const infoLines = infoRaw.split('\r\n');
        const dbList = [];
        infoLines.forEach(line => {
            if (line && line.startsWith('db')) {
                const [db, stats] = line.split(':');
                const statsParts = stats.split(',');
                const dbInfo = {};
                statsParts.forEach(part => {
                    const [key, value] = part.split('=');
                    dbInfo[key] = parseInt(value, 10);
                });
                dbList.push({
                    db: db,
                    keys: dbInfo['keys'] || 0,
                    expires: dbInfo['expires'] || 0,
                    avg_ttl: dbInfo['avg_ttl'] || 0,
                });
            }
        });
        return dbList;
    }
    async getAllListDB() {
        const infoRaw = await this.client.info('keyspace');
        const infoLines = infoRaw.split('\r\n');
        const dbList = [];
        infoLines.forEach(line => {
            if (line && line.startsWith('db')) {
                const [db, _] = line.split(':');
                dbList.push(db);
            }
        });
        return dbList;
    }
    async getAllDBWithStats() {
        const cfg = await this.client.configGet('databases');
        const total = Number(cfg.databases);
        const infoRaw = await this.client.info('keyspace');
        const usedDB = new Map();
        infoRaw.split('\r\n').forEach(line => {
            if (line.startsWith('db')) {
                const [db, stats] = line.split(':');
                usedDB.set(db, stats);
            }
        });
        return Array.from({ length: total }, (_, i) => {
            const db = `db${i}`;
            return {
                db,
                used: usedDB.has(db),
                stats: usedDB.get(db) ?? null
            };
        });
    }
    async getRedisInfo() {
        const info = await this.client.info();
        return info
            .split('\n')
            .filter(line => line && !line.startsWith('#'))
            .map(line => {
            const [key, value] = line.split(':');
            return {
                key,
                value: value?.trim() ?? '',
            };
        });
    }
};
exports.RedisInfoService = RedisInfoService;
exports.RedisInfoService = RedisInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(redis_provider_1.REDIS_CLIENT)),
    __metadata("design:paramtypes", [Object])
], RedisInfoService);
//# sourceMappingURL=redis-info.service.js.map