---
reference:
  - title: 283. 移动零
    href: https://leetcode.cn/problems/move-zeroes
    site: 力扣（LeetCode）
---

# 283. 移动零

给定一个数组`nums`，编写一个函数将所有`0`移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例：

```js
输入: nums = [0, 1, 0, 3, 12];
输出: [1, 3, 12, 0, 0];
```

::: details 参考答案

```ts
function moveZeroes(nums: number[]): void {
  let right = 0;
  for (let left = 0; left < nums.length; ++left) {
    if (nums[left] !== 0) {
      const tmp = nums[left];
      nums[left] = nums[right];
      nums[right++] = tmp;
    }
  }
}
```

:::
