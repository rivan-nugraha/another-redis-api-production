import { Types } from 'mongoose';
export declare abstract class BaseMongoEntity<MongoModel> {
    _id: Types.ObjectId;
    constructor(props?: MongoModel);
}
