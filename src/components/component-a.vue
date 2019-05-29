<template>
  <div>
    <p @click="changeUserInfo">我是组件A</p>
    <component-b></component-b>
  </div>
</template>

<script>
import componentB from './component-b'
export default {
  name: 'component-a',
  components: {
    componentB
  },
  data() {
    return {
      title: '我是头部'
    }
  },
  // inject: ['app'],
  created() {
    console.log('inject', this.app)
  },
  mounted() {
  },
  methods: {
    sayHello() {
      console.log('hello')
    },
    changeUserInfo() {
      console.log('this.app.userInfo2', this.app.userInfo)
      console.log('2222')
      this.app.setUserInfo()
      console.log('this.app.userInfo', this.app.userInfo)
    }
  }
}
</script>

<style>

</style>
