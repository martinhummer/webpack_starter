import Vue from 'vue'
import modal from 'components/modal.vue'
import custom from 'components/custom.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  components: {
    modal, custom
  }
})
