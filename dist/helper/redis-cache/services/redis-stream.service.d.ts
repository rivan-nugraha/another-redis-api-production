import { RedisClientRegistryService } from '../redis-client-registry.service';
export declare class RedisStreamService {
    private readonly redisRegistry;
    constructor(redisRegistry: RedisClientRegistryService);
    listStreams(cursor?: string): Promise<{
        cursor: string;
        keys: string[];
    }>;
    streamInfo(key: string): Promise<import("@redis/client/dist/lib/RESP/types").ReplyUnion>;
    messages(key: string, options?: {
        start?: string;
        end?: string;
        count?: number;
        reverse?: boolean;
    }): Promise<import("@redis/client/dist/lib/RESP/types").ReplyUnion>;
    groups(key: string): Promise<import("@redis/client/dist/lib/RESP/types").ReplyUnion>;
    consumers(key: string, group: string): Promise<import("@redis/client/dist/lib/RESP/types").ReplyUnion>;
    pending(key: string, group: string): Promise<import("@redis/client/dist/lib/RESP/types").ReplyUnion>;
}
