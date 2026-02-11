"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const mongoose_1 = require("mongoose");
const guard_1 = require("../../logic/guard");
class Entity {
    constructor(props, _id) {
        this.validateProps(props);
        this.props = props;
        this._id = _id || new mongoose_1.Types.ObjectId();
    }
    static isEntity(entity) {
        return entity instanceof Entity;
    }
    get propsCopy() {
        const propsCopy = {
            _id: this._id,
            ...this.props,
        };
        return Object.freeze(propsCopy);
    }
    validateProps(props) {
        if (guard_1.Guard.isEmpty(props)) {
            throw new Error('Entity props should not be empty!');
        }
        if (typeof props !== 'object') {
            throw new Error('Entity props should be an object');
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map