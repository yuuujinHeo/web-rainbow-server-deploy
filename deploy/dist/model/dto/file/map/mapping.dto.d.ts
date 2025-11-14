export declare enum Description {
    ID = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.",
    COMMAND = "\uC2E4\uD589\uD560 \uBA85\uB839",
    MAPNAME = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.",
    FILE = "\uC800\uC7A5\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694.",
    EXTENSION = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB97C \uC785\uB825\uD558\uC138\uC694. cloud\uC758 \uACBD\uC6B0 \uD604\uC7AC csv\uB9CC \uC9C0\uC6D0\uD558\uBA70 topology\uB294 \uD604\uC7AC json \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.",
    MAPPING_NAME = "\uC0C8\uB85C \uC0DD\uC131\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.",
    RESULT = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.",
    MESSAGE = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.",
    TIME = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704",
    TOPO = "\uC800\uC7A5\uD560 \uD1A0\uD3F4\uB85C\uC9C0 \uD615\uC2DD\uC744 \uB9DE\uCDB0 \uC785\uB825\uD558\uC138\uC694."
}
export declare class MappingRequestDto {
    command: string;
    mapName?: string;
}
export declare class MappingResponseDto extends MappingRequestDto {
}
export declare class MappingResponseSlamnav extends MappingResponseDto {
    id: string;
    result: string;
    message?: string;
}
export declare class MappingResponseFrs {
    robotSerial: string;
    data: MappingResponseDto;
}
