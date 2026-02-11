"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureDelete = SecureDelete;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../infra/auth/jwt-auth.guard");
function SecureDelete(path = '') {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, common_1.Delete)(path));
}
//# sourceMappingURL=secure-delete.decorator.js.map