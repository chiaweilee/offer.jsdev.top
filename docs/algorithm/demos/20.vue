<script setup>
import { ref } from 'vue';

const string = '([{}[]])';
const hash = { ')': '(', ']': '[', '}': '{' };

const ans = ref(undefined);
const stack = ref([]);
const i = ref(-1);

function next() {
  if (i.value >= string.length - 1) return;
  i.value++;
  const w = string[i.value];
  if (hash[w]) {
    const top = stack.value.pop();
    if (top === undefined || top !== hash[w]) {
      ans.value = false;
    }
  } else {
    stack.value.push(w);
  }
  if (i.value >= string.length - 1) ans.value = stack.value.length === 0;
}

function reset() {
  stack.value = [];
  i.value = -1;
  ans.value = undefined;
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>判断结果: {{ ans }}</div>
    <div>栈: {{ stack }}</div>
    <div style="padding: 24px">
      <span v-for="(s, z) in string">
        <span
          v-if="z === i"
          style="
            display: inline-block;
            width: 8px;
            margin-right: 8px;
            text-align: center;
            border-bottom: 1px solid var(--vp-custom-block-info-text);
          "
          >{{ s }}</span
        >
        <span
          v-else
          style="display: inline-block; width: 8px; margin-right: 8px; text-align: center"
          >{{ s }}</span
        >
      </span>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
