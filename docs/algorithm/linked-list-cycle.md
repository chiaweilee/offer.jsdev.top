---
reference:
  - title: 141. 环形链表
    href: https://leetcode.cn/problems/linked-list-cycle
    site: 力扣（LeetCode）
---

# 141. 环形链表

如果链表中有某个节点，可以通过连续跟踪`next`指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数`pos`来表示链表尾连接到链表中的位置（索引从`0`开始）。注意：`pos`不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回`true`。 否则，返回`false`。

示例：

```js
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

::: info 解题思路
快慢指针。
如果快慢指针在一个环上赛跑，只要一直跑下去，两个指针一定会相遇。
:::

::: details 参考答案
```ts
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```
:::
