"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7881],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Release Notes",sidebar_position:12,keywords:["release-notes"],description:"release-notes"},u=void 0,p={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release Notes",description:"release-notes",source:"@site/community/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/community/release-notes",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/release-notes.md",version:"current",lastUpdatedBy:"style5203",lastUpdatedAt:1631260102,formattedLastUpdatedAt:"9/10/2021",sidebarPosition:12,frontMatter:{title:"Release Notes",sidebar_position:12,keywords:["release-notes"],description:"release-notes"},sidebar:"community",previous:{title:"User Registration",permalink:"/community/user-registration"}},s=[{value:"2.4.0",id:"240",children:[]},{value:"2.3.0",id:"230",children:[]},{value:"2.2.0",id:"220",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"240"},"2.4.0"),(0,i.kt)("h4",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support reading init_script file which is not under resource/directory"),(0,i.kt)("li",{parentName:"ul"},"Display the plugin menus in categories"),(0,i.kt)("li",{parentName:"ul"},"Admin add execute Multi-path sql script"),(0,i.kt)("li",{parentName:"ul"},"IpUtils add a parameter to select the network ip"),(0,i.kt)("li",{parentName:"ul"},"Add parameter-mapping plugin"),(0,i.kt)("li",{parentName:"ul"},"Support Consul as shenyu-register-center"),(0,i.kt)("li",{parentName:"ul"},"Support Etcd as shenyu-sync-data-center"),(0,i.kt)("li",{parentName:"ul"},"Add sentinel customized fallbackhandler"),(0,i.kt)("li",{parentName:"ul"},"Add response plugin"),(0,i.kt)("li",{parentName:"ul"},"Add JWT plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Request plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Motan plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Logging plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Modify-response plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Oauth2 plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Menu Resource Permissions"),(0,i.kt)("li",{parentName:"ul"},"Add Data Permissions")),(0,i.kt)("h4",{id:"api-changes"},"API Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the project name from Soul to ShenYu"),(0,i.kt)("li",{parentName:"ul"},"Change the group id from org.dromara to org.apache.shenyu")),(0,i.kt)("h4",{id:"enhancement"},"Enhancement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H2 support insert ingore into in Mysql model"),(0,i.kt)("li",{parentName:"ul"},"Improvements For the Apache Dubbo plugin"),(0,i.kt)("li",{parentName:"ul"},"Optimization of GRPC plugin")),(0,i.kt)("h4",{id:"refactor"},"Refactor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Refactor code about "async invoke" is not supported in Dubbo lower than 2.7.3'),(0,i.kt)("li",{parentName:"ul"},"Replace the term Operator by Predicate"),(0,i.kt)("li",{parentName:"ul"},"Refine judge conditions operator"),(0,i.kt)("li",{parentName:"ul"},"Refactor PredicateJudge module using SPI"),(0,i.kt)("li",{parentName:"ul"},"Refactor code about client register")),(0,i.kt)("h4",{id:"bug-fix"},"Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix the JwtUtil.getUserId method bug"),(0,i.kt)("li",{parentName:"ul"},"Fix the shenyu-spring-boot-starter bug"),(0,i.kt)("li",{parentName:"ul"},"The encoded urlPath will be re-encoded in WebClientPlugin"),(0,i.kt)("li",{parentName:"ul"},'Replace The Risky Cryptographic Algorithm "AES/ECB/NoPadding"'),(0,i.kt)("li",{parentName:"ul"},"ReadTimeoutHandler on a channel which in a PooledConnectionProvider would cause an unexpected ReadTimeoutException"),(0,i.kt)("li",{parentName:"ul"},"Got ClassNotFoundException while start my Gateway in 2.4.8 spring boot")),(0,i.kt)("h3",{id:"230"},"2.3.0"),(0,i.kt)("h4",{id:"soul-admin"},"soul-admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"open")," field to allow app path authentication or not in sign plugin."),(0,i.kt)("li",{parentName:"ul"},"Optimize divide plugin to use common plugin template in soul-dashboard."),(0,i.kt)("li",{parentName:"ul"},"Add default values and rule checks in plugin handler."),(0,i.kt)("li",{parentName:"ul"},"Add resource management to allow user to add plugin, adjust menu and button resource and so on in soul-dashboard and soul-admin."),(0,i.kt)("li",{parentName:"ul"},"Add menu and data permission in soul-admin."),(0,i.kt)("li",{parentName:"ul"},"Add H2 store for soul-admin.")),(0,i.kt)("h4",{id:"soul-bootstrap"},"soul-bootstrap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add tars plugin"),(0,i.kt)("li",{parentName:"ul"},"Add sentinel plugin"),(0,i.kt)("li",{parentName:"ul"},"Add sofa plugin"),(0,i.kt)("li",{parentName:"ul"},"Add Resilience4j plugin for soul-plugin."),(0,i.kt)("li",{parentName:"ul"},"Add Context path mapping plugin for soul-plugin."),(0,i.kt)("li",{parentName:"ul"},"Add Grpc plugin supports grpc protocol."),(0,i.kt)("li",{parentName:"ul"},"Support form submission for dubbo plugin."),(0,i.kt)("li",{parentName:"ul"},"feat(plugin handle):"),(0,i.kt)("li",{parentName:"ul"},"Add dist package module"),(0,i.kt)("li",{parentName:"ul"},"Add test cases for soul-admin"),(0,i.kt)("li",{parentName:"ul"},"Add register center for consul"),(0,i.kt)("li",{parentName:"ul"},"Add register center for etcd"),(0,i.kt)("li",{parentName:"ul"},"Add register center for nacos"),(0,i.kt)("li",{parentName:"ul"},"Add register center for zookeeper")),(0,i.kt)("h3",{id:"220"},"2.2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete plug-in architecture design, plug-in hot-swappable."),(0,i.kt)("li",{parentName:"ul"},"Fully supports all versions of dubbo, alibaba-dubbo, apache-dubbo."),(0,i.kt)("li",{parentName:"ul"},"Support dubbo generalization call, multi-parameter, complex parameter interface."),(0,i.kt)("li",{parentName:"ul"},"Enhance the monitoring plug-in, remove influxdb support, increase memory, CPU, QPS, TPS, response delay and other indicators, and support access to Prometheus."),(0,i.kt)("li",{parentName:"ul"},"The springCloud plug-in supports two registration centers, eureka and nacos."),(0,i.kt)("li",{parentName:"ul"},"Waf plug-in enhancements, black and white albums, and mixed modes."),(0,i.kt)("li",{parentName:"ul"},"Removed the Hystrix fuse function, independent as a plug-in support."),(0,i.kt)("li",{parentName:"ul"},"Modify the data synchronization method bug in Zookeeper, and add the nacos synchronization method."),(0,i.kt)("li",{parentName:"ul"},"Diversified customer support, providing traditional and springboot access to spring."),(0,i.kt)("li",{parentName:"ul"},"Optimize the soul-background control interface."),(0,i.kt)("li",{parentName:"ul"},"Load balancing algorithm bug repair."),(0,i.kt)("li",{parentName:"ul"},"Fix bugs when uploading large files.")))}c.isMDXComponent=!0}}]);