import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { UrlUtil } from '@app/common/util';
import { FrsDescription } from '@app/common/model/dto/description';

export class InitDto {
  @ApiProperty({
    description: FrsDescription.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  @ApiProperty({
    description: FrsDescription.ROBOT_NAME,
    example: 'TESTBOT',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotName: string;
}
