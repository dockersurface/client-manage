import { Login, Register, Index } from './toComponent';

export const menus = [
    {
        path: ''
    }
]

export const main = [
    {
        path: '/login',
        exact: true,
        name: '登录',
        component: Login,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/register',
        exact: true,
        name: '注册',
        component: Register,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/',
        exact: true,
        name: '首页',
        Redirect: '/index' 
    },
    {
        path: '/index',
        name: '首页',
        component: Index,
        routes: menus
    }
]