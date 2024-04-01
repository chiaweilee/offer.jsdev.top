---
reference:
  - title: 70. 爬楼梯
    href: https://leetcode.cn/problems/climbing-stairs
    site: 力扣（LeetCode）
---

# 70. 爬楼梯

假设你正在爬楼梯。需要`n`阶你才能到达楼顶。

每次你可以爬`1`或`2`个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例：

```js
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

::: info 解题思路
f(n) 表示爬第 n 阶楼梯的方法数量
- f(n) = f(n - 1) + f(n - 2)
- f(1) = 1
- f(2) = f(1) => 1
- f(3) = f(2) + f(1)
:::

<script setup>
import Demo from './demos/70.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function climbStairs(n: number): number {
  let fn1 = 0;
  let fn2 = 1;
  let fn = 1; // n < 3 时，结果为 1
  for (let i = 2; i <= n; ++i) {
    fn = fn2 + fn1; // f(n) = f(n - 1) + f(n - 2)
    fn2 = fn1;
    fn1 = fn;
  }
  return fn;
};
```
:::
