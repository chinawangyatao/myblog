# useLayoutEffect

和 useEffect 类似的还有一个 useLayoutEffect。

绝大多数情况下，你把 useEffect 换成 useLayoutEffect 也一样：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f1898ab718041f794f97fb3eaff45cc~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=546\&h=252\&s=36583\&e=png\&b=202020)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9051c70096bf4e9d9053d6d5723c3b40~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=618\&h=618\&s=51493\&e=png\&b=ffffff)

那为啥还要有这两个 hook 呢？

我们知道，js 执行和渲染是阻塞的：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c88835aa7434d15ae1b60d77aff4215~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1482\&h=192\&s=17185\&e=png\&b=ffffff)

useEffect 的 effect 函数会在操作 dom 之后异步执行：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a554b4ddeb494d69991f8c71e543d72a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1488\&h=282\&s=27751\&e=png\&b=ffffff)

异步执行就是用 setTimeout、Promise.then 等 api 包裹执行的逻辑。

这些逻辑会以单独的宏任务或者微任务的形式存在，然后进入 Event Loop 调度执行。

打开 Permormance 工具，可以看到 Event Loop 的详情：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c724f011d3f549678cc1b4c85a669b96~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1802\&h=646\&s=72439\&e=png\&b=f4f6fd)

可以看到，渲染的间隔是固定的，而 js 的任务在这些渲染的间隔中执行。

所以异步执行的 effect 逻辑就有两种可能：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83b2167ca07b464c88af9b5e3df46093~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1654\&h=300\&s=30790\&e=png\&b=fefefe)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a1e6d47466747478556c6235df5d27a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1468\&h=300\&s=27709\&e=png\&b=fdfdfd)

灰色的部分是单独的任务。

有可能在下次渲染之前，就能执行完这个 effect。

也有可能下次渲染前，没时间执行这个 effect，所以就在渲染之后执行了。

这样就导致有的时候页面会出现闪动，因为第一次渲染的时候的 state 是之前的值，渲染完之后执行 effect 改了 state，再次渲染就是新的值了。

一般这样也没啥问题，但如果你遇到这种情况，不想闪动那一下，就用 useLayoutEffect。

它的 useEffect 的区别是它的 effect 执行是同步的，也就是在同一个任务里：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7352b1c05bc4bf2862b2297e4303c8b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1672\&h=276\&s=28692\&e=png\&b=fdfdfd)

这样浏览器会等 effect 逻辑执行完再渲染。

好处自然就是不会闪动了。

但坏处也很明显，如果你的 effect 逻辑要执行很久呢？

不就阻塞渲染了？

超过 50ms 的任务就被称作长任务，会阻塞渲染，导致掉帧：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8ca8b96386d43eb94ddabe5f277d195~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=944\&h=218\&s=61827\&e=png\&b=f7f3f2)

所以说，一般情况下，还是让 effect 逻辑异步执行的好。

也就是说，绝大多数情况下，用 useEffect，它能避免因为 effect 逻辑执行时间长导致页面卡顿（掉帧）。 但如果你遇到闪动的问题比较严重，那可以用 useLayoutEffect，但要注意 effect 逻辑不要执行时间太长。

同步、异步执行 effect 都各有各的问题和好处，所以 React 暴露了 useEffect 和 useLayoutEffect 这两个 hook 出来，让开发者自己决定。
