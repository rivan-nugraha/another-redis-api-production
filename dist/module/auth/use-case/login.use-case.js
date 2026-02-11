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
exports.LoginUser = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const env_service_1 = require("../../../infra/config/env.service");
const user_repository_provider_1 = require("../../user/repository/user.repository.provider");
const user_entity_1 = require("../../user/domain/user.entity");
const user_mapper_1 = require("../../user/domain/user.mapper");
let LoginUser = class LoginUser extends use_case_base_1.BaseUseCase {
    constructor(userRepository, jwtService, envService) {
        super();
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.envService = envService;
    }
    async execute({ data }) {
        const userData = await this.userRepository.findOneOrThrow({
            user_id: data.user_id,
        }, 'Username atau password salah.');
        const userProps = userData.propsCopy;
        const passwordMatch = await user_entity_1.UserEntity.comparePassword(data.password, userProps.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Username or Password is Incorrect.');
        }
        const jwtPayload = {
            sub: userProps.user_id,
        };
        const accessToken = this.jwtService.sign(jwtPayload);
        const refreshToken = this.jwtService.sign(jwtPayload, {
            secret: this.envService.variables.jwtRefreshKey,
        });
        const userObject = user_mapper_1.UserMapper.toPlainObject(userData);
        return new response_dto_base_1.ResponseDto({
            status: common_1.HttpStatus.OK,
            data: {
                user_id: userObject.user_id,
                access_token: accessToken,
                refresh_token: refreshToken,
                level: userObject.level,
                user_name: userObject.user_name,
            },
        });
    }
};
exports.LoginUser = LoginUser;
exports.LoginUser = LoginUser = __decorate([
    (0, common_1.Injectable)(),
    __param(0, user_repository_provider_1.InjectUserRepository),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        env_service_1.EnvService])
], LoginUser);
//# sourceMappingURL=login.use-case.js.map