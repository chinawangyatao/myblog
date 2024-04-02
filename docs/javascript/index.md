---
sidebar_position: 1
---

# 6 种方式给 JavaScript 数组添加元素

## Array.push()[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#arraypush "Direct link to heading")

第一种是使用 array.push() 方法，可以追加新的元素到原数组的末尾，push() 接收一个可变参数，可以一次性追加多个元素。这个方法会直接修改原数组：

```js
let arr = [1, 2, 3, 4];
arr.push(5);
arr; // [1, 2, 3, 4, 5]
arr.push(6, 7);
arr; // [1, 2, 3, 4, 5, 6, 7]
```

## Array.unshift()[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#arrayunshift "Direct link to heading")

第二种是使用 array.unshift()，与 push() 的操作类似，只是把元素追加到数组的开始，它也会直接修改原数组：

```js
let arr = [1, 2, 3, 4];
arr.unshift(5);
arr; // [5, 1, 2, 3, 4]
arr.unshift(6, 7);
arr; // [6, 7, 5, 1, 2, 3, 4]
```

## Array.splice()[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#arraysplice "Direct link to heading")

第三种是使用 array.splice()，splice() 方法既可以删除数组元素，也可以添加元素到数组中，splice() 第 1 个参数接收要添加或删除元素的索引位置，第 2 个参数指定要删除的元素个数，如果指定为 0，那么就是添加元素，第 3 个参数是变长参数，可以指定多个要添加的元素：

```js
let arr = [1, 2, 3, 4];
arr.splice(4, 0, 5);
arr; // [1, 2, 3, 4, 5]
arr.splice(4, 0, 6, 7);
arr; // [1, 2, 3, 4, 6, 7, 5]
```

## Array.length[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#arraylength "Direct link to heading")

第四种是使用数组的 length 属性，因为 length 表示数组最后一个索引加 1 的位置，直接给这个位置赋值，数组长度会自动加 1，并把新添加的值作为最后一个元素添加到数组中：

```js
let arr = [1, 2, 3, 4];
arr[arr.length] = 5;
arr;
```

## Array.concat()[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#arrayconcat "Direct link to heading")

第五种是使用 array.concat()，与 push() 类似，只是 array.concat() 既可以接收多个单个的值，也可以接收多个数组，或者是混合形式，它会把数组中的值拿出来，并追加到调用 concat() 的数组中，这个方法会返回一个新数组，不会修改原数组：

```js
[1, 2, 3, 4].concat(5, 6, 7);
[1, 2, 3, 4].concat(5, [6, 7], [8]);
```

## 展开运算符[​](https://zxuqian.cn/videos/js/6-ways-to-add-elements-to-an-array#%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6 "Direct link to heading")

第六种是使用展开运算符，展开运算符与 concat() 的操作类似，使用它可以把展开的数组元素以及新添加的元素放到同一个数组中，同时也不会修改原数组，而是返回新数组：

```js
[...[1, 2, 3, 4], 5]; // [1, 2, 3, 4, 5]
[...[1, 2, 3, 4], ...[5, 6]]; // [1, 2, 3, 4, 5, 6]
```
