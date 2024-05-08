export default [
  {
    text: '哈希表',
    link: '/algorithm/hash-table',
    items: [
      { text: '存在重复元素', link: '/algorithm/contains-duplicate' },
      { text: '两数之和', link: '/algorithm/two-sum' },
      { text: 'LRU 缓存', link: '/algorithm/lru-cache' },
    ],
  },
  {
    text: '滑动窗口和双指针',
    items: [
      {
        text: '双指针',
        items: [
          { text: '合并两个有序数组', link: '/algorithm/merge-sorted-array' },
          { text: '移动零', link: '/algorithm/move-zeroes' },
          { text: '二分查找', link: '/algorithm/binary-search' },
          { text: '比较版本号', link: '/algorithm/compare-version-numbers' },
          { text: '字符串相加', link: '/algorithm/add-strings' },
          { text: '三数之和', link: '/algorithm/3sum' },
        ],
      },
      {
        text: '滑动窗口',
        items: [
          {
            text: '无重复字符的最长子串',
            link: '/algorithm/longest-substring-without-repeating-characters',
          },
          {
            text: '长度最小的子数组',
            link: '/algorithm/minimum-size-subarray-sum',
          },
        ],
      },
    ],
  },

  {
    text: '二叉树',
    items: [
      {
        text: '递归',
        items: [
          { text: '路径总和', link: '/algorithm/path-sum' },
          { text: '翻转二叉树', link: '/algorithm/invert-binary-tree' },
        ],
      },
      {
        text: '深度优先搜索/广度优先搜索',
        items: [
          { text: '二叉树的最大深度', link: '/algorithm/maximum-depth-of-binary-tree' },
          { text: '二叉树的层序遍历', link: '/algorithm/binary-tree-level-order-traversal' },
          { text: '根节点到叶节点数字之和', link: '/algorithm/sum-root-to-leaf-numbers' },
          { text: 'N 叉树的层序遍历', link: '/algorithm/n-ary-tree-level-order-traversal' },
        ],
      },
    ],
  },
  {
    text: '动态规划',
    link: '/algorithm/dynamic-programming',
    items: [
      {
        text: '斐波那契数',
        items: [
          { text: '斐波那契数', link: '/algorithm/fibonacci-number' },
          { text: '爬楼梯', link: '/algorithm/climbing-stairs' },
        ],
      },
      {
        text: '数组应用',
        items: [
          { text: '买卖股票的最佳时机', link: '/algorithm/best-time-to-buy-and-sell-stock' },
          { text: '最大子数组和', link: '/algorithm/maximum-subarray' },
          { text: '最长递增子序列', link: '/algorithm/longest-increasing-subsequence' },
        ],
      },
      {
        text: '矩阵',
        items: [{ text: '不同路径', link: '/algorithm/unique-paths' }],
      },
      { text: '杨辉三角', link: '/algorithm/pascals-triangle' },
      { text: '最长回文子串', link: '/algorithm/longest-palindromic-substring' },
      { text: '零钱兑换', link: '/algorithm/coin-change' },
      { text: '接雨水', link: '/algorithm/trapping-rain-water' },
    ],
  },
  {
    text: '链表',
    link: '/algorithm/linked-list',
    items: [
      {
        text: '双指针',
        items: [{ text: '返回倒数第 k 个节点', link: '/algorithm/kth-node-from-end-of-list-lcci' }],
      },
      {
        text: '反转链表',
        items: [
          { text: '反转链表', link: '/algorithm/reverse-linked-list' },
          { text: '反转链表 II', link: '/algorithm/reverse-linked-list-ii' },
        ],
      },
      { text: '合并两个有序链表', link: '/algorithm/merge-two-sorted-lists' },
      { text: '环形链表', link: '/algorithm/linked-list-cycle' },
    ],
  },
  {
    text: '矩阵',
    items: [
      { text: '岛屿数量', link: '/algorithm/number-of-islands' },
      { text: '岛屿的最大面积', link: '/algorithm/max-area-of-island' },
      { text: '螺旋矩阵', link: '/algorithm/spiral-matrix' },
    ],
  },
  {
    text: '堆栈',
    items: [
      {
        text: '堆排序',
        items: [
          {
            text: '排序数组',
            link: '/algorithm/sort-an-array',
          },
          { text: '数组中的第 k 个最大元素', link: '/algorithm/kth-largest-element-in-an-array' },
        ],
      },
      {
        text: '栈',
        items: [{ text: '有效的括号', link: '/algorithm/valid-parentheses' }],
      },
    ],
  },
  {
    text: '回溯',
    items: [{ text: '全排列', link: '/algorithm/permutations' }],
  },
  {
    text: '位运算',
    items: [{ text: '只出现一次的数字', link: '/algorithm/single-number' }],
  },
];
