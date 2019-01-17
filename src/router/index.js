import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/range', component: () => { ('../pages/range.vue') } },
    { path: '/game28*', component: () => { ('../pages/game28.vue') } }
  ]
})
