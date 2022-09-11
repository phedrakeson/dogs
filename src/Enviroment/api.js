import pathValues from "./PathValues"

export function TOKEN_POST(body) {
  return {
    url: pathValues.API_BASE_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: pathValues.HEADERS,
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: pathValues.API_BASE_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}

export function USER_GET(token) {
  return {
    url: pathValues.API_BASE_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function USER_POST(body) {
  return {
    url: pathValues.API_BASE_URL + '/api/user',
    options: {
      method: 'POST',
      headers: pathValues.HEADERS,
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_POST(formData, token) {
  return {
    url: pathValues.API_BASE_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData
    }
  }
}