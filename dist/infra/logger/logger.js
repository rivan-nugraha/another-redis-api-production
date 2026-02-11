"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const generator_function_1 = require("./generator.function");
const clc = require("cli-color");
class CustomLogger {
    constructor(context) {
        this.context = context;
        this.initLogger();
    }
    log(message, ...meta) {
        this.logger.info(message, meta);
    }
    error(message, ...meta) {
        this.logger.error(message, meta);
    }
    warn(message, ...meta) {
        this.logger.warn(message, meta);
    }
    debug(message, ...meta) {
        this.logger.log('debug', this.stringifyMessage(message), meta);
    }
    verbose(message, ...meta) {
        this.logger.log('verbose', this.stringifyMessage(message, 4), meta);
    }
    stringifyMessage(message, space = 2) {
        return typeof message !== 'string'
            ? JSON.stringify(message, null, space)
            : message;
    }
    initLogger() {
        const timeformat = 'YYMMDD, HH:mm:ss';
        this.logger = (0, winston_1.createLogger)({
            level: this.getLoggerLevel(),
            format: winston_1.format.combine(winston_1.format.timestamp({ format: timeformat }), winston_1.format.json()),
            transports: [
                this.createConsoleTransport(),
                ...this.createFileTransports(timeformat),
            ],
        });
    }
    isProduction() {
        return process.env.MODE === 'PRODUCTION';
    }
    createConsoleTransport() {
        return new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.printf((info) => this.logFormatHandler(info))),
        });
    }
    createFileTransports(timeformat) {
        if (this.isProduction()) {
            const fileOptions = [
                new winston_1.transports.DailyRotateFile({
                    filename: 'logs/server-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: timeformat }), winston_1.format.align(), winston_1.format.printf((info) => `${[info.timestamp]} ${info.level}: ${info.message}\n::[${this.getContext(info)}]${this.generateMetaTrace(info)}`)),
                }),
            ];
            return fileOptions;
        }
        return [];
    }
    logFormatHandler(info) {
        const timestamp = clc.green(info.timestamp);
        const levelTag = (0, generator_function_1.generateTagLevel)(info.level, (0, generator_function_1.generateColor)(info.level));
        const contextTag = clc.xterm((0, generator_function_1.generateColor)(info.level))(`[${this.getContext(info)}]`);
        const metaTrace = this.generateMetaTrace(info);
        const msg = `${timestamp}   ${levelTag} ${contextTag}${clc.xterm((0, generator_function_1.generateColor)(info.level))(metaTrace)} ${info.message}`;
        return info.stack ? msg + '\n' + info.stack : msg;
    }
    getContext(info) {
        return this.context || info['0'];
    }
    generateMetaTrace(info) {
        const keys = Object.keys(info).filter((k) => /^\d+$/.test(k));
        let additionalTrace = '';
        for (let i = 0; i < keys.length; i++) {
            if (info[keys[i]] && info[keys[i]] !== this.getContext(info))
                additionalTrace += `[${info[keys[i]]}]`;
        }
        return additionalTrace;
    }
    getLoggerLevel() {
        return this.isProduction() ? 'info' : 'debug';
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=logger.js.map