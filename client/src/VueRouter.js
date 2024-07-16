import AboutPage from "./pages/AboutPage/AboutPage.vue";
import HomePage from "./pages/HomePage/HomePage.vue";
import ShopPage from "./pages/ShopPage/ShopPage.vue";
import ContactPage from "./pages/ContactPage/ContactPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import UserPage from "./pages/UserPage/UserPage.vue";
import FavPage from "./pages/FavPage/FavPage.vue";
import ProductPage from '@/pages/ProductPage/ProductPage.vue';

const routes = [
    {
        name: 'Home',
        subtext: 'Main place',
        path: '/',
        component: HomePage
    },
    {
        name: 'Shop',
        subtext: 'Our products',
        path: '/shop',
        component: ShopPage
    },
    {
        name: 'About',
        subtext: 'What we do',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'Contact',
        subtext: 'Get in touch',
        path: '/contact',
        component: ContactPage
    },
    {
        path: '/product' + '/:productId',
        component: ProductPage
    },
    {
        path: '/user',
        component: UserPage
    },
    {
        path: '/favorite',
        component: FavPage
    },
    {
        path: '/payment_options',
        component: FavPage
    },
    {
        path: '/returns',
        component: FavPage
    },
    {
        path: '/privacy_policies',
        component: FavPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router   