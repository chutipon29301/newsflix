<template>
  <button
    class="hover:bg-gray-300 active:bg-gray-400 p-4 flex flex-col items-start rounded-lg"
  >
    <img :src="imgSrc" class="mb-4 object-cover" />
    <div class="font-bold leading-tight mb-2 text-left">{{ title }}</div>
    <div class="leading-tight text-sm mb-3 text-left">{{ detail }}</div>
    <div class="text-sm">{{ date }}</div>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class NewsItem extends Vue {
  @Prop() img!: string;
  @Prop() title!: string;
  @Prop() detail!: string;
  @Prop() date!: string;

  private get imgSrc() {
    return require(`../../assets/news/${this.img}`);
  }
}
</script>
