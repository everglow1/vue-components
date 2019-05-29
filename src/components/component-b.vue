<template>
  <div>
    <p>我是组件B</p>
  </div>
</template>

<script>
export default {
  inject: ['app'],
  created() {
    // console.log('inject', this.app.handleClick)
  },
  mounted() {
    // console.log('component-b', this.app)
  },
}
</script>

<style>

</style>
