<script setup>
import { ref } from 'vue';

const string = ref('abcabcbb');
const max = ref(0);
const left = ref(0);
const right = ref(0);
const hash = ref(new Map());

function next() {
  if (left.value < string.value.length && right.value < string.value.length) {
    if (left.value !== right.value && hash.value.has(string.value[right.value])) {
      left.value = Math.max(left.value, hash.value.get(string.value[right.value]) + 1);
    }
    hash.value.set(string.value[right.value], right.value);
    max.value = Math.max(max.value, right.value - left.value + 1);
    right.value += 1;
  }
}

function reset() {
  max.value = 0;
  left.value = 0;
  right.value = 0;
  hash.value = new Map();
}
</script>

<template>
  <div style="padding-top:14px">
    <div>字符串: {{ string }}</div>
    <div>最长子串的长度: {{ max }}</div>
    <div>左指针: {{ left }}</div>
    <div>右指针: {{ right }}</div>
    <div>哈希表: {{ JSON.stringify(Array.from(hash)) }}</div>
    <div style="padding: 24px">
      <span v-for="(s, i) in string">
        {{ right !== left && left === i ? '(' : '' }}
        {{ s }}
        {{ right === i + 1 ? ')' : '' }}
      </span>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
