import Vue from 'vue'
import Router from 'vue-router'
import stuInfo from './components/stu-info'
import addStu from './components/add-stu'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass:'active',
  routes: [
    {
      path:"/",
      name:'home',
      component:stuInfo
    },
    {
      path:"/add",
      name:'addStudent',
      component:addStu
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
