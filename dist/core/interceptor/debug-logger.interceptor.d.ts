import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class DebugLoggerInterceptor implements NestInterceptor {
    private logger;
    constructor();
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
