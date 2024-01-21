---
reference:
  - title: 206. 反转链表
    href: https://leetcode.cn/problems/reverse-linked-list
    site: 力扣（LeetCode）
---

# 206. 反转链表

给你单链表的头节点`head`，请你反转链表，并返回反转后的链表。

示例：

```js
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

::: info 解题思路
迭代：
- 遍历链表时，将当前节点的 next 指针改为指向前一个节点
- 节点没有引用其前一个节点，因此必须事先存储其前一个节点
- 还需要存储后一个节点。最后返回新的头引用
  :::

::: details 参考答案
```ts
function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}
```
:::
