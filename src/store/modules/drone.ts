import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'

import store from '@/store'
import api from '@/utils/services/api'
import { IDrone } from '@/store/types'

/**
 * Работа с дронами/квадракоптерами
 */

@Module({
  dynamic: true,
  name: 'drone',
  namespaced: true,
  store,
})
class Drone extends VuexModule {
  drones: IDrone[] = []

  @Mutation
  setDrones(payload: IDrone[]) {
    this.drones = payload
  }

  @Action({ rawError: true })
  async fetchDrones () {
    const { data } = await api.get<IDrone[]>(
      '/kvadrakopters',
    )
    
    this.setDrones(data)

    return data
  }
}

const DroneModule = getModule(Drone)

export default DroneModule
