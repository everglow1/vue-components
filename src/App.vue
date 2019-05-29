<template>
  <div id="app">
    <!-- form表单 -->
     <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>

    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
// Vue.js 的组件渲染顺序是由内而外的，所以 FormItem 要先于 Form 渲染
import iForm from './components/v-form/i-form.vue'
import iFormItem from './components/v-form/i-form-item.vue'
import iInput from './components/v-form/i-input.vue'

export default {
  name: 'App',
  provide() {
    return {
      app: this
    }
  },
  data() {
    return {
      userInfo: {
        name: 'Tom',
        age: 19,
        sex: '男'
      },
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    }
  },
  components: {
    // HelloWorld,
    // VButton,
    // componentA,
    // // componentB
    // VDispatch
    iForm,
    iFormItem,
    iInput
  },
  mounted() {
    
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
