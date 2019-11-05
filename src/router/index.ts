import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/entry",
    name: "",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "@/views/Entry/Template.vue"),
    children: [
      {
        path: "signIn",
        component: () =>
          import(/* webpackChunkName: "signIn" */ "@/views/Entry/SignIn.vue"),
        alias: "/signIn",
        meta: { transition: 'fade-in-left' },
      },
      {
        path: "signUp",
        component: () =>
          import(/* webpackChunkName: "signUp" */ "@/views/Entry/SignUp.vue"),
        alias: "/signUp",
        meta: { transition: 'fade-in-right' },
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
