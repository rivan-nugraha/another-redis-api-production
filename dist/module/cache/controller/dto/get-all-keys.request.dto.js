"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllKeysRequestDto = void 0;
const z = require("zod");
exports.GetAllKeysRequestDto = z.object({
    selected_db: z.string(),
    server: z.string().optional(),
});
//# sourceMappingURL=get-all-keys.request.dto.js.map