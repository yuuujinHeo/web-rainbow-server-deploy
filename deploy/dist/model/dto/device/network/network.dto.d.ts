export declare class SetNetworkRequestDto {
    device: string;
    name: string;
    dhcp: boolean;
    address?: string;
    gateway?: string;
    mask?: string;
    dns?: string[];
}
export declare class SetNetworkResponseDto extends SetNetworkRequestDto {
}
export declare class NetworkResponseDto {
    networkType?: string;
    connected?: boolean;
}
export declare class ConnectWifiDto {
    ssid: string;
    password?: string;
}
