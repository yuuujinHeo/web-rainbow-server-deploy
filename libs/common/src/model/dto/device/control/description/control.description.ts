export enum control_description {
  COMMAND = '실행할 컨트롤 명령',
  ID = '요청한 명령의 ID값입니다. request시 자동 생성됩니다.',
  RESULT = '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
  MESSAGE = 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
}
