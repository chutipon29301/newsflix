import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import VueParticles from "vue-particles";
import VuePageTransition from "vue-page-transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faBars,
  faSearch,
  faUser,
  faEnvelope,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Autocomplete from "v-autocomplete";
import "v-autocomplete/dist/v-autocomplete.css";

Vue.use(VueParticles);
Vue.use(VuePageTransition);
Vue.use(Autocomplete);

library.add(faArrowLeft, faBars, faSearch, faUser, faEnvelope, faLock);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
