"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[6286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={title:"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41",date:new Date("2021-12-14T00:00:00.000Z"),tags:["redis","\u9650\u6d41"]},l="\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41",s={unversionedId:"programming-column/rate-limit-with-redis",id:"programming-column/rate-limit-with-redis",title:"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41",description:"\u9700\u6c42",source:"@site/docs/programming-column/rate-limit-with-redis.md",sourceDirName:"programming-column",slug:"/programming-column/rate-limit-with-redis",permalink:"/docs/programming-column/rate-limit-with-redis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-column/rate-limit-with-redis.md",tags:[{label:"redis",permalink:"/docs/tags/redis"},{label:"\u9650\u6d41",permalink:"/docs/tags/\u9650\u6d41"}],version:"current",frontMatter:{title:"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41",date:"2021-12-14T00:00:00.000Z",tags:["redis","\u9650\u6d41"]},sidebar:"tutorialSidebar",previous:{title:"\u9650\u6d41\u7b97\u6cd5",permalink:"/docs/programming-column/rate-limit-algorithm"},next:{title:"Spring Cloud OpenFeign",permalink:"/docs/programming-column/spring-cloud-openfeign"}},o={},c=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u57fa\u4e8eRedis\u7684setnx",id:"\u57fa\u4e8eredis\u7684setnx",level:2},{value:"\u57fa\u4e8eRedis\u7684zset\u7ed3\u6784",id:"\u57fa\u4e8eredis\u7684zset\u7ed3\u6784",level:2},{value:"\u57fa\u4e8eRedis\u7684\u4ee4\u724c\u6876\u7b97\u6cd5",id:"\u57fa\u4e8eredis\u7684\u4ee4\u724c\u6876\u7b97\u6cd5",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41"},"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41"),(0,i.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,i.kt)("p",null,"\u67d0\u4e2aapi\u9650\u5b9a10\u79d2\u5185\u53ea\u5141\u8bb820\u4e2a\u8bf7\u6c42"),(0,i.kt)("h2",{id:"\u57fa\u4e8eredis\u7684setnx"},"\u57fa\u4e8eRedis\u7684setnx"),(0,i.kt)("p",null,"setnx = set if not exist"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'redis> SETNX mykey "Hello"\n(integer) 1\nredis> SETNX mykey "World"\n(integer) 0\nredis> GET mykey\n"Hello"\nredis> \n')),(0,i.kt)("p",null,"\u65b9\u6848\uff1a\u8bf7\u6c42\u5230\u6765\u65f6\uff0c\u901a\u8fc7setnx\u8bbe\u7f6e\u4e00\u4e2a\u7c7b\u4f3climit-key-xxx\u7684key\uff0c\u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a10\u79d2\u3002\u4e0b\u6b21\u8bf7\u6c42\u5230\u6765\u65f6\uff0c\u5148\u67e5\u8be2\u6307\u5b9a\u524d\u7f00\u7684key\u7684\u6570\u91cf\uff0c\u82e5\u5df2\u5b58\u572820\u4e2a\u5219\u8bf7\u6c42\u4e0d\u653e\u884c\u3002\n\u4f18\u70b9\uff1akey\u6570\u91cf\u4e0d\u4f1a\u65e0\u9650\u5236\u589e\u52a0\n\u7f3a\u70b9\uff1a"),(0,i.kt)("h2",{id:"\u57fa\u4e8eredis\u7684zset\u7ed3\u6784"},"\u57fa\u4e8eRedis\u7684zset\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"redis> zadd limit-key timestamp uuid\n(integer) 1\nredis>\n")),(0,i.kt)("p",null,"\u65b9\u6848\uff1a\u6bcf\u4e00\u6b21\u8bf7\u6c42\u5230\u6765\u65f6\uff0c\u90fd\u5f80\u6307\u5b9a\u7684sorted set\u6570\u636e\u7ed3\u6784\u7684key\u91cc\u6dfb\u52a0\u4e00\u6761\u8bb0\u5f55\uff0cscore\u4e3a\u65f6\u95f4\u6233\uff0cvalue\u4e3auuid\u3002\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u5230\u6765\u65f6\uff0c\u5148\u901a\u8fc7zrangeByScore\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4\uff08\u5f53\u524d\u65f6\u95f4-20s\uff09-\u7ed3\u675f\u65f6\u95f4\uff08\u5f53\u524d\u65f6\u95f4\uff09\u8303\u56f4\u5185\u7684\u6570\u636e\u8bb0\u5f55\u6570\u91cf\uff0c\u5982\u679c\u8d85\u8fc720\u6761\u5219\u8bf7\u6c42\u4e0d\u653e\u884c\u3002\n\u4f18\u70b9\uff1a\u4ee5\u6ed1\u52a8\u7a97\u53e3\u7684\u5f62\u5f0f\uff0c\u53ef\u4ee5\u7edf\u8ba1\u4efb\u610fN\u79d2\u5185\u7684M\u4e2a\u8bf7\u6c42\uff1bvalue\u4e3auuid\u53ef\u4ee5\u4f5c\u4e3a\u5176\u4ed6\u7edf\u8ba1\u8868\u7684id\u5b9e\u73b0\u7edf\u8ba1\u6548\u679c\uff1b\n\u7f3a\u70b9\uff1a\u56e0\u4e3a\u6ca1\u6709\u9501\u7684\u673a\u5236\uff0c\u9ad8\u5e76\u53d1\u7684\u65f6\u5019\u4e0d\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684N\u79d2M\u4e2a\u8bf7\u6c42\uff1bzset\u6570\u636e\u91cf\u4f1a\u8d8a\u6765\u8d8a\u5927\uff0c\u9700\u8981\u91c7\u53d6\u4e00\u5b9a\u63aa\u65bd\uff0c\u6bd4\u5982\u8f6c\u5b58\u6216\u5220\u9664\uff1b"),(0,i.kt)("h2",{id:"\u57fa\u4e8eredis\u7684\u4ee4\u724c\u6876\u7b97\u6cd5"},"\u57fa\u4e8eRedis\u7684\u4ee4\u724c\u6876\u7b97\u6cd5"),(0,i.kt)("p",null,"\u601d\u60f3\uff1a\u4ee4\u724c\u6876\u7b97\u6cd5\uff0c\u9884\u8bbeM\u4e2a\u4ee4\u724c\uff0c\u4ee5N\u79d2\u7684\u8f93\u5165\u901f\u7387\u5f80\u6876\u91cc\u589e\u52a0\u4ee4\u724c\uff0c\u6876\u91cc\u7684\u4ee4\u724c\u53d6\u5b8c\u5219\u8d85\u51fa\u9650\u5236\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'redis> LPUSH limit-key "1" "2" ... "20"\n(integer) 20\nredis> \n')),(0,i.kt)("p",null,"\u65b9\u6848\uff1a\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1N\u79d2\u5f80list\u6570\u636e\u7ed3\u6784\u7684key\u4e2d\u589e\u52a0\u5143\u7d20\uff0c\u4f7f\u5f97\u5143\u7d20\u6570\u91cf\u4fdd\u6301M\u4e2a\uff0c\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u5230\u6765\u65f6\u90fd\u5148\u4ece\u6b64list\u4e2d\u53d6\u4e00\u4e2a\u5143\u7d20\uff0c\u53d6\u4e0d\u5230\u5219\u8bf7\u6c42\u4e0d\u653e\u884c\u3002\n\u4f18\u70b9\uff1alist\u6570\u636e\u91cf\u4e0d\u4f1a\u65e0\u9650\u5236\u589e\u52a0\uff1b\u80fd\u591f\u63a7\u5236N\u79d2\u5185\u5fc5\u5b9a\u53ea\u6709M\u4e2a\u8bf7\u6c42\uff1b\n\u7f3a\u70b9\uff1a\u6ca1\u6709\u6ed1\u52a8\u7a97\u53e3\u7684\u673a\u5236\uff1b"))}p.isMDXComponent=!0}}]);