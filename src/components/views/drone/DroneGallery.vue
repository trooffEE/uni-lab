<template lang="pug">
  .gallery-grid
    .gallery-grid__item-small(v-for="id in 3" :key="id")
      ImagePlaceholder(
        size="md"
      )
    .gallery-grid__item-large
      ImagePlaceholder(
        src="~@/assets/images/placeholders/drone.jpg"
      )
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

@Component({
  components: {
    ImagePlaceholder,
  },
})
export default class DroneGallery extends Vue {
  
}
</script>
<style lang="scss" scoped>
.gallery-grid {
  @include display-grid(12, 75px, 48px);

  &__item {
    &-small {
      grid-column: span 4;
    }
    &-large {
      grid-column: 1 / -1;
      height: 698px;
    }
  }
}
</style>