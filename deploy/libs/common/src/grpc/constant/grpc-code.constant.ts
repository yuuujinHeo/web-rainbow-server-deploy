export enum GrpcCode {
  // 응답 성공 (200)
  OK = 0,
  // 호출 취소됨
  Cancelled = 1,
  // 알 수 없는 에러, 입력값
  Unknown = 2,
  // 잘못된 호출 입력값
  InvalidArgument = 3,
  DeadlineExceeded = 4,
  // 파일, 경로를 찾을 수 없음
  NotFound = 5,
  // 생성 파일이 이미 존재함
  AlreadyExists = 6,
  // 권한없음
  PermissionDenied = 7,
  // 리소스 없음, 공간 부족
  ResourceExhausted = 8,
  // 작업 중단됨 (재시도 불가)
  FailedPrecondition = 9,
  // 작업 중단됨
  Aborted = 10,
  // 입력값 범위 초과됨
  OutOfRange = 11,
  // 구현안된 기능 호출
  Unimplemented = 12,
  // 서버 내부 에러
  InternalError = 13,
  // 작업 중단됨 (일시적)
  Unavailable = 14,
  // 데이터 손실됨
  DataLoss = 15,
  // 인증 자격 필요함
  Unauthenticated = 16,
  DBError = 17,
}
