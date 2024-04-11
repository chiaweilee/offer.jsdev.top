---
reference:
  - title: 62. 不同路径
    href: https://leetcode.cn/problems/unique-paths
    site: 力扣（LeetCode）
---

# 62. 不同路径

一个机器人位于一个`m x n`网格的左上角。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。问总共有多少条不同的路径？

示例：

```js
输入：m = 3, n = 7
输出：28
```

::: details 参考答案

```ts
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
```

:::
