---
reference:
  - title: 20. 有效的括号
    href: https://leetcode.cn/problems/valid-parentheses
    site: 力扣（LeetCode）
---

# 20. 有效的括号

给定一个只包括`'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`的字符串`s`，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

示例：

```js
输入：s = "()[]{}"
输出：true
```

::: info 解题思路
由于“后遇到的左括号要先闭合”，可以用“后进先出”的栈来解决：

- 遇左括号时，将左括号放入栈顶
- 遇右括号时，取出栈顶的左括号，判断它们是否是相同类型的括号
- 如果不是相同的类型，或者栈中并没有左括号，那么字符串无效
:::

<script setup>
import Demo from './demos/20.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;
  const hash = { ')': '(', ']': '[', '}': '{' };
  const stack = [];
  for (const w of s) {
    if (hash[w]) {
      const top = stack.pop();
      if (top === undefined || top !== hash[w]) return false;
    } else {
      // 左括号放入栈顶
      stack.push(w);
    }
  }
  return stack.length === 0;
}
```
:::
