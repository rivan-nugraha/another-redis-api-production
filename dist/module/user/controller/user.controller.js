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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const get_pagination_dto_base_1 = require("../../../core/base/http/get-pagination.dto.base");
const auth_user_decorator_1 = require("../../../core/decorator/auth-user.decorator");
const secure_delete_decorator_1 = require("../../../core/decorator/secure-delete.decorator");
const secure_get_decorator_1 = require("../../../core/decorator/secure-get.decorator");
const secure_post_decorator_1 = require("../../../core/decorator/secure-post.decorator");
const secure_put_decorator_1 = require("../../../core/decorator/secure-put.decorator");
const create_user_use_case_1 = require("../use-case/create-user.use-case");
const delete_user_use_case_1 = require("../use-case/delete-user.use-case");
const get_user_use_case_1 = require("../use-case/get-user.use-case");
const update_user_use_case_1 = require("../use-case/update-user.use-case");
const create_user_request_dto_1 = require("./dtos/create-user.request.dto");
const update_user_request_dto_1 = require("./dtos/update-user.request.dto");
let UsersController = class UsersController {
    constructor(deleteUser, updateUser, getUser, createUser) {
        this.deleteUser = deleteUser;
        this.updateUser = updateUser;
        this.getUser = getUser;
        this.createUser = createUser;
    }
    async createUserHandler(body, user) {
        return await this.createUser.execute({ data: body, user });
    }
    async getUserHandler(query) {
        return this.getUser.execute({ data: query });
    }
    async deleteUserHandler(_id) {
        return this.deleteUser.execute({ _id });
    }
    update(_id, body) {
        return this.updateUser.execute({ _id, data: body });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, secure_post_decorator_1.SecurePost)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_request_dto_1.CreateUserRequestDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUserHandler", null);
__decorate([
    (0, secure_get_decorator_1.SecureGet)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_pagination_dto_base_1.GetPaginationDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserHandler", null);
__decorate([
    (0, secure_delete_decorator_1.SecureDelete)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserHandler", null);
__decorate([
    (0, secure_put_decorator_1.SecurePut)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_request_dto_1.UpdateUserRequestDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('v1/users'),
    __metadata("design:paramtypes", [delete_user_use_case_1.DeleteUser,
        update_user_use_case_1.UpdateUser,
        get_user_use_case_1.GetUser,
        create_user_use_case_1.CreateUser])
], UsersController);
//# sourceMappingURL=user.controller.js.map