(function(){"use strict";var e={8675:function(e,t,A){A.r(t),A.d(t,{default:function(){return C}});var n=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-dialog",{attrs:{value:"true",persistent:"",width:"100%","max-width":"500"}},[A("v-card",{staticClass:"mx-auto",attrs:{flat:e.$vuetify.breakpoint.xsOnly}},[A("v-alert",{attrs:{value:null!=e.alertMessage,dismissible:"",color:"error"}},[e._v(" "+e._s(e.alertMessage)+" ")]),A("v-card-title",[A("span",{staticClass:"mx-auto dialog-title"},[e._v(" "+e._s(e.expired?"Session Expired!":"Welcome Back!"))])]),A("v-card-text",{staticClass:"pt-2 pb-0"},[A("v-layout",{attrs:{column:"",wrap:""}},[A("v-form",{ref:"form"},[A("v-flex",[A("v-text-field",{attrs:{label:"Username or email",rules:[e.rules.required],required:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login.apply(null,arguments)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),A("v-flex",[A("v-text-field",{attrs:{type:"password",label:"Password",rules:[e.rules.required],required:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)],1),A("v-card-actions",{staticClass:"py-3"},[A("v-layout",{attrs:{column:""}},[A("v-btn",{staticClass:"my-3",attrs:{block:"",large:"",loading:e.isLoading,color:"primary"},on:{click:e.Login}},[e._v(" Login ")]),e.expired?e._e():[A("span",{staticClass:"mx-auto"},[e._v("No account?")]),A("v-btn",{staticClass:"my-3",attrs:{text:"",color:"primary",to:"/setup"}},[e._v(" Setup ")])]],2)],1)],1)],1)},o=[],a=A(5626),r=A(7507),s=A(3451),i={mixins:[r.j,s.Z],props:{expired:{type:Boolean,default:!1}},data:()=>({alertMessage:null,username:"",password:"",isLoading:!1}),methods:{Login(){if(!this.$refs.form.validate())return;this.isLoading=!0,this.alertMessage=null;const e=`username=${this.username}&password=${this.password}`,t={headers:{"Content-Type":"application/x-www-form-urlencoded"}};a.Z.post("/admin/login",e,t).then((e=>{if(localStorage.setItem("actk",e.data.access_token),localStorage.setItem("exp",Date.now()+e.data.expires_in),this.expired)return void this.$store.commit("toggleLoginDialog",!1);const t=this.$route.query.redirect;this.$router.push(null!=t?t:"/").catch((()=>{}))})).catch((e=>{this.alertMessage=this.processRequestError(e,!0).message})).finally((()=>{this.isLoading=!1}))}}},l=i,c=A(1001),u=A(3453),d=A.n(u),p=A(7847),v=A(9787),g=A(2026),m=A(5255),h=A(5634),f=A(683),w=A(3240),y=A(9456),b=A(2660),x=(0,c.Z)(l,n,o,!1,null,null,null),C=x.exports;d()(x,{VAlert:p.Z,VBtn:v.Z,VCard:g.Z,VCardActions:m.h7,VCardText:m.ZB,VCardTitle:m.EB,VDialog:h.Z,VFlex:f.Z,VForm:w.Z,VLayout:y.Z,VTextField:b.Z})},5626:function(e,t,A){var n=A(9669),o=A.n(n);const a="/api";t["Z"]=o().create({baseURL:a,timeout:3e4})},2667:function(e,t,A){var n=A(144),o=A(6455),a=A.n(o),r=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-app",[A("navbar"),A("loader",{attrs:{global:!0}}),e.showLoginDialog?A("login-dialog",{attrs:{expired:!0}}):e._e(),A("v-main",[A("router-view")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-app-bar",{attrs:{app:"",color:"primary",dense:"",dark:""}},[e.showNavIcon?A("v-app-bar-nav-icon",{on:{click:e.toggleChallengeList}}):e._e(),e.showHomeButton?A("v-btn",{attrs:{to:"/",icon:""}},[A("v-icon",{attrs:{title:"Home"}},[e._v(" $home ")])],1):e._e(),A("v-toolbar-title",{staticClass:"mx-auto"},[e._v(" "+e._s(e.pageTitle)+" ")]),e.showLogoutButton?A("v-btn",{attrs:{icon:""},on:{click:e.logOut}},[A("v-icon",{attrs:{title:"Logout"}},[e._v(" $logout ")])],1):e._e(),e.showNavIcon?A("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[A("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),n),[A("v-icon",[e._v("$vertMenu")])],1)]}}],null,!1,3282079338)},[A("v-list",{attrs:{dense:""}},[A("v-list-item",{on:{click:e.goHome}},[A("v-icon",{staticClass:"pr-2"},[e._v(" $home ")]),A("v-list-item-title",[e._v("Home")])],1),A("v-list-item",{on:{click:e.logOut}},[A("v-icon",{staticClass:"pr-2"},[e._v(" $logout ")]),A("v-list-item-title",[e._v("Logout")])],1)],1)],1):e._e()],1)},l=[],c={computed:{pageTitle(){return this.$route.name},showNavIcon(){return"Editor"===this.$route.name&&this.$vuetify.breakpoint.smAndDown},showHomeButton(){return!this.showNavIcon&&("/"!==this.$route.path&&"/login"!==this.$route.path)},showLogoutButton(){return!this.showNavIcon&&this.$route.meta.requiresAuth}},methods:{toggleChallengeList(){this.$store.commit("updateListShowState",!this.$store.getters.showChallengeList)},goHome(){this.$router.push("/").catch((()=>{}))},logOut(){localStorage.removeItem("actk"),localStorage.removeItem("exp"),this.$router.push("/login").catch((()=>{}))}}},u=c,d=A(1001),p=A(3453),v=A.n(p),g=A(1466),m=A(5078),h=A(9787),f=A(4456),w=A(893),y=A(907),b=A(3820),x=A(1062),C=A(3845),_=(0,d.Z)(u,i,l,!1,null,null,null),L=_.exports;v()(_,{VAppBar:g.Z,VAppBarNavIcon:m.Z,VBtn:h.Z,VIcon:f.Z,VList:w.Z,VListItem:y.Z,VListItemTitle:b.V9,VMenu:x.Z,VToolbarTitle:C.qW});var Z=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-overlay",{staticClass:"loader-overlay",attrs:{opacity:e.opacity?.7:0,"z-index":"10",value:e.active}},[A("div",{staticClass:"animbody"},[A("span",[A("span"),A("span"),A("span"),A("span")]),A("div",{staticClass:"base"},[A("span"),A("div",{staticClass:"face"})])]),A("div",{staticClass:"longfazers"},[A("span"),A("span"),A("span"),A("span"),A("span")]),A("h1",{staticClass:"text-center white--text"},[e._v(" "+e._s(e.text)+" ")]),A("span",{staticClass:"credit-info"},[e._v("Made by "),A("a",{staticClass:"font-weight-medium white--text",attrs:{href:"https://codepen.io/mr_alien",target:"_blank"}},[e._v("Mr Alien ")])])])},k=[],S={name:"Loader",computed:{loaderOptions(){return this.$store.getters.loaderOptions},active(){return this.loaderOptions?.active??!1},opacity(){return this.loaderOptions?.opacity??!0},text(){return this.loaderOptions?.text??"Loading"}}},$=S,E=A(8913),O=(0,d.Z)($,Z,k,!1,null,"30678af8",null),I=O.exports;v()(O,{VOverlay:E.Z});var B=A(8675),D={name:"App",components:{Navbar:L,Loader:I,LoginDialog:B["default"]},computed:{showLoginDialog(){return this.$store.getters.loginDialog}}},T=D,V=A(303),q=A(4021),P=(0,d.Z)(T,r,s,!1,null,null,null),z=P.exports;v()(P,{VApp:V.Z,VMain:q.Z});var M=A(4903);n.Z.use(M.Z);const N=[{path:"/",name:"Dashboard",component:()=>A.e(337).then(A.bind(A,1337)),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>Promise.resolve().then(A.bind(A,8675))},{path:"/setup",name:"Setup",component:()=>Promise.all([A.e(931),A.e(400)]).then(A.bind(A,3832))},{path:"/categories",name:"Categories",component:()=>Promise.all([A.e(906),A.e(112)]).then(A.bind(A,6833)),meta:{requiresAuth:!0}},{path:"/categories/:category_id",name:"Editor",component:()=>Promise.all([A.e(931),A.e(354),A.e(906),A.e(876)]).then(A.bind(A,1885)),meta:{requiresAuth:!0}},{path:"/images",name:"Images",component:()=>Promise.all([A.e(354),A.e(476)]).then(A.bind(A,7476)),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>A.e(507).then(A.bind(A,507)),meta:{requiresAuth:!0}},{path:"*",name:"Page Not Found",component:()=>A.e(207).then(A.bind(A,2207))}],j=new M.Z({mode:"history",base:"/",routes:N});j.beforeEach(((e,t,A)=>{n.Z.nextTick((()=>{document.title="Core Trivia Dashboard "+("/"===e.path?"":` • ${e.name}`)}));const o=localStorage.getItem("actk"),a=localStorage.getItem("exp"),r=null!=o&&""!==o&&null!=a&&a>Date.now();!0!==e.meta.requiresAuth||r?"/login"===e.path&&r?A("/"):A():A({path:"/login",query:{redirect:e.fullPath},replace:!0})}));var F=j,R=A(629);n.Z.use(R.ZP);var H=new R.ZP.Store({state:{showChallengeList:!1,loaderOptions:null,loginDialog:!1,languages:[]},mutations:{updateListShowState(e,t){e.showChallengeList=t},updateLoaderOptions(e,t){e.loaderOptions=t},toggleLoginDialog(e,t){e.loginDialog=t},addLanguage(e,t){Array.isArray(t)?e.languages=t:e.languages.push(t)},updateLanguage(e,t){const A=e.languages.findIndex((e=>e.id===t.id));e.languages[A]=t},deleteLanguage(e,t){const A=e.languages.findIndex((e=>e.id===t));e.languages.splice(A,1)}},getters:{showChallengeList:e=>e.showChallengeList,loaderOptions:e=>e.loaderOptions,loginDialog:e=>e.loginDialog,languages:e=>e.languages}}),Q=A(5121),U=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 166.7 168.9",width:"167",height:"169","clip-path":"url(#_clipPath_PPPiEcORhRSYwopEENnaRFzzeYSXmwtt)"}},[A("path",{attrs:{d:"M65.6 135.2a3.37 3.37 0 0 1-3.4 3.4c-1.8 0-3.3-1.5-3.3-3.4 0-4.5 3-8.5 7.9-11.2 4.3-2.4 10.2-3.9 16.5-3.9 6.4 0 12.3 1.5 16.6 3.9 4.8 2.7 7.9 6.7 7.9 11.2a3.37 3.37 0 0 1-3.4 3.4c-1.8 0-3.3-1.5-3.3-3.4s-1.7-3.9-4.5-5.4c-3.3-1.9-8-3-13.3-3-5.2 0-9.9 1.1-13.3 3-2.7 1.5-4.4 3.5-4.4 5.4zm83.6 18.1c0 4.3-1.7 8.2-4.6 11.1-2.8 2.8-6.7 4.5-11 4.5s-8.2-1.7-11-4.5c-1.7-1.6-2.9-3.5-3.7-5.7-4.8 2.3-9.9 4.1-15.2 5.4-6.5 1.7-13.3 2.5-20.4 2.5-23 0-43.8-9.3-58.9-24.4S0 106.3 0 83.3s9.3-43.8 24.4-58.9S60.3 0 83.3 0c23.1 0 43.9 9.3 59 24.4 15 15.1 24.4 35.9 24.4 58.9 0 11.2-2.2 21.8-6.2 31.6-3.9 9.3-9.4 17.8-16.1 25.1 2.6 5.1 4.8 10.2 4.8 13.3zm-18.5-27a2.92 2.92 0 0 1 1.8-1.5l.1-.1h.2l.1-.1h.3c.7-.1 1.4 0 2 .4a3.16 3.16 0 0 1 1.4 1.4v.1h.1c.3.7 1 1.8 1.7 3.1l.2.2v.1l.1.1v.1l.1.1v.1h.1v.1l.1.1v.1l.2.2v.1c.6.9 1.2 2 1.8 3 5.5-6.3 10.1-13.6 13.3-21.5 3.7-9 5.7-18.8 5.7-29.1 0-21.2-8.6-40.3-22.4-54.2-13.9-13.9-33.1-22.4-54.3-22.4a76.41 76.41 0 0 0-54.2 22.4C15.2 43 6.7 62.1 6.7 83.3s8.5 40.3 22.4 54.2S62.2 160 83.3 160c6.5 0 12.8-.8 18.8-2.3 5.7-1.5 11-3.5 16-6v-.1h.1v-.3l.2-.6v-.1l.1-.2v-.4l.1-.1v-.2l.1-.1.1-.3c.1-.4.2-.8.3-1.1l.1-.1.1-.3v-.1l.1-.3c.1-.3.2-.5.3-.7v-.1l.1-.3.1-.1.1-.3h.1c.1-.3.2-.6.3-.8l.2-.4v-.1l.1-.3.1-.1.1-.3v-.1h.1l.1-.3v-.1l.2-.4h.1c.2-.4.3-.8.6-1.2v-.1l.2-.3v-.1l.6-1.2.2-.3v-.1l.4-.8h.1l.1-.3.1-.2.1-.1.1-.3.1-.1.2-.3v-.1l.2-.3.4-.8.2-.3.1-.1.1-.3.1-.1.1-.3.1-.1.4-.8.3-.4v-.1l.4-.6v-.1l.2-.3.2-.4.3-.3.1-.3v-.1l.3-.3.2-.4.1-.1.1-.2v-.2l.2-.2.4-.6.1-.3.1-.1v-.1h.1v-.2l.2-.2v-.1h.1v-.1l.1-.1v-.2h.1v-.1l.1-.1v-.1h.1v-.1l.1-.1v-.1l.1-.1v-.1h.1v-.2h.1v-.1l.1-.1v-.1l.2-.2v-.1l.1-.1v-.1l.1-.1v-.1h.1v-.1zm9.3 33.3a9.08 9.08 0 0 0 2.6-6.3c0-2.3-2.5-7.3-5.2-12.2-.4-.7-.7-1.3-1.1-2l-.1-.1v-.1h-.1v-.1l-.1-.3h-.1c-.7-1.3-1.4-2.4-2-3.5l-.1-.1v-.1l-.2-.2v-.1l-.2.3-.1.3-.8 1.2-.1.3-.6.9-.2.4-.4.6-.2.4-.2.3-.1.3-.2.4-.4.6-.2.4-.2.3-.1.3-.2.4-.2.3-.2.4-.4.6-.1.4-.2.3-.2.4-.2.3-.1.3-.2.3-.2.4-.1.3-.2.3-.1.3-.2.3-.1.4-.2.3-.2.6-.2.3-.1.2-.1.4-.2.3v.2l-.1.3-.2.2-.1.3v.3l-.1.2-.1.3-.1.2v.3l-.2.4v.4c-.1.1-.1.1-.1.2v.4l-.1.2v.2c.1 2.5 1.1 4.7 2.7 6.3s3.8 2.6 6.3 2.6 4.7-1 6.4-2.7zm-4.7-86.9c.9 1.6.3 3.6-1.4 4.5-1.6.8-3.6.2-4.5-1.4-.7-1.5-1.8-2.9-3.1-3.9-1.3-1.1-2.9-1.8-4.5-2.3-1-.2-2-.4-2.9-.4-1.1 0-2.1.1-3.1.3-1.8.4-3.5-.7-4-2.5-.3-1.8.8-3.5 2.6-4 1.4-.3 3-.4 4.5-.4 1.6 0 3.1.2 4.5.6h.2a19.14 19.14 0 0 1 6.8 3.5c2.1 1.6 3.7 3.7 4.9 6zm-98.1 3.1c-.8 1.6-2.8 2.2-4.5 1.4-1.6-.9-2.2-2.9-1.4-4.5 1.2-2.3 2.9-4.4 4.9-6s4.4-2.8 6.9-3.5h.1a17.4 17.4 0 0 1 4.5-.6c1.6 0 3.1.1 4.6.4 1.8.5 2.9 2.2 2.5 4s-2.2 2.9-3.9 2.5a16.28 16.28 0 0 0-3.1-.3c-1 0-2 .2-2.9.4-1.7.5-3.2 1.2-4.5 2.3-1.3 1-2.4 2.4-3.2 3.9zm88 16.9c0-2-.7-3.8-1.9-5.1-1.1-1.1-2.7-1.9-4.3-1.9-1.7 0-3.2.8-4.3 1.9-1.2 1.3-1.9 3.1-1.9 5.1 0 1.9.7 3.7 1.9 5 1.1 1.2 2.6 1.9 4.3 1.9 1.6 0 3.2-.7 4.3-1.9 1.2-1.3 1.9-3.1 1.9-5zm3-9.5c2.2 2.4 3.6 5.8 3.6 9.5s-1.4 7-3.6 9.5c-2.4 2.5-5.6 4.1-9.2 4.1s-6.9-1.6-9.2-4.1a13.91 13.91 0 0 1-3.7-9.5c0-3.7 1.4-7.1 3.7-9.5 2.3-2.6 5.6-4.1 9.2-4.1s6.8 1.5 9.2 4.1zm-74.3 9.5c0-2-.7-3.8-1.9-5.1-1.1-1.1-2.6-1.9-4.3-1.9s-3.2.8-4.3 1.9c-1.2 1.3-1.9 3.1-1.9 5.1 0 1.9.7 3.7 1.9 5 1.1 1.2 2.6 1.9 4.3 1.9s3.2-.7 4.3-1.9c1.2-1.3 1.9-3.1 1.9-5zm3-9.5c2.3 2.4 3.6 5.8 3.6 9.5s-1.3 7-3.6 9.5c-2.4 2.5-5.6 4.1-9.2 4.1s-6.8-1.6-9.2-4.1a13.91 13.91 0 0 1-3.7-9.5c0-3.7 1.4-7.1 3.7-9.5 2.4-2.6 5.6-4.1 9.2-4.1s6.8 1.5 9.2 4.1z",fill:"#011627","fill-opacity":"0.8"}})])},K=[],Y={name:"SadIcon"},W=Y,G=(0,d.Z)(W,U,K,!1,null,null,null),J=G.exports,X=A(5317);n.Z.use(Q.Z);var ee=new Q.Z({icons:{iconfont:"mdiSvg",values:{home:X.vgA,categories:X.RIj,image:X.TaT,images:X.xm,sad:{component:J},forum:X.TbA,save:X.Tls,vertMenu:X.SXi,cog:X.Shd,filter:X.ghd,bin:X.x9U,upload:X.OzD,openFolder:X.IC9,logout:X.GyE}}}),te=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"d-flex flex-column align-center",attrs:{id:"empty-ui"}},[A("v-icon",{attrs:{size:e.size}},[e._v(" $"+e._s(e.icon)+" ")]),A("span",{staticClass:"mt-2 text-center font-weight-medium"},[e._v(e._s(e.text))]),e._t("default")],2)},Ae=[],ne={name:"EmptyState",props:{icon:{type:String,required:!0},size:{type:[String,Number],default:120},text:{type:String,required:!0}}},oe=ne,ae=(0,d.Z)(oe,te,Ae,!1,null,"6ce10e90",null),re=ae.exports;v()(ae,{VIcon:f.Z});var se={methods:{sortArray(e,t){e.sort(((e,A)=>e[t].toLowerCase().localeCompare(A[t].toLowerCase())))},imageURL(e,t=!1){return null==e&&t?A(3363):`${location.origin}/resources/images/${e}`}}};n.Z.config.productionTip=!1;const ie=a().mixin({backdrop:!0,allowEnterKey:!1,confirmButtonColor:"#1976D2",cancelButtonColor:"#FF5252"});n.Z.prototype.$swal=ie,n.Z.mixin(se),n.Z.component("EmptyState",re),new n.Z({router:F,store:H,vuetify:ee,render:e=>e(z)}).$mount("#app")},3451:function(e,t,A){var n=A(9669),o=A.n(n);t["Z"]={methods:{processRequestError(e,t=!1,A=!1){let n=!1;22===e.response?.data?.code&&(n=!0,this.$store.commit("toggleLoginDialog",!0));const a=localStorage.getItem("actk"),r=localStorage.getItem("exp"),s=null!=a&&""!==a&&null!=r&&r>Date.now();401!==e.response?.status||s||-1!==["/login","/setup"].indexOf(this.$route.path)||(n=!0,this.$store.commit("toggleLoginDialog",!0));const i=o().isCancel(e)?null:e.response?.data?.message??e.response?.data??e.message,l=e.response?.data?.code??null;if(t)return{code:l,message:i,sessionExpired:n};n||(A?console.error(e):this.$swal.fire("Error",i,"error"))}}}},7507:function(e,t,A){A.d(t,{j:function(){return n}});const n={data:()=>({rules:{required:e=>!!e||"Required.",languageRequired:e=>e.length>0||"Required.",startLetter:e=>e&&/^[a-zA-Z]/i.test(e)||"Must start with a letter",alphanumeric:e=>e&&/^[a-zA-Z0-9]+$/i.test(e)||"Only letters and numbers are allowed",numbersOnly:e=>e&&/^[0-9]+$/i.test(e)||"Only numbers are allowed",dbName:e=>e&&/^[a-z][a-z_]+$/.test(e)||"Only lowercase letters and underscore are allowed",minChars:e=>e&&e.length>=3||"Too short",matchPass:(e,t)=>e&&t&&e===t||"Passwords do not match"}})}},3363:function(e){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/wAALCACWArwBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAA/AKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"}},t={};function A(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,A),a.exports}A.m=e,function(){var e=[];A.O=function(t,n,o,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||r>=a)&&Object.keys(A.O).every((function(e){return A.O[e](n[i])}))?n.splice(i--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var n in t)A.o(t,n)&&!A.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){A.f={},A.e=function(e){return Promise.all(Object.keys(A.f).reduce((function(t,n){return A.f[n](e,t),t}),[]))}}(),function(){A.u=function(e){return"js/"+e+"."+{112:"6676d316",207:"89e63d2f",337:"b7e06563",354:"27b649d1",400:"714e3558",476:"c8c14240",507:"1c8114d4",876:"37384d14",906:"16548c26",931:"92cd2f9a"}[e]+".js"}}(),function(){A.miniCssF=function(e){return"css/"+e+"."+{112:"3d22104b",207:"56e24ee7",337:"8e002ce0",354:"ce520979",400:"4a3dc406",476:"149a4271",507:"963503cf",876:"3c5d9b3c"}[e]+".css"}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="core-trivia-frontend:";A.l=function(n,o,a,r){if(e[n])e[n].push(o);else{var s,i;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,A.nc&&s.setAttribute("nonce",A.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var d=function(t,A){s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(A)})),t)return t(A)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){A.p="/"}(),function(){var e=function(e,t,A,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)A();else{var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=s,o.parentNode.removeChild(o),n(i)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var A=document.getElementsByTagName("link"),n=0;n<A.length;n++){var o=A[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){o=r[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=function(n){return new Promise((function(o,a){var r=A.miniCssF(n),s=A.p+r;if(t(r,s))return o();e(n,s,o,a)}))},o={143:0};A.f.miniCss=function(e,t){var A={112:1,207:1,337:1,354:1,400:1,476:1,507:1,876:1};o[e]?t.push(o[e]):0!==o[e]&&A[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};A.f.j=function(t,n){var o=A.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(354!=t){var a=new Promise((function(A,n){o=e[t]=[A,n]}));n.push(o[2]=a);var r=A.p+A.u(t),s=new Error,i=function(n){if(A.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}};A.l(r,i,"chunk-"+t,t)}else e[t]=0},A.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],s=n[1],i=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)A.o(s,o)&&(A.m[o]=s[o]);if(i)var c=i(A)}for(t&&t(n);l<r.length;l++)a=r[l],A.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return A.O(c)},n=self["webpackChunkcore_trivia_frontend"]=self["webpackChunkcore_trivia_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=A.O(void 0,[998],(function(){return A(2667)}));n=A.O(n)})();