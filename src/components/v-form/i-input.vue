<template>
  <input class="i-input" type="text" :value="currentValue" @input="handleInput" @blur="handleBlur">
</template>

<script>
import Emitter from '../../mixins/emitter.js'

export default {
  name: 'iInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
      console.log('currentValue', this.currentValue)
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
      console.log('currentValue22', this.currentValue)
    }
  }
}
</script>

<style scoped>
  .i-input {
    width: 200px;
    height: 20px;
    outline: none;
    border: 1px solid black;
  }
</style>
