<template lang="pug">
  Wrapper.header
    RouterLink(to="/drone").image
      img(src="~@/assets/images/logo.svg")
    .link-container(v-if="isAutheicated")
      RouterLink(:to="routerLink.to" v-for="routerLink in routerLinks" :key="routerLink.to") {{ routerLink.name }}
</template>
<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Wrapper from '@/components/Wrapper.vue'
import AuthModule from '@/store/modules/auth'
import DroneModule from '@/store/modules/drone'

@Component({
  components: {
    Wrapper,
  },
})
export default class Header extends Vue {

  // ToDo: переписать на getter
  private isAdmin = false

  private get isAutheicated() {
    return AuthModule.self
  }

  private get routerLinks() {
    const localLinks = [
      {
        name: 'Главная',
        to: '/drone',
      },
      {
        name: 'О нас',
        to: '/about-us',
      },
      {
        name: 'Случайный дрон',
        to: `/drone/${this.randomDroneId}`,
      },
    ]

    if (this.isAdmin) localLinks.push({ name: 'Админ Панель', to: '/admin-panel' })

    return localLinks
  }

  private get randomDroneId() {
    if (DroneModule.drones.length) {
      return DroneModule.drones[Math.floor(Math.random() * DroneModule.drones.length)].id
    }
    return 1 // fallback
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #005BC1;
  .image, .link-container {
    grid-column: span 6;
    color: $color-font-secondary;
  }

  .link-container {
    transform: translateX(-100px);
    @include display-flex(row, flex-start, center);
    > a {
      font-weight: $weight-emphis;
      @include inline-space(28px)
    }
    a:hover,
    a:focus {
      animation: swing infinite ease-in-out;
    }

  }

  @keyframes swing {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
