import Vue from 'vue';
import VueRouter from 'vue-router'
import MainPage from "@/pages/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/messenger',
        component: () => import('./pages/Messenger')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})