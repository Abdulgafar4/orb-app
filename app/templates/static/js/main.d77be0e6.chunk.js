(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{454:function(e,a,t){e.exports=t(630)},459:function(e,a,t){},630:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),o=t.n(c),l=(t(459),t(731)),m=t(730),i=t(408),s=t(732),u=t(743),E=t(734),p=t(714),d=t(715),g=t(716),b=t(744),y=t(632),h=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id  ".concat(e.id,". Name:  ").concat(e.name," ")},secondaryText:function(e){return"Cost_Price:  ".concat(e.Cost_price," ")},tertiaryText:function(e){return"Selling_Price:  ".concat(e.Selling_price,"....  Stock:  ").concat(e.stock," ")}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"name"}),r.a.createElement(p.a,{source:"category"}),r.a.createElement(p.a,{source:"Cost_price"}),r.a.createElement(p.a,{source:"Selling_price"}),r.a.createElement(p.a,{source:"stock"}),r.a.createElement(d.a,{label:"Published",source:"publishedAt"}),r.a.createElement(g.a,{basePath:"product"}),r.a.createElement(b.a,{basePath:"product"})))},f=t(740),_=t(736),v=t(719),P=t(746),x=t(720),S=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Product"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"Cost_price"}),r.a.createElement(P.a,{source:"Selling_price"}),r.a.createElement(P.a,{source:"stock"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},I=t(737),A=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Product"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"Cost_price"}),r.a.createElement(P.a,{source:"Selling_price"}),r.a.createElement(P.a,{source:"stock"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},w={login:function(e){var a=e.username,t=e.password;return"orb"===a&&"abdulrauf"===t?(localStorage.removeItem("authenticated"),localStorage.removeItem("role"),localStorage.setItem("login","orb"),localStorage.setItem("user","Admin"),localStorage.setItem("avatar","data:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0srMeYDswvR105qA8JfqIOYPiYHu2tY-qA&usqp=CAU"),Promise.resolve()):"Abdul"===a&&"aa11ss22"===t?(localStorage.setItem("role","user"),localStorage.removeItem("not_authenticated"),localStorage.setItem("login","user"),localStorage.setItem("user","Management"),localStorage.setItem("avatar","data:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0srMeYDswvR105qA8JfqIOYPiYHu2tY-qA&usqp=CAU"),Promise.resolve()):"admin"===a&&"password"===t?(localStorage.setItem("role","admin"),localStorage.removeItem("not_authenticated"),localStorage.setItem("login","admin"),localStorage.setItem("user","Dennis Nedry"),localStorage.setItem("avatar"),Promise.resolve()):(localStorage.setItem("not_authenticated",!0),Promise.reject())},logout:function(){return localStorage.setItem("not_authenticated",!0),localStorage.removeItem("role"),localStorage.removeItem("login"),localStorage.removeItem("user"),localStorage.removeItem("avatar"),Promise.resolve()},checkError:function(e){var a=e.status;return 401===a||403===a?Promise.reject():Promise.resolve()},checkAuth:function(){return localStorage.getItem("not_authenticated")?Promise.reject():Promise.resolve()},getPermissions:function(){var e=localStorage.getItem("role");return Promise.resolve(e)},getIdentity:function(){return{id:localStorage.getItem("login"),fullName:localStorage.getItem("user")}}},O=t(410),T=t.n(O),j=t(214),C=t(384),k=t(5),N=t(275),M=t(725),D=t(735),q=t(99),B=t(726),F=t(727),R=t(637),Y=t(724),J=t(47),G=t(745),H=t(733),z=t(394),L=t(395),V=t(79),K=t(415);function U(e){return r.a.createElement(q.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function W(e,a){return{time:e,amount:a}}var $=[W("00:00",0),W("03:00",300),W("06:00",600),W("09:00",800),W("12:00",1500),W("15:00",2e3),W("18:00",2400),W("21:00",2400),W("24:00",void 0)];function Q(){var e=Object(J.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"Today"),r.a.createElement(G.a,null,r.a.createElement(H.a,{data:$,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(z.a,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(L.a,{stroke:e.palette.text.secondary},r.a.createElement(V.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(K.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function X(e){e.preventDefault()}var Z=Object(N.a)({depositContext:{flex:1}});function ee(){var e=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"Recent Deposits"),r.a.createElement(q.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(q.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(Y.a,{color:"primary",href:"#",onClick:X},"View balance")))}var ae=t(712),te=t(710),ne=t(703),re=t(713),ce=t(711);function oe(e,a,t,n,r,c){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:c}}var le=[oe(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),oe(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),oe(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),oe(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),oe(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function me(e){e.preventDefault()}var ie=Object(N.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function se(){var e=ie();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"Recent Orders"),r.a.createElement(ae.a,{size:"small"},r.a.createElement(re.a,null,r.a.createElement(ce.a,null,r.a.createElement(ne.a,null,"Date"),r.a.createElement(ne.a,null,"Name"),r.a.createElement(ne.a,null,"Ship To"),r.a.createElement(ne.a,null,"Payment Method"),r.a.createElement(ne.a,{align:"right"},"Sale Amount"))),r.a.createElement(te.a,null,le.map((function(e){return r.a.createElement(ce.a,{key:e.id},r.a.createElement(ne.a,null,e.date),r.a.createElement(ne.a,null,e.name),r.a.createElement(ne.a,null,e.shipTo),r.a.createElement(ne.a,null,e.paymentMethod),r.a.createElement(ne.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(Y.a,{color:"primary",href:"#",onClick:me},"See more orders")))}function ue(){return r.a.createElement(q.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Y.a,{color:"inherit",href:"/"},"ORB POS")," ",(new Date).getFullYear(),".")}var Ee=Object(N.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(C.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(j.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function pe(){var e=Ee(),a=Object(k.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(B.a,{maxWidth:"lg",className:e.container},r.a.createElement(F.a,{container:!0,spacing:3},r.a.createElement(F.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(R.a,{className:a},r.a.createElement(Q,null))),r.a.createElement(F.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(R.a,{className:a},r.a.createElement(ee,null))),r.a.createElement(F.a,{item:!0,xs:12},r.a.createElement(R.a,{className:e.paper},r.a.createElement(se,null)))),r.a.createElement(D.a,{pt:4},r.a.createElement(ue,null)))))}var de=t(173),ge=t.n(de),be=t(728),ye=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id  ".concat(e.id,". Name:  ").concat(e.name," ")},secondaryText:function(e){return"Number: ".concat(e.phone_number,"....  \n        Email:  ").concat(e.email," ")}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"name"}),r.a.createElement(p.a,{source:"email"}),r.a.createElement(be.a,{source:"phone_number"}),r.a.createElement(g.a,{basePath:"customer"}),r.a.createElement(b.a,{basePath:"customer"})))},he=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Customer"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},fe=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Customer"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},_e=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id)},secondaryText:function(e){return"Category: ".concat(e.category)},tertiaryText:function(e){return new Date(e.publishedAt).toLocaleDateString()}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"category"}),r.a.createElement(d.a,{source:"publishedAt"}),r.a.createElement(g.a,{basePath:"category"}),r.a.createElement(b.a,{basePath:"category"})))},ve=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Category"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"category"})))},Pe=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Category"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},xe=t(409),Se=t.n(xe),Ie=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id,". Name:  ").concat(e.name," ")},secondaryText:function(e){return"Number: ".concat(e.phone_number,"....  \n        Email:  ").concat(e.email," ")},tertiaryText:function(e){return"Company_Name: ".concat(e.company_name," ")}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"name"}),r.a.createElement(p.a,{source:"company_name"}),r.a.createElement(p.a,{source:"email"}),r.a.createElement(be.a,{source:"phone_number"}),r.a.createElement(g.a,{basePath:"suppliers"}),r.a.createElement(b.a,{basePath:"suppliers"})))},Ae=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Suppliers"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"company_name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},we=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Suppliers"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"company_name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},Oe=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id,". Category:  ").concat(e.category,".... Description:  ").concat(e.description," ")},secondaryText:function(e){return"Amount: ".concat(e.amount,"....  \n        Payment Type:  ").concat(e.payment_type,"....  Tax:  ").concat(e.tax,".... ")},tertiaryText:function(e){return"Recipient: ".concat(e.recipient_name,".... Approved By: ").concat(e.approved_by," ... \n        Date: ").concat(e.publishedAt,"  ")}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"category"}),r.a.createElement(p.a,{source:"description"}),r.a.createElement(p.a,{source:"amount"}),r.a.createElement(p.a,{source:"payment_type"}),r.a.createElement(p.a,{source:"tax"}),r.a.createElement(p.a,{source:"recipient_name"}),r.a.createElement(p.a,{source:"approved_by"}),r.a.createElement(d.a,{label:"Published",source:"publishedAt"}),r.a.createElement(g.a,{basePath:"expenses"}),r.a.createElement(b.a,{basePath:"expenses"})))},Te=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Expenses"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:"amount"}),r.a.createElement(P.a,{source:"payment_type"}),r.a.createElement(P.a,{source:"tax"}),r.a.createElement(P.a,{source:"recipient_name"}),r.a.createElement(P.a,{source:"approved_by"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},je=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Expenses"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:"amount"}),r.a.createElement(P.a,{source:"payment_type"}),r.a.createElement(P.a,{source:"tax"}),r.a.createElement(P.a,{source:"recipient_name"}),r.a.createElement(P.a,{source:"approved_by"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},Ce=t(411),ke=t.n(Ce),Ne=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id  ".concat(e.id,". Name:  ").concat(e.name," ")},secondaryText:function(e){return"Number: ".concat(e.phone_number,"....  \n        Email:  ").concat(e.email," ")}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"name"}),r.a.createElement(p.a,{source:"email"}),r.a.createElement(be.a,{source:"phone_number"}),r.a.createElement(g.a,{basePath:"employee"}),r.a.createElement(b.a,{basePath:"employee"})))},Me=function(e){return r.a.createElement(f.a,Object.assign({title:"Create  Employee"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},De=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Exployee"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"name"}),r.a.createElement(P.a,{source:"email"}),r.a.createElement(P.a,{source:"phone_number"})))},qe=t(729),Be=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit Appointment"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"appointment_For_Person"}),r.a.createElement(P.a,{source:"appointment_For_Employee"}),r.a.createElement(qe.a,{source:"appointment_Date"}),r.a.createElement(P.a,{source:"appointment_Start"}),r.a.createElement(P.a,{source:"appointment_End"}),r.a.createElement(P.a,{source:"type"}),r.a.createElement(P.a,{multiline:!0,source:"notes"})))},Fe=function(e){return r.a.createElement(f.a,Object.assign({title:"Create  Employee"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"appointment_For_Person"}),r.a.createElement(P.a,{source:"appointment_For_Employee"}),r.a.createElement(qe.a,{source:"appointment_Date"}),r.a.createElement(P.a,{source:"appointment_Start"}),r.a.createElement(P.a,{source:"appointment_End"}),r.a.createElement(P.a,{source:"type"}),r.a.createElement(P.a,{multiline:!0,source:"notes"})))},Re=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id,"....  Person: ").concat(e.appointment_For_Person,"....  Employee: ").concat(e.appointment_For_Employee)},secondaryText:function(e){return"Date:  ".concat(e.appointment_Date,"....   Start: ").concat(e.appointment_Start,".... End: ").concat(e.appointment_End)},tertiaryText:function(e){return"Type: ".concat(e.type,"....  Notes: ").concat(e.notes)}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"appointment_For_Person"}),r.a.createElement(p.a,{source:"appointment_For_Employee"}),r.a.createElement(d.a,{source:"appointment_Date"}),r.a.createElement(p.a,{source:"appointment_Start"}),r.a.createElement(p.a,{source:"appointment_End"}),r.a.createElement(p.a,{source:"type"}),r.a.createElement(p.a,{source:"notes"}),r.a.createElement(g.a,{basePath:"appointments"}),r.a.createElement(b.a,{basePath:"appointments"})))},Ye=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id,"... Product: ").concat(e.product_name,"...  Category: ").concat(e.category)},secondaryText:function(e){return"Amount Remain: ".concat(e.amount_remain,"...  Qty: ").concat(e.qty,"...  Amount Paid:  ").concat(e.amount_paid," ")},tertiaryText:function(e){return"Price: ".concat(e.price,"...  Total Amount: ").concat(e.total_amount,"...  Date: ").concat(e.publishedAt)}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"product_name"}),r.a.createElement(p.a,{source:"category"}),r.a.createElement(p.a,{source:"description"}),r.a.createElement(p.a,{source:"price"}),r.a.createElement(p.a,{source:"qty"}),r.a.createElement(p.a,{source:"amount_paid"}),r.a.createElement(p.a,{source:"amount_remain"}),r.a.createElement(p.a,{source:"total_amount"}),r.a.createElement(d.a,{label:"Published",source:"publishedAt"}),r.a.createElement(g.a,{basePath:"credit"}),r.a.createElement(b.a,{basePath:"credit"})))},Je=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Credit Sales"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"product_name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:"price"}),r.a.createElement(P.a,{source:"qty"}),r.a.createElement(P.a,{source:"amount_paid"}),r.a.createElement(P.a,{source:"amount_remain"}),r.a.createElement(P.a,{source:"total_amount"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},Ge=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit a Credit Sales"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"product_name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:"price"}),r.a.createElement(P.a,{source:"qty"}),r.a.createElement(P.a,{source:"amount_paid"}),r.a.createElement(P.a,{source:"amount_remain"}),r.a.createElement(P.a,{source:"total_amount"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},He=t(274),ze=t.n(He),Le=function(e){var a=Object(y.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(s.a,e,a?r.a.createElement(u.a,{primaryText:function(e){return"Id ".concat(e.id,"...  Product: ").concat(e.product_name,".... Category: ").concat(e.category)},secondaryText:function(e){return"Price: ".concat(e.price,"  Qty: ").concat(e.qty,"....  Amount: ").concat(e.amount)},tertiaryText:function(e){return"Profit: ".concat(e.profit,"... Total: ").concat(e.total,"....  Date: ").concat(e.publishedAt)}}):r.a.createElement(E.a,null,r.a.createElement(p.a,{source:"id"}),r.a.createElement(p.a,{source:"product_name"}),r.a.createElement(p.a,{source:"category"}),r.a.createElement(p.a,{source:"description"}),r.a.createElement(p.a,{source:"price"}),r.a.createElement(p.a,{source:"qty"}),r.a.createElement(p.a,{source:"amount"}),r.a.createElement(p.a,{source:"profit"}),r.a.createElement(p.a,{source:"total"}),r.a.createElement(d.a,{label:"Published",source:"publishedAt"}),r.a.createElement(g.a,{basePath:"sales"}),r.a.createElement(b.a,{basePath:"sales"})))},Ve=function(e){return r.a.createElement(f.a,Object.assign({title:"Create a Sales"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{source:"id"}),r.a.createElement(P.a,{source:"product_name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:" price"}),r.a.createElement(P.a,{source:"qty"}),r.a.createElement(P.a,{source:"amount"}),r.a.createElement(P.a,{source:"profit"}),r.a.createElement(P.a,{source:"total"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))},Ke=function(e){return r.a.createElement(I.a,Object.assign({title:"Edit a Sales"},e),r.a.createElement(_.a,null,r.a.createElement(v.a,{disabled:!0,source:"id"}),r.a.createElement(P.a,{source:"product_name"}),r.a.createElement(P.a,{source:"category"}),r.a.createElement(P.a,{source:"description"}),r.a.createElement(P.a,{source:"price"}),r.a.createElement(P.a,{source:"qty"}),r.a.createElement(P.a,{source:"amount"}),r.a.createElement(P.a,{source:"profit"}),r.a.createElement(P.a,{source:"total"}),r.a.createElement(x.a,{label:"Published",source:"publishedAt"})))};var Ue=function(){return r.a.createElement(l.a,{authProvider:w,dashboard:pe,dataProvider:Object(i.a)("api")},r.a.createElement(m.a,{name:"category",list:_e,create:Pe,edit:ve,icon:Se.a}),r.a.createElement(m.a,{name:"product",list:h,create:S,edit:A,icon:T.a}),r.a.createElement(m.a,{name:"customer",list:ye,create:fe,edit:he,icon:ge.a}),r.a.createElement(m.a,{name:"suppliers",list:Ie,create:Ae,edit:we,icon:ge.a}),r.a.createElement(m.a,{name:"expenses",list:Oe,create:Te,edit:je,icon:ke.a}),r.a.createElement(m.a,{name:"employee",list:Ne,create:Me,edit:De,icon:ge.a}),r.a.createElement(m.a,{name:"appointments",list:Re,create:Fe,edit:Be,icon:ge.a}),r.a.createElement(m.a,{name:"sales",list:Le,create:Ve,edit:Ke,icon:ze.a}),r.a.createElement(m.a,{name:"credit",list:Ye,create:Je,edit:Ge,icon:ze.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[454,1,2]]]);
//# sourceMappingURL=main.d77be0e6.chunk.js.map