import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from '@/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/Template.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home/Index.vue")
      }
    ]
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
        meta: { transition: "fade-in-left" }
      },
      {
        path: "signUp",
        component: () =>
          import(/* webpackChunkName: "signUp" */ "@/views/Entry/SignUp.vue"),
        alias: "/signUp",
        meta: { transition: "fade-in-right" }
      }
    ],
    beforeEnter: (from, to, next) => {
      if (store.getters.isSignIn) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "*",
    name: "Not Found",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
