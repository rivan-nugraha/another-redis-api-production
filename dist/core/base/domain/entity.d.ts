import { Types } from 'mongoose';
export declare abstract class Entity<EntityProps> {
    protected props: EntityProps;
    protected _id: Types.ObjectId;
    constructor(props: EntityProps, _id?: Types.ObjectId);
    static isEntity(entity: unknown): entity is Entity<unknown>;
    get propsCopy(): Readonly<{
        _id: Types.ObjectId;
    } & EntityProps>;
    private validateProps;
}
