import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      // render函数返回值可以是  一个 HTML 标签名、组件选项对象  /  一个与模板中属性对应的数据对象。可选。 / 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成
      return h(Alert, {
        props: props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];
  console.log('el', alert.$slots)
  return {
    add (noticeProps) {
      alert.add(noticeProps);
    },
    remove (name) {
      alert.remove(name);
    }
  }
};

// let messageInstance;

// function getMessageInstance () {
//   messageInstance = messageInstance || Notification.newInstance();
//   return messageInstance;
// }

// function notice({ duration = 1.5, content = '' }) {
//   let instance = getMessageInstance();
//   console.log('content',content)
//   instance.add({
//     content: content,
//     duration: duration
//   });
// }

export default Alert;