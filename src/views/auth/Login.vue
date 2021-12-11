<template lang="pug">
  v-container
    div(v-if="isReady")
      LoginForm
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Component, Mixins } from 'vue-property-decorator'

import AuthModule from '@/store/modules/auth'
import NotifyMixin from '@/mixins/NotifyMixin'
import LoginForm from '@/components/LoginForm.vue'


@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Mixins(NotifyMixin) {
  private isReady = false

  private mounted () {
    AuthModule.fetchUser()
      .then(() => {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect.toString())
        } else {
          this.$router.push({ name: 'profile' })
        }
      })
      .catch(() => {
        this.isReady = true
      })
  }

  private metaInfo (): MetaInfo {
    return {
      title: 'Вход в личный кабинет',
    }
  }
}
</script>
