<template>
  <div class="pt-4 pb-8">
    <div class="flex items-center mb-4">
      <font-awesome-icon icon="tags" class="mr-4" />
      <div class="text-xl font-semibold">Popular Tags</div>
    </div>
    <div class="flex flex-wrap">
      <Chip v-for="chip in chips" :key="chip" class="mr-4 mb-4">{{chip}}</Chip>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chip from "@/components/Home/Chip.vue";
@Component({
  components: { Chip }
})
export default class PopularTags extends Vue {
  private chips: string[] = [
    "Apple",
    "YouTube",
    "Self Driving Cars",
    "iPhone 11",
    "Raspberry Pi"
  ];
}
</script>