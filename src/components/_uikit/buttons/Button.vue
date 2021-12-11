<template lang="pug">
  VBtn(
    v-bind="$attrs"
    :color="skin"
    @click="$emit('click')"
  )
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class Button extends Vue {
  @Prop({
    default: 'primary',
    validator (value: string): boolean {
      return !!value.match(/(primary|success|info|error)/)
    },
  })
  readonly skin!: string
}
</script>
