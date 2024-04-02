# Go 语言基础入门


Go 语言是一门简单易学的编程语言，由 Goolge 开发，支持多线程，并拥有庞大的社区生态。近期 Go 语言在企业项目中应用的越来越多，那么这个视频将会介绍 Go 的重点语法，方便你快速上手。


## 安装与环境配置

点击 [下载](https://go.dev/learn/)。双击安装包安装。 验证：


```Bash

go version

```


输出：


```Bash

go version go1.19 darwin/amd64

```


## 创建项目


找到合适目录：


```Bash

mkdir go-get-started

cd go-get-started

```


初始化：


```

go mod init github.com/zxuqian/go-get-started

```



## Hello World


在 `webstorm` 中 创建 main.go 文件，代码：


```go

package main


import "fmt"


func main() {

    fmt.Println("Hello, World!")

}

```


运行：


```

go run .

```


**_Go 语言代码无需分号_**


## 变量


在函数里定义定义变量可以使用 := 符号，在定义的同时进行赋值，Go 会自动推断变量类型：


```go

func main() {

   a := 1

   fmt.Println(a)

}

```


也可以使用 var 关键字，使用 = 赋初始值：


```go

func main() {

   var b = 2

   fmt.Println(b)

}

```


如果不赋初始值，需要给变量指定类型：


```go

func main() {

   var b int

   b = 2

}

```


如果在函数外，也就是顶级作用域，定义变量，必须使用 var 关键字


```go

var b = 2

func main() {

  fmt.Println(b)

}

```


## 基本类型


Go 语言提供了这样一组基本类型：


-   int 整数类型，以及相关位数的变体，其中 byte 是 unit 8 的别名，rune 是 int32 的别名。一般直接使用 int 类型，它在 32 位和 64 位平台下会分别取对应位数长度。

-   float 是浮点数类型

-   complex 是复数类型

-   bool 是布尔类型

-   string 是字符串类型


```go

int  int8  int16  int32  int64

uint uint8 uint16 uint32 uint64 uintptr


byte // uint8 别名

rune // int32 别名


float32 float64


complex64 complex128


bool


string

```


我们可以利用 fmt.Printf() 来获取变量类型。Printf() 函数第一个参数接收字符串模板，我们可以利用 %T 来占位，后面的参数按顺序给前面的占位传递实际的值：


```go

func main() {

    a := 1

    fmt.Printf("a 的类型为: %T\n", a) // a 的类型为: int


    b := 3.2

    fmt.Printf("b 的类型为: %T\n", b) // b 的类型为: float64


    c := false

    fmt.Printf("c 的类型为: %T\n", c) // c 的类型为: bool


    d := "str"

    fmt.Printf("d 的类型为: %T\n", d) // d 的类型为: string

}

```


## 运算符


Go 的运算符与流行的编程语言基本保持一致，有数学运算符 `+、-、*、/、%`，比较运算符 `<、>、<=、>=、==`，位运算符 `&、|、^`， 逻辑运算符 `&&、||、!` 等这些。


```go

func main() {

    a := 5;

    b := 10;

    fmt.Println(a + 5) // 10

    fmt.Println(b % 3) // 1

    fmt.Println(a <= b) // true

    fmt.Println(a & b) // 0

    fmt.Println(true && !false) // true

}

```


## 分支


Go 语言的分支结构与流行的编程语言基本类似，只是 if 条件后，不需要加小括号：


```go

func main() {

  a := 10

  if a > 10 {

    fmt.Println("a 大于 10")

  } else if a > 5 {

    fmt.Println("a 大于 5") // 会执行这里

  } else {

    fmt.Println("a 不大于 5")

  }

}

```


if 中也可以初始化变量，这个变量只能在 `if/else` `if/else `语句块中使用，初始化变量和条件判断的代码使用 ; 分号隔开：


```go

func main() {

    a := 10

    if b := 3; a > 10 {

        fmt.Println("a 大于 10")

    } else if a > 5 {

        fmt.Println("a 大于 5") // 会执行这里

        fmt.Println(b) // 3

    } else {

        fmt.Println("a 不大于 5")

    }

}

```


Go 也支持 switch case 语句，不过在一个 case 匹配之后，不会执行后续的 case，可以省略 break：


```go

func main() {

    a := 10

    switch a {

        case 1:

        fmt.Println("a 等于 1")

        case 5:

        fmt.Println("a 等于 5")

        case 10:

        fmt.Println("a 等于 10")

        default:

        fmt.Println(a)

    }

}

```


## 循环


Go 中的循环语句只有 for 循环一种，根据传递给它的参数的不同，可以模拟其他编程语言中的 while 循环和 for 循环。Go 中的 for 循环和其他编程语言中的类似，接收 3 部分，第一部分是变量初始化，第二部分是判断条件，第三部分是循环后的操作，这三部分不用放到小括号里：


```go

func main() {

    for i := 1; i < 5; i++ {

        fmt.Println(i)

    }

}


// 1

// 2

// 3

// 4

```


如果只使用第 2 部分，可以模拟 while 循环：


```go

func main() {

    i := 1

    for i < 5 {

        fmt.Println(i)

        i++

    }

}

```


## 函数


在 Go 中定义函数使用 func 关键字，之后是函数的名字和函数的参数列表，最后是函数的返回值类型，在函数体里可以编写业务逻辑，最后使用 return 语句返回符合类型的值：


```go

func sum(a int, b int) int {

	return a + b

}


func main() {

	fmt.Println(sum(1, 2)) // 3

}

```


如果函数的参数的类型都一样，可以只在最后一个参数写上类型：


```go

func sum(a, b int) int {

	return a + b

}

```


如果函数没有返回值，也可以省略返回值类型：


```go

func sum(a, b int) {

	fmt.Println(a + b)

}


func main() {

	sum(1, 2)

}

```


函数也可以返回多个值：


```go

func swap(a, b int) (int, int) {

	return b, a

}


func main() {

	a, b := swap(1, 2)

	fmt.Println(a, b) // 2 1

}

```


在 Go 中，函数也可以作为值，放到变量中，或者作为其他函数的参数进行传递：


```go

func sum(a int, b int, transform func(int) int) int {

	return transform(a) + transform(b)

}


func main() {

	square := func(x int) int {

		return x * x

	}

	fmt.Println(sum(1, 2, square)) // 5

}

```


## 数组 / slice


接下来看几个高级的类型。先看数组，数组在 Go 中是固定长度且不可变的，定义数组使用 [] 后面跟上类型，再在后面使用一对大括号指定数组初始值：


```go

func main() {

	a := [5]int{1, 2, 3, 4, 5}

	fmt.Println(a)

}

```


如果要定义可变长度的数组，可以使用 slice 类型和 make() 函数，make 函数的第 2 个参数可以指定 slice 长度，后面可以通过 append() 函数对 slice 追加元素：


```go

func main() {

	a := make([]int, 0)

	a = append(a, 1, 2, 3, 4)

	fmt.Println(a) // [1 2 3 4]

}

```


或者也可以使用字面值，与数组字面值不同的是，slice 的方括号里不用指定长度：


```go

a := []int{1, 2, 3, 4}

```


修改 slice 的某个元素的值，可以使用下标的方式：


```go

func main() {

	a := make([]int, 0)

	a = append(a, 1, 2, 3, 4)

	a[0] = 5

	fmt.Println(a) // [5 2 3 4]

}

```


slice 类型是对数组创建了一个视图，并且里边的数据还是引用的原来的数组。


## Map


在 Go 里，定义键值对类型的结构也是使用叫做 map 的类型。可以使用 map 关键字进行定义，map 后面的中括号指定 key 的类型，中括号后面指定值的类型，再使用一对大括号指定初始值：


```go

func main() {

	m := map[string]int{"a": 1, "b": 2}

	fmt.Println(m) // map[a:1 b:2]

}

```


如果无需初始值，也可以使用 make 函数定义：


```go

func main() {

	m := make(map[string]int)

	m["a"] = 1

	m["b"] = 2

	fmt.Println(m) // map[a:1 b:2]

}

```


## 结构


Go 语言中，可以存放多种数据类型的结构为 struct 类型，结构类型，类似于其他语言中的结构，对象或者 class。 定义结构使用 type 关键字，然后是自定义的结构名字，再后面是 struct 关键字，后面是一对大括号，在里边可以定义一组属性，由自定义的属性名和类型构成：


```go

type Point struct {

	X int

	Y int

}

```


初始化结构可以使用结构名字，后面跟上一对大括号，里边给每个属性都赋值：


```go

func main() {

	p := Point{1, 2}

    fmt.Println(p) // {1, 2}

}

```


要访问或修改结构中的值，可以使用 . 点号语法：


```go

p.X = 3

fmt.Println(p) // {3 2}

```


### 指针


Go 语言中，有指针类型，可以用多个指针指向同一个 struct。上边我们初始化的 struct p，如果原封不动的赋值给一个新变量 q，那么，如果修改 p 中的某个值时，是不会反应到 q 中的，这是因为默认变量赋值是按值复制的：


```go

	q := p

	p.X = 3

	fmt.Println(q) // {1 2}

	fmt.Println(p) // {3 2}

```


如果使用 & 获取 p 的地址，再赋值给 q，再修改 p 中的属性就可以反应到 q 中了，注意要获取 q 的值需要使用*进行返引用：


```go

	q := &p

	p.X = 3

	fmt.Println(*q)

	fmt.Println(p)

```


要修改 q 中的值，可以省略 * 号，Go 会自动反引用：


```go

q.Y = 10

fmt.Println(*q) // {3 10}

```


## 方法


结构也可以添加方法。方法的定义和函数类似，区别是它在 func 关键字后面接收作用结构作为参数，之后在方法体中，可以对结构进行操作，方法名推荐首字母大写：


```go

// 作用结构

func (p Point) SetPoint(x, y int) {

	p.x = x

	p.y = y

}

```


这里要注意方法是定义在结构的外部，不是内部。 调用方法，可以直接使用结构变量加点号加方法名：


```go

p.SetPoint(3, 4)

```


不过，在定义作用对象时，如果没有使用*号指针形式，那么作用结构就是按值传递的，对原结构的修改不会生效：


```go

p := Point{1, 2}

p.SetPoint(3, 4)

fmt.Println(p) // {1 2}

```


大部分情况下需要加上*号，按引用传递：


```go

func (p *Point) SetPoint(x, y int) {

	p.x = x

	p.y = y

}


p.SetPoint(3, 4)

fmt.Println(p) // {3 4}

```


## 接口



Go 语言也支持 interface 接口特性。接口可以为结构规定一组必须要实现的方法，后面在使用的时候，只要结构实现了这些方法，无论它是什么结构类型，都可以调用，实现多态特性。


```go

type Shape interface {

	Print() // 无需 func 关键字

}


type Rectangle struct{}

type Triangle struct{}


func (r Rectangle) Print() {

	fmt.Println("矩形")

}


func (t Triangle) Print() {

	fmt.Println("三角形")

}

```


要定义接口：


-   使用 type 关键字，加上接口的名字，后面跟上 interface 关键字

-   里边定义方法，不需要方法体，也不需要 func 关键字


```go

type Shape interface {

	Print() // 无需 func 关键字

}

```


如果结构要实现接口，只需要定义同名的方法即可：


```go

type Rectangle struct{}

type Triangle struct{}


func (r Rectangle) Print() {

	fmt.Println("矩形")

}


func (t Triangle) Print() {

	fmt.Println("三角形")

}

```


在使用的时候，直接定义接口类型的变量，而实际调用的是哪个结构的方法，可以不用关心：


```go

func main() {

	var s Shape

	s = Rectangle{} // 矩形

	s.Print()

	s = Triangle{}

	s.Print()      // 三角形

}

```


这种情况也适合接口作为函数参数的情况：


```go

// 示例 2

func printShape(s Shape) {

    s.Print()

}


func main() {

    printShape(Rectangle{})

	printShape(Triangle{})

}

```


## 错误处理


Go 语言中进行错误处理，通常是通过函数返回多个值来实现的，例如有些 Go 内置的函数会返回两个值，第一个是正常的结果，第二个是错误对象，我们只需要判断错误对象是不是 nil，即有没有值就可以了：


```go

n, err := fmt.Println("dd")

if err != nil {

    // 执行正常代码

} else {

    // 执行异常代码

}

```


## 并发


Go 语言支持并发和多线程。线程在 Go 语言中叫做 Goroutines。


### Goroutines


我们可以使用 go 关键字来执行函数，为函数开启一个新的线程：


```go

func func1() {

	time.Sleep(500 * time.Millisecond)

	fmt.Println("函数 1")

}

func func2() {

	fmt.Println("函数 2")

}


func main() {

	go func2()

	func1()

}

```


注意 func1 中使用了 time.Sleep() 来让 func1() 所在的线程等待 500 毫秒，因为 func1 执行完成后程序会直接退出，不会等待其他 Gorountines 执行完毕。


### Channels


既然有多线程，那么也会有并发和同步的问题。Go 语言通过 channels 管道，来让多个线程之间进行通信，共享变量等等。可以把它想象成一个管道或队列，每个线程可以给它发送数据，也可以从中接收数据。


创建 channels 也是使用 make() 函数，里边使用 chan 关键字，加上管道里要发送和接收的数据类型。 要给管道发送数据，使用 `<-` 符号，管道在左侧，值在右侧。 要接收管道的数据，管道在右侧，变量赋值在左侧。 要注意的是，发送和接收管道数据会阻塞线程，所以需要把它们放到单独的 Goroutines 中：


```go

func func1(ch chan string) {

	ch <- "函数 1"

}

func func2(ch chan string) {

	ch <- "函数 2"

}


func main() {

	ch := make(chan string)

	go func2(ch)

	res1 := <-ch


	go func1(ch)

	res2 := <-ch


	fmt.Println(res1, res2)

}

```
