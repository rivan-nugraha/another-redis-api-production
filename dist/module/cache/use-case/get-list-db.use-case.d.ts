import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { RedisInfoService } from 'src/helper/redis-cache/services/redis-info.service';
import { ResponseDtoListDB } from '../contract/response.dto';
type TGetListDBUseCasePayload = PickUseCasePayload<unknown, 'data'>;
export declare class GetListDBUseCase extends BaseUseCase implements IUseCase<TGetListDBUseCasePayload> {
    private readonly redisInfo;
    constructor(redisInfo: RedisInfoService);
    execute(): Promise<ResponseDto<Array<ResponseDtoListDB>>>;
}
export {};
