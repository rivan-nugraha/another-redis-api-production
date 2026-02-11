import { Model } from 'mongoose';
import { UserMongoEntity } from './user.mongo-entity';
import { UserEntity } from '../domain/user.entity';
import { BaseRepository } from 'src/core/base/module/repository.base';
import { UserRepositoryPort } from 'src/module/user/repository/user.repository.port';
export declare class UserRepository extends BaseRepository<UserEntity, UserMongoEntity> implements UserRepositoryPort {
    private userModel;
    constructor(userModel: Model<UserMongoEntity>);
    findActiveUser(): Promise<Array<UserMongoEntity>>;
}
