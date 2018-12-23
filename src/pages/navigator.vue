<template>
  <div slot="content">
    <div class="navigator-container" ref="viewport">
      <navigator :navList="navList" @change="change" :currentTabIndex="currentTabIndex">
      </navigator>
    </div>
    <div>
      <course-list :data="course"  @selects="select" :type="type"></course-list>
    </div>
  </div>
</template>
<script>
  import Navigator from '../components/base/navigator/navigator'
  import {Skill} from "../common/js/skill";
  import CourseList from '../components/base/course-list/course-list'
  import {getSkillList} from "../api/home";

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        type:2,
        navList: [],
        course: [],
        currentTabIndex: 0 // 当前默认tab
      }
    },
    created() {
      this._normalizeSinger(this.data)
      this._getSkillList()
    },
    methods: {
      //数据格式整理
      _normalizeSinger(list) {
        let arr = [];
        list.forEach((item, index) => {
          arr.push(new Skill({
            id: index,
            name: item.name,
            category_id: item.category_id,
            parent_id: item.parent_id
          }))
        });
        this.navList = arr
      },
      select(item){
        this.$router.push({path:`/detail/${item.class_id?item.class_id:item.id}`})
      },
      change(item) {
        if (item !== undefined) {
          this.currentTabIndex = item.id
          this._getSkillList(item.category_id)
        }
      },
      _getSkillList(id){
        getSkillList(id).then(res=>{
          if (res.errcode===0){
            this.course=res.list
          }
        })
      }
    },
    components: {
      Navigator,
      CourseList
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus' type="text/stylus">
  .navigator-view
    .navigator-container
      height: 52px;
      background: #fff;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .12)
      overflow: hidden;
    .tab-render-content
      position: absolute;
      left: 0;
      top: 50px;
      right: 0;
      bottom: 0;
      margin-top: 15px;
      padding: 15px;
      background: #fff;
      line-height: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
</style>
