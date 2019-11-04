<template>
  <div class="bg-black text-white py-8 px-8 sm:px-12 mx-8 flex flex-col w-full">
    <div class="text-3xl font-bold mb-8">Sign In</div>
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-lightgrey text-lg"
      placeholder="Email or phone number"
      type="text"
    />
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-lightgrey text-lg"
      placeholder="Password"
      type="password"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {}
</script>
