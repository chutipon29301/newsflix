<template>
  <div class="relative">
    <button class="text-gray-700 hover:text-gray-900" @click="toggle">
      <font-awesome-icon icon="bars" />
    </button>
    <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
    <div v-if="isOpen" class="absolute right-0 border shadow w-48 bg-white rounded-lg mt-2 pt-2">
      <div class="px-4 mb-2">
        <div class="font-thin select-none">Signed in as</div>
        <div class="font-bold">Username</div>
      </div>
      <hr />
      <div class="flex flex-col">
        <button class="px-4 h-8 hover:bg-inputhover w-full text-left">View Profile</button>
        <button class="px-4 h-8 hover:bg-inputhover w-full text-left">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Dropdown extends Vue {
  private isOpen: boolean = false;

  private toggle() {
    this.isOpen = !this.isOpen;
  }
}
</script>