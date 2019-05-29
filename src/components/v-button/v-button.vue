<template>
  <button :class="'i-button-' + size" :disabled="disabled" @click="handleClick">
    <slot>提交</slot>
    <!-- 具名插槽 -->
    <slot name="icon"></slot>
  </button>
</template>

<script>
function oneOf(value, validlist) {
  for(let i = 0; i < validlist.length; i++) {
    if(value === validlist[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'v-button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    size: {
      // 自定义校验
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('on-click', event.layerX)
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
