"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.microScope=function({state:e}){const t=[],s=new Proxy(e,{set:(e,s,n)=>(e[s]=n,t.forEach(t=>t(e)),!0)});return(e,...n)=>{const r=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(e.reduce((t,s,r)=>r===e.length-1?`${t}${s}`:n[r].text?`${t}${s}<template data-ms="${r}"></template>`:`${t}${s} data-ms="${r}"`,""));document.body.appendChild(r),n.forEach((e,n)=>{for(const[o,a]of Object.entries(e)){const e=r.querySelector(`[data-ms="${n}"]`);switch(o){case"text":const{parentNode:n}=e;t.push(()=>n.innerText=a(s));break;case"class":t.push(()=>{for(const[t,n]of Object.entries(a(s)))e.classList[n?"add":"remove"](t)});break;case"if":t.push(()=>e.style.display=a(s)?"":"none");break;default:e.addEventListener(o,e=>a(e,s))}}}),s._ready=!0}};
//# sourceMappingURL=bundle.js.map