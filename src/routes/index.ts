import { createRouter, createWebHistory } from "vue-router";
import {
  AddTaskView,
  DashboardView,
  NotFoundView,
  TaskDetailView,
  TasksView,
} from "../views";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/tasks", component: TasksView },
  { path: "/task/:id", component: TaskDetailView },
  { path: "/add", component: AddTaskView },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
