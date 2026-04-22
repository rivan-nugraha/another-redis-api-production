import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { UserRepositoryPort } from 'src/module/user/repository/user.repository.port';
import { UpdateUserRequestProps } from '../contract/user.request.contract';
type TUpdateUserPayload = PickUseCasePayload<UpdateUserRequestProps, 'data' | '_id'>;
export declare class UpdateUser extends BaseUseCase implements IUseCase<TUpdateUserPayload> {
    private userRepository;
    constructor(userRepository: UserRepositoryPort);
    execute({ data, _id }: TUpdateUserPayload): Promise<ResponseDto<{
        [k: string]: any;
    }>>;
}
export {};
