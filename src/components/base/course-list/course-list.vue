<template>
  <div class="list">
    <ul v-if="type===1" class="row">
      <li class="list-item" v-for="item in data" @click="select(item)">
        <touch-ripple class="touch">
          <div class="box">
            <div class="left"><img  v-lazy="item.ClassImg?item.ClassImg:item.class_img" alt=""></div>
            <div class="right">
              <h2 class="title">{{item.ClassName?item.ClassName:item.class_name}}</h2>
              <p class="org-name">{{item.OrgName}}</p>
              <p class="time">直播时间:<span class="lab">{{item.opentime_start}}</span></p>
            </div>
          </div>
        </touch-ripple>
      </li>
      <li v-if="data.length===0" class="err-list">
        <div class="err">
          <img src="../../../common/img/footer-logo.png" alt="">
          <span>暂无课程信息</span>
        </div>
      </li>
    </ul>
    <ul v-if="type===3" class="row">
      <li class="list-item" v-for="item in data" @click="select(item)">
        <touch-ripple class="touch">
          <div class="box">
            <div class="left"><img  v-lazy="item.ClassImg?item.ClassImg:item.class_img" alt=""></div>
            <div class="right">
              <h2 class="title">{{item.ClassName?item.ClassName:item.class_name}}</h2>
              <p class="org-name">{{item.OrgName}}</p>
              <p class="time">已学习:{{item.LearnedLesson}}课时</p>
            </div>
          </div>
        </touch-ripple>
      </li>
      <li v-if="data.length===0" class="err-list">
        <div class="err">
          <img src="../../../common/img/footer-logo.png" alt="">
          <span>暂无课程信息</span>
        </div>
      </li>
    </ul>
    <ul v-if="type===2" class="col">
      <li class="list-item" v-for="item in data" @click="select(item)">
        <touch-ripple class="touch">
          <div class="box">
            <div class="top"><img v-lazy="item.class_img" alt=""></div>
            <div class="bottom">
              <h2 class="title">{{item.class_name}}</h2>
              <div class="lab">
                <span class="left blue" v-if="item.discount_price!==0&&item.industry===4">技成会员课</span>
                <span class="left green" v-if="item.discount_price===0">免费</span>
                <span class="left red" v-if="item.discount_price!==0&&item.industry!==4">￥{{item.discount_price}}</span>
                <span class="right">{{item.OrgName}}</span>
              </div>
            </div>
          </div>
        </touch-ripple>
      </li>
      <li v-if="data.length===0" class="err-list">
        <div class="err">
          <img src="../../../common/img/footer-logo.png" alt="">
          <span>暂无课程信息</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "course-list",
    props: {
      data: {
        type: Array,
        default: []
      },
      type: {
        type: Number,
        default: 1
      }
    },
    methods:{
      select(item){
        this.$emit('selects',item)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .row
    background #fff
    width 100%
    margin-bottom .5 rempx
    .list-item
      width 100%
      padding 0 .5rem
      box-sizing border-box
      .box
        display flex
        height auto
        overflow hidden
        flex-direction row
        flex-wrap nowrap
        justify-content center
        padding 1rem 0
        border-bottom 1px solid #ebebeb
        .left
          flex 1
          overflow hidden
          img
            width 100%
            border-radius $round-theme
        .right
          flex 1
          display flex
          flex-direction column
          justify-content center
          padding .5rem 0 .5rem .5rem
          min-width 50%
          .title
            line-height 1.5rem
            font-size $font-size-medium
            color $color-title
            height 3.5rem
          .org-name
            font-size $font-size-small
            color $color-title-s
            line-height 2rem
            no-wrap()

  .col
    background #fff
    width 100%
    margin-bottom .5 rempx
    display flex
    flex-wrap wrap
    .list-item
      width 50%
      box-sizing border-box
      padding .5rem
      margin-bottom .5rem
      .box
        display flex
        height auto
        overflow hidden
        flex-direction column
        flex-wrap nowrap
        justify-content center
        .top
           width 100%
           img
            width 100%
            border-radius $round-theme
        .bottom
          flex 1
          padding 0 .2rem
          .title
            margin-top .5rem
            line-height 1.5rem
            font-size $font-size-medium
            color $color-title
            no-wrap()
          .lab
            margin-top .5rem
            display flex
            flex-direction row
            .left
              width 50%
              flex 1
              &.blue
                color: $color-theme
              &.green
                color :$color-lab-theme
              &.red
                color:$color-sub-theme
            .right
              width 50%
              flex 1
              font-size $font-size-small
              color $color-7
              no-wrap()
              text-align right

  .list-item:last-child a
    border-bottom 0
  .touch
    width 100%
  .err-list
    flex 1
    .err
      width 60%
      margin auto
      text-align center
      padding 20px
      img
        width 60%
        display block
        margin auto
      span
        color $color-c
        font-size $font-size-small-s
        line-height 2.5rem
</style>
