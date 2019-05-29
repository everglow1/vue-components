import VueRouter from 'vue-router'
import IForm from '../components/v-form/i-form.vue'
import IFormItem from '../components/v-form/i-form-item.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/ifrom'
    },
    {
      path: '/ifrom',
      component: IForm,
      name: 'i-from'
    },
    {
      path: '/ifromitem',
      component: IFormItem,
      name: 'i-from-item'
    }
  ]
})

export function getRouter() {
  return router
}