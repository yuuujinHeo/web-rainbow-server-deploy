import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { Expose } from 'class-transformer';

enum Description {
  DEVICE = '변경할 네트워크 디바이스를 입력하세요.',
  NAME = '변경할 네트워크의 이름을 입력하세요.',
  DHCP = '네트워크의 DHCP(동적할당) 사용여부를 입력하세요. true인 경우 입력된 address 값을 무시하고 DHCP를 켜 IP를 자동으로 할당받습니다. false인 경우 address,gateway,mask,dns를 입력하세요.',
  ADDRESS = '변경할 IP ADDRESS 를 입력하세요. IPv4버전만 적용됩니다.',
  GATEWAY = '변경할 GATEWAY를 입력하세요.',
  MASK = '변경할 서브넷마스크를 입력하세요.',
  DNS = '변경할 DNS를 입력하세요. DNS는 배열로 여러개 추가할 수 있습니다.',
}

export class SetNetworkRequestDto {
  @ApiProperty({
    description: Description.DEVICE,
    example: 'wlp3s0',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  device: string;

  @ApiProperty({
    description: Description.NAME,
    example: 'mobile_team',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: Description.DHCP,
    example: false,
    required: true,
  })
  @IsNotEmpty()
  dhcp: boolean;

  @ApiProperty({
    description: Description.ADDRESS,
    example: '10.108.1.120',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: Description.GATEWAY,
    example: '10.108.1.1',
  })
  @IsOptional()
  @IsString()
  gateway?: string;

  @ApiProperty({ description: Description.MASK, example: '24' })
  @IsOptional()
  @IsString()
  mask?: string;

  @ApiProperty({
    description: Description.DNS,
    example: ['10.108.1.1'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dns?: string[];
}

export class SetNetworkResponseDto extends SetNetworkRequestDto {}

export class NetworkResponseDto {
  @ApiProperty({ description: '네트워크 정보', example: 'wifi', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  networkType?: string;

  @ApiProperty({ description: '연결 상태', example: true, required: false })
  @IsOptional()
  @Expose()
  connected?: boolean;
}

export class ConnectWifiDto {
  @ApiProperty({
    description: '연결할 WIFI의 SSID',
    example: 'mobile_team_5G',
    required: true,
  })
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  ssid: string;

  @IsOptional()
  @ApiProperty({
    description: '연결할 WIFI의 비밀번호(필요시)',
    example: 'testPassword',
  })
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  password?: string;
}
