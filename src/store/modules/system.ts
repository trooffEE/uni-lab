import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

import store from '@/store'

/**
 * Общие для всего приложения функции
 * - спиннер загрузки
 */

@Module({
  dynamic: true,
  name: 'system',
  store,
})
class System extends VuexModule {
  // ---------------------------- Loading ---------------------------- >>

  loading = false
  loadingCounter = 0

  @Mutation
  incrementLoading () {
    this.loadingCounter += 1
    this.loading = true
  }

  @Mutation
  decrementLoading () {
    if (this.loadingCounter > 0) {
      this.loadingCounter -= 1
      if (this.loadingCounter <= 0) {
        this.loading = false
      }
    }
  }

  @Action({ rawError: true })
  loadingStart () {
    this.incrementLoading()
  }

  @Action({ rawError: true })
  loadingEnd () {
    this.decrementLoading()
  }
}

const SystemModule = getModule(System)

export default SystemModule
