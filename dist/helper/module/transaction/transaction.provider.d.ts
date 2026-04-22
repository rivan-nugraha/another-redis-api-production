import { Connection } from 'mongoose';
import { TransactionService } from './transaction.service';
export declare const transactionProvider: {
    provide: typeof TransactionService;
    useFactory: (primaryConnection: Connection) => TransactionService;
    inject: string[];
}[];
