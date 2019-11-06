<template>
  <div class="flex w-full shadow justify-between px-4">
    <div class="flex">
      <img src="../../assets/logo.png" class="w-48" />
      <div>Search</div>
    </div>
    <div class="flex items-center">
      <div>Hello</div>
      <button><font-awesome-icon icon="bars" /></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NavBar extends Vue {}
</script>
