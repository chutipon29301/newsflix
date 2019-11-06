<template>
  <div class="flex flex-col w-full">
    <div class="text-3xl font-bold mb-8">Sign In</div>
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Email or phone number"
      type="text"
      v-model="username"
    />
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-12 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Password"
      type="password"
      v-model="password"
    />
    <button
      class="shadow rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-btnred text-lg hover:bg-red-800 active:bg-red-900"
      @click="signIn"
    >
      Sign In
    </button>
    <div class="flex justify-between mb-64">
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          class="form-checkbox border-none bg-input text-inputblack"
          v-model="rememberUser"
        />
        <span class="ml-2 text-inputblack">Remember me</span>
      </label>
      <router-link to="#" class="text-inputblack hover:underline">Need help ?</router-link>
    </div>
    <div class="flex">
      <div class="text-inputblack mr-4">New to Newsflix ?</div>
      <router-link to="signup" class="hover:underline">Sign up now</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  private username: string = "";
  private password: string = "";
  private rememberUser: boolean = false;

  private signIn() {
    if (this.username === "abc@gmail.com" && this.password === "password") {
      console.log("Redirect");
    }
  }
}
</script>
