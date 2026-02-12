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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheController = void 0;
const common_1 = require("@nestjs/common");
const get_list_db_use_case_1 = require("../use-case/get-list-db.use-case");
const secure_get_decorator_1 = require("../../../core/decorator/secure-get.decorator");
const get_all_keys_use_case_1 = require("../use-case/get-all-keys.use-case");
const zod_query_decorator_1 = require("../../../core/decorator/zod-query.decorator");
const get_all_keys_request_dto_1 = require("./dto/get-all-keys.request.dto");
const get_cache_by_key_use_case_1 = require("../use-case/get-cache-by-key.use-case");
const get_cache_by_key_request_dto_1 = require("./dto/get-cache-by-key.request.dto");
const secure_post_decorator_1 = require("../../../core/decorator/secure-post.decorator");
const zod_body_decorator_1 = require("../../../core/decorator/zod-body.decorator");
const delete_cache_by_key_request_dto_1 = require("./dto/delete-cache-by-key.request.dto");
const delete_cache_by_key_use_case_1 = require("../use-case/delete-cache-by-key.use-case");
let CacheController = class CacheController {
    constructor(getListDBUsecase, getAllKeysUsecase, getCacheByKeyUsecase, deleteCacheByKeyUseCase) {
        this.getListDBUsecase = getListDBUsecase;
        this.getAllKeysUsecase = getAllKeysUsecase;
        this.getCacheByKeyUsecase = getCacheByKeyUsecase;
        this.deleteCacheByKeyUseCase = deleteCacheByKeyUseCase;
    }
    async getListDBHandler() {
        return this.getListDBUsecase.execute();
    }
    async getAllCacheKeysHandler(query) {
        return this.getAllKeysUsecase.execute({ data: query });
    }
    async getCacheByKeyHandler(query) {
        return this.getCacheByKeyUsecase.execute({ data: query });
    }
    async deleteCacheByKeyHandler(body) {
        return this.deleteCacheByKeyUseCase.execute({ data: body });
    }
};
exports.CacheController = CacheController;
__decorate([
    (0, secure_get_decorator_1.SecureGet)('db-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "getListDBHandler", null);
__decorate([
    (0, secure_get_decorator_1.SecureGet)(),
    __param(0, (0, zod_query_decorator_1.ZodQuery)(get_all_keys_request_dto_1.GetAllKeysRequestDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "getAllCacheKeysHandler", null);
__decorate([
    (0, secure_get_decorator_1.SecureGet)('by-key'),
    __param(0, (0, zod_query_decorator_1.ZodQuery)(get_cache_by_key_request_dto_1.GetCacheByKeyRequestDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "getCacheByKeyHandler", null);
__decorate([
    (0, secure_post_decorator_1.SecurePost)('delete-by-key'),
    __param(0, (0, zod_body_decorator_1.ZodBody)(delete_cache_by_key_request_dto_1.DeleteCacheByKeyRequestDto)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "deleteCacheByKeyHandler", null);
exports.CacheController = CacheController = __decorate([
    (0, common_1.Controller)('v1/cache'),
    __metadata("design:paramtypes", [get_list_db_use_case_1.GetListDBUseCase,
        get_all_keys_use_case_1.GetAllKeysUseCase,
        get_cache_by_key_use_case_1.GetCacheByKeyUseCase,
        delete_cache_by_key_use_case_1.DeleteCacheByKeyUseCase])
], CacheController);
//# sourceMappingURL=cache.controller.js.map