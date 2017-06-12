
// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用

// import VueHead from 'vue-head'

// Vue.use(VueHead)
Vue.use(VueRouter)

// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 使用配置文件规则

import api from './config/api'
Vue.prototype.$api = api;
//绑定到全局

const router = new VueRouter({
  routes
})
// 跑起来吧
var vm = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})

