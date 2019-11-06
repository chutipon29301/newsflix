<template>
  <div class="flex flex-col">
    <div class="text-3xl font-bold mb-8">Sign Up</div>
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Name (e.g. John Doe)"
      type="text"
      v-model="name"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
          shouldShowEmailError ? 'border border-btnred' : ''
        }`
      "
      placeholder="Email"
      type="email"
      v-model="email"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
          shouldShowPasswordError ? 'border border-btnred' : ''
        }`
      "
      placeholder="Password (8-20 characters)"
      type="password"
      v-model="password"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-12 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
          shouldShowPasswordError ? 'border border-btnred' : ''
        }`
      "
      placeholder="Confirm Password"
      type="password"
      v-model="confirmPassword"
    />
    <button
      :class="
        `shadow rounded w-full py-4 px-3 mb-40 text-white leading-tight focus:outline-none focus:shadow-outline text-lg ${
          allowToCreateAccount
            ? 'bg-btnred hover:bg-red-800 active:bg-red-900'
            : 'cursor-not-allowed bg-input hover:bg-input active:bg-input'
        }`
      "
      @click="createAccount"
    >Create account</button>
    <router-link to="signin" class="hover:underline">
      <font-awesome-icon icon="arrow-left" class="mr-2" />Sign In
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SignUp extends Vue {
  private name: string = "";
  private email: string = "";
  private password: string = "";
  private confirmPassword: string = "";

  private createAccount() {
    // console.log("Create Account");
  }

  private get shouldShowNameError(): boolean {
    return this.name === "";
  }

  private get shouldShowEmailError(): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.email !== "" && !re.test(this.email);
  }

  private get shouldShowPasswordError(): boolean {
    return this.password !== this.confirmPassword;
  }

  private get allowToCreateAccount(): boolean {
    return !(
      this.shouldShowNameError ||
      this.shouldShowEmailError ||
      this.shouldShowPasswordError
    );
  }
}
</script>
