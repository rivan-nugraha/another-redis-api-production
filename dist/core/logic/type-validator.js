"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeValidator = void 0;
const mongoose_1 = require("mongoose");
class TypeValidator {
    static isObject(value) {
        return typeof value === 'object';
    }
    static isDate(value) {
        return value instanceof Date;
    }
    static isArray(value) {
        return Array.isArray(value);
    }
    static extractMongoId(id) {
        return id instanceof mongoose_1.Types.ObjectId ? id.toString() : id;
    }
}
exports.TypeValidator = TypeValidator;
//# sourceMappingURL=type-validator.js.map