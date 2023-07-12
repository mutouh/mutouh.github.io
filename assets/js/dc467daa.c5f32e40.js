"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[3181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"\u521d\u63a2ELK\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb",date:new Date("2019-01-10T00:00:00.000Z"),tags:["ElasticSearch","Logstash","Kibana"],categories:["\u6280\u672f\u5411"]},l="\u521d\u63a2ELK\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb",c={unversionedId:"programming-column/ELK",id:"programming-column/ELK",title:"\u521d\u63a2ELK\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb",description:"## ELK\u4ecb\u7ecd",source:"@site/docs/programming-column/ELK.md",sourceDirName:"programming-column",slug:"/programming-column/ELK",permalink:"/docs/programming-column/ELK",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-column/ELK.md",tags:[{label:"ElasticSearch",permalink:"/docs/tags/elastic-search"},{label:"Logstash",permalink:"/docs/tags/logstash"},{label:"Kibana",permalink:"/docs/tags/kibana"}],version:"current",frontMatter:{title:"\u521d\u63a2ELK\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb",date:"2019-01-10T00:00:00.000Z",tags:["ElasticSearch","Logstash","Kibana"],categories:["\u6280\u672f\u5411"]},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro"},next:{title:"Flink on k8s with application mode",permalink:"/docs/programming-column/Flink-on-k8s-with-applicaiton-mode"}},i={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u521d\u63a2elk\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb"},"\u521d\u63a2ELK\u65e5\u5fd7\u7ba1\u7406\u4f53\u7cfb"),(0,n.kt)("blockquote",null,(0,n.kt)("h2",{parentName:"blockquote",id:"elk\u4ecb\u7ecd"},"ELK\u4ecb\u7ecd")),(0,n.kt)("p",null,"ELK\u662felastic\u516c\u53f8\u63d0\u4f9b\u7684\u4e00\u5957\u5b8c\u6574\u7684\u65e5\u5fd7\u6536\u96c6\u548c\u5c55\u793a\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5206\u522b\u6307\u4ee3\u7684\u662f",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/products/elasticsearch"},"ElasticSearch"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/products/logstash"},"Logstash"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/products/kibana"},"Kibana"),"\u4e09\u4e2a\u4ea7\u54c1\uff0c\u53e6\u5916\u52a0\u5165\u4e86",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/products/beats"},"Beats"),"\u6765\u4f18\u5316Logstash\uff08\u8fd9\u4e00\u70b9\u6b64\u5904\u5148\u5ffd\u7565\u4e0d\u8ba1\uff09\u3002\u4e3b\u8981\u7528\u4e8e\u5927\u578b",(0,n.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f"),"\u7cfb\u7edf\u7684\u65e5\u5fd7\u96c6\u4e2d\u5206\u6790\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7cfb\u7edf\uff0c\u9700\u8981\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u4e3b\u8981\u7279\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6536\u96c6\u2014\u2014\u80fd\u591f\u91c7\u96c6\u591a\u79cd\u6765\u6e90\u7684\u65e5\u5fd7\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u2014\u2014\u80fd\u591f\u7a33\u5b9a\u7684\u628a\u65e5\u5fd7\u6570\u636e\u4f20\u8f93\u5230\u4e2d\u592e\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u2014\u2014\u80fd\u591f\u5bf9\u6536\u96c6\u7684\u65e5\u5fd7\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u8f6c\u6362\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u2014\u2014\u5982\u4f55\u5b58\u50a8\u65e5\u5fd7\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6790\u2014\u2014\u53ef\u4ee5\u652f\u6301UI\u5206\u6790"),(0,n.kt)("li",{parentName:"ul"},"\u544a\u8b66\u2014\u2014\u80fd\u591f\u63d0\u4f9b\u9519\u8bef\u62a5\u544a\uff0c\u76d1\u63a7\u673a\u5236")),(0,n.kt)("p",null,"\u5728ELK\u4f53\u7cfb\u4e2dL\u8d1f\u8d23\u6536\u96c6\u3001\u8f6c\u6362\u548c\u4f20\u8f93\uff1bE\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\uff1bK\u8d1f\u8d23\u5206\u6790\uff0c\u4ee5\u63d0\u4f9b\u53ef\u89c6\u5316\u754c\u9762\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("h2",{parentName:"blockquote",id:"elk\u67b6\u6784"},"ELK\u67b6\u6784")),(0,n.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684\u67b6\u6784\u65b9\u5f0f\u5982\u56fe\u6240\u793a\u3002\u5728\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u9879\u76ee\u4e2d\u4e3a\u6bcf\u4e2a\u8282\u70b9\u90fd\u5b89\u88c5Logstash\u6765\u6536\u96c6\u5404\u81ea\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u5e76\u5c06\u8fd9\u4e9b\u65e5\u5fd7\u4fe1\u606f\u53d1\u9001\u5230\u4e2d\u592eElasticSearch\u5b58\u50a8\uff0c\u7ba1\u7406\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7Kibana\u67e5\u770b\u53ef\u89c6\u5316\u7684\u7ed3\u679c\uff0c\u5305\u62ec\u4ee5\u56fe\u8868\u7684\u5f62\u5f0f\u5c55\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ELK\u666e\u901a\u67b6\u6784",src:r(1700).Z,width:"854",height:"504"})),(0,n.kt)("blockquote",null,(0,n.kt)("h2",{parentName:"blockquote",id:"\u5feb\u901f\u642d\u5efa"},"\u5feb\u901f\u642d\u5efa")),(0,n.kt)("p",null,"\u9996\u5148\u8981\u4e86\u89e3ELK\u4e2d\u7684\u4e09\u4e2a\u7ec4\u4ef6\u5404\u81ea\u7684\u5165\u95e8\u4f7f\u7528\uff0c\u8fd9\u4e00\u70b9\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\u7684\u6587\u6863\u8d44\u6599\u3002\u5728\u5b98\u7f51\u7684\u6587\u6863\u4e2d\u540c\u65f6\u63d0\u4f9b\u4e86\u7528\u4e8e\u64cd\u4f5c\u7684\u6a21\u62df\u6570\u636e\uff0c\u975e\u5e38\u7684\u8d34\u5fc3\u3002\u53e6\u5916\u5141\u8bb8\u7684\u8bdd\u4e5f\u53ef\u4ee5\u5728\u81ea\u5df1\u672c\u5730\u7535\u8111\u627e\u4e00\u4efdtomcat\u7684\u8fd0\u884c\u65e5\u5fd7\uff0c\u7528\u505a\u6a21\u62df\u6570\u636e\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ElasticSearch"),(0,n.kt)("li",{parentName:"ol"},"Logstash"),(0,n.kt)("li",{parentName:"ol"},"Kibana")))}m.isMDXComponent=!0},1700:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ELK\u67b6\u67841-\u526f\u672c-5e92024c3e46336a217fbe344d723dbe.jpg"}}]);