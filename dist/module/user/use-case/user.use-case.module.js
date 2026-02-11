"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const env_module_1 = require("../../../infra/config/env.module");
const user_repository_module_1 = require("../repository/user.repository.module");
const user_use_case_provider_1 = require("./user.use-case.provider");
let UserUseCaseModule = class UserUseCaseModule {
};
exports.UserUseCaseModule = UserUseCaseModule;
exports.UserUseCaseModule = UserUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [user_repository_module_1.UserRepositoryModule, env_module_1.EnvModule],
        exports: user_use_case_provider_1.userUseCaseProvider,
        providers: user_use_case_provider_1.userUseCaseProvider,
    })
], UserUseCaseModule);
//# sourceMappingURL=user.use-case.module.js.map