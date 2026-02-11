"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_key_const_1 = require("../../core/constant/config/env-key.const");
let EnvService = class EnvService {
    constructor(configService) {
        this.configService = configService;
        this._redisHost = '';
        this._redisPort = 0;
        this._redisPassword = '';
        this._mode = this.configService.get(env_key_const_1.EnvKey.MODE);
        this._port = this.configService.get(env_key_const_1.EnvKey.PORT);
        this._httpsMode = Boolean(+this.configService.get(env_key_const_1.EnvKey.HTTPS_MODE));
        this._dbConnectionUri = this.configService.get(env_key_const_1.EnvKey.DB_CONNECTION_URI);
        this._jwtSecretKey = this.configService.get(env_key_const_1.EnvKey.JWT_SECRET_KEY);
        this._jwtRefreshKey = this.configService.get(env_key_const_1.EnvKey.JWT_REFRESH_KEY);
        this._apiKey = this.configService.get(env_key_const_1.EnvKey.API_KEY);
        this._secretKey = this.configService.get(env_key_const_1.EnvKey.SECRET_KEY);
        this._redisHost = this.configService.get(env_key_const_1.EnvKey.REDIS_HOST);
        this._redisPort = this.configService.get(env_key_const_1.EnvKey.REDIS_PORT);
        this._redisPassword = this.configService.get(env_key_const_1.EnvKey.REDIS_PASSWORD);
    }
    get variables() {
        return {
            mode: this._mode,
            port: this._port,
            httpsMode: this._httpsMode,
            dbConnectionUri: this._dbConnectionUri,
            jwtSecretKey: this._jwtSecretKey,
            jwtRefreshKey: this._jwtRefreshKey,
            apiKey: this._apiKey,
            secretKey: this._secretKey,
            redisHost: this._redisHost,
            redisPort: this._redisPort,
            redisPassword: this._redisPassword,
        };
    }
};
exports.EnvService = EnvService;
exports.EnvService = EnvService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EnvService);
//# sourceMappingURL=env.service.js.map