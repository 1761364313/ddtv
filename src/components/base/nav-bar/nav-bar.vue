<template>
  <div class="nav-bar">
    <nav class="nav-list">
      <ul class="nav-item">
        <li>
          <router-link to="/home"><span class="iconfont icon-zhuye"></span><span>主页</span></router-link>
        </li>
        <li>
          <router-link to="/classification"><span class="iconfont icon-leimupinleifenleileibie"></span><span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link to="/course"><span class="iconfont icon-xinrenkecheng"></span><span>我的课程</span></router-link>
        </li>
        <li>
          <router-link to="/user"><span class="iconfont icon-wode"></span><span>我的</span></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .nav-list
    position fixed
    width 100%
    height 3.5rem
    left 0
    bottom 0
    background #fff
    box-shadow 0 -1px 4px 2px rgba(0, 0, 0, .1)
    z-index $z-index30
    .nav-item
      display flex
      flex-direction row
      justify-content center
      li
        flex 1
        text-align center
        padding-top .3rem
        .router-link-active
          color $color-theme
        span
          display: block
          line-height 1.5rem
          font-weight 500


</style>
