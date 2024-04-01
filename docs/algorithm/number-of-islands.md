---
reference:
  - title: 200. 岛屿数量
    href: https://leetcode.cn/problems/number-of-islands
    site: 力扣（LeetCode）
---

# 200. 岛屿数量

给你一个由`'1'`（陆地）和`'0'`（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例：

```js
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

::: info 解题思路
递归+沉没：

- 找到一块陆地时，统计加一
- 找到陆地时，让与这块陆地相邻的陆地都变成海水，这样就不会重复计算了
:::

<script setup>
import Demo from './demos/200.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function numIslands(grid: string[][]): number {
  let count = 0;

  function sink(i, j) {
    if (grid?.[i]?.[j] === '1') {
      grid[i][j] = '0';
      sink(i + 1, j);
      sink(i - 1, j);
      sink(i, j + 1);
      sink(i, j - 1);
    }
  }

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === '1') {
        count++;
        sink(i, j);
      }
    }
  }
  return count;
}
```
:::
