(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{274:function(e,a,t){e.exports=t(547)},279:function(e,a,t){},534:function(e,a,t){},547:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(4),c=t.n(l),i=(t(279),t(60)),u=t(176),o=t.n(u),s=t(245),m=t(18),d=t.n(m);function p(){return{type:"auth_user",payload:d.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var h=t(28),E=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var c=Object(h.c)((function(e){return e.user})),i=Object(h.b)();return Object(r.useEffect)((function(){i(p()).then(function(){var e=Object(s.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!r.payload.isAuth;case 2:if(!e.sent){e.next=6;break}a&&l.history.push("/login"),e.next=7;break;case 6:(t&&!r.payload.isAdmin||!1===a)&&l.history.push("/");case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[i,l.history,c.googleAuth]),n.a.createElement(e,Object.assign({},l,{user:c}))}return l},f=t(31),v=t(50),y=t(12),b=t(549),g=t(39),_=t(14),O=t(85),j=t(548);var k=function(e){return n.a.createElement("div",null,n.a.createElement(j.a,{autoplay:!0},e.images.map((function(e,a){return n.a.createElement("div",{key:a},n.a.createElement("img",{style:{width:"100%",maxHeight:"150px"},src:"https://vilambarams.in/".concat(e),alt:"productImage"}))}))))},w=t(552),x=t(558),S=w.a.Panel;var C=function(e){var a=Object(r.useState)([]),t=Object(y.a)(a,2),l=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(w.a,{defaultActiveKey:["0"]},n.a.createElement(S,{header:"Location",key:"1"},e.list&&e.list.map((function(a,t){return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement(x.a,{onChange:function(){return function(a){var t=l.indexOf(a),r=Object(v.a)(l);-1===t?r.push(a):r.splice(t,1),c(r),e.handleFilters(r)}(a._id)},type:"checkbox",checked:-1!==l.indexOf(a._id)}),"\xa0\xa0",n.a.createElement("span",null,a.name),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")})))))},I=t(556),D=w.a.Panel;var N=function(e){var a=Object(r.useState)("0"),t=Object(y.a)(a,2),l=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(w.a,{defaultActiveKey:["0"]},n.a.createElement(D,{header:"Price",key:"1"},n.a.createElement(I.a.Group,{onChange:function(a){c(a.target.value),e.handleFilters(a.target.value)},value:l},e.list&&e.list.map((function(e){return n.a.createElement(I.a,{key:e._id,value:"".concat(e._id)},e.name)}))))))},T=[{_id:0,name:"Any",array:[]},{_id:1,name:"\u20b90 to \u20b91999",array:[0,1999]},{_id:2,name:"\u20b92000 to \u20b92499",array:[2e3,2499]},{_id:3,name:"\u20b92500 to \u20b94999",array:[2500,4999]},{_id:4,name:"\u20b95000 to \u20b99999",array:[5e3,9999]},{_id:5,name:"More than \u20b910000",array:[1e4,15e5]}],P=[{_id:1,name:"Chennai"},{_id:2,name:"Coimbatore"},{_id:3,name:"Madurai"},{_id:4,name:"Tiruchirappally"},{_id:5,name:"Dindigul"},{_id:6,name:"Erode"},{_id:7,name:"Cuddalore"},{_id:8,name:"Dharmapuri"},{_id:9,name:"Nagapattinam"},{_id:10,name:"Namakkal"},{_id:11,name:"Perambalur"},{_id:12,name:"Pudukottai"},{_id:13,name:"Ramanathapuram"},{_id:14,name:"Salem"},{_id:15,name:"Sivagangai"},{_id:16,name:"Thanjavur"},{_id:17,name:"Theni"},{_id:18,name:"The Nilgiris"},{_id:19,name:"Thirunelveli"},{_id:20,name:"Thiruvallur"},{_id:21,name:"Thiruvannamalai"},{_id:22,name:"Thiruvarur"},{_id:23,name:"Thoothukudi"},{_id:24,name:"Tiruppur"},{_id:25,name:"Vellore"},{_id:26,name:"Villupuram"},{_id:27,name:"Virudhunagar"},{_id:28,name:"Ariyalur"},{_id:29,name:"Kancheepuram"},{_id:30,name:"Kanniyakumari"},{_id:31,name:"Karur"},{_id:32,name:"Krishnagiri"},{_id:33,name:"Kallakkurichi"},{_id:34,name:"Thenkasi"},{_id:35,name:"Chengalpattu"},{_id:36,name:"Ranipet"},{_id:37,name:"Thirupattur(N)"}],q=t(554),A=q.a.Search;var F=function(e){var a=Object(r.useState)(""),t=Object(y.a)(a,2),l=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(A,{value:l,onChange:function(a){c(a.currentTarget.value),e.refreshFunction(a.currentTarget.value)},placeholder:"Search By Typing..."}))},R=b.a.Meta;var M=function(){var e=Object(r.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(0),i=Object(y.a)(c,2),u=i[0],o=i[1],s=Object(r.useState)(8),m=Object(y.a)(s,2),p=m[0],h=(m[1],Object(r.useState)()),E=Object(y.a)(h,2),j=E[0],w=E[1],x=Object(r.useState)(""),S=Object(y.a)(x,2),I=(S[0],S[1]),D=Object(r.useState)({continents:[],price:[]}),q=Object(y.a)(D,2),A=q[0],M=q[1];Object(r.useEffect)((function(){B({skip:u,limit:p})}),[]);var B=function(e){d.a.post("/api/product/getProducts",e).then((function(a){a.data.success?(e.loadMore?l([].concat(Object(v.a)(t),Object(v.a)(a.data.products))):l(a.data.products),w(a.data.postSize)):alert("Failed to fectch product datas")}))},K=t.map((function(e,a){return n.a.createElement(g.a,{lg:6,md:8,xs:24},n.a.createElement(b.a,{hoverable:!0,cover:n.a.createElement("a",{href:"/product/".concat(e._id)}," ",n.a.createElement(k,{images:e.images}))},n.a.createElement(R,{title:e.title,description:"\u20b9".concat(e.price)})))})),L=function(e,a){var t=Object(f.a)({},A);if(t[a]=e,"price"===a){var r=function(e){var a=T,t=[];for(var r in a)a[r]._id===parseInt(e,10)&&(t=a[r].array);return console.log("array",t),t}(e);t[a]=r}console.log(t),function(e){B({skip:0,limit:p,filters:e}),o(0)}(t),M(t)};return n.a.createElement("div",{style:{width:"75%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"  Advertisements nearby!  ",n.a.createElement(_.a,{type:"shopping"}),"  ")),n.a.createElement(O.a,{gutter:[16,16]},n.a.createElement(g.a,{lg:12,xs:24},n.a.createElement(C,{list:P,handleFilters:function(e){return L(e,"continents")}})),n.a.createElement(g.a,{lg:12,xs:24},n.a.createElement(N,{list:T,handleFilters:function(e){return L(e,"price")}}))),n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}},n.a.createElement(F,{refreshFunction:function(e){var a={skip:0,limit:p,filters:A,searchTerm:e};o(0),I(e),B(a)}})),0===t.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No Advertisements yet...")):n.a.createElement("div",null,n.a.createElement(O.a,{gutter:[16,16]},K)),n.a.createElement("br",null),n.a.createElement("br",null),j>=p&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{onClick:function(){var e=u+p;B({skip:e,limit:p,loadMore:!0}),o(e)}},"Load More")))},B=t(137),K=t(35),L=t(551),V=t(550),U=t(184),z=L.a.Title;var W=Object(i.f)((function(e){var a=Object(h.b)(),t=!!localStorage.getItem("rememberMe"),l=Object(r.useState)(""),c=Object(y.a)(l,2),i=c[0],u=c[1],o=Object(r.useState)(t),s=Object(y.a)(o,2),m=s[0],p=s[1],E=function(){p(!m)},f=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(B.a,{initialValues:{email:f,password:""},validationSchema:K.object().shape({email:K.string().email("Email is invalid").required("Email is required"),password:K.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(t,r){var n=r.setSubmitting;setTimeout((function(){var r={email:t.email,password:t.password};a(function(e){return{type:"login_user",payload:d.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(r)).then((function(a){a.payload.loginSuccess?(window.localStorage.setItem("userId",a.payload.userId),!0===m?window.localStorage.setItem("rememberMe",t.id):localStorage.removeItem("rememberMe"),e.history.push("/")):u("Check out your Account or Password again")})).catch((function(e){u("Check out your Account or Password again"),setTimeout((function(){u("")}),3e3)})),n(!1)}),500)}},(function(e){var a=e.values,t=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,u=e.handleBlur,o=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement(z,{level:2},"Log In"),n.a.createElement("form",{onSubmit:o,style:{width:"350px"}},n.a.createElement(V.a.Item,{required:!0},n.a.createElement(q.a,{id:"email",prefix:n.a.createElement(_.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:a.email,onChange:c,onBlur:u,className:r.email&&t.email?"text-input error":"text-input"}),r.email&&t.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(V.a.Item,{required:!0},n.a.createElement(q.a,{id:"password",prefix:n.a.createElement(_.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:a.password,onChange:c,onBlur:u,className:r.password&&t.password?"text-input error":"text-input"}),r.password&&t.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(V.a.Item,null,n.a.createElement(x.a,{id:"rememberMe",onChange:E,checked:m},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(U.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:o},"Log in")))))}))})),X=t(101),H=t.n(X),J={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},Q={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var G=function(e){var a=Object(h.b)();return n.a.createElement(B.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:K.object().shape({name:K.string().required("Name is required"),lastName:K.string().required("Last Name is required"),email:K.string().email("Email is invalid").required("Email is required"),password:K.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:K.string().oneOf([K.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t,r){var n=r.setSubmitting;setTimeout((function(){var r={email:t.email,password:t.password,name:t.name,lastname:t.lastname,image:"http://gravatar.com/avatar/".concat(H()().unix(),"?d=identicon")};a(function(e){return{type:"register_user",payload:d.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(r)).then((function(a){a.payload.success?e.history.push("/login"):alert(a.payload.err.errmsg)})),n(!1)}),500)}},(function(e){var a=e.values,t=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,u=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(V.a,Object.assign({style:{minWidth:"375px"}},J,{onSubmit:u}),n.a.createElement(V.a.Item,{required:!0,label:"Name"},n.a.createElement(q.a,{id:"name",placeholder:"Enter your name",type:"text",value:a.name,onChange:c,onBlur:i,className:r.name&&t.name?"text-input error":"text-input"}),r.name&&t.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(V.a.Item,{required:!0,label:"Last Name"},n.a.createElement(q.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:a.lastName,onChange:c,onBlur:i,className:r.lastName&&t.lastName?"text-input error":"text-input"}),r.lastName&&t.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(V.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&t.email?"error":"success"},n.a.createElement(q.a,{id:"email",placeholder:"Enter your Email",type:"email",value:a.email,onChange:c,onBlur:i,className:r.email&&t.email?"text-input error":"text-input"}),r.email&&t.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(V.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&t.password?"error":"success"},n.a.createElement(q.a,{id:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:c,onBlur:i,className:r.password&&t.password?"text-input error":"text-input"}),r.password&&t.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(V.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(q.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:a.confirmPassword,onChange:c,onBlur:i,className:r.confirmPassword&&t.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&t.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(V.a.Item,Q,n.a.createElement(U.a,{onClick:u,type:"primary",disabled:l},"Submit"))))}))},Z=t(553);Z.a.SubMenu,Z.a.ItemGroup;var Y=Object(i.f)((function(e){var a=Object(h.c)((function(e){return e.user}));return a.userData&&!a.userData.isAuth?n.a.createElement(Z.a,{mode:e.mode},n.a.createElement(Z.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin"))):n.a.createElement(Z.a,{mode:e.mode},n.a.createElement(Z.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(Z.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){d.a.get("".concat("/api/users","/logout")).then((function(a){200===a.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),$=t(555);t(534);var ee=function(){var e=Object(r.useState)(!1),a=Object(y.a)(e,2),t=a[0],l=a[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Vilambarams")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(Y,{mode:"horizontal"})),n.a.createElement(U.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},n.a.createElement(_.a,{type:"align-right"})),n.a.createElement($.a,{title:"Vilambarams",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:t},n.a.createElement(Y,{mode:"inline"}))))};var ae=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," Happy Shopping  ",n.a.createElement(_.a,{type:"smile"})))},te=t(270);var re=function(e){var a=Object(r.useState)([]),t=Object(y.a)(a,2),l=t[0],c=t[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(te.a,{onDrop:function(a){var t=new FormData;t.append("file",a[0]),d.a.post("/api/product/uploadImage",t,{header:{"content-type":"multipart/form-data"}}).then((function(a){a.data.success?(c([].concat(Object(v.a)(l),[a.data.image])),e.refreshFunction([].concat(Object(v.a)(l),[a.data.image]))):alert("Failed to save the Image in Server")}))},multiple:!1,maxSize:8e8},(function(e){var a=e.getRootProps,t=e.getInputProps;return n.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},a()),n.a.createElement("input",t()),n.a.createElement(_.a,{type:"plus",style:{fontSize:"3rem"}}))})),n.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map((function(a,t){return n.a.createElement("div",{onClick:function(){return function(a){var t=l.indexOf(a),r=Object(v.a)(l);r.splice(t,1),c(r),e.refreshFunction(r)}(a)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"https://vilambarams.in/".concat(a),alt:"productImg-".concat(t)}))}))))},ne=L.a.Title,le=q.a.TextArea,ce=[{key:1,value:"Chennai"},{key:2,value:"Coimbatore"},{key:3,value:"Madurai"},{key:4,value:"Tiruchirappally"},{key:5,value:"Dindigul"},{key:6,value:"Erode"},{key:7,value:"Cuddalore"},{key:8,value:"Dharmapuri"},{key:9,value:"Nagapattinam"},{key:10,value:"Namakkal"},{key:11,value:"Perambalur"},{key:12,value:"Pudukottai"},{key:13,value:"Ramanathapuram"},{key:14,value:"Salem"},{key:15,value:"Sivagangai"},{key:16,value:"Thanjavur"},{key:17,value:"Theni"},{key:18,value:"The Nilgiris"},{key:19,value:"Thirunelveli"},{key:20,value:"Thiruvallur"},{key:21,value:"Thiruvannamalai"},{key:22,value:"Thiruvarur"},{key:23,value:"Thoothukudi"},{key:24,value:"Tiruppur"},{key:25,value:"Vellore"},{key:26,value:"Villupuram"},{key:27,value:"Virudhunagar"},{key:28,value:"Ariyalur"},{key:29,value:"Kancheepuram"},{key:30,value:"Kanniyakumari"},{key:31,value:"Karur"},{key:32,value:"Krishnagiri"},{key:33,value:"Kallakkurichi"},{key:34,value:"Thenkasi"},{key:35,value:"Chengalpattu"},{key:36,value:"Ranipet"},{key:37,value:"Thirupattur(N)"}];var ie=function(e){var a=Object(r.useState)(""),t=Object(y.a)(a,2),l=t[0],c=t[1],i=Object(r.useState)(""),u=Object(y.a)(i,2),o=u[0],s=u[1],m=Object(r.useState)(0),p=Object(y.a)(m,2),h=p[0],E=p[1],f=Object(r.useState)(1),v=Object(y.a)(f,2),b=v[0],g=v[1],_=Object(r.useState)([]),O=Object(y.a)(_,2),j=O[0],k=O[1],w=function(a){if(a.preventDefault(),!l||!o||!h||!b||!j)return alert("fill all the fields first!");var t={writer:e.user.userData._id,title:l,description:o,price:h,images:j,continents:b};d.a.post("/api/product/uploadProduct",t).then((function(a){a.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")}))};return n.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},n.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},n.a.createElement(ne,{level:2}," Upload Products to Advertise")),n.a.createElement(V.a,{onSubmit:w},n.a.createElement(re,{refreshFunction:function(e){k(e)}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Title"),n.a.createElement(q.a,{onChange:function(e){c(e.currentTarget.value)},value:l}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Description"),n.a.createElement(le,{onChange:function(e){s(e.currentTarget.value)},value:o}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Price(\u20b9)"),n.a.createElement(q.a,{onChange:function(e){E(e.currentTarget.value)},value:h,type:"number"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("select",{onChange:function(e){g(e.currentTarget.value)}},ce.map((function(e){return n.a.createElement("option",{key:e.key,value:e.key},e.value," ")}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(U.a,{onClick:w},"Submit")))},ue=t(263),oe=t.n(ue);var se=function(e){var a=Object(r.useState)([]),t=Object(y.a)(a,2),l=t[0],c=t[1];return Object(r.useEffect)((function(){if(e.detail.images&&e.detail.images.length>0){var a=[];e.detail.images&&e.detail.images.map((function(e){a.push({original:"https://vilambarams.in/".concat(e),thumbnail:"https://vilambarams.in/".concat(e)})})),c(a)}}),[e.detail]),n.a.createElement("div",null,n.a.createElement(oe.a,{items:l}))},me=t(559);var de=function(e){var a=Object(r.useState)({}),t=Object(y.a)(a,2),l=t[0],c=t[1];return Object(r.useEffect)((function(){c(e.detail)}),[e.detail]),n.a.createElement("div",null,n.a.createElement(me.a,{title:"Product Info"},n.a.createElement(me.a.Item,{label:"Price"}," ",l.price),n.a.createElement(me.a.Item,{label:"Sold"},l.sold),n.a.createElement(me.a.Item,{label:"View"}," ",l.views),n.a.createElement(me.a.Item,{label:"Description"}," ",l.description)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))};var pe=function(e){var a=Object(h.b)(),t=e.match.params.productId,l=Object(r.useState)([]),c=Object(y.a)(l,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){d.a.get("/api/product/products_by_id?id=".concat(t,"&type=single")).then((function(e){u(e.data[0])}))}),[]),n.a.createElement("div",{className:"postPage",style:{width:"100%",padding:"3rem 4rem"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("h1",null,i.title)),n.a.createElement("br",null),n.a.createElement(O.a,{gutter:[16,16]},n.a.createElement(g.a,{lg:12,xs:24},n.a.createElement(se,{detail:i})),n.a.createElement(g.a,{lg:12,xs:24},n.a.createElement(de,{addToCart:function(e){var t;a((t=e,{type:"add_to_cart_user",payload:d.a.get("".concat("/api/users","/addToCart?productId=").concat(t)).then((function(e){return e.data}))}))},detail:i}))))};var he=function(e){var a=function(e){if(e.length>0){var a=e[0];return"https://vilambarams.in/".concat(a)}};return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Image"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Remove from Cart"))),n.a.createElement("tbody",null,e.products&&e.products.map((function(t){return n.a.createElement("tr",{key:t._id},n.a.createElement("td",null,n.a.createElement("img",{style:{width:"70px"},alt:"product",src:a(t.images)})),n.a.createElement("td",null,t.quantity," EA"),n.a.createElement("td",null,"\u20b9 ",t.price," "),n.a.createElement("td",null,n.a.createElement("button",{onClick:function(){return e.removeItem(t._id)}},"Remove ")," "))})))))},Ee=t(557),fe=t(86),ve=t(264),ye=t(265),be=t(271),ge=t(269),_e=t(266),Oe=t.n(_e),je=function(e){Object(be.a)(t,e);var a=Object(ge.a)(t);function t(){return Object(ve.a)(this,t),a.apply(this,arguments)}return Object(ye.a)(t,[{key:"render",value:function(){var e=this,a=this.props.toPay;return n.a.createElement(Oe.a,{env:"sandbox",client:{sandbox:"AelMA7rUdxce2INjEX1y9KQ47L4J8Idv7rIROe3if2vnMqsIkIz5FFUvA5g-cZiRCnRl3X2EAZljDxWw",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:a,onError:function(e){console.log("Error!",e)},onSuccess:function(a){console.log("The payment was succeeded!",a),e.props.onSuccess(a)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),t}(n.a.Component);var ke=function(e){var a=Object(h.b)(),t=Object(r.useState)(0),l=Object(y.a)(t,2),c=l[0],i=l[1],u=Object(r.useState)(!1),o=Object(y.a)(u,2),s=o[0],m=o[1],p=Object(r.useState)(!1),E=Object(y.a)(p,2),f=E[0],v=E[1];Object(r.useEffect)((function(){var t=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach((function(e){t.push(e.id)})),a(function(e,a){return{type:"get_cart_items_user",payload:d.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then((function(e){return a.forEach((function(a){e.data.forEach((function(t,r){a.id===t._id&&(e.data[r].quantity=a.quantity)}))})),e.data}))}}(t,e.user.userData.cart)))}),[e.user.userData]),Object(r.useEffect)((function(){e.user.cartDetail&&e.user.cartDetail.length>0&&b(e.user.cartDetail)}),[e.user.cartDetail]);var b=function(e){var a=0;e.map((function(e){a+=parseInt(e.price,10)*e.quantity})),i(a),m(!0)};return n.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},n.a.createElement("h1",null,"My Cart"),n.a.createElement("div",null,n.a.createElement(he,{products:e.user.cartDetail,removeItem:function(e){var t;a((t=e,{type:"remove_cart_item_user",payload:d.a.get("/api/users/removeFromCart?_id=".concat(t)).then((function(e){return e.data.cart.forEach((function(a){e.data.cartDetail.forEach((function(t,r){a.id===t._id&&(e.data.cartDetail[r].quantity=a.quantity)}))})),e.data}))})).then((function(){d.a.get("/api/users/userCartInfo").then((function(e){e.data.success?e.data.cartDetail.length<=0?m(!1):b(e.data.cartDetail):alert("Failed to get cart info")}))}))}}),s?n.a.createElement("div",{style:{marginTop:"3rem"}},n.a.createElement("h2",null,"Total amount: \u20b9",c," ")):f?n.a.createElement(Ee.a,{status:"success",title:"Successfully Purchased Items"}):n.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("br",null),n.a.createElement(fe.a,{description:!1}),n.a.createElement("p",null,"No Items In the Cart"))),s&&n.a.createElement(je,{toPay:c,onSuccess:function(t){var r={cartDetail:e.user.cartDetail,paymentData:t};d.a.post("/api/users/successBuy",r).then((function(e){e.data.success?(v(!0),m(!1),a(function(e){return{type:"on_success_buy_user",payload:e}}({cart:e.data.cart,cartDetail:e.data.cartDetail}))):alert("Failed to buy it")}))},transactionError:function(){console.log("Paypal error")},transactionCanceled:function(){console.log("Transaction canceled")}}))};var we=function(){var e=Object(r.useState)([]),a=Object(y.a)(e,2),t=a[0],l=a[1];return Object(r.useEffect)((function(){d.a.get("/api/users/getHistory").then((function(e){e.data.success?l(e.data.history):alert("Failed to get History")}))}),[]),n.a.createElement("div",{style:{width:"80%",margin:"3rem auto "}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",null,"History")),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Payment Id"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Date of Purchase"))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{key:e._id},n.a.createElement("td",null,e.paymentId),n.a.createElement("td",null,e.price),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.dateOfPurchase))})))))};var xe=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(ee,null),n.a.createElement("div",{style:{paddingTop:"75px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:E(M,null)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:E(W,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:E(G,!1)}),n.a.createElement(i.a,{exact:!0,path:"/product/upload",component:E(ie,!0)}),n.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:E(pe,null)}),n.a.createElement(i.a,{exact:!0,path:"/user/cart",component:E(ke,!0)}),n.a.createElement(i.a,{exact:!0,path:"/history",component:E(we,!0)}))),n.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=t(95),Ce=t(72),Ie=Object(Ce.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"register_user":return Object(f.a)({},e,{register:a.payload});case"login_user":return Object(f.a)({},e,{loginSucces:a.payload});case"auth_user":return Object(f.a)({},e,{userData:a.payload});case"logout_user":return Object(f.a)({},e);case"add_to_cart_user":return Object(f.a)({},e,{userData:Object(f.a)({},e.userData,{cart:a.payload})});case"get_cart_items_user":return Object(f.a)({},e,{cartDetail:a.payload});case"remove_cart_item_user":return Object(f.a)({},e,{cartDetail:a.payload.cartDetail,userData:Object(f.a)({},e.userData,{cart:a.payload.cart})});case"on_success_buy_user":return Object(f.a)({},e,{userData:Object(f.a)({},e.userData,{cart:a.payload.cart}),cartDetail:a.payload.cartDetail});default:return e}}}),De=t(267),Ne=t.n(De),Te=t(268),Pe=Object(Ce.a)(Ne.a,Te.a)(Ce.d);c.a.render(n.a.createElement(h.a,{store:Pe(Ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(Se.a,null,n.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[274,1,2]]]);
//# sourceMappingURL=main.d2754939.chunk.js.map