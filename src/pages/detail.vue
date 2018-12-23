<template>
    <div class="detail">
      <header-bar></header-bar>
      <div class="content">
        <div class="top">
          <img :src="data.class_img" alt="">
        </div>
        <div class="info">
          <h2 class="title">{{data.class_name}}</h2>
          <p class="lab"><span>学习人数{{data.apply_count}}</span><span>课时数:{{data.lesson_count}}</span></p>
          <p class="price green" v-if="data.discount_price===0">免费报名</p>
          <p class="price red" v-else>￥{{data.discount_price}}</p>
        </div>


      </div>
    </div>
</template>
<script>
  import HeaderBar from 'components/base/header-bar/header-bar'
  import {getDetail} from "../api/detail";

  export default {
        name: "detail",
        components:{
          HeaderBar
        },
        data(){
          return{
            id:'',
            data:[]
          }
        },
      created(){
          this._getId()
          setTimeout(()=>{
            this._getDetail(this.id)
          },20)
      },
        methods:{
          _getId(){
            this.id = this.$route.params.id
          },
          _getDetail(id){
            getDetail(id).then(res=>{
              if (res.errcode===0){
                this.data=res.data
              }
            })
          }
        }
    }


</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .detail
    position fixed
    z-index $z-index50
    width 100%
    height 100vh
    top:0
    padding-top 3.5rem
    background $color-background
    .content
      background #fff
      img
        width 100%
      .info
        padding 20px
        p
          line-height 2.5rem
          &.lab>span
            margin-right 20px
          &.price
            font-size $font-size-medium-x
            color $color-sub-theme
            &.green
              color $color-lab-theme

        .title
          font-size $font-size-medium-x
          no-wrap()
          color $color-title

</style>
