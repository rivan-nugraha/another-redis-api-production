"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLevel = void 0;
const common_1 = require("@nestjs/common");
const value_object_1 = require("../../../../core/base/domain/value-object");
class UserLevel extends value_object_1.ValueObject {
    constructor(value) {
        super({ value });
    }
    validate({ value }) {
        const isLevelValid = this._getValidLevel().find((level) => level === value);
        if (!isLevelValid)
            throw new common_1.BadRequestException('The User Level is not valid');
    }
    _getValidLevel() {
        return ['ADMIN', 'OWNER', 'SUPERVISOR', 'SU'];
    }
}
exports.UserLevel = UserLevel;
//# sourceMappingURL=user-level.value-object.js.map