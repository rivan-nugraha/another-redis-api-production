import { MemoryInfoDto, ServerInfoDto, StatsInfoDto } from "src/module/redis/contract/response.dto";
import { ResponseDtoListDB } from "src/module/cache/contract/response.dto";
import { RedisClientRegistryService } from "../redis-client-registry.service";
export declare class RedisInfoService {
    private readonly redisRegistry;
    constructor(redisRegistry: RedisClientRegistryService);
    serverInfo(serverKey?: string): Promise<ServerInfoDto>;
    memoryInfo(serverKey?: string): Promise<MemoryInfoDto>;
    statsInfo(serverKey?: string): Promise<StatsInfoDto>;
    getListDbKeys(serverKey?: string): Promise<Array<{
        db: string;
        keys: number;
        expires: number;
        avg_ttl: number;
    }>>;
    getAllListDB(serverKey?: string): Promise<Array<string>>;
    getAllDBWithStats(serverKey?: string): Promise<Array<ResponseDtoListDB>>;
    getRedisInfo(serverKey?: string): Promise<Array<{
        key: string;
        value: string;
    }>>;
    listServers(): {
        key: string;
        label: string;
        host: string;
        port: number;
    }[];
    getDefaultServerKey(): string;
}
