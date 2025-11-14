import { RpcException } from '@nestjs/microservices';
export declare class RpcCodeException extends RpcException {
    statusCode: number;
    location: string;
    name: string;
    constructor(details: string, statusCode: number);
}
