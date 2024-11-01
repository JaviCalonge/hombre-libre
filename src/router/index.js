import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LibertadView from "@/views/LibertadView.vue";
import FinanzasView from "@/views/FinanzasView.vue";
import FuerzaView from "@/views/FuerzaView.vue";
import HumorView from "@/views/HumorView.vue";
import ContactoView from "@/views/ContactoView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/libertad",
      name: "libertad",
      component: LibertadView,
    },
    {
      path: "/finanzas",
      name: "finanzas",
      component: FinanzasView,
    },
    {
      path: "/fuerza",
      name: "fuerza",
      component: FuerzaView,
    },
    {
      path: "/humor",
      name: "humor",
      component: HumorView,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: ContactoView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
