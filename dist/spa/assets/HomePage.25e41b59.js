import{Q as B}from"./QPagination.b1edc014.js";import{ae as h,o as y,r as m,w as C,v as r,j as t,s,y as u,F as d,af as p,d as _,k as l,X as w,a0 as x,n as D}from"./index.d66737ec.js";import{u as P}from"./deal-store.c25fbbd2.js";import"./QBtn.4e2e0263.js";import"./format.988410c1.js";import"./focus-manager.c9a7b623.js";import"./axios.19b8affa.js";const V={class:"global-content-container"},F={class:"global-pagination-container"},G={__name:"HomeManagement",setup(v){const n=P(),{dealList:c}=h(n);y(()=>{n.FetchDealList(e.value-1).then(()=>{o.value=!1})});const e=m(1),o=m(!0);return C(e,f=>{o.value=!0,window.scrollTo(0,0),n.FetchDealList(e.value-1).then(()=>{o.value=!1})}),(f,i)=>{const g=r("BaseGameCardSkeleton"),k=r("BaseGameCard");return t(),s("div",null,[u("div",V,[o.value?(t(),s(d,{key:0},p(30,a=>_(g,{key:a})),64)):(t(!0),s(d,{key:1},p(w(c),a=>(t(),l(k,{key:a.dealID,dealDetail:a,appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},null,8,["dealDetail"]))),128))]),u("div",F,[o.value?x("",!0):(t(),l(B,{key:0,modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),max:100,"max-pages":6,"direction-links":"",flat:"",size:"1vw",color:"grey","active-color":"primary"},null,8,["modelValue"]))])])}}},T={__name:"HomePage",setup(v){return(n,c)=>{const e=r("BasePage");return t(),l(e,null,{default:D(()=>[_(G)]),_:1})}}};export{T as default};
