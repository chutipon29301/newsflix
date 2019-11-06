<template>
  <div class="flex flex-col">
    <div class="text-3xl font-bold mb-8">Sign Up</div>
    <input
      class="shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg"
      placeholder="Name (e.g. John Doe)"
      type="text"
      v-model="name"
      @change="validateInput"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${emailErrorClass}`
      "
      placeholder="Email"
      type="email"
      v-model="email"
      @change="validateInput"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${passwordErrorClass}`
      "
      placeholder="Password (8-20 characters)"
      type="password"
      v-model="password"
      @change="validateInput"
    />
    <input
      :class="
        `shadow appearance-none rounded w-full py-4 px-3 mb-12 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${passwordErrorClass}`
      "
      placeholder="Confirm Password"
      type="password"
      v-model="confirmPassword"
      @change="validateInput"
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
    >
      Create account
    </button>
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
  private shouldShowEmailError: boolean = false;
  private shouldShowPasswordError: boolean = false;

  private createAccount() {
    // console.log("Create Account");
  }

  private validateInput() {
    this.shouldShowPasswordError = false;
    this.shouldShowEmailError = false;
    const isValidEmail = this.validateEmailString(this.email);
    if (!isValidEmail) {
      this.shouldShowEmailError = true;
      return;
    }
    if (
      this.password === "" ||
      this.confirmPassword === "" ||
      this.password !== this.confirmPassword
    ) {
      this.shouldShowPasswordError = true;
    }
  }

  private get emailErrorClass(): string {
    return this.shouldShowEmailError ? "border border-btnred" : "";
  }

  private get passwordErrorClass(): string {
    return this.shouldShowPasswordError ? "border border-btnred" : "";
  }

  private get allowToCreateAccount(): boolean {
    return !(this.shouldShowEmailError || this.shouldShowPasswordError);
  }

  private validateEmailString(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
</script>
