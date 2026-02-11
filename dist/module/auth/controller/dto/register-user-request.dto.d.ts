import { RegisterUserRequestProps } from '../../contract/auth.request.contract';
export declare class RegisterUserRequestDto implements RegisterUserRequestProps {
    user_id: string;
    user_name: string;
    password: string;
}
