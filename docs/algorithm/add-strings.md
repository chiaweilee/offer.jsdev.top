---
reference:
  - title: 415. 字符串相加
    href: https://leetcode.cn/problems/add-strings
    site: 力扣（LeetCode）
---

# 415. 字符串相加

给定两个字符串形式的非负整数`num1`和`num2`，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如`BigInteger`），也不能直接将输入的字符串转换为整数形式。

示例：

```js
输入：num1 = "11", num2 = "123"
输出："134"
```

<script setup>
import Demo from './demos/415.vue';
</script>

::: info 解题思路
- 从个位开始相加
- 记录进位
:::

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';
  while (i >= 0 || j >= 0 || carry !== 0) {
    const total = (num1.charAt(i) as any) - 0 + ((num2.charAt(j) as any) - 0) + carry;
    carry = total > 9 ? 1 : 0;
    sum = (total % 10) + sum;
    i--;
    j--;
  }
  return sum;
}
```
:::
