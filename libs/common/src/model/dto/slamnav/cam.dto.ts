import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsNotEmpty, IsString } from 'class-validator';

export class CameraResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '카메라 1 시리얼 번호',
    example: 'serial_number',
  })
  cam1: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '카메라 2 시리얼 번호',
    example: 'serial_number',
  })
  cam2: string;
}

export class CameraRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '카메라 1 시리얼 번호',
    example: 'serial_number',
  })
  cam1: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '카메라 2 시리얼 번호',
    example: 'serial_number',
  })
  cam2: string;
}

export class CameraResponseSlamnav extends CameraResponseDto {
  @ApiProperty({
    description: '요청 고유 아이디',
    example: '1234567890',
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}
