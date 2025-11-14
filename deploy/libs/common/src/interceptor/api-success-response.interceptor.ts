/**
 * ┌─────────────────────────────────────────────────┐
 * │  Project: web-rainbow-server
 * │  File: api-success-response.interceptor.ts
 * │  Developer: kjlee
 * │  Created: 25. 9. 9.
 * │  Description: api-gateway-response.interceptor 모듈
 * └─────────────────────────────────────────────────┘
 */
import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request, Response } from 'express';
import { StandardResponse } from '../model/interface/standard-response.interface';

@Injectable()
export class ApiSuccessResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const timestamp = new Date().toISOString();

    return next.handle().pipe(
      map((data) => {
        if (this.isStandardResponse(data)) {
          return {
            ...data,
            timestamp: timestamp,
          };
        }

        const standardResponse: StandardResponse = {
          status: response.statusCode || HttpStatus.OK,
          message: this.getSuccessMessage(request.method, request.path),
          data: data,
          timestamp: timestamp,
        };

        return standardResponse;
      }),
    );
  }

  private isStandardResponse(data: any): data is StandardResponse {
    return data && typeof data === 'object' && 'data' in data && 'status' in data && 'message' in data;
  }

  private getSuccessMessage(method: string, path: string): string {
    const messageMap: { [key: string]: { [path: string]: string } } = {
      GET: {
        '/amr': 'AMR 목록을 성공적으로 조회했습니다.',
        '/amr/:id': 'AMR 정보를 성공적으로 조회했습니다.',
        default: '데이터를 성공적으로 조회했습니다.',
      },
      POST: {
        '/amr': 'AMR이 성공적으로 생성되었습니다.',
        default: '데이터가 성공적으로 생성되었습니다.',
      },
      PUT: {
        '/amr/:id': 'AMR 정보가 성공적으로 업데이트되었습니다.',
        default: '데이터가 성공적으로 업데이트되었습니다.',
      },
      PATCH: {
        '/amr/:id': 'AMR 정보가 성공적으로 수정되었습니다.',
        default: '데이터가 성공적으로 수정되었습니다.',
      },
      DELETE: {
        '/amr/:id': 'AMR이 성공적으로 삭제되었습니다.',
        default: '데이터가 성공적으로 삭제되었습니다.',
      },
    };

    const methodMessages = messageMap[method.toUpperCase()];
    if (!methodMessages) {
      return '요청이 성공적으로 처리되었습니다.';
    }

    const normalizedPath = this.normalizePathForMatching(path);
    return methodMessages[normalizedPath] || methodMessages.default || '요청이 성공적으로 처리되었습니다.';
  }

  private normalizePathForMatching(path: string): string {
    if (path.match(/^\/amr\/[^\/]+$/)) {
      return '/amr/:id';
    }
    return path;
  }
}
