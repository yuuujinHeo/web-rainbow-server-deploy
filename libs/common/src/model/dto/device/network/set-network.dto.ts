import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { network_description } from './description/network.description';

export class SetNetworkDto {
  @ApiProperty({
    description: network_description.DEVICE,
    example: 'wlp3s0',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  device: string;

  @ApiProperty({
    description: network_description.NAME,
    example: 'mobile_team',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: network_description.DHCP,
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  dhcp: boolean;

  @ApiProperty({
    description: network_description.ADDRESS,
    example: '10.108.1.120',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: network_description.GATEWAY,
    example: '10.108.1.1',
  })
  @IsOptional()
  @IsString()
  gateway?: string;

  @ApiProperty({ description: network_description.MASK, example: '24' })
  @IsOptional()
  @IsString()
  mask?: string;

  @ApiProperty({
    description: network_description.DNS,
    example: ['10.108.1.1'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dns?: string[];
}
