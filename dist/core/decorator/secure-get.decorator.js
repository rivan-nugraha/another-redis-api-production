"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureGet = SecureGet;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../infra/auth/jwt-auth.guard");
function SecureGet(path = '') {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, common_1.Get)(path));
}
//# sourceMappingURL=secure-get.decorator.js.map