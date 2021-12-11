<template lang="pug">
  .grid-drones.grid
    DroneItemList
    DroneItemList
    DroneItemList
    DroneItemList
    DroneItemList
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import DroneItemList from '@/components/views/drones/DroneItemList.vue'

@Component({
  components: {
    DroneItemList,
  },
})
export default class DronesList extends Vue{
  
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