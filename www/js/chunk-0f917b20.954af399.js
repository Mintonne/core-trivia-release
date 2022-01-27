(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f917b20"],{"1f09":function(t,e,i){},"23fa":function(t,e,i){},3129:function(t,e,i){"use strict";var a=i("3835"),n=i("5530"),r=(i("ac1f"),i("1276"),i("d81d"),i("a630"),i("3ca3"),i("5319"),i("1f09"),i("c995")),s=i("24b2"),o=i("7560"),l=i("58df"),c=i("80d2");e["a"]=Object(l["a"])(r["a"],s["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,i=t.split("@"),n=Object(a["a"])(i,2),r=n[0],s=n[1],o=function(){return e.genStructure(r)};return Array.from({length:s}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},ab31:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex flex-column fill-height"},[t.showEmptyState?i("empty-state",{attrs:{icon:"openFolder",text:"No Images Found"}}):t._e(),i("image-uploader",{attrs:{dialog:t.dialog,"upsert-image":t.upsertImage,"is-uploading":t.uploadingFiles},on:{"update:dialog":function(e){t.dialog=e},"update:isUploading":function(e){t.uploadingFiles=e},"update:is-uploading":function(e){t.uploadingFiles=e}}}),t.showEmptyState?t._e():i("v-row",{staticClass:"py-3 align-content-start",attrs:{"no-gutters":""}},t._l(t.imageList,(function(e,a){return i("v-col",{key:a,staticClass:"pa-2",attrs:{cols:"6",lg:"2",md:"3",sm:"4"}},[i("v-card",{attrs:{width:"100%"}},[i("v-card-text",{staticClass:"text-center pa-0"},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var n=a.hover;return[i("v-img",{attrs:{"min-height":"200","max-height":"200",width:"100%",src:t.imageURL(e.filename),alt:e.name},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-skeleton-loader",{attrs:{height:"200",type:"image"}})]},proxy:!0}],null,!0)},[i("v-expand-transition",[n?i("div",{staticClass:"d-flex transition-fast-in-fast-out see-through",staticStyle:{height:"100%"}},[i("v-row",{staticClass:"align-center justify-center flex-column"},[i("v-btn",{staticClass:"mb-3",attrs:{dark:"",text:""},on:{click:function(i){return i.stopPropagation(),t.renameImage(e)}}},[i("v-icon",{staticClass:"mr-2",attrs:{size:"25"}},[t._v(" $edit ")]),i("span",{staticClass:"text-normal"},[t._v("Rename")])],1),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(i){return i.stopPropagation(),t.deleteImage(e)}}},[i("v-icon",{staticClass:"mr-2",attrs:{size:"25"}},[t._v(" $bin ")]),i("span",[t._v("Delete")])],1)],1)],1):t._e()])],1)]}}],null,!0)})],1),i("v-card-subtitle",{staticClass:"d-block subtitle-1 text-center text-truncate pa-2",attrs:{title:e.name}},[i("span",[t._v(t._s(e.name))])])],1)],1)})),1),t.showEmptyState?t._e():i("v-row",{staticClass:"py-5 justify-center align-end",attrs:{"no-gutters":""}},[i("v-btn",{staticClass:"mx-2",attrs:{disabled:!t.showPreviousBtn,color:"primary"},on:{click:t.previousPage}},[t._v(" Prev ")]),i("v-btn",{staticClass:"mx-2",attrs:{disabled:!t.showNextBtn,color:"primary"},on:{click:t.nextPage}},[t._v(" Next ")])],1),i("v-btn",{attrs:{id:"upload-btn",fixed:"",dark:"",color:"primary",height:"50",width:"50",fab:""},on:{click:function(e){t.dialog=!0}}},[i("v-icon",[t._v(" $upload ")])],1),t.uploadingFiles?i("v-progress-circular",{attrs:{id:"progress-circle",indeterminate:"",size:"60",width:"11",color:"blue-grey"}}):t._e()],1)},n=[],r=(i("a9e3"),i("ac1f"),i("5319"),i("d3b7"),i("c740"),i("a434"),i("b0c0"),i("99af"),i("365c")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"100%","max-width":"500",eager:"","retain-focus":!1},model:{value:t.dialogValue,callback:function(e){t.dialogValue=e},expression:"dialogValue"}},[i("v-card",{staticClass:"d-flex flex-column",attrs:{loading:t.isUploading,height:"80vh","max-height":"700"}},[i("v-card-title",{staticClass:"pb-5"},[i("span",{staticClass:"mx-auto dialog-title"},[t._v("Queue")]),i("v-btn",{attrs:{icon:"",absolute:"",right:""},on:{click:function(e){t.dialogValue=!1}}},[i("v-icon",[t._v("$close")])],1)],1),t.isQueueEmpty?t._e():i("v-row",{staticClass:"mr-5 flex-grow-0 align-self-end",attrs:{"no-gutters":""}},[i("v-btn",{attrs:{text:"",small:"",right:"",color:"error",disabled:t.isUploading},on:{click:t.retryFiles}},[t._v(" Retry ")]),i("v-btn",{attrs:{text:"",small:"",right:"",color:"primary"},on:{click:t.clearCompleted}},[t._v(" Clear ")])],1),i("v-card-text",{staticClass:"d-flex flex-grow-1 overflow-hidden"},[t.isQueueEmpty?i("empty-state",{attrs:{icon:"sad",size:"80",text:"Queue is Empty"}}):i("v-card",{staticClass:"pa-1 overflow-y-auto",attrs:{flat:"",width:"100%"}},t._l(t.queue,(function(e,a){return i("v-list-item",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!file.hidden"}],key:a,staticClass:"elevation-2 my-2",attrs:{"two-line":""}},[i("v-list-item-icon",{staticClass:"mr-3 my-0 align-self-center"},[null!=e.error?i("v-btn",{staticClass:"mx-2",attrs:{icon:"",color:"error"},on:{click:function(i){return t.showErrorMessage(e)}}},[i("v-icon",[t._v(" $info ")])],1):i("v-img",{attrs:{width:"50",height:"50",contain:"",src:e.thumbnail},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-skeleton-loader",{attrs:{type:"image",width:"50"}})]},proxy:!0}],null,!0)})],1),i("v-list-item-content",[i("v-list-item-title",{attrs:{title:e.name}},[t._v(" "+t._s(e.name)+" ")]),i("v-list-item-subtitle",[t._v(t._s(t.filesize(e.size)))])],1),i("v-list-item-icon",{staticClass:"my-0 align-self-center"},[i("v-btn",{attrs:{icon:"",loading:e.uploading,color:e.completed?"success":""},on:{click:function(e){return t.removeFromQueue(a)}}},[i("v-icon",[t._v(" $"+t._s(e.completed?"complete":"close")+" ")])],1)],1)],1)})),1)],1),i("v-card-actions",{staticClass:"mb-3"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"primary"},on:{click:t.selectImages}},[t._v(" Select Images ")])],1)],1),i("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*",hidden:"",multiple:""},on:{change:t.addToQueue}})],1)},o=[],l=i("1da1"),c=(i("96cf"),i("a630"),i("3ca3"),i("159b"),i("ddb0"),i("2b3d"),i("9861"),i("4de4"),i("cee5")),u=i.n(c),d=i("e11b"),p={name:"ImageUploader",mixins:[d["a"]],props:{dialog:{type:Boolean,required:!0},upsertImage:{type:Function,required:!0},isUploading:{type:Boolean,required:!0}},data:function(){return{queue:[]}},computed:{dialogValue:{get:function(){return this.dialog},set:function(t){this.$emit("update:dialog",t)}},isUploadingValue:{get:function(){return this.isUploading},set:function(t){this.$emit("update:isUploading",t)}},isQueueEmpty:function(){return this.queue.length<=0}},methods:{filesize:function(t){return u()(t,{base:2})},showErrorMessage:function(t){this.$swal.fire("Error",t.error,"error")},selectImages:function(){this.$refs.fileInput.click()},addToQueue:function(){var t=this,e=Array.from(this.$refs.fileInput.files);e.length>0&&this.sortArray(e,"name"),e.forEach((function(e){t.queue.push({file:e,thumbnail:URL.createObjectURL(e),name:e.name,size:e.size,type:e.type,hidden:!1,error:null,completed:!1,allowRetry:!1})})),this.$refs.fileInput.value="",this.isUploading||this.processQueue()},invalidFileType:function(t){return"image/jpeg"!==t&&"image/png"!==t},processQueue:function(){var t=arguments,e=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var a,n,s,o,l,c,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=t.length>0&&void 0!==t[0]&&t[0],e.isUploadingValue=!0,n=0;case 3:if(!(n<e.queue.length)){i.next=42;break}if(s=e.queue[n],!s.hidden){i.next=7;break}return i.abrupt("continue",39);case 7:if(!s.completed){i.next=9;break}return i.abrupt("continue",39);case 9:if(null==s.uploading||a){i.next=11;break}return i.abrupt("continue",39);case 11:if(null==s.error||s.allowRetry){i.next=13;break}return i.abrupt("continue",39);case 13:if(!e.invalidFileType(s.type)){i.next=16;break}return s.error="The image is invalid or the image type is not allowed. Allowed types: png, jpg or jpeg",i.abrupt("continue",39);case 16:return s.error=null,s.allowRetry=!1,s.uploading=!0,o={timeout:1e5,headers:{Authorization:"Bearer ".concat(localStorage.getItem("actk")),"Content-Type":"multipart/form-data"}},l=new FormData,l.append("img",s.file),i.prev=22,i.next=25,r["a"].post("/images/upload",l,o);case 25:c=i.sent,e.upsertImage(c.data),s.completed=!0,i.next=38;break;case 30:if(i.prev=30,i.t0=i["catch"](22),u=e.processRequestError(i.t0,!0),!u.sessionExpired){i.next=36;break}return s.uploading=!1,i.abrupt("break",42);case 36:s.error=u.message,23===u.code||35===u.code?s.allowRetry=!1:s.allowRetry=!0;case 38:s.uploading=!1;case 39:n++,i.next=3;break;case 42:e.isUploadingValue=!1,e.cleanQueue();case 44:case"end":return i.stop()}}),i,null,[[22,30]])})))()},cleanQueue:function(){this.isUploading||(this.queue=this.queue.filter((function(t){return!t.hidden})))},retryFiles:function(){this.cleanQueue(),this.processQueue(!0)},removeFromQueue:function(t){this.queue[t].hidden=!0,this.cleanQueue()},clearCompleted:function(){this.queue.forEach((function(t){t.completed&&(t.hidden=!0)})),this.cleanQueue()}}},g=p,h=i("2877"),m=i("6544"),f=i.n(m),v=i("8336"),b=i("b0af"),y=i("99d9"),x=i("169a"),w=i("132d"),k=i("adda"),C=i("da13"),B=i("5d23"),L=i("34c3"),I=i("0fd9"),S=i("3129"),_=Object(h["a"])(g,s,o,!1,null,null,null),V=_.exports;f()(_,{VBtn:v["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VDialog:x["a"],VIcon:w["a"],VImg:k["a"],VListItem:C["a"],VListItemContent:B["a"],VListItemIcon:L["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VRow:I["a"],VSkeletonLoader:S["a"]});var E={name:"Images",components:{ImageUploader:V},mixins:[d["a"]],data:function(){return{dialog:!1,imageList:[],imageCount:null,pageSize:null,uploadingFiles:!1}},computed:{showEmptyState:function(){return this.imageList.length<=0},currentPage:function(){return Number(this.$route.query.page||1)},showPreviousBtn:function(){return this.currentPage>1},showNextBtn:function(){return this.imageCount>this.currentPage*this.pageSize}},mounted:function(){this.fetchImageList()},methods:{previousPage:function(){this.$router.replace("?page=".concat(this.currentPage-1)).catch((function(){})),this.fetchImageList()},nextPage:function(){this.$router.replace("?page=".concat(this.currentPage+1)).catch((function(){})),this.fetchImageList()},fetchImageList:function(){var t=this;this.$store.commit("updateLoaderOptions",{active:!0});var e=this.$route.query.page||0;e=e>0?e-1:e;var i={headers:{Authorization:"Bearer ".concat(localStorage.getItem("actk"))}};r["a"].get("/images?page=".concat(e),i).then((function(e){t.imageList=e.data.images,t.imageCount=e.data.total,t.pageSize=e.data.pageSize})).catch((function(e){t.processRequestError(e)})).finally((function(){t.$vuetify.goTo(0),t.$store.commit("updateLoaderOptions",null)}))},upsertImage:function(t){if(this.imageCount++,!(this.imageList.length>=this.pageSize)){var e=this.imageList.findIndex((function(e){return e.id===t.id}));-1===e?this.imageList.push(t):this.imageList.splice(e,1,t),this.sortImageList()}},sortImageList:function(){this.sortArray(this.imageList,"name")},renameImage:function(t){var e=this;this.$swal.fire({title:"Rename Image",input:"text",inputAttributes:{autocapitalize:"off"},inputValue:t.name,showCancelButton:!0,confirmButtonText:"Rename",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!e.$swal.isLoading()},preConfirm:function(i){var a={headers:{Authorization:"Bearer ".concat(localStorage.getItem("actk")),"Content-Type":"application/x-www-form-urlencoded"}},n="id=".concat(t.id,"&name=").concat(i);return r["a"].post("/images/rename",n,a).then((function(){var a=e.imageList.findIndex((function(e){return e.id===t.id}));t.name=i,e.imageList.splice(a,1,t),e.sortImageList()})).catch((function(t){e.processRequestError(t)}))}})},deleteImage:function(t){var e=this;this.$swal.fire({title:"Delete ".concat(t.name,"?"),text:"You CANNOT undo this action.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!e.$swal.isLoading()},preConfirm:function(){var i={headers:{Authorization:"Bearer ".concat(localStorage.getItem("actk")),"Content-Type":"application/x-www-form-urlencoded"}},a="id=".concat(t.id);return r["a"].post("/images/delete",a,i).then((function(){var i=e.imageList.findIndex((function(e){return e.id===t.id}));e.imageList.splice(i,1),e.sortImageList()})).catch((function(t){e.processRequestError(t)}))}})}}},$=E,O=(i("c76e"),i("62ad")),T=i("0789"),j=i("ce87"),P=i("490a"),z=Object(h["a"])($,a,n,!1,null,"649adfd0",null);e["default"]=z.exports;f()(z,{VBtn:v["a"],VCard:b["a"],VCardSubtitle:y["b"],VCardText:y["c"],VCol:O["a"],VExpandTransition:T["a"],VHover:j["a"],VIcon:w["a"],VImg:k["a"],VProgressCircular:P["a"],VRow:I["a"],VSkeletonLoader:S["a"]})},c76e:function(t,e,i){"use strict";i("23fa")},cee5:function(t,e,i){
/*!
 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 8.0.7
*/
!function(e,i){t.exports=i()}(0,(function(){"use strict";var t=/^(b|B)$/,e={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},i={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},a={floor:Math.floor,ceil:Math.ceil};function n(n){var r,s,o,l,c,u,d,p,g,h,m,f,v,b,y,x,w,k,C,B,L,I=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},S=[],_=0;if(isNaN(n))throw new TypeError("Invalid number");if(o=!0===I.bits,y=!0===I.unix,f=!0===I.pad,s=I.base||10,v=void 0!==I.round?I.round:y?1:2,d=void 0!==I.locale?I.locale:"",p=I.localeOptions||{},x=void 0!==I.separator?I.separator:"",w=void 0!==I.spacer?I.spacer:y?"":" ",C=I.symbols||{},k=2===s?I.standard||"iec":"jedec",m=I.output||"string",c=!0===I.fullform,u=I.fullforms instanceof Array?I.fullforms:[],r=void 0!==I.exponent?I.exponent:-1,B=a[I.roundingMethod]||Math.round,g=(h=Number(n))<0,l=s>2?1e3:1024,L=!1===isNaN(I.precision)?parseInt(I.precision,10):0,g&&(h=-h),(-1===r||isNaN(r))&&(r=Math.floor(Math.log(h)/Math.log(l)))<0&&(r=0),r>8&&(L>0&&(L+=8-r),r=8),"exponent"===m)return r;if(0===h)S[0]=0,b=S[1]=y?"":e[k][o?"bits":"bytes"][r];else{_=h/(2===s?Math.pow(2,10*r):Math.pow(1e3,r)),o&&(_*=8)>=l&&r<8&&(_/=l,r++);var V=Math.pow(10,r>0?v:0);S[0]=B(_*V)/V,S[0]===l&&r<8&&void 0===I.exponent&&(S[0]=1,r++),b=S[1]=10===s&&1===r?o?"kbit":"kB":e[k][o?"bits":"bytes"][r],y&&(S[1]=S[1].charAt(0),t.test(S[1])&&(S[0]=Math.floor(S[0]),S[1]=""))}if(g&&(S[0]=-S[0]),L>0&&(S[0]=S[0].toPrecision(L)),S[1]=C[S[1]]||S[1],!0===d?S[0]=S[0].toLocaleString():d.length>0?S[0]=S[0].toLocaleString(d,p):x.length>0&&(S[0]=S[0].toString().replace(".",x)),f&&!1===Number.isInteger(S[0])&&v>0){var E=x||".",$=S[0].toString().split(E),O=$[1]||"",T=O.length,j=v-T;S[0]="".concat($[0]).concat(E).concat(O.padEnd(T+j,"0"))}return c&&(S[1]=u[r]?u[r]:i[k][r]+(o?"bit":"byte")+(1===S[0]?"":"s")),"array"===m?S:"object"===m?{value:S[0],symbol:S[1],exponent:r,unit:b}:S.join(w)}return n.partial=function(t){return function(e){return n(e,t)}},n}))}}]);