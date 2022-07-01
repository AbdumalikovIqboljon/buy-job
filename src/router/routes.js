import Support from "@/pages/Support.vue";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Orders from "@/pages/Orders.vue";
import BalanceDetails from "@/pages/BalanceDetails.vue";
// import Login from "@/pages/Login.vue";
export const routes = [
  {
    path: "/support",
    name: "support",
    component: Support,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  ,
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },
  {
    path: "/balance",
    name: "balance",
    component: BalanceDetails,
  },
];
