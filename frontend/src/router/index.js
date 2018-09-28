import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/LoginPage'
import Messages from '@/views/MessagesPage'
import NewMessage from '@/views/NewMessage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/messages',
      name: 'MessagesPage',
      component: Messages
    },
    {
      path: '/messages/new',
      name: 'NewMessage',
      component: NewMessage
    }
  ]
})
