<template>
  <div class="card content-box">
    <span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
    <el-button type="primary" v-throttle="throttleObj">节流按钮 (每隔1S秒后执行)</el-button>
  </div>
</template>

<script setup lang="ts" name="throttleDirect">
import { ElMessage } from "element-plus";
const throttleClick = () => {
  ElMessage.success("我是节流按钮触发的事件 🍍🍓🍌");
};
const throttleObj = {
  tiem: 1000,
  callback: throttleClick
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
