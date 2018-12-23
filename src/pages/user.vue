<template>
  <div class="center">
    <ul>
      <li class="item-list name tp">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/info">
            <img src="../common/img/timg.jpg" class="left" alt="">
            <span class="title">程序猿***</span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list line">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/ord">
            <span class="iconfont icon-weibiaoti-"></span>
            <span class="title">订单</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list line">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/coll">
            <span class="iconfont icon-shoucang4"></span>
            <span class="title">收藏</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list line">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/coin">
            <span class="iconfont icon-qian"></span>
            <span class="title">刀币</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list tp">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/shop">
            <span class="iconfont icon-shangcheng"></span>
            <span class="title">商城</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list line">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/notice">
            <span class="iconfont icon-msg"></span>
            <span class="title">消息</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
      <li class="item-list ">
        <touch-ripple class="touch">
          <router-link class="link" to="/user/setting">
            <span class="iconfont icon-shezhi"></span>
            <span class="title">设置</span>
            <span class="right iconfont icon-gengduo2"></span>
          </router-link>
        </touch-ripple>
      </li>
    </ul>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .touch
    width 100%
  .center
    position fixed
    top 4.5rem
    height calc(100vh - 3.5 * 2rem )
    width 100%
    z-index $z-index50
    .item-list
      width 100%
      background #fff
      display flex
      box-sizing border-box
      &.tp
        margin-bottom 1rem
      &.line
        border-bottom 1px solid #eee
      &.name
        height auto
        line-height 5rem
     .link
        padding 10px
        display flex
        align-items center
        position relative
        img
          width 50px
          height 50px
          float left
        span
          vertical-align
          float left
          margin-left 10px
          &.title
            font-size $font-size-medium
          &.right
             position absolute
             display block
             right 10px
             color $color-c


  .slide-enter-active,.slide-leave-active
    transition all .3s ease-in-out
  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)






</style>
