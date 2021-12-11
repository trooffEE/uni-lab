<template lang="pug">
  .image-placeholder(:class="sizeClass")
    img(v-if="src" :src="src")
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

enum PlaceholerSize {
  SMALL = 'sm',
  MIDDLE = 'md',
  LARGE = 'lg',
}

@Component
export default class ImagePlaceholder extends Vue {
  @Prop({ default: null })
  readonly src!: string 

  @Prop({ default: '' })
  readonly size!: PlaceholerSize | ''

  private get isSmallPlaceholder() {
    return this.size === PlaceholerSize.SMALL
  }
  private get isMiddlePlaceholder() {
    return this.size === PlaceholerSize.MIDDLE
  }

  private get isLargePlaceholder() {
    return this.size === PlaceholerSize.LARGE
  }

  private get sizeClass() {
    if (this.isSmallPlaceholder) {
      return 'small-placeholder'
    }
    else if (this.isMiddlePlaceholder) {
      return 'middle-placeholder'
    }
    else if (this.isLargePlaceholder) {
      return 'large-placeholder'
    }
    return ''
  }
}
</script>
<style lang="scss" scoped>
.image-placeholder {
  background-color: $color-secondary;
  height: 100%;

  &.small-placeholder {
    height: 200px;
    width: 100%;
  }

  &.middle-placeholder {
    height: 281px;
    width: 100%;
  }

  &.large-placeholder {
    height: 677px;
    width: 100%;
  }

  > img {
    max-width: 100%;
  }
}
</style>