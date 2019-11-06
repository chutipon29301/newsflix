<template>
  <div class="w-full">
    <NavBar />
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
