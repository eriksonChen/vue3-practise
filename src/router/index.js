import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventService from '@/services/EventService.js'
import Nprogress from 'nprogress'
import GStore from '../store/GStore.js'

const About = () => import('../views/About.vue')
const EventLayout = () => import('../views/event/Layout.vue')
const EventDetails = () => import('../views/event/Details.vue')
const EventRegister = () => import('../views/event/Register.vue')
const EventEdit = () => import('../views/event/Edit.vue')
const NetworkError = () => import('../views/NetworkError.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id)
        .then((res) => {
          GStore.event = res.data
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            return {
              name: '404NotFound',
              params: { resource: 'event' },
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => ({ path: '/events/' + to.params.afterEvent }),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
  {
    path: '/404/:resource',
    name: '404NotFound',
    component: NotFound,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from) => {
  Nprogress.start()
  const notAuthorized = false
  if (notAuthorized && to.meta.requireAuth) {
    GStore.flashMessage = 'Sorry, 你沒有權限觀修改資訊'

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)

    if (from.href) {
      return false
    } else {
      return { path: '/' }
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
