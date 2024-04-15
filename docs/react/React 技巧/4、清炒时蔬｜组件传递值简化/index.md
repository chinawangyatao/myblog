---
sidebar_position: 4
sidebar_label: 4、清炒时蔬｜组件传递props简化
sidebar_class_name: green
---

# 4、清炒时蔬｜组件传递props通过扩展运算符和解构赋值可以简化


组件的props有时候会定义很多，但是调用组件传递props的时候又想一个个传，不想一次性传递一个option对象，通过扩展运算符和解构赋值可以简化此操作：


```javascript

const Demo = ({ prop1, prop2, prop3, ...restProps }) => (

    <div>

        xxxx

        { restProps.something }

    </div>

)

// 父组件使用Demo

<Demo

    prop1={xxx}

    prop2={xxx}

    something={xxx}

/>

```
