<template>
  <div>
    <div class="flex w-full justify-between items-center mb-4">
      <div class="flex items-center">
        <font-awesome-icon icon="tags" class="mr-4" />
        <div class="text-xl font-semibold">Technology</div>
      </div>
      <CategorySelector />
    </div>
    <div class="flex flex-col sm:flex-row">
      <NewsItem
        v-for="(news, index) in newsSources1"
        :key="index"
        :title="news.title"
        :img="news.img"
        :detail="news.detail"
        :class="news.class"
      />
    </div>
    <div class="flex flex-col flex-wrap sm:flex-row justify-start">
      <NewsItem
        v-for="(news, index) in newsSources2"
        :key="index"
        :title="news.title"
        :img="news.img"
        :detail="news.detail"
        :class="news.class"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsItem from "@/components/Home/NewsItem.vue";
import CategorySelector from "@/components/Home/CategorySelector.vue";

@Component({
  components: {
    NewsItem,
    CategorySelector
  }
})
export default class NewsCategory extends Vue {
  private newsSources1: any[] = [
    {
      img: "tech_news_1.png",
      title: "Microsoft’s better quantum computer tech is almost ready",
      detail:
        "It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says.",
      date: "7 November 2019",
      class: "flex-1"
    },
    {
      img: "tech_news_2.png",
      title:
        "Silicon Valley’s most feared EU regulator says no to breaking up big tech",
      detail:
        "The European Competition Comission’s Margrethe Vestaer has tech CEOs quaking in their boots. But she’s a fan of holding companies together when possible.",
      date: "6 November 2019",
      class: "flex-1"
    }
  ];

  private newsSources2: any[] = [
    {
      img: "tech_news_3.png",
      title: "Elizabeth Warren offers to explain her wealth tax to Bill Gates",
      detail:
        "Gates had said he didn’t think Warren would want to meet with someone as rich as he is.",
      date: "5 November 2019",
      class: "max-w-xs"
    },
    {
      img: "tech_news_4.png",
      title:
        "YouTube gives you control of up-next queue on desktop, revamps homepage",
      detail:
        "Youtube will let you override the up-next algorithm with a queue of your own, and it revamps the look of homepage for deskopt and tablet.",
      date: "4 November 2019",
      class: "max-w-xs"
    },
    {
      img: "tech_news_5.png",
      title:
        "WiFi 6: Fast enough to download 22 Marvel movies in about 2 hours",
      detail:
        "We’ve got out first WiFi 6 speed test results - and yep, these next-gen routers are the speediest we’ve ever seen.",
      date: "4 November 2019",
      class: "max-w-xs"
    }
  ];
}
</script>
