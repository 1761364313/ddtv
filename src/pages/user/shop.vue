<template>
  <div class="coin">
    <back-bar :title="title"></back-bar>
    <h2 style="padding: 20px"> welcome to shop ~~</h2>
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
        title:'积分商城'
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
