(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ZAwR:function(t,e,s){},vdy0:function(t,e,s){"use strict";var a=s("ZAwR");s.n(a).a},zVZC:function(t,e,s){"use strict";s.r(e);var a=s("TVxV"),i=s.n(a),n={name:"NavBar",computed:{routerList:function(){return this.$store.getters.routerList}}},l=s("KHd+"),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-fixed"},[s("nav",{staticClass:"lighten-3 shadow"},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-wrapper"},[s("router-link",{staticClass:"left brand-logo hide-on-med-and-down",attrs:{to:{path:"/about"}}},[t._v("N'Co 2")]),t._v(" "),s("router-link",{staticClass:"center brand-logo hide-on-large-only",attrs:{to:{path:"/about"}}},[t._v("N'Co 2")]),t._v(" "),s("ul",{staticClass:"right hide-on-med-and-down"},t._l(t.routerList,(function(e,a){return s("li",{key:a,class:{active:t.$route.path==e.path}},[s("router-link",{attrs:{to:{path:e.path}}},[s("span",[t._v(t._s(e.displayName))])])],1)})),0),t._v(" "),t._m(0)],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"sidenav-trigger",attrs:{href:"javascript:;","data-target":"aside-menu"}},[e("i",{staticClass:"las la-bars"})])}],!1,null,null,null).exports,o={name:"MobileAside",computed:{routerList:function(){return this.$store.getters.routerList}}},c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"sidenav",attrs:{id:"aside-menu"}},[t._m(0),t._v(" "),t._l(t.routerList,(function(e,a){return s("li",{key:a,class:{active:t.$route.path==e.path}},[s("router-link",{attrs:{to:{path:e.path}}},[s("i",{staticClass:"la-2x",class:e.icon}),t._v(" "),s("span",[t._v(t._s(e.displayName))])])],1)})),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"sidenav-close brown-text text-lighten-3 center",attrs:{href:"javascript:;","data-target":"aside-menu"}},[this._v("Close Menu "),e("i",{staticClass:"las la-times brown-text text-lighten-3 right"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"divider"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"subheader center"},[this._v("More About Me")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("a",{staticClass:"brown-text text-lighten-2",attrs:{href:"https://github.com/nicole-tu",target:"_blank"}},[e("i",{staticClass:"lab la-github la-2x"})]),this._v(" "),e("a",{staticClass:"brown-text text-lighten-2",attrs:{href:"https://www.linkedin.com/in/nicole-tu-22a425120/",target:"_blank"}},[e("i",{staticClass:"lab la-linkedin la-2x"})]),this._v(" "),e("a",{staticClass:"brown-text text-lighten-2",attrs:{href:"mailto:nicoletu183@gmail.com"}},[e("i",{staticClass:"las la-envelope la-2x"})])])])}],!1,null,null,null).exports,u={name:"Footer"},h=Object(l.a)(u,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"page-footer center shadow"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12"},[e("h6",{staticClass:"grey-text text-lighten-5"},[this._v("Learn more about Nicole")]),this._v(" "),e("div",{attrs:{id:"footer-links"}},[e("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"https://github.com/nicole-tu",target:"_blank"}},[e("i",{staticClass:"lab la-github la-2x"})]),this._v(" "),e("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://www.linkedin.com/in/nicole-tu-22a425120/",target:"_blank"}},[e("i",{staticClass:"lab la-linkedin la-2x"})]),this._v(" "),e("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"https://codepen.io/nicoletu",target:"_blank"}},[e("i",{staticClass:"lab la-codepen la-2x"})])])])])]),this._v(" "),e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"container"},[this._v("\n\t\t\tNicole Tu © 2020 Copyright\n\t\t")])])])}],!1,null,null,null).exports,v={name:"ScrollToTop",props:{btnColor:{type:String,default:"white"}},data:function(){return{visible:!1}},methods:{scrollTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-50)}),20)},scrollListener:function(){this.visible=window.scrollY+window.screen.height>=document.body.offsetHeight}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)}},d=(s("vdy0"),{name:"Main",components:{NavBar:r,MobileAside:c,Footer:h,ScrollToTop:Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"btn-scroll-top bottom-right",on:{click:this.scrollTop}},[e("a",{staticClass:"btn-floating btn-large waves-effect waves-light",class:this.btnColor},[e("i",{staticClass:"las la-angle-up grey-text"})])])}),[],!1,null,"0e0ef67b",null).exports},mounted:function(){i.a.AutoInit(),window.addEventListener("resize",(function(){i.a.AutoInit()}))}}),f=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar"),this._v(" "),e("mobile-aside"),this._v(" "),e("main",[e("router-view")],1),this._v(" "),e("Footer"),this._v(" "),e("scroll-to-top")],1)}),[],!1,null,null,null);e.default=f.exports}}]);