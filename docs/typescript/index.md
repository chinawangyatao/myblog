# any & void & unknown

## any
可以是任意类型

## void
没有任何返回数值的函数

## unknown 
与 any 一样，所有类型都可以分配给 unknown，反之把 unknown 赋值给其它类型会报错。


## 总结：

能确定类型的，尽量定义类型。

无法确定类型的，可以使用 any进行兜底。

当函数没有返回值时，可以使用void定义。

any和unknown可以接收任意类型值，any可以赋值给任意类型，但unknown不可以赋值给任意类型。

void和any在项目中是比较常见的， 在 never和unknown不常用。
