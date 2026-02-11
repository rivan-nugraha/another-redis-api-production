import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { UserRepositoryPort } from 'src/module/user/repository/user.repository.port';
import { UserResponseProps } from '../contract/user.response.contract';
import { GetPaginationProps } from 'src/core/contract/get-pagination.request.contract';
export type TGetUserPayload = PickUseCasePayload<GetPaginationProps, 'data'>;
export type TGetUserResponse = ResponseDto<UserResponseProps[]>;
export declare class GetUser extends BaseUseCase implements IUseCase<TGetUserPayload> {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryPort);
    execute({ data }: TGetUserPayload): Promise<ResponseDto<UserResponseProps[]>>;
}
