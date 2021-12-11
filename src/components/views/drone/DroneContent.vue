<template lang="pug">
  article.grid
    .image-container
      img(src="~@/assets/images/placeholders/drone.jpg")
    .description-container
      p lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
      .description-container__specs
        .description-container__specs-item скорость 115 км/ч
        .description-container__specs-item скорость 115 км/ч
        .description-container__specs-item скорость 115 км/ч
        .description-container__specs-item скорость 115 км/ч
        .description-container__specs-item скорость 115 км/ч
      
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class DroneContent extends Vue {
  
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