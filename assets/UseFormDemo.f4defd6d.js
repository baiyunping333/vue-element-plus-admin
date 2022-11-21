import{F as e}from"./Form.0714b77f.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang.8980a8c1.js";import{d as l,s as t,r as a,o as i,c as m,g as s,w as r,a as d,y as n,t as f,a0 as p,k as c,cj as u}from"./index.6fcab033.js";import{u as b}from"./useForm.102880a5.js";import{E as _}from"./el-button.954cb4d6.js";import{u as D}from"./useValidator.ce74b791.js";import"./el-col.1a07e60f.js";import"./el-popper.62513df6.js";import"./index.16a1a15f.js";import"./el-input.24bf2aea.js";import"./event.dc71bbc2.js";import"./index.52d2cd73.js";import"./el-tag.30c8caad.js";import"./tsxHelper.f3ec9347.js";import"./index.727df7dd.js";import"./scroll.7d1b1046.js";import"./debounce.0a1c4898.js";import"./validator.f75f83f2.js";import"./el-input-number.f7215c74.js";import"./el-switch.47b33378.js";import"./el-divider.2f26a6ab.js";import"./InputPassword.6ddd3ee3.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.7d3e2f71.js";import"./aria.73d9b7fc.js";import"./browser.bd7dc400.js";import"./el-card.33eb71e6.js";const v=l({__name:"UseFormDemo",setup(l){const{required:v}=D(),{t:j}=c(),h=t([{field:"field1",label:j("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:j("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:j("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:j("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:j("formDemo.timeSelect")}]),{register:k,methods:C,elFormRef:P}=b({schema:h}),g=e=>{const{setProps:o}=C;o({labelWidth:e})},x=e=>{const{setProps:o}=C;o({size:e})},$=e=>{const{setProps:o}=C;o({disabled:e})},y=e=>{const{delSchema:o,addSchema:l}=C;e?o("field2"):e||"field2"===h[1].field||l({field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=C;e?null==(o=d(P))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=a(7),w=()=>{const{setSchema:e}=C;e([{field:"field2",path:"label",value:`${j("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},I=()=>{const{addSchema:e}=C;d(S)%2==0?e({field:`field${d(S)}`,label:`${j("formDemo.input")}${d(S)}`,component:"Input"}):e({field:`field${d(S)}`,label:`${j("formDemo.input")}${d(S)}`,component:"Input"},d(S)),S.value++},R=()=>{d(P).validate((e=>{}))},V=()=>{var e;null==(e=d(P))||e.resetFields()},W=async()=>{const e=await u();if(e){const{setSchema:o}=C;o([{field:"field2",path:"componentProps.options",value:e.data}])}};return(l,t)=>(i(),m(p,null,[s(d(o),{title:`UseForm ${d(j)("formDemo.operate")}`},{default:r((()=>[s(d(_),{onClick:t[0]||(t[0]=e=>g(150))},{default:r((()=>[n(f(d(j)("formDemo.change"))+" labelWidth",1)])),_:1}),s(d(_),{onClick:t[1]||(t[1]=e=>g("auto"))},{default:r((()=>[n(f(d(j)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(d(_),{onClick:t[2]||(t[2]=e=>x("large"))},{default:r((()=>[n(f(d(j)("formDemo.change"))+" size",1)])),_:1}),s(d(_),{onClick:t[3]||(t[3]=e=>x("default"))},{default:r((()=>[n(f(d(j)("formDemo.restore"))+" size",1)])),_:1}),s(d(_),{onClick:t[4]||(t[4]=e=>$(!0))},{default:r((()=>[n(f(d(j)("formDemo.disabled")),1)])),_:1}),s(d(_),{onClick:t[5]||(t[5]=e=>$(!1))},{default:r((()=>[n(f(d(j)("formDemo.disablement")),1)])),_:1}),s(d(_),{onClick:t[6]||(t[6]=e=>y(!0))},{default:r((()=>[n(f(d(j)("formDemo.delete"))+" "+f(d(j)("formDemo.select")),1)])),_:1}),s(d(_),{onClick:t[7]||(t[7]=e=>y(!1))},{default:r((()=>[n(f(d(j)("formDemo.add"))+" "+f(d(j)("formDemo.select")),1)])),_:1}),s(d(_),{onClick:t[8]||(t[8]=e=>F(!1))},{default:r((()=>[n(f(d(j)("formDemo.setValue")),1)])),_:1}),s(d(_),{onClick:t[9]||(t[9]=e=>F(!0))},{default:r((()=>[n(f(d(j)("formDemo.resetValue")),1)])),_:1}),s(d(_),{onClick:w},{default:r((()=>[n(f(d(j)("formDemo.set"))+" "+f(d(j)("formDemo.select"))+" label ",1)])),_:1}),s(d(_),{onClick:I},{default:r((()=>[n(f(d(j)("formDemo.add"))+" "+f(d(j)("formDemo.subitem")),1)])),_:1}),s(d(_),{onClick:R},{default:r((()=>[n(f(d(j)("formDemo.formValidation")),1)])),_:1}),s(d(_),{onClick:V},{default:r((()=>[n(f(d(j)("formDemo.verifyReset")),1)])),_:1}),s(d(_),{onClick:W},{default:r((()=>[n(f(d(j)("searchDemo.dynamicOptions")),1)])),_:1})])),_:1},8,["title"]),s(d(o),{title:`UseForm ${d(j)("formDemo.example")}`},{default:r((()=>[s(d(e),{onRegister:d(k)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
