<template>
  <div class="flex bg-white">
    <img src="../../assets/news/top5_1.png" class="w-16 mr-2" />
    <div class="flex-row">
      <div class="text-black">This is small news item component</div>
      <div class="text-gray-700 text-sm">This is small news item component</div>
      <div class="flex items-center justify-between">
        <div class="text-black text-xs text-gray-700">Hello</div>
        <div class="flex items-center">
        <font-awesome-icon class="text-black mr-1" icon="map-marker-alt" />
        <div class="text-black text-xs text-gray-700">Hello</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SmallNewsItem extends Vue {
  mounted() {}
}
</script>