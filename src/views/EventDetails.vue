import EventService from '@/services/EventService.js';
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  // props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    // console.log(this.$route.params.id)
    EventService.getEvent(this.$route.params.id)
      // EventService.getEvent(this.id)
      .then((res) => {
        this.event = res.data
        console.log(this.event.title)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
