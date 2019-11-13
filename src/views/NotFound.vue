<template>
  <div id="html">
    <div id="body">
      <div id="main">
        <div class="fof">
          <h2>404 NOT FOUND</h2>
          <h3>The page you're trying to reach doesn't exist.</h3>
          <br />
          <router-link to="/"><u>Go back to home</u></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: all 0.6s;
}

#html {
  height: 100%;
}

#body {
  font-family: "Lato", sans-serif;
  color: #888;
  margin: 0;
}

#main {
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.fof {
  display: table-cell;
  vertical-align: middle;
}

.fof h2 {
  font-size: 40px;
  display: inline-block;
  padding-right: 12px;
  animation: type 0.5s alternate infinite;
  margin-bottom: 10px;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NotFound extends Vue {}
</script>

