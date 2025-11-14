import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { client_description } from './description';

export class SubscribeDto {
  @ApiProperty({
    description: client_description.TOPIC,
    example: 'status',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  topic: string;
}
