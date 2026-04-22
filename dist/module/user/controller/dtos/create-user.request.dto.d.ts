import { RegisterUserRequestDto } from 'src/module/auth/controller/dto/register-user-request.dto';
import { CreateUserRequestProps } from '../../contract/user.request.contract';
export declare class CreateUserRequestDto extends RegisterUserRequestDto implements CreateUserRequestProps {
    level?: string;
}
