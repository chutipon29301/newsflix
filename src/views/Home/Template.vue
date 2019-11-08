<template>
  <div class="w-full">
    <NavBar class="fixed" />
    <div class="h-16"/>
    <div>This is template view</div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/Home/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class Template extends Vue {}
</script>
