import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { GetCacheByKeyRequestDto } from '../controller/dto/get-cache-by-key.request.dto';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { RedisCacheService } from 'src/helper/redis-cache/services/redis-cache.service';
import { ResponseDtoDetailCache } from '../contract/response.dto';
type TGetCacheByKeyUseCasePayload = PickUseCasePayload<GetCacheByKeyRequestDto, 'data'>;
export declare class GetCacheByKeyUseCase extends BaseUseCase implements IUseCase<TGetCacheByKeyUseCasePayload> {
    private readonly redisCache;
    constructor(redisCache: RedisCacheService);
    execute({ data }: TGetCacheByKeyUseCasePayload): Promise<ResponseDto<ResponseDtoDetailCache>>;
}
export {};
