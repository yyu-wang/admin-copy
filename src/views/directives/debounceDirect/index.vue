<template>
  <div class="card content-box">
    <span class="text">防抖指令 🍇🍇🍇🍓🍓🍓</span>
    <el-button type="primary" v-debounce="debounceObj">防抖按钮</el-button>
  </div>
</template>

<script setup lang="ts" name="debounceDirect">
import { ElMessage } from "element-plus";
const debounceClick = () => {
  ElMessage.success("我是防抖按钮触发的事件 🍍🍓🍌");
};

const debounceObj = {
  tiem: 1000,
  callback: debounceClick
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
