import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import List from '@/components/List'
import SubList1 from '@/components/SubList1'
import SubList2 from '@/components/SubList2'
import i1 from '@/components/i1'
import i2 from '@/components/i2'
import url from '@/components/url'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'HelloWorld',
      component: Index,
      children:[
        {
          path:'/index/i1',
          component:i1
        },
        {
          path:'/index/i2',
          component:i2
        }
      ]
    },
    {
      path: '/list',
      name: 'HelloWorld',
      component: List,
      children: [
        {
          path: '/list/subList1',
          component: SubList1,
          name:'sb1'
        },
        {
          path: '/list/subList2',
          component: SubList2
        },

      ]
    },
    {
      path:'/url/:username/:age',
      component:url
    },
    {
      path:'/home',
      redirect: '/index'
    },
    {
      path:'/redirectparam/:username/:age',
      redirect: '/url/:username/:age'
    }

  ]
})
