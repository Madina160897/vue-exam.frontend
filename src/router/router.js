import { createRouter, createWebHashHistory } from "vue-router";
import Authorization from "../components/Authorization.vue";
import Newsline from "../components/Newsline.vue";
import PersonalArea from "../components/PersonalArea.vue";
import Registration from "../components/Registration.vue";
import Users from "../components/Users.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/auth',
            component: Authorization,
            alias: '/'
        },
        {
            path: '/regis',
            component: Registration
        },
        {
            path: '/person',
            component: PersonalArea
        },
        {
            path: '/news',
            component: Newsline
        },
        {
            path: '/users',
            component: Users
        },
    ]
}) 
