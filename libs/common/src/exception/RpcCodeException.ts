import { RpcException } from "@nestjs/microservices";

export class RpcCodeException extends RpcException {
  location:string;
  name:string;
  constructor(details: string, public statusCode: number) {
    super({ details:details, code:statusCode, });
  }
}