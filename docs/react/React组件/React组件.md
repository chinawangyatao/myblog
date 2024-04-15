---
sidebar_position: 5
---
# React组件

## 目录

- [React组件基础](#React组件基础)
  - [组件概念](#组件概念)
  - [函数组件](#函数组件)
  - [类组件](#类组件)
  - [函数组件的事件绑定](#函数组件的事件绑定)
    - [1. 如何绑定事件](#1-如何绑定事件)
    - [2. 获取事件对象](#2-获取事件对象)
    - [3. 传递额外参数](#3-传递额外参数)
  - [类组件的事件绑定](#类组件的事件绑定)
  - [组件状态](#组件状态)
    - [1. 初始化状态](#1-初始化状态)
    - [2. 读取状态](#2-读取状态)
    - [3. 修改状态](#3-修改状态)
  - [this问题说明](#this问题说明)
  - [React的状态不可变](#React的状态不可变)
  - [表单处理](#表单处理)
    - [1. 受控表单组件](#1-受控表单组件)
    - [2. 非受控表单组件](#2-非受控表单组件)

# React组件基础

## 组件概念

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1654489956815-0348d9cc-a001-4d76-a832-1bccc2f1fde4.png)

## 函数组件

**概念**

使用 JS 的函数（或箭头函数）创建的组件，就叫做`函数组件`

**组件定义与渲染**

```react&#x20;jsx
// 定义函数组件

function HelloFn () {

  return <div>这是我的第一个函数组件!</div>

}

// 定义类组件

function App () {

  return (

    <div className="App">

      {/* 渲染函数组件 */}

      <HelloFn />

      <HelloFn></HelloFn>

    </div>

  )

}

export default App
```

**约定说明**

1. 组件的名称**必须首字母大写**，react内部会根据这个来判断是组件还是普通的HTML标签
2. 函数组件**必须有返回值**，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的**返回值**就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

## 类组件

使用 ES6 的 class 创建的组件，叫做类（class）组件

**组件定义与渲染**

```react&#x20;jsx
// 引入React
import React from 'react'

// 定义类组件

class HelloC extends React.Component {

  render () {

    return <div>这是我的第一个类组件!</div>

  }

}

function App () {

  return (

    <div className="App">

      {/* 渲染类组件 */}

      <HelloC />

      <HelloC></HelloC>

    </div>

  )

}

export default App
```

**约定说明**

1. **类名称也必须以大写字母开头**
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3. 类组件必须提供 render 方法**render 方法必须有返回值，表示该组件的 UI 结构**

## 函数组件的事件绑定

### 1. 如何绑定事件

- 语法 &#x20;

  on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div>`
- 注意点 &#x20;

  react事件采用驼峰命名法，比如：onMouseEnter、onFocus
- 样例

```react&#x20;jsx
// 函数组件

function HelloFn () {

  // 定义事件回调函数

  const clickHandler = () => {

    console.log('事件被触发了')

  }

  return (

    // 绑定事件

    <button onClick={clickHandler}>click me!</button>

  )

}
```

### 2. 获取事件对象

获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到

```react&#x20;jsx
// 函数组件

function HelloFn () {

  // 定义事件回调函数

  const clickHandler = (e) => {

    console.log('事件被触发了', e)

  }

  return (

    // 绑定事件

    <button onClick={clickHandler}>click me!</button>

  )

}
```

### 3. 传递额外参数

解决思路: 改造事件绑定为箭头函数 在箭头函数中完成参数的传递

```react&#x20;jsx
import React from "react"

// 如何获取额外的参数？
// onClick={ onDel } -> onClick={ () => onDel(id) }
// 注意: 一定不要在模板中写出函数调用的代码 onClick = { onDel(id) }  bad!!!!!!

const TestComponent = () => {

  const list = [

    {

      id: 1001,

      name: 'react'

    },

    {

      id: 1002,

      name: 'vue'

    }

  ]

  const onDel = (e, id) => {

    console.log(e, id)

  }

  return (

    <ul>

      {list.map(item =>（

        <li key={[item.id](http://item.id)}>

          {[item.name](http://item.name)}

          <button onClick={(e) => onDel(e, [item.id](http://item.id))}>x</button>

        </li>

      ))}

    </ul>

  )

}

function App () {

  return (

    <div>

      <TestComponent />

    </div>

  )

}

export default App
```

## 类组件的事件绑定

类组件中的事件绑定，整体的方式和函数组件差别不大

唯一需要注意的 因为处于class类语境下 所以定义事件回调函数以及定它写法上有不同

1. 定义的时候: class Fields语法
   1. 使用的时候: 需要借助this关键词获取

```react&#x20;jsx
import React from "react"

class CComponent extends React.Component {

  // class Fields

  clickHandler = (e, num) => {

    // 这里的this指向的是正确的当前的组件实例对象 

    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法

    console.log(this)

  }

  clickHandler1 () {

    // 这里的this 不指向当前的组件实例对象而指向undefined 存在this丢失问题

    console.log(this)

  }

  render () {

    return (

      <div>

        <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>

        <button onClick={this.clickHandler1}>click me</button>

      </div>

    )

  }

}

function App () {

  return (

    <div>

      <CComponent />

    </div>

  )

}

export default App
```

## 组件状态

`目标任务:` 能够为组件添加状态和修改状态的值

一个前提：在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490044831-869eaf7b-eeae-4a1d-b42f-02e64c0febea.png)

### 1. 初始化状态

- 通过class的实例属性state来初始化
- state的值是一个对象结构，表示一个组件可以有多个数据状态

```react&#x20;jsx
class Counter extends React.Component {

  // 初始化状态

  state = {

    count: 0

  }

  render() {

    return <button>计数器</button>

  }

}
```

### 2. 读取状态

- 通过this.state来获取状态

```react&#x20;jsx
class Counter extends React.Component {

  // 初始化状态

  state = {

    count: 0

  }

  render() {

    // 读取状态

    return <button>计数器{this.state.count}</button>

  }

}
```

### 3. 修改状态

- 语法 &#x20;

  `this.setState({ 要修改的部分数据 })`
- setState方法作用

1. 修改state中的数据状态
2. 更新UI

- 思想 &#x20;

  数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom
- 注意事项 &#x20;

  **不要直接修改state中的值，必须通过setState方法进行修改**
  ```react&#x20;jsx
  class Counter extends React.Component {

    // 定义数据

    state = {

      count: 0

    }

    // 定义修改数据的方法

    setCount = () => {

      this.setState({

        count: this.state.count + 1

      })

    }

    // 使用数据 并绑定事件

    render () {

      return <button onClick={this.setCount}>{this.state.count}</button>

    }

  }
  ```

## this问题说明

![](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490096737-17caed54-acc7-47f3-a25f-4f293c5a0e62.png)

这里我们作为了解内容，随着js标准的发展，主流的写法已经变成了class fields，无需考虑太多this问题

## React的状态不可变

**概念**：不要直接修改状态的值，而是基于当前状态创建新的状态值

**1. 错误的直接修改**

```react&#x20;jsx
state = {

  count : 0,

  list: [1,2,3],

  person: {

    name:'jack',

    age:18

  }

}
```

// 直接修改简单类型Number

```react&#x20;jsx
this.state.count++

++this.state.count

this.state.count += 1

this.state.count = 1
```

// 直接修改数组

```react&#x20;jsx
this.state.list.push(123)
this.state.list.spice(1,1)
```

// 直接修改对象

```react&#x20;jsx
this.state.person.name = 'rose'
```

**2. 基于当前状态创建新值**

## 表单处理

```react&#x20;jsx
this.setState({

  count: this.state.count + 1

  list: [...this.state.list, 4],

  person: {

    ...this.state.person,

    // 覆盖原来的属性 就可以达到修改对象中属性的目的

    name: 'rose'

  }

})
```

使用React处理表单元素，一般有俩种方式：

1. 受控组件 （推荐使用）
2. 非受控组件 （了解）

### 1. 受控表单组件

什么是受控组件？ `input框自己的状态被React组件状态控制`

React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性

**实现步骤**

以获取文本框的值为例，受控组件的使用步骤如下：

1. 在组件的state中声明一个组件的状态数据
2. 将状态数据设置为input标签元素的value属性的值
3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（`即用户当前输入的值`）
4. 调用setState方法，将文本框的值作为state状态的最新值

**代码落地**

```react&#x20;jsx
import React from 'react'

class InputComponent extends React.Component {

  // 声明组件状态

  state = {

    message: 'this is message',

  }

  // 声明事件回调函数

  changeHandler = (e) => {

    this.setState({ message: e.target.value })

  }

  render () {

    return (

      <div>

        {/* 绑定value 绑定事件*/}

        <input value={this.state.message} onChange={this.changeHandler} />

      </div>

    )

  }

}

function App () {

  return (

    <div className="App">

      <InputComponent />

    </div>

  )

}

export default App
```

### 2. 非受控表单组件

什么是非受控组件？

非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值

**实现步骤**

1. 导入`createRef` 函数
2. 调用createRef函数，创建一个ref对象，存储到名为`msgRef`的实例属性中
3. 为input添加ref属性，值为`msgRef`
4. 在按钮的事件处理程序中，通过`msgRef.current`即可拿到input对应的dom元素，而其中`msgRef.current.value`拿到的就是文本框的值

**代码落地**

```react&#x20;jsx
import React, { createRef } from 'react'

class InputComponent extends React.Component {

  // 使用createRef产生一个存放dom的对象容器

  msgRef = createRef()

  changeHandler = () => {

    console.log(this.msgRef.current.value)

  }

  render() {

    return (

      <div>

        {/* ref绑定 获取真实dom */}

        <input ref={this.msgRef} />

        <button onClick={this.changeHandler}>click</button>

      </div>

    )

  }

}

function App () {

  return (

    <div className="App">

      <InputComponent />

    </div>

  )

}

export default App
```
