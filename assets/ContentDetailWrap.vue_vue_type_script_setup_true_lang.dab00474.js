import{d as e,a9 as t,r as a,C as s,x as r,o as l,c as i,g as o,w as n,a as c,e as p,n as d,j as f,y as x,t as _,z as m,k as u}from"./index.9c9e5dbb.js";import{E as b}from"./el-card.0ce29f92.js";import{E as v}from"./el-button.67bafb4d.js";import{_ as g}from"./Sticky.vue_vue_type_script_setup_true_lang.96da4b3c.js";const h={class:"text-16px font-700"},$={style:{padding:"var(--app-content-padding)"}},k=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:k}=u(),{getPrefixCls:y}=f(),j=y("content-detail-wrap"),w=a(85),C=a();return s((()=>{w.value=C.value.getBoundingClientRect().top})),(a,s)=>{const f=r("Icon");return l(),i("div",{class:d([`${c(j)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[o(c(g),{offset:w.value},{default:n((()=>[p("div",{class:d([`${c(j)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[p("div",{class:d([`${c(j)}-header__back`,"flex pl-10px pr-10px "])},[o(c(v),{onClick:s[0]||(s[0]=e=>t("back"))},{default:n((()=>[o(f,{icon:"ep:arrow-left",class:"mr-5px"}),x(" "+_(c(k)("common.back")),1)])),_:1})],2),p("div",{class:d([`${c(j)}-header__title`,"flex flex-1  justify-center"])},[m(a.$slots,"title",{},(()=>[p("label",h,_(e.title),1)]))],2),p("div",{class:d([`${c(j)}-header__right`,"flex  pl-10px pr-10px"])},[m(a.$slots,"right")],2)],2)])),_:3},8,["offset"]),p("div",$,[o(c(b),{class:d([`${c(j)}-body`,"mb-20px"]),shadow:"never"},{default:n((()=>[p("div",null,[m(a.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{k as _};
