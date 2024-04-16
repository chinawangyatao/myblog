"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2721],{8164:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(4848),c=s(8453);const r={},l="useEffect",o={id:"react/Hooks/useEffect/useEffect",title:"useEffect",description:"\u76ee\u5f55",source:"@site/docs/react/Hooks/useEffect/useEffect.md",sourceDirName:"react/Hooks/useEffect",slug:"/react/Hooks/useEffect/",permalink:"/myblog/docs/react/Hooks/useEffect/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/Hooks/useEffect/useEffect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useContext",permalink:"/myblog/docs/react/Hooks/useContext/"},next:{title:"useLayoutEffect",permalink:"/myblog/docs/react/Hooks/useLayoutEffect/"}},i={},a=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:3},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:3},{value:"\u6267\u884c\u65f6\u671f",id:"\u6267\u884c\u65f6\u671f",level:2},{value:"\u6e05\u9664\u526f\u4f5c\u7528",id:"\u6e05\u9664\u526f\u4f5c\u7528",level:2},{value:"useEffect\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",id:"useeffect\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"useeffect",children:"useEffect"}),"\n",(0,t.jsx)(n.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E4%BD%9C%E7%94%A8",children:"\u4f5c\u7528"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%AA%A4",children:"\u4f7f\u7528\u6b65\u9aa4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E6%89%A7%E8%A1%8C%E6%97%B6%E6%9C%9F",children:"\u6267\u884c\u65f6\u671f"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#%E6%B3%A8%E6%84%8F",children:"\u6ce8\u610f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8",children:"\u6e05\u9664\u526f\u4f5c\u7528"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#useEffect%E5%8F%91%E9%80%81%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82",children:"useEffect\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f5c\u7528",children:"\u4f5c\u7528"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3areact\u51fd\u6570\u7ec4\u4ef6\u63d0\u4f9b\u526f\u4f5c\u7528",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-%E6%B3%A8%E9%87%8A1",id:"user-content-fnref-%E6%B3%A8%E9%87%8A1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\u5904\u7406\uff1b"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u6b65\u9aa4",children:"\u4f7f\u7528\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5bfc\u5165 useEffect \u51fd\u6570"}),"\n",(0,t.jsx)(n.li,{children:"\u8c03\u7528 useEffect \u51fd\u6570\uff0c\u5e76\u4f20\u5165\u56de\u8c03\u51fd\u6570"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u7f16\u5199\u526f\u4f5c\u7528\u5904\u7406\uff08dom\u64cd\u4f5c\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539\u6570\u636e\u72b6\u6001\uff08\u5f53\u6211\u4eec\u4fee\u6539\u7ec4\u4ef6\u72b6\u6001\u7684\u65f6\u5019\uff0c\u526f\u4f5c\u7528\u4f1a\u4e0d\u65ad\u6267\u884c\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u6d4b\u526f\u4f5c\u7528\u662f\u5426\u751f\u6548"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"import { usestate, useEffect } from ' react'\n\nfunction App () {\n\nconst [count, setcount] useState(0)\n\nuseEffect (() =>\n//\u5b9a\u4e49\u526f\u4f5c\u7528\ndocument . title =count\n})\n\nreturn (\n  <div>\n    <button onclick={\uff08\uff09=> setCount (count + 1) }>{count}</button> \n  </div>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6267\u884c\u65f6\u671f",children:"\u6267\u884c\u65f6\u671f"}),"\n",(0,t.jsx)(n.p,{children:"\u4f9d\u8d56\u9879\u63a7\u5236\u526f\u4f5c\u7528\u7684\u6267\u884c\u65f6\u673a"}),"\n",(0,t.jsx)(n.p,{children:"1.\u9ed8\u8ba4\u72b6\u6001\uff08\u65e0\u4f9d\u8d56\u9879\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\u5148\u6267\u884c\u4e00\u6b21\uff1b   "}),"\n",(0,t.jsx)(n.p,{children:"\u7b49\u5230\u6bcf\u6b21\u6570\u636e\u4fee\u6539\u7ec4\u4ef6\u66f4\u65b0\u518d\u6b21\u6267\u884c\uff1b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"useEffect (() =>\n//\u5b9a\u4e49\u526f\u4f5c\u7528\ndocument.title =count\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"2.\u6dfb\u52a0\u4e00\u4e2a\u7a7a\u6570\u7ec4\u4f9d\u8d56\u9879\u4ec5\u4ec5\u4f1a\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"useEffect (() =>\n//\u5b9a\u4e49\u526f\u4f5c\u7528\ndocument.title =1\n},[])\n"})}),"\n",(0,t.jsx)(n.p,{children:"3.\u6dfb\u52a0\u7279\u5b9a\u4f9d\u8d56\u9879 \u526f\u4f5c\u7528\u51fd\u6570\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u6267\u884c\uff0c\u5728\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\u91cd\u65b0\u6267\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"useEffect (() =>\n//\u5b9a\u4e49\u526f\u4f5c\u7528\ndocument.title = 1\n},[count])\n\n"})}),"\n",(0,t.jsx)(n.h1,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,t.jsx)(n.p,{children:"useEffect \u56de\u8c03\u51fd\u6570\u4e2d\u7528\u5230\u7684\u6570\u636e\uff08\u6bd4\u5982\uff0ccount\uff09\u5c31\u662f\u4f9d\u8d56\u6570\u636e\uff0c\u5c31\u5e94\u8be5\u51fa\u73b0\u5728\u4f9d\u8d56\u9879\u6570\u7ec4\u4e2d\uff0c\u5982\u679c\u4e0d\u6dfb\u52a0\u4f9d\u8d56\u9879\u5c31\u4f1a\u6709bug\u51fa\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"\u300a\u4eba\u5bb6\u4e0d\u662f\u751f\u547d\u5468\u671f\uff01\uff01hook\u7684\u51fa\u73b0\u5c31\u662f\u4e0d\u7528\u751f\u547d\u5468\u671f\u7684\u6982\u5ff5\u4e5f\u53ef\u4ee5\u5199\u4e1a\u52a1\u4ee3\u7801\u300b"}),"\n",(0,t.jsx)(n.h2,{id:"\u6e05\u9664\u526f\u4f5c\u7528",children:"\u6e05\u9664\u526f\u4f5c\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7ec4\u4ef6\u88ab\u9500\u6bc1\u65f6\uff0c\u5982\u679c\u6709\u4e9b\u526f\u4f5c\u7528\u64cd\u4f5c\u9700\u8981\u88ab\u6e05\u7406\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bed\u6cd5\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u5b9a\u65f6\u5668"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"useEffect(()=>{\nconsole.log(\u2018\u526f\u4f5c\u7528\u51fd\u6570\u6267\u884c\u4e86\u201c\uff09\n// \u526f\u4f5c\u7528\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a\u4e3a\uff1a\u5728\u4e0b\u4e00\u6b21\u526f\u4f5c\u7528\u51fd\u6570\u6267\u884c\u4e4b\u524d\u6267\u884c\n return () =>{\nconsole.log(\u2018\u6e05\u7406\u526f\u4f5c\u7528\u7684\u51fd\u6570\u6267\u884c\u4e86\u2018\uff09 // \u5728\u8fd9\u91cc\u5199\u6e05\u7406\u526f\u4f5c\u7528\u7684\u4ee3\u7801\n  }\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"useeffect\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",children:"useEffect\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4f55\u5728useEffect\u4e2d\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\uff0c\u5e76\u4e14\u5c01\u88c5\u540c\u6b65 async await\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bed\u6cd5\u8981\u6c42"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u53ef\u4ee5\u76f4\u63a5\u5728useEffect\u7684\u56de\u8c03\u51fd\u6570\u5916\u5c42\u76f4\u63a5\u5305\u88f9 await\uff0c\u56e0\u4e3a\u5f02\u6b65\u4f1a\u5bfc\u81f4\u6e05\u7406\u51fd\u6570\u65e0\u6cd5\u7acb\u5373\u8fd4\u56de"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:"useEffect (async ()=>{\nconst res = await axios.get('http://geek.itheima.net/v1_0/channels' \uff09 console.log(res)\n\n},[])\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6b63\u786e\u5199\u6cd5"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5185\u90e8\u5355\u72ec\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u51fd\u6570\u5305\u88c5\u6210\u540c\u6b65"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react jsx",children:'useEffect(()=>{\n\nasync function fetchData(){\n\nconst res = await axios.get("http://geek.itheima.net/v1-0/channels")\n\nconsole.log(res)\n\n},[])\n'})}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-%E6%B3%A8%E9%87%8A1",children:["\n",(0,t.jsxs)(n.p,{children:["\u51fd\u6570\u526f\u4f5c\u7528\u662f\u6307\uff0c\u9664\u4e86\u6267\u884c\u51fd\u6570\u672c\u8eab\u7684\u64cd\u4f5c\uff0c\u800c\u6267\u884c\u7684\u5176\u4ed6\u64cd\u4f5c\uff1b\u8fd9\u70b9\u5728\u7ea2\u5b9d\u4e66\u4e2d\u6709\u63d0\u5230\uff1b\nps\uff1a\u540e\u671f\u6709\u65f6\u95f4\u5f04\u4e00\u4e2a\u7ea2\u5b9d\u4e66\u7684js\u57fa\u7840\uff1b\u5e72\u6b7b\u9762\u8bd5\u5b98 ",(0,t.jsx)(n.a,{href:"#user-content-fnref-%E6%B3%A8%E9%87%8A1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(6540);const c={},r=t.createContext(c);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);