import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'
// import router from '../router'

export default createStore({
  state: {
    user: 'Erikson Chen',
    events: [],
    event: {},
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data)
        })
        .catch((err) => {
          throw err
          // router.push({ name: 'NetworkError' })
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id)
          .then((res) => {
            commit('SET_EVENT', res.data)
          })
          .catch((err) => {
            throw err
            // if (err.response && err.response.status === 404) {
            //   router.push({
            //     name: '404NotFound',
            //     params: { resource: 'event' },
            //   })
            // } else {
            //   router.push({ name: 'NetworkError' })
            // }
          })
      }
    },
  },
  modules: {},
})
