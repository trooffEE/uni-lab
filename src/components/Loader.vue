<template lang="pug">
  .loader(:class="{ 'is-visible': visible }")
    .loader__spinner
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * Компонент спиннера. Управляется из SystemModule.
 * Перед каждым асинхронным запросом увеличивает счетчик на 1, после ответа или ошибки уменьшает счетчик на 1
 * Пока счетчик больше 0, спиннер крутится
 *
 * Если есть запросы, для которых не нужен спиннер (например для асинхронного селекта):
 * 1) в такие запросы в params нужно подложить какой-то параметр (например, spinner: false)
 * 2) в @/utils/services/api.ts нужно будет добавить проверку на этот параметр и не увеличивать счетчик, если этот параметр есть
 */

@Component
export default class Loader extends Vue {
  @Prop({ default: false })
  private visible!: boolean
}
</script>

<style lang="scss" scoped>
@keyframes blast-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: calc(100px - 4px);
    height: calc(100px - 4px);
    opacity: 0;
  }
}

.loader {
  @include display-flex(row, center, center);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(white, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.1s ease;
  z-index: 1000;

  &.is-visible {
    pointer-events: auto;
    opacity: 1;
  }

  &__spinner {
    position: relative;
    width: 100px;
    height: 100px;

    &:before,
    &:after {
      @include pseudo;

      border: 4px solid $color-primary;
      border-radius: $radius-circle;
      animation: blast-ripple 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:before {
      animation-delay: calc(1.3s / 2);
    }
  }
}
</style>
