"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("./user.entity");
const static_implements_decorator_1 = require("../../../core/decorator/static-implements.decorator");
const user_level_value_object_1 = require("./value-objects/user-level.value-object");
let UserMapper = class UserMapper {
    static toPlainObject(entity) {
        const entityProps = entity.propsCopy;
        return {
            ...entityProps,
            level: entityProps.level.value,
        };
    }
    static toDomain(raw) {
        return new user_entity_1.UserEntity({
            user_id: raw.user_id,
            user_name: raw.user_name,
            password: raw.password,
            level: new user_level_value_object_1.UserLevel(raw.level),
            input_by: raw.input_by,
        }, raw._id);
    }
};
exports.UserMapper = UserMapper;
exports.UserMapper = UserMapper = __decorate([
    (0, static_implements_decorator_1.staticImplements)()
], UserMapper);
//# sourceMappingURL=user.mapper.js.map