<template>
  <div class="flex w-full">
    <div class="flex flex-col flex-1">
      <div class="flex mb-2 pr-2">
        <button
          class="z-10 bg-inputhover hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-l inline-flex items-center"
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
        <div class="inline-block relative flex-1 mr-2">
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
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div class="inline-block relative flex-1 mr-2">
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
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div class="inline-block relative flex-1 mr-2">
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
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
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
      @click="toggleFunction"
    >
      <font-awesome-icon icon="times" class="text-4xl mb-2" />
      <div class="font-thin">Cancel</div>
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class DetailSearchOptions extends Vue {
  @Prop() private toggleFunction!: () => void;
}
</script>