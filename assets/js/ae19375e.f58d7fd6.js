"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[5274],{3905:(I,i,M)=>{M.d(i,{Zo:()=>c,kt:()=>d});var e=M(7294);function n(I,i,M){return i in I?Object.defineProperty(I,i,{value:M,enumerable:!0,configurable:!0,writable:!0}):I[i]=M,I}function N(I,i){var M=Object.keys(I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(I);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),M.push.apply(M,e)}return M}function j(I){for(var i=1;i<arguments.length;i++){var M=null!=arguments[i]?arguments[i]:{};i%2?N(Object(M),!0).forEach((function(i){n(I,i,M[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(M)):N(Object(M)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(M,i))}))}return I}function l(I,i){if(null==I)return{};var M,e,n=function(I,i){if(null==I)return{};var M,e,n={},N=Object.keys(I);for(e=0;e<N.length;e++)M=N[e],i.indexOf(M)>=0||(n[M]=I[M]);return n}(I,i);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(I);for(e=0;e<N.length;e++)M=N[e],i.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(I,M)&&(n[M]=I[M])}return n}var a=e.createContext({}),g=function(I){var i=e.useContext(a),M=i;return I&&(M="function"==typeof I?I(i):j(j({},i),I)),M},c=function(I){var i=g(I.components);return e.createElement(a.Provider,{value:i},I.children)},t="mdxType",D={inlineCode:"code",wrapper:function(I){var i=I.children;return e.createElement(e.Fragment,{},i)}},z=e.forwardRef((function(I,i){var M=I.components,n=I.mdxType,N=I.originalType,a=I.parentName,c=l(I,["components","mdxType","originalType","parentName"]),t=g(M),z=n,d=t["".concat(a,".").concat(z)]||t[z]||D[z]||N;return M?e.createElement(d,j(j({ref:i},c),{},{components:M})):e.createElement(d,j({ref:i},c))}));function d(I,i){var M=arguments,n=i&&i.mdxType;if("string"==typeof I||n){var N=M.length,j=new Array(N);j[0]=z;var l={};for(var a in i)hasOwnProperty.call(i,a)&&(l[a]=i[a]);l.originalType=I,l[t]="string"==typeof I?I:n,j[1]=l;for(var g=2;g<N;g++)j[g]=M[g];return e.createElement.apply(null,j)}return e.createElement.apply(null,M)}z.displayName="MDXCreateElement"},4594:(I,i,M)=>{M.r(i),M.d(i,{assets:()=>a,contentTitle:()=>j,default:()=>D,frontMatter:()=>N,metadata:()=>l,toc:()=>g});var e=M(7462),n=(M(7294),M(3905));const N={title:"Spring Cloud OpenFeign",date:new Date("2023-10-27T00:00:00.000Z"),tags:["Spring Cloud","OpenFeign"]},j="Spring Cloud OpenFeign",l={unversionedId:"programming-column/spring-cloud-openfeign",id:"programming-column/spring-cloud-openfeign",title:"Spring Cloud OpenFeign",description:"\u91cd\u70b9\u6ce8\u89e3",source:"@site/docs/programming-column/spring-cloud-openfeign.md",sourceDirName:"programming-column",slug:"/programming-column/spring-cloud-openfeign",permalink:"/docs/programming-column/spring-cloud-openfeign",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-column/spring-cloud-openfeign.md",tags:[{label:"Spring Cloud",permalink:"/docs/tags/spring-cloud"},{label:"OpenFeign",permalink:"/docs/tags/open-feign"}],version:"current",frontMatter:{title:"Spring Cloud OpenFeign",date:"2023-10-27T00:00:00.000Z",tags:["Spring Cloud","OpenFeign"]},sidebar:"tutorialSidebar",previous:{title:"\u7528redis\u8fdb\u884c\u63a5\u53e3\u9650\u6d41",permalink:"/docs/programming-column/rate-limit-with-redis"},next:{title:"Spring",permalink:"/docs/programming-column/spring"}},a={},g=[{value:"\u91cd\u70b9\u6ce8\u89e3",id:"\u91cd\u70b9\u6ce8\u89e3",level:2},{value:"@FeignClient",id:"feignclient",level:3},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u914d\u7f6e\u9694\u79bb",id:"\u914d\u7f6e\u9694\u79bb",level:3},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:3}],c={toc:g},t="wrapper";function D(I){let{components:i,...M}=I;return(0,n.kt)(t,(0,e.Z)({},c,M,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spring-cloud-openfeign"},"Spring Cloud OpenFeign"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXMtYXNjaWkiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U3R5bGVUeXBlPSJ0ZXh0L2NzcyIgaGVpZ2h0PSI5MjJweCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgc3R5bGU9IndpZHRoOjEwNDZweDtoZWlnaHQ6OTIycHg7YmFja2dyb3VuZDojRkZGRkZGOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTA0NiA5MjIiIHdpZHRoPSIxMDQ2cHgiIHpvb21BbmRQYW49Im1hZ25pZnkiPjxkZWZzLz48Zz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iOTAiIHg9IjEwIiB5PSI0NDIuMjI2NiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjcwIiB4PSIyMCIgeT0iNDY1LjIyMTciPm9wZW5mZWlnbjwvdGV4dD48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNDgiIHg9IjE1MCIgeT0iNDguMTQ4NCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjI4IiB4PSIxNjAiIHk9IjcxLjE0MzYiPiYjMjI1MjI7JiMyNjQxMjs8L3RleHQ+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjExMSIgeD0iMjQ4IiB5PSIyMCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjkxIiB4PSIyNTgiIHk9IjQyLjk5NTEiPkBGZWlnbkNsaWVudDwvdGV4dD48cGF0aCBkPSJNMTk4LDY2LjI5NjkgTDIwOCw2Ni4yOTY5IEMyMjMsNjYuMjk2OSAyMjMsMzguMTQ4NCAyMzgsMzguMTQ4NCBMMjQ4LDM4LjE0ODQgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iMTY2IiB4PSIyNDgiIHk9Ijc2LjI5NjkiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNDYiIHg9IjI1OCIgeT0iOTkuMjkyIj5ARW5hYmxlRmVpZ25DbGllbnRzPC90ZXh0PjxwYXRoIGQ9Ik0xOTgsNjYuMjk2OSBMMjA4LDY2LjI5NjkgQzIyMyw2Ni4yOTY5IDIyMyw5NC40NDUzIDIzOCw5NC40NDUzIEwyNDgsOTQuNDQ1MyAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxwYXRoIGQ9Ik0xMDAsNDYwLjM3NSBMMTEwLDQ2MC4zNzUgQzEyNSw0NjAuMzc1IDEyNSw2Ni4yOTY5IDE0MCw2Ni4yOTY5IEwxNTAsNjYuMjk2OSAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI0OCIgeD0iMTUwIiB5PSIxMDQuNDQ1MyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjI4IiB4PSIxNjAiIHk9IjEyNy40NDA0Ij4mIzM3MTk3OyYjMzI2MjI7PC90ZXh0PjxwYXRoIGQ9Ik0xMDAsNDYwLjM3NSBMMTEwLDQ2MC4zNzUgQzEyNSw0NjAuMzc1IDEyNSwxMjIuNTkzOCAxNDAsMTIyLjU5MzggTDE1MCwxMjIuNTkzOCAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI0OCIgeD0iMTUwIiB5PSI0OTguNTIzNCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjI4IiB4PSIxNjAiIHk9IjUyMS41MTg2Ij4mIzI5MzA1OyYjMjQ2MTU7PC90ZXh0PjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI3NiIgeD0iMjQ4IiB5PSIxMzIuNTkzOCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjU2IiB4PSIyNTgiIHk9IjE1NS41ODg5Ij4mIzM3MTk3OyYjMzI2MjI7JiMzODU0ODsmIzMxMTYzOzwvdGV4dD48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iMjE3IiB4PSIzNzQiIHk9IjEzMi41OTM4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTk3IiB4PSIzODQiIHk9IjE1NS41ODg5Ij4mIzI3NTk5OyYjMjAwMTA7IEZlaWduQ2xpZW50ICYjMjE0ODc7JiMyMDE5NzsmIzIxMzMzOyYjMjk0MjA7JiMzNzE5NzsmIzMyNjIyOzwvdGV4dD48cGF0aCBkPSJNMzI0LDE1MC43NDIyIEwzMzQsMTUwLjc0MjIgQzM0OSwxNTAuNzQyMiAzNDksMTUwLjc0MjIgMzY0LDE1MC43NDIyIEwzNzQsMTUwLjc0MjIgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsMTUwLjc0MjIgMjM4LDE1MC43NDIyIEwyNDgsMTUwLjc0MjIgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNzYiIHg9IjI0OCIgeT0iMjQ1LjE4NzUiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI1NiIgeD0iMjU4IiB5PSIyNjguMTgyNiI+JiMzNjEyNzsmIzM2NzMzOyYjMjIzNDM7JiMzNDkxMzs8L3RleHQ+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjExNCIgeD0iMzc0IiB5PSIxODguODkwNiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9Ijk0IiB4PSIzODQiIHk9IjIxMS44ODU3Ij5mZWlnbiAmIzQwNjY0OyYjMzU3NDg7JiMyMzQ1NDsmIzI5NjE2OzwvdGV4dD48cGF0aCBkPSJNMzI0LDI2My4zMzU5IEwzMzQsMjYzLjMzNTkgQzM0OSwyNjMuMzM1OSAzNDksMjA3LjAzOTEgMzY0LDIwNy4wMzkxIEwzNzQsMjA3LjAzOTEgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNjgiIHg9IjM3NCIgeT0iMjQ1LjE4NzUiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI0OCIgeD0iMzg0IiB5PSIyNjguMTgyNiI+T2tIdHRwPC90ZXh0PjxwYXRoIGQ9Ik0zMjQsMjYzLjMzNTkgTDMzNCwyNjMuMzM1OSBDMzQ5LDI2My4zMzU5IDM0OSwyNjMuMzM1OSAzNjQsMjYzLjMzNTkgTDM3NCwyNjMuMzM1OSAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSIxNTMiIHg9IjM3NCIgeT0iMzAxLjQ4NDQiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMzMiIHg9IjM4NCIgeT0iMzI0LjQ3OTUiPkFwYWNoZSBIdHRwQ2xpZW50NTwvdGV4dD48cGF0aCBkPSJNMzI0LDI2My4zMzU5IEwzMzQsMjYzLjMzNTkgQzM0OSwyNjMuMzM1OSAzNDksMzE5LjYzMjggMzY0LDMxOS42MzI4IEwzNzQsMzE5LjYzMjggIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsMjYzLjMzNTkgMjM4LDI2My4zMzU5IEwyNDgsMjYzLjMzNTkgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNDgiIHg9IjI0OCIgeT0iMzAxLjQ4NDQiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyOCIgeD0iMjU4IiB5PSIzMjQuNDc5NSI+JiMzMjUzMTsmIzIzMzg0OzwvdGV4dD48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsMzE5LjYzMjggMjM4LDMxOS42MzI4IEwyNDgsMzE5LjYzMjggIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNDgiIHg9IjI0OCIgeT0iMzg1LjkyOTciLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyOCIgeD0iMjU4IiB5PSI0MDguOTI0OCI+JiMzNzMyNTsmIzM1Nzk3OzwvdGV4dD48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iMTYxIiB4PSIzNDYiIHk9IjM1Ny43ODEzIi8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTQxIiB4PSIzNTYiIHk9IjM4MC43NzY0Ij5mZWlnbi5SZXRyeWVyLkRlZmF1bHQ8L3RleHQ+PHBhdGggZD0iTTI5Niw0MDQuMDc4MSBMMzA2LDQwNC4wNzgxIEMzMjEsNDA0LjA3ODEgMzIxLDM3NS45Mjk3IDMzNiwzNzUuOTI5NyBMMzQ2LDM3NS45Mjk3ICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjIxMyIgeD0iMzQ2IiB5PSI0MTQuMDc4MSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE5MyIgeD0iMzU2IiB5PSI0MzcuMDczMiI+ZmVpZ24uUmV0cnllci5ORVZFUl9SRVRSWTwvdGV4dD48cGF0aCBkPSJNMjk2LDQwNC4wNzgxIEwzMDYsNDA0LjA3ODEgQzMyMSw0MDQuMDc4MSAzMjEsNDMyLjIyNjYgMzM2LDQzMi4yMjY2IEwzNDYsNDMyLjIyNjYgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsNDA0LjA3ODEgMjM4LDQwNC4wNzgxIEwyNDgsNDA0LjA3ODEgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iMTI0IiB4PSIyNDgiIHk9IjQ3MC4zNzUiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMDQiIHg9IjI1OCIgeT0iNDkzLjM3MDEiPiYjMzI1MzQ7JiMzMDcyMTsmIzIyMTIwOyBFbmNvZGVyPC90ZXh0PjxwYXRoIGQ9Ik0xOTgsNTE2LjY3MTkgTDIwOCw1MTYuNjcxOSBDMjIzLDUxNi42NzE5IDIyMyw0ODguNTIzNCAyMzgsNDg4LjUyMzQgTDI0OCw0ODguNTIzNCAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSIxMjYiIHg9IjI0OCIgeT0iNTI2LjY3MTkiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMDYiIHg9IjI1OCIgeT0iNTQ5LjY2NyI+JiMzNTI5OTsmIzMwNzIxOyYjMjIxMjA7IERlY29kZXI8L3RleHQ+PHBhdGggZD0iTTE5OCw1MTYuNjcxOSBMMjA4LDUxNi42NzE5IEMyMjMsNTE2LjY3MTkgMjIzLDU0NC44MjAzIDIzOCw1NDQuODIwMyBMMjQ4LDU0NC44MjAzICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjE1OSIgeD0iMjQ4IiB5PSI1ODIuOTY4OCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEzOSIgeD0iMjU4IiB5PSI2MDUuOTYzOSI+U3ByaW5nIE1WQyAmIzI3ODgwOyYjMzUyOTk7JiMyNTkwMzsmIzI1MzQ1OzwvdGV4dD48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNDcwIiB4PSI0NTciIHk9IjU4Mi45Njg4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNDUwIiB4PSI0NjciIHk9IjYwNS45NjM5Ij5vcmcuc3ByaW5nZnJhbWV3b3JrLmNsb3VkLm9wZW5mZWlnbi5zdXBwb3J0LlNwcmluZ012Y0NvbnRyYWN0PC90ZXh0PjxwYXRoIGQ9Ik00MDcsNjAxLjExNzIgTDQxNyw2MDEuMTE3MiBDNDMyLDYwMS4xMTcyIDQzMiw2MDEuMTE3MiA0NDcsNjAxLjExNzIgTDQ1Nyw2MDEuMTE3MiAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxwYXRoIGQ9Ik0xOTgsNTE2LjY3MTkgTDIwOCw1MTYuNjcxOSBDMjIzLDUxNi42NzE5IDIyMyw2MDEuMTE3MiAyMzgsNjAxLjExNzIgTDI0OCw2MDEuMTE3MiAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSIxMzIiIHg9IjI0OCIgeT0iNjM5LjI2NTYiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMTIiIHg9IjI1OCIgeT0iNjYyLjI2MDciPkBRdWVyeU1hcCYjMjU5MDM7JiMyNTM0NTs8L3RleHQ+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjU3MSIgeD0iNDMwIiB5PSI2MzkuMjY1NiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjU1MSIgeD0iNDQwIiB5PSI2NjIuMjYwNyI+b3JnLnNwcmluZ2ZyYW1ld29yay5jbG91ZC5vcGVuZmVpZ24uYW5ub3RhdGlvbi5RdWVyeU1hcFBhcmFtZXRlclByb2Nlc3NvcjwvdGV4dD48cGF0aCBkPSJNMzgwLDY1Ny40MTQxIEwzOTAsNjU3LjQxNDEgQzQwNSw2NTcuNDE0MSA0MDUsNjU3LjQxNDEgNDIwLDY1Ny40MTQxIEw0MzAsNjU3LjQxNDEgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsNjU3LjQxNDEgMjM4LDY1Ny40MTQxIEwyNDgsNjU3LjQxNDEgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iMTYwIiB4PSIyNDgiIHk9Ijc4MC4wMDc4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTQwIiB4PSIyNTgiIHk9IjgwMy4wMDI5Ij5TcHJpbmcgRGF0YSAmIzIwOTk4OyYjMzkwMjk7JiMyNTkwMzsmIzI1MzQ1OzwvdGV4dD48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNTA2IiB4PSI0NTgiIHk9IjY5NS41NjI1Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNDg2IiB4PSI0NjgiIHk9IjcxOC41NTc2Ij5vcmcuc3ByaW5nZnJhbWV3b3JrLmNsb3VkLm9wZW5mZWlnbi5zdXBwb3J0LlBhZ2VhYmxlU3ByaW5nRW5jb2RlcjwvdGV4dD48cGF0aCBkPSJNNDA4LDc5OC4xNTYzIEw0MTgsNzk4LjE1NjMgQzQzMyw3OTguMTU2MyA0MzMsNzEzLjcxMDkgNDQ4LDcxMy43MTA5IEw0NTgsNzEzLjcxMDkgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cmVjdCBmaWxsPSIjRjFGMUYxIiBoZWlnaHQ9IjM2LjI5NjkiIHJ4PSIxMi41IiByeT0iMTIuNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNTc2IiB4PSI0NTgiIHk9Ijc1MS44NTk0Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNTU2IiB4PSI0NjgiIHk9Ijc3NC44NTQ1Ij5vcmcuc3ByaW5nZnJhbWV3b3JrLmNsb3VkLm9wZW5mZWlnbi5zdXBwb3J0LlBhZ2VhYmxlU3ByaW5nUXVlcnlNYXBFbmNvZGVyPC90ZXh0PjxwYXRoIGQ9Ik00MDgsNzk4LjE1NjMgTDQxOCw3OTguMTU2MyBDNDMzLDc5OC4xNTYzIDQzMyw3NzAuMDA3OCA0NDgsNzcwLjAwNzggTDQ1OCw3NzAuMDA3OCAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxyZWN0IGZpbGw9IiNGMUYxRjEiIGhlaWdodD0iMzYuMjk2OSIgcng9IjEyLjUiIHJ5PSIxMi41IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI0NzkiIHg9IjQ1OCIgeT0iODA4LjE1NjMiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI0NTkiIHg9IjQ2OCIgeT0iODMxLjE1MTQiPm9yZy5zcHJpbmdmcmFtZXdvcmsuY2xvdWQub3BlbmZlaWduLnN1cHBvcnQuUGFnZUphY2tzb25Nb2R1bGU8L3RleHQ+PHBhdGggZD0iTTQwOCw3OTguMTU2MyBMNDE4LDc5OC4xNTYzIEM0MzMsNzk4LjE1NjMgNDMzLDgyNi4zMDQ3IDQ0OCw4MjYuMzA0NyBMNDU4LDgyNi4zMDQ3ICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHJlY3QgZmlsbD0iI0YxRjFGMSIgaGVpZ2h0PSIzNi4yOTY5IiByeD0iMTIuNSIgcnk9IjEyLjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjQ3MiIgeD0iNDU4IiB5PSI4NjQuNDUzMSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjQ1MiIgeD0iNDY4IiB5PSI4ODcuNDQ4MiI+b3JnLnNwcmluZ2ZyYW1ld29yay5jbG91ZC5vcGVuZmVpZ24uc3VwcG9ydC5Tb3J0SmFja3Nvbk1vZHVsZTwvdGV4dD48cGF0aCBkPSJNNDA4LDc5OC4xNTYzIEw0MTgsNzk4LjE1NjMgQzQzMyw3OTguMTU2MyA0MzMsODgyLjYwMTYgNDQ4LDg4Mi42MDE2IEw0NTgsODgyLjYwMTYgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTk4LDUxNi42NzE5IEwyMDgsNTE2LjY3MTkgQzIyMyw1MTYuNjcxOSAyMjMsNzk4LjE1NjMgMjM4LDc5OC4xNTYzIEwyNDgsNzk4LjE1NjMgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNMTAwLDQ2MC4zNzUgTDExMCw0NjAuMzc1IEMxMjUsNDYwLjM3NSAxMjUsNTE2LjY3MTkgMTQwLDUxNi42NzE5IEwxNTAsNTE2LjY3MTkgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tU1JDPVtoUEhWUno5RzZDUmwtb2RVb3NzOVpLMHEyclNPTzFmMjVNNzNVNktFeEdpc2I3RVFxckNDVC12MmZyN1NYUGtQSGZ0NEZybEMxMUNyS1A1bGl4Um1CSW9xTXFncFUyN2hIUEZwRmF6X1J2LVVqb1RaMlM5NUl3VFFZdlpJMlowSlFIdHIxZk4wbHJSMHNWX2psWndRQk85MlBjc2dQV3FUZ09ZTXl2SkszOG84TGFZT0ZFWHdldHd1eTF4X1NreVZIOXVCckNjaDdVX0p5QkdTSUV2Vy1fWmRQdVdXbVRhVTcweV9FanJUeHliSFgxbHVuel90bndFSHlzUGh0RWw1S0JENEMxZGtaVmlWZEZ2Unh6ZE5jRTU2eXZlR1BnbnVuSUpnTk9JZjRsSV81RWRjX05ka1ZEY0I5amRnWldVeFBwTU1vb1h1MXhjU21wZ24zVjVGcF9MeURMLSAtS3l3bGJzX0ZUTmxYbFRqcU5YdjJkZ2ZDR254RFZWMC1yNzhPcm9lY3JzYTNiNmVNdDYtN2xqRlQ2UlhGRHNEbG03WDNqY1JFRVlTamxDVHVLck9EUGNsb3dKWjhiY3NRWjBpdjgyZmpEU2tldTRJVDZ1QVJEbEFFR2lwX3hhOGVQTzg4ZEw3dlg1S1lLeFQwTms5Q0hTallQLUpCNEs3MFVWSG1xbGtuU0MwSVFVMXFiMERxXzdDbG9aajlUSnhTMGI2UjVnQ0Fxc20zNXpiS19wUkZvZzFfOGVJZFdiR28yMUtSSVg3UW8ycl9SbzBYOW95Y0t0OFlpTkdCRFFZVzJPYUs5NVJKb1NsZkwwZXNyaENtclBVYmZRa2I4YlpDdllnMmZiazJ3cEx4a2hkQktlNnEyUEhqQWxHTWZlN1FYWTRMZ2FlUUFkUkRqbjYxSzVNYXk3eTlQanVGYWxSSFFuVE1mSUFYM1RrRjdwd09QSnc3VHVCTE5tMDBdLS0+PC9nPjwvc3ZnPg==",alt:"plantuml"})),(0,n.kt)("h2",{id:"\u91cd\u70b9\u6ce8\u89e3"},"\u91cd\u70b9\u6ce8\u89e3"),(0,n.kt)("h3",{id:"feignclient"},"@FeignClient"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"value\u3001name: \u670d\u52a1\u540d\uff0c\u552f\u4e00\uff0c\u4e0eeureka\u96c6\u6210\u65f6\u4e5f\u5c31\u662feureka\u4e2d\u7684\u670d\u52a1\u540d\u3002"),(0,n.kt)("li",{parentName:"ul"},"contextId: bean\u540d\u79f0\uff08\u53ea\u6709\u670d\u52a1\u540d\u7684\u65f6\u5019\u7528\u670d\u52a1\u540d\u540c\u65f6\u4f5c\u4e3abean\u540d\u79f0\uff09"),(0,n.kt)("li",{parentName:"ul"},"url: \u8bf7\u6c42\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"path: \u8def\u5f84\u524d\u7f00"),(0,n.kt)("li",{parentName:"ul"},"configuration: \u4e3a\u5f53\u524d\u5ba2\u6237\u7aef\u6307\u5b9a\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"fallback\u3001fallbackFactory: \u65ad\u8def\u5668\u65ad\u8def\u4e4b\u540e\u7684\u515c\u5e95\u5ba2\u6237\u7aef"),(0,n.kt)("li",{parentName:"ul"},"primary: \u4e0efallback\u914d\u5408\u4f7f\u7528\uff0c\u6807\u8bb0\u4e3b\u5ba2\u6237\u7aef\uff0c\u5269\u4e0b\u7684\u5ba2\u6237\u7aef\u662ffallback\u5ba2\u6237\u7aef")),(0,n.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u9694\u79bb"},"\u914d\u7f6e\u9694\u79bb"),(0,n.kt)("p",null,"\u6bcf\u4e2a FeignClient \u90fd\u6709\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684 ApplicationContext \u5b50\u5bb9\u5668\uff0c\u5404\u81ea\u7684\u914d\u7f6ebean\u53ea\u6ce8\u5165\u5230\u5b50\u5bb9\u5668\u4e2d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// org.springframework.cloud.openfeign.FeignAutoConfiguration\n// \u4e3b\u7a0b\u5e8f\u5bb9\u5668\u4e2d\u6ce8\u5165 feignContext\uff0c\u7ba1\u7406\u6240\u6709\u5b50\u5bb9\u5668\n@Bean\npublic FeignClientFactory feignContext() {\n    FeignClientFactory context = new FeignClientFactory();\n    context.setConfigurations(this.configurations);\n    return context;\n}\n\n// FeignClientFactory \u7ee7\u627f NamedContextFactory\n// org.springframework.cloud.context.named.NamedContextFactory\npublic abstract class NamedContextFactory<C extends NamedContextFactory.Specification>\n        implements DisposableBean, ApplicationContextAware {\n\n    private final Map<String, ApplicationContextInitializer<GenericApplicationContext>> applicationContextInitializers;\n\n    private final String propertySourceName;\n\n    private final String propertyName;\n    // \u5ba2\u6237\u7aefbean\u540d\u79f0\uff0c\u5b50\u5bb9\u5668\n    private final Map<String, GenericApplicationContext> contexts = new ConcurrentHashMap<>();\n    // \u5ba2\u6237\u7aefbean\u540d\u79f0\uff0c\u914d\u7f6e\n    private Map<String, C> configurations = new ConcurrentHashMap<>();\n    // \u4e3b\u7a0b\u5e8f\u5bb9\u5668\uff0c\u662f\u6240\u6709\u5b50\u5bb9\u5668\u7684\u7236\u5bb9\u5668\n    private ApplicationContext parent;\n    // \u9ed8\u8ba4\u914d\u7f6e\u7c7b org.springframework.cloud.openfeign.FeignClientsConfiguration\n    private Class<?> defaultConfigType;\n}\n")),(0,n.kt)("h3",{id:"\u91cd\u8bd5"},"\u91cd\u8bd5"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u7b56\u7565\u662f\u4e0d\u91cd\u8bd5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// FeignClientsConfiguration\n@Bean\n@ConditionalOnMissingBean\npublic Retryer feignRetryer() {\n    return Retryer.NEVER_RETRY;\n}\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\uff0c\u4f7f\u7528Feign\u5b9e\u73b0\u7684\u91cd\u8bd5\u5668 feign.Retryer.Default\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    openfeign:\n      client:\n        config:\n          default:\n            connectTimeout: 2000\n            readTimeout: 3000\n            loggerLevel: full\n            retryer: feign.Retryer.Default\n")),(0,n.kt)("p",null,"\u91cd\u8bd5\u5668\u5982\u4f55\u5de5\u4f5c\u7684"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// feign.SynchronousMethodHandler\nfinal class SynchronousMethodHandler implements MethodHandler {\n    @Override\n    public Object invoke(Object[] argv) throws Throwable {\n        RequestTemplate template = buildTemplateFromArgs.create(argv);\n        Options options = findOptions(argv);\n        Retryer retryer = this.retryer.clone();\n        while (true) {\n            try {\n                // \u8bf7\u6c42\n                return executeAndDecode(template, options);\n            } catch (RetryableException e) {\n                try {\n                    // \u629b\u51fa\u91cd\u8bd5\u5f02\u5e38\uff0c\u91cd\u8bd5\u5668\u5de5\u4f5c\n                    retryer.continueOrPropagate(e);\n                } catch (RetryableException th) {\n                    // \u83b7\u53d6\u539f\u59cb\u5f02\u5e38\n                    Throwable cause = th.getCause();\n                    // \u5982\u679c\u5f02\u5e38\u4f20\u64ad\u7b56\u7565\u662f UNWARP \u5e76\u4e14\u539f\u59cb\u5f02\u5e38\u4e0d\u4e3a\u7a7a\uff0c\u629b\u51fa\u539f\u59cb\u5f02\u5e38\uff1b\u5426\u5219\u629b\u51fa\u91cd\u8bd5\u5f02\u5e38\n                    if (propagationPolicy == UNWRAP && cause != null) {\n                        throw cause;\n                    } else {\n                        throw th;\n                    }\n                }\n                if (logLevel != Logger.Level.NONE) {\n                    logger.logRetry(metadata.configKey(), logLevel);\n                }\n                // \u4e0b\u4e00\u6b21\u91cd\u8bd5\n                continue;\n            }\n        }\n    }\n}\n")))}D.isMDXComponent=!0}}]);