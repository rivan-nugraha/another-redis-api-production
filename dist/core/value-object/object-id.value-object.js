"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdVO = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const value_object_1 = require("../base/domain/value-object");
class ObjectIdVO extends value_object_1.ValueObject {
    constructor(value) {
        super({ value });
    }
    get valueConverted() {
        return mongoose_1.Types.ObjectId.createFromHexString(this.props.value);
    }
    validate({ value }) {
        if (!(0, mongoose_1.isValidObjectId)(value)) {
            throw new common_1.BadRequestException('Value ObjectID tidak valid.');
        }
    }
}
exports.ObjectIdVO = ObjectIdVO;
//# sourceMappingURL=object-id.value-object.js.map