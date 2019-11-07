<template>
  <div class="flex flex-col w-full">
    <div class="text-3xl font-bold mb-8">Sign In</div>
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-1 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
          shouldShowError || shouldShowEmailError ? 'border border-btnred' : ''
        }`
      "
      placeholder="Email"
      type="text"
      v-model="username"
    />
    <div v-if="shouldShowEmailError" class="mb-2 text-error font-hairline">
      Invalid email
    </div>
    <div v-else class="mb-4" />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-2 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
          shouldShowError ? 'border border-btnred' : ''
        }`
      "
      placeholder="Password"
      type="password"
      v-model="password"
    />
    <div v-if="shouldShowError" class="mb-2 text-error font-hairline">
      Incorrect email or password, try again.
    </div>
    <div v-else class="mb-4" />
    <button
      :class="
        `shadow rounded w-full py-4 px-3 mt-4 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline text-lg ${
          allowLogin
            ? 'bg-btnred hover:bg-red-800 active:bg-red-900'
            : 'cursor-not-allowed bg-input hover:bg-input active:bg-input'
        }`
      "
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
      <router-link to="#" class="text-inputblack hover:underline"
        >Need help ?</router-link
      >
    </div>
    <div class="flex">
      <div class="text-inputblack mr-4">New to Newsflix ?</div>
      <router-link to="signup" class="hover:underline">Sign up now</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
@Component
export default class Login extends Vue {
  private username: string = "";
  private password: string = "";
  private rememberUser: boolean = false;
  private shouldShowError: boolean = false;

  private get allowLogin(): boolean {
    return (
      this.username !== "" && this.password !== "" && !this.shouldShowEmailError
    );
  }

  private get shouldShowEmailError(): boolean {
    return this.username !== "" && !this.validateEmailString(this.username);
  }

  private signIn() {
    if (!this.allowLogin) {
      return;
    }
    if (
      this.username.toLowerCase() === "abc@gmail.com" &&
      this.password === "password"
    ) {
      this.shouldShowError = false;
      setTimeout(() => {
        router.push("/");
      }, 500);
      // localStorage.isSignIn = true;
    } else {
      this.shouldShowError = true;
      this.password = "";
    }
  }

  private validateEmailString(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
</script>
