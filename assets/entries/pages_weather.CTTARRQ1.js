import{d as p,c as l,a as s,F as u,m as f,u as h,l as v,o as n,t as c,e as g,f as T,g as m,i as y}from"../chunks/chunk-COq2vjnJ.js";import{i as S}from"../chunks/chunk-DHGUNbh-.js";import{i as P,a as w,b as U,f as z,r as x}from"../chunks/chunk-Ce4PNfuI.js";import{a as d}from"../chunks/chunk-BE4tT8ko.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */function A(e,a){const t=`[${a}(url)] Invalid URL ${e}`;return d(P(e),t),e.startsWith(location.origin)&&(e=e.slice(location.origin.length)),d(e.startsWith("/")||w(e),t),e}U();async function _(e,{keepScrollPosition:a=!1,overwriteLastHistoryEntry:t=!1}={}){A(e,"navigate"),await z,await x({scrollTarget:{preserveScroll:a},urlOriginal:e,overwriteLastHistoryEntry:t,isBackwardNavigation:!1})}const D=["value"],E=p({__name:"+Page",setup(e){const a=v(),t=r=>{const o=r.target.value;o&&_(`/vike-vue-app/weather/${o}`)};return(r,o)=>(n(),l("div",null,[s("select",{class:"mt-3 p-3 border-2 border-solid border-yellow-400 rounded-lg",name:"",id:"city",onChange:t},[o[0]||(o[0]=s("option",{value:""},"請選擇",-1)),(n(!0),l(u,null,f(h(a).locationNameList,i=>(n(),l("option",{key:i,value:i},c(i),9,D))),128))],32)]))}}),C=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-vue/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:g}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-vue/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"My Vike App"}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/weather/+Layout.vue",fileExportPathToShowToUser:[]},{filePathToShowToUser:"/layouts/LayoutDefault.vue",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:S},{type:"pointer-import",value:y}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/weather/+Page.vue",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}}};export{M as configValuesSerialized};
