import{E as e,O as o,F as l,aK as a,bE as t,r as n,bs as s,by as u,H as c,U as d,v as r,N as p,C as f,W as i,cJ as y,am as v}from"./index.9c9e5dbb.js";import{U as m}from"./event.dc71bbc2.js";import{u as b}from"./index.9c08eb30.js";import{a as C}from"./el-overlay.80cd817f.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},x=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),D={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[m]:e=>a(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=i().emit,{nextZIndex:a}=t();let B="";const g=b(),x=b(),D=n(!1),F=n(!1),I=n(!1),O=n(e.zIndex||a());let S,h;const A=s("namespace",u),k=c((()=>{const o={},l=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),w=c((()=>e.alignCenter?{display:"flex"}:{}));function E(){null==h||h(),null==S||S(),e.openDelay&&e.openDelay>0?({stop:S}=y((()=>z()),e.openDelay)):z()}function N(){null==S||S(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=y((()=>M()),e.closeDelay)):M()}function j(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,D.value=!1)})):N()}function z(){v&&(D.value=!0)}function M(){D.value=!1}return e.lockScroll&&C(D),r((()=>e.modelValue),(t=>{t?(F.value=!1,E(),I.value=!0,O.value=e.zIndex?O.value++:a(),p((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):D.value&&N()})),r((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),f((()=>{e.modelValue&&(D.value=!0,I.value=!0,E())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(m,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){l("close")},handleClose:j,onModalClick:function(){e.closeOnClickModal&&j()},close:N,doClose:M,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&j()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:x,closed:F,style:k,overlayDialogStyle:w,rendered:I,visible:D,zIndex:O}};export{g as a,x as b,D as c,B as d,F as u};
