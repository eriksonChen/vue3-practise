<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-text" type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ['formSubmitted'],
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    },
  },
}
</script>
