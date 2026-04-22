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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = exports.UserMongoEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongo_entity_1 = require("../../../core/base/domain/mongo-entity");
let UserMongoEntity = class UserMongoEntity extends mongo_entity_1.BaseMongoEntity {
};
exports.UserMongoEntity = UserMongoEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "user_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "input_by", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], UserMongoEntity.prototype, "input_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserMongoEntity.prototype, "edit_by", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], UserMongoEntity.prototype, "edit_date", void 0);
exports.UserMongoEntity = UserMongoEntity = __decorate([
    (0, mongoose_1.Schema)({ collection: 'tm_user' })
], UserMongoEntity);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserMongoEntity);
exports.UserModel = [{ name: UserMongoEntity.name, schema: exports.UserSchema }];
//# sourceMappingURL=user.mongo-entity.js.map