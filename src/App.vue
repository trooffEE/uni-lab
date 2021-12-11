<template lang="pug">
div
  Header
  .min-height
    RouterView
  Footer
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Vue, Component } from 'vue-property-decorator'

// Store
import AuthModule from '@/store/modules/auth'
import SystemModule from '@/store/modules/system'
// Components
import Header from '@/views/header/Header.vue'
import Footer from '@/views/Footer.vue'

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {
  private get loading () {
    return SystemModule.loading
  }

  private get user () {
    return AuthModule.self
  }

  private mounted() {
    AuthModule.csrfToken()
  }

  private metaInfo (): MetaInfo {
    return {
      title: 'Для сдачи фигни',
      titleTemplate: '%s - 4ки хватит',
    }
  }}
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 97px - 266px);
  height: 100%;
}
</style>
