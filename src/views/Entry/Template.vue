<template>
  <div>
    <img
      src="../../assets/entry_background.jpg"
      class="fixed select-none top-0 left-0 h-full w-full object-cover"
    />
    <vue-particles class="fixed select-none top-0 left-0 h-full w-full" />
    <div class="flex flex-col h-screen w-full items-center sm:items-start">
      <router-link to="/" class="z-10 mt-4 mb-8 sm:mb-0">
        <img src="../../assets/logo.png" class="z-10 select-none" />
      </router-link>
      <div
        class="flex h-screen w-full justify-start sm:justify-center items-start sm:items-center"
      >
        <div
          class="z-10 w-full max-w-md bg-black text-white py-8 px-8 sm:px-12 mx-4"
        >
          <vue-page-transition>
            <router-view />
          </vue-page-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>
