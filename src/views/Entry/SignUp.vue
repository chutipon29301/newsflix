<template>
  <div class="flex flex-col">
    <div class="text-3xl font-bold mb-8">Sign Up</div>
    <div class="inline-block relative w-full mb-2">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-inputblack"
      >
        <font-awesome-icon icon="user" />
      </div>
      <input
        :class="
          `shadow appearance-none rounded w-full py-4 pr-3 pl-10 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
            shouldShowNameError ? 'border border-btnred' : ''
          }`
        "
        placeholder="Name (e.g. John Doe)"
        type="text"
        v-model="name"
      />
    </div>
    <div v-if="shouldShowNameError" class="mb-2 text-error font-hairline">
      Invalid name
    </div>
    <div v-else class="mb-2" />
    <div class="inline-block relative w-full mb-2">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-inputblack"
      >
        <font-awesome-icon icon="envelope" />
      </div>
      <input
        :class="
          `shadow appearance-none rounded w-full py-4 pr-3 pl-10 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
            shouldShowEmailError ? 'border border-btnred' : ''
          }`
        "
        placeholder="Email"
        type="email"
        v-model="email"
      />
    </div>
    <div v-if="shouldShowEmailError" class="mb-2 text-error font-hairline">
      Invalid email
    </div>
    <div v-else class="mb-2" />
    <div class="inline-block relative w-full mb-2">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-inputblack"
      >
        <font-awesome-icon icon="lock" />
      </div>
      <input
        :class="
          `shadow appearance-none rounded w-full py-4 pr-3 pl-10 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
            shouldShowPasswordError || shouldShowPasswordMismatchError
              ? 'border border-btnred'
              : ''
          }`
        "
        placeholder="Password (8-20 characters)"
        type="password"
        v-model="password"
      />
    </div>
    <div v-if="shouldShowPasswordError" class="mb-2 text-error font-hairline">
      Invalid Password
    </div>
    <div v-else class="mb-2" />
    <div class="inline-block relative w-full mb-2">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-inputblack"
      >
        <font-awesome-icon icon="lock" />
      </div>
      <input
        :class="
          `shadow appearance-none rounded w-full py-4 pr-3 pl-10 text-white leading-tight focus:outline-none focus:shadow-outline bg-input text-lg ${
            shouldShowPasswordMismatchError ? 'border border-btnred' : ''
          }`
        "
        placeholder="Confirm Password"
        type="password"
        v-model="confirmPassword"
      />
    </div>
    <div
      v-if="shouldShowPasswordMismatchError"
      class="mb-6 text-error font-hairline"
    >
      Mismatch password
    </div>
    <div v-else class="mb-8" />
    <button
      :class="
        `shadow rounded w-full py-4 px-3 mb-16 sm:mb-40 text-white leading-tight focus:outline-none focus:shadow-outline text-lg ${
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

  private createAccount() {
    if (this.allowToCreateAccount) {
      this.$router.push("/");
    }
  }

  private get shouldShowNameError(): boolean {
    const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return this.name !== "" && !re.test(this.name);
  }

  private get shouldShowEmailError(): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.email !== "" && !re.test(this.email);
  }

  private get shouldShowPasswordError(): boolean {
    const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return this.password !== "" && !re.test(this.password);
  }

  private get shouldShowPasswordMismatchError(): boolean {
    return this.password !== this.confirmPassword;
  }

  private get allowToCreateAccount(): boolean {
    return !(
      this.name === "" ||
      this.email === "" ||
      this.password === "" ||
      this.confirmPassword === "" ||
      this.shouldShowNameError ||
      this.shouldShowEmailError ||
      this.shouldShowPasswordError ||
      this.shouldShowPasswordMismatchError
    );
  }
}
</script>
