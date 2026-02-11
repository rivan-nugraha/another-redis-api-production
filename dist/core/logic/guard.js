"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
class Guard {
    static isEmpty(value) {
        const falseCondition = typeof value === 'number' ||
            typeof value === 'boolean' ||
            value instanceof Date;
        if (falseCondition) {
            return false;
        }
        if (typeof value === 'undefined' || value === null) {
            return true;
        }
        if (value instanceof Object && !Object.keys(value).length) {
            return true;
        }
        if (Array.isArray(value)) {
            if (value.length === 0) {
                return true;
            }
        }
        if (value === '') {
            return true;
        }
        return false;
    }
    static isDuplicate(props) {
        return !!props.find((value, index) => props.indexOf(value) !== index);
    }
    static isEmail(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    }
    static isInvalidString(value) {
        return /[^0-9A-Za-z_.-]+/.test(value);
    }
    static isNotDateString(value) {
        return !/\d{4}-\d{2}-\d{2}/.test(value);
    }
}
exports.Guard = Guard;
//# sourceMappingURL=guard.js.map