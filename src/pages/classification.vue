<template>
  <div class="box">
    <div class="aside">
      <ul>
        <li v-for="(item ,index) in title" @click="selectItem(index)" :class="{'act':isAct(index)}">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li class="list" v-for="item in list">
          <touch-ripple class="touch">
            <a :href="item.remark===''?'#':item.remark">{{item.name}}</a>
          </touch-ripple>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {addClass} from "../common/js/dom";

  const title = ['技术分类', '职位分类', '拓展分类']
  import {getSkillNavList} from "../api/home";
  import index from "../router";

  export default {
    name: "class",
    data() {
      return {
        title: title,
        index: 0,
        list: []
      }
    },
    created() {
      this._getSkillNavList()
    },

    methods: {
      selectItem(index) {
        this.index = index
        this._getSkillNavList(index)
      },
      isAct(index) {
        return this.index === index
      },
      _getSkillNavList(index = 0) {
        getSkillNavList().then(res => {
          if (res.errcode === 0) {
            this.list = res.list[index].childcatelist;
          }
        })
      }
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .box
    position fixed
    top 3.5rem
    width 100%
    display flex
    .aside
      width 30%
      background #ebebeb
      height 100vh
      box-sizing border-box
      li
        padding 1rem
        text-align center
        border-bottom 1px solid #ccc
        line-height 2rem
        &:last-child
          border-bottom 0
        &.act
          background #f4f4f4
    .content
      width 70%
      padding 10px
      box-sizing border-box
      ul
        display flex
        flex-direction row
        flex-wrap wrap
        li
          width 50%
          text-align center
          line-height 3rem
          padding .5rem
          box-sizing border-box
          .touch
            width 100%
            a
              display block
              border 1px solid $color-c
              border-radius $round-theme
              box-sizing border-box
              no-wrap()


</style>
