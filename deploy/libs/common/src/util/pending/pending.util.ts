import { Rejecter, Resolver } from '@app/common/constant';
import { Injectable } from '@nestjs/common';

/// ----------------- PendingResponse Service ---------------- ///
// 역할 : 명령에 대한 응답을 id를 key값으로 Map에 저장하여 지연응답
// 사용 : SocketIOController, MqttInputController
// 인스턴스 공용으로 사용하기 위해 서비스로 분리 함
/// ---------------------------------------------------------- ///

@Injectable()
export class PendingResponseUtil<T = unknown> {
  pendingResponses = new Map<
    string,
    {
      resolve: Resolver<T>;
      reject: Rejecter;
      received: T[];
    }
  >();
}
