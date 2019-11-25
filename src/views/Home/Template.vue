<template>
  <div class="w-full">
    <NavBar class="fixed h-24 md:h-12 z-10" />
    <div class="h-24 md:h-12 hidden md:block" />
    <SearchOptions class="fixed hidden md:block" />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/Home/NavBar.vue";
import SearchOptions from "@/components/Home/SearchOptions.vue";
import Footer from "@/components/Home/Footer.vue";

@Component({
  components: {
    NavBar,
    SearchOptions,
    Footer
  }
})
export default class Template extends Vue {}
</script>
