<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/demo">demo</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/detailsDone">detailsDone</router-link>
      <router-link to="/details">details</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  width: 1920px;
  height: 100%;
  font-family: PingFangSC, PingFangSC-Regular;
}
#nav {
  padding: 0;
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
