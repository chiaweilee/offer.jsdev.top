---
reference:
  - title: 46. 全排列
    href: https://leetcode.cn/problems/permutations
    site: 力扣（LeetCode）
---

# 46. 全排列

给定一个不含重复数字的数组`nums`，返回其*所有可能的全排列*。你可以**按任意顺序**返回答案。

示例：

```js
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

::: details 参考答案
```ts
function permute(nums: number[]): number[][] {
  const ans = [];
  const used = {};

  function dfs(path) {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }
    for (const num of nums) {
      if (used[num] === true) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }

  dfs([]);

  return ans;
}
```
:::
