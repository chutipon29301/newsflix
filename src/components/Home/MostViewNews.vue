<template>
  <div class="max-w-sm">
    <div class="text-white font-semibold text-xl">Most View</div>
    <SmallNewsItem
      v-for="(news, index) in newsSources"
      :key="index"
      :title="news.title"
      :img="news.img"
      :detail="news.detail"
      class="w-full"
    >
      <div class="flex items-center">
        <font-awesome-icon class="text-black mr-1" icon="eye" />
        <div class="text-black text-xs text-gray-700 mr-4">{{news.view}}</div>
      </div>
    </SmallNewsItem>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SmallNewsItem from "@/components/Home/SmallNewsItem.vue";
@Component({
  components: {
    SmallNewsItem
  }
})
export default class MostViewNews extends Vue {
  private newsSources: any[] = [
    {
      title: "Hong Kong police officer shoots protester",
      img: "top5_1.png",
      detail:
        "A 21-year-old protester was shot with a live round by a police officer.",
      view: "252.6k"
    },
    {
      title: "Sydney under 'catastrophic' warning from dozens of bushfires ",
      img: "top5_2.png",
      detail: 'Fire officials are warning of "catastrophic fire danger"',
      view: "214.3k"
    },
    {
      title: "Spanish elections: Socialists win amid far right surge",
      img: "top5_3.png",
      detail: "Vox came third, increasing its vote share by more than double.",
      view: "122.2k"
    },
    {
      title: "General election 2019: The mystery of the Russia report",
      img: "top5_4.png",
      detail:
        "A row has broken out over the publication of an intelligence report.",
      view: "122.0k"
    },
    {
      title: "Nikki Haley says she was told to undermine Trumo",
      img: "top5_5.png",
      detail:
        "She makes the allogations in a new book about her time as US ambassador.",
      view: "100.2k"
    }
  ];
}
</script>