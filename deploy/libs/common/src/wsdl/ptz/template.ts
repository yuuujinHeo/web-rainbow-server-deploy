export enum PTZWSDL {
  Move = 'move',
  SetPreset = 'setpreset',
}

export const PTZWSDLTemplate: Record<string, string> = {
  move: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:ptz="http://www.onvif.org/ver20/ptz/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    __RESPONSE_TITLE__
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
  setpreset: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:wsdl="http://www.onvif.org/ver20/ptz/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <wsdl:SetPresetResponse>
      <wsdl:PresetToken>Preset_1</wsdl:PresetToken>
    </wsdl:SetPresetResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
};
