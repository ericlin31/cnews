import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/Article/List",
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Article",
    name: "Article",
    meta: { requiresLogin: true },
    component: () => import("../views/Article.vue"),
    children: [
      {
        name: "List",
        path: "List",
        component: () => import("../components/article/articleList.vue"),
      },
      {
        name: "Page",
        path: "Page/:articleid",
        component: () => import("../components/article/articlePage.vue"),
      },
    ],
  },
  {
    path: "/About",
    name: "About",
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Collection",
    name: "Collection",
    meta: { requiresLogin: true },
    component: () => import("../views/Collection.vue"),
  },
  {
    path: "/Notification",
    name: "Notification",
    meta: { requiresLogin: true },
    component: () => import("../views/Notification.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log(store.getters.isLoging);
  if (
    //檢查頁面是否需要登入
    to.matched.some((record) => record.meta.requiresLogin) &&
    store.getters.isLoging == false
  ) {
    next("/Login");
  }
  const appBarList = ["Article", "Collection", "Notification", "About"];
  if (appBarList.indexOf(to.matched[0].name) !== -1)
    store.commit({
      type: "updateNaviValue",
      count: appBarList.indexOf(to.matched[0].name),
    });
  document.title = to.matched[0].name;
  next();
});

export default router;
