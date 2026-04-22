"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMongoEntity = void 0;
class BaseMongoEntity {
    constructor(props) {
        if (props) {
            Object.assign(this, props);
        }
    }
}
exports.BaseMongoEntity = BaseMongoEntity;
//# sourceMappingURL=mongo-entity.js.map