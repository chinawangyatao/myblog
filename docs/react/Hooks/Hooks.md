---
sidebar_position: 8
---
# Hooks

## 目录

- [hooks解决了什么问题](#hooks解决了什么问题)
- [Hooks优势](#Hooks优势)

[useState](useState/useState.md "useState")

[useEffect](useEffect/useEffect.md "useEffect")

[useLayoutEffect](useLayoutEffect/useLayoutEffect.md "useLayoutEffect")

[useReducer](useReducer/useReducer.md "useReducer")

[useRef](useRef/useRef.md "useRef")

[forwardRef + useImperativeHandle](<forwardRef + useImperativeHand/forwardRef + useImperativeHandle.md> "forwardRef + useImperativeHandle")

[useContext](useContext/useContext.md "useContext")

[memo + useMemo + useCallback](<memo + useMemo + useCallback/memo + useMemo + useCallback.md> "memo + useMemo + useCallback")

> Hooks的本质：一套能够使函数组件更强大，更灵活的“钩子”

经过多年的实战，函数组件是一个更加匹配React的设计理念 `UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生

## hooks解决了什么问题

Hooks的出现解决了俩个问题 1.组件的状态逻辑复用 2.class组件自身的问题

1. 组件的逻辑复用

在hooks出现之前，react先后尝试了 mixins混入，HOc高阶组件，render-props等模式但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等

1. class组件自身的问题

class组件就像一个厚重的战舰’一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的快艇

## Hooks优势

1. 告别难以理解的 Class&#x20;

&#x20; 2.解决业务逻辑难以拆分的问题

&#x20; 3.使状态逻辑复用变得简单可行

&#x20; 4.函数组件在设计思想上，更加契合React的理念
