import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export enum SettingParameterType {
    float = 'float',
    string = 'string',
    boolean = 'boolean',
    int = 'int',
  }

export class SettingParam {
    @ApiProperty({
      description: '세팅 필드 이름',
      example: 'SPEAKER',
      required: false,
    })
    @IsString()
    name: string;
  
    @ApiProperty({
      description: '세팅 필드 값',
      example: 'true',
      required: false,
    })
    @IsString()
    value: string;
  
    @ApiProperty({
      description: '세팅 필드 타입',
      example: 'float',
      required: false,
    })
    @IsString()
    type: string;
  }

export class SettingRequestDto {
    @ApiProperty({
        description: '파라미터 목록',
        example: [
          {
            name: 'v_limit_jog',
            value: '0.1',
            type: SettingParameterType.float,
          },
        ],
        required: false,
      })
      @IsArray()
      @Type(() => SettingParam)
      params: SettingParam[];
}

export class SettingResponseDto extends SettingRequestDto {
  @ApiProperty({
    description: '결과 상태',
    example: 'accept',
    enum: ['accept', 'reject', 'fail', 'success'],
    required: true,
  })
  @IsString()
  @IsOptional()
  result?: string;

  @ApiProperty({
    description:
      '결과 메시지. result값이 reject, fail일 경우 메시지 내용을 확인하세요.',
    example: '파라미터의 값이 범위를 벗어났습니다.',
    required: false,
  })
  @IsOptional()
  @IsString()
  message?: string;
}

export class SettingRequestSlamnav extends SettingRequestDto {
  @ApiProperty({
    description: '요청 고유 아이디',
    example: '1234567890',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class SettingResponseSlamnav extends SettingResponseDto {
  @ApiProperty({
    description: '요청 고유 아이디',
    example: '1234567890',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}

enum Description {
  ID = '요청 고유 아이디. 서버에서 자동생성되며 그대로 반환.',
  COMMAND = '세팅 명령어.',
  TYPE = '로봇 타입. 타입별로 세팅 파일 내용이 다름',
  DATA = '세팅 파일 내용. json 형식으로 저장되어 있음',
  KEY = '세팅 키. 파일 내용을 수정할 때 세팅 변수의 이름',
  VALUE = '세팅 값. 파일 내용을 수정할 때 세팅 변수의 값. 모든 값은 string 형식으로 지정하여 송신',
  RESULT = '세팅 결과. success, fail',
  MESSAGE = '세팅 결과 메시지',
  PRESET = '프리셋 이름. 프리셋 파일이름이 preset_1.json 이라면 1로 보내주세요.',
  PRESET_LIST = '프리셋 리스트. 프리셋 파일이름이 preset_1.json 이라면 1로 보내주세요.',
}

// export class SettingRequestDto {
//   @ApiProperty({
//     description: Description.TYPE,
//     example: 'SRV',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   type?: string;

//   @ApiProperty({
//     description: Description.PRESET,
//     example: '1',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   preset?: string;

//   @ApiProperty({
//     description: Description.KEY,
//     example: 'USE_RRS',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   key?: string;

//   @ApiProperty({
//     description: Description.VALUE,
//     example: 'true',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   value?: string;

//   @ApiProperty({
//     description: Description.DATA,
//     example: '{"USE_RRS": "true"}',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   data?: string;
// }

// export class SettingResponseDto extends SettingRequestDto {
//   @ApiProperty({
//     description: Description.PRESET_LIST,
//     example: ['0', '1'],
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   params?: string[];
// }

// export class SettingRequestSlamnav extends SettingRequestDto {
//   @ApiProperty({
//     description: Description.ID,
//     example: '1234567890',
//   })
//   @IsString()
//   id: string;

//   @ApiProperty({
//     description: Description.COMMAND,
//     example: SettingCommand.getSetting,
//     enum: SettingCommand,
//   })
//   @IsString()
//   command: string;
// }

// export class SettingResponseSlamnav extends SettingResponseDto {
//   @ApiProperty({
//     description: Description.ID,
//     example: '1234567890',
//   })
//   @IsString()
//   id: string;

//   @ApiProperty({
//     description: Description.COMMAND,
//     example: SettingCommand.getSetting,
//     enum: SettingCommand,
//   })
//   @IsString()
//   command: string;

//   @ApiProperty({
//     description: Description.RESULT,
//     example: 'success',
//   })
//   @IsString()
//   result: string;

//   @ApiProperty({
//     description: Description.MESSAGE,
//     example: '세팅 완료',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   message?: string;
// }

//API 문서용
export class SettingGetTypeResponseDto {
  @ApiProperty({
    description: Description.TYPE,
    example: 'SRV',
  })
  @IsString()
  type: string;
}
export class SettingGetSettingRequestDto {
  @ApiProperty({
    description: Description.TYPE,
    example: 'SRV',
    required: true,
  })
  @IsString()
  type: string;
}

export class SettingGetSettingResponseDto extends SettingGetSettingRequestDto {
  @ApiProperty({
    description: Description.DATA,
    example: '{"USE_RRS": "true"}',
  })
  @IsObject()
  data: JSON;
}

export class SettingSaveSettingRequestDto extends SettingGetSettingRequestDto {
  @ApiProperty({
    description: Description.KEY,
    example: 'USE_RRS',
  })
  @IsString()
  key: string;

  @ApiProperty({
    description: Description.VALUE,
    example: 'true',
  })
  @IsString()
  value: string;
}
export class SettingSaveSettingResponseDto extends SettingSaveSettingRequestDto {}

export class SettingSaveSettingAllRequestDto extends SettingGetSettingRequestDto {
  @ApiProperty({
    description: Description.DATA,
    example: '{"USE_RRS": "true"}',
  })
  @IsObject()
  data: JSON;
}
export class SettingSaveSettingAllResponseDto extends SettingSaveSettingAllRequestDto {}

export class SettingGetPresetListRequestDto extends SettingGetSettingRequestDto {}
export class SettingGetPresetListResponseDto extends SettingGetPresetListRequestDto {
  @ApiProperty({
    description: Description.PRESET_LIST,
    example: ['0', '1'],
  })
  @IsString()
  list: string[];
}

export class SettingGetPresetRequestDto extends SettingGetSettingRequestDto {
  @ApiProperty({
    description: Description.PRESET,
    example: '1',
  })
  @IsString()
  preset: string;
}
export class SettingGetPresetResponseDto extends SettingGetPresetRequestDto {
  @ApiProperty({
    description: Description.DATA,
    example: { LIMIT_V: 1.2 },
  })
  @IsObject()
  data: JSON;
}

export class SettingCreatePresetRequestDto extends SettingGetPresetRequestDto {}
export class SettingCreatePresetResponseDto extends SettingCreatePresetRequestDto {
  @ApiProperty({
    description: Description.DATA,
    example: { LIMIT_V: 1.2 },
  })
  @IsObject()
  data: JSON;
}

export class SettingDeletePresetRequestDto extends SettingGetPresetRequestDto {}
export class SettingDeletePresetResponseDto extends SettingDeletePresetRequestDto {}

export class SettingSavePresetRequestDto extends SettingGetPresetRequestDto {
  @ApiProperty({
    description: Description.DATA,
    example: { LIMIT_V: 1.2 },
  })
  @IsObject()
  data: JSON;
}
export class SettingSavePresetResponseDto extends SettingSavePresetRequestDto {}
