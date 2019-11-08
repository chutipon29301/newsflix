<template>
  <div class="relative">
    <button class="text-gray-700 hover:text-gray-900" @click="toggle">
      <font-awesome-icon icon="bars" />
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 border shadow w-48 bg-white rounded-lg mt-2"
    >
      <div v-if="isSignIn">
        <div class="px-4 my-2">
          <div class="font-thin select-none">Signed in as</div>
          <div class="font-bold">Username</div>
        </div>
        <hr />
        <div class="flex flex-col">
          <router-link
            to="#"
            class="py-2 px-4 h-10 hover:bg-inputhover w-full text-left"
            >View Profile</router-link
          >
          <button
            to="#"
            class="pt-2 pb-4 px-4 h-10 hover:bg-inputhover w-full text-left"
            @click="signOut"
          >
            Sign out
          </button>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-col">
          <router-link
            to="/signin"
            class="py-2 px-4 h-10 hover:bg-inputhover w-full text-left"
            >Sign in</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters({
      isSignIn: "isSignIn"
    })
  }
})
export default class Dropdown extends Vue {
  private isSignIn!: boolean;
  private isOpen: boolean = false;

  private toggle() {
    this.isOpen = !this.isOpen;
  }

  private signOut() {
    this.$store.dispatch("signOut");
  }
}
</script>
