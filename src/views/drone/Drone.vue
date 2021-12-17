<template lang="pug">
  div
    DronesPreview
    Wrapper
      DronesList
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import Wrapper from '@/components/Wrapper.vue'
import DronesPreview from '@/components/views/drones/DronesPreview.vue'
import DronesList from '@/components/views/drones/DronesList.vue'
// Store
import DroneModule from '@/store/modules/drone'

@Component({
  components: {
    DronesList,
    DronesPreview,
    Wrapper,
  },
})
export default class Drone extends Vue {
  private isLoaded = false

  private created() {
    this.fetchDrones()
  }

  private fetchDrones() {
    DroneModule.fetchDrones()
      .finally(() => this.isLoaded = true)
  }
}
</script>