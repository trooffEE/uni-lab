import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'

import store from '@/store'
import api from '@/utils/services/api'
import { IDrone, IDroneExtended } from '@/store/types'

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
  // -------------------------------- Drones ---------------------------->
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

  // -------------------------------- Drone Item ---------------------------->
  drone: IDroneExtended | null = null

  @Mutation
  setDrone(payload: IDroneExtended) {
    this.drone = payload
  }

  @Action({ rawError: true })
  async fetchDrone (droneId: number) {
    const { data } = await api.get<IDroneExtended>(
      `/kvadrakopters/${droneId}`,
    )
    
    this.setDrone(data)

    return data
  }
}

const DroneModule = getModule(Drone)

export default DroneModule
