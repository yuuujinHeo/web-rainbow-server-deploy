import { SystemStat } from '../model/dto/device/cobot/cobot.system-stat.dto';

export class ParseUtil {
  static errorToJson(error) {
    try {
      if (error instanceof Error) {
        const errorJson = {
          name: error.name,
          message: JSON.stringify(error.message),
          // stack: error.stack
        };

        // RpcCodeException의 경우 details와 code 추가
        if (error['error'] && error['error'].details) {
          errorJson['details'] = error['error'].details;
          errorJson['code'] = error['error'].code;
        }

        return JSON.stringify(errorJson);
      } else {
        const json = JSON.parse(error);
        return JSON.stringify(json);
      }
    } catch (err) {
      return JSON.stringify(err);
    }
  }

  static stringToCamelCase(str: string): string {
    return str.toLowerCase().replace(/([-_][a-z])/gi, (group) => {
      return group.toUpperCase().replace('-', '').replace('_', '');
    });
  }

  static chunkArray(arr: number[], size: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  static stringifyAllValues(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        // 객체일 경우 재귀적으로 순회
        this.stringifyAllValues(obj[key]);
      } else {
        // 문자열로 변환하여 할당
        obj[key] = String(obj[key]);
      }
    }
    return obj;
  }
}
