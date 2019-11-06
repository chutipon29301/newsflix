import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import VueParticles from "vue-particles";
import VuePageTransition from "vue-page-transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueParticles);
Vue.use(VuePageTransition);

library.add(faArrowLeft, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
