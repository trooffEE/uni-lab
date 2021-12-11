<template lang="pug">
  .about
    h1 This is an profile page
</template>

<script lang="ts">
import { MetaInfo } from 'vue-meta'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
  private metaInfo (): MetaInfo {
    return {
      title: 'Profile',
    }
  }}
</script>
