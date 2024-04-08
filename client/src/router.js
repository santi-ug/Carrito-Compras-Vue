import { createRouter, createWebHistory } from "vue-router";

import Cart from "./views/Cart.vue";
import ManageProducts from "./views/ManageProducts.vue";
import Shop from "./views/Shop.vue";
import Home from "./views/Home.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/shop",
        component: Shop,
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/manage-products",
        component: ManageProducts,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

