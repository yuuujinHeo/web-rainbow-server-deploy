import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "network";
export interface Empty {
}
export interface Network {
    device?: string | undefined;
    type?: string | undefined;
    address: string;
    gateway: string;
    hwAddr?: string | undefined;
    name?: string | undefined;
    state?: string | undefined;
    mask: string;
    dns: string[];
    signalLevel?: number | undefined;
    quality?: number | undefined;
    security?: string | undefined;
    dhcp?: boolean | undefined;
}
export interface GetNetworkResponse {
    Ethernet: Network[];
    Wifi: Network | undefined;
}
export interface GetEthernetResponse {
    Ethernet: Network[];
}
export interface GetDeviceRequest {
    device: string;
}
export interface SetNetworkRequest {
    device: string;
    name: string;
    dhcp: boolean;
    address?: string | undefined;
    gateway?: string | undefined;
    mask?: string | undefined;
    dns: string[];
}
export interface SetNetworkResponse {
    device: string;
    name: string;
    dhcp: boolean;
    address?: string | undefined;
    gateway?: string | undefined;
    mask?: string | undefined;
    dns: string[];
}
export interface ConnectWifiRequest {
    ssid: string;
    password?: string | undefined;
}
export interface ConnectWifiResponse {
    ssid: string;
}
export interface WIFI {
    ssid: string;
    bssid?: string | undefined;
    mac?: string | undefined;
    channel: number;
    frequency: number;
    signalLevel: number;
    quality: number;
    security: string;
    securityFlags: string[];
    mode?: string | undefined;
    iface: string;
}
export interface WifiListResponse {
    list: WIFI[];
}
export declare const NETWORK_PACKAGE_NAME = "network";
export interface NetworkGrpcServiceClient {
    getNetwork(request: Empty, metadata?: Metadata): Observable<GetNetworkResponse>;
    getDevice(request: GetDeviceRequest, metadata?: Metadata): Observable<Network>;
    getEthernet(request: Empty, metadata?: Metadata): Observable<GetEthernetResponse>;
    getWifi(request: Empty, metadata?: Metadata): Observable<Network>;
    getBluetooth(request: Empty, metadata?: Metadata): Observable<Network>;
    setNetwork(request: SetNetworkRequest, metadata?: Metadata): Observable<SetNetworkResponse>;
    connectWifi(request: ConnectWifiRequest, metadata?: Metadata): Observable<ConnectWifiResponse>;
    getWifiList(request: Empty, metadata?: Metadata): Observable<WifiListResponse>;
    scanWifi(request: Empty, metadata?: Metadata): Observable<WifiListResponse>;
}
export interface NetworkGrpcServiceController {
    getNetwork(request: Empty, metadata?: Metadata): Promise<GetNetworkResponse> | Observable<GetNetworkResponse> | GetNetworkResponse;
    getDevice(request: GetDeviceRequest, metadata?: Metadata): Promise<Network> | Observable<Network> | Network;
    getEthernet(request: Empty, metadata?: Metadata): Promise<GetEthernetResponse> | Observable<GetEthernetResponse> | GetEthernetResponse;
    getWifi(request: Empty, metadata?: Metadata): Promise<Network> | Observable<Network> | Network;
    getBluetooth(request: Empty, metadata?: Metadata): Promise<Network> | Observable<Network> | Network;
    setNetwork(request: SetNetworkRequest, metadata?: Metadata): Promise<SetNetworkResponse> | Observable<SetNetworkResponse> | SetNetworkResponse;
    connectWifi(request: ConnectWifiRequest, metadata?: Metadata): Promise<ConnectWifiResponse> | Observable<ConnectWifiResponse> | ConnectWifiResponse;
    getWifiList(request: Empty, metadata?: Metadata): Promise<WifiListResponse> | Observable<WifiListResponse> | WifiListResponse;
    scanWifi(request: Empty, metadata?: Metadata): Promise<WifiListResponse> | Observable<WifiListResponse> | WifiListResponse;
}
export declare function NetworkGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const NETWORK_GRPC_SERVICE_NAME = "NetworkGrpcService";
