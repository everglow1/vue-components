import Vue from 'vue'
import toast from './toast.vue'

function Toast() {
  const ToastComponent = Vue.extend({
    components: {toast},
    template: `<toast ref="toasts" :message="message" :duration="duration"></toast>`,
    props: {
      message: {
        type: String
      },
      duration: {
        type: Number
      }
    },
    methods: {
      open() {
        this.$nextTick(() => {
          this.$refs.toasts.open()
        })
      }
    }
  })
  // 在文档之外渲染
  const vm = new ToastComponent().$mount()
  document.body.appendChild(vm.$el)

  Vue.prototype.$toast = function(options) {
    if(typeof options === 'string') {
      vm.message = options.message
    } else {
      vm.message = options && options.message || 'www'
      vm.duration = options && options.duration || 10000
      vm.open()
    }
  }
}


export default Toast