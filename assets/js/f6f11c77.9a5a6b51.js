"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[6306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,v=g["".concat(c,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"String \u5b57\u7b26\u4e32",date:new Date("2023-02-15T00:00:00.000Z"),tags:["Java"]},l="String \u5b57\u7b26\u4e32",o={unversionedId:"programming-column/java-basics/java.lang.String",id:"programming-column/java-basics/java.lang.String",title:"String \u5b57\u7b26\u4e32",description:"string\u957f\u5ea6\u9650\u5236",source:"@site/docs/programming-column/java-basics/java.lang.String.md",sourceDirName:"programming-column/java-basics",slug:"/programming-column/java-basics/java.lang.String",permalink:"/docs/programming-column/java-basics/java.lang.String",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-column/java-basics/java.lang.String.md",tags:[{label:"Java",permalink:"/docs/tags/java"}],version:"current",frontMatter:{title:"String \u5b57\u7b26\u4e32",date:"2023-02-15T00:00:00.000Z",tags:["Java"]},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4Session\u5171\u4eab",permalink:"/docs/programming-column/clustered-session-sharing"},next:{title:"\u4f7f\u7528maven-docker\u63d2\u4ef6\u81ea\u52a8\u53d1\u5e03\u955c\u50cf",permalink:"/docs/programming-column/maven-docker"}},c={},s=[{value:"string\u957f\u5ea6\u9650\u5236",id:"string\u957f\u5ea6\u9650\u5236",level:2},{value:"\u4e00\u4e2a\u5b57\u7b26\u7684String.lenght()\u4e00\u5b9a\u662f1\u5417",id:"\u4e00\u4e2a\u5b57\u7b26\u7684stringlenght\u4e00\u5b9a\u662f1\u5417",level:2}],u={toc:s},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-\u5b57\u7b26\u4e32"},"String \u5b57\u7b26\u4e32"),(0,a.kt)("h2",{id:"string\u957f\u5ea6\u9650\u5236"},"string\u957f\u5ea6\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u9650\u5236\n\u4eceJava\u6e90\u7801\u53ef\u4ee5\u627e\u5230")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private void checkStringConstant(DiagnosticPosition var1, Object var2) { if (this.nerrs == 0 && var2 != null && var2 instanceof String && ((String)var2).length() >= 65535) { this.log.error(var1, "limit.string", new Object[0]); ++this.nerrs; } }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u9650\u5236\n\u4e3b\u8981\u4f53\u73b0\u5728\u6784\u9020\u51fd\u6570\u4e0a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public String(char value[], int offset, int count) {\n    ...\n}\n")),(0,a.kt)("p",null,"count\u5c31\u662f\u957f\u5ea6\u9650\u5236\uff0c\u800cint\u7684\u6700\u5927\u503c\u662f2^31-1\uff0c\u6240\u4ee5\u7406\u8bba\u4e0astring\u7684\u957f\u5ea6\u4e5f\u662f2^31-1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(2^31-1)*16/8/1024/1024/1024 \u2248 4GB\n")),(0,a.kt)("p",null,"\u4f46\u7531\u4e8e\u4e00\u4e2a\u6700\u5927\u5b57\u7b26\u4e32\u7ea6\u4f1a\u5360\u75284GB\u7a7a\u95f4\u6240\u4ee5\u540c\u65f6\u8fd8\u53d7jvm\u5185\u5b58\u9650\u5236\u3002"),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u5b57\u7b26\u7684stringlenght\u4e00\u5b9a\u662f1\u5417"},"\u4e00\u4e2a\u5b57\u7b26\u7684String.lenght()\u4e00\u5b9a\u662f1\u5417"),(0,a.kt)("p",null,"\u4e0d\u4e00\u5b9a\u662f\u3002\u4e5f\u53ef\u80fd\u662f2\u3002lenght()\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**  \n * Returns the length of this string.\n * The length is equal to the number of <a href="Character.html#unicode">Unicode  \n * code units</a> in the string.  \n *\n * @return  the length of the sequence of characters represented by this  \n *          object.\n */\n public int length() {\n    return value.length;\n}\n')),(0,a.kt)("p",null,"\u6839\u636elength\u7b49\u4e8eUnicode\u7f16\u7801\u5355\u5143\u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u660e\u786e\u4ee5\u4e0b\u6982\u5ff5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u7801\u5916\u7801\uff1aJava\u4e2d\u5b57\u7b26\u7f16\u7801\u7b80\u5355\u5206\u5185\u7801\u548c\u5916\u7801\uff0cchar\u548cstring\u5728\u5185\u5b58\u4e2d\u4f7f\u7528\u7684\u7f16\u7801\u65b9\u5f0f\u79f0\u5185\u7801\uff0c\u9664\u4e86\u5185\u7801\u90fd\u662f\u5916\u7801\u3002 Java\u4e2d\u5185\u7801\u662fUTF-16\u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5355\u5143\uff1a\u7f16\u7801\u8f6c\u6362\u4e2d\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u5bf9\u4e8eUTF-16\u6765\u8bf416\u4f4d\u4e00\u4e2a\u7f16\u7801\u5355\u5143\uff0c\u5373\u4e24\u4e2a\u5b57\u8282\u3002")),(0,a.kt)("p",null,"Java\u5b57\u7b26\u4e32\u4f7f\u7528UTF-16\u7f16\u7801\uff0c\u6240\u4ee5\u4e00\u4e2a\u5b57\u7b26\u53ef\u4ee5\u662f\u4e00\u4e2a\u7f16\u7801\u5355\u5143\u6216\u4e24\u4e2a\u7f16\u7801\u5355\u5143\uff0c\u5bf9\u5e94\u7684\u5c31\u662f\u4e24\u4e2a\u5b57\u8282\u62164\u4e2a\u5b57\u8282\u3002\u4e24\u4e2a\u5b57\u828216\u4f4d\u53ef\u4ee5\u5b58\u50a8U+0000-U+FFFF\u8303\u56f4\u5185\u5b57\u7b26\uff0c\u6240\u4ee5\u8d85\u8fc7U+FFFF\u540e\u4f7f\u7528\u56db\u4e2a\u5b57\u8282\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u9a8c\u8bc1\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u7279\u6b8a\u5b57\u7b26  \nString B = "\ud83d\ude0a";  \nfor (char c: B.toCharArray()) {  \n    System.out.printf("0x%04x\\n", (int) c);  \n}  \nSystem.out.println("\u7f16\u7801\u5355\u5143\u6570\uff1a" + B.length());  \nSystem.out.println("\u5b57\u7b26\u957f\u5ea6\uff1a" + B.codePointCount(0, B.length()));\n')))}p.isMDXComponent=!0}}]);