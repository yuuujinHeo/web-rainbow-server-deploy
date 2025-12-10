import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FrsUrlResponseDto {
  @ApiProperty({
    description: 'FRS URL',
    example: 'http://192.168.0.100',
    required: true,
  })
  @IsString()
  url: string;

  @ApiProperty({
    description: 'FRS API URL',
    example: 'http://192.168.0.100:3000',
    required: true,
  })
  @IsString()
  apiUrl: string;

  @ApiProperty({
    description: 'FRS Socket URL',
    example: 'http://192.168.0.100:3001/socket/robots',
    required: true,
  })
  @IsString()
  socketUrl: string;
}

export class FrsUrlRequestDto {
  @ApiProperty({
    description: 'FRS URL',
    example: 'http://192.168.0.100',
    required: true,
  })
  @IsString()
  url: string;
}
