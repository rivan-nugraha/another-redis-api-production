"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionProvider = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const transaction_service_1 = require("./transaction.service");
exports.transactionProvider = [
    {
        provide: transaction_service_1.TransactionService,
        useFactory: (primaryConnection) => new transaction_service_1.TransactionService(primaryConnection),
        inject: [(0, mongoose_1.getConnectionToken)()],
    },
];
//# sourceMappingURL=transaction.provider.js.map