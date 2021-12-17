<template lang="pug">
  v-container
    LoginForm
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import NotifyMixin from '@/mixins/NotifyMixin'
import LoginForm from '@/components/LoginForm.vue'


@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Mixins(NotifyMixin) {
}
</script>
