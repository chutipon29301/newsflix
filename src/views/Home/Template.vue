<template>
  <div class="w-full">
    <NavBar class="fixed" />
    <div class="h-16"/>
    <div>This is template view</div>
    <SearchOptions class="fixed"/>
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
