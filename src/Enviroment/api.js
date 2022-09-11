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

export function USER_GET(token) {
  return {
    url: pathValues + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}