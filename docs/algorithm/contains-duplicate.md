---
reference:
  - title: 217. 存在重复元素
    href: https://leetcode.cn/problems/contains-duplicate
    site: 力扣（LeetCode）
---

# 217. 存在重复元素

给你一个整数数组`nums`。如果任一值在数组中出现**至少两次**，返回`true`；如果数组中每个元素互不相同，返回`false`。

示例：

```js
输入：nums = [1,2,3,1]
输出：true
```

::: details 参考答案

```ts
function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}
```

:::
