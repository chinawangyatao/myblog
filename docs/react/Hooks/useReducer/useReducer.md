# useReducer

## 目录

- [useReducer + immer](#useReducer--immer)

前面用的 `setState` 都是直接修改值，那如果在修改值之前需要执行一些固定的逻辑呢？

这时候就要用 `useReducer` 了：

添加一个` App3.tsx`：

```react&#x20;tsx
import { Reducer, useReducer } from "react";

interface Data {
    result: number;
}

interface Action {
    type: 'add' | 'minus',
    num: number
}
function reducer(state: Data, action: Action) {

    switch(action.type) {
        case 'add':
            return {
                result: state.result + action.num
            }
        case 'minus': 
            return {
                result: state.result - action.num
            }
    }
    return state;
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});

  return (
    <div>
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}

export default App;


```

useReducer 的类型参数传入 Reducer`<数据的类型，action 的类型>`

然后第一个参数是 reducer，第二个参数是初始数据。

点击加的时候，触发 add 的 action，点击减的时候，触发 minus 的 action。

在 index.tsx 里引入：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07d4658f8c9a4a55bd376d645413c512~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=848\&h=546\&s=101144\&e=png\&b=1f1f1f)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e262d5d01304812b036b7abc5353888~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=864\&h=432\&s=65452\&e=gif\&f=26\&b=fefefe)

当然，你直接 setState 也可以：

```react&#x20;tsx
import { useState } from "react";

function App() {
  const [res, setRes] = useState({ result: 0});

  return (
    <div>
        <div onClick={() => setRes({ result: res.result + 2 })}>加</div>
        <div onClick={() => setRes({ result: res.result - 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}

export default App;

```

有同学可能会说，用 useState 比 useReducer 简洁多了。

确实，这个例子不复杂，没必要用 useReducer。

但如果要执行比较复杂的逻辑呢？

用 useState 需要在每个地方都写一遍这个逻辑，而用 useReducer 则是把它封装到 reducer 里，通过 action 触发就好了。

**当修改 state 的逻辑比较复杂，用 useReducer。**

回过头来继续看 useReducer：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e76469d96e4be49e1cafebe7398de4~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1440\&h=236\&s=47974\&e=png\&b=1f1f1f)

```react&#x20;tsx
const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return {
        result: param === 'zero' ? 0 : 1
    }
});

```

它还有另一种重载，通过函数来创建初始数据，这时候 useReducer 第二个参数就是传给这个函数的参数。

并且在类型参数里也需要传入它的类型。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e262d5d01304812b036b7abc5353888~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=864\&h=432\&s=65452\&e=gif\&f=26\&b=fefefe)

## useReducer + immer

此外，使用 reducer 有一个特别要注意的地方：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb65b8784ea34ef5ae169c54a0c3af4a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=812\&h=582\&s=71068\&e=png\&b=1f1f1f)

如果你直接修改原始的 state 返回，是触发不了重新渲染的：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd6bb26f55004e22b9829a2afc9bca55~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=694\&h=440\&s=51881\&e=gif\&f=23\&b=fefefe)

必须返回一个新的对象才行。

但这也有个问题，如果对象结构很复杂，每次都创建一个新的对象会比较繁琐，而且性能也不好。

比如这样：

```react&#x20;tsx
import { Reducer, useReducer } from "react";

interface Data {
    a: {
        c: {
            e: number,
            f: number
        },
        d: number
    },
    b: number
}

interface Action {
    type: 'add',
    num: number
}

function reducer(state: Data, action: Action) {

    switch(action.type) {
        case 'add':
            return {
                ...state,
                a: {
                    ...state.a,
                    c: {
                        ...state.a.c,
                        e: state.a.c.e + action.num,
                    },
                },
            }
    }
    return state;
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return {
        a: {
            c: {
                e: 0,
                f: 0
            },
            d: 0
        },
        b: 0
    }
  });

  return (
    <div>
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App;

```

这里的 data 是一个复杂的对象结构，我们需要改的是其中的一个属性，但是为了创建新对象，要把其余属性依次复制一遍。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fa4294aa3cd4f52903347e5ad33a64c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=660\&h=276\&s=70116\&e=gif\&f=20\&b=fdfdfd)

这样能完成功能，但是写起来很麻烦，也不好维护。

有没有什么更好的方式呢？

有，复杂对象的修改就要用 immutable 相关的库了。

最常用的是 immer：

`npm install --save immer`&#x20;

用法相当简单，只有一个 produce 的 api：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74c7cb0691684797846a97e34d82cbf0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=970\&h=648\&s=79713\&e=png\&b=1f1f1f)

```react&#x20;tsx
return produce(state, (state) => {
    state.a.c.e += action.num
})

```

`第一个参数`是要修改的对象，`第二个参数`的函数里直接修改这个对象的属性，返回的结果就是一个新的对象。

测试下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e96c9dca37640b49395bdec1416ac8c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=602\&h=242\&s=62197\&e=gif\&f=20\&b=fdfdfd)

功能正常。

用起来超级简单。

immer 是依赖 Proxy 实现的，它会监听你在函数里对属性的修改，然后帮你创建一个新对象。

刚才只说了 reducer 需要返回一个新的对象，才会触发渲染，其实 useState 也是。

比如这样：

```react&#x20;tsx
import { useState } from "react";

function App() {
    const [obj, setObj] = useState({
        a: {
            c: {
                e: 0,
                f: 0
            },
            d: 0
        },
        b: 0
    });

    return (
        <div>
            <div onClick={() => {
                obj.a.c.e ++;
                setObj(obj);
            }}>加</div>
            <div>{JSON.stringify(obj)}</div>
        </div>
    );
}

export default App;

```

因为对象引用没变，同样不会重新渲染：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fc79973dcb14bc68292fd02aa6b2f3e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=710\&h=426\&s=51317\&e=gif\&f=28\&b=fdfdfd)

也可以用 immer：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/742e8dd844334ad78b7d51bcbb176d18~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=962\&h=526\&s=69735\&e=png\&b=202020)

```react&#x20;tsx
setObj(produce(obj, (obj) => {
    obj.a.c.e ++;
}))

```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c06eee6198548ca93691db984b911ec~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=710\&h=426\&s=70223\&e=gif\&f=22\&b=fdfdfd)

综上，**在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer。**

如果是复杂的深层对象的修改，可以用 immer 来优化。

为什么大家会说 React 推崇的是数据不可变？

就是因为这个。
