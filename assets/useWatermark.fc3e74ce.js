import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.8980a8c1.js";import{d as t,b as a,H as n,D as r,o,h as s,w as i,g as l,y as d,t as m,a as c,k as p}from"./index.6fcab033.js";import{E as u}from"./el-button.954cb4d6.js";import"./el-card.33eb71e6.js";import"./el-popper.62513df6.js";import"./index.16a1a15f.js";import"./index.52d2cd73.js";const f=Symbol("watermark-dom");const y=t({__name:"useWatermark",setup(t){const y=a(),g=n((()=>y.getTitle)),{setWatermark:k,clear:h}=function(e=document.body){let t=()=>{};const a=f.toString(),n=()=>{const n=document.getElementById(a);if(n){const t=e;t&&t.removeChild(n)}window.removeEventListener("resize",t)},r=t=>{n();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const s=document.createElement("div");return s.id=a,s.style.pointerEvents="none",s.style.top="0px",s.style.left="0px",s.style.position="absolute",s.style.zIndex="100000000",s.style.width=document.documentElement.clientWidth+"px",s.style.height=document.documentElement.clientHeight+"px",s.style.background="url("+r.toDataURL("image/png")+") left top repeat",e&&e.appendChild(s),a};return{setWatermark:function(e){r(e),t=()=>{r(e)},window.addEventListener("resize",t)},clear:n}}(),{t:w}=p();return r((()=>{h()})),(t,a)=>(o(),s(c(e),{title:"useWatermark"},{default:i((()=>[l(c(u),{type:"primary",onClick:a[0]||(a[0]=e=>c(k)(c(g)))},{default:i((()=>[d(m(c(w)("watermarkDemo.createdWatermark")),1)])),_:1}),l(c(u),{type:"danger",onClick:c(h)},{default:i((()=>[d(m(c(w)("watermarkDemo.clearWatermark")),1)])),_:1},8,["onClick"]),l(c(u),{type:"warning",onClick:a[1]||(a[1]=e=>c(k)(`New${c(g)}`))},{default:i((()=>[d(m(c(w)("watermarkDemo.resetWatermark")),1)])),_:1})])),_:1}))}});export{y as default};
