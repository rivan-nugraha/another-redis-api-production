import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { EnvService } from 'src/infra/config/env.service';
import { UserRepositoryPort } from '../repository/user.repository.port';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { OptionalSecretKeyProps } from 'src/core/contract/optional-secret-key.request.contract';
import { CreateUserRequestProps } from '../contract/user.request.contract';
type TCreateUserPayload = PickUseCasePayload<CreateUserRequestProps & OptionalSecretKeyProps, 'data' | 'user'>;
export declare class CreateUser extends BaseUseCase implements IUseCase<TCreateUserPayload> {
    private userRepository;
    private envService;
    constructor(userRepository: UserRepositoryPort, envService: EnvService);
    execute({ data, user }: TCreateUserPayload): Promise<ResponseDto<import("../../../core/interface/repository-response.interface").IRepositoryResponse>>;
    private _validateSecretKey;
    private _generateUserLevel;
}
export {};
