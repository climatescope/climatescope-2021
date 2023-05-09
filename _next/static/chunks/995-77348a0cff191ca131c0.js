"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{6050:function(e,t,n){var r=n(2809),i=n(7294),o=n(9930),a=n(2530),c=n(233),l=n(7228),s=n(7086),u=n(1659),d=n(8527),f=n(7398),h=n(3619),g=n(3279),p=n.n(g),x=n(5893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=["fundamentals","opportunities","experience"],j=function(e){var t=e.market,n=e.sector,g=void 0===n?"power":n,p=e.max,m=void 0===p?5:p,j=e.size,b=void 0===j?300:j,w=e.strokeWidth,k=void 0===w?1:w,O=e.colorScheme,S=void 0===O?"brand":O,z=e.dotSize,M=e.padding,F=void 0===M?0:M,P=e.maxWidth,Z=void 0===P?"12rem":P,W=(0,u.Fg)().colors,E=b+F,C=(0,i.useState)({}),T=C[0],L=C[1],D=t.topics,R=Math.floor(m),U=2*Math.PI,H=(0,i.useMemo)((function(){var e="all"===g?["power","transport","buildings"].map((function(e,t){return y.map((function(n,r){return{id:"".concat(e.split(" ").join("-"),"-").concat(n),x:3*t+r,y:0}}))})).flat():y.map((function(e,t){return{id:"".concat(g.split(" ").join("-"),"-").concat(e),x:t,y:0}}));return e.map((function(t){var n=D.find((function(e){return e.id===t.id})),r=U/e.length*t.x;return{id:t.id,name:n.name,sector:n.sector,x:r,y:n.data[0].value||0}}))}),[D,U,g,b]),A=(0,i.useCallback)((0,s.Z)().domain([0,m]).range([0,b/2]),[m,b]),K=(0,i.useCallback)((0,o.Z)().angle((function(e){return e.x})).radius((function(e){return A(e.y)})).curve(a.Z),[A]),I=(0,i.useMemo)((function(){return K(H)}),[H]),V=(0,i.useMemo)((function(){return H.map((function(e,t){var n=2*Math.PI/H.length*t,r=A(e.y)*Math.cos(n-Math.PI/2),i=2*Math.PI/H.length*t,o=A(e.y)*Math.sin(i-Math.PI/2);return v(v({},e),{},{cx:r,cy:o})}))}),[A,H]),q=(0,i.useMemo)((function(){return H.map((function(e,t){var n=R,r=2*Math.PI/H.length*t,i=A(n)*Math.cos(r-Math.PI/2),o=2*Math.PI/H.length*t;return{key:t,x1:0,y1:0,x2:i,y2:A(n)*Math.sin(o-Math.PI/2),label:e.name}}))}),[A,H,R]),B=(0,i.useMemo)((function(){return Array(R).fill(1).map((function(e,t){return{key:t+e,r:A(t+e)}}))}),[A,R]),X=(0,i.useMemo)((function(){var e=(0,c.Z)().innerRadius(0).outerRadius(b/2),t=H.map((function(e){return{value:1,label:e.name,sector:e.sector,originalValue:e.y}}));return(0,l.Z)().startAngle(-45).value((function(e){return e.value}))(t).map((function(t,n){return{key:n,label:t.data.label,sector:t.data.sector,originalValue:t.data.originalValue,d:e({startAngle:t.startAngle,endAngle:t.endAngle})}}))}),[H]),Y=function(e){var t=e.label,n=e.sector,i=e.originalValue;return function(){var e;i&&L((e={label:t},(0,r.Z)(e,"label",t),(0,r.Z)(e,"sector",n),(0,r.Z)(e,"originalValue",i),e))}},_=function(){L({})};return(0,x.jsx)(d.xu,{w:"100%",maxW:Z,height:"auto",position:"relative",children:(0,x.jsxs)("svg",{style:{color:W[S][800],userSelect:"none",width:"100%",height:"auto"},viewBox:"0 0 ".concat(E," ").concat(E),children:[B.map((function(e){var t=b<140;return(0,x.jsxs)("g",{children:[(0,x.jsx)("circle",{cx:E/2,cy:E/2,r:e.r,stroke:W.gray[100],strokeWidth:k,fill:"none",vectorEffect:"non-scaling-stroke",strokeDasharray:t?[]:[3,3]}),t?null:(0,x.jsx)("text",{x:E/2,y:E/2+e.r+4,fontSize:"12",fontWeight:600,textAnchor:"middle",stroke:"#FFF",strokeWidth:5,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke fill",fill:W.gray[300],children:e.key})]},e.key)})),(0,x.jsxs)("g",{transform:"translate(".concat(E/2," ").concat(E/2,")"),children:[q.map((function(e){var t=e.key,n=e.x1,r=e.x2,i=e.y1,o=e.y2;return(0,x.jsx)("line",{x1:n,y1:i,x2:r,y2:o,stroke:"#FFF",strokeWidth:6*k,strokeLinecap:"square",vectorEffect:"non-scaling-stroke"},t)})),q.map((function(e){var t=e.key,n=e.x1,r=e.x2,i=e.y1,o=e.y2;return(0,x.jsx)("line",{x1:n,y1:i,x2:r,y2:o,stroke:W.gray[100],strokeWidth:k,vectorEffect:"non-scaling-stroke"},t)})),q.map((function(e){var t=e.key,n=e.x2,r=e.y2,i=e.label,o=b<140,a=o?[0,12,-12]:[0,24,-24];return(0,x.jsx)("g",{transform:"translate(".concat(n," ").concat(r,")"),children:(0,x.jsx)("text",{x:a[t],y:[-6,14,14][t],fontSize:10,fontWeight:600,textAnchor:["middle","end","start"][t],fill:i===T.label?W.brand[800]:W.gray[500],stroke:"#FFF",strokeWidth:4,paintOrder:"stroke fill",children:o?i.slice(0,t?3:4).toUpperCase()+".":i.toUpperCase()})},t)})),(0,x.jsx)("path",{d:I,fill:"currentcolor",fillOpacity:.1,stroke:"currentcolor",strokeWidth:2*k,vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"}),0!==z&&V.map((function(e,t){return e.y?(0,x.jsx)(h.E.circle,{animate:{cx:e.cx,cy:e.cy},r:z||b/60*k*(e.name===T.label?2:1),fill:"currentcolor",stroke:"#FFF",strokeWidth:2*k,vectorEffect:"non-scaling-stroke",paintOrder:"stroke fill"},t):null})),X.map((function(e){var t=e.key,n=e.d,r=e.label,i=e.sector,o=e.originalValue;return(0,x.jsx)(f.u,{bg:"white",borderRadius:"md",border:"0.0625rem solid",borderColor:"gray.25",boxShadow:"lg",label:o?(0,x.jsxs)(d.Kq,{spacing:0,textAlign:"center",py:1,px:2,children:[(0,x.jsx)(d.xv,{fontSize:"0.625rem",lineHeight:"shorter",color:"gray.500",textTransform:"uppercase",fontWeight:600,children:i}),(0,x.jsx)(d.xv,{fontWeight:600,lineHeight:"shorter",color:"gray.900",children:r}),(0,x.jsxs)(d.xv,{fontFamily:"mono",fontSize:"xs",lineHeight:"shorter",fontWeight:600,color:"gray.500",children:[o<.01?"<0.01":o.toLocaleString("en-US",{maximumFractionDigits:2}),"/5"]})]}):null,gutter:-8,placement:t?"bottom":"top",children:(0,x.jsx)("path",{d:n,fill:W.brand[800],fillOpacity:r===T.label?.05:0,onMouseEnter:Y({label:r,sector:i,originalValue:o}),onMouseLeave:_})},t)}))]})]})})};t.Z=function(e){var t=e.market,n=e.sector,r=void 0===n?"power":n,o=e.max,a=void 0===o?5:o,c=e.size,l=void 0===c?300:c,s=e.strokeWidth,u=void 0===s?1:s,d=e.colorScheme,f=void 0===d?"brand":d,h=e.dotSize,g=e.padding,m=void 0===g?0:g,v=e.maxWidth,y=void 0===v?"12rem":v,b=e.isVisible,w=void 0===b||b,k=(0,i.useRef)(),O=(0,i.useState)(!1),S=O[0],z=O[1],M=(0,i.useState)(),F=M[0],P=M[1];return(0,i.useEffect)((function(){z(!0)}),[]),(0,i.useEffect)((function(){if(S&&k.current){var e=function(){var e=k.current.getBoundingClientRect().width;P(e)},t=p()((function(){return e()}),500);return e(),window.removeEventListener("resize",t),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[S,w]),S?(0,x.jsx)("div",{ref:k,children:(0,x.jsx)(j,{market:t,sector:r,max:a,size:F,strokeWidth:u,colorScheme:f,dotSize:h,padding:m,maxWidth:y})}):(0,x.jsx)("svg",{viewBox:"0 0 ".concat(l," ").concat(l),style:{width:"100%",maxWidth:y,height:"auto"}})}},5350:function(e,t,n){var r=n(9008),i=n(1752),o=n(1163),a=n(5893),c=(0,i.default)().publicRuntimeConfig.siteUrl;t.Z=function(e){var t=e.title,n=void 0===t?"":t,i=e.description,l=void 0===i?"":i,s=e.cover,u=void 0===s?"cover-lg.jpg":s,d=e.type,f=void 0===d?"website":d,h=(0,o.useRouter)(),g=h.basePath,p=h.asPath,x=c+g+p,m=u?c+g+"images/"+u:"",v=n?"Climatescope 2021 | ".concat(n):"Climatescope 2021";return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:v}),(0,a.jsx)("meta",{name:"description",content:l}),(0,a.jsx)("meta",{name:"og:type",content:f}),(0,a.jsx)("meta",{name:"og:url",content:x}),(0,a.jsx)("meta",{name:"og:title",content:v}),(0,a.jsx)("meta",{name:"og:description",content:l}),u&&(0,a.jsx)("meta",{name:"og:image",content:m}),u&&(0,a.jsx)("meta",{name:"image",property:"og:image",content:m}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:url",content:x}),(0,a.jsx)("meta",{name:"twitter:title",content:v}),(0,a.jsx)("meta",{name:"twitter:description",content:l}),u&&(0,a.jsx)("meta",{name:"twitter:image",content:m}),(0,a.jsx)("link",{rel:"canonical",href:x})]})}},2589:function(e,t,n){var r=n(3789),i=n(219),o=n(2809),a=n(7294),c=n(1659),l=n(8527),s=n(7633),u=n(9089),d=n(5162),f=n(3279),h=n.n(f),g=n(793),p=n(4380),x=n(5893),m=["width","height","data"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.data,n=e.x,r=e.x2,i=e.tooltip,o=e.onTooltipShow,a=e.onTooltipHide,l=e.w,s=e.height,u=(0,c.Fg)().colors;return(0,x.jsxs)("g",{children:[(0,x.jsx)("rect",{fill:i.year===t?u.teal[800]:"transparent",fillOpacity:.05,x:n,y:0,width:l,height:s-40,onMouseEnter:function(){o({year:t,x:r})},onMouseLeave:function(){a()}}),(0,x.jsx)("rect",{x:r-1,y:0,width:2,height:s-30,fill:i.year===t?u.teal[900]:"transparent",style:{pointerEvents:"none"}})]})},b=function(e){var t,n=e.width,o=void 0===n?672:n,c=e.height,f=void 0===c?378:c,h=e.data,v=(0,i.Z)(e,m),b=(0,g.Q8)({width:o,height:f}),w=(0,a.useState)({}),O=w[0],S=w[1],z=h.subindicators||[],M=(null===(t=z[0])||void 0===t?void 0:t.units)||"",F=z.reduce((function(e,t){var n=function(e){var t=e.map((function(e){return{year:+e.year,value:parseFloat(e.value)||0}}));return t.reduce((function(e,t){return e+t.value}),0)?t:[]}(t.data);return n.length?[].concat((0,r.Z)(e),[y(y({},t),{},{data:n,isVisible:!0})]):e}),[]),P=v.domainX||(0,u.Z)(F[0].data.map((function(e){return e.year}))),Z=v.domainY||[0,(0,d.Z)(P[1]-P[0]+1).reduce((function(e,t){var n=P[0]+t,r=F.reduce((function(e,t){return e+(t.data.find((function(e){return e.year===n}))||{value:0}).value}),0);return e>r?e:r}),0)],W=(0,g.TT)({type:"linear",domain:P,range:[0,o],padding:[48,20]}),E=(0,g.TT)({type:"linear",domain:[0,Z[1]],range:[f,0],padding:[40,40]}),C=(0,d.Z)(P[1]-P[0]+1).map((function(e){return P[0]+e})),T=(0,g.TT)({type:"band",domain:C,range:[48-(o-68)/C.length/2,o-20+(o-68)/C.length/2],padding:[0,0]}),L=(0,s.Z)().x((function(e){return e.x})).y0((function(e){return e.y0})).y1((function(e){return e.y1})),D=F.map((function(e,t){return y(y({},e),{},{sortKey:"Others"===e.subindicator?0:1+t})})).sort((function(e,t){return e.sortKey-t.sortKey})).reduce((function(e,t){if(t.isVisible){var n=function(e,t,n,r){return t.data.map((function(t){var i,o=(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.find((function(e){return e.year===t.year})))||{y1:r(0)};return y(y({},t),{},{x:n(t.year),y0:o.y1,y1:o.y1-(r(0)-r(t.value))})}))}(e.slice(-1)[0],t,W,E);return[].concat((0,r.Z)(e),[y(y({},t),{},{data:n})])}return e}),[]),R=(0,g.So)({scale:W}),U=(0,g.So)({scale:E,ticks:4}),H={Others:p.O.gray[100],"Biomass & Waste":p.O.green[700],Geothermal:p.O.purple[600],"Small Hydro":p.O.blue[500],Wind:p.O.blue[200],"Solar PV":p.O.yellow[400]},A=(0,a.useCallback)((function(e){var t=D.map((function(t){var n=t.data.find((function(t){return t.year===e.year}))||{};return y({name:t.subindicator,unit:t.units},n)})),n=t.reduce((function(e,t){return e+t.value}),0);S(y(y({},e),{},{data:t.map((function(e){return y(y({},e),{},{percentage:Math.round(100/n*e.value*100)/100})})).reverse()}))}),[D]),K=(0,a.useCallback)((function(){S({})}),[]);return(0,x.jsxs)(l.Kq,{spacing:5,children:[(0,x.jsx)(l.X6,{fontSize:"xl",children:"".concat(h.indicator," (in ").concat(M,")")}),(0,x.jsxs)(l.xu,{position:"relative",children:[(0,x.jsx)(l.xu,{position:"absolute",top:0,zIndex:2,p:4,style:{display:O.year?"block":"none",left:O.x-(O.x>o/2?280:0)||0,width:280,pointerEvents:"none"},children:(0,x.jsxs)(l.Kq,{py:3,bg:"white",boxShadow:"lg",borderRadius:"md",border:"0.0625rem solid",borderColor:"gray.25",spacing:2,children:[(0,x.jsx)(l.xv,{fontWeight:600,lineHeight:"short",px:4,children:"".concat(h.indicator," ").concat(O.year)}),(0,x.jsx)(l.iz,{borderColor:"gray.100",w:"100%"}),(0,x.jsx)(l.Kq,{spacing:2,px:4,children:O.data&&O.data.length&&O.data.map((function(e){return(0,x.jsx)(l.Kq,{spacing:0,children:(0,x.jsxs)(l.Ug,{spacing:4,alignItems:"flex-start",style:{opacity:e.value||e.percentage?1:.3},children:[(0,x.jsx)(l.xu,{w:"1rem",h:"1rem",mt:"0.0625rem",flex:"none",borderRadius:"sm",style:{background:H[e.name],opacity:.75}}),(0,x.jsxs)(l.Kq,{spacing:0,flex:"1",children:[(0,x.jsx)(l.xv,{fontSize:"sm",lineHeight:"shorter",fontWeight:600,children:e.name}),(0,x.jsx)(l.xv,{fontSize:"sm",lineHeight:"shorter",children:"".concat(e.value.toLocaleString("en-US",{maximumFractionDigits:1})," ").concat(e.unit)})]}),(0,x.jsx)(k,{percentage:e.percentage,value:e.value})]})},e.name)}))})]})}),(0,x.jsx)(l.xu,{fontFamily:"mono",children:(0,x.jsxs)("svg",y(y({},b),{},{children:[R.map((function(e){return(0,x.jsxs)("g",{transform:"translate(0, ".concat(f-40,")"),children:[(0,x.jsx)("line",{x1:e.offset,x2:e.offset,y1:0,y2:10,stroke:p.O.gray[100]}),(0,x.jsx)("text",{x:e.offset,y:24,fontSize:"14",textAnchor:"middle",fill:p.O.gray[500],children:e.value})]},e.value)})),U.map((function(e,t){return(0,x.jsxs)("g",{transform:"translate(0, 0)",children:[(0,x.jsx)("line",{x1:0,x2:o-20,y1:e.offset,y2:e.offset,stroke:p.O.gray[100],strokeDasharray:[3,3]}),(0,x.jsxs)("text",{x:0,y:e.offset-5,fontSize:"14",textAnchor:"start",fill:p.O.gray[500],children:[e.value>=1e9?e.value/1e9+"B":e.value>=1e6?e.value/1e6+"M":e.value>=1e3?e.value/1e3+"K":e.value,t===U.length-1?" ".concat(D[0].units||""):""]})]},e.value)})),D.map((function(e,t){return(0,x.jsx)("path",{fill:H[e.subindicator],className:"path",d:L(e.data),stroke:"#FFF",strokeWidth:2,fillOpacity:.75,paintOrder:"stroke fill",onClick:function(){return console.log(h.indicator,e.subindicator,e.data)}},t)})),T.domain().map((function(e){var t=T(e),n=W(e),r=T.bandwidth();return(0,x.jsx)(j,{data:e,x:t,x2:n,w:r,height:f,tooltip:O,onTooltipShow:A,onTooltipHide:K},e)}))]}))})]})]})},w=function(e){var t=(0,a.useRef)(),n=(0,a.useState)({width:672,height:378}),r=n[0],i=n[1];(0,a.useEffect)((function(){var e=h()((function(){var e=t.current.getBoundingClientRect().width;i({width:e,height:e/16*9})}),500);return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var o=(e.data||{}).subindicators;return(0,x.jsx)(l.xu,{ref:t,children:o&&o.length?(0,x.jsx)(b,y(y({},r),e)):null})};function k(e){var t=e.percentage,n=e.value;return(0,x.jsxs)(l.xv,{fontSize:"sm",lineHeight:"shorter",fontWeight:600,children:[n&&t?t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+"%":null,n&&!t?"<0.01%":null,n||t?null:"-"]})}t.Z=(0,a.memo)(w)},8030:function(e,t,n){var r=n(1659),i=n(8527),o=n(4253),a=n(5479),c=n(5893);t.Z=function(e){var t=e.data,n=e.sector,l=e.compact,s=(0,r.Fg)().colors,u=t.filter((function(e){return e.sector===n})).map((function(e){return{text:e.policy,isSelected:"Available"===e.answer.trim()}}));return u.length?(0,c.jsxs)(i.Kq,{spacing:6,children:[(0,c.jsx)(i.X6,{fontSize:"xl",children:"".concat(n," policies")}),(0,c.jsx)(o.Z,{columns:l?1:[1,2,null,3],gridColumnGap:5,gridRowGap:5,children:u.length&&u.map((function(e,t){var n=e.text,r=e.isSelected;return(0,c.jsxs)(i.xu,{position:"relative",p:4,border:"0.125rem solid",borderRadius:"md",fontWeight:600,lineHeight:"shorter",style:{color:r?s.purple[900]:s.gray[700],background:r?s.purple[100]:s.gray[50],borderColor:r?s.purple[500]:s.gray[50]},children:[(0,c.jsx)(i.M5,{position:"absolute",top:0,right:0,transform:"translate(50%, -50%)",w:"1.75rem",h:"1.75rem",bg:"gray.200",borderRadius:"full",border:"0.125rem solid white",color:"white",children:(0,c.jsx)(a.Tw,{size:"1.25rem"})}),n,r&&(0,c.jsx)(i.M5,{position:"absolute",top:0,right:0,transform:"translate(50%, -50%)",w:"1.75rem",h:"1.75rem",bg:"purple.500",borderRadius:"full",border:"0.125rem solid white",color:"white",children:(0,c.jsx)(a.nQ,{size:"1.25rem"})})]},t)}))})]}):(0,c.jsx)(i.xu,{p:4,bg:"gray.50",textAlign:"center",borderRadius:"md",children:"No ".concat(n.toLowerCase()," policies")})}},3672:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(219),i=n(2809),o=n(3789),a=n(7294),c=n(1659),l=n(8527),s=n(4107),u=n(3279),d=n.n(u),f=n(9734),h=n.n(f),g=n(5162),p=n(793),x=n(5049),m=n(5893),v=function(e){var t=e.data,n=e.scaleX,r=e.scaleY,i=(0,c.Fg)().colors,o=(0,x.Z)().x((function(e){return n(e.year)})).y((function(e){return r(e.value)}))(t);return(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{d:o,fill:"none",stroke:"#FFF",strokeWidth:4,strokeLinecap:"round"}),(0,m.jsx)("path",{d:o,fill:"none",stroke:i.teal[600],strokeWidth:2,strokeLinecap:"round"})]})},y=["width","height","data"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){return e.reduce((function(e,t){var n=function(e){return e.reduce((function(t,n,r){if(!t.length)return n.value||0===n.value?[[n]]:t;if(n.value||0===n.value){var i=t.slice(0,-1),a=t.slice(-1)[0]||[];return[].concat((0,o.Z)(i),[[].concat((0,o.Z)(a),[n])])}var c=t.slice(-1)[0];return e.length-1===r?c.length?t:t.slice(0,-1):c.length?[].concat((0,o.Z)(t),[[]]):t}),[])}(t.data.map((function(e){return{year:+e.year,value:parseFloat(e.value)||null}})));return n.length?[].concat((0,o.Z)(e),[b(b({},t),{},{data:n})]):e}),[])}var k=function(e){var t=e.data,n=e.x,r=e.x2,i=e.tooltip,o=e.onTooltipShow,a=e.onTooltipHide,l=e.w,s=e.height,u=(0,c.Fg)().colors;return(0,m.jsxs)("g",{children:[(0,m.jsx)("rect",{fill:i.year===t?u.teal[800]:"transparent",fillOpacity:.05,x:n,y:0,width:l,height:s-40,onMouseEnter:function(){o({year:t,x:r})},onMouseLeave:function(){a()}}),(0,m.jsx)("rect",{x:r-1,y:0,width:2,height:s-30,fill:i.year===t?u.teal[900]:"transparent",style:{pointerEvents:"none"}})]})},O=function(e){var t=e.title,n=e.chart,r=e.width,i=e.height,o=e.scaleX,s=e.scaleY,u=e.scaleBand,d=e.preparedLines,f=(0,c.Fg)().colors,g=(0,a.useState)({}),x=g[0],y=g[1],j=d.map((function(e){return b(b({},e),{},{isVisible:!0})})),w=(0,p.So)({scale:o}),O=(0,p.So)({scale:s,ticks:4}),z=(0,a.useCallback)((function(e){var t=j.map((function(t){var n=t.data.flat().find((function(t){return t.year===e.year}))||{};return b({name:t.subindicator,unit:t.units},n)}));t.reduce((function(e,t){return e||t.year||t.value}),!1)&&y(b(b({},e),{},{data:h()(t,(function(e){return-e.value}))}))}),[j]),M=(0,a.useCallback)((function(){y({})}),[]);return(0,m.jsxs)(l.Kq,{spacing:5,children:[(0,m.jsx)(l.X6,{fontSize:"xl",children:t}),(0,m.jsxs)(l.xu,{position:"relative",children:[(0,m.jsx)(l.xu,{position:"absolute",top:0,zIndex:2,p:4,style:{display:x.year?"block":"none",left:x.x-(x.x>r/2?280:0)||0,width:280,pointerEvents:"none"},children:(0,m.jsxs)(l.Kq,{py:3,bg:"white",boxShadow:"lg",borderRadius:"md",border:"0.0625rem solid",borderColor:"gray.25",spacing:2,children:[(0,m.jsx)(l.xv,{fontWeight:600,lineHeight:"short",px:4,children:"".concat(t," ").concat(x.year)}),(0,m.jsx)(l.iz,{borderColor:"gray.100",w:"100%"}),(0,m.jsx)(l.Kq,{spacing:2,px:4,children:x.data&&x.data.length&&x.data.map((function(e){var t;return(0,m.jsxs)(l.Kq,{spacing:0,children:[(0,m.jsx)(l.xv,{fontSize:"sm",lineHeight:"shorter",fontWeight:600,children:e.name}),(0,m.jsx)(l.xv,{fontSize:"sm",lineHeight:"shorter",children:"".concat((null===(t=e.value)||void 0===t?void 0:t.toLocaleString("en-US"))||""," ").concat(e.unit)})]},e.name)}))})]})}),(0,m.jsxs)("svg",b(b({},n),{},{style:{display:"block"},children:[w.map((function(e){return(0,m.jsxs)("g",{transform:"translate(0, ".concat(i-40,")"),children:[(0,m.jsx)("line",{x1:e.offset,x2:e.offset,y1:0,y2:10,stroke:f.gray[100]}),(0,m.jsx)("text",{x:e.offset,y:24,fontSize:"14",textAnchor:"middle",fill:f.gray[500],children:e.value})]},e.value)})),O.map((function(e,t){return(0,m.jsxs)("g",{transform:"translate(0, 0)",children:[(0,m.jsx)("line",{x1:0,x2:r,y1:e.offset,y2:e.offset,stroke:f.gray[100],strokeDasharray:e.value?[3,3]:[]}),(0,m.jsx)("text",{x:0,y:e.offset-5,fontSize:"14",textAnchor:"start",fill:f.gray[500],children:t===O.length-1?" ".concat(S(e.value,d[0].units)):e.value.toLocaleString("en-US")})]},e.value)})),j.map((function(e){var t=e.data,n=e.subindicator,r=e.isVisible,i=t.flat();return r?(0,m.jsxs)("g",{children:[t.map((function(e,t){return(0,m.jsx)(v,{data:e,scaleX:o,scaleY:s},t)})),i.map((function(e){return(0,m.jsx)("circle",{cx:o(e.year),cy:s(e.value),r:5,fill:f.teal[800],stroke:"#FFF",strokeWidth:2},e.year)}))]},n):null})),u.domain().map((function(e){var t=u(e),n=o(e),r=u.bandwidth();return(0,m.jsx)(k,{data:e,x:t,x2:n,w:r,height:i,tooltip:x,onTooltipShow:z,onTooltipHide:M},e)}))]}))]})]})};function S(e,t){var n=e.toLocaleString("en-US");return{"M USD":"".concat(n," M USD"),"USD/MWh":"".concat(n," USD/MWh")}[t]||n||""}var z=function(e){var t=e.width,n=void 0===t?672:t,i=e.height,c=void 0===i?378:i,u=e.data,d=(0,r.Z)(e,y),f=(0,a.useState)([]),h=f[0],x=f[1],v=null===u||void 0===u?void 0:u.indicator,j=(null===u||void 0===u?void 0:u.subindicators)||[],b=j.reduce((function(e,t){return[].concat((0,o.Z)(e),(0,o.Z)(t.data))}),[]).map((function(e){return{year:+e.year,value:parseFloat(e.value)}})),k=(0,p.Q8)({width:n,height:c}),S=(0,p.UT)(b,"year",d.domainX),z=(0,p.UT)(b,"value",d.domainY),M=(0,p.TT)({type:"linear",domain:S,range:[0,n],padding:[40,40]}),F=(0,p.TT)({type:"linear",domain:[0,z[1]],range:[c,0],padding:[40,20]}),P=(0,g.Z)(S[1]-S[0]+1).map((function(e){return S[0]+e})),Z=(0,p.TT)({type:"band",domain:P,range:[40-(n-80)/P.length/2,n-40+(n-80)/P.length/2],padding:[0,0]});return(0,a.useEffect)((function(){v&&j&&x(w(j))}),[v,j]),h.length?(0,m.jsx)(O,{title:v,chart:k,width:n,height:c,scaleX:M,scaleY:F,scaleBand:Z,preparedLines:h}):(0,m.jsxs)(l.xu,{position:"relative",children:[(0,m.jsx)(l.xu,{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1,children:(0,m.jsx)(s.Od,{startColor:"gray.25",endColor:"gray.100",h:"100%",borderRadius:"md"})}),(0,m.jsx)(l.xu,{position:"relative",zIndex:2,children:(0,m.jsx)(l.oM,{ratio:16/9,children:(0,m.jsx)(l.xu,{color:"gray.500",children:"Loading..."})})})]})},M=function(e){var t=(0,a.useRef)(),n=(0,a.useState)({width:672,height:378}),r=n[0],i=n[1];return(0,a.useEffect)((function(){var e=d()((function(){var e=t.current.getBoundingClientRect().width;i({width:e,height:e/16*9})}),500);return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,m.jsx)(l.xu,{ref:t,children:(0,m.jsx)(z,b(b({},r),e))})}},793:function(e,t,n){n.d(t,{Q8:function(){return c},UT:function(){return l},TT:function(){return u},So:function(){return d}});var r=n(7294),i=n(9089),o=n(7086),a=n(5046);function c(e){var t=e.width,n=e.height;return{viewBox:"0 0 ".concat(t," ").concat(n)}}function l(e,t,n){return(0,r.useMemo)((function(){return n||(0,i.Z)(e,(function(e){return e[t]}))}),[e,t,n])}var s={linear:o.Z,band:a.Z};function u(e){var t=e.type,n=void 0===t?"linear":t,i=e.domain,o=e.range,a=e.padding,c=void 0===a?[0,0]:a,l=s[n],u=o[0]<=o[1];return(0,r.useCallback)(l().domain(i).range([u?o[0]+c[0]:o[0]-c[0],u?o[1]-c[1]:o[1]+c[1]]),[i,o,n,c])}function d(e){var t=e.scale,n=e.ticks,i=void 0===n?6:n;return(0,r.useMemo)((function(){return t.nice().ticks(i).map((function(e){return{value:e,offset:t(e),line:{}}}))}),[t])}}}]);