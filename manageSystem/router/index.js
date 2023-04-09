import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Main',
		// 按需引入 注意加引号
		component: () => import('../views/Main.vue'),
		redirect:'/login',
		children:[
			// {
			// 	path: '/home',
			// 	name: 'home',
			// 	// 不是home.vue
			// 	component: () => import('../views/home')
			// },
			// {
			// 	path: '/user',
			// 	name: 'user',
			// 	component: () => import('../views/User')
			// },
			// {
			// 	path: '/mall',
			// 	name: 'mall',
			// 	component: () => import('../views/mall')
			// },
			// {
			// 	path: '/page1',
			// 	name: 'page1',
			// 	component: () => import('../views/other/pageOne.vue')
			// },
			// {
			// 	path: '/page2',
			// 	name: 'page2',
			// 	component: () => import('../views/other/pageTwo.vue')
			// }
		]
	},
	{
		path:'/login',
		name:'login',
		component: () => import('../views/Login/login.vue')
	}

];
//防止重复点击相同页面出错
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch(err => err)
 }
 
const router = new VueRouter({
	mode:'history',
	routes
})


export default router