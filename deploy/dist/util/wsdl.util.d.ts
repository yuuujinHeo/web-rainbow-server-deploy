import { NetworkInterfaceInfo } from 'os';
export declare class WsdlUtil {
    static generateInstanceId(): string;
    static getScopeQuery(scope: string): string;
    static getXaddrs(url: string, interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): string;
    static getXaddr(ip: string, url: string): string;
    static getStream(ip: string, url: string): string;
    static getLocalIp(clientIp: string, interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): string;
    static getLocalIps(interfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): string[];
}
