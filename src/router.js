import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/login.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./views/mainList.vue')
        },
        {
            path: '/manage',
            name: 'manage',
            component: () => import('./views/DemoJump.vue'),
            children: [{
              path: '/index',
              name: 'index',
              meta: [{name: '首页', path: '/index'}],
              component: () => import('./views/Demo.vue')
            }]
        }
    ]
})
