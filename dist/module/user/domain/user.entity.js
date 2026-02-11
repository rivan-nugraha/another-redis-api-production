"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const entity_1 = require("../../../core/base/domain/entity");
const hash_service_1 = require("../../../helper/module/hash.service");
const user_level_value_object_1 = require("./value-objects/user-level.value-object");
class UserEntity extends entity_1.Entity {
    constructor(props, _id) {
        super(props, _id);
    }
    static async create(props) {
        const hashPassword = await this.hashUtil.generate(props.password);
        return new UserEntity({
            user_id: props.user_id,
            user_name: props.user_name,
            password: hashPassword,
            level: props.level,
            input_by: props.input_by,
        });
    }
    static async comparePassword(rawPassword, hashedPassword) {
        return await this.hashUtil.compare(rawPassword, hashedPassword);
    }
    async updateUser(payload) {
        this.props.level = new user_level_value_object_1.UserLevel(payload.level);
        this.props.user_name = payload.user_name;
    }
}
exports.UserEntity = UserEntity;
UserEntity.hashUtil = new hash_service_1.HashService();
//# sourceMappingURL=user.entity.js.map