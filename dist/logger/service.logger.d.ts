export declare class LoggerService {
    private logger;
    constructor(service: string);
    static get(service: string): LoggerService;
    error(str: string): void;
    warn(str: string): void;
    info(str: string): void;
    debug(str: string): void;
}
