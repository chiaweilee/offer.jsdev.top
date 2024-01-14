<script setup>
import { ref } from 'vue';

const nums1 = ref([1, 2, 3, 0, 0, 0]);
const nums2 = ref([2, 5, 6]);
const m = 3;
const n = 3;
const i = ref(m - 1);
const j = ref(n - 1);

function next() {
  if (j.value >= 0 || i.value >= 0) {
    if (j.value < 0 || (i.value >= 0 && nums1.value[i.value] > nums2.value[j.value])) {
      nums1.value[i.value + j.value + 1] = nums1.value[i.value];
      i.value--;
    } else {
      nums1.value[i.value + j.value + 1] = nums2.value[j.value];
      j.value--;
    }
  }
}

function reset() {
  nums1.value = [1, 2, 3, 0, 0, 0];
  nums2.value = [2, 5, 6];
  i.value = m -1;
  j.value = n -1;
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>
      nums1: [<span v-for="(n, z) in nums1"
        >{{ z === i ? '(' : '' }}{{ n }}{{ z === i ? ')' : ''
        }}{{ z !== nums1.length - 1 ? ',' : '' }}</span
      >]
    </div>
    <div>
      nums2: [<span v-for="(n, z) in nums2"
        >{{ z === j ? '(' : '' }}{{ n }}{{ z === j ? ')' : ''
        }}{{ z !== nums2.length - 1 ? ',' : '' }}</span
      >]
    </div>
    <div>i指针: {{ i }}</div>
    <div>j指针: {{ j }}</div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
