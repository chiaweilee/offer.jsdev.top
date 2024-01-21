<script setup>
import { ref } from 'vue';

const n = 8;
const dp = ref([1, 1]);
const fn1 = ref(1);
const fn2 = ref(0);
const fn = ref(1);
const i = ref(1);

function next() {
  if (i.value < n) {
    fn2.value = fn1.value;
    fn1.value = fn.value;
    dp.value[i - 1] = fn1.value;
    fn.value = fn2.value + fn1.value;
    dp.value.push(fn.value);
    i.value++;
  }
}

function reset() {
  dp.value = [1, 1];
  fn1.value = 1;
  fn2.value = 0;
  fn.value = 1;
  i.value = 1;
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>阶数：{{ n }}</div>
    <div>f({{ i - 2 }}): {{ fn2 }}</div>
    <div>f({{ i - 1 }}): {{ fn1 }}</div>
    <div>f({{ i }}): {{ fn }}</div>
    <div>指针: {{ i }}</div>
    <div style="padding: 24px">
      <span>[</span>
      <span v-for="(s, z) in dp">
        {{ z === i ? '(' : '' }}
        {{ s }}
        {{ z === i ? ')' : '' }}
        {{ z !== dp.length - 1 ? ',' : '' }}
      </span>
      <span>]</span>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
