<template lang="pug">
  Wrapper(v-if="isLoaded") 
    Heading.grid-full.title {{ drone.name }}
    DroneContent(
      :drone="drone"
    ).grid-full 
    DroneGallery(
      :droneGallery="drone.photoUrl"
      :video="drone.videoUrl"
    ).grid-full
    DroneYandexMarket.grid-full
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import DroneGallery from '@/components/views/drone/DroneGallery.vue'
import DroneContent from '@/components/views/drone/DroneContent.vue'
import DroneYandexMarket from '@/components/views/drone/DroneYandexMarket.vue'
import Wrapper from '@/components/Wrapper.vue'
import Heading from '@/components/_uikit/typography/Heading.vue'
// Store
import DroneModule from '@/store/modules/drone'

@Component({
  components: {
    DroneContent,
    DroneGallery,
    DroneYandexMarket,
    Heading,
    Wrapper,
  },
})
export default class DroneItem extends Vue {
  private droneId = +this.$route.params.id
  private isLoaded = false

  private mounted() {
    this.fetchDrone()
  }

  private fetchDrone() {
    DroneModule.fetchDrone(this.droneId)
      .then(() => this.isLoaded = true)
      .catch((error) => console.log(error))
  }


  private get drone() {
    return DroneModule.drone
  }
}
</script>

<style lang="scss" scoped>
.title {
  @include display-flex(row, center, center);
}
</style>