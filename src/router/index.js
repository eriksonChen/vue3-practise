import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const About = () => import('../views/About.vue')
const EventDetails = () => import('../views/EventDetails.vue')

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
