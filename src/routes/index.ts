import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Dashboard.vue") },
  { path: "/tasks", component: () => import("../views/Tasks.vue") },
  { path: "/task/:id", component: () => import("../views/TaskDetail.vue") },
  { path: "/add", component: () => import("../views/AddTask.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
