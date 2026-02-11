"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachUseCaseProvider = void 0;
const get_list_db_use_case_1 = require("./get-list-db.use-case");
const get_all_keys_use_case_1 = require("./get-all-keys.use-case");
const get_cache_by_key_use_case_1 = require("./get-cache-by-key.use-case");
exports.cachUseCaseProvider = [
    get_list_db_use_case_1.GetListDBUseCase,
    get_all_keys_use_case_1.GetAllKeysUseCase,
    get_cache_by_key_use_case_1.GetCacheByKeyUseCase
];
//# sourceMappingURL=cache.use-case.provider.js.map