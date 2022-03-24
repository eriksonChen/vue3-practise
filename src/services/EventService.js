import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://my-json-server.typicode.com/eriksonChen/vue3-practise',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
  postEvent(event) {
    return apiClient.post(`/events`, event)
  },
}
