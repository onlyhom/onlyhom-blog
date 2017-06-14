
// 引用 拓展的一些属性
import expand from './expand/expand'

// 引用 vue
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)

// import VueHead from 'vue-head'
// Vue.use(VueHead)



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

