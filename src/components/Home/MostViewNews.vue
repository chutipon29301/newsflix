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
        <div class="text-black text-xs text-gray-700 mr-4">{{ news.view }}</div>
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
      title: "Liverpool takes control of title race",
      img: "most_view_1.png",
      detail:
        "Victory over reigning champions Manchester City opened up the lead.",
      view: "252.6k"
    },
    {
      title: "How the CIA built the worlds fastest plane",
      img: "most_view_2.png",
      detail: "The Lockheed SR-71, designed in secrecy in the late 1950s.",
      view: "214.3k"
    },
    {
      title: "Best architecture constructions of 2019 revealed",
      img: "most_view_3.png",
      detail:
        "The shortlist, announced this week, showcases the best of 2,000 entries ",
      view: "122.2k"
    },
    {
      title: "ISIS target vulnerable domsteic workers",
      img: "most_view_4.png",
      detail:
        "Promoted ISIS online, donated money to militants overseas, and much more.",
      view: "122.0k"
    },
    {
      title: "5 killed, 300 injured as earthquake hits northwestern Iran",
      img: "most_view_5.png",
      detail:
        "At least five people killed and 330 injured after a 5.9-mag. earthquake.",
      view: "100.2k"
    }
  ];
}
</script>
