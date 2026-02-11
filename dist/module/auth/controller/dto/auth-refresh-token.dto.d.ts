import { AuthRefreshTokenRequestProps } from '../../contract/auth.request.contract';
export declare class AuthRefreshTokenRequestDto implements AuthRefreshTokenRequestProps {
    user_id: string;
    refresh_token: string;
}
