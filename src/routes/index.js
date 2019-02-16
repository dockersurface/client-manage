import React from 'react';
const User = () => <div><h3>User</h3></div>
const UserList = () => <h3>UserList</h3>
const Team = () => <h3>Team</h3>
const File = () => <h3>文件</h3>
export const menus = [
    {
        path: '/user',
        name: '用户管理',
        icon:'user',
        component: User,
        routes: [
            {
                path: '/user/userList',
                name: '用户列表',
                component: UserList
            },
        ]
    },
    { 
        path: '/team',
        name: 'Team',
        exact: true,
        icon: 'team',
        component: Team 
    },
    {
        path: '/file',
        name: '文件',
        icon: 'file',
        component: File
    },
]

// export const main = [
//     {
//         path: '/login',
//         exact: true,
//         name: '登录',
//         component: Login,
//         meta: {
//             isAuth: true
//         }
//     },
//     {
//         path: '/register',
//         exact: true,
//         name: '注册',
//         component: Register,
//         meta: {
//             isAuth: true
//         }
//     },
//     {
//         path: '/',
//         // exact: true,
//         name: '首页',
//         component: Index,
//         // routes: menus
//     }
// ]