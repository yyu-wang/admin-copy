/**
 * v-debounce
 * 按钮防抖指令，可自行扩展至input
 * 接收参数：tiem 时间 callback 回调函数
 * Object{
 * tiem:2000,
 * callback
 * }
 */
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
  __handleClick__: () => any;
}
const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    console.log("binding", binding);

    if (typeof binding.value.callback !== "function") {
      throw "请在防抖中绑定回调函数";
    }
    if (typeof binding.value.tiem !== "number") {
      throw "请在防抖中绑定数字";
    }
    let timer: NodeJS.Timeout | null = null;
    el.__handleClick__ = function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value.callback();
      }, binding.value.tiem);
    };
    el.addEventListener("click", el.__handleClick__);
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener("click", el.__handleClick__);
  }
};

export default debounce;
