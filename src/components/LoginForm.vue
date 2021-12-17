<template lang='pug'>
.form
  h3.center Авторизация
  VTextField(
    v-model='form.userName'
  )
  VTextField(
    v-model='form.password'
    type="password"
  )
  .button-container
    VBtn(text)
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
      .then(() => this.$router.push('/drone'))
  }
}
</script>
<style lang='scss' scoped>
.form {
  @include display-flex(column, center, center);
  background-color: '#005BC1';
  border-radius: 8px;
}

.button-container {
  @include display-flex(column, center, center);
  > button:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
