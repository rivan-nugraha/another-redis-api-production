import { UserEntity } from './user.entity';
import { UserMongoEntity } from '../repository/user.mongo-entity';
import { MongoEntityProps } from 'src/core/base/domain/db-mapper';
export declare class UserMapper {
    static toPlainObject(entity: UserEntity): MongoEntityProps<UserMongoEntity>;
    static toDomain(raw: UserMongoEntity): UserEntity;
}
