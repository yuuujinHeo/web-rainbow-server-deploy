import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { UrlUtil } from '@app/common/util';
import { FrsDescription } from '@app/common/model/dto/description';

enum Description {
  ROBOT_SERIAL = '로봇 시리얼 번호',
  ROBOT_NAME = '로봇 이름. 로봇 이름은 FRS에서 생성하여 반환합니다.',
}

export class InitRequestDto {
  @ApiProperty({
    description: Description.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;
}

export class InitResponseDto extends InitRequestDto {
  @ApiProperty({
    description: Description.ROBOT_NAME,
    example: 'TESTBOT',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotName: string;
}
