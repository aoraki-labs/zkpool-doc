"use strict";(self.webpackChunkzkpool_doc=self.webpackChunkzkpool_doc||[]).push([[823],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>m});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=s(e.components);return r.createElement(p.Provider,{value:o},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},f=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,l(l({ref:o},c),{},{components:t})):r.createElement(m,l({ref:o},c))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5121:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const a={sidebar_label:"How to Run a Prover",sidebar_position:3},l="How to Run a Prover",i={unversionedId:"ZKPool-1.0/guides/how-to-run-prover",id:"ZKPool-1.0/guides/how-to-run-prover",title:"How to Run a Prover",description:"This document explains how to run a ZKPool prover.",source:"@site/docs/ZKPool-1.0/guides/how-to-run-prover.md",sourceDirName:"ZKPool-1.0/guides",slug:"/ZKPool-1.0/guides/how-to-run-prover",permalink:"/ZKPool-1.0/guides/how-to-run-prover",draft:!1,editUrl:"https://github.com/aoraki-labs/zkpool-doc/tree/main/docs/ZKPool-1.0/guides/how-to-run-prover.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"How to Run a Prover",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Register as ZKP Prover",permalink:"/ZKPool-1.0/guides/how-to-register"}},p={},s=[{value:"Network Selection",id:"network-selection",level:2},{value:"How to Stop a Prover",id:"how-to-stop-a-prover",level:2}],c={toc:s},u="wrapper";function d(e){let{components:o,...t}=e;return(0,n.kt)(u,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-run-a-prover"},"How to Run a Prover"),(0,n.kt)("p",null,"This document explains how to run a ZKPool prover."),(0,n.kt)("p",null,"After logging into ZKPool, follow the guide on how to connect to ZKPool and run a prover.\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/aoraki-labs/zkpool-doc/assets/117819366/5b9ebf70-332f-47c4-bc35-f2e914982f49",alt:"image"})),(0,n.kt)("p",null,"The basic flow is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose your operating system: Ubuntu 20.04/22.04 or MacOS ARM or MacOS x86."),(0,n.kt)("li",{parentName:"ol"},"Choose between CPU or GPU (coming soon)."),(0,n.kt)("li",{parentName:"ol"},"Generate an access key for your account."),(0,n.kt)("li",{parentName:"ol"},"Follow one command to download your keys and the prover binary, and then run the prover binary.")),(0,n.kt)("h2",{id:"network-selection"},"Network Selection"),(0,n.kt)("p",null,"To run the current ZKPool prover, please connect to the HOLESKY testnet in your wallet.\nFor instructions on how to add the Holesky testnet, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://chainlist.org/chain/17000"},"https://chainlist.org/chain/17000")),(0,n.kt)("h2",{id:"how-to-stop-a-prover"},"How to Stop a Prover"),(0,n.kt)("p",null,"To stop a running prover, simply run the following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pkill zkpool-prover\n")))}d.isMDXComponent=!0}}]);