<script setup>
import { ref } from 'vue';

const num1 = '611';
const num2 = '9527';
const maxLength = (num1 - 0 + (num2 - 0)).toString().length;

const i = ref(num1.length - 1);
const j = ref(num2.length - 1);
const carry = ref(0);
const sum = ref('');

function next() {
  if (i.value >= 0 || i.value >= 0 || carry.value !== 0) {
    const total = num1.charAt(i.value) - 0 + (num2.charAt(j.value) - 0) + carry.value;
    carry.value = total > 9 ? 1 : 0;
    sum.value = (total % 10) + sum.value;
    i.value--;
    j.value--;
  }
}

function reset() {
  i.value = num1.length - 1;
  j.value = num2.length - 1;
  carry.value = 0;
  sum.value = '';
}
</script>

<template>
  <div style="padding-top: 14px">
    <div>指针1: {{ i }}</div>
    <div>指针2: {{ j }}</div>
    <div>进位: {{ carry }}</div>
    <div style="padding: 24px">
      <div>
        <span>[</span>
        <span v-for="(_, z) in maxLength">
          {{ z === i + (maxLength - num1.length) ? '(' : '' }}
          {{ num1[z - (maxLength - num1.length)] || '-' }}
          {{ z === i + (maxLength - num1.length) ? ')' : '' }}
          {{ z !== maxLength - 1 ? ',' : '' }}
        </span>
        <span>]</span>
      </div>
      <div>
        <span>[</span>
        <span v-for="(_, z) in maxLength">
          {{ z === j + (maxLength - num2.length) ? '(' : '' }}
          {{ num2[z - (maxLength - num2.length)] || '-' }}
          {{ z === j + (maxLength - num2.length) ? ')' : '' }}
          {{ z !== maxLength - 1 ? ',' : '' }}
        </span>
        <span>]</span>
      </div>
      <div>
        <span>[</span>
        <span v-for="(_, z) in maxLength">
          {{ z === i + (maxLength - num1.length) ? '(' : '' }}
          {{ sum[z - (maxLength - sum.length)] || '-' }}
          {{ z === i + (maxLength - num1.length) ? ')' : '' }}
          {{ z !== maxLength - 1 ? ',' : '' }}
        </span>
        <span>]</span>
      </div>
    </div>
    <div>
      <button @click="next">下一次循环</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>
