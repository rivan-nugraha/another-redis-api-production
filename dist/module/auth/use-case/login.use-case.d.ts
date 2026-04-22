import { JwtService } from '@nestjs/jwt';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { EnvService } from 'src/infra/config/env.service';
import { UserRepositoryPort } from '../../user/repository/user.repository.port';
import { LoginUserRequestProps } from '../contract/auth.request.contract';
type TLoginPayload = PickUseCasePayload<LoginUserRequestProps, 'data'>;
export declare class LoginUser extends BaseUseCase implements IUseCase<TLoginPayload> {
    private userRepository;
    private jwtService;
    private envService;
    constructor(userRepository: UserRepositoryPort, jwtService: JwtService, envService: EnvService);
    execute({ data }: TLoginPayload): Promise<ResponseDto<{
        user_id: string;
        access_token: string;
        refresh_token: string;
        level: string;
        user_name: string;
    }>>;
}
export {};
