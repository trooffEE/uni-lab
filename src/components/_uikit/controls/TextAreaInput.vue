<template lang="pug">
  VTextarea(
    v-bind="$attrs"
    :label="label"
    :value="innerValue"
    :type="type"
    :error="invalid"
    :error-messages="error ? [error] : []"
    @input="handleInput"
    @keyup.enter.native="$emit('enter')"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class TextAreaInput extends Vue {
  @Prop({ default: '' })
  private value!: string

  @Prop({ default: '' })
  private label!: string

  @Prop({ default: false })
  private invalid!: boolean

  @Prop({ default: '' })
  private error!: string

  @Prop({
    default: 'text',
    validator (value: string): boolean {
      return [
        'email',
        'password',
        'tel',
        'text',
      ].includes(value)
    },
  })
  readonly type!: string

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
