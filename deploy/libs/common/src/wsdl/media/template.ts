export enum MediaWSDL {
  Profile = 'profile',
  Profiles = 'profiles',
  SnapShotURI = 'snapshoturi',
  StreamURI = 'streamuri',
  VideoSourceConfiguration = 'videosourceconfiguration',
  VideoSources = 'videosources',
}

export const MediaWSDLTemplate: Record<string, string> = {
  profile: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:tt="http://www.onvif.org/ver10/schema"
                >
    <soap:Body>
        <trt:GetProfileResponse>
            <trt:Profile token="__NAME__">
                <tt:Name>__NAME__</tt:Name>
                <tt:VideoSourceConfiguration xsi:type="tt:VideoSourceConfiguration" token="vscfg0">
                    <tt:Name>vscfg0</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:SourceToken>vidsrc0</tt:SourceToken>
                    <tt:Bounds height="__HEIGHT__" width="__WIDTH__" y="0" x="0"></tt:Bounds>
                </tt:VideoSourceConfiguration>
                <tt:VideoEncoderConfiguration xsi:type="tt:VideoEncoderConfiguration" token="__NAME__">
                    <tt:Name>Main stream encoder</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:Encoding>H264</tt:Encoding>
                    <tt:Resolution>
                        <tt:Width>__WIDTH__</tt:Width>
                        <tt:Height>__HEIGHT__</tt:Height>
                    </tt:Resolution>
                    <tt:Quality>8</tt:Quality>
                    <tt:RateControl>
                        <tt:FrameRateLimit>5</tt:FrameRateLimit>
                        <tt:EncodingInterval>1</tt:EncodingInterval>
                        <tt:BitrateLimit>1000</tt:BitrateLimit>
                    </tt:RateControl>
                    <tt:H264>
                        <tt:GovLength>30</tt:GovLength>
                        <tt:H264Profile>High</tt:H264Profile>
                    </tt:H264>
                    <tt:SessionTimeout>PT60S</tt:SessionTimeout>
                </tt:VideoEncoderConfiguration>
                <tt:PTZConfiguration token="ptzcfg0">
                    <tt:Name>PTZ Config</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:NodeToken>ptznode0</tt:NodeToken>
                    <tt:DefaultAbsolutePantTiltPositionSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace</tt:DefaultAbsolutePantTiltPositionSpace>
                    <tt:DefaultAbsoluteZoomPositionSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace</tt:DefaultAbsoluteZoomPositionSpace>
                    <tt:DefaultRelativePanTiltTranslationSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace</tt:DefaultRelativePanTiltTranslationSpace>
                    <tt:DefaultRelativeZoomTranslationSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace</tt:DefaultRelativeZoomTranslationSpace>
                    <tt:DefaultContinuousPanTiltVelocitySpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace</tt:DefaultContinuousPanTiltVelocitySpace>
                    <tt:DefaultContinuousZoomVelocitySpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace</tt:DefaultContinuousZoomVelocitySpace>
                    <tt:DefaultPTZSpeed>
                        <tt:PanTilt space="http://www.onvif.org/ver10/tptz/PanTiltSpaces/GenericSpeedSpace" y="1" x="1"></tt:PanTilt>
                        <tt:Zoom space="http://www.onvif.org/ver10/tptz/ZoomSpaces/ZoomGenericSpeedSpace" x="1"></tt:Zoom>
                    </tt:DefaultPTZSpeed>
                    <tt:DefaultPTZTimeout>PT60S</tt:DefaultPTZTimeout>
                </tt:PTZConfiguration>
            </trt:Profile>
        </trt:GetProfileResponse>
    </soap:Body>
</soap:Envelope> `,
  profiles: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:tt="http://www.onvif.org/ver10/schema"
                >
    <soap:Body>
        <trt:GetProfilesResponse>
            <trt:Profiles token="__NAME__">
                <tt:Name>__NAME__</tt:Name>
                <tt:VideoSourceConfiguration xsi:type="tt:VideoSourceConfiguration" token="vscfg0">
                    <tt:Name>vscfg0</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:SourceToken>vidsrc0</tt:SourceToken>
                    <tt:Bounds height="__HEIGHT__" width="__WIDTH__" y="0" x="0"></tt:Bounds>
                </tt:VideoSourceConfiguration>
                <tt:VideoEncoderConfiguration xsi:type="tt:VideoEncoderConfiguration" token="cam0">
                    <tt:Name>Main stream encoder</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:Encoding>H264</tt:Encoding>
                    <tt:Resolution>
                        <tt:Width>__WIDTH__</tt:Width>
                        <tt:Height>__HEIGHT__</tt:Height>
                    </tt:Resolution>
                    <tt:Quality>8</tt:Quality>
                    <tt:RateControl>
                        <tt:FrameRateLimit>5</tt:FrameRateLimit>
                        <tt:EncodingInterval>1</tt:EncodingInterval>
                        <tt:BitrateLimit>1000</tt:BitrateLimit>
                    </tt:RateControl>
                    <tt:H264>
                        <tt:GovLength>30</tt:GovLength>
                        <tt:H264Profile>High</tt:H264Profile>
                    </tt:H264>
                    <tt:SessionTimeout>PT60S</tt:SessionTimeout>
                </tt:VideoEncoderConfiguration>
                <tt:PTZConfiguration token="ptzcfg0">
                    <tt:Name>PTZ Config</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:NodeToken>ptznode0</tt:NodeToken>
                    <tt:DefaultAbsolutePantTiltPositionSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace</tt:DefaultAbsolutePantTiltPositionSpace>
                    <tt:DefaultAbsoluteZoomPositionSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace</tt:DefaultAbsoluteZoomPositionSpace>
                    <tt:DefaultRelativePanTiltTranslationSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace</tt:DefaultRelativePanTiltTranslationSpace>
                    <tt:DefaultRelativeZoomTranslationSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace</tt:DefaultRelativeZoomTranslationSpace>
                    <tt:DefaultContinuousPanTiltVelocitySpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace</tt:DefaultContinuousPanTiltVelocitySpace>
                    <tt:DefaultContinuousZoomVelocitySpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace</tt:DefaultContinuousZoomVelocitySpace>
                    <tt:DefaultPTZSpeed>
                        <tt:PanTilt space="http://www.onvif.org/ver10/tptz/PanTiltSpaces/GenericSpeedSpace" y="1" x="1"></tt:PanTilt>
                        <tt:Zoom space="http://www.onvif.org/ver10/tptz/ZoomSpaces/ZoomGenericSpeedSpace" x="1"></tt:Zoom>
                    </tt:DefaultPTZSpeed>
                    <tt:DefaultPTZTimeout>PT60S</tt:DefaultPTZTimeout>
                </tt:PTZConfiguration>
            </trt:Profiles>
        </trt:GetProfilesResponse>
    </soap:Body>
</soap:Envelope> `,
  snapshoturi: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
               xmlns:tt="http://www.onvif.org/ver10/schema"
                   xmlns:tds="http://www.onvif.org/ver10/media/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <tds:GetSnapshotUriResponse>
      <tds:MediaUri>
        <tt:Uri>
          __SNAPSHOT_URI__
        </tt:Uri>
        <tt:Timeout>PT60S</tt:Timeout>
      </tds:MediaUri>
    </tds:GetSnapshotUriResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
  streamuri: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:tt="http://www.onvif.org/ver10/schema"
               >
    <soap:Body>
        <trt:GetStreamUriResponse>
            <trt:MediaUri>
                <tt:Uri>
                    __RTSP_URI__
                </tt:Uri>
                <tt:InvalidAfterConnect>false</tt:InvalidAfterConnect>
                <tt:InvalidAfterReboot>false</tt:InvalidAfterReboot>
                <tt:Timeout>PT60S</tt:Timeout>
            </trt:MediaUri>
        </trt:GetStreamUriResponse>
    </soap:Body>
</soap:Envelope>
`,
  videosourceconfiguration: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
                   xmlns:trt="http://www.onvif.org/ver10/media/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
  <GetVideoSourceConfigurationResponse>
  <Configuration token="vscfg0">
    <Name>Camera1</Name>
    <UseCount>1</UseCount>
    <SourceToken>__NAME__</SourceToken>
    <Bounds x="0" y="0" width="__WIDTH__" height="__HEIGHT__"/>
  </Configuration>
</GetVideoSourceConfigurationResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
  videosources: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
        <GetVideoSourcesResponse xmlns="http://www.onvif.org/ver10/media/wsdl">
            <VideoSources token="vidsrc0">
                <Resolution>
                    <Width>__WIDTH__</Width>
                    <Height>__HEIGHT__</Height>
                </Resolution>
                <FrameRate>30</FrameRate>
                <Imaging>
                    <BacklightCompensation>
                        <Mode>ON</Mode>
                        <Level>2.5</Level>
                    </BacklightCompensation>
                    <Brightness>50</Brightness>
                    <Contrast>75</Contrast>
                    <Exposure>
                        <Mode>AUTO</Mode>
                        <MinExposureTime>1</MinExposureTime>
                        <MaxExposureTime>33</MaxExposureTime>
                    </Exposure>
                </Imaging>
            </VideoSources>
        </GetVideoSourcesResponse>
    </soap:Body>
</soap:Envelope>
`,
};
