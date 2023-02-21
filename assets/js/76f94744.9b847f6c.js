"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[3347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aURL\u53c2\u6570",date:new Date("2022-05-30T00:00:00.000Z"),tags:["nginx"]},i="nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aURL\u53c2\u6570",l={unversionedId:"programming-column/nginx-rewrite-path-variable-to-query",id:"programming-column/nginx-rewrite-path-variable-to-query",title:"nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aURL\u53c2\u6570",description:"\u9700\u6c42",source:"@site/docs/programming-column/nginx-rewrite-path-variable-to-query.md",sourceDirName:"programming-column",slug:"/programming-column/nginx-rewrite-path-variable-to-query",permalink:"/docs/programming-column/nginx-rewrite-path-variable-to-query",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-column/nginx-rewrite-path-variable-to-query.md",tags:[{label:"nginx",permalink:"/docs/tags/nginx"}],version:"current",frontMatter:{title:"nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aURL\u53c2\u6570",date:"2022-05-30T00:00:00.000Z",tags:["nginx"]},sidebar:"tutorialSidebar",previous:{title:"nginx \u5bf9\u8bf7\u6c42\u8fdb\u884cURL\u7f16\u7801",permalink:"/docs/programming-column/nginx-encode-uri-variable"},next:{title:"NoSql\u6570\u636e\u5e93",permalink:"/docs/programming-column/nosql-databases"}},s={},c=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"nginx\u914d\u7f6e",id:"nginx\u914d\u7f6e",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aurl\u53c2\u6570"},"nginx\u91cd\u5199\u8def\u5f84\u53c2\u6570\u4e3aURL\u53c2\u6570"),(0,a.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,a.kt)("p",null,"\u79fb\u9664\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684token\u53c2\u6570\uff0c\u5e76\u5c06\u5176\u79fb\u52a8\u5230URL\u53c2\u6570\u4e2d"),(0,a.kt)("p",null,"\u6709N\u4e2a\u63a5\u53e3\u5982\u4e0b\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataJson?name=test"},"http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataJson?name=test"),"\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataXml?name=test"},"http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataXml?name=test"),"\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/services/RES_TWO/c_kjdksl-myl/getData?name=test"},"http://127.0.0.1:8080/services/RES_TWO/c_kjdksl-myl/getData?name=test"),"\n\u5176\u4e2d\u7528\u6237token=c_kjdksl-myl"),(0,a.kt)("h2",{id:"nginx\u914d\u7f6e"},"nginx\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u6b63\u5219\u5339\u914d\u76ee\u6807URI\nlocation ~ ^/services/RES_\\w+/.+/(getDataJson|getDataXml)$ {\n    # \u91cd\u5199URI\u4e2dtoken\u4f4d\u7f6e\n    rewrite ^/(services/RES_\\w+)/(.+)/(getDataJson|getDataXml)$ /$1/$3?token=$2 break;\n\n    proxy_pass http://127.0.0.1:9090;\n}\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u539f\u59cb\u8bf7\u6c42\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/services/RES_THREE/c_kjdksl-myl/getDataJson?name=test"},"http://127.0.0.1:8080/services/RES_THREE/c_kjdksl-myl/getDataJson?name=test"),"\nnginx\u91cd\u5199\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9090/services/RES_THREE/getDataJson?token=c_kjdksl-myl&name=test"},"http://127.0.0.1:9090/services/RES_THREE/getDataJson?token=c_kjdksl-myl&name=test")))}u.isMDXComponent=!0}}]);