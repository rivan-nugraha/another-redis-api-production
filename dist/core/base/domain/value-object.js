"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const guard_1 = require("../../logic/guard");
class ValueObject {
    constructor(props, label) {
        this.label = label;
        this._checkIfEmpty(props);
        this.validate(props);
        this.props = props;
    }
    get value() {
        return this.props.value;
    }
    static isValueObject(obj) {
        return obj instanceof ValueObject;
    }
    _checkIfEmpty(props) {
        if (guard_1.Guard.isEmpty(props) ||
            (this._isDomainPrimitive(props) && guard_1.Guard.isEmpty(props.value))) {
            throw new Error('Property cannot be empty');
        }
    }
    _isDomainPrimitive(obj) {
        if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
            return true;
        }
        return false;
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=value-object.js.map