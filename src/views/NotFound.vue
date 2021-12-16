<template lang="pug">
  div Ничего не найдено
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {
  private metaInfo (): MetaInfo {
    return {
      title: '404',
    }
  }
}
</script>
