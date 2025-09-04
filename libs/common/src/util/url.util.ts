import { v4 as uuidv4 } from 'uuid';

export class UrlUtil {
  // 랜덤 UUID 생성 (UUID v4)
  static generateUUID() {
    return uuidv4();
  }
}
