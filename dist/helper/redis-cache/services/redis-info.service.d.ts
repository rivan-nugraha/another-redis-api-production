import { RedisClientType } from "redis";
import { MemoryInfoDto, ServerInfoDto, StatsInfoDto } from "src/module/redis/contract/response.dto";
import { ResponseDtoListDB } from "src/module/cache/contract/response.dto";
export declare class RedisInfoService {
    private readonly client;
    constructor(client: RedisClientType);
    serverInfo(): Promise<ServerInfoDto>;
    memoryInfo(): Promise<MemoryInfoDto>;
    statsInfo(): Promise<StatsInfoDto>;
    getListDbKeys(): Promise<Array<{
        db: string;
        keys: number;
        expires: number;
        avg_ttl: number;
    }>>;
    getAllListDB(): Promise<Array<string>>;
    getAllDBWithStats(): Promise<Array<ResponseDtoListDB>>;
    getRedisInfo(): Promise<Array<{
        key: string;
        value: string;
    }>>;
}
