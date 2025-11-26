// logging.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
// import { LoggerService } from '../logger';
import { LogService } from '../log/saveLog.service';

@Injectable()
export class APILogInterceptor implements NestInterceptor {
  logger: LogService; //.get('gateway');
  //   private readonly bannedIps = ['127.0.0.1', '::1'];

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, socket } = request;
    const ip = socket?.remoteAddress || 'unknown';
    const requestTimestamp = new Date();

    // IP 밴 기능 추가
    // if (!this.bannedIps.includes(ip)) {
    //   console.debug(`[API] ${method} ${url} - ${ip} - payload: ${JSON.stringify(body)}`);
    // }

    if (body) {
      // this.logger?.debug(`[${method}] ${url} (${ip}) : ${JSON.stringify(body).substring(0, 100)}`);
    } else {
      // this.logger?.debug(`[${method}] ${url} (${ip})`);
    }

    return next.handle().pipe(
      tap((data) => {
        const responseTimestamp = new Date();
        const responseTime = `${+responseTimestamp - +requestTimestamp}ms`;

        // 응답 이후 처리할 로그가 있다면 여기에 추가
        if (data) {
          // this.logger?.debug(`[${method} RESPONSE] ${url} (${ip}) : ${JSON.stringify(data).substring(0, 100)} -> ${responseTime}`);
        } else {
          // this.logger?.debug(`[${method} RESPONSE] ${url} (${ip}) -> ${responseTime}`);
        }
      }),
    );
  }
}
