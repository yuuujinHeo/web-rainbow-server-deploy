export function errorToJson(error) {
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
    return JSON.stringify(error);
  }
}
