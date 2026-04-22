import { LoginUserRequestProps } from '../../contract/auth.request.contract';
export declare class LoginRequestDto implements LoginUserRequestProps {
    user_id: string;
    password: string;
}
