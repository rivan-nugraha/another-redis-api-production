import { DomainPrimitive } from '../base/types/domain-primitive.type';
import { ValueObject } from '../base/domain/value-object';
export declare class DateVO extends ValueObject<Date> {
    constructor(value: Date | string | number);
    static now(): DateVO;
    protected validate({ value }: DomainPrimitive<Date>): void;
}
