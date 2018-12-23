<template>
    <div class="back">
      <div class="item ">
        <h2 class="title">
          <span class="icon iconfont icon-fanhui" @click="back"></span>
          {{title}}
        </h2>
      </div>
    </div>
</template>

<script>
    export default {
        name: "back-bar",
        props:{
          title:{
            type:String,
            default:''
          }
        },
        methods:{
          back(){
            this.$router.back()
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
.back
  height 3.5rem
  line-height 3.5rem
  padding-left 10px
  box-show-down()
  background #fff
  h2
    text-align center
    position relative
    font-size $font-size-medium-x
    span
      display block
      position absolute
      left 0



</style>
