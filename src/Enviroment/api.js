import pathValues from "./pathValues";

export function TOKEN_POST(body) {
  return {
    url: pathValues + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: pathValues.HEADERS,
      body: JSON.stringify(body)
    }
  }
}