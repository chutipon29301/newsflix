<template>
  <div>
    <img src="../../assets/banner.jpg" class="h-64 w-full object-cover" />
    <div class="w-full bg-home">
      <div class="container flex justify-between text-white font-semibold text-xl py-8">
        <div class="flex-1">
          <div>TOP 5</div>
          <div>
           <SmallNewsItem />
          </div>
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
      <div class="container py-4">
        <div class="flex items-center mb-4">
          <font-awesome-icon icon="tags" class="mr-4" />
          <div class="text-xl font-semibold">Popular Tags</div>
        </div>
        <div class="flex">
          <Chip v-for="chip in chips" :key="chip" class="mr-4">{{chip}}</Chip>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SmallNewsItem from "@/components/Home/SmallNewsItem.vue";
import Chip from "@/components/Home/Chip.vue";
@Component({
  components: {
    SmallNewsItem,
    Chip
  }
})
export default class Index extends Vue {}
</script>
