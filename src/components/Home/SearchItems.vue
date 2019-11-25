<template>
  <div class="h-24 flex">
    <img :src="imgSrc" class="object-none pr-3 h-full" />
    <div class="flex flex-col h-full py-2 justify-between truncate">
      <div class="truncate">{{ item.title }}</div>
      <div class="text-gray-600 text-xs truncate">{{ item.description }}</div>
      <div class="flex items-center text-gray-600 text-xs">
        <div class="flex items-center mr-4">
          <font-awesome-icon class="mr-1" icon="eye" />
          <div>{{ item.view }}</div>
        </div>
        <div class="flex items-center truncate">
          <font-awesome-icon class="mr-1" icon="map-marker-alt" />
          <div class="truncate">{{ item.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export interface SearchNews {
  img: string;
  title: string;
  description: string;
  view: string;
  location: string;
}

@Component
export default class SearchItems extends Vue {
  @Prop() private item!: SearchNews;

  private get imgSrc() {
    return require(`../../assets/news/${this.item.img}`);
  }
}
</script>
