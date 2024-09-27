(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{2456:function(e,a,t){Promise.resolve().then(t.bind(t,3947)),Promise.resolve().then(t.bind(t,970))},8455:function(e,a,t){"use strict";function r(e){return a=>e.safeParse(a).success}t.d(a,{V:function(){return r}})},4383:function(e,a,t){"use strict";t.d(a,{X:function(){return r}});let r={PROFILE:"profile",STEPS:"steps",RUNNING:"running",OTHERS:"others",HISTORY:"history",SLEEP:"sleep"}},3351:function(e,a,t){"use strict";t.d(a,{WX:function(){return c},on:function(){return l},rw:function(){return n}});var r=t(7307),s=t(4383);async function n(e){let a=await l(),t=[];return t=a?[...a.filter(a=>a.date!==e.date),e]:[e],await (0,r.S)("readwrite",r.U.DATA,e=>e.put(t,s.X.SLEEP)),"Sleep data saved successfully!"}async function l(){let e=await (0,r.S)("readonly",r.U.DATA,e=>e.get(s.X.SLEEP));return e instanceof Array?e:null}async function c(e){return Array.isArray(e)&&0!==e.length?(await (0,r.S)("readwrite",r.U.DATA,a=>a.put(e,s.X.SLEEP)),"Sleep data saved successfully!"):"Invalid sleep data!"}},5384:function(e,a,t){"use strict";t.d(a,{U:function(){return r}});let r={DATA:"data"}},4704:function(e,a,t){"use strict";t.d(a,{N:function(){return c},S:function(){return l}});var r=t(5384);let s=null;function n(){return new Promise((e,a)=>{if(s){e(s);return}let t=indexedDB.open("web-health-tracker",1);t.addEventListener("upgradeneeded",e=>{t.result.createObjectStore(r.U.DATA)}),t.addEventListener("success",()=>{s=t.result,e(t.result)}),t.addEventListener("error",a),t.addEventListener("blocked",a)})}function l(e,a,t){return new Promise((r,s)=>{n().then(n=>{let l=t(n.transaction(a,e).objectStore(a));l.addEventListener("success",()=>r(l.result)),l.addEventListener("error",()=>s(l.error))}).catch(s)})}function c(){return new Promise((e,a)=>{n().then(t=>{let s=t.transaction(r.U.DATA,"readwrite").objectStore(r.U.DATA).clear();s.addEventListener("success",()=>e()),s.addEventListener("error",()=>a(s.error))}).catch(a)})}},7307:function(e,a,t){"use strict";t.d(a,{S:function(){return r.S},U:function(){return s.U}});var r=t(4704),s=t(5384)},1071:function(e,a,t){"use strict";var r,s,n,l,c,i;t.d(a,{d1:function(){return n},dH:function(){return s},oX:function(){return r}}),(l=r||(r={})).Line="line",l.Bar="bar",(c=s||(s={}))[c.DAILY=30]="DAILY",c[c.WEEKLY=365]="WEEKLY",c[c.MONTHLY=365]="MONTHLY",c[c.ALL=0]="ALL",(i=n||(n={})).Daily="daily",i.Weekly="weekly",i.Monthly="monthly"},4290:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var r=t(1071);async function s(e,a){return new Promise(t=>{if(a===r.dH.ALL){t(e?e.sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime()):[]);return}let s=new Date;s.setDate(new Date().getDate()-a),t(e?e.slice().sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime()).filter(e=>new Date(e.date)>=s):[])})}},3947:function(e,a,t){"use strict";var r=t(7437),s=t(2265),n=t(6463);a.default=()=>{(0,n.useRouter)();let e=(0,n.usePathname)(),[a,t]=(0,s.useState)(e);return(0,s.useEffect)(()=>{t(e)},[e]),(0,r.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-3 bg-light sidebar p-0",children:(0,r.jsx)("div",{className:"position-sticky",children:(0,r.jsxs)("ul",{className:"nav flex-column",children:[(0,r.jsx)("li",{className:"navbar-brand me-0 bg-dark d-flex justify-content-center bg-gradient",children:(0,r.jsx)("a",{className:"nav-link text-light","aria-current":"page",href:"/",children:(0,r.jsx)("span",{className:"fs-5",children:"WebHealthTracker"})})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/WebHealthTracker/workouts"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/WebHealthTracker/workouts"===a?"text-light":""),href:"/workouts",onClick:()=>t("/workouts"),children:"Workouts"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/WebHealthTracker/sleep"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/WebHealthTracker/sleep"===a?"text-light":""),href:"/WebHealthTracker/sleep",onClick:()=>t("/WebHealthTracker/sleep"),children:"Sleep data"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/WebHealthTracker/history"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/WebHealthTracker/history"===a?"text-light":""),href:"/WebHealthTracker/history",onClick:()=>t("/WebHealthTracker/history"),children:"Medical history"})}),(0,r.jsx)("hr",{className:"m-0"}),(0,r.jsx)("li",{className:"p-3 m-0 nav-item fs-6 ".concat("/WebHealthTracker/management"===a?"bg-primary":""),children:(0,r.jsx)("a",{className:"nav-link ".concat("/WebHealthTracker/management"===a?"text-light":""),href:"/management",onClick:()=>t("/WebHealthTracker/management"),children:"Management"})}),(0,r.jsx)("hr",{className:"m-0"})]})})})}},970:function(e,a,t){"use strict";t.d(a,{default:function(){return j}});var r=t(7437),s=t(2265),n=t(3351),l=t(9772),c=t(8455);let i=l.z.object({date:l.z.string(),hour:l.z.number()});async function o(e){let a=i.safeParse(e);if(!a.success)return{errors:a.error.flatten().fieldErrors,message:"Validation failed. Please check the form data."};let{date:t,hour:r}=a.data;try{let e=await (0,n.rw)({date:t,hour:r});return{errors:{},message:e}}catch(e){return{errors:{},message:"Failed to save sleep data. Please try again later."}}}(0,c.V)(i);var d=function(e){let{onClose:a}=e,t=new Date().toISOString().split("T")[0],[n,l]=(0,s.useState)({date:t,hour:""}),c=e=>{let{id:a,value:t,type:r}=e.target;l(e=>({...e,[a]:"number"===r?Number(t):t}))},d=async e=>{e.preventDefault();let t=i.safeParse(n);if(!t.success){console.error(t.error);return}try{let e=await o(n);alert(e.message),a()}catch(e){console.error(e)}};return(0,r.jsx)("div",{className:"modal show d-block",tabIndex:-1,role:"dialog",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:"Add sleep data"}),(0,r.jsx)("button",{type:"button",className:"btn-close",onClick:a,"aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{onSubmit:d,children:[(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"date",className:"form-label col-3 h6",children:"Datetime:"}),(0,r.jsx)("input",{type:"date",className:"form-control",id:"date",value:n.date,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"m-3 d-flex",children:[(0,r.jsx)("label",{htmlFor:"hour",className:"form-label col-3 h6",children:"Hours:"}),(0,r.jsx)("input",{type:"number",className:"form-control",id:"hour",min:"1",value:n.hour,onChange:c,required:!0})]}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:a,children:"Close"}),(0,r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Add sleep data"})]})]})})]})})})},u=t(433),h=t(1071),m=t(4290),f=function(e){var a;let{rawData:t}=e,n=(0,s.useRef)(null),[l,c]=(0,s.useState)(null!=t?t:[]),[i,o]=(0,s.useState)(h.oX.Line),[d,f]=(0,s.useState)(null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd");return(0,s.useEffect)(()=>{(async()=>{c(await (0,m.Z)(null!=t?t:[],h.dH.DAILY))})()},[t]),(0,s.useEffect)(()=>{n.current&&n.current.destroy();let e=document.getElementById("sleepDailyChart");e&&(n.current=new u.ZP(e,{type:i,data:{labels:l.map(e=>e.date),datasets:[{label:"Daily sleep data (last 30 days)",data:l.map(e=>e.hour),fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[i,d,t,l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:i===h.oX.Line,onChange:()=>o(h.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:i===h.oX.Bar,onChange:()=>o(h.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]}),(0,r.jsxs)("div",{className:"form-check m-2 d-flex justify-content-end",children:[(0,r.jsx)("label",{htmlFor:"chartColor",className:"form-check-label me-2",children:"Select color:"}),(0,r.jsx)("input",{type:"color",id:"chartColor",name:"chartColor",value:d,onChange:e=>{let a=e.target.value;f(a),localStorage.setItem("customColor",a)},className:"form-control form-control-color form-control-sm"})]})]}),(0,r.jsx)("canvas",{className:"w-100",id:"sleepDailyChart",width:"900",height:"380"})]})},x=function(e){var a;let{rawData:t}=e,n=(0,s.useRef)(null),[l,c]=(0,s.useState)(null!=t?t:[]),[i,o]=(0,s.useState)(h.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,m.Z)(null!=t?t:[],h.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=l.reduce((e,a)=>{let t=new Date(a.date),r=new Date(t.setDate(t.getDate()-t.getDay())).toISOString().split("T")[0];return e[r]||(e[r]=0),e[r]+=a.hour,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);n.current&&n.current.destroy();let r=document.getElementById("sleepWeeklyChart");r&&(n.current=new u.ZP(r,{type:i,data:{labels:a,datasets:[{label:"Weekly sleep data (last 52 weeks)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[i,d,t,l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:i===h.oX.Line,onChange:()=>o(h.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:i===h.oX.Bar,onChange:()=>o(h.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"sleepWeeklyChart",width:"900",height:"380"})]})},y=function(e){var a;let{rawData:t}=e,n=(0,s.useRef)(null),[l,c]=(0,s.useState)(null!=t?t:[]),[i,o]=(0,s.useState)(h.oX.Line),d=null!==(a=localStorage.getItem("customColor"))&&void 0!==a?a:"#0d6efd";return(0,s.useEffect)(()=>{(async()=>{c(await (0,m.Z)(null!=t?t:[],h.dH.WEEKLY))})()},[t]),(0,s.useEffect)(()=>{let e=l.reduce((e,a)=>{let t=new Date(a.date),r="".concat(t.getFullYear(),"-").concat(t.getMonth()+1);return e[r]||(e[r]=0),e[r]+=a.hour,e},{}),a=Object.keys(e).sort(),t=a.map(a=>e[a]);n.current&&n.current.destroy();let r=document.getElementById("sleepMonthlyChart");r&&(n.current=new u.ZP(r,{type:i,data:{labels:a,datasets:[{label:"Monthly sleep data (last 12 months)",data:t,fill:!1,borderColor:d,backgroundColor:d,borderWidth:1,pointRadius:2}]}}))},[i,d,t,l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioLineChart",checked:i===h.oX.Line,onChange:()=>o(h.oX.Line)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioLineChart",children:"Line chart"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"chartType",id:"radioBarChart",checked:i===h.oX.Bar,onChange:()=>o(h.oX.Bar)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioBarChart",children:"Bar chart"})]})]})}),(0,r.jsx)("canvas",{className:"w-100",id:"sleepMonthlyChart",width:"900",height:"380"})]})},j=function(){let[e,a]=(0,s.useState)(!1),[t,l]=(0,s.useState)(null),[c,i]=(0,s.useState)(h.d1.Daily);(0,s.useEffect)(()=>{!async function(){e||l(await (0,n.on)())}()},[e]);let o=Array.isArray(t)&&t.length>0;return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsxs)("div",{className:"mt-5 p-4 rounded shadow-sm ",children:[(0,r.jsx)("div",{className:"border",children:(()=>{switch(c){case h.d1.Daily:return(0,r.jsx)(f,{rawData:t});case h.d1.Weekly:return(0,r.jsx)(x,{rawData:t});case h.d1.Monthly:return(0,r.jsx)(y,{rawData:t});default:return(0,r.jsx)(f,{rawData:t})}})()}),(0,r.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-center flex-grow-1",children:[(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioDaily",checked:c===h.d1.Daily,onChange:()=>i(h.d1.Daily)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioDaily",children:"Daily"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioWeekly",checked:c===h.d1.Weekly,onChange:()=>i(h.d1.Weekly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioWeekly",children:"Weekly"})]}),(0,r.jsxs)("div",{className:"form-check m-2",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"displayMode",id:"radioMonthly",checked:c===h.d1.Monthly,onChange:()=>i(h.d1.Monthly)}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"radioMonthly",children:"Monthly"})]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>a(!0),children:"Add sleep data"}),e&&(0,r.jsx)(d,{onClose:()=>a(!1)})]})]})]}),!o&&(0,r.jsx)("div",{className:"py-5 p-3",children:(0,r.jsx)("div",{className:"d-flex justify-content-center border rounded shadow-sm",children:(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)("p",{className:"fs-5",children:"No sleep data found"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>a(!0),children:"Add sleep data"})}),e&&(0,r.jsx)(d,{onClose:()=>a(!1)})]})})})]})}}},function(e){e.O(0,[674,842,582,971,23,744],function(){return e(e.s=2456)}),_N_E=e.O()}]);