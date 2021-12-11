import '@/utils/services/hooks'

import Vue from 'vue'

import '@/assets/stylesheets/base.scss'
import router from '@/router'
import store from '@/store'
import vuetify from '@/utils/plugins/vuetify'
import '@/utils/plugins/meta'

import App from './App.vue'

Vue.config.productionTip = false

/**
 * Шина событий сквозь все приложение
 * Использование: this.$bus.$on('SOME_MESSAGE', this.someMethod)
 */
Object.defineProperty(Vue.prototype,'$bus', {
  get: function () {
    return this.$root.bus
  },
})

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
}).$mount('#app')
