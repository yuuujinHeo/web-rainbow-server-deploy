export declare const ERROR_MESSAGE: {
    readonly USER: {
        readonly ID_REQUIRED: "사용자 아이디는 필수입니다.";
        readonly NOT_FOUND: "사용자를 찾을 수 없습니다.";
        readonly ALREADY_EXISTS: "이미 존재하는 사용자입니다.";
        readonly INVALID_PASSWORD: "비밀번호가 올바르지 않습니다.";
    };
    readonly ROBOT: {
        readonly SERIAL_REQUIRED: "로봇 시리얼은 필수입니다.";
        readonly NOT_FOUND: "로봇을 찾을 수 없습니다.";
        readonly ALREADY_EXISTS: "이미 존재하는 로봇입니다.";
    };
    readonly AUTH: {
        readonly TOKEN_REQUIRED: "인증 토큰이 필요합니다.";
        readonly TOKEN_INVALID: "유효하지 않은 토큰입니다.";
        readonly TOKEN_EXPIRED: "토큰이 만료되었습니다.";
        readonly UNAUTHORIZED: "인증이 필요합니다.";
        readonly ALREADY_EXISTS: "이미 존재하는 사용자입니다.";
    };
    readonly CODE: {
        readonly NOT_FOUND: "코드를 찾을 수 없습니다.";
        readonly ALREADY_EXISTS: "이미 존재하는 코드입니다.";
    };
    readonly SOCKET: {
        readonly NOT_FOUND: "Socket정보를 찾을 수 없습니다.";
    };
    readonly MAP: {
        readonly NOT_FOUND: "맵을 찾을 수 없습니다.";
        readonly INVALID_FORMAT: "올바르지 않은 맵 형식입니다.";
        readonly SAVE_FAILED: "맵 저장에 실패했습니다.";
    };
    readonly COMMON: {
        readonly BAD_REQUEST: "잘못된 요청입니다.";
        readonly INTERNAL_SERVER_ERROR: "서버 내부 오류가 발생했습니다.";
        readonly VALIDATION_FAILED: "유효성 검사에 실패했습니다.";
        readonly FORBIDDEN: "권한이 없습니다.";
    };
};
export declare const SUCCESS_MESSAGES: {
    readonly USER: {
        readonly CREATED: "사용자가 성공적으로 생성되었습니다.";
        readonly UPDATED: "사용자 정보가 성공적으로 업데이트되었습니다.";
        readonly DELETED: "사용자가 성공적으로 삭제되었습니다.";
    };
    readonly MAP: {
        readonly SAVED: "맵이 성공적으로 저장되었습니다.";
        readonly LOADED: "맵이 성공적으로 로드되었습니다.";
        readonly UPDATED: "맵이 성공적으로 업데이트되었습니다.";
    };
};
