# useEffect

## 目录

- [作用](#作用)
- [使用步骤](#使用步骤)
- [执行时期](#执行时期)
- [注意](#注意)
  - [清除副作用](#清除副作用)
  - [useEffect发送网络请求](#useEffect发送网络请求)

### 作用

为react函数组件提供副作用[^注释1]处理；

### 使用步骤

1. 导入 useEffect 函数
2. 调用 useEffect 函数，并传入回调函数
3. 在回调函数中编写副作用处理（dom操作）
4. 修改数据状态（当我们修改组件状态的时候，副作用会不断执行）
5. 检测副作用是否生效

```react&#x20;jsx
import { usestate, useEffect } from ' react'

function App () {

const [count, setcount] useState(0)

useEffect (() =>
//定义副作用
document . title =count
})

return (
  <div>
    <button onclick={（）=> setCount (count + 1) }>{count}</button> 
  </div>
  )
}
```

## 执行时期

依赖项控制副作用的执行时机

1.默认状态（无依赖项）

组件初始化的时候先执行一次；  &#x20;

等到每次数据修改组件更新再次执行；

```react&#x20;jsx
useEffect (() =>
//定义副作用
document.title =count
})
```

2.添加一个空数组依赖项仅仅会在初始化的时候执行一次

```react&#x20;jsx
useEffect (() =>
//定义副作用
document.title =1
},[])
```

3.添加特定依赖项 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```react&#x20;jsx
useEffect (() =>
//定义副作用
document.title = 1
},[count])

```

# 注意

useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现

《人家不是生命周期！！hook的出现就是不用生命周期的概念也可以写业务代码》

## 清除副作用

在组件被销毁时，如果有些副作用操作需要被清理，就可以使用此语法，比如常见的定时器

```react&#x20;jsx
useEffect(()=>{
console.log(‘副作用函数执行了“）
// 副作用函数的执行时机为：在下一次副作用函数执行之前执行
 return () =>{
console.log(‘清理副作用的函数执行了‘） // 在这里写清理副作用的代码
  }
})
```

## useEffect发送网络请求

如何在useEffect中发送网络请求，并且封装同步 async await操作

**语法要求**

不可以直接在useEffect的回调函数外层直接包裹 await，因为异步会导致清理函数无法立即返回

```react&#x20;jsx
useEffect (async ()=>{
const res = await axios.get('http://geek.itheima.net/v1_0/channels' ） console.log(res)

},[])
```

**正确写法**

在内部单独定义一个函数，然后把这个函数包装成同步

```react&#x20;jsx
useEffect(()=>{

async function fetchData(){

const res = await axios.get("http://geek.itheima.net/v1-0/channels")

console.log(res)

},[])
```

[^注释1]: 函数副作用是指，除了执行函数本身的操作，而执行的其他操作；这点在红宝书中有提到；
    ps：后期有时间弄一个红宝书的js基础；干死面试官
