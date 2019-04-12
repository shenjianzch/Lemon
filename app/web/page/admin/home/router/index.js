import Vue from "vue";

import VueRouter from "vue-router";
import Dashboard from "../view/dashboard/index.vue";
import ArticleList from "../view/list.vue";

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: "history",
    base: "/admin/",
    routes: [
      {
        path: "/",
        component: Dashboard
      },
      {
        path: "*",
        component: () => import("../view/notfound.vue")
      }
    ]
  });
}
