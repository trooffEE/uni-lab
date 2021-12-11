<template lang="pug">
  .description-grid.grid
    DescriptionBlock(
      v-for="(description, index) in 2" :key="index"
      :isImageFirst="(index+1) % 2 !== 0"
    )
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import DescriptionBlock from '@/components/views/aboutUs/AboutUsDescriptionBlock.vue'

@Component({
  components: {
    DescriptionBlock,
  },
})
export default class AboutUsDescription extends Vue {
  
}
</script>

<style lang="scss" scoped>
.description-grid {
  row-gap: 0 !important;
  margin: 60px 0;
  > * {
    grid-column: 1 / -1;
  }
}
</style>