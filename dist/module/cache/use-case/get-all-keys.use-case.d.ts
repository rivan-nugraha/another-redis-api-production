import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { GetAllKeysRequestDto } from '../controller/dto/get-all-keys.request.dto';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { RedisCacheService } from 'src/helper/redis-cache/services/redis-cache.service';
import { ResponseDtoListKeys } from '../contract/response.dto';
type TGetAllKeysUseCasePayload = PickUseCasePayload<GetAllKeysRequestDto, 'data'>;
export declare class GetAllKeysUseCase extends BaseUseCase implements IUseCase<TGetAllKeysUseCasePayload> {
    private readonly redisCache;
    constructor(redisCache: RedisCacheService);
    execute({ data }: TGetAllKeysUseCasePayload): Promise<ResponseDto<Array<ResponseDtoListKeys>>>;
}
export {};
