// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SubTest from '../../../components/SubTest'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<sub-test/>',
  components: { SubTest }
})
