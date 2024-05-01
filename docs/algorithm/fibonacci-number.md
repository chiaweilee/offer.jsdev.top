---
reference:
  - title: 509. 斐波那契数
    href: https://leetcode.cn/problems/fibonacci-number
    site: 力扣（LeetCode）
---

# 509. 斐波那契数

斐波那契数（通常用`F(n)`表示）形成的序列称为**斐波那契数列**。该数列由`0`和`1`开始，后面的每一项数字都是前面两项数字的和。也就是：

```
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
```

给定`n`，请计算`F(n)`。

示例：

```js
输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
```

::: info 解题思路

<div class="formula">
F(n) = F(n−1) + F(n−2)，n > 1，F(0) = 0，F(1) = 1
</div>
:::

::: details 参考答案

```ts
function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fn2 = 0; // n = 2 时，f(n - 2) = f(0) = 0
  let fn1 = 1; //  n = 2 时，f(n - 1) = f(1) = 1
  let fn;
  for (let i = 2; i <= n; ++i) {
    fn = fn1 + fn2;
    // 为下一次遍历做准备
    fn2 = fn1;
    fn1 = fn;
  }
  return fn;
}
```

:::
