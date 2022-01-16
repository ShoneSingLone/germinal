const responseBody = {
  message: "",
  timestamp: 0,
  result: null,
  code: 0
};
const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data;
  if (message !== void 0 && message !== null) {
    responseBody.message = message;
  }
  if (code !== void 0 && code !== 0) {
    responseBody.code = code;
    responseBody.status = code;
  }
  if (headers !== null && typeof headers === "object" && Object.keys(headers).length > 0) {
    responseBody.headers = headers;
  }
  responseBody.timestamp = new Date().getTime();
  return responseBody;
};
const getQueryParameters = (options) => {
  const url = options.url;
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};
export { builder as b, getQueryParameters as g };
