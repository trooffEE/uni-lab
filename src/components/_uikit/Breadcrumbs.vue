<template lang="pug">
  .breadcrumbs
    .breadcrumbs__item(
      v-for="(link, index) in links"
      :key="index"
    )
      RouterLink(
        :to="link.path"
        @click.native="$emit('click', link)"
      ).breadcrumbs__link {{link.name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { ILink } from '@/store/types'

@Component
export default class Breadcrumbs extends Vue {
  @Prop({ required: true })
  private links!: ILink[]
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    @include stack-space(8px);

    position: relative;

    &__item {
      display: inline-block;
      position: relative;
      font-size: 12px;
      line-height: 24px;

      &:not(:first-child) {
        &:before {
          @include pseudo(inline-block, relative, '/');

          margin: 0 5px;
        }
      }
    }

    &__link {
      cursor: pointer;
      text-transform: uppercase;
      transition: $transition-default;
    }
  }
</style>
