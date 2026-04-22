"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUseCaseProvider = void 0;
const login_use_case_1 = require("./login.use-case");
const refresh_token_use_case_1 = require("./refresh-token.use-case");
exports.authUseCaseProvider = [login_use_case_1.LoginUser, refresh_token_use_case_1.RefreshToken];
//# sourceMappingURL=auth.use-case.provider.js.map