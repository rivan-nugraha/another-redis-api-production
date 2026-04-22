"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamIdNumber = void 0;
const common_1 = require("@nestjs/common");
exports.ParamIdNumber = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { id } = request.params;
    return +id || 0;
});
//# sourceMappingURL=param-id-number.decorator.js.map