import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

enum Description {
  SOFTWARE = '소프트웨어 종류 (예: rrs, slamnav2)',
}

//// 1) Ping 관련 DTO ////
export class PingSendToTargetDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: '타겟 호스트',
    default: '192.168.1.1',
  })
  target: string;
}
export class PingSendToTargetResponseDto extends PingSendToTargetDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: '타겟 호스트에 5번 ping 전송 결과',
    default: '요청에 성공했습니다.',
  })
  message?: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'ping 결과 stdout',
    default:
      'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=254 time=1.87 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 1.874/1.874/1.874/0.000 ms\n',
  })
  stdout?: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'ping 결과 stderr',
    default: '',
  })
  stderr?: string;
}

export class NewVersionGitDto {
  @IsBoolean()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: '핫픽스 여부',
    default: false,
  })
  hotfix: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: '최신 버전',
    default: 'rrs-20250812125004',
  })
  new_version: string;
}

export class CurVersionDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: '현재 버전',
    default: 'rrs-20250812125004',
  })
  current: string;
}
