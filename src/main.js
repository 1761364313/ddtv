import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
Vue.use(VueTouchRipple, {
  // default global options
  color: '#000',
  opacity: 0.2,
  speed: 1,
  transition: 'ease'
})
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('common/img/lanzlod.png')
})

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
