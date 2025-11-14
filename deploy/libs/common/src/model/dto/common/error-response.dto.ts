import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({
    description: 'HTTP 상태 코드',
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    description: '에러 메시지',
    example: '서버에 에러가 발생했습니다.',
  })
  message: string;
}
