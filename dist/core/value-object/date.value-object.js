"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateVO = void 0;
const value_object_1 = require("../base/domain/value-object");
class DateVO extends value_object_1.ValueObject {
    constructor(value) {
        const date = new Date(value);
        super({ value: date });
    }
    static now() {
        return new DateVO(Date.now());
    }
    validate({ value }) {
        if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
            throw new Error('Invalid Date');
        }
    }
}
exports.DateVO = DateVO;
//# sourceMappingURL=date.value-object.js.map