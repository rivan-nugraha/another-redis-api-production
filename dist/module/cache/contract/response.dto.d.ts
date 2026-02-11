export interface ResponseDtoListDB {
    db: string;
    used: boolean;
    stats: string | null;
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
