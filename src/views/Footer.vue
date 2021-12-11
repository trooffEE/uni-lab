<template lang="pug">
  Wrapper.footer-container
    footer.grid-full
      .footer-row.flex-between
        p dummy-1
        p dummy-2
        p dummy-3
      .footer-row
        ul.width-50.flex-between
          li(v-for="(listItem, index) in listFooter" :key="index") {{ listItem.name }} 
      .footer-row
        .flex-between 
          p one
          p two
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import Wrapper from '@/components/Wrapper.vue'

@Component({
  components: {
    Wrapper,
  },
})
export default class Footer extends Vue {
  
  private get listFooter() {
    return [
      { name: 'О нас' },
      { name: 'Человеки' },
      { name: 'Приём' },
    ]
  }
}
</script>
<style lang="scss" scoped>
.footer-container {
  background: $color-primary;
  color: $color-font-secondary;
}

.footer-row {
  width: 100%;
  padding: 28px 0;
  &:not(:last-child) {
    border-bottom: 1px solid white;
  }
}

.width-50 {
  width: 50%;
}
</style>