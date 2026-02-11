"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUseCaseProvider = void 0;
const create_user_use_case_1 = require("./create-user.use-case");
const delete_user_use_case_1 = require("./delete-user.use-case");
const get_user_use_case_1 = require("./get-user.use-case");
const update_user_use_case_1 = require("./update-user.use-case");
exports.userUseCaseProvider = [
    create_user_use_case_1.CreateUser,
    delete_user_use_case_1.DeleteUser,
    get_user_use_case_1.GetUser,
    update_user_use_case_1.UpdateUser,
];
//# sourceMappingURL=user.use-case.provider.js.map