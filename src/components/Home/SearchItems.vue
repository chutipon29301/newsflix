<template>
  <div class="h-24 flex">
    <img src="../../assets/news/top5_1.png" class="object-none pr-3 h-full" />
    <div class="flex flex-col h-full py-2 justify-between">
      <div>Esse Lorem do dolore aliquip do dolor ea officia.</div>
      <div class="text-gray-600 text-xs">Sit duis cupidatat laboris labore velit.</div>
      <div class="flex items-center text-gray-600 text-xs">
        <div class="flex items-center mr-4">
          <font-awesome-icon class="mr-1" icon="eye" />
          <div>242.6k</div>
        </div>
        <div class="flex items-center">
          <font-awesome-icon class="mr-1" icon="map-marker-alt" />
          <div>BKK, Thailand</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SearchItems extends Vue {}
</script>
