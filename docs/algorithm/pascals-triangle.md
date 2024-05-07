---
reference:
  - title: 118. 杨辉三角
    href: https://leetcode.cn/problems/pascals-triangle
    site: 力扣（LeetCode）
---

# 118. 杨辉三角

给定一个非负整数`numRows`，生成「杨辉三角」的前`numRows`行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例：

```js
输入: numRows = 5;
输出: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
```

::: info 解题思路

<div class="formula">
dp[i][j] = dp[i-1][j-1] + dp[i-1][j], dp[i][0] = 1, dp[i][-1] = 1
</div>
:::

::: details 参考答案

```ts
function generate(numRows: number): number[][] {
  const ans = [];
  for (let i = 0; i < numRows; ++i) {
    const dp = new Array(i + 1).fill(1);
    for (let j = 1; j < dp.length - 1; ++j) {
      dp[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(dp);
  }
  return ans;
}
```

:::
