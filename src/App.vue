<template>
  <div id="app">
    <h1>百度一下</h1>
    <box-input></box-input>
  </div>
</template>

<script>
import BoxInput from './components/BoxInput'

export default {
  name: 'App',
  components: {
    BoxInput,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
