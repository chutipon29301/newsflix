<template>
  <div class="max-w-sm">
    <div class="text-white font-semibold text-xl">Most Recent</div>
    <SmallNewsItem
      v-for="(news, index) in newsSources"
      :key="index"
      :title="news.title"
      :img="news.img"
      :detail="news.detail"
      class="w-full"
      >{{ news.time }}</SmallNewsItem
    >
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
export default class MostRecentNews extends Vue {
  private newsSources: any[] = [
    {
      title:
        "Disney CEO Bob Iger is about to take the biggest risk of his career",
      img: "most_recent_1.png",
      detail:
        "A 21-year-old protester was shot with a live round by a police officer.",
      time: "17:50"
    },
    {
      title: "Sydney under 'catastrophic' warning from dozens of bushfires ",
      img: "most_recent_2.png",
      detail: 'Fire officials are warning of "catastrophic fire danger"',
      time: "15.30"
    },
    {
      title: "Spanish elections: Socialists win amid far right surge",
      img: "most_recent_3.png",
      detail: "Vox came third, increasing its vote share by more than double.",
      time: "11.00"
    },
    {
      title: "General election 2019: The mystery of the Russia report",
      img: "most_recent_4.png",
      detail:
        "A row has broken out over the publication of an intelligence report.",
      time: "07.15"
    },
    {
      title: "Nikki Haley says she was told to undermine Trumo",
      img: "most_recent_5.png",
      detail:
        "She makes the allogations in a new book about her time as US ambassador.",
      time: "03.40"
    }
  ];
}
</script>
