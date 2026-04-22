import { CustomLogger } from 'src/infra/logger/logger';
export interface JwtDecoded {
    user_id?: string;
}
export interface IUseCasePayload<T> {
    _id: string;
    data: T;
    user: JwtDecoded;
}
export interface IUseCase<IReq> {
    execute(request?: IReq): any;
}
export declare abstract class BaseUseCase {
    protected logger: CustomLogger;
    constructor();
}
