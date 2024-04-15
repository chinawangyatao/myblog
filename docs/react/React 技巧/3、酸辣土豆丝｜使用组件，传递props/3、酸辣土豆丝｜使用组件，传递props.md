---
sidebar_position: 3
sidebar_label: 3、酸辣土豆丝｜使用组件，传递props
sidebar_class_name: green
---
# 3、酸辣土豆丝｜使用组件，传递props

使用组件，传递props：

```javascript
const { data, type, something } = this.state;

<Demo 

  data={data}

  type={type}

  something={something}

/>
```

也许另外一种传递方式更简洁：

```javascript
const { data, type, something } = this.state;

<Demo 

  {...{ data, id, something }}

/>
```
