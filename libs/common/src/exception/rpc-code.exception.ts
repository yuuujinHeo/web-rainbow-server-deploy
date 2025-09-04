import { RpcException } from '@nestjs/microservices';

// RpcException 클래스를 상속받아 code 값을 추가하여 사용
// code값은 httpException의 statusCode와 동일하게 사용
export class RpcCodeException extends RpcException {
  location: string;
  name: string;
  constructor(
    details: string,
    public statusCode: number,
  ) {
    super({ details: details, code: statusCode });
  }
}
