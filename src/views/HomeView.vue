<template>
  <div class="home">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/typewriter">打字机</router-link>|
      <router-link to="/facetracking">人脸追踪</router-link>
    </nav>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
}
</script>
<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>