import{r as c,c as s,a as t,F as r,b as d,o as a,d as p,w as m,e as _,n as g,t as i}from"./index-D46K8ypC.js";const u={class:"memories"},k={class:"list-group"},x={class:"avatar"},v={class:"date"},h={class:"text"},w={__name:"index",setup(j){const o=c([{pic:"images/20210401/11.jpg",date:"20210401",text:"南投",link:"20210401"},{pic:"images/20211104/14.jpg",date:"20211104",text:"宜蘭",link:"20211104"},{pic:"images/20220804/7.jpg",date:"20220804",text:"花蓮",link:"20220804"},{pic:"images/20221126/18.jpg",date:"20221126",text:"清淨",link:"20221126"},{pic:"images/20230520/11.jpg",date:"20230520",text:"日月潭",link:"20230520"},{pic:"images/20230622/27.jpg",date:"20230622",text:"花東",link:"20230622"}]);return(y,B)=>{const n=_("router-link");return a(),s("div",u,[t("ul",k,[(a(!0),s(r,null,d(o.value,(e,l)=>(a(),s("li",{class:"list",key:l},[p(n,{to:{name:e.link,params:{id:e.link}}},{default:m(()=>[t("div",x,[t("div",{class:"img",style:g({"background-image":"url("+e.pic+")"})},null,4)]),t("div",v,i(e.date),1),t("div",h,i(e.text),1)]),_:2},1032,["to"])]))),128))])])}}};export{w as default};