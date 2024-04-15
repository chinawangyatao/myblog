# useState

## 目录

- [作用](#作用)
- [状态的读取与修改](#状态的读取与修改)
- [setcount的更新过程](#setcount的更新过程)
- [使用规则](#使用规则)
- [回调函数](#回调函数)
  - [使用场景](#使用场景)

## 作用

useState为函数组件提供状态 (state)

用法：

```react&#x20;jsx
import React, { useState } from "react";//导入useState方法

function Example(props) {
  const [count, setCount] = useState(0);//定义数据【数据，修改数据的方法】
  return (
    <div>
      <p>你点击了{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击增加1
      </button>
    </div>
  );
}

export default Example;
```

## 状态的读取与修改

用`useState`定义响应式数据用的时候用`[count,setcount]`解构复值出来；

两点注意：

- `[count,setcount]` 名字可以自定义；
- 但是顺序不可以颠倒；
- `setcount` 是一个函数，是用来修改count的值，但是他不会修改原值而是生成一个新值替换，即基于原值计算得到的新值，什么意思呢，就是说他不能使用`count++` 这种语法；

## setcount的更新过程

首次渲染

首次渲染的时候 `useState` 会被执行一次；其中`useState` 也会跟着执行 这里重点注意 初始值只在首次更新的时候渲染

更新渲染

组件再次渲染，这个`setcount` 会再次执行；count得到的数值就是变化后的数值，模版会渲染新值；

## 使用规则

1. `useState` 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态

```react&#x20;jsx
function List(){

// 以字符串为初始值
const Iname， setName] = useState(‘cp‘ ) 


// 以数组为初始值工
const [list， setList] = useState([])
```

2.`useState` 注意事项

1. 只能出现在函数组件中
2. 不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook)

```react&#x20;jsx
let num = 1

function List(){

num++

if(num / 2 === 0){
const Iname, setName] useState('cp')
}

const [list, setList] = usestate ([]) 

// 俩个hook的顺序不是固定的,这是不可以的!!

```

1. 可以通过开发者工具查看hooks状态

## 回调函数

### 使用场景

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

语法

```react&#x20;jsx
const [name， setName] = usestate(()=>{ 
// 编写计算逻辑 return ’计算之后的初始值“
}）
```

语法规则

1. 回调函数return出去的值将作为 name 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次
