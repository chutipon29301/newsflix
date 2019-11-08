import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface GlobalStore {
  isSignIn: boolean
}

const store: StoreOptions<GlobalStore> = {
  state: {
    isSignIn: false
  },
  getters: {
    isSignIn: ({ isSignIn }) => isSignIn,
  },
  mutations: {
    signIn: (state) => {
      state.isSignIn = true;
    },
    signOut: (state) => {
      state.isSignIn = false;
    }
  },
  actions: {
    signIn: ({ commit }, shouldRemember: boolean) => {
      if (shouldRemember) {
        localStorage.isSignIn = true;
      }
      commit('signIn');
    },
    signOut: ({ commit }) => {
      localStorage.isSignIn = undefined;
      commit('signOut');
    },
    loadIsSignInStatus: ({ commit }) => {
      if (localStorage.isSignIn === true) {
        commit('signIn');
      }
    }
  },
  modules: {}
}

export default new Vuex.Store(store);
