"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[5295],{4323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=n(4848),r=n(8453);const c={sidebar_position:10,sidebar_label:"10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3"},s="10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3",a={id:"react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo/index",title:"10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3",description:"\u76ee\u5f55",source:"@site/docs/react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo/index.md",sourceDirName:"react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo",slug:"/react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo/",permalink:"/myblog/docs/react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/React \u6280\u5de7/10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mo/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3"},sidebar:"tutorialSidebar",previous:{title:"9\u3001\u9ebb\u5a46\u8c46\u8150\uff5c\u6c38\u8fdc\u4e0d\u8981\u76f4\u63a5\u8bbe\u7f6estate\u7684\u503c",permalink:"/myblog/docs/react/React \u6280\u5de7/9\u3001\u9ebb\u5a46\u8c46\u8150\uff5c\u6c38\u8fdc\u4e0d\u8981\u76f4\u63a5\u8bbe\u7f6estate\u7684\u503c/"},next:{title:"11\u3001\u9752\u6912\u8089\u4e1d\uff5cuseReducer \u662f\u4ec0\u4e48\uff1f",permalink:"/myblog/docs/react/React \u6280\u5de7/11\u3001\u9752\u6912\u8089\u4e1d\uff5cuseReducer \u662f\u4ec0\u4e48\uff1f/"}},i={},d=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"Context\u662f\u4ec0\u4e48\uff1f",id:"context\u662f\u4ec0\u4e48",level:4},{value:"Context\u7b80\u5355\u4f7f\u7528",id:"context\u7b80\u5355\u4f7f\u7528",level:4},{value:"\u7b80\u5355\u603b\u7ed3",id:"\u7b80\u5355\u603b\u7ed3",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"10\u4e34\u6c82\u7092\u9e21contextapiredux-or-mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3",children:"10\u3001\u4e34\u6c82\u7092\u9e21\uff5ccontextAPI\uff0credux or mobx\u7b80\u5355\u7528\u6cd5\u66ff\u4ee3"}),"\n",(0,o.jsx)(t.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#Context%E6%98%AF%E4%BB%80%E4%B9%88",children:"Context\u662f\u4ec0\u4e48\uff1f"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#Context%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8",children:"Context\u7b80\u5355\u4f7f\u7528"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#%E7%AE%80%E5%8D%95%E6%80%BB%E7%BB%93",children:"\u7b80\u5355\u603b\u7ed3"})}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"context\u662f\u4ec0\u4e48",children:"Context\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,o.jsx)(t.p,{children:"Context\u76f4\u8bd1\u5c31\u662f\u4e0a\u4e0b\u6587\uff0c\u662f React 16.3.0\u5f00\u59cb\u63d0\u4f9b\u7684\u4e00\u4e2a\u5b98\u65b9API\uff0c\u5b83\u65e0\u9700\u901a\u8fc7props\u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u5b8c\u6210\u9879\u76ee\u4e2d\u7531\u4e0a\u800c\u4e0b\u53ca\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u9012\u548c\u5171\u4eab\uff0c\u5373\u4f60\u4e5f\u4e0d\u7528\u4f9d\u8d56\u4efb\u4f55\u7b2c\u4e09\u65b9\u7684\u72b6\u6001\u6570\u636e\u63d2\u4ef6\u5e93\u5c31\u53ef\u4ee5\u5b8c\u6210\u8fd9\u9879\u5de5\u4f5c\u4efb\u52a1\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u5b98\u65b9\u63a8\u8350\u4f7f\u7528\u7684\u60c5\u51b5\u662f\uff1a\u5f53\u9700\u8981\u7528\u5230\u5168\u5c40\u6570\u636e\u7684\u65f6\u5019\uff0c\u6bd4\u5982\uff1a\u4e3b\u9898\uff0c\u591a\u8bed\u8a00\u5236\u6216\u8005\u7528\u6237\u767b\u5f55\u6388\u6743\u7b49\u7b49\u3002 ",(0,o.jsx)(t.strong,{children:"==\u5f53\u7136\uff1a=="})," \u4f60\u65e0\u9700\u8fd9\u4e48\u6b7b\u677f\uff0c\u5f53\u9700\u8981\u7528\u5230\u591a\u5c42\u7ea7\u7684\u7ec4\u4ef6\u6570\u636e\u4f20\u9012\u6216\u8005\u590d\u6742\u7684\u6570\u636e\u5171\u4eab\u573a\u666f\u4e5f\u53ef\u4ee5\u4f7f\u7528context api\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u505a\u7f13\u5b58\u4f7f\u7528\u3002"]}),"\n",(0,o.jsx)(t.h4,{id:"context\u7b80\u5355\u4f7f\u7528",children:"Context\u7b80\u5355\u4f7f\u7528"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"// 1.\u4f7f\u7528React.createContext\u521b\u5efacontext\u63d0\u4f9b\u8005Provider \u548c context\u8ba2\u9605\u8005cunsomer\n\nconst {Provider, Consumer} = React.createContext(defaultValue); // defaultValue\u6839\u636e\u4f7f\u7528\u573a\u666f\u8bbe\u7f6e\n\n// 2.\u8bbe\u7f6eProvider\u7ec4\u4ef6\n// \u4e00\u822c\u5305\u88f9\u9700\u8981\u8ba2\u9605\u7684\u5b50\u7ec4\u4ef6\u7684\u9876\u5c42\u7236\u7ec4\u4ef6\n// value\u8bbe\u7f6e\u9700\u8981\u4f20\u9012\u548c\u5171\u4eab\u7684\u6570\u636e\u4ee5\u53ca\u6539\u53d8\u6570\u636e\u7684\u51fd\u6570\u7b49\n// \u4e3a\u4e86\u907f\u514d\u6ca1\u5fc5\u8981\u7684\u91cd\u7ed8\u548c\u6e32\u67d3\uff0cvalue\u7684\u6570\u636e\u5c5e\u6027\u503c\u901a\u8fc7\u7ec4\u4ef6state\u8bbe\u7f6e\n\n<Provider value={/* some value */}>\n    {/* some component with comsumer */}\n</Provider>\n\n// 3.\u8bbe\u7f6eConsumer\u7ec4\u4ef6\n// \u901a\u8fc7\u51fd\u6570\u4f5c\u4e3a\u5b50\u5143\u7d20\u7684\u65b9\u5f0f\uff0c\u8ba2\u9605context\u7684\u53d8\u6362\n\n<Consumer>\n  {value => /* render something based on the context value */}\n</Consumer>\n\n// \u7ec4\u5408Provider \u548c Consumer\u5373\u53ef\u5927\u529f\u544a\u6210\n\n<ProviderComponent>\n    <ConsumerComponent>{somechildren}</ConsumerComponent>\n</ProviderComponent>\n\n// \u5176\u4ed6\u66f4\u591a\u7528\u6cd5\uff0c\u6bd4\u5982\u751f\u547d\u5468\u671f\u51fd\u6570\u8c03\u7528\uff08\u53ef\u70b9\u51fb\u4e0a\u9762demo\u67e5\u770b\uff09\uff0c\u9ad8\u9636\u7ec4\u4ef6\u7b49\u6d4f\u89c8\u4e00\u4e0b\u6587\u6863\u5373\u4f1a\uff0c\u975e\u5e38\u7b80\u5355\n\n"})}),"\n",(0,o.jsx)(t.h4,{id:"\u7b80\u5355\u603b\u7ed3",children:"\u7b80\u5355\u603b\u7ed3"}),"\n",(0,o.jsx)(t.p,{children:"\u521b\u5efa\u5356\u5bb6\u548c\u4e70\u5bb6\uff0c\u901a\u8fc7\u5927\u5bb6\u90fd\u975e\u5e38\u719f\u6089\u7684React\u7ec4\u4ef6\u65b9\u5f0f\u6765\u8fdb\u884c\u4e70\u5356\u4ea4\u6613\uff0c\u5982\u6b64\u7b80\u5355\u7684Context\u7528\u6cd5\uff0c\u5927\u5bb6\u8fd8\u5728\u7b49\u4ec0\u4e48\uff0c\u8d76\u7d27\u4e22\u6389\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u5e93\uff01\uff01"})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const r={},c=o.createContext(r);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);