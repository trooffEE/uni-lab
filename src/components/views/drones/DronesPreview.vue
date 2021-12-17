<template lang="pug">
  .image-container
    .blue-box
      Heading(size="h2").local-title СРЕШЬ?
      p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis molestie augue
      RouterLink(:to="{ name: 'aboutUs' }")  
        button.styled-button Перейти
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import Heading from '@/components/_uikit/typography/Heading.vue'

@Component({
  components: {
    Heading,
  },
})
export default class DronesPreview extends Vue {
  
}
</script>
<style lang="scss" scoped>
.image-container {
  @include display-flex(row, flex-start, stretch);
  min-height: calc(74vh);
  height: 100%;
  background-image: url('~@/assets/images/backgrounds/background-1.png');
  background-size: cover;
}

.blue-box {
  padding: 13px;
  @include display-flex(column, center, flex-start);
  color: $color-font-secondary;
  background-color: rgba(0, 91, 193, 0.6);
  min-height: calc(74vh);
  width: 100%;
  max-width: 444px;
  margin-left: 400px;
}

.local-title {
  margin-bottom: 120px;
}

.description {
  margin-bottom: 40px;
}

.styled-button {
  border: 3px solid white;
  padding: 14px 40px;
  background: transparent;
}
</style>