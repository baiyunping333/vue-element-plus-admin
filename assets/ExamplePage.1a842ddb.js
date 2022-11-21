import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.8980a8c1.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang.e8775787.js";import{d as t,u as o,s as l,aO as s,r as i,o as r,h as m,w as p,a as d,k as n,g as c,e as u,y as b,t as f}from"./index.6fcab033.js";import{E as g}from"./el-button.954cb4d6.js";import{E as j}from"./el-tag.30c8caad.js";import{_}from"./Table.vue_vue_type_script_lang.70a2db8b.js";import{g as x,d as y}from"./index.876b4627.js";import{u as h}from"./useTable.7961a3d7.js";import{u as v}from"./useEmitt.e05436d0.js";import{u as D}from"./useCrudSchemas.d5ce71a3.js";import"./el-card.33eb71e6.js";import"./el-popper.62513df6.js";import"./index.16a1a15f.js";import"./Form.0714b77f.js";import"./el-col.1a07e60f.js";import"./el-input.24bf2aea.js";import"./event.dc71bbc2.js";import"./index.52d2cd73.js";import"./tsxHelper.f3ec9347.js";import"./index.727df7dd.js";import"./scroll.7d1b1046.js";import"./debounce.0a1c4898.js";import"./validator.f75f83f2.js";import"./el-input-number.f7215c74.js";import"./el-switch.47b33378.js";import"./el-divider.2f26a6ab.js";import"./InputPassword.6ddd3ee3.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.7d3e2f71.js";import"./aria.73d9b7fc.js";import"./browser.bd7dc400.js";import"./useForm.102880a5.js";import"./el-message-box.34c07723.js";import"./el-overlay.907c06d4.js";import"./vnode.54a60a86.js";import"./tree.b6e955f9.js";const w={class:"mb-10px"},S=t({name:"ExamplePage"}),C=t({...S,setup(t){const{push:S}=o(),{register:C,tableObject:k,methods:P}=h({getListApi:x,delListApi:y,response:{list:"list",total:"total"}}),{getList:L,setSearchParams:R}=P;L(),v({name:"getList",callback:e=>{"add"===e&&(k.currentPage=1),L()}});const{t:z}=n(),E=l([{field:"index",label:z("tableDemo.index"),type:"index"},{field:"title",label:z("tableDemo.title"),search:{show:!0}},{field:"author",label:z("tableDemo.author")},{field:"display_time",label:z("tableDemo.displayTime")},{field:"importance",label:z("tableDemo.importance"),formatter:(e,a,t)=>s(j,{type:1===t?"success":2===t?"warning":"danger"},(()=>z(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:z("tableDemo.pageviews")},{field:"content",label:z("exampleDemo.content"),table:{show:!1}},{field:"action",width:"260px",label:z("tableDemo.action")}]),{allSchemas:T}=D(E),A=()=>{S("/example/example-add")},F=i(!1),O=async(e,a)=>{var t;k.currentRow=e;const{delList:o,getSelections:l}=P,s=await l();F.value=!0,await o(a?s.map((e=>e.id)):[null==(t=k.currentRow)?void 0:t.id],a).finally((()=>{F.value=!1}))},U=(e,a)=>{S(`/example/example-${a}?id=${e.id}`)};return(t,o)=>(r(),m(d(e),null,{default:p((()=>[c(d(a),{schema:d(T).searchSchema,onSearch:d(R),onReset:d(R)},null,8,["schema","onSearch","onReset"]),u("div",w,[c(d(g),{type:"primary",onClick:A},{default:p((()=>[b(f(d(z)("exampleDemo.add")),1)])),_:1}),c(d(g),{loading:F.value,type:"danger",onClick:o[0]||(o[0]=e=>O(null,!0))},{default:p((()=>[b(f(d(z)("exampleDemo.del")),1)])),_:1},8,["loading"])]),c(d(_),{pageSize:d(k).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>d(k).pageSize=e),currentPage:d(k).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>d(k).currentPage=e),columns:d(T).tableColumns,data:d(k).tableList,loading:d(k).loading,pagination:{total:d(k).total},onRegister:d(C)},{action:p((({row:e})=>[c(d(g),{type:"primary",onClick:a=>U(e,"edit")},{default:p((()=>[b(f(d(z)("exampleDemo.edit")),1)])),_:2},1032,["onClick"]),c(d(g),{type:"success",onClick:a=>U(e,"detail")},{default:p((()=>[b(f(d(z)("exampleDemo.detail")),1)])),_:2},1032,["onClick"]),c(d(g),{type:"danger",onClick:a=>O(e,!1)},{default:p((()=>[b(f(d(z)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{C as default};
