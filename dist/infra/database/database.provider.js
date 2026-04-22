"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const env_module_1 = require("../config/env.module");
const env_service_1 = require("../config/env.service");
const database_option_const_1 = require("../../core/constant/database/database-option.const");
exports.databaseProviders = [
    mongoose_1.MongooseModule.forRootAsync({
        imports: [env_module_1.EnvModule],
        inject: [env_service_1.EnvService],
        useFactory: ({ variables }) => {
            return {
                uri: variables.dbConnectionUri,
                ...database_option_const_1.DATABASE_OPTION,
            };
        },
    }),
];
//# sourceMappingURL=database.provider.js.map