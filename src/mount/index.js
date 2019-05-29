import Vue from 'vue'

// 创建构造器
const AlertComponent = Vue.extend({
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: 'Vue'
    }
  }
})

/**
 * 挂载方式有三种，这是其中一种。
 */
// 调用 $mount 方法对组件进行了手动渲染,还未挂载， component为Vue组件实例,可访问$el属性。
const component = new AlertComponent().$mount()

document.body.appendChild(component.$el)