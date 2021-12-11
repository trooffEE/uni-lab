<template lang="pug">
  VSnackbar(
    v-model="visible"
    :color="type"
    :timeout="timeout"
    @input="handleVisibleChange"
  )
    span(v-html="text")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

type SnackbarType = 'success' | 'error' | 'info'
interface ISnackbarMessage {
  text: string,
  timeout: number,
  type: SnackbarType,
}

@Component
export default class Snackbar extends Vue {
  private visible = false
  private text = ''
  private timeout = 1500
  private type: SnackbarType = 'success'
  private buffer: ISnackbarMessage[] = []

  private mounted () {
    this.$bus.$on('snackbar-message', this.handleNewMessage)
  }

  private showNextMessage () {
    if (!this.visible && this.buffer.length > 0) {
      const message = this.buffer[0]

      this.text = message.text
      this.type = message.type
      this.visible = true
    }
  }

  private handleNewMessage (message: ISnackbarMessage) {
    this.buffer.push(message)
    this.showNextMessage()
  }

  private handleVisibleChange (value: boolean) {
    if (!value) {
      setTimeout(() => {
        this.buffer = this.buffer.slice(1)
        this.showNextMessage()
      }, 150)
    }
  }
}
</script>
