(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{222:function(e,t,n){},285:function(e,t,n){},310:function(e,t){},436:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),i=n.n(c),s=(n(222),n(472)),o=n(475),l=n(477),u=n(0),d=n.n(u),b=n(3),j=n(19),p=n(63),h=n.n(p),f=n(190),g=n.n(f),m=n(72),O=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},x=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},y=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},k=n(43),w=n(191),C=n(45),S=(n(274),n(437),{apiKey:"AIzaSyAMFrL931n199DjOmJdGgw5JEdVP-gBtVo",authDomain:"crypto-analytics-f3d8a.firebaseapp.com",projectId:"crypto-analytics-f3d8a",storageBucket:"crypto-analytics-f3d8a.appspot.com",messagingSenderId:"404052109230",appId:"1:404052109230:web:c39ca70dcea3cbd6a14a3f"}),N=Object(w.a)(S),_=Object(k.c)(N),I=Object(C.b)(N),D=n(9),F=Object(a.createContext)(),W=function(e){var t=e.children,n=Object(a.useState)("INR"),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)("\u20b9"),o=Object(j.a)(s,2),l=o[0],u=o[1],p=Object(a.useState)({open:!1,message:"",type:"success"}),f=Object(j.a)(p,2),g=f[0],m=f[1],x=Object(a.useState)(null),v=Object(j.a)(x,2),y=v[0],w=v[1],S=Object(a.useState)([]),N=Object(j.a)(S,2),W=N[0],A=N[1],M=Object(a.useState)(!1),P=Object(j.a)(M,2),T=P[0],R=P[1],L=Object(a.useState)([]),E=Object(j.a)(L,2),B=E[0],z=E[1];Object(a.useEffect)((function(){if(y){var e=Object(C.a)(I,"watchlist",null===y||void 0===y?void 0:y.uid),t=Object(C.c)(e,(function(e){e.exists()?(console.log(e.data().coins),z(e.data().coins)):console.log("No Items in Watchlist")}));return function(){t()}}}),[y]),Object(a.useEffect)((function(){Object(k.d)(_,(function(e){w(e||null)}))}),[]);var U=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,h.a.get(O(c));case 3:t=e.sent,n=t.data,A(n),R(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){"INR"===c?u("\u20b9"):"USD"===c&&u("$"),U()}),[c]),Object(D.jsx)(F.Provider,{value:{currency:c,setCurrency:i,symbol:l,alert:g,setAlert:m,user:y,coins:W,loading:T,watchlist:B},children:t})},A=function(){return Object(a.useContext)(F)},M=n(498),P=n(201),T=n(474),R=n(500),L=n(481),E=n(439),B=n(482),z=n(483),U=n(484),H=n(485),Y=n(486),J=n(487),V=n(30);function G(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function K(){var e,t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(1),u=Object(j.a)(i,2),d=u[0],b=u[1],p=A(),h=p.symbol,f=p.coins,g=p.loading,m=Object(s.a)({row:{backgroundColor:"#020f35",cursor:"pointer","&:hover":{backgroundColor:"#16171a"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"#baeb0b"}}})(),O=Object(V.e)(),x=Object(P.a)({palette:{primary:{main:"#fff"},type:"dark"}}),v=function(){return f.filter((function(e){return e.name.toLowerCase().includes(r)||e.symbol.toLowerCase().includes(r)}))};return Object(D.jsx)(T.a,{theme:x,children:Object(D.jsxs)(o.a,{style:{textAlign:"center"},children:[Object(D.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(D.jsx)(R.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return c(e.target.value)}}),Object(D.jsx)(L.a,{component:E.a,children:g?Object(D.jsx)(B.a,{style:{backgroundColor:"#baeb0b"}}):Object(D.jsxs)(z.a,{"aria-label":"simple table",children:[Object(D.jsx)(U.a,{style:{backgroundColor:"#baeb0b"},children:Object(D.jsx)(H.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(D.jsx)(Y.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"left":"right",children:e},e)}))})}),Object(D.jsx)(J.a,{children:v().slice(10*(d-1),10*(d-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(D.jsxs)(H.a,{onClick:function(){return O.push("/coins/".concat(e.id))},className:m.row,children:[Object(D.jsxs)(Y.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(D.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(D.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(D.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(D.jsxs)(Y.a,{align:"right",children:[h," ",G(e.current_price.toFixed(2))]}),Object(D.jsxs)(Y.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(D.jsxs)(Y.a,{align:"right",children:[h," ",G(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(D.jsx)(M.a,{count:parseInt(((null===(e=v())||void 0===e?void 0:e.length)/10).toFixed(0)),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:m.pagination},onChange:function(e,t){b(t),window.scroll(0,450)}})]})})}var $=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],c=A(),i=c.currency,o=c.symbol,l=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(y(i));case 2:t=e.sent,n=t.data,console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var u=Object(s.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),p=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(D.jsxs)(m.b,{className:u.carouselItem,to:"/coins/".concat(e.id),children:[Object(D.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(D.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(D.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(D.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[o," ",G(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(D.jsx)("div",{className:u.carousel,children:Object(D.jsx)(g.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:p,autoPlay:!0})})},q=Object(s.a)((function(e){return{banner:{backgroundImage:"url(https://wallpaperaccess.com/full/1567665.png)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var Q=function(){var e=q();return Object(D.jsx)("div",{className:e.banner,children:Object(D.jsxs)(o.a,{className:e.bannerContent,children:[Object(D.jsxs)("div",{className:e.tagline,children:[Object(D.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Analytics\ud83d\udcc9"}),Object(D.jsx)(l.a,{variant:"subtitle2",style:{color:"grey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Track and Have detailed analysis of your Favorite CryptoCurrency"})]}),Object(D.jsx)($,{})]})})},X=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Q,{}),Object(D.jsx)(K,{})]})},Z=(n(285),n(6)),ee=n(22),te=n(489),ne=n(197),ae=n.n(ne),re=n(203),ce=n(488),ie=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(s.a)({selectbutton:{border:"1px solid grey",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"#baeb0b":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"#baeb0b",color:"black"},width:"22%"}})();return Object(D.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},se=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],oe=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(j.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(1),l=Object(j.a)(o,2),u=l[0],p=l[1],f=A().currency,g=Object(s.a)((function(e){return{container:Object(Z.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),m=function(){var e=Object(b.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(v(t.id,u,f));case 2:n=e.sent,a=n.data,i(a.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[u,f]);var O=Object(P.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(D.jsx)(T.a,{theme:O,children:Object(D.jsx)("div",{className:g.container,children:c?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(re.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===u?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(u," Days ) in ").concat(f),borderColor:"#baeb0b"}]},options:{elements:{point:{radius:1}}}}),Object(D.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:se.map((function(e){return Object(D.jsx)(ie,{onClick:function(){return p(e.value)},selected:e.value===u,children:e.label},e.value)}))})]}):Object(D.jsx)(ce.a,{style:{color:"#baeb0b"},size:250,thickness:1})})})},le=function(){var e=Object(V.f)().id,t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],c=n[1],i=A(),o=i.currency,u=i.symbol,p=i.user,f=i.setAlert,g=i.watchlist,m=function(){var t=Object(b.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(x(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=g.includes(null===r||void 0===r?void 0:r.id),v=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(C.a)(I,"watchlist",p.uid),e.prev=1,e.next=4,Object(C.d)(t,{coins:g?[].concat(Object(ee.a)(g),[null===r||void 0===r?void 0:r.id]):[null===r||void 0===r?void 0:r.id]},{merge:!0});case 4:f({open:!0,message:"".concat(r.name," Added to the Watchlist \ud83d\udc40. We'll keep our \ud83d\udc40 on it!"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(C.a)(I,"watchlist",p.uid),e.prev=1,e.next=4,Object(C.d)(t,{coins:g.filter((function(e){return e!==(null===r||void 0===r?void 0:r.id)}))},{merge:!0});case 4:f({open:!0,message:"".concat(r.name," Removed from the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[]);var k=Object(s.a)((function(e){var t,n;return{container:Object(Z.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(Z.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(Z.a)(t,"display","flex"),Object(Z.a)(t,"flexDirection","column"),Object(Z.a)(t,"alignItems","center"),Object(Z.a)(t,"marginTop",25),Object(Z.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(Z.a)(n,e.breakpoints.down("md"),{display:"flex",flexDirection:"column",alignItems:"center"}),Object(Z.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return r?Object(D.jsxs)("div",{className:k.container,children:[Object(D.jsxs)("div",{className:k.sidebar,children:[Object(D.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(D.jsx)(l.a,{variant:"h3",className:k.heading,children:null===r||void 0===r?void 0:r.name}),Object(D.jsxs)(l.a,{variant:"subtitle1",className:k.description,children:[ae()(null===r||void 0===r?void 0:r.description.en.split(". ")[0]),"."]}),Object(D.jsxs)("div",{className:k.marketData,children:[Object(D.jsxs)("span",{style:{display:"flex"},children:[Object(D.jsx)(l.a,{variant:"h5",className:k.heading,children:"Rank:"}),"\xa0 \xa0",Object(D.jsx)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:G(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(D.jsxs)("span",{style:{display:"flex"},children:[Object(D.jsx)(l.a,{variant:"h5",className:k.heading,children:"Current Price:"}),"\xa0 \xa0",Object(D.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[u," ",G(null===r||void 0===r?void 0:r.market_data.current_price[o.toLowerCase()])]})]}),Object(D.jsxs)("span",{style:{display:"flex"},children:[Object(D.jsx)(l.a,{variant:"h5",className:k.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(D.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[u," ",G(null===r||void 0===r?void 0:r.market_data.market_cap[o.toLowerCase()].toString().slice(0,-6)),"M"]})]}),p&&Object(D.jsx)(te.a,{variant:"outlined",style:{width:"100%",height:40,backgroundColor:O?"#ff0000":"#baeb0b"},onClick:O?y:v,children:O?"Remove from Watchlist":"Add to Watchlist"})]})]}),Object(D.jsx)(oe,{coin:r})]}):Object(D.jsx)(B.a,{style:{backgroundColor:"#baeb0b"}})},ue=n(491),de=n(493),be=n(495),je=n(505),pe=n(499),he=n(490),fe=n(440),ge=n(496),me=n(492),Oe=n(494),xe=function(e){var t=e.handleClose,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),l=o[0],u=o[1],p=Object(a.useState)(""),h=Object(j.a)(p,2),f=h[0],g=h[1],m=A().setAlert,O=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l===f){e.next=3;break}return m({open:!0,message:"Big Error \u2013 Screwed up big time. Just kidding: Passwords do not match. Please check again.",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(k.b)(_,c,l);case 6:n=e.sent,m({open:!0,message:"Sign Up Successful.Your day's just about to get better unless you've just had sex. Welcome ".concat(n.user.email," to Crypto Analytics\ud83d\udcc9"),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),m({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(Oe.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(D.jsx)(R.a,{variant:"outlined",type:"email",label:"Enter Email",value:c,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(D.jsx)(R.a,{variant:"outlined",label:"Enter Password",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(D.jsx)(R.a,{variant:"outlined",label:"Confirm Password",type:"password",value:f,onChange:function(e){return g(e.target.value)},fullWidth:!0}),Object(D.jsx)(te.a,{variant:"contained",size:"large",style:{backgroundColor:"#baeb0b"},onClick:O,children:"Sign Up"})]})},ve=function(e){var t=e.handleClose,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),l=o[0],u=o[1],p=A().setAlert,h=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c&&l){e.next=3;break}return p({open:!0,message:"Uh Oh \u2013 Internal Error \u2013 Computers are caring too.Please fill all the Fields to have a GoodDay",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(k.e)(_,c,l);case 6:n=e.sent,p({open:!0,message:"Log-in Successful.You're now logged in.Your day's just about to get better unless you've just had sex. Welcome ".concat(n.user.email," to Crypto Analytics \ud83d\udcc9."),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),p({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(Oe.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(D.jsx)(R.a,{variant:"outlined",type:"email",label:"Enter Email",value:c,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(D.jsx)(R.a,{variant:"outlined",label:"Enter Password",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(D.jsx)(te.a,{variant:"contained",size:"large",onClick:h,style:{backgroundColor:"#baeb0b"},children:"Login"})]})},ye=n(200),ke=n.n(ye),we=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,color:"#baeb0b",border:"2px solid #000",boxShadow:e.shadows[5],borderRadius:10,padding:e.spacing(2,4,3)},google:{padding:24,paddingTop:0,display:"flex",flexDirection:"column",textAlign:"center",gap:20,fontSize:20}}}));function Ce(){var e=we(),t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],i=A().setAlert,s=function(){c(!1)},o=Object(a.useState)(0),l=Object(j.a)(o,2),u=l[0],d=l[1],b=new k.a;return Object(D.jsxs)("div",{children:[Object(D.jsx)(te.a,{variant:"contained",style:{width:85,height:40,marginLeft:15,backgroundColor:"#baeb0b"},onClick:function(){c(!0)},children:"Login"}),Object(D.jsx)(pe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:r,onClose:s,closeAfterTransition:!0,BackdropComponent:he.a,BackdropProps:{timeout:700},children:Object(D.jsx)(fe.a,{in:r,children:Object(D.jsxs)("div",{className:e.paper,children:[Object(D.jsx)(ue.a,{position:"static",style:{backgroundColor:"transparent",color:"#baeb0b"},children:Object(D.jsxs)(ge.a,{value:u,onChange:function(e,t){d(t)},variant:"fullWidth",style:{borderRadius:20},children:[Object(D.jsx)(me.a,{label:"Login"}),Object(D.jsx)(me.a,{label:"Sign Up"})]})}),0===u&&Object(D.jsx)(ve,{handleClose:s}),1===u&&Object(D.jsx)(xe,{handleClose:s}),Object(D.jsxs)(Oe.a,{className:e.google,children:[Object(D.jsx)("span",{children:"OR"}),Object(D.jsx)(ke.a,{style:{width:"100%",outline:"none"},onClick:function(){Object(k.f)(_,b).then((function(e){i({open:!0,message:"hurrah!!!\ud83c\udf89 Sign Up Successful. Welcome to Crypto-Analytics ".concat(e.user.email),type:"success"}),s()})).catch((function(e){i({open:!0,message:e.message,type:"error"})}))}})]})]})})})]})}var Se=n(52),Ne=n(504),_e=n(503),Ie=n(202),De=Object(s.a)({container:{width:350,padding:25,height:"100%",display:"flex",flexDirection:"column",fontFamily:"monospace"},profile:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",height:"92%"},logout:{height:"8%",width:"100%",backgroundColor:"#baeb0b",marginTop:20},picture:{width:200,height:200,cursor:"pointer",backgroundColor:"#baeb0b",objectFit:"contain"},watchlist:{flex:1,width:"100%",backgroundColor:"grey",borderRadius:10,padding:15,paddingTop:10,display:"flex",flexDirection:"column",alignItems:"center",gap:12,overflowY:"scroll"},coin:{padding:10,borderRadius:5,color:"black",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#baeb0b",boxShadow:"0 0 3px black"}});function Fe(){var e=De(),t=r.a.useState({right:!1}),n=Object(j.a)(t,2),a=n[0],c=n[1],i=A(),s=i.user,o=i.setAlert,l=i.watchlist,u=i.coins,p=i.symbol;console.log(l,u);var h=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(Se.a)(Object(Se.a)({},a),{},Object(Z.a)({},e,t)))}},f=function(){Object(k.g)(_),o({open:!0,type:"success",message:"You have been Logout Successfully !!Thanks for Visiting Us\u2764\ufe0f"}),h()},g=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(I,"watchlist",s.uid),e.prev=1,e.next=4,Object(C.d)(n,{coins:l.filter((function(e){return e!==(null===t||void 0===t?void 0:t.id)}))},{merge:!0});case 4:o({open:!0,message:"".concat(t.name," Removed from the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),o({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{children:["right"].map((function(t){return Object(D.jsxs)(r.a.Fragment,{children:[Object(D.jsx)(_e.a,{onClick:h(t,!0),style:{height:38,width:38,marginLeft:15,cursor:"pointer",backgroundColor:"#baeb0b"},src:s.photoURL,alt:s.displayName||s.email}),Object(D.jsx)(Ne.a,{anchor:t,open:a[t],onClose:h(t,!1),children:Object(D.jsxs)("div",{className:e.container,children:[Object(D.jsxs)("div",{className:e.profile,children:[Object(D.jsx)(_e.a,{className:e.picture,src:s.photoURL,alt:s.displayName||s.email}),Object(D.jsx)("span",{style:{width:"100%",fontSize:25,textAlign:"center",fontWeight:"bolder",wordWrap:"break-word"},children:s.displayName||s.email}),Object(D.jsxs)("div",{className:e.watchlist,children:[Object(D.jsx)("span",{style:{fontSize:15,textShadow:"0 0 5px black"},children:"Watchlist"}),u.map((function(t){return l.includes(t.id)?Object(D.jsxs)("div",{className:e.coin,children:[Object(D.jsx)("span",{children:t.name}),Object(D.jsxs)("span",{style:{display:"flex",gap:8},children:[p," ",G(t.current_price.toFixed(2)),Object(D.jsx)(Ie.a,{style:{cursor:"pointer"},fontSize:"16",onClick:function(){return g(t)}})]})]}):Object(D.jsx)(D.Fragment,{})}))]})]}),Object(D.jsx)(te.a,{variant:"contained",className:e.logout,onClick:f,children:"Log Out"})]})})]},t)}))})}var We=Object(s.a)((function(e){return{title:{flex:1,color:"#baeb0b",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),Ae=Object(P.a)({palette:{primary:{main:"#fff"},type:"dark"}});var Me=function(){var e=We(),t=A(),n=t.currency,a=t.setCurrency,r=t.user,c=Object(V.e)();return Object(D.jsx)(T.a,{theme:Ae,children:Object(D.jsx)(ue.a,{color:"transparent",position:"static",children:Object(D.jsx)(o.a,{children:Object(D.jsxs)(de.a,{children:[Object(D.jsx)(l.a,{onClick:function(){return c.push("/")},variant:"h6",className:e.title,children:"Crypto Analytics\ud83d\udcc9"}),Object(D.jsxs)(be.a,{variant:"outlined",labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,style:{width:85,height:40},onChange:function(e){return a(e.target.value)},children:[Object(D.jsx)(je.a,{value:"Please select the currency",disabled:!0,selected:!0,children:"Select Currency"}),Object(D.jsx)(je.a,{value:"USD",children:"USD"}),Object(D.jsx)(je.a,{value:"INR",children:"INR"})]}),r?Object(D.jsx)(Fe,{}):Object(D.jsx)(Ce,{})]})})})})},Pe=n(501),Te=n(497),Re=function(){var e=A(),t=e.alert,n=e.setAlert,a=function(e,t){"clickaway"!==t&&n({open:!1})};return Object(D.jsx)(Pe.a,{open:t.open,autoHideDuration:3e3,onClose:a,children:Object(D.jsx)(Te.a,{onClose:a,elevation:10,variant:"filled",severity:t.type,children:t.message})})},Le=Object(s.a)((function(){return{App:{backgroundColor:"#020f35",color:"white",minHeight:"100vh"}}}));var Ee=function(){var e=Le();return Object(D.jsxs)(m.a,{children:[Object(D.jsxs)("div",{className:e.App,children:[Object(D.jsx)(Me,{}),Object(D.jsx)(V.a,{path:"/",component:X,exact:!0}),Object(D.jsx)(V.a,{path:"/coins/:id",component:le,exact:!0})]}),Object(D.jsx)(Re,{})]})};n(435);i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(W,{children:Object(D.jsx)(Ee,{})})}),document.getElementById("root"))}},[[436,1,2]]]);
//# sourceMappingURL=main.964019ed.chunk.js.map