<template lang="pug">
  .grid-drones.grid
    DroneItemList(
      v-for="drone in drones"
      :drone="drone"
      :key="drone.id"
    )
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import DroneItemList from '@/components/views/drones/DroneItemList.vue'
import DroneModule from '@/store/modules/drone'

@Component({
  components: {
    DroneItemList,
  },
})
export default class DronesList extends Vue{
  private get drones() {
    return DroneModule.drones
  }
}
</script>

<style lang="scss" scoped>
.grid-drones {
  grid-column: 1 / -1;
  > * {
    grid-column: span 4;
  }
}
</style>