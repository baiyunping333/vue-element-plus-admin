import{P as a,g as t,a as s,b as e}from"./PanelGroup.2d21bb3f.js";import{d as n,r as i,s as o,o as l,c as m,g as d,w as u,a as p,a0 as r,k as c,bp as _}from"./index.9c9e5dbb.js";import{a as f,E as g}from"./el-col.0046ae15.js";import{E as h}from"./el-card.0ce29f92.js";import{E as b}from"./el-skeleton-item.a241b285.js";import{p as v,b as y,l as x,_ as j}from"./Echart.vue_vue_type_script_setup_true_lang.313583f2.js";import"./CountTo.vue_vue_type_script_setup_true_lang.9484d50b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./debounce.dcba923f.js";const w=n({__name:"Analysis",setup(n){const{t:w}=c(),E=i(!0),A=o(v),P=async()=>{const a=await t().catch((()=>{}));a&&(_(A,"legend.data",a.data.map((a=>w(a.name)))),A.series[0].data=a.data.map((a=>({name:w(a.name),value:a.value}))))},k=o(y),D=async()=>{const a=await s().catch((()=>{}));a&&(_(k,"xAxis.data",a.data.map((a=>w(a.name)))),_(k,"series",[{name:w("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},O=o(x),q=async()=>{const a=await e().catch((()=>{}));a&&(_(O,"xAxis.data",a.data.map((a=>w(a.name)))),_(O,"series",[{name:w("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:w("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),D(),q()]),E.value=!1})(),(t,s)=>(l(),m(r,null,[d(a),d(p(g),{gutter:20,justify:"space-between"},{default:u((()=>[d(p(f),{xl:10,lg:10,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(b),{loading:E.value,animated:""},{default:u((()=>[d(p(j),{options:p(A),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{xl:14,lg:14,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(b),{loading:E.value,animated:""},{default:u((()=>[d(p(j),{options:p(k),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{span:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(b),{loading:E.value,animated:"",rows:4},{default:u((()=>[d(p(j),{options:p(O),height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{w as default};
