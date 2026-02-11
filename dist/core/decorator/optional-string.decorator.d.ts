import { TStringInput } from './type/string-input.type';
export declare function IsOptionalString(options?: TStringInput): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
