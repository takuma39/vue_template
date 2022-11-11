import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import NewsView from "../views/News/NewsView.vue";
import SingleNews from "../views/News/SingleNewsView.vue";
import ServiceView from "../views/Service/ServiceView.vue";
import WorkView from "../views/Work/WorkView.vue";
import CompanyView from "../views/Company/CompanyView.vue";
import RecruitView from "../views/Recruit/RecruitView.vue";
import ContactView from "../views/Contact/ContactView.vue";

//遷移後にページTOPに移動
const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/news/:id",
      name: "single",
      component: SingleNews,
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
    },
    {
      path: "/company",
      name: "company",
      component: CompanyView,
    },
    {
      path: "/recruit",
      name: "recruit",
      component: RecruitView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior,
});

export default router;
