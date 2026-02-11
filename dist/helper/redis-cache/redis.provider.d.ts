import { RedisClientType } from 'redis';
import { EnvModule } from "src/infra/config/env.module";
import { EnvService } from "src/infra/config/env.service";
export declare const REDIS_CLIENT: unique symbol;
export declare const redisProvider: {
    provide: symbol;
    imports: (typeof EnvModule)[];
    inject: (typeof EnvService)[];
    useFactory: (envService: EnvService) => Promise<RedisClientType<any, any>>;
};
