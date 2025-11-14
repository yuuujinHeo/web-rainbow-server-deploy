"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsdlUtil = void 0;
class WsdlUtil {
    static generateInstanceId() {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }
    static getScopeQuery(scope) {
        return `<tds:Scopes>
                    <tt:ScopeItem>${scope}</tt:ScopeItem>
                </tds:Scopes>`;
    }
    static getXaddrs(url, interfaces) {
        let xaddrs = '';
        WsdlUtil.getLocalIps(interfaces).map((ip) => {
            xaddrs += WsdlUtil.getXaddr(ip, url) + ' ';
        });
        return xaddrs;
    }
    static getXaddr(ip, url) {
        if (ip.includes('::ffff:')) {
            ip = ip.split('::ffff:')[1];
        }
        return 'http://' + ip + `:3002/onvif/` + url;
    }
    static getStream(ip, url) {
        if (ip.includes('::ffff:')) {
            ip = ip.split('::ffff:')[1];
        }
        return 'rtsp://' + ip + ':8554/' + url;
    }
    static getLocalIp(clientIp, interfaces) {
        if (clientIp.includes('::ffff:')) {
            clientIp = clientIp.split('::ffff:')[1];
        }
        for (const iface of Object.values(interfaces)) {
            for (const config of iface || []) {
                if (config.family === 'IPv4' && !config.internal) {
                    if (clientIp.startsWith(config.address.substring(0, config.address.lastIndexOf('.')))) {
                        return config.address;
                    }
                }
            }
        }
        return '127.0.0.1';
    }
    static getLocalIps(interfaces) {
        const ips = [];
        for (const name of Object.keys(interfaces)) {
            for (const net of interfaces[name]) {
                if (net.family === 'IPv4' && !net.internal) {
                    if (name.includes('docker') || name.startsWith('br-') || net.address.startsWith('172.17.') || net.address.startsWith('172.18.')) {
                    }
                    else {
                        ips.push(net.address);
                    }
                }
            }
        }
        return ips;
    }
}
exports.WsdlUtil = WsdlUtil;
