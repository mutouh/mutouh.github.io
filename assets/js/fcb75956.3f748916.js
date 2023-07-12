"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[2900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=s,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const o={title:"mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa",date:new Date("2022-06-27T00:00:00.000Z"),tags:["mysql"]},a="mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa",l={unversionedId:"programming-issues/read-huge-data-by-mysql-jdbc-driver",id:"programming-issues/read-huge-data-by-mysql-jdbc-driver",title:"mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa",description:"\u95ee\u9898",source:"@site/docs/programming-issues/read-huge-data-by-mysql-jdbc-driver.md",sourceDirName:"programming-issues",slug:"/programming-issues/read-huge-data-by-mysql-jdbc-driver",permalink:"/docs/programming-issues/read-huge-data-by-mysql-jdbc-driver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming-issues/read-huge-data-by-mysql-jdbc-driver.md",tags:[{label:"mysql",permalink:"/docs/tags/mysql"}],version:"current",frontMatter:{title:"mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa",date:"2022-06-27T00:00:00.000Z",tags:["mysql"]},sidebar:"tutorialSidebar",previous:{title:"kubectl \u547d\u4ee4\u8865\u5168",permalink:"/docs/programming-issues/kubectl-completion"},next:{title:"VuePress \u7ad9\u70b9\u5bfc\u51faPDF\u9875\u9762\u4e71\u5e8f",permalink:"/docs/programming-issues/vuepress-export-to-pdf"}},i={},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa"},"mysql\u8bfb\u6570\u636e\u5185\u5b58\u6ea2\u51fa"),(0,s.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,s.kt)("p",null,"\u6700\u8fd1\u9700\u8981\u7528\u539f\u751fJDBC\u65b9\u5f0f\u8fde\u63a5mysql\u6570\u636e\u5e93\u8bfb\u53d6\u8868\u91cc\u7684\u6240\u6709\u6570\u636e\uff0c\u4f46\u662f\u9047\u5230\u4e86\u90e8\u5206\u5927\u8868\uff0c\u6570\u636e\u91cf\u5728\u767e\u4e07\u7ea7\uff0c\u7ecf\u5e38\u9020\u6210\u5185\u5b58\u6ea2\u51fa\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'ResultSet resultSet = stat.executeQuery("select * from test");\n')),(0,s.kt)("p",null,"\u8fd9\u4e00\u884c\u4e00\u76f4\u62a5\u9519",(0,s.kt)("inlineCode",{parentName:"p"},"java.sql.SQLException:Java heap space"),"\u3002"),(0,s.kt)("h2",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"mysql\u5b98\u65b9\u6587\u6863")),(0,s.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u5bf9 ",(0,s.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-implementation-notes.html"},"ResultSet")," \u7684\u89e3\u91ca\u8bf4\u660e\uff0c\u4ecb\u7ecd\u4e86\u5bf9 ResultSet \u7684\u6d41\u5f0f\u5904\u7406\u65b9\u5f0f\uff0c\u5373\u4e00\u884c\u4e00\u884c\u8bfb\u53d6\u3002\u53e6\u5916\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd8\u4ecb\u7ecd\u4e86\u901a\u8fc7\u5728jdbcurl\u8bbe\u7f6e",(0,s.kt)("inlineCode",{parentName:"p"},"useCursorFetch=true"),"\uff0c\u53ef\u4ee5\u6307\u5b9a\u6bcf\u6b21\u8bfb\u53d6\u6570\u636e\u7684\u884c\u6570\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"mysql \u9a71\u52a8",(0,s.kt)("a",{parentName:"li",href:"https://github.com/mysql/mysql-connector-j"},"\u6e90\u7801"))),(0,s.kt)("p",null,"\u6e90\u7801\u91cc\u4e5f\u53ef\u4ee5\u627e\u5230\u76f8\u5173\u7684\u5185\u5bb9\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"package com.mysql.cj.jdbc;\n\npublic class StatementImpl implements JdbcStatement {\n    ...\n\n    /**\n     * We only stream result sets when they are forward-only, read-only, and the\n     * fetch size has been set to Integer.MIN_VALUE\n     * \n     * @return true if this result set should be streamed row at-a-time, rather\n     *         than read all at once.\n     */\n    protected boolean createStreamingResultSet() {\n        return ((this.query.getResultType() == Type.FORWARD_ONLY) && (this.resultSetConcurrency == java.sql.ResultSet.CONCUR_READ_ONLY)\n                && (this.query.getResultFetchSize() == Integer.MIN_VALUE));\n    }\n\n    ...\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"package com.mysql.cj.protocol.a.result;\n\n/**\n * Provides streaming of Resultset rows. Each next row is consumed from the\n * input stream only on {@link #next()} call. Consumed rows are not cached thus\n * we only stream result sets when they are forward-only, read-only, and the\n * fetch size has been set to Integer.MIN_VALUE (rows are read one by one).\n * \n * @param <T>\n *            ProtocolEntity type\n */\npublic class ResultsetRowsStreaming<T extends ProtocolEntity> extends AbstractResultsetRows implements ResultsetRows {\n    ...\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"package com.mysql.cj.protocol.a.result;\n\npublic class ResultsetRowsCursor extends AbstractResultsetRows implements ResultsetRows {\n    ...\n\n    private void fetchMoreRows() {\n        if (this.lastRowFetched) {\n            this.fetchedRows = new ArrayList<>(0);\n            return;\n        }\n\n        synchronized (this.owner.getSyncMutex()) {\n            try {\n                boolean oldFirstFetchCompleted = this.firstFetchCompleted;\n\n                if (!this.firstFetchCompleted) {\n                    this.firstFetchCompleted = true;\n                }\n\n                int numRowsToFetch = this.owner.getOwnerFetchSize();\n\n                if (numRowsToFetch == 0) {\n                    numRowsToFetch = this.owner.getOwningStatementFetchSize();\n                }\n\n                if (numRowsToFetch == Integer.MIN_VALUE) {\n                    // Handle the case where the user used 'old' streaming result sets\n\n                    numRowsToFetch = 1;\n                }\n\n                if (this.fetchedRows == null) {\n                    this.fetchedRows = new ArrayList<>(numRowsToFetch);\n                } else {\n                    this.fetchedRows.clear();\n                }\n\n                // TODO this is not the right place for this code, should be in protocol\n                this.protocol.sendCommand(\n                        this.commandBuilder.buildComStmtFetch(this.protocol.getSharedSendPacket(), this.owner.getOwningStatementServerId(), numRowsToFetch),\n                        true, 0);\n\n                Row row = null;\n\n                while ((row = this.protocol.read(ResultsetRow.class, this.rowFactory)) != null) {\n                    this.fetchedRows.add(row);\n                }\n\n                this.currentPositionInFetchedRows = BEFORE_START_OF_ROWS;\n\n                if (this.protocol.getServerSession().isLastRowSent()) {\n                    this.lastRowFetched = true;\n\n                    if (!oldFirstFetchCompleted && this.fetchedRows.size() == 0) {\n                        this.wasEmpty = true;\n                    }\n                }\n            } catch (Exception ex) {\n                throw ExceptionFactory.createException(ex.getMessage(), ex);\n            }\n        }\n    }\n\n    ...\n}\n")))}p.isMDXComponent=!0}}]);