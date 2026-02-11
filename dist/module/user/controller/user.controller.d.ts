import { GetPaginationDto } from 'src/core/base/http/get-pagination.dto.base';
import { JwtDecoded } from 'src/core/base/module/use-case.base';
import { CreateUser } from '../use-case/create-user.use-case';
import { DeleteUser } from '../use-case/delete-user.use-case';
import { GetUser } from '../use-case/get-user.use-case';
import { UpdateUser } from '../use-case/update-user.use-case';
import { CreateUserRequestDto } from './dtos/create-user.request.dto';
import { UpdateUserRequestDto } from './dtos/update-user.request.dto';
export declare class UsersController {
    private readonly deleteUser;
    private readonly updateUser;
    private readonly getUser;
    private readonly createUser;
    constructor(deleteUser: DeleteUser, updateUser: UpdateUser, getUser: GetUser, createUser: CreateUser);
    createUserHandler(body: CreateUserRequestDto, user: JwtDecoded): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../../../core/interface/repository-response.interface").IRepositoryResponse>>;
    getUserHandler(query: GetPaginationDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../contract/user.response.contract").UserResponseProps[]>>;
    deleteUserHandler(_id: string): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<{
        [k: string]: any;
    }>>;
    update(_id: string, body: UpdateUserRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<{
        [k: string]: any;
    }>>;
}
