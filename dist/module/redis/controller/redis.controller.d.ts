import { GetInfo } from "../use-case/get-info.use-case";
export declare class RedisController {
    private readonly getInfoUseCase;
    constructor(getInfoUseCase: GetInfo);
    getInfoHandler(): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/response.dto").RedisResponseDto>>;
}
