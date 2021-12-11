<template lang="pug">
  VDialog(
    v-model="visible"
    :max-width="options.width"
    :style="{ zIndex: 999 }"
    @click:outside="handleCancel"
    @keydown.esc="handleCancel"
  )
    VCard
      VToolbar(dark color="grey lighten-3" dense flat)
        VToolbarTitle.text-body-2.font-weight-bold.grey--text {{title}}

      VCardText(v-show="!!message" v-html="message").pa-4.black--text
      VCardActions.pt-3
        VSpacer
        Button(
          v-if="options.buttonCancelVisible"
          color="grey"
          :text="true"
          @click.native="handleCancel"
        ).body-2.font-weight-bold {{options.buttonCancelText}}
        Button(
          v-if="options.buttonConfirmVisible"
          color="primary"
          :outlined="true"
          @click.native="handleConfirm"
        ).body-2.font-weight-bold {{options.buttonConfirmText}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * Модалка подтверждения действия
 *
 * Пример использования:
 *
 * В шаблоне:
 * <Confirmation ref="confirm"></Confirmation>
 *
 * В компоненте:
 * @Ref() confirm: Confirmation
 *
 * private confirmDelete () {
 *   this.confirm.open(
 *     'Удаление сущности',
 *     'Вы уверены, что хотите удалить сущность?',
 *     {
 *       buttonConfirmText: 'Удалить',
 *     },
 *   )
 *     .then(this.handleDelete)
 *     .catch(() => (this.someAction)
 * }
 */

interface ConfirmOptions {
  buttonCancelText?: string,
  buttonCancelVisible?: boolean,
  buttonConfirmText?: string,
  buttonConfirmVisible?: boolean,
  width?: number,
}

@Component
export default class Confirmation extends Vue {
  private visible = false
  private resolve: any = null
  private reject: any = null
  private message = ''
  private title = ''
  private options: ConfirmOptions = {
    buttonCancelText: 'Отмена',
    buttonCancelVisible: true,
    buttonConfirmText: 'Да',
    buttonConfirmVisible: true,
    width: 400,
  }

  public open (title: string, message: string, options?: ConfirmOptions) {
    this.visible = true
    this.title = title
    this.message = message
    this.options = Object.assign(this.options, options)

    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  private handleConfirm () {
    this.resolve(true)
    this.visible = false
  }

  private handleCancel () {
    this.reject()
    this.visible = false
  }
}
</script>
