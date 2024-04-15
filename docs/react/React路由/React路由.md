---
sidebar_position: 9
---
# React路由

## 目录

- [核心内置组件说明](#核心内置组件说明)
  - [1. BrowerRouter](#1-BrowerRouter)
  - [2. Link](#2-Link)
  - [3. Routes](#3-Routes)
  - [4. Route](#4-Route)
- [编程式导航  ](#编程式导航--)
- [路由传参](#路由传参)
  - [1. searchParams传参](#1-searchParams传参)
  - [2. params传参](#2-params传参)

安装：

```react&#x20;jsx
npm install --save react-router-dom
```

引入页面：

```react&#x20;jsx
import { Route, HashRouter, Switch, Redirect } from "react-router-dom"
```

1、`HashRouter\BrowserRouter:`路由包裹容器

`HashRouter`就会加上`#`；`BrowserRouter`则没有；

2、Route：定义路由走向，路由规则 path：匹配路径；component：加载指定组件

exact：精准匹配

3、Switch：只匹配一个路由规则

# 核心内置组件说明

## 1. BrowerRouter

作用: 包裹整个应用，一个React应用只需要使用一次

|              |                             |                                                                                                |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------- |
| **模式**       | **实现方式**                    | **路由url表现**                                                                                    |
| HashRouter   | 监听url hash值实现               | [http://localhost:3000/#/about](http://localhost:3000/#/about "http://localhost:3000/#/about") |
| BrowerRouter | h5的 history.pushState API实现 | [http://localhost:3000/about](http://localhost:3000/about "http://localhost:3000/about")       |

## 2. Link

作用: 用于指定导航链接，完成声明式的路由跳转 类似于 `<router-link/>`

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241017118-6434a4dd-8e94-4f36-8aab-0cb8554c1c80.png)

这里to属性用于指定路由地址，表示要跳转到哪里去，Link组件最终会被渲染为原生的a链接

## 3. Routes

作用: 提供一个路由出口，组件内部会存在多个内置的Route组件，满足条件的路由会被渲染到组件内部

类比 router-view

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241157681-d90d2517-03e5-4126-a04e-ac36802cd7ee.png)

## 4. Route

作用: 用于定义路由路径和渲染组件的对应关系 \[element：因为react体系内 把组件叫做react element]

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659241285534-d317335f-03ef-4792-b68e-2735852e53f9.png)

其中path属性用来指定匹配的路径地址，element属性指定要渲染的组件，图中配置的意思为: 当url上访问的地址为 /about 时，当前路由发生匹配，对应的About组件渲染

# 编程式导航 &#x20;

声明式 【 Link to】 vs 编程式 【调用路由方法进行路由跳转】

概念: 通过js编程的方式进行路由页面跳转，比如说从首页跳转到关于页

实现步骤：

1. 导入一个 useNavigate 钩子函数
2. 执行 useNavigate 函数 得到 跳转函数
3. 在事件中执行跳转函数完成路由跳转

```react&#x20;jsx
// 导入useNavigate函数

import { useNavigate } from 'react-router-dom'

const Home = () => {

  // 执行函数

  const navigate = useNavigate()

  return (

    <div>

      Home

      <button onClick={ ()=> navigate('/about') }> 跳转关于页 </button>

    </div>

  )

}

export default Home
```

注: 如果在跳转时不想添加历史记录，可以添加额外参数replace 为true

`navigate('/about', { replace: true } )`

# 路由传参

场景：跳转路由的同时，有时候要需要传递参数

## 1. searchParams传参

**路由传参**

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242510791-9cd4d107-f2fc-47ff-87dc-af9418940ae9.png)

**路由取参**

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242531089-90eb0bbb-1aa8-4bcf-89dd-5332c6d49ab2.png)

## 2. params传参

**路由传参**

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242608059-40cce1de-3700-422d-b4ef-b4ada61c4152.png)

**路由取参**

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1659242647823-818d12d4-1be8-4e2a-bbe6-2bcf8ddd614c.png)
