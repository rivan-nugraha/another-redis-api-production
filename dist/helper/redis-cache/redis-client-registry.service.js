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
exports.RedisClientRegistryService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
const env_service_1 = require("../../infra/config/env.service");
let RedisClientRegistryService = class RedisClientRegistryService {
    constructor(envService) {
        this.envService = envService;
        this.clients = new Map();
        this.servers = this.envService.variables.redisServers;
    }
    async getClient(serverKey) {
        const server = this.resolveServer(serverKey);
        const existing = this.clients.get(server.key);
        if (existing?.isOpen)
            return existing;
        const client = (0, redis_1.createClient)({
            socket: {
                host: server.host,
                port: server.port,
            },
            password: server.password || undefined,
        });
        client.on('error', (err) => {
            console.error(`Redis Client Error [${server.key}]`, err);
        });
        await client.connect();
        this.clients.set(server.key, client);
        return client;
    }
    async runWithClient(callback, serverKey) {
        const server = this.resolveServer(serverKey);
        const baseClient = await this.getClient(server.key);
        const isolatedClient = baseClient.duplicate();
        isolatedClient.on('error', (err) => {
            console.error(`Redis Client Error [${server.key}:isolated]`, err);
        });
        await isolatedClient.connect();
        try {
            return await callback(isolatedClient, server);
        }
        finally {
            if (isolatedClient.isOpen) {
                await isolatedClient.quit();
            }
        }
    }
    listServers() {
        return this.servers.map(({ key, label, host, port }) => ({
            key,
            label,
            host,
            port,
        }));
    }
    getDefaultServerKey() {
        return this.servers[0]?.key || 'default';
    }
    resolveServer(serverKey) {
        const fallback = this.servers[0];
        if (!fallback) {
            throw new Error('No Redis server configuration found.');
        }
        if (!serverKey)
            return fallback;
        const server = this.servers.find((item) => item.key === serverKey);
        if (!server) {
            throw new Error(`Redis server '${serverKey}' is not configured.`);
        }
        return server;
    }
    async onModuleDestroy() {
        await Promise.all(Array.from(this.clients.values()).map(async (client) => {
            if (client.isOpen) {
                await client.quit();
            }
        }));
    }
};
exports.RedisClientRegistryService = RedisClientRegistryService;
exports.RedisClientRegistryService = RedisClientRegistryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [env_service_1.EnvService])
], RedisClientRegistryService);
//# sourceMappingURL=redis-client-registry.service.js.map