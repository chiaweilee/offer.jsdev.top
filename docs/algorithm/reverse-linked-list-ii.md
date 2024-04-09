---
reference:
  - title: 92. 反转链表 II
    href: https://leetcode.cn/problems/reverse-linked-list-ii
    site: 力扣（LeetCode）
---

# 92. 反转链表 II

给你单链表的头指针`head`和两个整数`left`和`right`，其中`left <= right`。请你反转从位置`left`到位置`right`的链表节点，返回**反转后的链表** 。

示例：

```js
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

::: info 解题思路
解决此类问题可以使用哑节点（dummy node），它的 next 指针指向链表的头节点。这样一来，我们就不需要对头节点进行特殊的判断了，可省去许多麻烦。

```ts
const dummyNode = new ListNode(-1);
dummyNode.next = head;
return dummyNode.next;
```

:::

::: details 参考答案

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  // 定位到 left 前一位节点，它的 next 将指向需要反转的最后一个节点（即 rightNode ）
  let oldLeftPre = dummyNode;
  for (let i = 0; i < left - 1; ++i) {
    oldLeftPre = oldLeftPre.next;
  }

  // 从 left 前一位出发，定位到 rightNode
  let oldRightNode = oldLeftPre;
  for (let i = 0; i < right - left + 1; ++i) {
    oldRightNode = oldRightNode.next;
  }

  // 斩断需要反转的链两边
  let oldLeftNode = oldLeftPre.next;
  let oldRightNext = oldRightNode.next;
  oldLeftPre.next = null;
  oldRightNode.next = null;

  // 反转斩断的链表
  reverseLinkedList(oldLeftNode);

  // 将反转后的链表接回去
  oldLeftPre.next = oldRightNode;
  oldLeftNode.next = oldRightNext;

  return dummyNode.next;
}

// 206. 反转链表 的方法
function reverseLinkedList(head: ListNode | null): void {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
```

:::
