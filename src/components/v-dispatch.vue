<template>
  <div>
    <button @click="handleClick">向下触发事件</button>
    <v-broadcast></v-broadcast>
  </div>
</template>

<script>
import Emitter from '../common/emitter.js'
import VBroadcast from './v-broadcast'

export default {
  name: 'v-dispatch',
  mixins: [Emitter],
  components: {
    VBroadcast
  },
  methods: {
    handleClick() {
      console.log('我是dispatch组件')
      this.broadcast('v-broadcast', 'on-message', 'hello vue.js')
    }
  }
}
</script>

<style>

</style>
