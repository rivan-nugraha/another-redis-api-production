import { ConfigService } from '@nestjs/config';
export interface IEnv {
    mode: string;
    port: string;
    httpsMode: boolean;
    dbConnectionUri: string;
    jwtSecretKey: string;
    jwtRefreshKey: string;
    apiKey: string;
    secretKey: string;
    redisHost?: string;
    redisPort?: number;
    redisPassword?: string;
}
export declare class EnvService {
    private readonly configService;
    private readonly _mode;
    private readonly _port;
    private readonly _httpsMode;
    private readonly _dbConnectionUri;
    private readonly _jwtSecretKey;
    private readonly _jwtRefreshKey;
    private readonly _apiKey;
    private readonly _secretKey;
    private readonly _redisHost;
    private readonly _redisPort;
    private readonly _redisPassword;
    constructor(configService: ConfigService);
    get variables(): IEnv;
}
