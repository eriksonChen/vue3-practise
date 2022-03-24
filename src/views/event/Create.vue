<template>
  <h1>Create an event</h1>

  <form @submit.prevent="onSubmit">
    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />
    <h3>Name & describe your event</h3>

    <BaseInput v-model="event.title" label="my Title" type="text" required />
    <BaseInput v-model="event.description" label="Description" type="text" />

    <h3>Where is your event?</h3>

    <BaseInput v-model="event.location" label="Location" type="text" required />

    <h3>Time / Date</h3>
    <BaseInput
      label="Date"
      type="date"
      v-model="event.date"
      required
      id="erikson"
    />
    <BaseInput label="Time" type="time" v-model="event.time" required />

    <h3>Are pets allowed?</h3>
    <div>
      <baseRadioGroup :options="petsOptions" v-model="event.pets" name="pets" />
    </div>

    <h3>Extras</h3>
    <div>
      <baseCheckbox
        label="Catering"
        v-model="event.extras.catering"
      ></baseCheckbox>
    </div>

    <div>
      <baseCheckbox
        label="Live music"
        v-model="event.extras.music"
      ></baseCheckbox>
    </div>

    <button class="button -fill-gradient" type="submit">Submit</button>
  </form>
  <pre>{{ event }}</pre>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  // components: { BaseInput },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        date: '',
        time: '',
        extras: {
          catering: false,
          music: false,
        },
      },
      petsOptions: [
        {
          label: 'Yes',
          value: 1,
        },
        {
          label: 'No',
          value: 0,
        },
      ],
    }
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user,
      }
      console.log(event)
      this.$store
        .dispatch('createEvent', event)
        .then((res) => {
          console.log(res)
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id },
          })
        })
        .catch((err) => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: err },
          })
        })
    },
  },
}
</script>
<style scoped></style>
