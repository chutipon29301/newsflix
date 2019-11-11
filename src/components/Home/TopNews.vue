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
      detail: "A 21-year-old protester was shot with a live round by a police officer.",
      date: "11 November 2019"
    },
    {
      title: "Sydney under 'catastrophic' warning from dozens of bushfires ",
      img: "top5_2.png",
      detail: "Fire officials are warning of \"catastrophic fire danger\"",
      date: "11 November 2019"
    },
    {
      title: "Hong Kong police officer shoots protester",
      img: "top5_1.png",
      detail: "A 21-year-old protester was shot with a live round by a police officer.",
      date: "11 November 2019"
    },
    {
      title: "Hong Kong police officer shoots protester",
      img: "top5_1.png",
      detail: "A 21-year-old protester was shot with a live round by a police officer.",
      date: "11 November 2019"
    },
    {
      title: "Hong Kong police officer shoots protester",
      img: "top5_1.png",
      detail: "A 21-year-old protester was shot with a live round by a police officer.",
      date: "11 November 2019"
    }
  ];
  // private dates: string[] = [
  //   "11 November 2019",
  //   "11 November 2019",
  //   "8 November 2019",
  //   "5 November 2019",
  //   "2 November 2019"
  // ];
}
</script>