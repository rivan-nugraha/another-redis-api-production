import { RedisClientType } from "redis";
export declare class RedisCacheService {
    private readonly client;
    constructor(client: RedisClientType);
    overview(): Promise<{
        stats: string;
        memory: string;
        keyspace: string;
    }>;
    keyInfo(key: string): Promise<{
        exists: number;
        ttl: number;
        type: string;
        memory: string;
    }>;
    scan(pattern?: string, cursor?: string): Promise<{
        cursor: string;
        keys: string[];
    }>;
    getCacheByKeys(keys: string): Promise<any>;
    getAllKeysFromDB(selectedDb: number): Promise<Array<string>>;
}
