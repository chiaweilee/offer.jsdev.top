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

<div class="formula">
F(n) = F(n−1) + F(n−2)，n ≥ 3，F(1) = 1，F(2) = 2
</div>

::: details 参考答案

```ts
function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let fn2 = 1; // n = 3 时，f(n - 2) = f(1) = 1
  let fn1 = 2; // n = 3 时，f(n - 1) = f(2) = 2
  let fn;
  for (let i = 3; i <= n; ++i) {
    fn = fn2 + fn1;
    // 为下一次遍历做准备
    fn2 = fn1;
    fn1 = fn;
  }
  return fn;
}
```

:::
