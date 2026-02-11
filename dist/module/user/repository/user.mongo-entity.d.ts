import { BaseMongoEntity } from 'src/core/base/domain/mongo-entity';
export declare class UserMongoEntity extends BaseMongoEntity<typeof UserMongoEntity> {
    user_id: string;
    user_name: string;
    password: string;
    level: string;
    input_by?: string;
    input_date?: Date;
    edit_by?: string;
    edit_date?: Date;
}
export declare const UserSchema: import("mongoose").Schema<UserMongoEntity, import("mongoose").Model<UserMongoEntity, any, any, any, import("mongoose").Document<unknown, any, UserMongoEntity, any> & UserMongoEntity & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserMongoEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserMongoEntity>, {}> & import("mongoose").FlatRecord<UserMongoEntity> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const UserModel: {
    name: string;
    schema: import("mongoose").Schema<UserMongoEntity, import("mongoose").Model<UserMongoEntity, any, any, any, import("mongoose").Document<unknown, any, UserMongoEntity, any> & UserMongoEntity & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserMongoEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserMongoEntity>, {}> & import("mongoose").FlatRecord<UserMongoEntity> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}[];
