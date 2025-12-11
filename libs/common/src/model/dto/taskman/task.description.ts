export enum task_description {
  ID = '요청별로 지정되는 ID입니다. Request시, 서버에서 자동생성되며 Response에도 동일한 ID 값이 요구됩니다.',
  COMMAND = 'Task 요청에 대한 상세명령값입니다.',
  RESULT = 'Task 요청에 대한 응답입니다.',
  MESSAGE = 'Task 요청에 대한 응답입니다. result 값이 fail, reject 등 Taskman에서 응답에 대한 상세 메시지를 전송할 때 사용합니다.',
  MAPNAME = 'Task를 실행, 저장하기 위한 Map 경로를 입력하세요. Task 파일은 Map 폴더 안에 종속됩니다.',
  TASKNAME = '실행, 저장할 Task 파일 이름을 입력하세요.',
  RUNNING = '현재 Task를 실행중인지 여부를 반환합니다.',
  TASKID = '현재 Task가 실행 중인 경우 Task 파일에서 실행 중인 라인의 id(순서)값을 반환합니다.',
}
