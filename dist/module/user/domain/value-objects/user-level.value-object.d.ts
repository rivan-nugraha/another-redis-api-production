import { ValueObject } from 'src/core/base/domain/value-object';
import { DomainPrimitive } from 'src/core/base/types/domain-primitive.type';
export declare class UserLevel extends ValueObject<string> {
    constructor(value: string);
    protected validate({ value }: DomainPrimitive<string>): void;
    private _getValidLevel;
}
