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
exports.CreateUser = void 0;
const common_1 = require("@nestjs/common");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const env_service_1 = require("../../../infra/config/env.service");
const user_repository_provider_1 = require("../repository/user.repository.provider");
const user_entity_1 = require("../domain/user.entity");
const user_level_value_object_1 = require("../domain/value-objects/user-level.value-object");
const crypto_js_1 = require("crypto-js");
let CreateUser = class CreateUser extends use_case_base_1.BaseUseCase {
    constructor(userRepository, envService) {
        super();
        this.userRepository = userRepository;
        this.envService = envService;
    }
    async execute({ data, user }) {
        await this.userRepository.findOneAndThrow({ user_id: data.user_id });
        const isSecretKeyValid = await this._validateSecretKey(data.secretKey);
        const level = await this._generateUserLevel(isSecretKeyValid, data?.level);
        try {
            const userEntity = await user_entity_1.UserEntity.create({
                user_name: data.user_name,
                user_id: data.user_id,
                password: data.password,
                level: level,
                input_by: user?.user_id,
            });
            const result = await this.userRepository.save(userEntity);
            return new response_dto_base_1.ResponseDto({ status: common_1.HttpStatus.CREATED, data: result });
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException({ message: err.message || err }, err.message.includes('exists')
                ? common_1.HttpStatus.CONFLICT
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async _validateSecretKey(secretKey) {
        const systemSecretKey = (0, crypto_js_1.SHA256)(this.envService.variables.secretKey).toString();
        const isSecretKeyValid = secretKey && secretKey === systemSecretKey;
        if (secretKey && !isSecretKeyValid)
            throw new common_1.BadRequestException('Wrong Key Input. Transaction aborted.');
        return isSecretKeyValid || false;
    }
    async _generateUserLevel(isSecretKeyValid, level) {
        if (isSecretKeyValid)
            await this.userRepository.findOneAndThrow({ level: 'SU' }, 'Level System Sudah Terdaftar.');
        return isSecretKeyValid ? new user_level_value_object_1.UserLevel('SU') : new user_level_value_object_1.UserLevel(level);
    }
};
exports.CreateUser = CreateUser;
exports.CreateUser = CreateUser = __decorate([
    (0, common_1.Injectable)(),
    __param(0, user_repository_provider_1.InjectUserRepository),
    __metadata("design:paramtypes", [Object, env_service_1.EnvService])
], CreateUser);
//# sourceMappingURL=create-user.use-case.js.map