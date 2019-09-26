import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageOne from './views/pages/PageOne.vue'
import Login from './views/login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		redirect:'/login',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta:{
			keepAlive: false 
		},
	},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
	},
	{
		path: '/page-one',
		name: 'pageOne',
		component: PageOne,
		meta:{
			keepAlive: true 
		},
	}
  ]
})
