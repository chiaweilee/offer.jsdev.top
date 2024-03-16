<script setup>
import { ref } from 'vue';

const s = 'babad';
const n = s.length;
const res = ref('');
const dp = ref(Array.from(new Array(n), () => new Array(n).fill('-')));
const i = ref(n - 1);

function next() {
  if (i.value >= 0) {
    for (let j = i.value; j < n; j++) {
      dp.value[i.value][j] =
        s[i.value] == s[j] && (j - i.value < 2 || dp.value[i.value + 1][j - 1]);
      if (dp.value[i.value][j] && j - i.value + 1 > res.value.length) {
        res.value = s.substring(i.value, j + 1);
      }
    }
    i.value--;
  }
}

function reset() {
  res.value = '';
  dp.value = Array.from(new Array(n), () => new Array(n).fill('-'));
  i.value = n - 1;
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>字符串: {{ s }}</div>
    <div>答案: {{ res }}</div>
    <div style="padding: 24px">
      <span v-for="(r, i) in dp">
        <div>
          <span
            v-for="(c, j) in r"
            :style="{
              display: 'inline-block',
              width: '100px',
              color: c === true ? 'green' : c === false ? 'red' : 'inherit',
            }"
          >
            <span v-if="i <= j">{{ i }},{{ j }} {{ s.substring(i, j + 1) }}</span>
            <span v-else>-</span>
          </span>
        </div>
      </span>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
