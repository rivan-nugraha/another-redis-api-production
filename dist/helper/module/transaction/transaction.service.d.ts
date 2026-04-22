import { ClientSession, Connection } from 'mongoose';
export declare class TransactionService {
    private readonly connection;
    constructor(connection: Connection);
    startTransaction(): Promise<ClientSession>;
    commitTransaction(session: ClientSession): Promise<void>;
    rollbackTransaction(session: ClientSession): Promise<void>;
}
