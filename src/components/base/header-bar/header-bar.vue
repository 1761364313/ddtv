<template>
  <div class="header-box">
    <div class="header">
      <div class="fl logo">
        <router-link to="/" class="logo-bar">
          <img src="./logo.png" alt="">
        </router-link>
      </div>
      <div class="fr search" @click="slideDown" ref="searchBar">
        <span class="iconfont icon-sousuo1" ref="icon"></span>
        <input type="search" class="search-input" placeholder="搜索课程" ref="search" >
        <span class="back" v-show="flags" @click.stop="slideUp">取消</span>
      </div>
    </div>
    <transition name="slide-down" >
      <search-list v-show="flags" class="list"></search-list>
    </transition>
  </div>
</template>
i
<script>
  import SearchList from '../search-list/search-list'
  import {addClass} from "common/js/dom";

  export default {

    name: "headerBar",
    components:{
      SearchList
    },
    data(){
      return {
        flags:false
      }
    },
    methods:{
      slideDown(){
          this.flags=true
          this.$refs.icon.style.left='3.5rem'
          this.$refs.search.style.textAlign='left'
          this.$refs.search.style.paddingLeft='2.2rem'
          this.$refs.search.style.width='90%'
      },
      slideUp(){
        this.flags=!this.flags
        this.$refs.icon.style.left='42%'
        this.$refs.search.style.textAlign='center'
        this.$refs.search.style.width='100%'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header-box
    position fixed
    top: 0
    left 0
    width 100%
    z-index $z-index40

    .header
      width 100%
      height 3.5rem
      padding .5rem
      display flex
      flex-direction row
      box-sizing border-box
      background $color-background-bar
      box-shadow 0 1px 4px 2px rgba(0,0,0,.1)
      .logo
        width 2.5rem
        .logo-bar
          display block
          width 100%
          img
            width 100%
      .search
        width calc(100% - 2.5rem)
        overflow hidden
        display flex
        flex-wrap nowrap
        align-items center
        .icon-sousuo1
          position absolute
          left 39%
          top 1rem
          font-size 1.6rem
        input
          height 2.5rem
          width 100%
          padding .5rem
          border-radius $round-theme-l
          text-align center
        .back
          text-align right
          flex 1
          font-size 1.2rem
          height 2.5rem
          line-height 2.5rem
          display block

  .slide-down-enter-active,.slide-down-leave-active
    transition all .3s ease-out

  .slide-down-enter,.slide-down-leave-to
    transform translateY(-100%)





</style>
