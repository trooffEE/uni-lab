<template lang="pug">
  VCheckbox(
    v-bind="$attrs"
    :class="[{ 'invalid': invalid }, { 'stack': stack }]"
    v-model="innerValue"
    @input="handleInput"
  ).field
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class Checkbox extends Vue {
  @Prop({ default: false })
  private value!: string | number | boolean

  @Prop({ default: null })
  private model!: any

  @Prop({ default: false })
  private invalid!: boolean

  private innerValue: string | number | boolean = ''

  private mounted () {
    this.innerValue = this.value
  }

  private handleInput (value: any) {
    this.innerValue = value
    this.$emit('input', this.innerValue)
  }

  @Watch('value')
  private watchValue (value: any) {
    this.innerValue = value
  }
}
</script>
