import { LoggerService } from '@nestjs/common';
import 'winston-daily-rotate-file';
export declare class CustomLogger implements LoggerService {
    private logger;
    private context?;
    constructor(context?: string);
    log(message: any, ...meta: Array<any>): void;
    error(message: any, ...meta: Array<any>): void;
    warn(message: any, ...meta: Array<any>): void;
    debug?(message: any, ...meta: Array<any>): void;
    verbose?(message: any, ...meta: Array<any>): void;
    private stringifyMessage;
    private initLogger;
    private isProduction;
    private createConsoleTransport;
    private createFileTransports;
    private logFormatHandler;
    private getContext;
    private generateMetaTrace;
    private getLoggerLevel;
}
