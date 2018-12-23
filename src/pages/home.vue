<template>
  <div class="home">
    <scroll ref="scroll" class="recommend-content" :data="free">
      <div>
        <div class="slider-wrapper" v-if="banner.length>0">
          <banner class="banner">
            <div v-for="item in banner" class="slider-item" ref="banner">
              <a :href="item.link" class="banner-link" @load="imgLoad" :style="{background:'url('+item.imglink+')'}">
              </a>
            </div>
          </banner>
        </div>
        <div class="course-box" v-if="live.length>0&&free.length>0">
          <h2 class="title">精品直播</h2>
          <course-list :data="live" :type="1" @selects="select"></course-list>
          <div class="line"></div>
          <h2 class="title">免费好课</h2>
          <course-list :data="free" :type="2" @selects="select"></course-list>
          <div class="line"></div>
          <h2 class="title">技术分类</h2>
          <div v-if="navList.length>0">
            <navigator :data="navList">

            </navigator>
          </div>
        </div>
      </div>
      <div class="loading-container" v-if="!banner.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
  import Banner from '../components/base/banner/banner'
  import {getBannerList, getTodayLivePlayer, getFreeList,getSkillNavList} from "../api/home";
  import CourseList from '../components/base/course-list/course-list'
  import Scroll from '../components/base/scroll/scroll'
  import navigator from './navigator'
  import Loading from '../components/base/loading/loading'
  export default {
    name: "index",
    components: {
      Banner,
      CourseList,
      Scroll,
      navigator,
      Loading
    },
    data() {
      return {
        banner: [],
        live: [],
        free: [],
        navList:[]
      }
    },
    created() {
      this._getBannerList()
      this._getTodayLivePlayer()
      this._getFreeList()
      this._getSkillNavList()
    },
    mounted() {
      this.$nextTick(() => {
        this.bannerWidth()
      })
    },
    methods: {
      select(item){
        this.$router.push({path:`/detail/${item.class_id?item.class_id:item.id}`})
      },
      _getBannerList() {
        getBannerList().then(res => {
          if (res.errcode === 0) {
            this.banner = res.list;
          }
        })
      },
      bannerWidth() {
        if (this.banner.length > 0) {
          this.$refs.banner.style.width = `${window.screen.availWidth}px`
        }
      },
      imgLoad(){
        if (!this.checkloaded) {
          this.chechloaded=true
          this.$refs.srcoll.refresh()
        }
      },
      _getTodayLivePlayer() {
        getTodayLivePlayer().then(res => {
          if (res.errcode === 0) {
            this.live = res.list

          }
        })
      },
      _getFreeList() {
        getFreeList().then(res => {
          if (res.errcode === 0) {
            this.free = res.list
          }
        })
      },
      _getSkillNavList(){
        getSkillNavList().then(res=>{
          if (res.errcode===0){
            this.navList=res.list[0].childcatelist
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .home
    position fixed
    width 100%
    top 3.5rem
    .recommend-content
      height: calc(100vh - 3.5rem - 3.5rem)
      overflow: hidden
      .slider-wrapper
        width 100%
        position relative
        overflow hidden
        .slider-item
          height 12rem
          .banner-link
            background-position: center center !important
            background-repeat no-repeat !important
            height 12rem
            background-size cover !important
      .course-box
        width 100%
        .line
          height 1rem
          border-bottom 1px solid rgba(0,0,0,.02)
          border-top 1px solid rgba(0,0,0,.02)
        .title
          font-size $font-size-large
          color $color-title
          line-height 3rem
          text-align center
          background #fff
          padding-top .5rem
  .loading-container
    position: absolute
    width: 100%
    padding-top: 50%
    //transform: translateY(-50%)
</style>
