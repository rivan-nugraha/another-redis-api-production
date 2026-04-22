"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryProvider = exports.InjectUserRepository = void 0;
const common_1 = require("@nestjs/common");
const user_repository_service_1 = require("./user.repository.service");
exports.InjectUserRepository = (0, common_1.Inject)(user_repository_service_1.UserRepository.name);
exports.userRepositoryProvider = {
    provide: user_repository_service_1.UserRepository.name,
    useClass: user_repository_service_1.UserRepository,
};
//# sourceMappingURL=user.repository.provider.js.map