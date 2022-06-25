import HomePage from "@/pages/HomePage.vue";
import Login from "@/pages/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routs = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routs,
});

export default router;
