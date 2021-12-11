<template lang="pug">
  ImagePlaceholder(size='lg').video-poster
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
export default class AboutUsVideoSection extends Vue {

}
</script>
<style lang="scss" scoped>
.video-poster {
  grid-column: 1 / -1;
}
</style>