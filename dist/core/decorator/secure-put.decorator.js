"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurePut = SecurePut;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../infra/auth/jwt-auth.guard");
function SecurePut(path = '') {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, common_1.Put)(path));
}
//# sourceMappingURL=secure-put.decorator.js.map