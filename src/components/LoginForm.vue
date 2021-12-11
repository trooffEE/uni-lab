<template lang='pug'>
.form
  VTextField(
    v-model='form.userName'
  )
  VTextField(
    v-model='form.password'
    type="password"
  )
  RouterLink(to="/auth/register") Зарегестриоваться
  VBtn(
    @click="handleLogin"
  ) Войти
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import AuthModule from '@/store/modules/auth'

interface IRegistrationForm {
  userName: string, 
  password: string,
}

@Component
export default class RegistrationForm extends Vue {
  private form: IRegistrationForm = {
    password: '',
    userName: '',
  }

  private handleLogin() {
    AuthModule.login(this.form)
  }
}
</script>
<style lang='scss' scoped>
.form {
  @include display-flex(column, center, center);
  background-color: '#005BC1';
  border-radius: 8px;
}
</style>