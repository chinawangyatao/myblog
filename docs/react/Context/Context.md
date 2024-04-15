---
sidebar_position: 10
---
# Context

## 目录

- [1.1 介绍](#11-介绍)
  - [其实就是：跨层级传值](#其实就是跨层级传值)

# 1.1 介绍

Context提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法在一个典型的 React 应用中，数据是通过 props属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI主题），这些属性是应用程序中许多组件都需要白 Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

## 其实就是：跨层级传值

语法

```react&#x20;jsx
//在。js中建立一个仓库
import React from "react";
const mycontext = React.createContext();//封装一个context组件
export default mycontext;
```

```react&#x20;jsx
 <mycontext.Provider value={this.state}>
          <Ceng2
            getmsg={(msg) => {
              this.setState({
                msg: msg,
              });
            }}
          ></Ceng2>
</mycontext.Provider>
//利用context组件的Provider（提供者）方法向后代组件传递消息，其中value表示的是传递的变量或者方法

//子孙组件可以用.Consumer（消费者）方法进行接受
<mycontext.Consumer>{(value) => <p>{value.num}</p>}</mycontext.Consumer>


```

注意：`.Consumer` 是老方法，能用，不推荐

推荐官网方法

```react&#x20;jsx
function Button() {
  // ✅ 推荐方式
  const theme = useContext(ThemeContext);
  return <button className={theme} />;
}
```
