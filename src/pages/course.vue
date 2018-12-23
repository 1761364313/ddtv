<template>
  <div class="course">
    <scroll ref="scroll"
            :data="courseList"
            :scrollbar="scrollbar"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            :startY="parseInt(startY)"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
    >

      <div>
        <ul class="tab">
          <li v-for="(item,index) in tab" @click="selectItem(index)" :class="{'act':isAct(index)}">{{item}}</li>
        </ul>
        <div v-if="errcode===0">
          <course-list :data="courseList" @selects="select" :type="3"></course-list>
        </div>

      </div>
      <div class="loading-container" v-if="errcode===1">
        <loading></loading>
      </div>
    </scroll>



  </div>
</template>
<script>
  const tab = ['学习中', '已学玩', '已过期']
  import Scroll from '../components/base/scroll/scroll'
  import CourseList from '../components/base/course-list/course-list'
  import {getMyCourseList} from "../api/course";
  import { ease } from '../common/js/ease'
  import Loading from '../components/base/loading/loading'
  let INDEX=1;
  export default {
    name: "course",
    components:{
      Scroll,
      CourseList,
      Loading
    },
    data() {
      return {
        errcode:1,
        tab: tab,
        index: 0,
        status:1,
        courseList:[],
        scrollbar: false,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '--加载更多--',
        pullUpLoadNoMoreTxt: '--没有更多数据了--',
        startY: 0,
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
      }
    },
    watch: {
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      },
      courseList(newData){
        return newData
      }
    },
    computed: {
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    created() {
      this._getMyCourseList()
    },
    methods: {
      select(item){
        this.$router.push({path:`/detail/${item.class_id?item.class_id:item.id}`})
        console.log(item.class_id)
      },
      isAct(index) {
        return this.index === index
      },
      selectItem(index) {
        this.index = index
        this.status=index+1
            getMyCourseList({status: this.status}).then(res=>{
          if (res.errcode===0){
            this.courseList=res.list
          }
        })
      },
      _getMyCourseList(){
        getMyCourseList().then(res=>{
          if (res.errcode===0){
            this.courseList=res.list
            this.errcode=res.errcode
          }
        })
      },
      scrollTo() {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
      },
      onPullingDown() {
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          //下拉刷新
          this.$router.go(0)
        }, 2000)
      },
      onPullingUp() {
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
            // 如果有新数据
            let newPage = []
            INDEX++;
            getMyCourseList({index:INDEX,status:this.status}).then(res=>{
              if (res.errcode===0){
                newPage=res.list;
                if (res.list.length>0){
                  this.courseList=this.courseList.concat(newPage)
                } else {
                  // 如果没有新数据
                  this.$refs.scroll.forceUpdate()
                }
              }
            })
        }, 300)
      },
      rebuildScroll() {
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .course
    width 100%
    position fixed
    top: 3.5rem
    height calc(100vh - 2 * 3.5rem)
    background #fff
    .tab
      display flex
      height 3.5rem
      flex-direction row
      justify-content center
      align-items center
      li
        flex 1
        text-align center
        font-size $font-size-medium
        &.act
          color $color-theme
          position relative
          dot()
  .loading-container
    position: absolute
    width: 100%
    padding-top: 50%
  //transform: translateY(-50%)

</style>
