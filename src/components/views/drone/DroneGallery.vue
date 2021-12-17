<template lang="pug">
  .gallery-grid
    .gallery-grid__item-small(v-for="index in 3" :key="index")
      ImagePlaceholder(
        size="md"
        :src="droneGallery[index]"
      )
    .gallery-grid__item-large
      iframe(width='100%' height='100%' src='https://www.youtube.com/embed/MQJMC-hFGBQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='')
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

// Components
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

@Component({
  components: {
    ImagePlaceholder,
  },
})
export default class DroneGallery extends Vue {
  @Prop({ required: true })
  readonly droneGallery!: string[]

  @Prop({ required: true })
  readonly video!: string
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