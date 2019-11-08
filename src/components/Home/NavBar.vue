<template>
  <div class="flex w-full shadow justify-between pr-4">
    <div class="flex items-center flex-1">
      <img src="../../assets/logo.png" class="w-48" />
      <div class="inline-block relative w-64 flex-1 mr-48">
        <vAutocomplete
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          :items="items"
          v-model="item"
          :component-item="template"
          placeholder="Search"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <font-awesome-icon icon="search" class="absolute right-0 text-inputblack mr-4" />
        </div>
      </div>
    </div>
    <div class="flex items-center mr-2 ml-4">
      <Dropdown />
    </div>
  </div>
</template>

<style lang="scss">
.v-autocomplete {
  .v-autocomplete-input-group {
    .v-autocomplete-input {
      width: 100%;
      padding: 0 1rem 0 1rem;
    }
  }
  .v-autocomplete-list {
    width: 100%;
    border-color: #cbd5e0;
    .v-autocomplete-list-item {
      background-color: #ffffff;
      &.v-autocomplete-item-active {
        background-color: #cbd5e0;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vAutocomplete from "v-autocomplete";
import searchItems from "@/components/Home/SearchItems.vue";
import Dropdown from "@/components/Home/Dropdown.vue";

@Component({
  components: {
    vAutocomplete,
    Dropdown
  }
})
export default class NavBar extends Vue {
  private template = searchItems;
  private item: string = "";
  private items: string[] = ["a", "b"];
}
</script>
