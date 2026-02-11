"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamUuid = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
exports.ParamUuid = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { id } = request.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new common_1.BadRequestException('The Param Id is not valid.');
    }
    return id;
});
//# sourceMappingURL=param-uuid.decorator.js.map