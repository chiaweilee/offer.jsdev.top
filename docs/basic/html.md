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

## script 标签，defer 和 async

defer 和 async 属性都是去异步加载外部 JS 脚本。

defer 在文档完成 HTML 解析后开始执行，在 DOMContentLoaded 事件之前。

async 是下载完毕后尽快执行。如果此时 HTML 尚未完成解析，就会阻塞后续解析。

多个 defer 按照 HTML 中的顺序执行。

多个 async 不保证顺序，根据网络传输速度，谁快谁先执行。
