<template>
  <div>
    <div class="flex w-full justify-between items-center mb-4">
      <div class="flex items-center">
        <font-awesome-icon icon="tags" class="mr-4" />
        <div class="text-xl font-semibold">Technology</div>
      </div>
      <div>Hello World</div>
    </div>
    <div class="flex flex-col sm:flex-row">
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="flex-1"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="flex-1"
      />
    </div>
    <div class="flex flex-col flex-wrap sm:flex-row justify-start">
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
      <NewsItem
        img="tech_news_1.png"
        title="Microsoft’s better quantum computer tech is almost ready"
        detail="It’s redesigning the core element of quantum computing, the quibit. Their approach is “very close”, an executive of the company says."
        date="7 November 2019"
        class="max-w-xs"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsItem from "@/components/Home/NewsItem.vue";
@Component({
  components: {
    NewsItem
  }
})
export default class NewsCategory extends Vue {}
</script>