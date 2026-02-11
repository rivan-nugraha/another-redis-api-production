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
exports.DeleteUser = void 0;
const common_1 = require("@nestjs/common");
const response_dto_base_1 = require("../../../core/base/http/response.dto.base");
const use_case_base_1 = require("../../../core/base/module/use-case.base");
const user_repository_provider_1 = require("../repository/user.repository.provider");
let DeleteUser = class DeleteUser extends use_case_base_1.BaseUseCase {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }
    async execute({ _id }) {
        try {
            await this.userRepository.delete({ _id });
        }
        catch (err) {
            this.logger.error(err);
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.HttpException(err.message, 500);
        }
        return new response_dto_base_1.ResponseDto({
            status: common_1.HttpStatus.OK,
            message: `${_id} documents deleted!`,
        });
    }
};
exports.DeleteUser = DeleteUser;
exports.DeleteUser = DeleteUser = __decorate([
    (0, common_1.Injectable)(),
    __param(0, user_repository_provider_1.InjectUserRepository),
    __metadata("design:paramtypes", [Object])
], DeleteUser);
//# sourceMappingURL=delete-user.use-case.js.map