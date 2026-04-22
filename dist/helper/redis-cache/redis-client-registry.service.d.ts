import { OnModuleDestroy } from '@nestjs/common';
import { RedisClientType } from 'redis';
import { EnvService, RedisServerConfig } from 'src/infra/config/env.service';
export declare class RedisClientRegistryService implements OnModuleDestroy {
    private readonly envService;
    private readonly clients;
    private readonly servers;
    constructor(envService: EnvService);
    getClient(serverKey?: string): Promise<RedisClientType>;
    runWithClient<T>(callback: (client: RedisClientType, server: RedisServerConfig) => Promise<T>, serverKey?: string): Promise<T>;
    listServers(): {
        key: string;
        label: string;
        host: string;
        port: number;
    }[];
    getDefaultServerKey(): string;
    private resolveServer;
    onModuleDestroy(): Promise<void>;
}
