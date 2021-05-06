import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/Article",
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
        path: "",
        redirect: "List", // default child path
      },
      {
        name: "List",
        path: "List",
        component: () => import("../components/article/articleList.vue"),
      },
      {
        name: "Page",
        path: "Page/:articleid",
        meta: { requiresReturn: true },
        component: () => import("../components/article/articlePage.vue"),
      },
    ],
  },
  {
    path: "/About",
    name: "About",
    meta: { requiresLogin: true },
    component: () => import("../views/About.vue"),
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
  // if (
  //   //檢查頁面是否需要登入
  //   to.matched.some((record) => record.meta.requiresLogin) &&
  //   store.getters.isLoging == false
  // ) {
  //   next("/Login");
  // }
  if (to.matched.some((record) => record.meta.requiresReturn)) {
    store.commit({
      type: "updateReturnValue",
      show: true,
    });
  } else {
    store.commit({
      type: "updateReturnValue",
      show: false,
    });
  }
  const appBarList = ["Article", "Collection", "Notification", "About"]; //當對應頁面，更改下方導覽列選擇
  if (appBarList.indexOf(to.matched[0].name) !== -1) {
    store.commit({
      type: "updateBottomNaviValue",
      count: appBarList.indexOf(to.matched[0].name),
    });
  }

  document.title = to.matched[0].name; //切換網頁標題
  next();
});

export default router;
