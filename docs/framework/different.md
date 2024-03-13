# Vue 和 React 区别

## 数据绑定

Vue 是`双向数据绑定`；

```vue
<input type="text" v-model="message" />
<p>{{ message }}</p>
```

React 是`单向数据流`；

```jsx
const [message, setMessage] = useState('');
const onChange = e => setMessage(e.target.value);
return <input type="text" value={message} onChange={onChange} />;
```

Vue 中组合不同功能的方式是 `mixin`，React 中的方式是 `HOC`（高阶组件）

Vue 中子组件向父组件传递消息有两种方式：`事件`和`回调函数`，但更倾向于使用`事件`；
React 中都使用`回调函数`。
