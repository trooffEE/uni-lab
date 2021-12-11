<template lang="pug">
    VSelect(
      v-bind="$attrs"
      v-model="innerValue"
      item-text="name"
      item-value="value"
      :items="options"
      :no-data-text="noDataText"
      :error="invalid"
      :error-messages="error ? [error] : []"
      @input="handleInput"
    )
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { IOption } from '@/store/types'

@Component({
  inheritAttrs: false,
})
export default class Select extends Vue {
  @Prop({ default: '' })
  private value!: any

  @Prop({ default: () => ([]) })
  private options!: IOption[]

  @Prop({ default: 'Нет данных' })
  private noDataText!: string

  @Prop({ default: false })
  private invalid!: boolean

  @Prop({ default: '' })
  private error!: string

  private innerValue = ''

  private mounted () {
    this.innerValue = this.value
  }

  private handleInput (value: string) {
    this.innerValue = value
    this.$emit('input', this.innerValue)
  }

  @Watch('value')
  private watchValue (value: string) {
    this.innerValue = value
  }
}
</script>
