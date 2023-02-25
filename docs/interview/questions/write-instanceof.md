::: code-group
<<< @/../packages/sth/src/dataTypes/instanceOf.ts [源代码：手写 instanceof]
```js [代码应用效果]
import { instanceOf } from 'sth';

instanceOf([], Array); // true
instanceOf({}, Object); // true

// 正确判断原始数据类型
2 instanceof Number; // false
instanceOf(2, Number); // true
```
:::