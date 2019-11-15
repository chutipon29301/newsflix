<template>
  <div class="h-8 w-full flex container">
    <div class="inline-block relative flex-1">
      <input
        class="appearance-none rounded-l w-full h-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white text-xs"
        type="text"
        v-model="location"
        disabled
      />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
        <font-awesome-icon icon="location-arrow" class="text-inputblack mr-2" />
        <div class="text-inputblack text-xs select-none">Your recent location</div>
      </div>
    </div>
    <button
      class="bg-searchoptionbutton hover:bg-searchoptionbuttonhover active:bg-searchoptionbuttonactive z-10 text-white px-6 rounded-r text-xs"
      @click="toggleFunction"
    >Change the location</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class BasicSearchOptions extends Vue {
  @Prop() private location!: string;
  @Prop() private toggleFunction!: () => void;
}
</script>