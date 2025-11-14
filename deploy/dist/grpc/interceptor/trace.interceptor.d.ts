import { InterceptingCall } from '@grpc/grpc-js';
export declare const traceInterceptor: (service: string) => (options: any, nextCall: any) => InterceptingCall;
