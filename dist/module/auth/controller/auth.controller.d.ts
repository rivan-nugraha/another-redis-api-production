import { LoginRequestDto } from './dto/login-user-request.dto';
import { LoginUser } from '../use-case/login.use-case';
import { CreateUser } from 'src/module/user/use-case/create-user.use-case';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';
import { AuthRefreshTokenRequestDto } from 'src/module/auth/controller/dto/auth-refresh-token.dto';
import { RefreshToken } from '../use-case/refresh-token.use-case';
export declare class AuthController {
    readonly loginUser: LoginUser;
    readonly createUser: CreateUser;
    readonly refreshToken: RefreshToken;
    constructor(loginUser: LoginUser, createUser: CreateUser, refreshToken: RefreshToken);
    createUserHandler(body: RegisterUserRequestDto, secretKey: string): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<import("../../../core/interface/repository-response.interface").IRepositoryResponse>>;
    loginUserHandler(body: LoginRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<{
        user_id: string;
        access_token: string;
        refresh_token: string;
        level: string;
        user_name: string;
    }>>;
    refreshTokenHandler(body: AuthRefreshTokenRequestDto): Promise<import("../../../core/base/http/response.dto.base").ResponseDto<{
        access_token: string;
        refresh_token: string;
    }>>;
}
