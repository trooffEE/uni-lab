<template lang="pug">
  .home
    img(alt="Vue logo" src="@/assets/images/logo.svg")
    HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Component, Vue } from 'vue-property-decorator'

import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private metaInfo (): MetaInfo {
    return {
      title: 'Welcome',
    }
  }
}
</script>
