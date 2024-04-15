---
sidebar_position: 11
sidebar_label: 11、青椒肉丝｜useReducer 是什么？
---
# 11、青椒肉丝｜useReducer 是什么？

## 目录

- [useReducer 是什么？](#useReducer-是什么)
- [参数](#参数)
- [返回值 ](#返回值-)
- [注意事项 ](#注意事项-)

#### useReducer 是什么？

usereducer 是 useState的一个替代方案，用于维护状态；官方的解释是：对于拥有许多状态更新逻辑的组件来说，过于分散的事件处理程序可能会令人不知所措。对于这种情况，你可以将组件的所有状态更新逻辑整合到一个外部函数中，这个函数叫作 **reducer**。

```javascript
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
```

#### 参数

- `reducer`：用于更新 state 的纯函数。参数为 state 和 action，返回值是更新后的 state。state 与 action 可以是任意合法值。
- `initialArg`：用于初始化 state 的任意值。初始值的计算逻辑取决于接下来的 `init` 参数。
- **可选参数** `init`：用于计算初始值的函数。如果存在，使用 `init(initialArg)` 的执行结果作为初始值，否则使用 `initialArg`。

#### 返回值&#x20;

`useReducer` 返回一个由两个值组成的数组：

1. 当前的 state。初次渲染时，它是 `init(initialArg)` 或 `initialArg` （如果没有 `init` 函数）。
2. [dispatch](https://zh-hans.react.dev/reference/react/useReducer#dispatch "dispatch")[ 函数](https://zh-hans.react.dev/reference/react/useReducer#dispatch " 函数")。用于更新 state 并触发组件的重新渲染。

#### 注意事项&#x20;

- `useReducer` 是一个 Hook，所以只能在 **组件的顶层作用域** 或自定义 Hook 中调用，而不能在循环或条件语句中调用。如果你有这种需求，可以创建一个新的组件，并把 state 移入其中。
- 严格模式下 React 会 **调用两次 reducer 和初始化函数**，这可以 [帮助你发现意外的副作用](https://zh-hans.react.dev/reference/react/useReducer#my-reducer-or-initializer-function-runs-twice "帮助你发现意外的副作用")。这只是开发模式下的行为，并不会影响生产环境。只要 reducer 和初始化函数是纯函数（理应如此）就不会改变你的逻辑。其中一个调用结果会被忽略。
