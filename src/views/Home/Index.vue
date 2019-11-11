<template>
  <div>
    <img src="../../assets/banner.jpg" class="h-64 w-full object-cover"/>
    <div class="w-full bg-home">
      <div class="container flex justify-between text-white font-semibold text-xl py-8">
        <div class="flex-1">
          <div>TOP 5</div>
          <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
        <div class="flex-1">
          <div>Most View</div>
          <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
        <div class="flex-1">
          <div>Most Recent</div>
          <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Index extends Vue {}
</script>
