import { createRouter, createWebHistory } from "vue-router";
import KbnBoardView from "../components/Templates/KbnBoardView.vue";
import KbnLoginView from "../components/Templates/KbnLoginView.vue";
import KbnTaskDetailModal from "../components/Templates/KbnTaskDetailModal.vue";

const routes = [
  { path: "/", component: KbnBoardView, meta: { requiresAuth: true } },
  { path: "/login", component: KbnLoginView },
  {
    path: "/tasks/:id",
    component: KbnTaskDetailModal,
    meta: { requiresAuth: true },
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
