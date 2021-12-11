<template lang="pug">
  .drone-card
    p Текст
    ImagePlaceholder
    p краткое описание
    button.nice-button
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
export default class DroneItemList extends Vue {
  
}
</script>

<style lang="scss" scoped>
.drone-card {
  height: 100%;
  @include display-flex(column, flex-start, center);
}
.nice-button {
  background-color: $color-secondary;
}
</style>