---
sidebar_position: 2
---

# JavaScript 对象深拷贝实现

JavaScript 对象深拷贝的实现，是经常被问到的面试题之一。

深拷贝指的是，对于有嵌套的引用类型（例如对象（包括特殊的 Map、Set、RegExp 等）、数组）的属性，需要继续递归的拷贝，以返回全新的引用。

```js
const obj = {
    a: 1,
    o: {
        b: 2
    }
}

copiedObj = {
    a: 1,
    o: {
        b: 2
    }
}

obj.o === copiedObj.o // false
```

相对于深拷贝的是浅拷贝，它只拷贝对象的顶级属性，嵌套的引用类型直接复制引用，这样原对象和拷贝出来的对象，修改嵌套的引用类型，会同时反应到这些对象中，这些在前端开发中，可能会引起组件不刷新等问题。而深拷贝则不会。

```js
const obj = {
    a: 1,
    o: {
        b: 2
    }
}

copiedObj = {...obj};

copiedObj.o.b = 3;
obj.o.b; // 3
```

## 基本实现

实现深拷贝的过程，可以利用树的深度优先遍历类似的算法，递归的拷贝对象中的所有引用类型：

```js
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const temp = new obj.constructor();
    for (var key in obj) {
        temp[key] = deepClone(obj[key]);
    }
    return temp;
}
```

对于基本类型的数据，例如 Number、Boolean、String，我们直接返回它们的值，因为基本类型本身就是拷贝值，不会拷贝引用：

```js
if (obj === null || typeof obj !== "object") {
    return obj;
}
```

对于引用类型的数据，例如对象或数组，我们调用他们的构造函数，创建一个新的引用，之后遍历原引用类型中的所有属性，递归拷贝：

```js
const temp = new obj.constructor();
for (var key in obj) {
    temp[key] = deepClone(obj[key]);
}
return temp;
```

## Set、Map

对于 Set 和 Map 类型的数据，我们需要拿出来它们其中所有的数据，再递归的拷贝，因为如果这里的数据有引用类型的，使用 Set、Map
构造函数，并传递原数据，仍然是浅拷贝：

```js
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Set) {
        const temp = new Set();
        obj.forEach((item) => {
            temp.add(deepClone(item));
        });
        return temp;
    } else if (obj instanceof Map) {
        const temp = new Map();
        obj.forEach((item, key) => {
            temp.set(key, deepClone(item));
        });
        return temp;
    } else {
        const temp = new obj.constructor();
        for (var key in obj) {
            temp[key] = deepClone(obj[key]);
        }
        return temp;
    }
}
```

## RegExp

对于正则表达式，直接使用 RegExp 构造函数，把原正则表达式作为参数传递就可以：

```js
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Set) {
        const temp = new Set();
        obj.forEach((item) => {
            temp.add(deepClone(item));
        });
        return temp;
    } else if (obj instanceof Map) {
        const temp = new Map();
        obj.forEach((item, key) => {
            temp.set(key, deepClone(item));
        });
        return temp;
    } else if (obj instanceof RegExp) {
        const temp = new RegExp(obj);
        return temp;
    } else {
        const temp = new obj.constructor();
        for (var key in obj) {
            temp[key] = deepClone(obj[key]);
        }
        return temp;
    }
}
```

## 避免循环引用

有时，对象中可能有循环引用的情况，这个时候，我们需要在函数中维护一个缓存，记录已经拷贝过的引用类型属性，值为拷贝后的新的引用，在发现循环引用之后，直接使用缓存中的结果，而不是再次拷贝，形成死循环：

```js
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let cache = null;
    if (!deepClone.cache) {
        deepClone.cache = new WeakMap();
    }
    cache = deepClone.cache;

    if (cache.has(obj)) {
        return cache.get(obj);
    }

    if (obj instanceof Set) {
        const temp = new Set();
        cache.set(obj, temp);
        obj.forEach((item) => {
            temp.add(deepClone(item));
        });
        return temp;
    } else if (obj instanceof Map) {
        const temp = new Map();
        cache.set(obj, temp);
        obj.forEach((item, key) => {
            temp.set(key, deepClone(item));
        });
        return temp;
    } else if (obj instanceof RegExp) {
        const temp = new RegExp(obj);
        return temp;
    } else {
        const temp = new obj.constructor();
        cache.set(obj, temp);
        for (var key in obj) {
            temp[key] = deepClone(obj[key]);
        }
        return temp;
    }
}
```
