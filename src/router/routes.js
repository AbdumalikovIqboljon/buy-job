import Support from "../pages/Support.vue";
import Home from "../pages/Home.vue";
// import Login from "../pages/Login.vue";
export const routes = [
    {
        path: '/support',
        name: 'support',
        component: Support,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    },
]