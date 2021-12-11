<template lang="pug">
  .heading(:class="[`like-${size}`, variation]")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Heading extends Vue {
  @Prop({
    default: 'h1',
    validator (value: string): boolean {
      return !!value.match(/(h1|h2|h3|h4|h5)/)
    },
  })
  readonly size!: string

  @Prop({
    default: null,
    validator (value: string): boolean {
      return !!value.match(/(uppercase)/)
    },
  })
  readonly variation?: string
}
</script>

<style lang="scss" scoped>
  .heading {
    font-family: $font-primary;
    transition: $transition-default;

    &.like-h1 {
      font-weight: $weight-medium;

      @include below('t_md') {
        font-size: 64px;
        line-height: 1.5;
      }

      @include at('t_md') {
        font-size: 96px;
        line-height: 1.5;
      }
    }

    &.like-h2 {
      font-weight: $weight-medium;

      @include below('t_md') {
        font-size: 36px;
        line-height: 24px;
      }

      @include at('t_md') {
        font-size: 48px;
        line-height: 32px;
      }
    }

    &.like-h3 {
      font-size: 12px;
      font-weight: $weight-medium;
      line-height: 16px;
    }

    &.uppercase {
      text-transform: uppercase;
    }
  }
</style>
