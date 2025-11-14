import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '@app/common/logger';
export declare class GrpcToHttpFilter implements ExceptionFilter {
    loggerService: LoggerService;
    catch(exception: unknown, host: ArgumentsHost): Response<any, Record<string, any>>;
}
