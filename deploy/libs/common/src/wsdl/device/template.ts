export enum DeviceWSDL {
  HELLO = 'hello',
  ProbeMatches = 'probematches',
  Capabilities = 'capabilities',
  DateAndTime = 'dateandtime',
  DeviceInformation = 'deviceinformation',
  DeiscoveryMode = 'discoverymode',
  Scopes = 'scopes',
  Services = 'services',
  NetworkInterfaces = 'networkinterfaces',
  DefaultGateway = 'defaultgateway',
  DNS = 'dns',
  HostName = 'hostname',
  NetworkProtocols = 'networkprotocols',
  NTP = 'ntp',
}

export const DeviceWSDLTemplate: Record<string, string> = {
  hello: `<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
    xmlns:wsd="http://schemas.xmlsoap.org/ws/2005/04/discovery"
    xmlns:wsdp="http://schemas.xmlsoap.org/ws/2006/02/devprof"
    xmlns:tdn="http://www.onvif.org/ver10/network/wsdl"
>
    <soap:Header>
        <wsa:To>urn:schemas-xmlsoap-org:ws:2005:04:discovery</wsa:To>
        <wsa:Action>http://schemas.xmlsoap.org/ws/2005/04/discovery/Hello</wsa:Action>
        <wsa:MessageID>urn:uuid:__MESSAGE_ID__</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsd:AppSequence InstanceId="__INSTANCE_ID__" MessageNumber="__MESSAGE_NUMBER__"></wsd:AppSequence>
    </soap:Header>
    <soap:Body>
        <wsd:Hello>
            <wsa:EndpointReference>
                <wsa:Address>urn:__ADDRESS__</wsa:Address>
            </wsa:EndpointReference>
            <wsd:Types>wsdp:Device tdn:NetworkVideoTransmitter</wsd:Types>
            <wsd:Scopes>onvif://www.onvif.org/name onvif://www.onvif.org/Profile/Streaming</wsd:Scopes>
            <wsd:XAddrs>__XADDRS__</wsd:XAddrs>
            <wsd:MetadataVersion>1</wsd:MetadataVersion>
        </wsd:Hello>
    </soap:Body>
</soap:Envelope>`,
  probematches: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
    xmlns:d="http://schemas.xmlsoap.org/ws/2005/04/discovery"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
    xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
    xmlns:dn="http://www.onvif.org/ver10/network/wsdl">
    <soap:Header>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsa:Action>http://schemas.xmlsoap.org/ws/2005/04/discovery/ProbeMatches</wsa:Action>
        <wsa:MessageID>urn:uuid:__MESSAGE_ID__</wsa:MessageID>
        <wsa:RelatesTo>__RELATES_TO__</wsa:RelatesTo>
        <d:AppSequence InstanceId="__INSTANCE_ID__" MessageNumber="__MESSAGE_NUMBER__"></d:AppSequence>
    </soap:Header>
    <soap:Body>
        <d:ProbeMatches>
            <d:ProbeMatch>
                <wsa:EndpointReference>
                    <wsa:Address>urn:__ADDRESS__</wsa:Address>
                </wsa:EndpointReference>
                <d:Types>
                    tds:Device dn:NetworkVideoTransmitter
                </d:Types>
                <d:XAddrs>
                    __DEVICE_XADDRS__
                </d:XAddrs>
                <d:Scopes>onvif://www.onvif.org/type/NetworkVideoTransmitter</d:Scopes>
                <d:MetadataVersion>1</d:MetadataVersion>
            </d:ProbeMatch>
        </d:ProbeMatches>
    </soap:Body>
</soap:Envelope>`,
  capabilities: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soap:Body>
        <tds:GetCapabilitiesResponse>
            <tds:Capabilities xsi:type="tt:Capabilities">
                <tt:Analytics xsi:type="tt:AnalyticsCapabilities">
                </tt:Analytics>
                <tt:Device>
                    <tt:XAddr>__DEVICE_SERVICE__</tt:XAddr>
                </tt:Device>
                <tt:Media xsi:type="tt:MediaCapabilities">
                    <tt:XAddr>__MEDIA_SERVICE__</tt:XAddr>
                    <tt:StreamingCapabilities xsi:type="tt:RealTimeStreamingCapabilities">
                        <tt:RTPMulticast>false</tt:RTPMulticast>
                        <tt:RTP_TCP>true</tt:RTP_TCP>
                        <tt:RTP_RTSP_TCP>true</tt:RTP_RTSP_TCP>
                    </tt:StreamingCapabilities>
                </tt:Media>
                <tt:Event xsi:type="tt:EventCapabilities">
                    <tt:XAddr>__EVENTS_SERVICE__</tt:XAddr>
                </tt:Event>
                <tt:PTZ>
                    <tt:XAddr>__PTZ_SERVICE__</tt:XAddr>
                </tt:PTZ>
                <tt:DeviceIO>
                    <tt:XAddr>__DEVICE_IO_SERVICE__</tt:XAddr>
                </tt:DeviceIO>
            </tds:Capabilities>
        </tds:GetCapabilitiesResponse>
    </soap:Body>
</soap:Envelope>`,
  dateandtime: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
>
    <s:Body>
        <tds:GetSystemDateAndTimeResponse>
            <tds:SystemDateAndTime>
                <tt:UTCDateTime>
                    <tt:Date>
                        <tt:Year>__YEAR_UTC__</tt:Year>
                        <tt:Month>__MONTH_UTC__</tt:Month>
                        <tt:Day>__DAY_UTC__</tt:Day>
                    </tt:Date>
                    <tt:Time>
                        <tt:Hour>__HOUR_UTC__</tt:Hour>
                        <tt:Minute>__MINUTE_UTC__</tt:Minute>
                        <tt:Second>__SECOND_UTC__</tt:Second>
                    </tt:Time>
                </tt:UTCDateTime>
                <tt:LocalDateTime>
                    <tt:Date>
                        <tt:Year>__YEAR__</tt:Year>
                        <tt:Month>__MONTH__</tt:Month>
                        <tt:Day>__DAY__</tt:Day>
                    </tt:Date>
                    <tt:Time>
                        <tt:Hour>__HOUR__</tt:Hour>
                        <tt:Minute>__MINUTE__</tt:Minute>
                        <tt:Second>__SECOND__</tt:Second>
                    </tt:Time>
                </tt:LocalDateTime>
                <tt:TimeZone>
                    <tt:TZ>__TIMEZONE__</tt:TZ>
                </tt:TimeZone>
            </tds:SystemDateAndTime>
        </tds:GetSystemDateAndTimeResponse>
    </s:Body>
</s:Envelope>`,
  deviceinformation: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
    <s:Header/>
    <s:Body>
        <GetDeviceInformationResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
            <Manufacturer>__MANUFACTURER__</Manufacturer>
            <Model>__MODEL__</Model>
            <FirmwareVersion>__FIRMWARE__VERSION__</FirmwareVersion>
            <SerialNumber>__SERIAL_NUMBER__</SerialNumber>
            <HardwareId>__HARDWARE_ID__</HardwareId>
        </GetDeviceInformationResponse>
    </s:Body>
</s:Envelope>`,
  discoverymode: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"  
               xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
    <soap:Body>
        <tds:GetDiscoveryModeResponse>
            <tds:DiscoveryMode>Multicast</tds:DiscoveryMode>
        </tds:GetDiscoveryModeResponse>
    </soap:Body>
</soap:Envelope>`,
  scopes: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <soap:Body>
    <tds:GetScopesResponse>
      __SCOPES__
    </tds:GetScopesResponse>
  </soap:Body>
</soap:Envelope>`,
  services: `<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"
xmlns:enc="http://www.w3.org/2003/05/soap-encoding"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xop="http://www.w3.org/2004/08/xop/include"
xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
xmlns:tt="http://www.onvif.org/ver10/schema">
    <env:Header>
    </env:Header>
    <env:Body>
        <tds:GetServicesResponse>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver10/device/wsdl</tds:Namespace>
                <tds:XAddr>
                    __DEVICE_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tds:Capabilities>
                        <tds:Network IPFilter="false" ZeroConfiguration="true"
                        IPVersion6="false" DynDNS="false" Dot11Configuration="false"
                        HostnameFromDHCP="false" NTP="0" />
                        <tds:Security TLS1.0="false" TLS1.1="false" TLS1.2="false"
                        OnboardKeyGeneration="false" AccessPolicyConfig="false" DefaultAccessPolicy="false"
                        Dot1X="false" RemoteUserHandling="false" X.509Token="false" SAMLToken="false"
                        KerberosToken="false" UsernameToken="false" HttpDigest="false" RELToken="false" />
                        <tds:System DiscoveryResolve="true" DiscoveryBye="true"
                        RemoteDiscovery="false" SystemBackup="false" SystemLogging="false"
                        FirmwareUpgrade="true" HttpFirmwareUpgrade="false" HttpSystemBackup="false"
                        HttpSystemLogging="false" HttpSupportInformation="false" />
                        <tds:Misc AuxiliaryCommands="" />
                    </tds:Capabilities>
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
            <tds:Media>
                <tds:Namespace>http://www.onvif.org/ver10/media/wsdl</tds:Namespace>
                <tds:XAddr>
                    __MEDIA_XADDRS__
                </tds:XAddr>
                <!-- <tds:Capabilities>
                    <trt:Capabilities xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
                    SnapshotUri="true" Rotation="false">
                    <trt:ProfileCapabilities MaximumNumberOfProfiles="10" />
                    <trt:StreamingCapabilities RTPMulticast="true" RTP_TCP="false"
                    RTP_RTSP_TCP="true" NonAggregateControl="true" />
                    </trt:Capabilities>
                </tds:Capabilities> -->
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Media>
            <tds:PTZ>
                <tds:Namespace>http://www.onvif.org/ver20/ptz/wsdl</tds:Namespace>
                <tds:XAddr>
                    __PTZ_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tptz:Capabilities xmlns:tptz="http://www.onvif.org/ver20/ptz/wsdl"
                    EFlip="false" Reverse="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:PTZ>
            <tds:Event>
                <tds:Namespace>http://www.onvif.org/ver10/events/wsdl</tds:Namespace>
                <tds:XAddr>
                    __EVENT_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tev:Capabilities xmlns:tev="http://www.onvif.org/ver10/events/wsdl"
                    WSSubscriptionPolicySupport="false" WSPullPointSupport="false"
                    WSPausableSubscription="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Event>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver20/imaging/wsdl</tds:Namespace>
                <tds:XAddr>
                    __IMAGING_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <timg:Capabilities xmlns:timg="http://www.onvif.org/ver20/imaging/wsdl"
                    ImageStabilization="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver10/deviceIO/wsdl</tds:Namespace>
                <tds:XAddr>
                    __DEVICEIO_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tmd:Capabilities xmlns:tmd="http://www.onvif.org/ver10/deviceIO/wsdl"
                    VideoSources="1" VideoOutputs="0" AudioSources="1" AudioOutputs="1" RelayOutputs="0"
                    SerialPorts="0" DigitalInputs="0" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
        </tds:GetServicesResponse>
    </env:Body>
</env:Envelope>`,
};

