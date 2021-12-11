<template lang='pug'>
.form
  VTextField(
    v-model='form.userName'
  )
  VTextField(
    v-model='form.password'
    type="password"
  )
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