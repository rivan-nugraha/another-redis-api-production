import { ValueObject } from '../base/domain/value-object';
import { DomainPrimitive } from '../base/types/domain-primitive.type';
export declare class ObjectIdVO extends ValueObject<string> {
    constructor(value: string);
    get valueConverted(): import("bson").ObjectId;
    protected validate({ value }: DomainPrimitive<string>): void;
}
