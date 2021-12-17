<template lang="pug">
  .drone-card
    p {{ drone.name }}
    ImagePlaceholder(
      :src="drone.photoUrl[0]"
    )
    p {{ drone.description }} 
    VBtn(
      text
      @click="handleRedirect"
    ) Перейти к товару
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

// Components
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'
// Store
import { IDrone } from '@/store/types'

@Component({
  components: {
    ImagePlaceholder,
  },
})
export default class DroneItemList extends Vue {
  @Prop({ required: true })
  readonly drone!: IDrone

  private handleRedirect() {
    this.$router.push({
      name: 'drone.item',
      params: {
        id: this.drone.id.toString(),
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.drone-card {
  height: 100%;
  @include display-flex(column, flex-start, center);
}
.nice-button {
  background-color: $color-secondary;
}
</style>