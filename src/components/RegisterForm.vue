<template lang='pug'>
.form
  h3.center Регистрация
  VTextField(
    v-model='form.userName'
  )
  VTextField(
    v-model='form.password'
    type="password"
  )
  .button-container
    VBtn(text)
      RouterLink(to="/auth/login") Авторизация
    VBtn(
      @click="handleRegistration"
    ) Зарегистрироваться
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import AuthModule from '@/store/modules/auth'
import { IRegisterForm } from '@/store/types'

@Component
export default class RegistrationForm extends Vue {
  private form: IRegisterForm = {
    password: '',
    userName: '',
  }

  private handleRegistration() {
    AuthModule.registration(this.form)
      .then(() => this.$router.push({ name: 'auth.login' }))
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
