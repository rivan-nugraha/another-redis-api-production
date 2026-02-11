"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCacheByKeyRequestDto = void 0;
const z = require("zod");
exports.GetCacheByKeyRequestDto = z.object({
    keys: z.string(),
});
//# sourceMappingURL=get-cache-by-key.request.dto.js.map