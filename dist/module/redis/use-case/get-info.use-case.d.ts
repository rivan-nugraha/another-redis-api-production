import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { RedisResponseDto } from '../contract/response.dto';
import { RedisInfoService } from 'src/helper/redis-cache/services/redis-info.service';
type TGetInfoPayload = PickUseCasePayload<unknown, 'data'>;
export declare class GetInfo extends BaseUseCase implements IUseCase<TGetInfoPayload> {
    private readonly redisInfoService;
    constructor(redisInfoService: RedisInfoService);
    execute(): Promise<ResponseDto<RedisResponseDto>>;
}
export {};
