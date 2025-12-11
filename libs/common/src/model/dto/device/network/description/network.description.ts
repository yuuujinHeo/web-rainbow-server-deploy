export enum network_description {
  DEVICE = '변경할 네트워크 디바이스를 입력하세요.',
  NAME = '변경할 네트워크의 이름을 입력하세요.',
  DHCP = '네트워크의 DHCP(동적할당) 사용여부를 입력하세요. true인 경우 입력된 address 값을 무시하고 DHCP를 켜 IP를 자동으로 할당받습니다. false인 경우 address,gateway,mask,dns를 입력하세요.',
  ADDRESS = '변경할 IP ADDRESS 를 입력하세요. IPv4버전만 적용됩니다.',
  GATEWAY = '변경할 GATEWAY를 입력하세요.',
  MASK = '변경할 서브넷마스크를 입력하세요.',
  DNS = '변경할 DNS를 입력하세요. DNS는 배열로 여러개 추가할 수 있습니다.',
}
