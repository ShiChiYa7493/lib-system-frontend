import Vue from 'vue'
import Router from 'vue-router'
// 导入编写的组件
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import AppIndex from '@/components/home/AppIndex'
import LibraryIndex from '@/components/library/LibraryIndex'
import AdminIndex from '@/components/admin/AdminIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'Admin',
          component: AdminIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
