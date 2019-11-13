<template>
  <div>
    <img src="../../assets/banner.jpg" class="h-64 w-full object-cover" />
    <div class="w-full bg-home">
      <div class="container flex justify-between py-8">
        <div class="flex-1">
          <TopNews/>
        </div>
        <div class="flex-1">
            <MostViewNews/>
        </div>
        <div class="flex-1">
          <MostRecentNews/>
        </div>
      </div>
    </div>
    <div class="w-full bg-inputhover">
      <div class="container">
        <PopularTags />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chip from "@/components/Home/Chip.vue";
import PopularTags from "@/components/Home/PopularTags.vue";
import TopNews from "@/components/Home/TopNews.vue";
import MostViewNews from "@/components/Home/MostViewNews.vue";
import MostRecentNews from "@/components/Home/MostRecentNews.vue";
@Component({
  components: {
    Chip,
    PopularTags,
    TopNews,
    MostViewNews,
    MostRecentNews
  }
})
export default class Index extends Vue {}
</script>
