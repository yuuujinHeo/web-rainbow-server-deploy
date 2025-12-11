export enum mapDescription {
  ID = '요청한 명령의 ID값입니다. request시 자동 생성됩니다.',
  COMMAND = '실행할 명령',
  MAPNAME = '로드(저장)할 맵 이름을 입력하세요.',
  FILE = '저장할 파일의 이름을 입력하세요. 확장자를 포함하여 입력하세요.',
  EXTENSION = '로드(저장)할 파일의 확장자를 입력하세요. cloud의 경우 현재 csv만 지원하며 topology는 현재 json 형식만 지원합니다.',
  MAPPING_NAME = '새로 생성한 맵의 이름을 입력하세요.',
  RESULT = '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
  MESSAGE = 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
  TIME = '메시지 발송 시간. ms 단위',
  TOPO = '저장할 토폴로지 형식을 맞춰 입력하세요.',
}

export enum topoDescription {
  ID = '노드의 고유 ID값입니다. 자동생성되며 변경할 수 없습니다.',
  NAME = '노드의 이름 값입니다. 기본 자동생성되며 변경 가능합니다. 중복 검사를 하지 않습니다.',
  POSE = '노드의 맵 상 글로벌 좌표값입니다.',
  INFO = '노드의 정보값 나타냅니다. 현재 구현된 기능은 없습니다.',
  LINKS = '노드가 연결된 다른 노드의 id값 배열입니다. 포함된 노드는 현 노드에서 출발하는 단방향 링크로 연결되어 있으며, 해당 노드의 links에 현 노드의 id값이 포함되었다면 양방향 링크로 연결되어 있습니다.',
  TYPE = '노드의 타입을 나타냅니다.',
}
