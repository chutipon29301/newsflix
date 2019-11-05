import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import VueParticles from "vue-particles";
import VuePageTransition from "vue-page-transition";
 
Vue.use(VueParticles);
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
