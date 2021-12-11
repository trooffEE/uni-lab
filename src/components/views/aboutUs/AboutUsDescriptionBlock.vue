<template lang="pug">
  .flex(:class="{'flex-reverse': !isImageFirst}")
    ImagePlaceholder(size="lg")
    p.text description block description blockdescription blockdescription block description blockdescription blockdescription blockdescription block
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
export default class DescriptionBlock extends Vue {
  @Prop({ default: true })
  readonly isImageFirst!: boolean
}
</script>
<style lang="scss" scoped>
.flex {
  @include display-flex(row, flex-start, center);
  > * {
    flex: 1;
  }
  &.flex-reverse {
    @include display-flex(row-reverse, flex-start, center);
  }
}

.text {
  padding-left: 40px;
}
</style>