import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("@/Pages/Dashboard/Index.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/Pages/About/Index.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("@/Pages/Checkout/Index.vue"),
    },
  ],
});

export default router;
