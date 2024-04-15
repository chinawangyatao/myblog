---
sidebar_position: 8
sidebar_label: 8、粉丝白菜虾仁汤｜子组件改变父组件的state
---
# 8、粉丝白菜虾仁汤｜子组件改变父组件的state

子组件改变父组件的state方式有很多种，可以在父组件设置一个通用函数，类似：setParentState，通过子组件回调处理时，就可以更方便的统一处理：

```javascript
// 父组件
state = {
    data: {}
}
setParentState = obj => {
    this.setState(obj);
}
// 子组件
onClick = () => {
    this.props.setParentState({ data: xxx });
}
```
