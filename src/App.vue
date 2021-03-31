<template>
  <NavBar id="navbar"></NavBar>
  <Hero id="hero"></Hero>
  <Features id="features"></Features>
  <About id="about"></About>
  <Footer id="footer"></Footer>
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