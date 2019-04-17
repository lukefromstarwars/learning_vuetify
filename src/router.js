import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/project",
      name: "Project",
      component: () => import("./views/Project.vue")
    },
    {
      path: "/team",
      name: "Team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "/sectors",
      name: "Sectors",
      component: () => import("./views/Sectors.vue")
    }
  ]
});
