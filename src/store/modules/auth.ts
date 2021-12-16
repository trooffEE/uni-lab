import { AxiosResponse } from 'axios'
import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import Cookies from 'js-cookie'

import store from '@/store'
import { IAuthResponse, IAuthUser, IRegisterForm } from '@/store/types'
import api from '@/utils/services/api'
import { authTokenName } from '@/utils/services/config'

/**
 * Работа с авторизацией пользователя
 * - авторизация пользователя
 * - регистрация пользователя
 * - забыл пароль
 * - подтверждения регистрации и смены пароля
 * - получение пользователя
 */

@Module({
  dynamic: true,
  name: 'auth',
  namespaced: true,
  store,
})
class Auth extends VuexModule {
  // ---------------------------- Token ---------------------------- >>

  token = ''

  @Mutation
  setToken (payload: string) {
    this.token = payload
    if (process.env.NODE_ENV === 'development') {
      Cookies.set(authTokenName, payload)
    }
  }

  // ---------------------------- User ---------------------------- >>

  self: IAuthUser | null = null

  @Mutation
  setSelf (payload: IAuthUser) {
    this.self = Object.assign({}, payload)
  }

  @Mutation
  clearSelf () {
    this.self = null
  }

  @Action({ rawError: true })
  async fetchUser () {
    if (!this.self) {
      const { data }: AxiosResponse<IAuthUser> = await api.post(
        '/user',
      )

      this.setSelf(data)

      return data
    }

    return this.self
  }

  // ---------------------------- Authorization ---------------------------- >>

  @Action({ rawError: true })
  async csrfToken () {
    const { data }: AxiosResponse<IAuthResponse> = await api.get('/csrf')

    return data
  }

  @Action({ rawError: true })
  async login (payload: IRegisterForm) {
    const { data }: AxiosResponse<IAuthResponse> = await api.post(
      '/auth/login',
      payload,
    )

    await this.setSelf(data.user)
    await this.setToken(data.token)

    return data
  }

  @Action({ rawError: true })
  async registration (payload: IRegisterForm) {
    const { data }: AxiosResponse<IAuthUser> = await api.post(
      '/auth/registration',
      payload,
    )

    await this.setSelf(data)

    return data
  }

  @Action({ rawError: true })
  async logout () {
    await api.post(
      '/logout',
    )
  }
}

const AuthModule = getModule(Auth)

export default AuthModule
