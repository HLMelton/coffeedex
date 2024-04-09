import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Leaderboard from "../views/Leaderboard.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/leaderboard",
    component: Leaderboard,
  },
  {
    path: "/about",
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  });

export default router;
