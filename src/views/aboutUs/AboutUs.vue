<template lang="pug">
  main
    AboutUsBanner
    AboutUsDescription
    AboutUsVideoSection
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import AboutUsDescription from '@/components/views/aboutUs/AbousUsDescription.vue'
import AboutUsBanner from '@/components/views/aboutUs/AboutUsBanner.vue'
import AboutUsVideoSection from '@/components/views/aboutUs/AboutUsVideoSection.vue'

@Component({
  components: {
    AboutUsBanner,
    AboutUsDescription,
    AboutUsVideoSection,
  },
})
export default class AboutUs extends Vue {
  
}
</script>