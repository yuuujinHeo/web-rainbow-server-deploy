import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';
import { Expose } from 'class-transformer';
import { UrlUtil } from '@app/common/util';
import { MapCommand } from 'apps/host/src/map/domain/map-command.domain';

export enum Description {
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

export class MappingRequestDto {
  @ApiProperty({
    description: Description.COMMAND,
    example: MapCommand.mappingSave,
    enum: [MapCommand.mappingSave, MapCommand.mappingReload, MapCommand.mappingStart, MapCommand.mappingStop],
    required: true,
  })
  @IsString()
  @Length(1, 50)
  command: string;

  @ApiProperty({
    description: Description.MAPNAME,
    example: 'Test',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  mapName?: string;
}

export class MappingResponseDto extends MappingRequestDto {}

export class MappingResponseSlamnav extends MappingResponseDto {
  @ApiProperty({
    description: Description.ID,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: Description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  result: string;

  @ApiProperty({
    description: Description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  message?: string;
}

export class MappingResponseFrs {
  @ApiProperty({
    description: 'FRS 연결 시 사용하는 로봇 시리얼 번호',
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  data: MappingResponseDto;
}
