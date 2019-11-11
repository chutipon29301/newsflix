<template>
  <div
    class="bg-red-700 hover:bg-red-800 active:bg-red-900 shadow-lg px-8 py-2 rounded-full text-white"
  >
    #<slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Chip extends Vue {}
</script>