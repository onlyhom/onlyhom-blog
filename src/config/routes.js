// 引入子路由
import Frame from '../frame/subroute.vue'

// 引用模板
import index from '../page/home.vue'
import about from '../page/about.vue'
import work from '../page/work.vue'
import blog from '../page/blog.vue'
import blogDetail from '../page/blogDetail.vue'
import notes from '../page/notes.vue'
import contact from '../page/contact.vue'

// 引入子页面
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'



// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/home',
    component: index
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/work',
    component: work
  },
  {
    path: '/blog',
    component: blog,
  },
  {
    path: '/blogDetail',
    component: blogDetail,
  },
  {
    path: '/notes',
    component: notes
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/user',
    component: Frame,
    children: [
      {path:'/', component: userIndex},
      {path:'info', component: userInfo},
      {path:'love', component: userLove}
    ]
  }
]
