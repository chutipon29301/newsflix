<template>
  <div>
    <img
      src="../../assets/entry_background.jpg"
      class="absolute top-0 left-0 h-full w-full object-cover"
    />
    <vue-particles class="absolute top-0 left-0 h-full w-full" />
    <div class="flex h-screen w-full justify-center items-center">
      <div
        class="child-view w-full max-w-md bg-black text-white py-8 px-8 sm:px-12 mx-8"
      >
        <vue-page-transition>
          <router-view />
        </vue-page-transition>
      </div>
    </div>
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
