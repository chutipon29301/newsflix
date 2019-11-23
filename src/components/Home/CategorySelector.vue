<template>
  <div class="flex w-2/5 text-gray-700">
    <button
      v-for="category in categories"
      :key="category"
      :class="
        `flex-1 rounded ${
          selectedCategory === category
            ? 'font-bold bg-gray-400 text-black'
            : 'hover:bg-gray-200 hover:font-semibold active:bg-gray-300'
        }`
      "
      @click="selectedCategory = category"
    >
      {{ category }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CategorySelector extends Vue {
  private categories: string[] = ["Technology", "Business", "Travel"];
  private selectedCategory: string = "Technology";
}
</script>
