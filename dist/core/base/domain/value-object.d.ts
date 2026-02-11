import { DomainPrimitive } from '../types/domain-primitive.type';
import { TPrimitive } from '../types/primitive.type';
type ValueObjectProps<T extends TPrimitive | Date> = DomainPrimitive<T>;
export declare abstract class ValueObject<T extends TPrimitive | Date> {
    protected readonly props: ValueObjectProps<T>;
    protected label?: string;
    constructor(props: ValueObjectProps<T>, label?: string);
    protected abstract validate(props: ValueObjectProps<T>): void;
    get value(): T;
    static isValueObject(obj: any): obj is ValueObject<any>;
    private _checkIfEmpty;
    private _isDomainPrimitive;
}
export {};
