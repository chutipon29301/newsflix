<template>
  <div>
    <img
      src="../../assets/entry_background.jpg"
      class="absolute top-0 left-0 h-full w-full object-cover"
    />
    <vue-particles class="absolute top-0 left-0 h-full w-full" />
    <div
      class="absolute top-0 left-0 flex justify-between w-full pt-2 pl-4 pr-16"
    >
      <router-link to="/">
        <img src="../../assets/logo.png" class="z-10" />
      </router-link>
    </div>
    <div class="flex h-screen w-full justify-center items-center">
      <div
        class="z-10 w-full max-w-md bg-black text-white py-8 px-8 sm:px-12 mx-8"
      >
        <vue-page-transition>
          <router-view />
        </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>
