---
reference:
  - title: 1. 两数之和
    href: https://leetcode.cn/problems/two-sum
    site: 力扣（LeetCode）
---

# 1. 两数之和

给定一个整数数组`nums`和一个整数目标值`target`，请你在该数组中找出**和为目标值**`target`的那**两个**整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例：

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
```

::: info 解题思路
遍历时，如果能找到一个数，使当前数与这个数之合刚好等于 target
- 哈希表
- 要找到的这个数 = target - 当前数
:::

::: details 参考答案
```ts
function twoSum(nums: number[], target: number): number[] {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(target - nums[i])) {
      return [hash.get(target - nums[i]), i];
    }
    hash.set(nums[i], i);
  }
  return [];
};
```
:::