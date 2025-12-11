export enum localization_description {
  COMMAND = '위치초기화 명령',
  RESULT = '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
  MESSAGE = 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
  ID = '요청한 명령의 ID값입니다. request시 자동 생성됩니다.',
  X = 'init 모드로 위치초기화 시, 지도상 x좌표를 입력하세요. 단위는 [m] 입니다.',
  Y = 'init 모드로 위치초기화 시, 지도상 y좌표를 입력하세요. 단위는 [m] 입니다.',
  Z = 'init 모드로 위치초기화 시, 지도상 z좌표를 입력하세요. 특정 모델만 사용합니다. 기본값 0으로 입력해주세요. 단위는 [m] 입니다.',
  RZ = 'init 모드로 위치초기화 시, 로봇의 z축 방향값을 입력하세요. 단위는 [deg] 입니다.',
}
