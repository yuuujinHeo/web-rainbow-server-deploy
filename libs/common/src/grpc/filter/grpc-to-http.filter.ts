// grpc-to-http.filter.ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { errorToJson } from '@app/common/logger';
import { GrpcCode } from '../constant';

// RpcCodeException 등의 예외를 HttpException으로 변환하여 처리
@Catch()
export class GrpcToHttpFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    try {
      if (exception instanceof Error) {
        if ('code' in exception && 'details' in exception) {
          const statusCode = mapGrpcToHttpStatus(exception.code as number);

          // this.logger.info(`[Grpc] RpcException : ${exception.details} ${statusCode}(${exception.code})`);

          return response.status(statusCode).json({
            statusCode,
            message: exception.details,
          });
        } else if (exception instanceof HttpException) {
          const statusCode = exception.getStatus();
          const message = exception.message;

          // this.logger.info(`[Grpc] caught HttpException : ${statusCode}, ${message}`);

          return response.status(statusCode).json({ statusCode, message });
        } else {
          // this.logger.info(`[Grpc] caught Error : ${exception.message}`);

          return response.status(500).json({
            statusCode: 500,
            message: exception.message,
          });
        }
      } else {
        // this.logger.info(`[Grpc] caught unknown Error : ${errorToJson(exception)}`);
        return response.status(500).json({
          statusCode: 500,
          message: 'Internal server error',
        });
      }
    } catch (error) {
      // this.logger.info(`[Grpc] caught unknown Error : ${errorToJson(exception)}`);
      return response.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }
}

function mapGrpcToHttpStatus(code: number): number {
  switch (code) {
    case GrpcCode.OK:
      return HttpStatus.OK;
    case GrpcCode.Cancelled:
      return 499;
    case GrpcCode.Unknown:
      return HttpStatus.BAD_REQUEST;
    case GrpcCode.InvalidArgument:
      return HttpStatus.BAD_REQUEST;
    case GrpcCode.DeadlineExceeded:
      return HttpStatus.GATEWAY_TIMEOUT;
    case GrpcCode.NotFound:
      return HttpStatus.NOT_FOUND;
    case GrpcCode.AlreadyExists:
      return HttpStatus.CONFLICT;
    case GrpcCode.PermissionDenied:
      return HttpStatus.FORBIDDEN;
    case GrpcCode.ResourceExhausted:
      return HttpStatus.TOO_MANY_REQUESTS;
    case GrpcCode.FailedPrecondition:
      return HttpStatus.BAD_REQUEST;
    case GrpcCode.Aborted:
      return HttpStatus.CONFLICT;
    case GrpcCode.OutOfRange:
      return HttpStatus.BAD_REQUEST;
    case GrpcCode.Unimplemented:
      return HttpStatus.NOT_IMPLEMENTED;
    case GrpcCode.InternalError:
      return HttpStatus.INTERNAL_SERVER_ERROR;
    case GrpcCode.Unavailable:
      return HttpStatus.SERVICE_UNAVAILABLE;
    case GrpcCode.DataLoss:
      return HttpStatus.INTERNAL_SERVER_ERROR;
    case GrpcCode.Unauthenticated:
      return HttpStatus.UNAUTHORIZED;
    default:
      return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
