<template>
  <div id="app">
    <h1>Vue Colcade (Masonry Layout) Demo</h1>
    <button>Add 10 more items</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#app {
  text-align: center;
  margin-top: 60px;
}

button {
  padding: 10px;
  font-size: 10px;
  font-weight: 700;
}
</style>
