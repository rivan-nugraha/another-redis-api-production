"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCacheByKeyRequestDto = void 0;
const z = require("zod");
exports.DeleteCacheByKeyRequestDto = z.object({
    key: z.string(),
    selected_db: z.number(),
    server: z.string().optional(),
});
//# sourceMappingURL=delete-cache-by-key.request.dto.js.map