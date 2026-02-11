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
exports.GetInfo = void 0;
const common_1 = require("@nestjs/common");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const redis_info_service_1 = require("../../../helper/redis-cache/services/redis-info.service");
let GetInfo = class GetInfo extends use_case_base_1.BaseUseCase {
    constructor(redisInfoService) {
        super();
        this.redisInfoService = redisInfoService;
    }
    async execute() {
        try {
            const info = await this.redisInfoService.serverInfo();
            const memory = await this.redisInfoService.memoryInfo();
            const stats = await this.redisInfoService.statsInfo();
            const key_statistics = await this.redisInfoService.getListDbKeys();
            const all_redis_info = await this.redisInfoService.getRedisInfo();
            return new response_dto_base_1.ResponseDto({
                status: common_1.HttpStatus.OK,
                message: 'Successfully retrieved Redis info',
                data: {
                    server: info,
                    memory: memory,
                    stats: stats,
                    key_statistics: {
                        list_db: key_statistics
                    },
                    all_redis_info,
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
exports.GetInfo = GetInfo;
exports.GetInfo = GetInfo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_info_service_1.RedisInfoService])
], GetInfo);
//# sourceMappingURL=get-info.use-case.js.map