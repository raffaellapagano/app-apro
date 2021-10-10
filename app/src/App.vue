<template>
  <div id="app">
    <div id="nav" class="background m-2 rounded">
      <router-link to="/">Login</router-link> |
      <router-link to="/calcula">Cálcula</router-link> |
      <router-link to="/about">Contactos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #15588f;
}

#nav a {
  font-weight: bold;
  color: #dcdfe2;
}

#nav a.router-link-exact-active {
  color: #ee7740;
}
</style>
