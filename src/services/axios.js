import axios from 'axios'

export function getMessage() {
  return axios
    .get('https://my-json-server.typicode.com/eriksonChen/vue3-practise')
    .then((response) => {
      return response.data
    })
}
