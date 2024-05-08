---
reference:
  - title: 面试题 02.02. 返回倒数第 k 个节点
    href: https://leetcode.cn/problems/kth-node-from-end-of-list-lcci
    site: 力扣（LeetCode）
---

# 返回倒数第 k 个节点

实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

示例：

```js
输入： 1->2->3->4->5 和 k = 2
输出： 4
```

::: info 解题思路
快慢指针。
快指针先走 k 步，当快指针指向空时，慢指针正好在倒数第 k 个节点。
:::

::: details 参考答案
```ts
function kthToLast(head: ListNode | null, k: number): number {
  let left = head;
  let right = head;
  while (k-- > 0) {
    right = right.next;
  }
  while (right) {
    left = left.next;
    right = right.next;
  }
  return left.val;
}
```
:::
