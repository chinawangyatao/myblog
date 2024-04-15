---
sidebar_position: 9
sidebar_label: 9、麻婆豆腐｜永远不要直接设置state的值
---
# 9、麻婆豆腐｜永远不要直接设置state的值

永远不要直接设置state的值：`this.state.data = { a: 1 }`。这个会导致几个问题： 1：组件不会重新渲染 2：shouldComponentUpdate(nextProps, nextState) 函数里面 this.state的值是已经改变了,和nextState的值相同。

举个栗子：

```javascript
// wrong
const { data } = this.state;
data.a = 1;     // 等价于this.state.data.a = 1;
this.setState({ data }); // shouldComponentUpdate里面观察到 this.state 和nextState的值是相同的
// 此时函数里面性能相关的优化是无效的

// correct  需要用到当前state值的写法
this.setState(state => ({ data: {...state.data, a: 1} }))
```
