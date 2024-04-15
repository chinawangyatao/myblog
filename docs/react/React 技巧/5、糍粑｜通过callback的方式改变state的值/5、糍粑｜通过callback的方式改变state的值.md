---
sidebar_position: 5
sidebar_label: 5、糍粑｜通过callback的方式改变state的值
sidebar_class_name: green
---
# 5、糍粑｜通过callback的方式改变state的值

一般改变state值的一种方式：

```javascript
const { data } = this.state;
this.setState({ data: {...data, key: 1 } });
```

另外一种可以通过callback的方式改变state的值

```javascript
this.setState(({ data }) => ({ data: {...data, key: 1 } }));
```

还可以：

```javascript
this.setState((state, props) => {
    return { counter: state.counter + props.step };
});
```

希望在异步回调或闭包中获取最新状态并设置状态，此时获取的状态不是实时的，React 官方文档提到：组件内部的任何函数，包括事件处理函数和 Effect，都是从它被创建的那次渲染中被「看到」的，所以引用的值任然是旧的，最后导致 setState 出现异常：
