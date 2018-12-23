import Vue from 'vue'
import Router from 'vue-router'

const home = (resolve) => {
  import('../pages/home').then((module) => {
    resolve(module)
  })
}

const classification = (resolve) => {
  import('../pages/classification').then((module) => {
    resolve(module)
  })
}

const course = (resolve) => {
  import('../pages/course').then((module) => {
    resolve(module)
  })
}

const detail=(resolve)=>{
  import('../pages/detail').then((module)=>{
    resolve(module)
  })
}


const user=(resolve)=>{
  import('../pages/user').then((module)=>{
    resolve(module)
  })
}

const coin=(resolve)=>{
  import('../pages/user/coin').then((module)=>{
    resolve(module)
  })
}
const coll=(resolve)=>{
  import('../pages/user/coll').then((module)=>{
    resolve(module)
  })
}
const info=(resolve)=>{
  import('../pages/user/info').then((module)=>{
    resolve(module)
  })
}
const notice=(resolve)=>{
  import('../pages/user/notice').then((module)=>{
    resolve(module)
  })
}
const ord=(resolve)=>{
  import('../pages/user/ord').then((module)=>{
    resolve(module)
  })
}
const setting=(resolve)=>{
  import('../pages/user/setting').then((module)=>{
    resolve(module)
  })
}
const shop=(resolve)=>{
  import('../pages/user/shop').then((module)=>{
    resolve(module)
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    }, {
      path: '/',
      redirect: '/home'
    }, {
      path: '/classification',
      component: classification
    }, {
      path:'/course',
      component:course
    },{
      path:'/detail/:id',
      component:detail
    },{
      path:'/user',
      component:user,
      children:[
        {
          path:'coin',
          component:coin
        },
        {
          path:'coll',
          component:coll
        },
        {
          path:'info',
          component:info
        },
        {
          path:'notice',
          component:notice
        },
        {
          path:'ord',
          component:ord
        },
        {
          path:'setting',
          component:setting
        },
        {
          path:'shop',
          component:shop
        }
      ]
    }
  ]
})
