<template>
  <div class="coin">
    <back-bar :title="title"></back-bar>
    <h2 style="padding: 20px"> this is collect pages</h2>
  </div>
</template>

<script>
  import BackBar from 'components/base/back-bar/back-bar'
  export default {
    name: "coin",
    components:{
      BackBar
    },
    data(){
      return{
        title:'我的收藏'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .coin
    position fixed
    top 0
    z-index $z-index50
    width 100%
    height 100vh
    background $color-background
</style>
