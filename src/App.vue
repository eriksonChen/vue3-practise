<template>
  <div id="app">
    <div id="flash-message" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
}
</script>

<style scoped>
@keyframes yellowfade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

#flash-message {
  background: rgb(236, 240, 30);
  animation-name: yellowfade;
  animation-duration: 3s;
  position: fixed;
  border-radius: 10px;
  border: #acb1bd 1px solid;
  padding: 20px 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
