<script setup>
import { ref } from 'vue';

const count = ref(0);
const i = ref(0);
const j = ref(-1);
const grid = ref([
  ['1', '0', '0', '1', '1'],
  ['0', '1', '0', '1', '0'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '1', '1'],
]);

function sink(i, j) {
  if (grid.value?.[i]?.[j] === '1') {
    grid.value[i][j] = '0';
    sink(i + 1, j);
    sink(i - 1, j);
    sink(i, j + 1);
    sink(i, j - 1);
  }
}

function next() {
  if (i.value <= grid.value.length - 1) {
    if (j.value < grid.value[0].length - 1) {
      j.value++;
    } else {
      i.value++;
      j.value = 0;
    }
    if (grid.value[i.value][j.value] === '1') {
      count.value++;
      sink(i.value, j.value);
    }
  }
}

function reset() {
  count.value = 0;
  i.value = 0;
  j.value = -1;
  grid.value = [
    ['1', '0', '0', '1', '1'],
    ['0', '1', '0', '1', '0'],
    ['1', '0', '1', '0', '1'],
    ['1', '0', '0', '1', '1'],
  ];
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>岛屿数量: {{ count }}</div>
    <div style="padding: 24px">
      <div v-for="(row, x) in grid">
        <span
          v-for="(col, y) in row"
          style="display: inline-block; width: 30px; margin-right: 8px; text-align: center"
        >
          {{ x === i && j === y ? '[' : '' }}
          {{ col }}
          {{ x === i && j === y ? ']' : '' }}
        </span>
      </div>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