export const NetworkWSDLTemplate: Record<string, string> = {
  defaultgateway: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <s:Header/>
  <s:Body>
    <tds:GetNetworkDefaultGatewayResponse >
      <tds:NetworkGateway>
        <tt:IPv4Address>__GATEWAY__</tt:IPv4Address>
      </tds:NetworkGateway>
    </tds:GetNetworkDefaultGatewayResponse>
  </s:Body>
</s:Envelope>`,
  dns: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
  <s:Header/>
  <s:Body>
    <GetDNSResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
      <DNS>
        <FromDHCP>false</FromDHCP>
        <DNSManual>
          __DNS__
        </DNSManual>
      </DNS>
    </GetDNSResponse>
  </s:Body>
</s:Envelope>`,
  hostname: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
    <s:Body>
        <GetHostnameResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
            <HostnameInformation>
                <FromDHCP>__DHCP__</FromDHCP>
                <Name>__NAME__</Name>
            </HostnameInformation>
        </GetHostnameResponse>
    </s:Body>
</s:Envelope>
`,
  networkinterfaces: `<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"  
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <soap:Body>
    <tds:GetNetworkInterfacesResponse>
      <tds:NetworkInterfaces>
        <tt:Enabled>true</tt:Enabled>
        <tt:Info>
            <tt:Name>__NAME__</tt:Name>
            <tt:HwAddress>__HW_ADDRESS__</tt:HwAddress>
            <tt:MTU>1500</tt:MTU>
        </tt:Info>
        <tt:IPv4>
            <tt:Enabled>true</tt:Enabled>
            <tt:Config>
                <tt:Manual>
                    <tt:Address>__IPV4__</tt:Address>
                    <tt:PrefixLength>__IPV4_SUBNET__</tt:PrefixLength>
                </tt:Manual>
                <tt:FromDHCP>
                    <tt:Address>__IPV4_DHCP__</tt:Address>
                    <tt:PrefixLength>__IPV4_SUBNET__</tt:PrefixLength>
                </tt:FromDHCP>
                <tt:DHCP>__IS_DHCP__</tt:DHCP>
            </tt:Config>
        </tt:IPv4>
    </tds:NetworkInterfaces>
    </tds:GetNetworkInterfacesResponse>
  </soap:Body>
</soap:Envelope>
`,
  networkprotocols: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
  <s:Header/>
  <s:Body>
    <tds:GetNetworkProtocolsResponse xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
      <tds:NetworkProtocols>
        <tds:NetworkProtocol>
          <tt:Protocol>TCP</tt:Protocol>
          <tt:Port>3005</tt:Port>
        </tds:NetworkProtocol>
    </tds:GetNetworkProtocolsResponse>
  </s:Body>
</s:Envelope>
`,
  ntp: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <s:Header/>
  <s:Body>
    <tds:GetNTPResponse >
      <tds:NTP>
        <tt:Enabled>false</tt:Enabled>
        <tt:NetworkTimeProtocol>
          <tt:Server>
            <tt:Address>time.example.com</tt:Address>
            <tt:Port>123</tt:Port>
          </tt:Server>
          <tt:UpdateInterval>3600</tt:UpdateInterval>
        </tt:NetworkTimeProtocol>
      </tds:NTP>
    </tds:GetNTPResponse>
  </s:Body>
</s:Envelope>
`,
};
