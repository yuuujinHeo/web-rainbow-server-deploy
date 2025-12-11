import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class WorkRequestDto {
  @ApiProperty({
    description:
      '실행할 Command를 입력하세요. 현재 사용가능한 Command는 dockRequest, undockRequest, randomSeq가 있습니다.',
    example: 'dockRequest',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;
}
