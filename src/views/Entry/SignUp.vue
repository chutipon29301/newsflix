<template>
  <div class="flex flex-col">
    <div class="text-3xl font-bold mb-8">Sign Up</div>
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Name (e.g. John Doe)"
      type="text"
    />
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Email"
      type="text"
    />
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Password (8-20 characters)"
      type="password"
    />
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-12 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Confirm Password"
      type="password"
    />
    <button
      class="shadow rounded w-full py-4 px-3 mb-40 text-white leading-tight focus:outline-none focus:shadow-outline bg-btnred text-lg hover:bg-red-800 active:bg-red-900"
    >Create account</button>
    <router-link to="signin" class="hover:underline">
      <font-awesome-icon icon="arrow-left" class="mr-2" />Sign In
      </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SignUp extends Vue {}
</script>
