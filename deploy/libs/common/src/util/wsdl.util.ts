import { NetworkInterfaceInfo } from 'os';
import { v4 as uuidv4 } from 'uuid';

export class WsdlUtil {
  //랜덤 InstanceId 생성 8자리 숫자
  static generateInstanceId() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  }

  //Scope 쿼리 생성
  static getScopeQuery(scope: string) {
    return `<tds:Scopes>
                    <tt:ScopeItem>${scope}</tt:ScopeItem>
                </tds:Scopes>`;
  }

  //주어진 url을 이용해 활성화된 IP를 조합 후 xaddrs 리스트 반환
  static getXaddrs(url: string, interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>) {
    let xaddrs: string = '';
    WsdlUtil.getLocalIps(interfaces).map((ip) => {
      xaddrs += WsdlUtil.getXaddr(ip, url) + ' ';
    });
    return xaddrs;
  }

  // ip와 url을 합쳐 반환
  static getXaddr(ip: string, url: string) {
    if (ip.includes('::ffff:')) {
      ip = ip.split('::ffff:')[1];
    }
    return 'http://' + ip + `:3002/onvif/` + url;
  }

  // ip에 RTSP 주소를 합쳐 반환
  static getStream(ip: string, url: string) {
    if (ip.includes('::ffff:')) {
      ip = ip.split('::ffff:')[1];
    }
    return 'rtsp://' + ip + ':8554/' + url;
  }

  static getLocalIp(clientIp: string, interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>) {
    if (clientIp.includes('::ffff:')) {
      clientIp = clientIp.split('::ffff:')[1];
    }
    for (const iface of Object.values(interfaces)) {
      for (const config of iface || []) {
        if (config.family === 'IPv4' && !config.internal) {
          // 같은 네트워크 대역대에 있는 IP만 반환
          if (clientIp.startsWith(config.address.substring(0, config.address.lastIndexOf('.')))) {
            return config.address;
          }
        }
      }
    }
    return '127.0.0.1';
  }

  // os 네트워크 인터페이스 기반 활성화된 Network IP 리스트 반환
  static getLocalIps(interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): string[] {
    //os에서 기본적으로 제공하는 network interfaces 반환(address, netmask, mac 등)
    const ips: string[] = [];
    for (const name of Object.keys(interfaces)) {
      for (const net of interfaces[name]!) {
        if (net.family === 'IPv4' && !net.internal) {
          if (name.includes('docker') || name.startsWith('br-') || net.address.startsWith('172.17.') || net.address.startsWith('172.18.')) {
          } else {
            ips.push(net.address);
          }
        }
      }
    }
    return ips;
  }
}
