---
reference:
  - title: 695. 岛屿的最大面积
    href: https://leetcode.cn/problems/max-area-of-island
    site: 力扣（LeetCode）
---

# 695. 岛屿的最大面积

给你一个大小为`m x n`的二进制矩阵`grid`。

岛屿 是由一些相邻的`1`(代表土地) 构成的组合，这里的「相邻」要求两个`1`必须在**水平或者竖直的四个方向上**相邻。你可以假设`grid`的四个边缘都被`0`（代表水）包围着。

岛屿的面积是岛上值为`1`的单元格的数目。

计算并返回`grid`中最大的岛屿面积。如果没有岛屿，则返回面积为`0`。

::: info 解题思路
递归+沉没
:::

::: details 参考答案
```ts
function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;

  function sink(i, j): number {
    if (grid?.[i]?.[j] === 1) {
      grid[i][j] = 0;
      return (
        1 +
        sink(i + 1, j) +
        sink(i - 1, j) +
        sink(i, j + 1) +
        sink(i, j - 1)
      );
    }
    return 0;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, sink(i, j));
      }
    }
  }
  return max;
}
```
:::
