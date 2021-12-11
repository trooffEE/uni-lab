import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NotifyMixin extends Vue {
  protected notifySuccess (message: string) {
    this.$bus.$emit('snackbar-message', {
      text: message,
      timeout: 1500,
      type: 'success',
    })
  }

  protected notifyInfo (message: string) {
    this.$bus.$emit('snackbar-message', {
      text: message,
      timeout: 1500,
      type: 'info',
    })
  }

  protected notifyError (error: any) {
    let message = 'Что-то пошло не так. Повторите попытку позднее или перезагрузите страницу'

    if (error.response && error.response.data) {
      message = error.response.data.message
    } else if (typeof error === 'string') {
      message = error
    }

    this.$bus.$emit('snackbar-message', {
      text: message,
      timeout: 1500,
      type: 'error',
    })
  }
}
