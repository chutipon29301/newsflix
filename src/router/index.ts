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
    path: "/signIn",
    name: "Sign In",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "@/views/Entry/Template.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "signIn" */ "@/views/Entry/SignIn.vue")
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
