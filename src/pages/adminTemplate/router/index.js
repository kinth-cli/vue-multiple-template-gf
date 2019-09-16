import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: function(resolve){
        require(['@/components/HelloWorld'], resolve)
      }
    },
    {
      path: '/404',
      name: 'Page404',
      component: resolve => { require(['@/components/common/404'], resolve) }
    },
    {
      path: '/500',
      name: 'Page500',
      component: resolve => { require(['@/components/common/Error'], resolve) }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => { require(['@/components/common/Login'], resolve) }
    },
    {
      path: '/*',
      redirect: '/404'
    }
  ]
})
