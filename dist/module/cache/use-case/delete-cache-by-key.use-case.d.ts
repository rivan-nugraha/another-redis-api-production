import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { DeleteCacheByKeyRequestDto } from '../controller/dto/delete-cache-by-key.request.dto';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { RedisCacheService } from 'src/helper/redis-cache/services/redis-cache.service';
type TDeleteCacheByKeyUseCasePayload = PickUseCasePayload<DeleteCacheByKeyRequestDto, 'data'>;
export declare class DeleteCacheByKeyUseCase extends BaseUseCase implements IUseCase<TDeleteCacheByKeyUseCasePayload> {
    private readonly redisCache;
    constructor(redisCache: RedisCacheService);
    execute({ data }: TDeleteCacheByKeyUseCasePayload): Promise<ResponseDto>;
}
export {};
