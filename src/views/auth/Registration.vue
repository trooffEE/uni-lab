<template lang="pug">
  v-container
    RegisterForm
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Vue, Component } from 'vue-property-decorator'

import RegisterForm from '@/components/RegisterForm.vue'

@Component({
  components: {
    RegisterForm,
  },
})
export default class Registration extends Vue {
  private metaInfo (): MetaInfo {
    return {
      title: 'Регистрация',
    }
  }
}
</script>
