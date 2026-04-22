"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const login_user_request_dto_1 = require("./dto/login-user-request.dto");
const login_use_case_1 = require("../use-case/login.use-case");
const create_user_use_case_1 = require("../../user/use-case/create-user.use-case");
const register_user_request_dto_1 = require("./dto/register-user-request.dto");
const auth_refresh_token_dto_1 = require("./dto/auth-refresh-token.dto");
const refresh_token_use_case_1 = require("../use-case/refresh-token.use-case");
const public_decorator_1 = require("../../../core/decorator/public.decorator");
let AuthController = class AuthController {
    constructor(loginUser, createUser, refreshToken) {
        this.loginUser = loginUser;
        this.createUser = createUser;
        this.refreshToken = refreshToken;
    }
    async createUserHandler(body, secretKey) {
        if (!secretKey)
            throw new common_1.BadRequestException('Secret key is required');
        return this.createUser.execute({
            data: { ...body, secretKey },
            user: { user_id: 'SYSTEM' },
        });
    }
    async loginUserHandler(body) {
        return this.loginUser.execute({ data: body });
    }
    async refreshTokenHandler(body) {
        return this.refreshToken.execute({ data: body });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('register-su'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('secret-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_request_dto_1.RegisterUserRequestDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUserHandler", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUserHandler", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_refresh_token_dto_1.AuthRefreshTokenRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokenHandler", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('v1/auth'),
    __metadata("design:paramtypes", [login_use_case_1.LoginUser,
        create_user_use_case_1.CreateUser,
        refresh_token_use_case_1.RefreshToken])
], AuthController);
//# sourceMappingURL=auth.controller.js.map