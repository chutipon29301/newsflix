<template>
  <div class="flex h-screen w-full justify-center items-center">
    <img
      src="../../assets/entry_background.jpg"
      class="absolute top-0 left-0 h-full w-full object-cover"
    />
    <vue-particles class="absolute top-0 left-0 h-full w-full" />
    <router-view class="child-view w-full max-w-md" />
  </div>
</template>

<style lang="scss" scoped>
.child-view {
  z-index: 1000;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Template extends Vue {}
</script>
