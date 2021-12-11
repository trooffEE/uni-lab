<template lang="pug">
  component.text(:is="tag" :class="[`size-${size}`]")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Paragraph extends Vue {
  @Prop({
    default: 'div',
    validator (value: string): boolean {
      return !!value.match(/(span|p|div)/)
    },
  })
  readonly tag!: string

  @Prop({
    default: 'md',
    validator (value: string): boolean {
      return !!value.match(/(sm|md|lg)/)
    },
  })
  readonly size!: string
}
</script>

<style lang="scss" scoped>
  .text {
    font-family: $font-secondary;

    &.size-sm {
      font-size: 12px;
      line-height: 16px;
    }

    &.size-md {
      font-size: 16px;
      line-height: 24px;
    }

    &.size-lg {
      font-size: 20px;
      line-height: 32px;
    }
  }
</style>
