<template>
  <div class="max-w-sm">
    <div class="text-white font-semibold text-xl">TOP 5</div>
    <SmallNewsItem
      v-for="(news, index) in newsSources"
      :key="index"
      :title="news.title"
      :img="news.img"
      :detail="news.detail"
      class="w-full"
    >{{news.date}}</SmallNewsItem>
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
export default class TopNews extends Vue {
  private newsSources: any[] = [
    {
      title: "Hong Kong police officer shoots protester",
      img: "top5_1.png",
      detail:
        "A 21-year-old protester was shot with a live round by a police officer.",
      date: "11 November 2019"
    },
    {
      title: "Sydney under 'catastrophic' warning from dozens of bushfires ",
      img: "top5_2.png",
      detail: 'Fire officials are warning of "catastrophic fire danger"',
      date: "11 November 2019"
    },
    {
      title: "Spanish elections: Socialists win amid far right surge",
      img: "top5_3.png",
      detail: "Vox came third, increasing its vote share by more than double.",
      date: "8 November 2019"
    },
    {
      title: "General election 2019: The mystery of the Russia report",
      img: "top5_4.png",
      detail:
        "A row has broken out over the publication of an intelligence report.",
      date: "5 November 2019"
    },
    {
      title: "Nikki Haley says she was told to undermine Trumo",
      img: "top5_5.png",
      detail:
        "She makes the allogations in a new book about her time as US ambassador.",
      date: "2 November 2019"
    }
  ];
}
</script>