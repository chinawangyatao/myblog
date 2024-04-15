---
sidebar_position: 7
---
# props深入

## 目录

- [props的children属性](#props的children属性)
- [props校验](#props校验)

### props的children属性

如果父组件是个双标签`<FatherCom></FatherCom>` 并且内部有内容，`props`可以用`.children`属性进行获取

```react&#x20;jsx
//父组件
<Ceng2
            getmsg={(msg) => {
              this.setState({
                msg: msg,
              });
            }}
          >
            <Ceng3></Ceng3>
          </Ceng2>
```

```react&#x20;jsx
//子组件
    <p>props的子节点：{this.props.children}</p>

```

### props校验

对于组件来说，props是外来的，无法保证使用者传入什么格式的数据

props校验可以在组件创建时约束组件的类型

捕获使用组件时因为props导致的错误，给出明确的错误提示，增加组件的健壮性。

```react&#x20;jsx
App.ProTypes = {
colors:PropTypes.array
}
```

使用：

```react&#x20;jsx
//安装prop-type包
npm install props-type
或者
yarn add props-type
```

```react&#x20;jsx
//导入包
improt PropType from “prop-type”

//使用方法：组件名字.propType={}来给组件的props添加校验规则
App.propType ={
colors:PropType.array
}


```
