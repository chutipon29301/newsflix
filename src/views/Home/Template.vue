<template>
  <div class="w-full">
    <NavBar class="fixed h-12 z-10" />
    <div class="h-12" />
    <SearchOptions class="fixed" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/Home/NavBar.vue";
import SearchOptions from "@/components/Home/SearchOptions.vue";

@Component({
  components: {
    NavBar,
    SearchOptions
  }
})
export default class Template extends Vue {}
</script>
