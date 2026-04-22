import { RedisClientRegistryService } from "../redis-client-registry.service";
export declare class RedisCacheService {
    private readonly redisRegistry;
    constructor(redisRegistry: RedisClientRegistryService);
    overview(serverKey?: string): Promise<{
        stats: string;
        memory: string;
        keyspace: string;
    }>;
    keyInfo(key: string, selectedDb?: number, serverKey?: string): Promise<{
        exists: number;
        ttl: number;
        type: string;
        memory: string;
    }>;
    scan(pattern?: string, cursor?: string, serverKey?: string): Promise<{
        cursor: string;
        keys: string[];
    }>;
    getCacheByKeys(keys: string, selectedDb?: number, serverKey?: string): Promise<any>;
    getAllKeysFromDB(selectedDb: number, serverKey?: string): Promise<Array<string>>;
    deleteCacheByKeys(keys: string, selectedDb?: number, serverKey?: string): Promise<number>;
}
