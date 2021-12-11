import Cookies from 'js-cookie'

export const authTokenName = process.env.VUE_APP_TOKEN_NAME || 'auth-token'

export function getToken () {
  return Cookies.get(authTokenName)
}

export const baseURL = process.env.VUE_APP_BACKEND_API_ENDPOINT || 'https://test.ru/api'
