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
exports.GetCacheByKeyUseCase = void 0;
const common_1 = require("@nestjs/common");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
const redis_cache_service_1 = require("../../../helper/redis-cache/services/redis-cache.service");
let GetCacheByKeyUseCase = class GetCacheByKeyUseCase extends use_case_base_1.BaseUseCase {
    constructor(redisCache) {
        super();
        this.redisCache = redisCache;
    }
    async execute({ data }) {
        try {
            const value = await this.redisCache.getCacheByKeys(data.keys);
            const keyInfo = await this.redisCache.keyInfo(data.keys);
            return new response_dto_base_1.ResponseDto({
                status: common_1.HttpStatus.FOUND,
                message: 'Cache retrieved successfully',
                data: {
                    key: data.keys,
                    data: value,
                    ttl: keyInfo.ttl,
                    type: keyInfo.type,
                    memory: keyInfo.memory,
                },
            });
        }
        catch (error) {
            this.logger.error(error);
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.GetCacheByKeyUseCase = GetCacheByKeyUseCase;
exports.GetCacheByKeyUseCase = GetCacheByKeyUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_cache_service_1.RedisCacheService])
], GetCacheByKeyUseCase);
//# sourceMappingURL=get-cache-by-key.use-case.js.map