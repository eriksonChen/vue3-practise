<template>
  <p>Register for the event here!</p>
  <button @click="registerBtn">Register me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    registerBtn() {
      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.replace({ name: 'EventDetails' })
    },
  },
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #27738a;
  color: white;
  cursor: pointer;
  border: 0;

  border-radius: 8px;
}
</style>
