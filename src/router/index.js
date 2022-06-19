import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import store from '../store'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "shoe/:id",
        component: () => import("../views/ShoePage.vue"),
        props: true,
      },
      {
        path: "/myinfor",
        component: () => import("../views/MyInforPage.vue"),
        meta: {
          requireLogin: true
        }
      },

    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup",
    component: () => import("../views/SignupView.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) =>
{
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router;
