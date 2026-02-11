export interface ServerInfoDto {
    version: string;
    os: string;
    proccess_id: string;
}
export interface MemoryInfoDto {
    used_memory: number;
    used_memory_peak: number;
    used_memory_lua: number;
}
export interface StatsInfoDto {
    connected_clients: number;
    total_connections: number;
    total_commands: number;
}
export interface KeyStatisticsDto {
    list_db: Array<{
        db: string;
        keys: number;
        expires: number;
        avg_ttl: number;
    }>;
}
export interface RedisResponseDto {
    server: ServerInfoDto;
    memory: MemoryInfoDto;
    stats: StatsInfoDto;
    key_statistics: KeyStatisticsDto;
    all_redis_info: Array<{
        key: string;
        value: string;
    }>;
}
