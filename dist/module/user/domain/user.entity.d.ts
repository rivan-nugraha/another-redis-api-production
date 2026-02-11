import { Entity } from 'src/core/base/domain/entity';
import { UserLevel } from './value-objects/user-level.value-object';
import { Types } from 'mongoose';
export interface UserProps {
    user_id: string;
    user_name: string;
    password: string;
    level: UserLevel;
    input_by: string;
}
export interface UpdateUserProps {
    user_name: string;
    level: string;
}
export declare class UserEntity extends Entity<UserProps> {
    private static hashUtil;
    constructor(props: UserProps, _id?: Types.ObjectId);
    static create(props: UserProps): Promise<UserEntity>;
    static comparePassword(rawPassword: string, hashedPassword: string): Promise<boolean>;
    updateUser(payload: UpdateUserProps): Promise<void>;
}
