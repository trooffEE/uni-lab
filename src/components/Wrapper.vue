<template lang="pug">
.wrapper
  slot
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Wrapper extends Vue {
    
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 12px 40px;
  @include display-grid(12, 30px, 30px);
}
</style>