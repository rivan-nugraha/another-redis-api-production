"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("../../../infra/auth/jwt.strategy");
const env_module_1 = require("../../../infra/config/env.module");
const env_service_1 = require("../../../infra/config/env.service");
const user_repository_module_1 = require("../../user/repository/user.repository.module");
const auth_use_case_provider_1 = require("./auth.use-case.provider");
let AuthUseCaseModule = class AuthUseCaseModule {
};
exports.AuthUseCaseModule = AuthUseCaseModule;
exports.AuthUseCaseModule = AuthUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            env_module_1.EnvModule,
            user_repository_module_1.UserRepositoryModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [env_module_1.EnvModule],
                useFactory: (envService) => ({
                    secret: envService.variables.jwtSecretKey,
                    signOptions: { expiresIn: 6000 },
                }),
                inject: [env_service_1.EnvService],
            }),
        ],
        providers: [...auth_use_case_provider_1.authUseCaseProvider, jwt_strategy_1.JwtStrategy],
        exports: [...auth_use_case_provider_1.authUseCaseProvider],
    })
], AuthUseCaseModule);
//# sourceMappingURL=auth.use-case.module.js.map