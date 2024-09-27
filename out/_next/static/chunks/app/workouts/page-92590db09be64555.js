(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{9061:function(e,a,t){Promise.resolve().then(t.bind(t,2832))},8455:function(e,a,t){"use strict";function r(e){return a=>e.safeParse(a).success}t.d(a,{V:function(){return r}})},4383:function(e,a,t){"use strict";t.d(a,{X:function(){return r}});let r={PROFILE:"profile",STEPS:"steps",RUNNING:"running",OTHERS:"others",HISTORY:"history",SLEEP:"sleep"}},3032:function(e,a,t){"use strict";t.d(a,{TQ:function(){return c},xd:function(){return l},zN:function(){return n}});var r=t(7307),s=t(4383);async function l(e){let a=await n(),t=[];return t=a?[...a.filter(a=>a.date!==e.date),e]:[e],await (0,r.S)("readwrite",r.U.DATA,e=>e.put(t,s.X.OTHERS)),"Workout data saved successfully!"}async function n(){let e=await (0,r.S)("readonly",r.U.DATA,e=>e.get(s.X.OTHERS));return e instanceof Array?e:null}async function c(e){return Array.isArray(e)&&0!==e.length?(await (0,r.S)("readwrite",r.U.DATA,a=>a.put(e,s.X.OTHERS)),"Workout data saved successfully!"):"Invalid workout data!"}},2894:function(e,a,t){"use strict";t.d(a,{IN:function(){return l},NA:function(){return c},Xx:function(){return n}});var r=t(7307),s=t(4383);async function l(e){let a=await n(),t=[];return t=a?[...a.filter(a=>a.date!==e.date),e]:[e],await (0,r.S)("readwrite",r.U.DATA,e=>e.put(t,s.X.RUNNING)),"Running data saved successfully!"}async function n(){let e=await (0,r.S)("readonly",r.U.DATA,e=>e.get(s.X.RUNNING));return e instanceof Array?e:null}async function c(e){return Array.isArray(e)&&0!==e.length?(await (0,r.S)("readwrite",r.U.DATA,a=>a.put(e,s.X.RUNNING)),"Running data saved successfully!"):"Invalid running data!"}},3145:function(e,a,t){"use strict";t.d(a,{An:function(){return l},It:function(){return n},cF:function(){return c}});var r=t(7307),s=t(4383);async function l(e){let a=await n(),t=[];return t=a?[...a.filter(a=>a.date!==e.date),e]:[e],await (0,r.S)("readwrite",r.U.DATA,e=>e.put(t,s.X.STEPS)),"Steps saved successfully!"}async function n(){let e=await (0,r.S)("readonly",r.U.DATA,e=>e.get(s.X.STEPS));return e instanceof Array?e:null}async function c(e){return Array.isArray(e)&&0!==e.length?(await (0,r.S)("readwrite",r.U.DATA,a=>a.put(e,s.X.STEPS)),"Steps saved successfully!"):"Invalid steps data!"}},5384:function(e,a,t){"use strict";t.d(a,{U:function(){return r}});let r={DATA:"data"}},4704:function(e,a,t){"use strict";t.d(a,{N:function(){return c},S:function(){return n}});var r=t(5384);let s=null;function l(){return new Promise((e,a)=>{if(s){e(s);return}let t=indexedDB.open("web-health-tracker",1);t.addEventListener("upgradeneeded",e=>{t.result.createObjectStore(r.U.DATA)}),t.addEventListener("success",()=>{s=t.result,e(t.result)}),t.addEventListener("error",a),t.addEventListener("blocked",a)})}function n(e,a,t){return new Promise((r,s)=>{l().then(l=>{let n=t(l.transaction(a,e).objectStore(a));n.addEventListener("success",()=>r(n.result)),n.addEventListener("error",()=>s(n.error))}).catch(s)})}function c(){return new Promise((e,a)=>{l().then(t=>{let s=t.transaction(r.U.DATA,"readwrite").objectStore(r.U.DATA).clear();s.addEventListener("success",()=>e()),s.addEventListener("error",()=>a(s.error))}).catch(a)})}},7307:function(e,a,t){"use strict";t.d(a,{S:function(){return r.S},U:function(){return s.U}});var r=t(4704),s=t(5384)},1071:function(e,a,t){"use strict";var r,s,l,n,c,o;t.d(a,{d1:function(){return l},dH:function(){return s},oX:function(){return r}}),(n=r||(r={})).Line="line",n.Bar="bar",(c=s||(s={}))[c.DAILY=30]="DAILY",c[c.WEEKLY=365]="WEEKLY",c[c.MONTHLY=365]="MONTHLY",c[c.ALL=0]="ALL",(o=l||(l={})).Daily="daily",o.Weekly="weekly",o.Monthly="monthly"},4290:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var r=t(1071);async function s(e,a){return new Promise(t=>{if(a===r.dH.ALL){t(e?e.sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime()):[]);return}let s=new Date;s.setDate(new Date().getDate()-a),t(e?e.slice().sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime()).filter(e=>new Date(e.date)>=s):[])})}},3862:function(e,a,t){"use strict";var r=t(7437);t(2265);var s=t(3947);a.Z=e=>{let{children:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("div",{className:"col-md-3 ms-sm-auto col-lg-3 px-md-4",children:(0,r.jsx)(s.default,{})}),(0,r.jsx)("main",{className:"col-md-9 ms-sm-auto col-lg-9 px-md-4",children:a})]})})}},3947:function(e,a,t){"use strict";var r=t(7437),s=t(2265),l=t(6463);a.default=()=>{(0,l.useRouter)();let e=(0,l.usePathname)(),[a,t]=(0,s.useState)(e);return(0,s.useEffect)(()=>{t(e)},[e]),(0,r.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-3 bg-light sidebar p-0",children:(0,r.jsx)("div",{className:"position-sticky",children:(0,r.jsxs)("ul",{className:"nav flex-column",children:[(0,r.jsx)("li",{className:"navbar-brand me-0 bg-dark d-flex justify-content-center bg-gradient",children:(0,r.jsx)("a",{className:"nav-link text-light","aria-current":"page",href:"/WebHealthTracker/",children:(0,r.jsx)("span",{className:"fs-5",children:"WebHealthTracker"})})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/workouts"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/workouts"===a?"text-light":""),href:"/WebHealthTracker/workouts",onClick:()=>t("/workouts"),children:"Workouts"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/sleep"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/sleep"===a?"text-light":""),href:"/WebHealthTracker/sleep",onClick:()=>t("/sleep"),children:"Sleep data"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/history"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/history"===a?"text-light":""),href:"/WebHealthTracker/history",onClick:()=>t("/history"),children:"Medical history"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/management"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/management"===a?"text-light":""),href:"/WebHealthTracker/management",onClick:()=>t("/management"),children:"Management"})}),(0,r.jsx)("hr",{className:"m-0"})]})})})}},2832:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var r=t(7437),s=t(2265),l=t(3862),n=t(3145),c=t(9772),o=t(8455);let i=c.z.object({date:c.z.string(),steps:c.z.number()});async function d(e){let a=i.safeParse(e);if(!a.success)return{errors:a.error.flatten().fieldErrors,message:"Validation failed. Please check the form data."};let{date:t,steps:r}=a.data;try{let e=await (0,n.An)({date:t,steps:r});return{errors:{},message:e}}catch(e){return{errors:{},message:"Failed to save steps. Please try again later."}}}(0,o.V)(i);var m=function(e){let{onClose:a}=e,t=new Date().toISOString().split("T")[0],[l,n]=(0,s.useState)({date:t,steps:""}),c=e=>{let{id:a,value:t,type:r}=e.target;n(e=>({...e,[a]:"number"===r?Number(t):t}))},o=async e=>{e.preventDefault();let t=i.safeParse(l);if(!t.success){console.error(t.error);return}try{let e=await d(l);alert(e.message),a()}catch(e){console.error(e)}};return(0,r.jsx)("div",{className:"modal show d-block",tabIndex:-1,role:"dialog",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:"Add steps"}),(0,r.jsx)("button",{type:"button",className:"btn-close",onClick:a,"aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{onSubmit:o,children:[(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"date",className:"form-label col-3 h6",children:"Datetime:"}),(0,r.jsx)("input",{type:"date",className:"form-control",id:"date",value:l.date,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"steps",className:"form-label col-3 h6",children:"Steps:"}),(0,r.jsx)("input",{type:"number",className:"form-control",id:"steps",min:"1",value:l.steps,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:a,children:"Close"}),(0,r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Add steps"})]})]})})]})})})},h=t(433),u=t(1071),f=t(4290),x=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),[d,m]=(0,s.useState)(null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd");return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.DAILY))})()},[t]),(0,s.useEffect)(()=>{l.current&&l.current.destroy();let e=document.getElementById("stepsDailyChart");e&&(l.current=new h.ZP(e,{type:o,data:{labels:n.map(e=>e.date),datasets:[{label:"Daily steps count (last 30 days)",data:n.map(e=>e.steps),fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]}),(0,r.jsxs)("div",{className:"form-check m-2 d-flex justify-content-end",children:[(0,r.jsx)("label",{htmlFor:"chartColor",className:"form-check-label me-2",children:"Select color:"}),(0,r.jsx)("input",{type:"color",id:"chartColor",name:"chartColor",value:d,onChange:e=>{let a=e.target.value;m(a),localStorage.setItem("customColor",a)},className:"form-control form-control-color form-control-sm"})]})]}),(0,r.jsx)("canvas",{className:"w-100",id:"stepsDailyChart",width:"900",height:"380"})]})},y=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r=new Date(t.setDate(t.getDate()-t.getDay())).toISOString().split("T")[0];return e[r]||(e[r]=0),e[r]+=a.steps,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);l.current&&l.current.destroy();let r=document.getElementById("stepWeeklyChart");r&&(l.current=new h.ZP(r,{type:o,data:{labels:a,datasets:[{label:"Weekly steps count (last 52 weeks)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"stepWeeklyChart",width:"900",height:"380"})]})},j=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r="".concat(t.getFullYear(),"-").concat(t.getMonth()+1);return e[r]||(e[r]=0),e[r]+=a.steps,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);l.current&&l.current.destroy();let r=document.getElementById("stepMonthlyChart");r&&(l.current=new h.ZP(r,{type:o,data:{labels:a,datasets:[{label:"Monthly steps count (last 12 months)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"stepMonthlyChart",width:"900",height:"380"})]})},p=function(){let[e,a]=(0,s.useState)(!1),[t,l]=(0,s.useState)(null),[c,o]=(0,s.useState)(u.d1.Daily);(0,s.useEffect)(()=>{!async function(){e||l(await (0,n.It)())}()},[e]);let i=Array.isArray(t)&&t.length>0;return(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"border",children:(()=>{switch(c){case u.d1.Daily:return(0,r.jsx)(x,{rawData:t});case u.d1.Weekly:return(0,r.jsx)(y,{rawData:t});case u.d1.Monthly:return(0,r.jsx)(j,{rawData:t});default:return(0,r.jsx)(x,{rawData:t})}})()}),(0,r.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioDaily",checked:c===u.d1.Daily,onChange:()=>o(u.d1.Daily)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioDaily",children:"Daily"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioWeekly",checked:c===u.d1.Weekly,onChange:()=>o(u.d1.Weekly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioWeekly",children:"Weekly"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioMonthly",checked:c===u.d1.Monthly,onChange:()=>o(u.d1.Monthly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioMonthly",children:"Monthly"})]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>a(!0),children:"Add steps"}),e&&(0,r.jsx)(m,{onClose:()=>a(!1)})]})]})]}),!i&&(0,r.jsx)("div",{className:"d-flex justify-content-center border rounded shadow-sm",children:(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)("p",{className:"fs-5",children:"No steps data found"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>a(!0),children:"Add steps"})}),e&&(0,r.jsx)(m,{onClose:()=>a(!1)})]})})]})},b=t(2894);let k=c.z.object({date:c.z.string(),kilometer:c.z.number()});async function N(e){let a=k.safeParse(e);if(!a.success)return{errors:a.error.flatten().fieldErrors,message:"Validation failed. Please check the form data."};let{date:t,kilometer:r}=a.data;try{let e=await (0,b.IN)({date:t,kilometer:r});return{errors:{},message:e}}catch(e){return{errors:{},message:"Failed to save running data. Please try again later."}}}(0,o.V)(k);var g=function(e){let{onClose:a}=e,t=new Date().toISOString().split("T")[0],[l,n]=(0,s.useState)({date:t,kilometer:""}),c=e=>{let{id:a,value:t,type:r}=e.target;n(e=>({...e,[a]:"number"===r?Number(t):t}))},o=async e=>{e.preventDefault();let t=k.safeParse(l);if(!t.success){console.error(t.error);return}try{let e=await N(l);alert(e.message),a()}catch(e){console.error(e)}};return(0,r.jsx)("div",{className:"modal show d-block",tabIndex:-1,role:"dialog",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:"Add running data"}),(0,r.jsx)("button",{type:"button",className:"btn-close",onClick:a,"aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{onSubmit:o,children:[(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"date",className:"form-label col-3 h6",children:"Datetime:"}),(0,r.jsx)("input",{type:"date",className:"form-control",id:"date",value:l.date,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"kilometer",className:"form-label col-3 h6",children:"kilometer:"}),(0,r.jsx)("input",{type:"number",className:"form-control",id:"kilometer",min:"1",value:l.kilometer,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:a,children:"Close"}),(0,r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Add running data"})]})]})})]})})})},v=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),[d,m]=(0,s.useState)(null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd");return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.DAILY))})()},[t]),(0,s.useEffect)(()=>{l.current&&l.current.destroy();let e=document.getElementById("runningDailyChart");e&&(l.current=new h.ZP(e,{type:o,data:{labels:n.map(e=>e.date),datasets:[{label:"Daily running data (last 30 days)",data:n.map(e=>e.kilometer),fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]}),(0,r.jsxs)("div",{className:"form-check m-2 d-flex justify-content-end",children:[(0,r.jsx)("label",{htmlFor:"chartColor",className:"form-check-label me-2",children:"Select color:"}),(0,r.jsx)("input",{type:"color",id:"chartColor",name:"chartColor",value:d,onChange:e=>{let a=e.target.value;m(a),localStorage.setItem("customColor",a)},className:"form-control form-control-color form-control-sm"})]})]}),(0,r.jsx)("canvas",{className:"w-100",id:"runningDailyChart",width:"900",height:"380"})]})},C=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r=new Date(t.setDate(t.getDate()-t.getDay())).toISOString().split("T")[0];return e[r]||(e[r]=0),e[r]+=a.kilometer,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);l.current&&l.current.destroy();let r=document.getElementById("runningWeeklyChart");r&&(l.current=new h.ZP(r,{type:o,data:{labels:a,datasets:[{label:"Weekly running data (last 52 weeks)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"runningWeeklyChart",width:"900",height:"380"})]})},w=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r="".concat(t.getFullYear(),"-").concat(t.getMonth()+1);return e[r]||(e[r]=0),e[r]+=a.kilometer,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);l.current&&l.current.destroy();let r=document.getElementById("runningMonthlyChart");r&&(l.current=new h.ZP(r,{type:o,data:{labels:a,datasets:[{label:"Monthly running data (last 12 months)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"runningMonthlyChart",width:"900",height:"380"})]})},S=function(){let[e,a]=(0,s.useState)(!1),[t,l]=(0,s.useState)(null),[n,c]=(0,s.useState)(u.d1.Daily);(0,s.useEffect)(()=>{!async function(){e||l(await (0,b.Xx)())}()},[e]);let o=Array.isArray(t)&&t.length>0;return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"border",children:(()=>{switch(n){case u.d1.Daily:return(0,r.jsx)(v,{rawData:t});case u.d1.Weekly:return(0,r.jsx)(C,{rawData:t});case u.d1.Monthly:return(0,r.jsx)(w,{rawData:t});default:return(0,r.jsx)(v,{rawData:t})}})()}),(0,r.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioDaily",checked:n===u.d1.Daily,onChange:()=>c(u.d1.Daily)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioDaily",children:"Daily"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioWeekly",checked:n===u.d1.Weekly,onChange:()=>c(u.d1.Weekly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioWeekly",children:"Weekly"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioMonthly",checked:n===u.d1.Monthly,onChange:()=>c(u.d1.Monthly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioMonthly",children:"Monthly"})]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>a(!0),children:"Add running data"}),e&&(0,r.jsx)(g,{onClose:()=>a(!1)})]})]})]}),!o&&(0,r.jsx)("div",{className:"d-flex justify-content-center border rounded shadow-sm",children:(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)("p",{className:"fs-5",children:"No running data found"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>a(!0),children:"Add running data"})}),e&&(0,r.jsx)(g,{onClose:()=>a(!1)})]})})]})},D=t(3032);let L=c.z.object({date:c.z.string(),kilocalories:c.z.number(),kilometer:c.z.number()});async function E(e){let a=L.safeParse(e);if(!a.success)return{errors:a.error.flatten().fieldErrors,message:"Validation failed. Please check the form data."};let{date:t,kilocalories:r,kilometer:s}=a.data;try{let e=await (0,D.xd)({date:t,kilocalories:r,kilometer:s});return{errors:{},message:e}}catch(e){return{errors:{},message:"Failed to save workout data. Please try again later."}}}(0,o.V)(L);var A=function(e){let{onClose:a}=e,t=new Date().toISOString().split("T")[0],[l,n]=(0,s.useState)({date:t,kilocalories:"",kilometer:""}),c=e=>{let{id:a,value:t,type:r}=e.target;n(e=>({...e,[a]:"number"===r?Number(t):t}))},o=async e=>{e.preventDefault();let t=L.safeParse(l);if(!t.success){console.error(t.error);return}try{let e=await E(l);alert(e.message),a()}catch(e){console.error(e)}};return(0,r.jsx)("div",{className:"modal show d-block",tabIndex:-1,role:"dialog",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:"Add workout data"}),(0,r.jsx)("button",{type:"button",className:"btn-close",onClick:a,"aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{onSubmit:o,children:[(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"date",className:"form-label col-3 h6",children:"Datetime:"}),(0,r.jsx)("input",{type:"date",className:"form-control",id:"date",value:l.date,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"kilocalories",className:"form-label col-3 h6",children:"Kilocalories:"}),(0,r.jsx)("input",{type:"number",className:"form-control",id:"kilocalories",min:"1",value:l.kilocalories,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"kilometer",className:"form-label col-3 h6",children:"kilometer:"}),(0,r.jsx)("input",{type:"number",className:"form-control",id:"kilometer",min:"1",value:l.kilometer,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:a,children:"Close"}),(0,r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Add workout data"})]})]})})]})})})},T=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),[d,m]=(0,s.useState)(null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd");return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.DAILY))})()},[t]),(0,s.useEffect)(()=>{l.current&&l.current.destroy();let e=document.getElementById("othersDailyChart");e&&(l.current=new h.ZP(e,{type:o,data:{labels:n.map(e=>e.date),datasets:[{label:"Kilocalories (last 30 days)",data:n.map(e=>e.kilocalories),fill:!1,borderColor:"#0d6efd",backgroundColor:"#0d6efd",borderWidth:1,pointRadius:2},{label:"Kilometers (last 30 days)",data:n.map(e=>e.kilometer),fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]}),(0,r.jsxs)("div",{className:"form-check m-2 d-flex justify-content-end",children:[(0,r.jsx)("label",{htmlFor:"chartColor",className:"form-check-label me-2",children:"Select color:"}),(0,r.jsx)("input",{type:"color",id:"chartColor",name:"chartColor",value:d,onChange:e=>{let a=e.target.value;m(a),localStorage.setItem("customColor",a)},className:"form-control form-control-color form-control-sm"})]})]}),(0,r.jsx)("canvas",{className:"w-100",id:"othersDailyChart",width:"900",height:"380"})]})},F=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r=new Date(t.setDate(t.getDate()-t.getDay())).toISOString().split("T")[0];return e[r]||(e[r]={kilometer:0,kilocalories:0}),e[r].kilometer+=a.kilometer,e[r].kilocalories+=a.kilocalories,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a].kilometer),r=a.map(a=>e[a].kilocalories);l.current&&l.current.destroy();let s=document.getElementById("othersWeeklyChart");s&&(l.current=new h.ZP(s,{type:o,data:{labels:a,datasets:[{label:"Kilometers (last 52 weeks)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2},{label:"Kilocalories (last 52 weeks)",data:r,fill:!1,borderColor:"#0d6efd",backgroundColor:"#0d6efd",borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"othersWeeklyChart",width:"900",height:"380"})]})},X=function(e){var a;let{rawData:t}=e,l=(0,s.useRef)(null),[n,c]=(0,s.useState)(null!=t?t:[]),[o,i]=(0,s.useState)(u.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,f.Z)(null!=t?t:[],u.dH.MONTHLY))})()},[t]),(0,s.useEffect)(()=>{let e=n.reduce((e,a)=>{let t=new Date(a.date),r="".concat(t.getFullYear(),"-").concat(t.getMonth()+1);return e[r]||(e[r]={kilometer:0,kilocalories:0}),e[r].kilometer+=a.kilometer,e[r].kilocalories+=a.kilocalories,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a].kilometer),r=a.map(a=>e[a].kilocalories);l.current&&l.current.destroy();let s=document.getElementById("othersMonthlyChart");s&&(l.current=new h.ZP(s,{type:o,data:{labels:a,datasets:[{label:"Kilometers (last 12 months)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2},{label:"Kilocalories (last 12 months)",data:r,fill:!1,borderColor:"#0d6efd",backgroundColor:"#0d6efd",borderWidth:1,pointRadius:2}]}}))},[o,d,t,n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:o===u.oX.Line,onChange:()=>i(u.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:o===u.oX.Bar,onChange:()=>i(u.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"othersMonthlyChart",width:"900",height:"380"})]})},B=function(){let[e,a]=(0,s.useState)(!1),[t,l]=(0,s.useState)(null),[n,c]=(0,s.useState)(u.d1.Daily);(0,s.useEffect)(()=>{!async function(){e||l(await (0,D.zN)())}()},[e]);let o=Array.isArray(t)&&t.length>0;return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"border",children:(()=>{switch(n){case u.d1.Daily:return(0,r.jsx)(T,{rawData:t});case u.d1.Weekly:return(0,r.jsx)(F,{rawData:t});case u.d1.Monthly:return(0,r.jsx)(X,{rawData:t});default:return(0,r.jsx)(T,{rawData:t})}})()}),(0,r.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioDaily",checked:n===u.d1.Daily,onChange:()=>c(u.d1.Daily)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioDaily",children:"Daily"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioWeekly",checked:n===u.d1.Weekly,onChange:()=>c(u.d1.Weekly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioWeekly",children:"Weekly"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioMonthly",checked:n===u.d1.Monthly,onChange:()=>c(u.d1.Monthly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioMonthly",children:"Monthly"})]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>a(!0),children:"Add workout data"}),e&&(0,r.jsx)(A,{onClose:()=>a(!1)})]})]})]}),!o&&(0,r.jsx)("div",{className:"d-flex justify-content-center border rounded shadow-sm",children:(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)("p",{className:"fs-5",children:"No workout data found"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>a(!0),children:"Add workout data"})}),e&&(0,r.jsx)(A,{onClose:()=>a(!1)})]})})]})},W=e=>{let{text:a,children:t}=e,[l,n]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"tooltip-container",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[t,l&&(0,r.jsx)("div",{className:"tooltip-text opacity-75",children:a})]})},M=()=>{let[e,a]=(0,s.useState)("steps");return(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"mt-5 rounded shadow-sm",children:[(0,r.jsxs)("ul",{className:"nav nav-tabs",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link ".concat("steps"===e?"active":""),onClick:()=>a("steps"),href:"#",children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("p",{className:"m-0",children:"Steps"}),(0,r.jsx)(W,{text:"Step count is the number of steps you take throughout the day. Pedometers and digital activity trackers can help you determine your step count. \n                            These devices count steps for any activity that involves step-like movement, including walking, running, stair-climbing, cross-country skiing, \n                            and even movement as you go about your daily chores.",children:(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"--bs-primary-border-subtle",className:"bi bi-info-square",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),(0,r.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})})})]})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link ".concat("running"===e?"active":""),onClick:()=>a("running"),href:"#",children:"Running"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link ".concat("others"===e?"active":""),onClick:()=>a("others"),href:"#",children:"Other workouts"})})]}),(0,r.jsxs)("div",{className:"tab-content p-4",children:[(0,r.jsx)("div",{className:"tab-pane fade ".concat("steps"===e?"show active":""),children:"steps"===e&&(0,r.jsx)(p,{})}),(0,r.jsx)("div",{className:"tab-pane fade ".concat("running"===e?"show active":""),children:"running"===e&&(0,r.jsx)(S,{})}),(0,r.jsx)("div",{className:"tab-pane fade ".concat("others"===e?"show active":""),children:"others"===e&&(0,r.jsx)(B,{})})]})]})})}}},function(e){e.O(0,[674,842,582,971,23,744],function(){return e(e.s=9061)}),_N_E=e.O()}]);