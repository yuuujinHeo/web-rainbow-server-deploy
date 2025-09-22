import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger';
export declare class APILogInterceptor implements NestInterceptor {
    loggerService: LoggerService;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
