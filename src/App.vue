<template>
  <div id="app">
    <header-bar></header-bar>
    <nav-bar></nav-bar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import HeaderBar from './components/base/header-bar/header-bar'
  import NavBar from './components/base/nav-bar/nav-bar'

  export default {
    name: 'App',
    components:{
      HeaderBar,
      NavBar
    }
  }
</script>

<style>

</style>
