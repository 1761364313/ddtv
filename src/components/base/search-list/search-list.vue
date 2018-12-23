<template>
  <div class="search-list">
    <h2 class="title">热门搜索</h2>
    <ul>
      <li v-for="item in hotList" class="item-list">
        <touch-ripple class="touch">
          <mt-cell :title="item" is-link></mt-cell>
        </touch-ripple>
      </li>
    </ul>
    <div class="loading-container" v-show="!hotList.length>0">
      <loading></loading>
    </div>
  </div>
</template>
<script>
  import {getHotList} from "api/search";
  import Loading from 'base/loading/loading'

  export default {
    name: "search-list",
    components: {Loading},
    data() {
      return {
        hotList: []
      }
    },
    created() {
      this._getHotList()
    },
    methods: {
      _getHotList() {
        getHotList().then((res) => {
          if (res.errcode === 0) {
            this.hotList = res.list
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .search-list
    width 100%
    height 100vh
    background $color-background
    position absolute
    z-index -1
    .item-list
      height 4rem
    .title
      padding 1rem
      line-height 1.5rem
      font-size $font-size-medium-x
      .fr
        float right
        color $color-theme

  .touch
    width 100%

  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)


</style>
