import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.8980a8c1.js";import{d as t,s as a,aO as l,r as o,o as i,c as s,g as n,w as r,a as d,y as m,t as p,e as c,a0 as b,k as u}from"./index.6fcab033.js";import{_ as f}from"./Table.vue_vue_type_script_lang.70a2db8b.js";import{g}from"./index.876b4627.js";import{E as D}from"./el-tag.30c8caad.js";import{E as _}from"./el-button.954cb4d6.js";import{u as j}from"./useTable.7961a3d7.js";import"./el-card.33eb71e6.js";import"./el-popper.62513df6.js";import"./index.16a1a15f.js";import"./tsxHelper.f3ec9347.js";import"./event.dc71bbc2.js";import"./index.52d2cd73.js";import"./el-input.24bf2aea.js";import"./index.727df7dd.js";import"./scroll.7d1b1046.js";import"./debounce.0a1c4898.js";import"./validator.f75f83f2.js";import"./el-message-box.34c07723.js";import"./el-overlay.907c06d4.js";import"./vnode.54a60a86.js";import"./aria.73d9b7fc.js";const v={class:"ml-30px"},x=t({__name:"UseTableDemo",setup(t){const{register:x,tableObject:h,methods:C,elTableRef:k}=j({getListApi:g,response:{list:"list",total:"total"}}),{getList:y}=C;y();const{t:w}=u(),T=a([{field:"index",label:w("tableDemo.index"),type:"index"},{field:"content",label:w("tableDemo.header"),children:[{field:"title",label:w("tableDemo.title")},{field:"author",label:w("tableDemo.author")},{field:"display_time",label:w("tableDemo.displayTime")},{field:"importance",label:w("tableDemo.importance"),formatter:(e,t,a)=>l(D,{type:1===a?"success":2===a?"warning":"danger"},(()=>w(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:w("tableDemo.pageviews")}]},{field:"action",label:w("tableDemo.action")}]),P=o(),S=e=>{P.value=e?{total:h.total}:void 0},z=e=>{const{setProps:t}=C;t({reserveIndex:e})},R=e=>{const{setProps:t}=C;t({selection:e})},U=o(1),E=()=>{const{setColumn:e}=C;e([{field:"title",path:"label",value:`${w("tableDemo.title")}${d(U)}`}]),U.value++},$=e=>{const{setProps:t}=C;t({expand:e})},A=()=>{var e;null==(e=d(k))||e.toggleAllSelection()};return(t,a)=>(i(),s(b,null,[n(d(e),{title:`UseTable ${d(w)("tableDemo.operate")}`},{default:r((()=>[n(d(_),{onClick:a[0]||(a[0]=e=>S(!0))},{default:r((()=>[m(p(d(w)("tableDemo.show"))+" "+p(d(w)("tableDemo.pagination")),1)])),_:1}),n(d(_),{onClick:a[1]||(a[1]=e=>S(!1))},{default:r((()=>[m(p(d(w)("tableDemo.hidden"))+" "+p(d(w)("tableDemo.pagination")),1)])),_:1}),n(d(_),{onClick:a[2]||(a[2]=e=>z(!0))},{default:r((()=>[m(p(d(w)("tableDemo.reserveIndex")),1)])),_:1}),n(d(_),{onClick:a[3]||(a[3]=e=>z(!1))},{default:r((()=>[m(p(d(w)("tableDemo.restoreIndex")),1)])),_:1}),n(d(_),{onClick:a[4]||(a[4]=e=>R(!0))},{default:r((()=>[m(p(d(w)("tableDemo.showSelections")),1)])),_:1}),n(d(_),{onClick:a[5]||(a[5]=e=>R(!1))},{default:r((()=>[m(p(d(w)("tableDemo.hiddenSelections")),1)])),_:1}),n(d(_),{onClick:E},{default:r((()=>[m(p(d(w)("tableDemo.changeTitle")),1)])),_:1}),n(d(_),{onClick:a[6]||(a[6]=e=>$(!0))},{default:r((()=>[m(p(d(w)("tableDemo.showExpandedRows")),1)])),_:1}),n(d(_),{onClick:a[7]||(a[7]=e=>$(!1))},{default:r((()=>[m(p(d(w)("tableDemo.hiddenExpandedRows")),1)])),_:1}),n(d(_),{onClick:A},{default:r((()=>[m(p(d(w)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),n(d(e),{title:`UseTable ${d(w)("tableDemo.example")}`},{default:r((()=>[n(d(f),{pageSize:d(h).pageSize,"onUpdate:pageSize":a[8]||(a[8]=e=>d(h).pageSize=e),currentPage:d(h).currentPage,"onUpdate:currentPage":a[9]||(a[9]=e=>d(h).currentPage=e),columns:T,data:d(h).tableList,loading:d(h).loading,pagination:P.value,onRegister:d(x)},{action:r((e=>[n(d(_),{type:"primary",onClick:e=>{}},{default:r((()=>[m(p(d(w)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[c("div",v,[c("div",null,p(d(w)("tableDemo.title"))+"："+p(e.row.title),1),c("div",null,p(d(w)("tableDemo.author"))+"："+p(e.row.author),1),c("div",null,p(d(w)("tableDemo.displayTime"))+"："+p(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
