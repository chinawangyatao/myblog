"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[8491],{6690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(4848),s=t(8453);const r={},c="useContext",i={id:"react/Hooks/useContext/useContext",title:"useContext",description:"\u76ee\u5f55",source:"@site/docs/react/Hooks/useContext/useContext.md",sourceDirName:"react/Hooks/useContext",slug:"/react/Hooks/useContext/",permalink:"/myblog/docs/react/Hooks/useContext/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/Hooks/useContext/useContext.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"memo + useMemo + useCallback",permalink:"/myblog/docs/react/Hooks/memo + useMemo + useCallback/"},next:{title:"useEffect",permalink:"/myblog/docs/react/Hooks/useEffect/"}},u={},l=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"\u5b9e\u73b0\u6b65\u9aa4",id:"\u5b9e\u73b0\u6b65\u9aa4",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usecontext",children:"useContext"}),"\n",(0,o.jsx)(n.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#%E5%AE%9E%E7%8E%B0%E6%AD%A5%E9%AA%A4",children:"\u5b9e\u73b0\u6b65\u9aa4"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",children:"\u4ee3\u7801\u5b9e\u73b0"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(521).A+"",width:"1256",height:"820"})}),"\n",(0,o.jsx)(n.h3,{id:"\u5b9e\u73b0\u6b65\u9aa4",children:"\u5b9e\u73b0\u6b65\u9aa4"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u4f7f\u7528 createContext \u521b\u5efaContext\u5bf9\u8c61"}),"\n",(0,o.jsx)(n.li,{children:"\u5728\u9876\u5c42\u7ec4\u4ef6\u901a\u8fc7 Provider \u63d0\u4f9b\u6570\u636e"}),"\n",(0,o.jsx)(n.li,{children:"\u5728\u5e95\u5c42\u7ec4\u4ef6\u901a\u8fc7 useContext \u51fd\u6570\u83b7\u53d6\u6570\u636e"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4ee3\u7801\u5b9e\u73b0",children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-react jsx",children:'import React, { createContext, useContext, useState } from "react";\n\nconst Context = createContext();\n\nfunction TryUseContext(props) {\n  const [count, setcount] = useState(0);\n  return (\n    <Context.Provider value={count}>\n      <div>\n        <ComA />\n        <button\n          onClick={() => {\n            setcount(count + 1);\n          }}\n        >\n          xiugai\n        </button>\n        \n      </div>\n    </Context.Provider>\n  );\n}\n\nfunction ComA() {\n  const count = useContext(Context);\n  return (\n    <div>\n      This is ComA---{count}\n      <ComB />\n    </div>\n  );\n}\nfunction ComB() {\n  return (\n    <div>\n      This is ComB\n      <ComC />\n    </div>\n  );\n}\nfunction ComC() {\n  const count = useContext(Context);\n  return <div>This is ComC==={count}</div>;\n}\n\nexport default TryUseContext;\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},521:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/image_7iPlnzNbPA-ef03727654d475de03613b788d035757.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);