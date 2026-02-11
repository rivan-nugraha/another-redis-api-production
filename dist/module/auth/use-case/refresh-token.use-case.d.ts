import { JwtService } from '@nestjs/jwt';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { EnvService } from 'src/infra/config/env.service';
import { AuthRefreshTokenRequestProps } from '../contract/auth.request.contract';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
interface IHistoryRefreshToken {
    refresh_token: string;
    expired_at: Date;
}
type TRefreshTokenPayload = PickUseCasePayload<AuthRefreshTokenRequestProps, 'data'>;
export declare class RefreshToken extends BaseUseCase implements IUseCase<TRefreshTokenPayload> {
    private jwtService;
    private envService;
    constructor(jwtService: JwtService, envService: EnvService);
    static historyRefreshTokenList: IHistoryRefreshToken[];
    execute({ data }: TRefreshTokenPayload): Promise<ResponseDto<{
        access_token: string;
        refresh_token: string;
    }>>;
    private _validateRefreshToken;
    private _verifyJwt;
    private _registerUsedRefreshToken;
}
export {};
