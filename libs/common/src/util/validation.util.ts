export class ValidationUtil {
  static isEmpty(param: any): boolean {
    if (param === undefined || param === null) {
      return true;
    }

    switch (true) {
      case Array.isArray(param):
        return param.length === 0 || param.every((item) => this.isEmpty(item));
      case typeof param === 'object':
        return Object.keys(param).length === 0;
      case typeof param === 'string':
        return param.trim().length === 0;
      case typeof param === 'number':
        return isNaN(param);
      case typeof param === 'boolean':
        return false;
      default:
        return true;
    }
  }

  static isNotEmpty(param: any): boolean {
    return !this.isEmpty(param);
  }
}
