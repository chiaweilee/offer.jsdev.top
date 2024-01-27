---
reference:
  - title: 215. 数组中的第K个最大元素
    href: https://leetcode.cn/problems/kth-largest-element-in-an-array
    site: 力扣（LeetCode）
---

# 215. 数组中的第 K 个最大元素

给定整数数组`nums`和整数`k`，请返回数组中第`k`个最大的元素。

请注意，你需要找的是数组排序后的第`k`个最大的元素，而不是第`k`个不同的元素。

示例：

```js
输入: [3, 2, 1, 5, 6, 4], (k = 2);
输出: 5;
```

## 堆排序

堆排序是利用`堆`这种数据结构的一种排序算法，它是一种选择排序，最坏、最好、平均时间复杂度均为`O(nlogn)`，它是不稳定排序。

### 顺序存储二叉树

因为完全二叉树的性质，可以用数组表示对应的树结构，这叫`顺序存储`：

- 第 n 个元素的**左子节点**为`2*n+1`
- 第 n 个元素的**右子节点**为`2*n+2`
- 第 n 个元素的**父节点**为`(n-1)/2`
- 最后一个**非叶子节点**为`Math.floor(arr.length/2)-1`

堆是具有以下性质的完全二叉树：

- 大顶堆：每个非叶子节点的值都**大于或等于**其左右子节点的值
- 小顶堆：每个非叶子节点的值都**小于或等于**其左右子节点的值

注：没有要求左右子节点的值的大小关系

### 实现思路

- 升序：一般采用大顶堆
- 降序：一般采用小顶堆

1. 将待排序序列构造成一个大顶堆
2. 此时：整个序列的最大值就是堆顶的根节点，将其与末尾元素进行交换
3. 然后将剩余 n-1 个元素重新构造成一个堆，这样 就会得到 n 个元素的次小值。如此反复，便能的得到一个有序序列

::: details 参考答案
```ts
function findKthLargest(nums: number[], k: number): number {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize); // 构建一个大顶堆
  // 大顶堆是最大元素下沉到末尾
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    --heapSize; // 下沉后的元素不参与到大顶堆的调整
    // 重新调整大顶堆
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
}

// 自下而上构建一个大顶堆
function buildMaxHeap(arr, heapSize) {
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, heapSize);
  }
}

// 从左向右，自上而下的调整节点
function maxHeapify(arr, n, heapSize) {
  const left = 2 * n + 1; // 第 n 个元素的左子节点为2*n+1
  const right = 2 * n + 2; // 第 n 个元素的右子节点为2*n+2
  let largest = n; // 记录最大节点位置
  // 先和左子节点比较
  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  // 再和右子节点比较
  if (right < heapSize && arr[right] > arr[largest]) largest = right;
  // 如果需要调整
  if (largest !== n) {
    swap(arr, n, largest); // 交换节点
    // 继续调整下面的非叶子节点
    maxHeapify(arr, largest, heapSize);
  }
}

// 交换节点
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```
:::
