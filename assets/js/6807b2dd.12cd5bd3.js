"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[2824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u7ec4\u5408\u6a21\u5f0f",date:new Date("2022-08-29T00:00:00.000Z"),categories:["\u8bbe\u8ba1\u6a21\u5f0f"],tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},i="\u7ec4\u5408\u6a21\u5f0f",l={unversionedId:"design-pattern/Composite-Mode",id:"design-pattern/Composite-Mode",title:"\u7ec4\u5408\u6a21\u5f0f",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/Composite-Mode.md",sourceDirName:"design-pattern",slug:"/design-pattern/Composite-Mode",permalink:"/docs/design-pattern/Composite-Mode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/Composite-Mode.md",tags:[{label:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/docs/tags/\u8bbe\u8ba1\u6a21\u5f0f"}],version:"current",frontMatter:{title:"\u7ec4\u5408\u6a21\u5f0f",date:"2022-08-29T00:00:00.000Z",categories:["\u8bbe\u8ba1\u6a21\u5f0f"],tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},sidebar:"tutorialSidebar",previous:{title:"DATETIME\u4e0eTIMESTAMP\u7684\u4e00\u4e9b\u533a\u522b\u4e0e\u95ee\u9898",permalink:"/docs/ share/differences-between-datetime-and-timestamp"},next:{title:"git clone\u62a5\u9519 early EOF + index-pack failed",permalink:"/docs/development-environment/git-early-EOF"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u8bbe\u8ba1\u6a21\u5f0f",id:"\u76f8\u5173\u8bbe\u8ba1\u6a21\u5f0f",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ec4\u5408\u6a21\u5f0f"},"\u7ec4\u5408\u6a21\u5f0f"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5168\u90e8\u548c\u90e8\u5206\u7684\u5173\u7cfb"),(0,o.kt)("h2",{id:"\u76f8\u5173\u8bbe\u8ba1\u6a21\u5f0f"},"\u76f8\u5173\u8bbe\u8ba1\u6a21\u5f0f"),(0,o.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/bytesfly/p/composite-pattern.html"},"\u7ec4\u5408\u6a21\u5f0f(Composite Pattern)\u2014\u2014\u6811\u5f62\u7ed3\u6784\u7684\u5904\u7406")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/ljw761123096/article/details/79834854"},"\u6d45\u8c08springMVC\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f(5)\u2014\u2014\u7ec4\u5408\u6a21\u5f0f"))))}d.isMDXComponent=!0}}]);