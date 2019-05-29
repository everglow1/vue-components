<template>
  <form action="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'iFrom',
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      fields: [] // 缓存所有 FormItem 实例
    }
  },
  props: {
    // 数据对象，在校验或重置时会访问该数据对象下对应的表单数据
    model: {
      type: Object,
      default() {
        return {}
      }
    },
    // 表单验证规则
    rules: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    this.$on('on-form-item-add', (field) => {
      if(field) {
        this.field.push(field)
      }
    })
    this.$on('on-form-item-remove', (field) => {
      if(field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields() {
      console.log('我是重置数据', this.fields)
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    // 公开方法：全部校验数据，支持 Promise
    validate(callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          });
        });
      });
    }
  }
}
</script>

<style>

</style>
