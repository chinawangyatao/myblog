# forwardRef + useImperativeHandle

useRef 一般是用来存一些不是用于渲染的内容的。

单个组件内如何拿到 ref 我们知道了，那如果是想把 ref 从子组件传递到父组件呢？

这种有专门的 api： `forwardRef`。

之前拿到标签的 dom 元素是这样写的：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44f1ec8a3d5841b48f59d49363bd2f2e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)

通过 useRef 创建个 ref 对象，然后把 input 标签设置到 ref。

如果是想从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下。

比如这样：

```react&#x20;tsx
import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';

const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return <div>
    <input ref={ref}></input>
  </div>
}

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<HTMLInputElement>(null);
 
  useEffect(()=> {
    console.log('ref', ref.current)
    ref.current?.focus()
  }, []);

  return (
    <div className="App">
      <WrapedGuang ref={ref}/>
    </div>
  );
}

export default App;

```

其实 forwardRef 这个 api 做的事情也很容易懂。

就是把 ref 转发到组件内部来设置：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7102c90ebd7e4f1da3da7ee2401f3850~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)

这样就把子组件的 input 的 ref 传递到了父组件。

效果如下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4752b25fec3e4ca18834bc8e6090a169~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)

不过被 forwardRef 包裹的组件的类型就要用 React.forwardRefRenderFunction 了：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc27ede261f143fa80038a90b924917f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)

第一个类型参数是 ref 的 `content` 的类型，第二个类型参数是 `props` 的类型。

但有的时候，我不是想把原生标签暴露出去，而是暴露一些自定义内容。

这时候就需要 `useImperativeHandle` 的 hook 了。

它有 3 个参数，第一个是传入的 `ref`，第二个是`返回新的 ref 值的函数`，第三个是`依赖数组`。

这样写：

```react&#x20;tsx
import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';

interface RefProps {
  aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      }
    }
  }, [inputRef]);

  return <div>
    <input ref={inputRef}></input>
  </div>
}

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<RefProps>(null);
 
  useEffect(()=> {
    console.log('ref', ref.current)
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <WrapedGuang ref={ref}/>
    </div>
  );
}

export default App;


```

也就是用 `useImperativeHanlde` 自定义了 ref 对象：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae40f5488f01445698e126456caa5dc6~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1222\&h=1262\&s=225865\&e=png\&b=1f1f1f)

这样，父组件里拿到的 ref 就是 `useImperativeHandle` 第二个参数的返回值了。

效果是一样的：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ea0d65a5f18419f9f2661ed5dc04daa~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=642\&h=704\&s=47861\&e=png\&b=ffffff)
