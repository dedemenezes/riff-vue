import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/programming",
    name: "programming",
    component: () => import("@/views/ProgrammingView.vue"),
  },
  {
    path: "/components",
    name: "components",
    component: () => import("@/views/ComponentsView.vue"),
  },
];

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
