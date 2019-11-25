<template>
  <div class="flex bg-white h-24">
    <img :src="imgSrc" class="w-24 mr-2 object-cover" />
    <div class="flex-row flex-1 flex flex-col justify-between py-1 pr-2">
      <div class="mt-1 text-black text-xs leading-none font-semibold">{{ title }}</div>
      <div class="text-gray-800 text-xs font-light leading-none">
        {{ detail }}
      </div>
      <div class="flex items-center justify-between">
        <div class="text-black text-xs font-thin text-gray-700">
          <slot />
        </div>
        <div class="flex items-center">
          <font-awesome-icon class="text-black mr-1" icon="map-marker-alt" />
          <div class="text-black text-xs font-thin text-gray-700 mr-4">
            BKK, Thailand
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SmallNewsItem extends Vue {
  @Prop() private title!: string;
  @Prop() private img!: string;
  @Prop() private detail!: string;

  private get imgSrc() {
    return require(`../../assets/news/${this.img}`);
  }
}
</script>
