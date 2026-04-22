"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodQuery = void 0;
const common_1 = require("@nestjs/common");
const qs = require("qs");
const ZodQuery = (schema) => (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.url.split('?')[1];
    const parsedQuery = qs.parse(query);
    return schema.parse(parsedQuery);
})();
exports.ZodQuery = ZodQuery;
//# sourceMappingURL=zod-query.decorator.js.map