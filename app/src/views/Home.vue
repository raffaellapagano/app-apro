<template>
  <div class="home">
    <img alt="Aprotecnich logo" src="./../assets/images/aprotecnic-group.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login/>
  </div>
</template>

<script>
import Login from "./../components/Login.vue"

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
