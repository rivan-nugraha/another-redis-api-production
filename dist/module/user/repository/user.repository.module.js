"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_mongo_entity_1 = require("./user.mongo-entity");
const user_repository_provider_1 = require("./user.repository.provider");
let UserRepositoryModule = class UserRepositoryModule {
};
exports.UserRepositoryModule = UserRepositoryModule;
exports.UserRepositoryModule = UserRepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature(user_mongo_entity_1.UserModel)],
        providers: [user_repository_provider_1.userRepositoryProvider],
        exports: [user_repository_provider_1.userRepositoryProvider],
    })
], UserRepositoryModule);
//# sourceMappingURL=user.repository.module.js.map