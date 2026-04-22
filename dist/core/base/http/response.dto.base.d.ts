import { ResponseProps } from 'src/core/contract/response.contract';
export declare class ResponseDto<T = {
    [k: string]: any;
}> implements ResponseProps<T> {
    constructor({ status, data, message, count }: ResponseProps<T>);
    status: number;
    data?: T;
    message?: string;
    count?: number;
}
