"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[8773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"CentOS\u96c6\u7fa4\u5b89\u88c5Chrony\u65f6\u95f4\u540c\u6b65",date:new Date("2023-07-29T00:00:00.000Z"),tags:["NTP","\u65f6\u95f4\u540c\u6b65"],categories:[]},l="CentOS\u96c6\u7fa4\u5b89\u88c5Chrony\u65f6\u95f4\u540c\u6b65",c={unversionedId:"chrony",id:"chrony",title:"CentOS\u96c6\u7fa4\u5b89\u88c5Chrony\u65f6\u95f4\u540c\u6b65",description:"Centos7\u5f00\u59cb\u90fd\u9884\u88c5\u4e86Chrony\uff08ntpd\u88ab\u6dd8\u6c70\uff09\uff0c\u5c24\u5176\u73b0\u5728\u4f7f\u7528\u7684\u90fd\u662f CentOS 7.9 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u4e86\uff0c\u5982\u679c\u6ca1\u6709\u5219\u624b\u52a8\u5b89\u88c5yum install -y chrony\u3002",source:"@site/docslinux/chrony.md",sourceDirName:".",slug:"/chrony",permalink:"/docslinux/chrony",draft:!1,tags:[{label:"NTP",permalink:"/docslinux/tags/ntp"},{label:"\u65f6\u95f4\u540c\u6b65",permalink:"/docslinux/tags/\u65f6\u95f4\u540c\u6b65"}],version:"current",frontMatter:{title:"CentOS\u96c6\u7fa4\u5b89\u88c5Chrony\u65f6\u95f4\u540c\u6b65",date:"2023-07-29T00:00:00.000Z",tags:["NTP","\u65f6\u95f4\u540c\u6b65"],categories:[]},sidebar:"tutorialSidebar",next:{title:"Linux\u547d\u4ee4\u5907\u5fd8\u5f55",permalink:"/docslinux/commands-memo"}},i={},s=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u673a\u5668\u89c4\u5212",id:"\u673a\u5668\u89c4\u5212",level:3},{value:"\u6240\u6709\u673a\u5668\u90fd\u5c31\u7eea",id:"\u6240\u6709\u673a\u5668\u90fd\u5c31\u7eea",level:3},{value:"master\u8282\u70b9\u914d\u7f6e",id:"master\u8282\u70b9\u914d\u7f6e",level:2},{value:"node\u8282\u70b9\u914d\u7f6e",id:"node\u8282\u70b9\u914d\u7f6e",level:2},{value:"Chrony\u547d\u4ee4\u884c\u5ba2\u6237\u7aefchronyc",id:"chrony\u547d\u4ee4\u884c\u5ba2\u6237\u7aefchronyc",level:2},{value:"\u95ee\u9898\u8bb0\u5f55",id:"\u95ee\u9898\u8bb0\u5f55",level:2},{value:"PD\u865a\u62df\u673a\u91cc\u5b89\u88c5\u7684Linux\u5728\u5bbf\u4e3b\u673a\u5f85\u673a\u540e\uff0c\u6062\u590d\u65f6\u65f6\u95f4\u505c\u7559\u5728\u5f85\u673a\u524d\u4e14\u5f88\u4e45\u4e5f\u4e0d\u4f1a\u540c\u6b65\u65b0\u65f6\u95f4",id:"pd\u865a\u62df\u673a\u91cc\u5b89\u88c5\u7684linux\u5728\u5bbf\u4e3b\u673a\u5f85\u673a\u540e\u6062\u590d\u65f6\u65f6\u95f4\u505c\u7559\u5728\u5f85\u673a\u524d\u4e14\u5f88\u4e45\u4e5f\u4e0d\u4f1a\u540c\u6b65\u65b0\u65f6\u95f4",level:3}],u={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"centos\u96c6\u7fa4\u5b89\u88c5chrony\u65f6\u95f4\u540c\u6b65"},"CentOS\u96c6\u7fa4\u5b89\u88c5Chrony\u65f6\u95f4\u540c\u6b65"),(0,o.kt)("p",null,"Centos7\u5f00\u59cb\u90fd\u9884\u88c5\u4e86Chrony\uff08ntpd\u88ab\u6dd8\u6c70\uff09\uff0c\u5c24\u5176\u73b0\u5728\u4f7f\u7528\u7684\u90fd\u662f CentOS 7.9 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u4e86\uff0c\u5982\u679c\u6ca1\u6709\u5219\u624b\u52a8\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"yum install -y chrony"),"\u3002"),(0,o.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,o.kt)("h3",{id:"\u673a\u5668\u89c4\u5212"},"\u673a\u5668\u89c4\u5212"),(0,o.kt)("p",null,"192.168.1.10 master\n192.168.1.11 node1\n192.168.1.12 node2"),(0,o.kt)("h3",{id:"\u6240\u6709\u673a\u5668\u90fd\u5c31\u7eea"},"\u6240\u6709\u673a\u5668\u90fd\u5c31\u7eea"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u5b89\u88c5\u4e86Chrony"),(0,o.kt)("li",{parentName:"ul"},"\u65f6\u533a\u5df2\u7ecf\u6b63\u786e\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003\u7684\u547d\u4ee4",(0,o.kt)("inlineCode",{parentName:"li"},"timedatectl set-timezone Asia/Shanghai"))),(0,o.kt)("h2",{id:"master\u8282\u70b9\u914d\u7f6e"},"master\u8282\u70b9\u914d\u7f6e"),(0,o.kt)("p",null,"\u4fee\u6539chrony\u914d\u7f6e\u6587\u4ef6/etc/chrony.conf\uff0c\u4ee5\u4e0b\u53ea\u5217\u51fa\u9700\u8981\u4fee\u6539\u7684\u5730\u65b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"/etc/chrony.conf","/etc/chrony.conf":!0},"# \u4ece\u963f\u91cc\u4e91ntp\u670d\u52a1\u540c\u6b65\nserver ntp1.aliyun.com iburst\n\n# \u5141\u8bb8\u5176\u4ed6node\u673a\u5668\u4ecemaster\u540c\u6b65\nallow 192.168.1.0/24\n")),(0,o.kt)("p",null,"\u4fee\u6539\u5b8c\u914d\u7f6e\u91cd\u542f\u670d\u52a1",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl restart chronyd.service")),(0,o.kt)("h2",{id:"node\u8282\u70b9\u914d\u7f6e"},"node\u8282\u70b9\u914d\u7f6e"),(0,o.kt)("p",null,"\u540c\u6837\u53ea\u5217\u51fa\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u4fee\u6539\u7684\u5730\u65b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"/etc/chrony.conf","/etc/chrony.conf":!0},"# \u4ece\u963f\u91cc\u4e91ntp\u670d\u52a1\u540c\u6b65\nserver 192.168.1.10 iburst\n")),(0,o.kt)("p",null,"\u540c\u6837\u4fee\u6539\u5b8c\u91cd\u542f\u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"chrony\u547d\u4ee4\u884c\u5ba2\u6237\u7aefchronyc"},"Chrony\u547d\u4ee4\u884c\u5ba2\u6237\u7aefchronyc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5f3a\u5236\u540c\u6b65\u4e0b\u7cfb\u7edf\u65f6\u949f\nchronyc -a makestep\n\n# \u67e5\u770b\u65f6\u95f4\u540c\u6b65\u6e90\u72b6\u6001\nchronyc sourcestats\n\n# \u67e5\u770b\u65f6\u95f4\u540c\u6b65\u6e90\nchronyc sources -v\n")),(0,o.kt)("h2",{id:"\u95ee\u9898\u8bb0\u5f55"},"\u95ee\u9898\u8bb0\u5f55"),(0,o.kt)("h3",{id:"pd\u865a\u62df\u673a\u91cc\u5b89\u88c5\u7684linux\u5728\u5bbf\u4e3b\u673a\u5f85\u673a\u540e\u6062\u590d\u65f6\u65f6\u95f4\u505c\u7559\u5728\u5f85\u673a\u524d\u4e14\u5f88\u4e45\u4e5f\u4e0d\u4f1a\u540c\u6b65\u65b0\u65f6\u95f4"},"PD\u865a\u62df\u673a\u91cc\u5b89\u88c5\u7684Linux\u5728\u5bbf\u4e3b\u673a\u5f85\u673a\u540e\uff0c\u6062\u590d\u65f6\u65f6\u95f4\u505c\u7559\u5728\u5f85\u673a\u524d\u4e14\u5f88\u4e45\u4e5f\u4e0d\u4f1a\u540c\u6b65\u65b0\u65f6\u95f4"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u53ea\u6709chronyd\u542f\u52a8\u540e\u7684\u524d3\u6b21\u4f1a\u8dc3\u8fdb\u5f0f\u540c\u6b65\u65f6\u95f4\uff0c\u7528\u4e8e\u65f6\u95f4\u504f\u5dee\u6bd4\u8f83\u5927\u65f6\u5feb\u901f\u4fee\u6b63\u3002\u8fd9\u91cc\u7684\u505a\u6cd5\u5c31\u662f\u53d6\u6d883\u6b21\u7684\u9650\u5236\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://chrony-project.org/doc/4.1/chrony.conf.html#makestep"},"\u5b98\u65b9\u6587\u6863"),"\u8bf4\u4ec5\u5728\u542f\u52a8\u65f6\u4e143\u6b21\u7684\u9650\u5236\u662f\u4e3a\u4e86\u907f\u514d\u5bf9\u67d0\u4e9b\u4f9d\u8d56\u4e8e\u65f6\u95f4\u5355\u8c03\u524d\u8fdb\u7684\u5e94\u7528\u4ea7\u751f\u5f71\u54cd\uff0c\u4e0d\u6e05\u695a\u662f\u4ec0\u4e48\u6837\u7684\u5e94\u7528\uff0c\u4e00\u822c\u6765\u8bf4\u65f6\u95f4\u4e0d\u51c6\u5bf9\u5927\u90e8\u5206\u5e94\u7528\u7684\u5f71\u54cd\u66f4\u5927\u3002\u4e0d\u8fc7\u6b63\u5e38\u60c5\u51b5\u4e0b\u670d\u52a1\u5668\u662f\u4e00\u76f4\u8fd0\u884c\u7684\u4e14\u5f88\u7a33\u5b9a\uff0c\u5f88\u96be\u51fa\u73b0\u65f6\u95f4\u504f\u5dee\u8fc7\u5927\u7684\u573a\u666f\uff0c\u6240\u4ee5\u9ed8\u8ba4\u8bbe\u7f6e\u4e5f\u662f\u5408\u7406\u8003\u8651\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.51cto.com/lajifeiwomoshu/5434581"},"https://blog.51cto.com/lajifeiwomoshu/5434581")))}y.isMDXComponent=!0}}]);