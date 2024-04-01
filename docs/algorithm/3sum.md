---
reference:
  - title: 15. 三数之和
    href: https://leetcode.cn/problems/3sum
    site: 力扣（LeetCode）
---

# 15. 三数之和

给你一个整数数组`nums`，判断是否存在三元组`[nums[i], nums[j], nums[k]]`满足`i != j`、`i != k`且`j != k`，同时还满足`nums[i] + nums[j] + nums[k] == 0`。请你返回所有和为`0`且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

```js
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

::: details 参考答案
```ts
function threeSum(nums: number[]): number[][] {
  const ans = [];
  // 非数组或数组长度小于3，无解
  if (nums?.length < 3) return ans;
  // 对数组进行从小到大排序，重复数字排列在一起
  nums.sort((a, b) => a - b);

  // 先锁定三个数中的第一个数字
  for (let i = 0; i < nums.length; ++i) {
    // 第一个数字大于 0，无解
    if (nums[i] > 0) break;
    // 第一个数字去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 开始双指针
    let left = i + 1; // 左指针，第二个数字指针
    let right = nums.length - 1; // 右指针，第三个数字指针
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        // 左指针，第二个数字去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 右指针，第三个数字去重
        while (left < right && nums[right] === nums[right - 1]) right--;
        // 下一组循环
        left++;
        right--;
      } else {
        // 三数之和小于0，尝试更大的数字
        if (sum < 0) left++;
        // 三数之和大于0，尝试更小的数字
        if (sum > 0) right--;
      }
    }
  }

  return ans;
}
```
:::
