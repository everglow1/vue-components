<template>
  <div></div>
</template>

<script>
export default {
  name: 'v-broadcast',
  methods: {
    showMessage (text) {
      console.log('111111')
      window.alert(text);
    }
  },
  mounted() {
    this.$on('on-meaasge', this.showMessage)
    // console.log(this.$on('on-meaasge', this.showMessage))
  }
}
</script>

<style>

</style>
