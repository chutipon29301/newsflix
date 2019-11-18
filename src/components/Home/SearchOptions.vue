<template>
  <div class="w-full">
    <div class="absolute bg-searchoption opacity-75 w-full inset-0" />
    <div class="content-center p-2">
      <vue-page-transition name="fade">
        <BasicSearchOptions
          v-if="!showCustomOptions"
          :location="location"
          :toggleFunction="displayCustomOptions"
        />
        <DetailSearchOptions v-else :toggleFunction="closeCustomOptions" />
      </vue-page-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicSearchOptions from "@/components/Home/SearchOptions/BasicSearchOptions.vue";
import DetailSearchOptions from "@/components/Home/SearchOptions/DetailSearchOptions.vue";

interface Location {
  city: string;
  country: string;
  staddress: string;
  postal: string;
  region: string;
}

@Component({
  components: {
    BasicSearchOptions,
    DetailSearchOptions
  }
})
export default class SearchOptions extends Vue {
  private location: string = "Loading...";
  private showCustomOptions: boolean = false;

  async mounted() {
    // await this.getUserAddress();
  }

  private async getUserAddress() {
    try {
      const location = await new Promise<Coordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve(position.coords);
          },
          () => {
            reject();
          }
        );
      });
      const { data } = await this.axios.get<Location>(
        `https://geocode.xyz/${location.latitude},${location.longitude}?geoit=json`
      );
      const { staddress, region, city, postal, country } = data;
      this.location = `${staddress} ${region} ${city} ${postal} ${country} `;
    } catch (error) {
      this.location = "Unknown location";
    }
  }

  private closeCustomOptions() {
    this.showCustomOptions = false;
  }

  private displayCustomOptions() {
    this.showCustomOptions = true;
  }
}
</script>
