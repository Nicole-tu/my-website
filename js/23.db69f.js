(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{uPqe:function(t,e,a){"use strict";a.r(e);var s={name:"Contact",data:function(){return{isLoading:!1,formSubmited:!1,firstName:null,lastName:null,email:null,subject:null,content:null}},methods:{sendMail:function(){var t=this;event.preventDefault(),null!==this.email&&null!==this.firstName&&null!==this.content&&null!==this.subject?(this.isLoading=!0,this.formSubmited=!1,emailjs.send("default_service","my_website_contact",{email:this.email,name:"".concat(this.firstName," ").concat(this.lastName),content:this.content,subject:this.subject},"user_jjthA7RZ7CBlR82LfcMxq").then((function(){t.formSubmited=!0,t.isLoading=!1,M.toast({html:'Thank you for contacting me, <span class="name">'.concat(t.firstName,"</span>. I have received your message and will get back to you soon."),classes:"green lighten-2"})}),(function(e){t.isLoading=!1,M.toast({html:e.text,classes:"red lighten-2"})})).finally((function(){t.firstName=null,t.lastName=null,t.email=null,t.subject=null,t.content=null,t.formSubmited=!1}))):M.toast({html:"Please input form items.",classes:"red lighten-2"})}},mounted:function(){emailjs.init("user_jjthA7RZ7CBlR82LfcMxq")}},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container center"},[s("div",{staticClass:"content-header"},[s("h4",{staticClass:"grey-text text-darken-2"},[t._v("Contact Me")]),t._v(" "),s("div",{staticClass:"contact-img"},[s("img",{attrs:{src:a("gJcw")}})])]),t._v(" "),t._m(0),t._v(" "),t.isLoading?s("div",{staticClass:"contact-loading"},[s("h5",[t._v("SENDING...")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("form",{staticClass:"col s12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"validate",class:{invalid:t.formSubmited},attrs:{id:"first_name",type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"first_name"}},[t._v("First Name")])]),t._v(" "),s("div",{staticClass:"input-field col s6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"validate",class:{invalid:t.formSubmited},attrs:{id:"last_name",type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"last_name"}},[t._v("Last Name")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",class:{invalid:t.formSubmited},attrs:{id:"email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"validate",class:{invalid:t.formSubmited},attrs:{id:"subject",type:"text"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"subject"}},[t._v("Subject")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"materialize-textarea validate",class:{invalid:t.formSubmited},attrs:{id:"textarea1"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"textarea1"}},[t._v("Message")])])]),t._v(" "),s("div",{staticClass:"row"},[s("a",{staticClass:"waves-effect waves-light btn-large",on:{click:t.sendMail}},[t._v("Send")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"grey-text"},[this._v("\n\t\tLeave message or send Email\n\t\t"),e("a",{attrs:{href:"mailto:nicoletu183@gmail.com"}},[e("i",{staticClass:"las la-envelope"})]),this._v(" to\n\t\tnicoletu183@gmail.com\n\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"indeterminate"})])}],!1,null,null,null);e.default=l.exports}}]);