export interface ResponseDtoListDB {
    db: string;
    used: boolean;
    stats: string | null;
}
export interface RedisServerOptionDto {
    key: string;
    label: string;
    host: string;
    port: number;
}
export interface ResponseDtoListDBPayload {
    selected_server: string;
    servers: Array<RedisServerOptionDto>;
    databases: Array<ResponseDtoListDB>;
}
export interface ResponseDtoListKeys {
    namespace: string;
    keys: Array<string>;
}
export interface ResponseDtoDetailCache {
    key: string;
    data: any;
    ttl: number | null;
    type: string;
    memory: string | null;
}
