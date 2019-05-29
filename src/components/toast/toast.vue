<template>
  <div class="toast-component" v-if="visible">
    <div class="toast-component-container">
      <div class="toast-component-msg" v-html="message"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast'
}
</script>

<style>
.toast-component {
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100000;
}
.toast-component-container {
    width: auto;
    text-align: center;
}
.toast-component-msg {
    max-width: 500px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    opacity: 0.9;
    color: #FFFFFF;
    background: #2F3337;
    border-radius: 10px;
    width: auto;
    display: inline-block;
    border: none;
    line-height: 50px;
    padding: 40px 40px;
}
</style>
