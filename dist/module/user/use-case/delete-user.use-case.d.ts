import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase, IUseCasePayload } from 'src/core/base/module/use-case.base';
import { UserRepositoryPort } from 'src/module/user/repository/user.repository.port';
type TDeleteUserPayload = Pick<IUseCasePayload<never>, '_id'>;
export declare class DeleteUser extends BaseUseCase implements IUseCase<TDeleteUserPayload> {
    private userRepository;
    constructor(userRepository: UserRepositoryPort);
    execute({ _id }: TDeleteUserPayload): Promise<ResponseDto>;
}
export {};
