<template lang="pug">
  article.grid
    .image-container
      img(src="~@/assets/images/placeholders/drone.jpg")
    .description-container
      p {{ drone.description }} 
      .description-container__specs
        .description-container__specs-item скорость {{ droneSpecs.speed }} км/ч
        .description-container__specs-item мак.высота подъёма {{ droneSpecs.maxHight }} м
        .description-container__specs-item вес {{ droneSpecs.wight }} кг
        .description-container__specs-item время работы {{ droneSpecs.workTime }} минут
        .description-container__specs-item iq {{ droneSpecs.iq }}
      
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

// Store
import { IDroneExtended } from '@/store/types'

@Component
export default class DroneContent extends Vue {
  @Prop({ required: true })
  readonly drone!: IDroneExtended

  private get droneSpecs() {
    return this.drone.specs
  }
}
</script>

<style lang="scss" scoped>
.description-container {
  word-wrap: break-word;
  overflow: hidden;
  grid-column: 7 / -1;
  &__specs {
    @include display-grid(2, 50px, 15px);
    margin-top: 40px;
    &-item {
      @include display-flex(row, center, center);
      background-color: $color-secondary;
      font-weight: 500;
    }
  }

}

.image-container {
  grid-column: span 6;
  width: 100%;

  > img {
    max-width: 100%;
  }
}
</style>