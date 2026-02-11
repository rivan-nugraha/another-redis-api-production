"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodBody = void 0;
const common_1 = require("@nestjs/common");
const ZodBody = (schema) => (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { body } = request;
    return schema.parse(body);
})();
exports.ZodBody = ZodBody;
//# sourceMappingURL=zod-body.decorator.js.map