<template>
  <div class="w-full">
    <div class="absolute bg-searchoption opacity-75 w-full inset-0" />
    <div
      v-if="!showCustomOptions"
      class="container py-2 h-12 flex justify-center"
    >
      <div class="inline-block relative flex-1">
        <input
          class="appearance-none rounded-l w-full h-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white text-xs"
          type="text"
          v-model="location"
          disabled
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black"
        >
          <font-awesome-icon
            icon="location-arrow"
            class="text-inputblack mr-2"
          />
          <div class="text-inputblack text-xs select-none">
            Your recent location
          </div>
        </div>
      </div>
      <button
        class="bg-searchoptionbutton hover:bg-searchoptionbuttonhover active:bg-searchoptionbuttonactive z-10 text-white px-6 rounded-r text-xs"
        @click="displayCustomOptions"
      >
        Change the location
      </button>
    </div>
    <div v-if="showCustomOptions" class="container py-2 h-32 flex">
      <div class="flex flex-col flex-1">
        <div class="flex mb-2 pr-2">
          <button
            class="z-10 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-l inline-flex items-center"
          >
            <span class="mr-4">Select on map</span>
            <font-awesome-icon icon="map-marked-alt" />
          </button>
          <input
            class="z-10 appearance-none rounded-r flex-1 py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white text-xs"
            type="text"
            disabled
          />
        </div>
        <div class="flex">
          <div class="inline-block relative w-64">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        class="z-10 flex flex-col items-center justify-center text-white rounded w-40 bg-searchoptionbutton hover:bg-searchoptionbuttonhover active:bg-searchoptionbuttonactive mr-2"
      >
        <font-awesome-icon icon="search" class="text-4xl mb-2" />
        <div class="font-thin">Search</div>
      </button>
      <button
        class="z-10 flex flex-col items-center justify-center text-inputblack w-40 hover:text-gray-700 active:text-black"
        @click="closeCustomOptions"
      >
        <font-awesome-icon icon="times" class="text-4xl mb-2" />
        <div class="font-thin">Cancel</div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Location {
  city: string;
  country: string;
  staddress: string;
  postal: string;
  region: string;
}

@Component
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
