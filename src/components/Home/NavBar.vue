<template>
  <div class="flex w-full shadow justify-between md:pr-4 bg-white">
    <div class="flex items-center flex-1 flex-col md:flex-row">
      <img src="../../assets/logo.png" class="w-48 select-none" />
      <div class="inline-block relative w-64 flex-1 md:mr-48">
        <vAutocomplete
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          :items="items"
          :getLabel="getLabel"
          @update-items="updateItems"
          @item-clicked="itemClicked"
          v-model="item"
          :component-item="template"
          :min-len="1"
          :wait="10"
          placeholder="Search"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <font-awesome-icon
            icon="search"
            class="absolute right-0 text-inputblack mr-4"
          />
        </div>
      </div>
    </div>
    <div class="hidden md:flex items-center mr-2 ml-4">
      <Dropdown />
    </div>
  </div>
</template>

<style lang="scss">
.v-autocomplete {
  .v-autocomplete-input-group {
    .v-autocomplete-input {
      width: 100%;
      padding: 0 1rem 0;
    }
  }
  .v-autocomplete-list {
    width: 100%;
    background-color: #fff;
    padding: 0.5rem;
    .v-autocomplete-list-item {
      background-color: #fff;
      margin: 0.5rem 0;
      &.v-autocomplete-item-active {
        background-color: #fff;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vAutocomplete from "v-autocomplete";
import searchItems, { SearchNews } from "@/components/Home/SearchItems.vue";
import Dropdown from "@/components/Home/Dropdown.vue";

@Component({
  components: {
    vAutocomplete,
    Dropdown
  }
})
export default class NavBar extends Vue {
  private template = searchItems;
  private item: SearchNews | null = null;
  private searchText: string = "";
  private initialItems: SearchNews[] = [
    {
      img: "top5_1.png",
      title: "Ex tempor commodo eiusmod dolore minim exercitation pariatur ut.",
      description: "Velit sunt fugiat laborum eiusmod.",
      location: "Aliquip sit consequat in nostrud.",
      view: "200k"
    },
    {
      img: "top5_2.png",
      title:
        "Nostrud est mollit pariatur cillum incididunt veniam occaecat tempor ea ex.",
      description:
        "Cupidatat dolor incididunt voluptate aute ipsum fugiat ipsum sint tempor.",
      location: "Proident esse officia consectetur Lorem.",
      view: "200k"
    }
  ];

  private get items(): SearchNews[] {
    return this.initialItems.filter(o => {
      return (
        o.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        o.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        o.location.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }

  private getLabel(): string {
    return "";
  }

  private updateItems(searchText: string) {
    this.searchText = searchText;
  }

  private itemClicked() {
    this.$router.push("/#");
  }
}
</script>
