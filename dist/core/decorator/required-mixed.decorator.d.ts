import { TMixedInput } from './type/mixed-input.type';
export declare function IsRequiredMixed<T>(options: TMixedInput<T>): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
