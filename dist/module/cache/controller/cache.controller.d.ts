import { GetListDBUseCase } from "../use-case/get-list-db.use-case";
import { GetAllKeysUseCase } from "../use-case/get-all-keys.use-case";
import { GetAllKeysRequestDto } from "./dto/get-all-keys.request.dto";
import { GetCacheByKeyUseCase } from "../use-case/get-cache-by-key.use-case";
import { GetCacheByKeyRequestDto } from "./dto/get-cache-by-key.request.dto";
import { DeleteCacheByKeyRequestDto } from "./dto/delete-cache-by-key.request.dto";
import { DeleteCacheByKeyUseCase } from "../use-case/delete-cache-by-key.use-case";
export declare class CacheController {
    private readonly getListDBUsecase;
    private readonly getAllKeysUsecase;
    private readonly getCacheByKeyUsecase;
    private readonly deleteCacheByKeyUseCase;
    constructor(getListDBUsecase: GetListDBUseCase, getAllKeysUsecase: GetAllKeysUseCase, getCacheByKeyUsecase: GetCacheByKeyUseCase, deleteCacheByKeyUseCase: DeleteCacheByKeyUseCase);
    getListDBHandler(): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoListDB[]>>;
    getAllCacheKeysHandler(query: GetAllKeysRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoListKeys[]>>;
    getCacheByKeyHandler(query: GetCacheByKeyRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").ResponseDtoDetailCache>>;
    deleteCacheByKeyHandler(body: DeleteCacheByKeyRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<{
        [k: string]: any;
    }>>;
}
