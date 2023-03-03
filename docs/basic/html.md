---
reference:
  - title: 「2021」高频前端面试题汇总之HTML篇
    href: https://juejin.cn/post/6905294475539513352
    site: CUGGZ
---

# HTML

## src 和 href 的区别

都是用来引用外部资源，区别：
- src 表示资源引用，内容会内嵌到页面。例如：script 、 img
- href 表示超文本链接，例如：a、link

## HTML 语义化

根据内容结构（内容语义化），选择合适的标签（代码语义化）。

```html
<header>头部</header>
<nav>导航栏</nav>
<section>区块（有语义的div）</section>
<main>主要区域</main>
<article>主要内容</article>
<aside>侧边栏</aside>
<footer>底部</footer>
```
