import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

import LoginPage from "./../views/LoginPage";
import SignupPage from "./../views/SignupPage";
import ErrorPage from "./../views/ErrorPage";
import SettingsPage from "./../views/SettingsPage";

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignupPage,
    },
    {
        path: "/me",
        name: "settings",
        component: SettingsPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: ErrorPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router