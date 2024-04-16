"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[6427],{6060:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var t=s(4848),o=s(8453);const c={},a="memo + useMemo + useCallback",r={id:"react/Hooks/memo + useMemo + useCallback/memo + useMemo + useCallback",title:"memo + useMemo + useCallback",description:"\u6709\u4e24\u4e2a\u7ec4\u4ef6 Aaa\u3001Bbb\uff0cAaa \u662f Bbb \u7684\u7236\u7ec4\u4ef6\uff1a",source:"@site/docs/react/Hooks/memo + useMemo + useCallback/memo + useMemo + useCallback.md",sourceDirName:"react/Hooks/memo + useMemo + useCallback",slug:"/react/Hooks/memo + useMemo + useCallback/",permalink:"/myblog/docs/react/Hooks/memo + useMemo + useCallback/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/Hooks/memo + useMemo + useCallback/memo + useMemo + useCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"forwardRef + useImperativeHandle",permalink:"/myblog/docs/react/Hooks/forwardRef + useImperativeHand/forwardRef + useImperativeHandle"},next:{title:"useContext",permalink:"/myblog/docs/react/Hooks/useContext/"}},m={},i=[];function p(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"memo--usememo--usecallback",children:"memo + useMemo + useCallback"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u4e2a\u7ec4\u4ef6 Aaa\u3001Bbb\uff0cAaa \u662f Bbb \u7684\u7236\u7ec4\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react tsx",children:"import { memo, useEffect, useState } from \"react\";\n\nfunction Aaa() {\n    const [,setNum] = useState(1);\n\n    useEffect(() => {\n        setInterval(()=> {\n            setNum(Math.random());\n        }, 2000)\n    },[]);\n\n    return <div>\n        <Bbb count={2}></Bbb>\n    </div>\n} \n\ninterface BbbProps {\n    count: number;\n}\n\nfunction Bbb(props: BbbProps) {\n    console.log('bbb render');\n\n    return <h2>{props.count}</h2>\n}\n\nexport default Aaa;\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Aaa \u91cc\u9762\u4e0d\u65ad setState \u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\uff0c\u95ee\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"bbb render \u6253\u5370\u51e0\u6b21\uff1f"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5943).A+"",width:"654",height:"748"})}),"\n",(0,t.jsx)(n.p,{children:"\u7b54\u6848\u662f\u6bcf 2s \u90fd\u4f1a\u6253\u5370\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u6b21\u90fd\u4f1a\u89e6\u53d1 Bbb \u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u5f88\u660e\u663e\uff0c\u8fd9\u91cc Bbb \u5e76\u4e0d\u9700\u8981\u518d\u6b21\u6e32\u67d3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\u53ef\u4ee5\u52a0\u4e0a memo\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(986).A+"",width:"852",height:"1108"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react tsx",children:"import { memo, useEffect, useState } from \"react\";\n\nfunction Aaa() {\n    const [,setNum] = useState(1);\n\n    useEffect(() => {\n        setInterval(()=> {\n            setNum(Math.random());\n        }, 2000)\n    },[]);\n\n    return <div>\n        <MemoBbb count={2}></MemoBbb>\n    </div>\n} \n\ninterface BbbProps {\n    count: number;\n}\n\nfunction Bbb(props: BbbProps) {\n    console.log('bbb render');\n\n    return <h2>{props.count}</h2>\n}\n\nconst MemoBbb = memo(Bbb);\n\nexport default Aaa;\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"memo \u7684\u4f5c\u7528\u662f\u53ea\u6709 props \u53d8\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u91cd\u65b0\u6e32\u67d3\u88ab\u5305\u88f9\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u53ea\u4f1a\u6253\u5370\u4e00\u6b21\u4e86\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4348).A+"",width:"712",height:"724"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u8ba9 2s \u540e props \u53d8\u4e86\u5462\uff1f"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4281).A+"",width:"902",height:"1282"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react tsx",children:"import { memo, useEffect, useState } from \"react\";\n\nfunction Aaa() {\n    const [,setNum] = useState(1);\n\n    const [count, setCount] = useState(2);\n\n\n    useEffect(() => {\n        setInterval(()=> {\n            setNum(Math.random());\n        }, 2000)\n    },[]);\n\n    useEffect(() => {\n        setTimeout(()=> {\n            setCount(Math.random());\n        }, 2000)\n    },[]);\n\n    return <div>\n        <MemoBbb count={count}></MemoBbb>\n    </div>\n} \n\ninterface BbbProps {\n    count: number;\n}\n\nfunction Bbb(props: BbbProps) {\n    console.log('bbb render');\n\n    return <h2>{props.count}</h2>\n}\n\nconst MemoBbb = memo(Bbb);\n\nexport default Aaa;\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"props \u53d8\u4e86\u4f1a\u89e6\u53d1 memo \u7684\u91cd\u65b0\u6e32\u67d3\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2342).A+"",width:"632",height:"758"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528 memo \u7684\u8bdd\uff0c\u4e00\u822c\u8fd8\u4f1a\u7ed3\u5408\u4e24\u4e2a hook\uff1auseMemo \u548c useCallback\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"memo \u662f\u9632\u6b62 props \u6ca1\u53d8\u65f6\u7684\u91cd\u65b0\u6e32\u67d3\uff0cuseMemo \u548c useCallback \u662f\u9632\u6b62 props \u7684\u4e0d\u5fc5\u8981\u53d8\u5316\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9 Bbb \u52a0\u4e00\u4e2a callback \u7684\u53c2\u6570\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2896).A+"",width:"1134",height:"1270"})}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u6570\u4f20\u4e86\u4e00\u4e2a function\uff0c\u4f60\u4f1a\u53d1\u73b0 memo \u5931\u6548\u4e86\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8585).A+"",width:"786",height:"740"})}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a\u6bcf\u6b21 function \u90fd\u662f\u65b0\u521b\u5efa\u7684\uff0c\u4e5f\u5c31\u662f\u6bcf\u6b21 props \u90fd\u4f1a\u53d8\uff0c\u8fd9\u6837 memo \u5c31\u6ca1\u7528\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u5c31\u9700\u8981 useCallback\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d02270a19374897a3a8e27f2f547503~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1092&h=1240&s=188180&e=png&b=1f1f1f",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react tsx",children:"const bbbCallback = useCallback(function () {\n    // xxx\n}, []);\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u5f53 deps \u6570\u7ec4\u4e0d\u53d8\u7684\u65f6\u5019\uff0c\u59cb\u7ec8\u8fd4\u56de\u540c\u4e00\u4e2a function\uff0c\u5f53 deps \u53d8\u7684\u65f6\u5019\uff0c\u624d\u628a function \u6539\u4e3a\u65b0\u4f20\u5165\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u4f60\u4f1a\u53d1\u73b0\uff0cmemo \u53c8\u751f\u6548\u4e86\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17318aee450b4918b59db4e000272922~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=738&h=726&s=51245&e=png&b=ffffff",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u7406\uff0cuseMemo \u4e5f\u662f\u548c memo \u6253\u914d\u5408\u7684\uff0c\u53ea\u4e0d\u8fc7\u5b83\u4fdd\u5b58\u7684\u4e0d\u662f\u51fd\u6570\uff0c\u800c\u662f\u503c\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29d8c121a66f472b8de743b4784abcfa~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1134&h=834&s=138507&e=png&b=1f1f1f",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react tsx",children:"const count2 = useMemo(() => {\n    return count * 10;\n}, [count]);\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b83\u662f\u5728 deps \u6570\u7ec4\u53d8\u5316\u7684\u65f6\u5019\uff0c\u8ba1\u7b97\u65b0\u7684\u503c\u8fd4\u56de\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\u8bf4\uff0c",(0,t.jsx)(n.strong,{children:"\u5982\u679c\u5b50\u7ec4\u4ef6\u7528\u4e86 memo\uff0c\u90a3\u7ed9\u5b83\u4f20\u9012\u7684 props \u5c31\u9700\u8981\u7528 useMemo\u3001useCallback \u5305\u88f9\uff0c\u5426\u5219\uff0c\u6bcf\u6b21 props \u90fd\u4f1a\u53d8\uff0cmemo \u5c31\u6ca1\u7528\u4e86\u3002"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53cd\u4e4b\uff0c\u5982\u679c props \u4f7f\u7528 useMemo\u3001useCallback\uff0c\u4f46\u662f\u5b50\u7ec4\u4ef6\u6ca1\u6709\u88ab memo \u5305\u88f9\uff0c\u90a3\u4e5f\u6ca1\u610f\u4e49\uff0c\u56e0\u4e3a\u4e0d\u7ba1 props \u53d8\u6ca1\u53d8\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u53ea\u662f\u505a\u4e86\u65e0\u7528\u529f\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"memo + useCallback\u3001useMemo \u662f\u642d\u914d\u7740\u6765\u7684\uff0c\u5c11\u4e86\u4efb\u4f55\u4e00\u65b9\uff0c\u90fd\u4f1a\u4f7f\u4f18\u5316\u5931\u6548\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f46 useMemo \u548c useCallback \u4e5f\u4e0d\u53ea\u662f\u914d\u5408 memo \u7528\u7684\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u5982\u6709\u4e2a\u503c\u7684\u8ba1\u7b97\uff0c\u9700\u8981\u5f88\u5927\u7684\u8ba1\u7b97\u91cf\uff0c\u4f60\u4e0d\u60f3\u6bcf\u6b21\u90fd\u7b97\uff0c\u8fd9\u65f6\u5019\u4e5f\u53ef\u4ee5\u7528 useMemo \u6765\u7f13\u5b58\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5943:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_7gqZEwXj8s-c26e24655e4323626c157ee91e47a62a.png"},4348:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_U74gDddZVv-1640593f9ff9c571fd765798b68b05d1.png"},2896:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_Vg7JQo5ZJ8-a70b22295c1a7b4185424d5e1e9e5033.png"},2342:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image__L0s-xMFXC-0e48512128f44e31ef040e2dd499ced3.png"},986:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_fjJpYeVxFw-83cc048e47467349e4b6a65066bd9d71.png"},8585:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_jg7CXMGlzq-5cc00ae77f007f0bd8051a3d56011652.png"},4281:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_sLtVjqIztm-543f4d1f39983435e75be22444c4817a.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);