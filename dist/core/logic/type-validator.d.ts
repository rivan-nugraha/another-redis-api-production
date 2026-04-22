import { Types } from 'mongoose';
export declare class TypeValidator {
    static isObject(value: any): boolean;
    static isDate(value: any): value is Date;
    static isArray(value: any): value is any[];
    static extractMongoId(id: string | Types.ObjectId): string;
}
