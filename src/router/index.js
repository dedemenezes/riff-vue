import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/features/home/components/HomeView.vue"),
  },
  {
    path: "/programming",
    name: "programming",
    component: () => import("@/components/features/programming/components/ProgrammingView.vue"),
  },
  {
    path: "/components",
    name: "components",
    component: () => import("@/views/ComponentsView.vue"),
  },
];

const riffRouter = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
});

export default riffRouter;
