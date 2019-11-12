<template>
  <div>
    <img src="../../assets/banner.jpg" class="h-64 w-full object-cover" />
    <div class="w-full bg-home">
      <div
        class="container flex flex-col sm:flex-row items-center sm:items-start justify-between py-8 px-4"
      >
        <div class="flex-1">
          <TopNews />
        </div>
        <div class="flex-1">
          <div>Most View</div>
          <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
        <div class="flex-1">
          <div>Most Recent</div>
          <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-inputhover">
      <div class="container px-4 lg:px-0">
        <PopularTags />
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container px-4 lg:px-0 py-4">
        <NewsCategory />
      </div>
    </div>
    <div class="w-full bg-inputhover">
      <div class="container bg-inputhover">
        <button class="w-full h-12 bg-inputhover hover:bg-gray-300 active:bg-gray-400 font-semibold underline">See more</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chip from "@/components/Home/Chip.vue";
import PopularTags from "@/components/Home/PopularTags.vue";
import TopNews from "@/components/Home/TopNews.vue";
import NewsCategory from "@/components/Home/NewsCategory.vue";

@Component({
  components: {
    Chip,
    PopularTags,
    TopNews,
    NewsCategory
  }
})
export default class Index extends Vue {}
</script>
