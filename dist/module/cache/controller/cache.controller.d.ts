import { GetListDBUseCase } from "../use-case/get-list-db.use-case";
import { GetAllKeysUseCase } from "../use-case/get-all-keys.use-case";
import { GetAllKeysRequestDto } from "./dto/get-all-keys.request.dto";
import { GetCacheByKeyUseCase } from "../use-case/get-cache-by-key.use-case";
import { GetCacheByKeyRequestDto } from "./dto/get-cache-by-key.request.dto";
export declare class CacheController {
    private readonly getListDBUsecase;
    private readonly getAllKeysUsecase;
    private readonly getCacheByKeyUsecase;
    constructor(getListDBUsecase: GetListDBUseCase, getAllKeysUsecase: GetAllKeysUseCase, getCacheByKeyUsecase: GetCacheByKeyUseCase);
    getListDBHandler(): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoListDB[]>>;
    getAllCacheKeysHandler(query: GetAllKeysRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoListKeys[]>>;
    getCacheByKeyHandler(query: GetCacheByKeyRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoDetailCache>>;
}
