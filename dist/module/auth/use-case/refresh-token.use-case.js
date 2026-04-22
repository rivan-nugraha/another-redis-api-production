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
var RefreshToken_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const env_service_1 = require("../../../infra/config/env.service");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
let RefreshToken = RefreshToken_1 = class RefreshToken extends use_case_base_1.BaseUseCase {
    constructor(jwtService, envService) {
        super();
        this.jwtService = jwtService;
        this.envService = envService;
    }
    async execute({ data }) {
        this._validateRefreshToken(data.refresh_token, data.user_id);
        const payload = { sub: data.user_id };
        const token = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: 86400,
            secret: this.envService.variables.jwtRefreshKey,
        });
        this._registerUsedRefreshToken(data.refresh_token);
        return new response_dto_base_1.ResponseDto({
            status: common_1.HttpStatus.OK,
            data: { access_token: token, refresh_token: refreshToken },
        });
    }
    _validateRefreshToken(refreshToken, user_id) {
        const tokenVerified = this._verifyJwt(refreshToken);
        if (tokenVerified?.sub != user_id) {
            throw new common_1.BadRequestException('Refresh token is not matched.');
        }
        const tokenUsed = RefreshToken_1.historyRefreshTokenList.find((it) => it.refresh_token === refreshToken);
        const isTokenUsedExpired = tokenUsed && tokenUsed.expired_at.getTime() < new Date().getTime();
        if (isTokenUsedExpired)
            throw new common_1.BadRequestException('Refresh Token is Expired');
    }
    _verifyJwt(refreshToken) {
        try {
            return this.jwtService.verify(refreshToken, {
                secret: this.envService.variables.jwtRefreshKey,
            });
        }
        catch {
            throw new common_1.BadRequestException('Token is Not Valid');
        }
    }
    _registerUsedRefreshToken(refreshToken) {
        const expiredAt = new Date();
        expiredAt.setHours(expiredAt.getHours() + 3);
        const isTokenExist = RefreshToken_1.historyRefreshTokenList.find((it) => it.refresh_token === refreshToken);
        if (isTokenExist)
            return;
        RefreshToken_1.historyRefreshTokenList.push({
            refresh_token: refreshToken,
            expired_at: expiredAt,
        });
    }
};
exports.RefreshToken = RefreshToken;
RefreshToken.historyRefreshTokenList = [];
exports.RefreshToken = RefreshToken = RefreshToken_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        env_service_1.EnvService])
], RefreshToken);
//# sourceMappingURL=refresh-token.use-case.js.map