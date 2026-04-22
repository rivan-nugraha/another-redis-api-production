import { Types } from 'mongoose';
import { IId } from 'src/core/interface/id.interface';
export declare class IdResponseDto implements IId {
    constructor(id: Types.ObjectId);
    _id: Types.ObjectId;
}
