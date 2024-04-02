"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[4475],{5631:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=l(4848),c=l(8453);const r={},s="Go \u8bed\u8a00\u57fa\u7840\u5165\u95e8",a={id:"golang/index",title:"Go \u8bed\u8a00\u57fa\u7840\u5165\u95e8",description:"Go \u8bed\u8a00\u662f\u4e00\u95e8\u7b80\u5355\u6613\u5b66\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u7531 Goolge \u5f00\u53d1\uff0c\u652f\u6301\u591a\u7ebf\u7a0b\uff0c\u5e76\u62e5\u6709\u5e9e\u5927\u7684\u793e\u533a\u751f\u6001\u3002\u8fd1\u671f Go \u8bed\u8a00\u5728\u4f01\u4e1a\u9879\u76ee\u4e2d\u5e94\u7528\u7684\u8d8a\u6765\u8d8a\u591a\uff0c\u90a3\u4e48\u8fd9\u4e2a\u89c6\u9891\u5c06\u4f1a\u4ecb\u7ecd Go \u7684\u91cd\u70b9\u8bed\u6cd5\uff0c\u65b9\u4fbf\u4f60\u5feb\u901f\u4e0a\u624b\u3002",source:"@site/docs/golang/index.md",sourceDirName:"golang",slug:"/golang/",permalink:"/myblog/docs/golang/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/golang/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc36 Golang",permalink:"/myblog/docs/category/-golang"},next:{title:"\ud83c\udf1f \u5c0f\u6848\u4f8b",permalink:"/myblog/docs/category/-\u5c0f\u6848\u4f8b"}},t={},d=[{value:"\u5b89\u88c5\u4e0e\u73af\u5883\u914d\u7f6e",id:"\u5b89\u88c5\u4e0e\u73af\u5883\u914d\u7f6e",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u57fa\u672c\u7c7b\u578b",id:"\u57fa\u672c\u7c7b\u578b",level:2},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:2},{value:"\u5206\u652f",id:"\u5206\u652f",level:2},{value:"\u5faa\u73af",id:"\u5faa\u73af",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u6570\u7ec4 / slice",id:"\u6570\u7ec4--slice",level:2},{value:"Map",id:"map",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u6307\u9488",id:"\u6307\u9488",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:2},{value:"\u5e76\u53d1",id:"\u5e76\u53d1",level:2},{value:"Goroutines",id:"goroutines",level:3},{value:"Channels",id:"channels",level:3}];function o(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"go-\u8bed\u8a00\u57fa\u7840\u5165\u95e8",children:"Go \u8bed\u8a00\u57fa\u7840\u5165\u95e8"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u662f\u4e00\u95e8\u7b80\u5355\u6613\u5b66\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u7531 Goolge \u5f00\u53d1\uff0c\u652f\u6301\u591a\u7ebf\u7a0b\uff0c\u5e76\u62e5\u6709\u5e9e\u5927\u7684\u793e\u533a\u751f\u6001\u3002\u8fd1\u671f Go \u8bed\u8a00\u5728\u4f01\u4e1a\u9879\u76ee\u4e2d\u5e94\u7528\u7684\u8d8a\u6765\u8d8a\u591a\uff0c\u90a3\u4e48\u8fd9\u4e2a\u89c6\u9891\u5c06\u4f1a\u4ecb\u7ecd Go \u7684\u91cd\u70b9\u8bed\u6cd5\uff0c\u65b9\u4fbf\u4f60\u5feb\u901f\u4e0a\u624b\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88c5\u4e0e\u73af\u5883\u914d\u7f6e",children:"\u5b89\u88c5\u4e0e\u73af\u5883\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:["\u70b9\u51fb ",(0,i.jsx)(e.a,{href:"https://go.dev/learn/",children:"\u4e0b\u8f7d"}),"\u3002\u53cc\u51fb\u5b89\u88c5\u5305\u5b89\u88c5\u3002 \u9a8c\u8bc1\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"\ngo version\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"\ngo version go1.19 darwin/amd64\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u521b\u5efa\u9879\u76ee",children:"\u521b\u5efa\u9879\u76ee"}),"\n",(0,i.jsx)(e.p,{children:"\u627e\u5230\u5408\u9002\u76ee\u5f55\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"\nmkdir go-get-started\n\ncd go-get-started\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u521d\u59cb\u5316\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\ngo mod init github.com/zxuqian/go-get-started\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"webstorm"})," \u4e2d \u521b\u5efa main.go \u6587\u4ef6\uff0c\u4ee3\u7801\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\npackage main\n\n\nimport "fmt"\n\n\nfunc main() {\n\n    fmt.Println("Hello, World!")\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\ngo run .\n\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.em,{children:"Go \u8bed\u8a00\u4ee3\u7801\u65e0\u9700\u5206\u53f7"})})}),"\n",(0,i.jsx)(e.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u51fd\u6570\u91cc\u5b9a\u4e49\u5b9a\u4e49\u53d8\u91cf\u53ef\u4ee5\u4f7f\u7528 := \u7b26\u53f7\uff0c\u5728\u5b9a\u4e49\u7684\u540c\u65f6\u8fdb\u884c\u8d4b\u503c\uff0cGo \u4f1a\u81ea\u52a8\u63a8\u65ad\u53d8\u91cf\u7c7b\u578b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n   a := 1\n\n   fmt.Println(a)\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528 var \u5173\u952e\u5b57\uff0c\u4f7f\u7528 = \u8d4b\u521d\u59cb\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n   var b = 2\n\n   fmt.Println(b)\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u8d4b\u521d\u59cb\u503c\uff0c\u9700\u8981\u7ed9\u53d8\u91cf\u6307\u5b9a\u7c7b\u578b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n   var b int\n\n   b = 2\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u5728\u51fd\u6570\u5916\uff0c\u4e5f\u5c31\u662f\u9876\u7ea7\u4f5c\u7528\u57df\uff0c\u5b9a\u4e49\u53d8\u91cf\uff0c\u5fc5\u987b\u4f7f\u7528 var \u5173\u952e\u5b57"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nvar b = 2\n\nfunc main() {\n\n  fmt.Println(b)\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u7c7b\u578b",children:"\u57fa\u672c\u7c7b\u578b"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u63d0\u4f9b\u4e86\u8fd9\u6837\u4e00\u7ec4\u57fa\u672c\u7c7b\u578b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"int \u6574\u6570\u7c7b\u578b\uff0c\u4ee5\u53ca\u76f8\u5173\u4f4d\u6570\u7684\u53d8\u4f53\uff0c\u5176\u4e2d byte \u662f unit 8 \u7684\u522b\u540d\uff0crune \u662f int32 \u7684\u522b\u540d\u3002\u4e00\u822c\u76f4\u63a5\u4f7f\u7528 int \u7c7b\u578b\uff0c\u5b83\u5728 32 \u4f4d\u548c 64 \u4f4d\u5e73\u53f0\u4e0b\u4f1a\u5206\u522b\u53d6\u5bf9\u5e94\u4f4d\u6570\u957f\u5ea6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"float \u662f\u6d6e\u70b9\u6570\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"complex \u662f\u590d\u6570\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"bool \u662f\u5e03\u5c14\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"string \u662f\u5b57\u7b26\u4e32\u7c7b\u578b"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nint  int8  int16  int32  int64\n\nuint uint8 uint16 uint32 uint64 uintptr\n\n\nbyte // uint8 \u522b\u540d\n\nrune // int32 \u522b\u540d\n\n\nfloat32 float64\n\n\ncomplex64 complex128\n\n\nbool\n\n\nstring\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5229\u7528 fmt.Printf() \u6765\u83b7\u53d6\u53d8\u91cf\u7c7b\u578b\u3002Printf() \u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u6536\u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528 %T \u6765\u5360\u4f4d\uff0c\u540e\u9762\u7684\u53c2\u6570\u6309\u987a\u5e8f\u7ed9\u524d\u9762\u7684\u5360\u4f4d\u4f20\u9012\u5b9e\u9645\u7684\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n    a := 1\n\n    fmt.Printf("a \u7684\u7c7b\u578b\u4e3a: %T\\n", a) // a \u7684\u7c7b\u578b\u4e3a: int\n\n\n    b := 3.2\n\n    fmt.Printf("b \u7684\u7c7b\u578b\u4e3a: %T\\n", b) // b \u7684\u7c7b\u578b\u4e3a: float64\n\n\n    c := false\n\n    fmt.Printf("c \u7684\u7c7b\u578b\u4e3a: %T\\n", c) // c \u7684\u7c7b\u578b\u4e3a: bool\n\n\n    d := "str"\n\n    fmt.Printf("d \u7684\u7c7b\u578b\u4e3a: %T\\n", d) // d \u7684\u7c7b\u578b\u4e3a: string\n\n}\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd0\u7b97\u7b26",children:"\u8fd0\u7b97\u7b26"}),"\n",(0,i.jsxs)(e.p,{children:["Go \u7684\u8fd0\u7b97\u7b26\u4e0e\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u57fa\u672c\u4fdd\u6301\u4e00\u81f4\uff0c\u6709\u6570\u5b66\u8fd0\u7b97\u7b26\xa0",(0,i.jsx)(e.code,{children:"+\u3001-\u3001*\u3001/\u3001%"}),"\uff0c\u6bd4\u8f83\u8fd0\u7b97\u7b26\xa0",(0,i.jsx)(e.code,{children:"<\u3001>\u3001<=\u3001>=\u3001=="}),"\uff0c\u4f4d\u8fd0\u7b97\u7b26\xa0",(0,i.jsx)(e.code,{children:"&\u3001|\u3001^"}),"\uff0c \u903b\u8f91\u8fd0\u7b97\u7b26\xa0",(0,i.jsx)(e.code,{children:"&&\u3001||\u3001!"}),"\xa0\u7b49\u8fd9\u4e9b\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n    a := 5;\n\n    b := 10;\n\n    fmt.Println(a + 5) // 10\n\n    fmt.Println(b % 3) // 1\n\n    fmt.Println(a <= b) // true\n\n    fmt.Println(a & b) // 0\n\n    fmt.Println(true && !false) // true\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5206\u652f",children:"\u5206\u652f"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u7684\u5206\u652f\u7ed3\u6784\u4e0e\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u57fa\u672c\u7c7b\u4f3c\uff0c\u53ea\u662f if \u6761\u4ef6\u540e\uff0c\u4e0d\u9700\u8981\u52a0\u5c0f\u62ec\u53f7\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n  a := 10\n\n  if a > 10 {\n\n    fmt.Println("a \u5927\u4e8e 10")\n\n  } else if a > 5 {\n\n    fmt.Println("a \u5927\u4e8e 5") // \u4f1a\u6267\u884c\u8fd9\u91cc\n\n  } else {\n\n    fmt.Println("a \u4e0d\u5927\u4e8e 5")\n\n  }\n\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["if \u4e2d\u4e5f\u53ef\u4ee5\u521d\u59cb\u5316\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u53ea\u80fd\u5728 ",(0,i.jsx)(e.code,{children:"if/else"})," ",(0,i.jsx)(e.code,{children:"if/else "}),"\u8bed\u53e5\u5757\u4e2d\u4f7f\u7528\uff0c\u521d\u59cb\u5316\u53d8\u91cf\u548c\u6761\u4ef6\u5224\u65ad\u7684\u4ee3\u7801\u4f7f\u7528 ; \u5206\u53f7\u9694\u5f00\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n    a := 10\n\n    if b := 3; a > 10 {\n\n        fmt.Println("a \u5927\u4e8e 10")\n\n    } else if a > 5 {\n\n        fmt.Println("a \u5927\u4e8e 5") // \u4f1a\u6267\u884c\u8fd9\u91cc\n\n        fmt.Println(b) // 3\n\n    } else {\n\n        fmt.Println("a \u4e0d\u5927\u4e8e 5")\n\n    }\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"Go \u4e5f\u652f\u6301 switch case \u8bed\u53e5\uff0c\u4e0d\u8fc7\u5728\u4e00\u4e2a case \u5339\u914d\u4e4b\u540e\uff0c\u4e0d\u4f1a\u6267\u884c\u540e\u7eed\u7684 case\uff0c\u53ef\u4ee5\u7701\u7565 break\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n    a := 10\n\n    switch a {\n\n        case 1:\n\n        fmt.Println("a \u7b49\u4e8e 1")\n\n        case 5:\n\n        fmt.Println("a \u7b49\u4e8e 5")\n\n        case 10:\n\n        fmt.Println("a \u7b49\u4e8e 10")\n\n        default:\n\n        fmt.Println(a)\n\n    }\n\n}\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5faa\u73af",children:"\u5faa\u73af"}),"\n",(0,i.jsx)(e.p,{children:"Go \u4e2d\u7684\u5faa\u73af\u8bed\u53e5\u53ea\u6709 for \u5faa\u73af\u4e00\u79cd\uff0c\u6839\u636e\u4f20\u9012\u7ed9\u5b83\u7684\u53c2\u6570\u7684\u4e0d\u540c\uff0c\u53ef\u4ee5\u6a21\u62df\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 while \u5faa\u73af\u548c for \u5faa\u73af\u3002Go \u4e2d\u7684 for \u5faa\u73af\u548c\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u7c7b\u4f3c\uff0c\u63a5\u6536 3 \u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u662f\u53d8\u91cf\u521d\u59cb\u5316\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u5224\u65ad\u6761\u4ef6\uff0c\u7b2c\u4e09\u90e8\u5206\u662f\u5faa\u73af\u540e\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e09\u90e8\u5206\u4e0d\u7528\u653e\u5230\u5c0f\u62ec\u53f7\u91cc\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n    for i := 1; i < 5; i++ {\n\n        fmt.Println(i)\n\n    }\n\n}\n\n\n// 1\n\n// 2\n\n// 3\n\n// 4\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u53ea\u4f7f\u7528\u7b2c 2 \u90e8\u5206\uff0c\u53ef\u4ee5\u6a21\u62df while \u5faa\u73af\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n    i := 1\n\n    for i < 5 {\n\n        fmt.Println(i)\n\n        i++\n\n    }\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Go \u4e2d\u5b9a\u4e49\u51fd\u6570\u4f7f\u7528 func \u5173\u952e\u5b57\uff0c\u4e4b\u540e\u662f\u51fd\u6570\u7684\u540d\u5b57\u548c\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\uff0c\u6700\u540e\u662f\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u5728\u51fd\u6570\u4f53\u91cc\u53ef\u4ee5\u7f16\u5199\u4e1a\u52a1\u903b\u8f91\uff0c\u6700\u540e\u4f7f\u7528 return \u8bed\u53e5\u8fd4\u56de\u7b26\u5408\u7c7b\u578b\u7684\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc sum(a int, b int) int {\n\n\treturn a + b\n\n}\n\n\nfunc main() {\n\n\tfmt.Println(sum(1, 2)) // 3\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u51fd\u6570\u7684\u53c2\u6570\u7684\u7c7b\u578b\u90fd\u4e00\u6837\uff0c\u53ef\u4ee5\u53ea\u5728\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u5199\u4e0a\u7c7b\u578b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc sum(a, b int) int {\n\n\treturn a + b\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4e5f\u53ef\u4ee5\u7701\u7565\u8fd4\u56de\u503c\u7c7b\u578b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc sum(a, b int) {\n\n\tfmt.Println(a + b)\n\n}\n\n\nfunc main() {\n\n\tsum(1, 2)\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u51fd\u6570\u4e5f\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc swap(a, b int) (int, int) {\n\n\treturn b, a\n\n}\n\n\nfunc main() {\n\n\ta, b := swap(1, 2)\n\n\tfmt.Println(a, b) // 2 1\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Go \u4e2d\uff0c\u51fd\u6570\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u503c\uff0c\u653e\u5230\u53d8\u91cf\u4e2d\uff0c\u6216\u8005\u4f5c\u4e3a\u5176\u4ed6\u51fd\u6570\u7684\u53c2\u6570\u8fdb\u884c\u4f20\u9012\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc sum(a int, b int, transform func(int) int) int {\n\n\treturn transform(a) + transform(b)\n\n}\n\n\nfunc main() {\n\n\tsquare := func(x int) int {\n\n\t\treturn x * x\n\n\t}\n\n\tfmt.Println(sum(1, 2, square)) // 5\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u7ec4--slice",children:"\u6570\u7ec4 / slice"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u770b\u51e0\u4e2a\u9ad8\u7ea7\u7684\u7c7b\u578b\u3002\u5148\u770b\u6570\u7ec4\uff0c\u6570\u7ec4\u5728 Go \u4e2d\u662f\u56fa\u5b9a\u957f\u5ea6\u4e14\u4e0d\u53ef\u53d8\u7684\uff0c\u5b9a\u4e49\u6570\u7ec4\u4f7f\u7528 [] \u540e\u9762\u8ddf\u4e0a\u7c7b\u578b\uff0c\u518d\u5728\u540e\u9762\u4f7f\u7528\u4e00\u5bf9\u5927\u62ec\u53f7\u6307\u5b9a\u6570\u7ec4\u521d\u59cb\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n\ta := [5]int{1, 2, 3, 4, 5}\n\n\tfmt.Println(a)\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u8981\u5b9a\u4e49\u53ef\u53d8\u957f\u5ea6\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528 slice \u7c7b\u578b\u548c make() \u51fd\u6570\uff0cmake \u51fd\u6570\u7684\u7b2c 2 \u4e2a\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a slice \u957f\u5ea6\uff0c\u540e\u9762\u53ef\u4ee5\u901a\u8fc7 append() \u51fd\u6570\u5bf9 slice \u8ffd\u52a0\u5143\u7d20\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n\ta := make([]int, 0)\n\n\ta = append(a, 1, 2, 3, 4)\n\n\tfmt.Println(a) // [1 2 3 4]\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6216\u8005\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b57\u9762\u503c\uff0c\u4e0e\u6570\u7ec4\u5b57\u9762\u503c\u4e0d\u540c\u7684\u662f\uff0cslice \u7684\u65b9\u62ec\u53f7\u91cc\u4e0d\u7528\u6307\u5b9a\u957f\u5ea6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\na := []int{1, 2, 3, 4}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u6539 slice \u7684\u67d0\u4e2a\u5143\u7d20\u7684\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u6807\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n\ta := make([]int, 0)\n\n\ta = append(a, 1, 2, 3, 4)\n\n\ta[0] = 5\n\n\tfmt.Println(a) // [5 2 3 4]\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"slice \u7c7b\u578b\u662f\u5bf9\u6570\u7ec4\u521b\u5efa\u4e86\u4e00\u4e2a\u89c6\u56fe\uff0c\u5e76\u4e14\u91cc\u8fb9\u7684\u6570\u636e\u8fd8\u662f\u5f15\u7528\u7684\u539f\u6765\u7684\u6570\u7ec4\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"map",children:"Map"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Go \u91cc\uff0c\u5b9a\u4e49\u952e\u503c\u5bf9\u7c7b\u578b\u7684\u7ed3\u6784\u4e5f\u662f\u4f7f\u7528\u53eb\u505a map \u7684\u7c7b\u578b\u3002\u53ef\u4ee5\u4f7f\u7528 map \u5173\u952e\u5b57\u8fdb\u884c\u5b9a\u4e49\uff0cmap \u540e\u9762\u7684\u4e2d\u62ec\u53f7\u6307\u5b9a key \u7684\u7c7b\u578b\uff0c\u4e2d\u62ec\u53f7\u540e\u9762\u6307\u5b9a\u503c\u7684\u7c7b\u578b\uff0c\u518d\u4f7f\u7528\u4e00\u5bf9\u5927\u62ec\u53f7\u6307\u5b9a\u521d\u59cb\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n\tm := map[string]int{"a": 1, "b": 2}\n\n\tfmt.Println(m) // map[a:1 b:2]\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u65e0\u9700\u521d\u59cb\u503c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 make \u51fd\u6570\u5b9a\u4e49\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n\n\tm := make(map[string]int)\n\n\tm["a"] = 1\n\n\tm["b"] = 2\n\n\tfmt.Println(m) // map[a:1 b:2]\n\n}\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u4e2d\uff0c\u53ef\u4ee5\u5b58\u653e\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7684\u7ed3\u6784\u4e3a struct \u7c7b\u578b\uff0c\u7ed3\u6784\u7c7b\u578b\uff0c\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684\u7ed3\u6784\uff0c\u5bf9\u8c61\u6216\u8005 class\u3002 \u5b9a\u4e49\u7ed3\u6784\u4f7f\u7528 type \u5173\u952e\u5b57\uff0c\u7136\u540e\u662f\u81ea\u5b9a\u4e49\u7684\u7ed3\u6784\u540d\u5b57\uff0c\u518d\u540e\u9762\u662f struct \u5173\u952e\u5b57\uff0c\u540e\u9762\u662f\u4e00\u5bf9\u5927\u62ec\u53f7\uff0c\u5728\u91cc\u8fb9\u53ef\u4ee5\u5b9a\u4e49\u4e00\u7ec4\u5c5e\u6027\uff0c\u7531\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u540d\u548c\u7c7b\u578b\u6784\u6210\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\ntype Point struct {\n\n\tX int\n\n\tY int\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u521d\u59cb\u5316\u7ed3\u6784\u53ef\u4ee5\u4f7f\u7528\u7ed3\u6784\u540d\u5b57\uff0c\u540e\u9762\u8ddf\u4e0a\u4e00\u5bf9\u5927\u62ec\u53f7\uff0c\u91cc\u8fb9\u7ed9\u6bcf\u4e2a\u5c5e\u6027\u90fd\u8d4b\u503c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n\tp := Point{1, 2}\n\n    fmt.Println(p) // {1, 2}\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u8bbf\u95ee\u6216\u4fee\u6539\u7ed3\u6784\u4e2d\u7684\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528 . \u70b9\u53f7\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\np.X = 3\n\nfmt.Println(p) // {3 2}\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u6307\u9488",children:"\u6307\u9488"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u4e2d\uff0c\u6709\u6307\u9488\u7c7b\u578b\uff0c\u53ef\u4ee5\u7528\u591a\u4e2a\u6307\u9488\u6307\u5411\u540c\u4e00\u4e2a struct\u3002\u4e0a\u8fb9\u6211\u4eec\u521d\u59cb\u5316\u7684 struct p\uff0c\u5982\u679c\u539f\u5c01\u4e0d\u52a8\u7684\u8d4b\u503c\u7ed9\u4e00\u4e2a\u65b0\u53d8\u91cf q\uff0c\u90a3\u4e48\uff0c\u5982\u679c\u4fee\u6539 p \u4e2d\u7684\u67d0\u4e2a\u503c\u65f6\uff0c\u662f\u4e0d\u4f1a\u53cd\u5e94\u5230 q \u4e2d\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u9ed8\u8ba4\u53d8\u91cf\u8d4b\u503c\u662f\u6309\u503c\u590d\u5236\u7684\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\n\tq := p\n\n\tp.X = 3\n\n\tfmt.Println(q) // {1 2}\n\n\tfmt.Println(p) // {3 2}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528 & \u83b7\u53d6 p \u7684\u5730\u5740\uff0c\u518d\u8d4b\u503c\u7ed9 q\uff0c\u518d\u4fee\u6539 p \u4e2d\u7684\u5c5e\u6027\u5c31\u53ef\u4ee5\u53cd\u5e94\u5230 q \u4e2d\u4e86\uff0c\u6ce8\u610f\u8981\u83b7\u53d6 q \u7684\u503c\u9700\u8981\u4f7f\u7528*\u8fdb\u884c\u8fd4\u5f15\u7528\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\n\tq := &p\n\n\tp.X = 3\n\n\tfmt.Println(*q)\n\n\tfmt.Println(p)\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u4fee\u6539 q \u4e2d\u7684\u503c\uff0c\u53ef\u4ee5\u7701\u7565 * \u53f7\uff0cGo \u4f1a\u81ea\u52a8\u53cd\u5f15\u7528\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nq.Y = 10\n\nfmt.Println(*q) // {3 10}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed3\u6784\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u65b9\u6cd5\u3002\u65b9\u6cd5\u7684\u5b9a\u4e49\u548c\u51fd\u6570\u7c7b\u4f3c\uff0c\u533a\u522b\u662f\u5b83\u5728 func \u5173\u952e\u5b57\u540e\u9762\u63a5\u6536\u4f5c\u7528\u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\uff0c\u4e4b\u540e\u5728\u65b9\u6cd5\u4f53\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u7ed3\u6784\u8fdb\u884c\u64cd\u4f5c\uff0c\u65b9\u6cd5\u540d\u63a8\u8350\u9996\u5b57\u6bcd\u5927\u5199\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\n// \u4f5c\u7528\u7ed3\u6784\n\nfunc (p Point) SetPoint(x, y int) {\n\n\tp.x = x\n\n\tp.y = y\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u8981\u6ce8\u610f\u65b9\u6cd5\u662f\u5b9a\u4e49\u5728\u7ed3\u6784\u7684\u5916\u90e8\uff0c\u4e0d\u662f\u5185\u90e8\u3002 \u8c03\u7528\u65b9\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7ed3\u6784\u53d8\u91cf\u52a0\u70b9\u53f7\u52a0\u65b9\u6cd5\u540d\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\np.SetPoint(3, 4)\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u8fc7\uff0c\u5728\u5b9a\u4e49\u4f5c\u7528\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u4f7f\u7528*\u53f7\u6307\u9488\u5f62\u5f0f\uff0c\u90a3\u4e48\u4f5c\u7528\u7ed3\u6784\u5c31\u662f\u6309\u503c\u4f20\u9012\u7684\uff0c\u5bf9\u539f\u7ed3\u6784\u7684\u4fee\u6539\u4e0d\u4f1a\u751f\u6548\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\np := Point{1, 2}\n\np.SetPoint(3, 4)\n\nfmt.Println(p) // {1 2}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u9700\u8981\u52a0\u4e0a*\u53f7\uff0c\u6309\u5f15\u7528\u4f20\u9012\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc (p *Point) SetPoint(x, y int) {\n\n\tp.x = x\n\n\tp.y = y\n\n}\n\n\np.SetPoint(3, 4)\n\nfmt.Println(p) // {3 4}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u4e5f\u652f\u6301 interface \u63a5\u53e3\u7279\u6027\u3002\u63a5\u53e3\u53ef\u4ee5\u4e3a\u7ed3\u6784\u89c4\u5b9a\u4e00\u7ec4\u5fc5\u987b\u8981\u5b9e\u73b0\u7684\u65b9\u6cd5\uff0c\u540e\u9762\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u53ea\u8981\u7ed3\u6784\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u65e0\u8bba\u5b83\u662f\u4ec0\u4e48\u7ed3\u6784\u7c7b\u578b\uff0c\u90fd\u53ef\u4ee5\u8c03\u7528\uff0c\u5b9e\u73b0\u591a\u6001\u7279\u6027\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\ntype Shape interface {\n\n\tPrint() // \u65e0\u9700 func \u5173\u952e\u5b57\n\n}\n\n\ntype Rectangle struct{}\n\ntype Triangle struct{}\n\n\nfunc (r Rectangle) Print() {\n\n\tfmt.Println("\u77e9\u5f62")\n\n}\n\n\nfunc (t Triangle) Print() {\n\n\tfmt.Println("\u4e09\u89d2\u5f62")\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u5b9a\u4e49\u63a5\u53e3\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 type \u5173\u952e\u5b57\uff0c\u52a0\u4e0a\u63a5\u53e3\u7684\u540d\u5b57\uff0c\u540e\u9762\u8ddf\u4e0a interface \u5173\u952e\u5b57"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u91cc\u8fb9\u5b9a\u4e49\u65b9\u6cd5\uff0c\u4e0d\u9700\u8981\u65b9\u6cd5\u4f53\uff0c\u4e5f\u4e0d\u9700\u8981 func \u5173\u952e\u5b57"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\ntype Shape interface {\n\n\tPrint() // \u65e0\u9700 func \u5173\u952e\u5b57\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u7ed3\u6784\u8981\u5b9e\u73b0\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5b9a\u4e49\u540c\u540d\u7684\u65b9\u6cd5\u5373\u53ef\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\ntype Rectangle struct{}\n\ntype Triangle struct{}\n\n\nfunc (r Rectangle) Print() {\n\n\tfmt.Println("\u77e9\u5f62")\n\n}\n\n\nfunc (t Triangle) Print() {\n\n\tfmt.Println("\u4e09\u89d2\u5f62")\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u5b9a\u4e49\u63a5\u53e3\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u800c\u5b9e\u9645\u8c03\u7528\u7684\u662f\u54ea\u4e2a\u7ed3\u6784\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u4e0d\u7528\u5173\u5fc3\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\nfunc main() {\n\n\tvar s Shape\n\n\ts = Rectangle{} // \u77e9\u5f62\n\n\ts.Print()\n\n\ts = Triangle{}\n\n\ts.Print()      // \u4e09\u89d2\u5f62\n\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e5f\u9002\u5408\u63a5\u53e3\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u7684\u60c5\u51b5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\n// \u793a\u4f8b 2\n\nfunc printShape(s Shape) {\n\n    s.Print()\n\n}\n\n\nfunc main() {\n\n    printShape(Rectangle{})\n\n\tprintShape(Triangle{})\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9519\u8bef\u5904\u7406",children:"\u9519\u8bef\u5904\u7406"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u4e2d\u8fdb\u884c\u9519\u8bef\u5904\u7406\uff0c\u901a\u5e38\u662f\u901a\u8fc7\u51fd\u6570\u8fd4\u56de\u591a\u4e2a\u503c\u6765\u5b9e\u73b0\u7684\uff0c\u4f8b\u5982\u6709\u4e9b Go \u5185\u7f6e\u7684\u51fd\u6570\u4f1a\u8fd4\u56de\u4e24\u4e2a\u503c\uff0c\u7b2c\u4e00\u4e2a\u662f\u6b63\u5e38\u7684\u7ed3\u679c\uff0c\u7b2c\u4e8c\u4e2a\u662f\u9519\u8bef\u5bf9\u8c61\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5224\u65ad\u9519\u8bef\u5bf9\u8c61\u662f\u4e0d\u662f nil\uff0c\u5373\u6709\u6ca1\u6709\u503c\u5c31\u53ef\u4ee5\u4e86\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nn, err := fmt.Println("dd")\n\nif err != nil {\n\n    // \u6267\u884c\u6b63\u5e38\u4ee3\u7801\n\n} else {\n\n    // \u6267\u884c\u5f02\u5e38\u4ee3\u7801\n\n}\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5e76\u53d1",children:"\u5e76\u53d1"}),"\n",(0,i.jsx)(e.p,{children:"Go \u8bed\u8a00\u652f\u6301\u5e76\u53d1\u548c\u591a\u7ebf\u7a0b\u3002\u7ebf\u7a0b\u5728 Go \u8bed\u8a00\u4e2d\u53eb\u505a Goroutines\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"goroutines",children:"Goroutines"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 go \u5173\u952e\u5b57\u6765\u6267\u884c\u51fd\u6570\uff0c\u4e3a\u51fd\u6570\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u7ebf\u7a0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc func1() {\n\n\ttime.Sleep(500 * time.Millisecond)\n\n\tfmt.Println("\u51fd\u6570 1")\n\n}\n\nfunc func2() {\n\n\tfmt.Println("\u51fd\u6570 2")\n\n}\n\n\nfunc main() {\n\n\tgo func2()\n\n\tfunc1()\n\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f func1 \u4e2d\u4f7f\u7528\u4e86 time.Sleep() \u6765\u8ba9 func1() \u6240\u5728\u7684\u7ebf\u7a0b\u7b49\u5f85 500 \u6beb\u79d2\uff0c\u56e0\u4e3a func1 \u6267\u884c\u5b8c\u6210\u540e\u7a0b\u5e8f\u4f1a\u76f4\u63a5\u9000\u51fa\uff0c\u4e0d\u4f1a\u7b49\u5f85\u5176\u4ed6 Gorountines \u6267\u884c\u5b8c\u6bd5\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"channels",children:"Channels"}),"\n",(0,i.jsx)(e.p,{children:"\u65e2\u7136\u6709\u591a\u7ebf\u7a0b\uff0c\u90a3\u4e48\u4e5f\u4f1a\u6709\u5e76\u53d1\u548c\u540c\u6b65\u7684\u95ee\u9898\u3002Go \u8bed\u8a00\u901a\u8fc7 channels \u7ba1\u9053\uff0c\u6765\u8ba9\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\uff0c\u5171\u4eab\u53d8\u91cf\u7b49\u7b49\u3002\u53ef\u4ee5\u628a\u5b83\u60f3\u8c61\u6210\u4e00\u4e2a\u7ba1\u9053\u6216\u961f\u5217\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u7ed9\u5b83\u53d1\u9001\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u4ece\u4e2d\u63a5\u6536\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa channels \u4e5f\u662f\u4f7f\u7528 make() \u51fd\u6570\uff0c\u91cc\u8fb9\u4f7f\u7528 chan \u5173\u952e\u5b57\uff0c\u52a0\u4e0a\u7ba1\u9053\u91cc\u8981\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u7c7b\u578b\u3002 \u8981\u7ed9\u7ba1\u9053\u53d1\u9001\u6570\u636e\uff0c\u4f7f\u7528\xa0",(0,i.jsx)(e.code,{children:"<-"}),"\xa0\u7b26\u53f7\uff0c\u7ba1\u9053\u5728\u5de6\u4fa7\uff0c\u503c\u5728\u53f3\u4fa7\u3002 \u8981\u63a5\u6536\u7ba1\u9053\u7684\u6570\u636e\uff0c\u7ba1\u9053\u5728\u53f3\u4fa7\uff0c\u53d8\u91cf\u8d4b\u503c\u5728\u5de6\u4fa7\u3002 \u8981\u6ce8\u610f\u7684\u662f\uff0c\u53d1\u9001\u548c\u63a5\u6536\u7ba1\u9053\u6570\u636e\u4f1a\u963b\u585e\u7ebf\u7a0b\uff0c\u6240\u4ee5\u9700\u8981\u628a\u5b83\u4eec\u653e\u5230\u5355\u72ec\u7684 Goroutines \u4e2d\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'\nfunc func1(ch chan string) {\n\n\tch <- "\u51fd\u6570 1"\n\n}\n\nfunc func2(ch chan string) {\n\n\tch <- "\u51fd\u6570 2"\n\n}\n\n\nfunc main() {\n\n\tch := make(chan string)\n\n\tgo func2(ch)\n\n\tres1 := <-ch\n\n\n\tgo func1(ch)\n\n\tres2 := <-ch\n\n\n\tfmt.Println(res1, res2)\n\n}\n\n'})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>s,x:()=>a});var i=l(6540);const c={},r=i.createContext(c);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);