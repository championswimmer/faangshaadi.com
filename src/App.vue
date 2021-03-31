<template>
  <NavBar></NavBar>
  <Hero></Hero>
  <Features></Features>
  <About></About>
  <Footer></Footer>
</template>

<script lang="ts">
import NavBar from './sections/NavBar.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Features from './sections/Features.vue'
import Footer from './sections/Footer.vue'
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    NavBar,
    Hero,
    About,
    Features,
    Footer
  }
})
export default class App extends Vue {

}
</script>

<style>
</style>