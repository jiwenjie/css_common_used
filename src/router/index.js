import Vue from 'vue'
import Router from 'vue-router'
import popup from '@/pages/popup/popup'
import accordion from '@/pages/accordion/accordion'
import hoverStop from '@/pages/hoverStop/hoverStop'
import moveby from '@/pages/moveby/moveby'
import pictureFlash from '@/pages/pictureFlash/pictureFlash'

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
    },
    {
      path: '/hoverStop',
      name: 'hoverStop',
      component: hoverStop
    },
    {
      path: '/moveby',
      name: 'moveby',
      component: moveby
    },
    {
      path: '/pictureFlash',
      name: 'pictureFlash',
      component: pictureFlash
    },
  ]
})
