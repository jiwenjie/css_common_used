import Vue from 'vue'
import Router from 'vue-router'
import popup from '@/pages/popup/popup'
import accordion from '@/pages/accordion/accordion'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'popup',
      component: popup
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: accordion
    }
  ]
})
