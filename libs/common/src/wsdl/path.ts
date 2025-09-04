import { join } from 'path';

//wsdl파일 경로 반환
export function getWSDLPath(category: string, filename: string) {
  return join(process.cwd(), 'libs/common/src/wsdl', category, filename);
}
