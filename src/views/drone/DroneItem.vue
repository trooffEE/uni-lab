<template lang="pug">
  Wrapper 
    Heading.grid-full.title Quadro Corpo
    DroneContent.grid-full
    DroneGallery.grid-full
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
  private droneId = 0
}
</script>

<style lang="scss" scoped>
.title {
  @include display-flex(row, center, center);
}
</style>