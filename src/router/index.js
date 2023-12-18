import { createRouter, createWebHistory } from "@ionic/vue-router";

import client from "./authenticated/client";
import admin from "./authenticated/admin";

const routes = [
  /* {
    path: "/",
    redirect: "/home",
  }, */
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/Index.vue"),
  },
  ...client,
  ...admin,
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/recovery-password",
    name: "recovery-password",
    component: () => import("../pages/RecoveryPassword.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Error404.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../pages/Logout.vue"),
  },
  {
    path: "/not-authorized",
    name: "not-authorized",
    component: () => import("../pages/NotAuthorized.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("../pages/Error404.vue"),
  },
  {
    path: "/stations:propKey*",
    //path: "/stations",
    name: "stations",
    component: () => import("../modal/station.vue"),
    //props: (route) => ({ propKey: route.params.propKey }),
    /* props: (route) => ({
        ...route.params
    }) */
    //props:true,
  },
];

const router = createRouter({
  history: createWebHistory(
    process.env.VUE_APP_PUBLIC_PATH || process.env.BASE_URL,
  ),
  routes,
});

export default router;
