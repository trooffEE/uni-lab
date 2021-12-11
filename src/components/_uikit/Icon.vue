<template lang="pug">
  component.icon(:is="tag" :class="`icon_size-${size}`" v-html="svg")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

const iconsDir = require.context('@/assets/images/icons/', true, /^\.\/.*\.svg$/)

@Component
export default class Icon extends Vue {
  @Prop({ required: true })
  readonly name!: string

  @Prop({ default: '#ff0000' })
  readonly fill!: string

  @Prop({
    default: 'span',
    validator (value: string): boolean {
      return !!value.match(/(span|a|router-link|div)/)
    },
  })
  readonly tag!: string

  @Prop({
    default: 'lg',
    validator (value: string): boolean {
      return !!value.match(/(sm|md|lg)/)
    },
  })
  readonly size?: string

  private get svg () {
    return iconsDir(`./${this.name}.svg`).replace(/^<svg /, `<svg fill="${this.fill}" `)
  }
}
</script>

<style lang="scss">
.icon {
  display: inline-block;

  svg {
    transition: $duration-default ease;
  }

  &_size-lg {
    width: 48px;
    height: 48px;

    svg {
      width: 48px;
      height: 48px;
    }
  }

  &_size-md {
    width: 24px;
    height: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &_size-sm {
    width: 16px;
    height: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
