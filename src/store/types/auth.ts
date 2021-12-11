export interface ILoginForm {
  login: string,
  password: string,
}

export interface IRegisterForm {
  userName: string,
  password: string,
}

export interface IAuthUser {
  id: string,
  login: string,
  password: string,
}

export interface IAuthResponse {
  user: IAuthUser,
  token: string,
}
