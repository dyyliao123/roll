webpackJsonp([6,4],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var u=n(74),r=a(u),i=n(73),o=a(i),s=n(3),l=a(s),c=n(138),f=a(c),d=n(65),v=a(d),p=n(64),h=a(p),m=n(112),_=a(m);n(125),l.default.use(_.default),(0,o.default)(h.default).forEach(function(t){return l.default.filter(t,h.default[t])});var w=new l.default((0,r.default)({router:v.default},f.default));w.$mount("#app")},64:function(t,e){"use strict";function n(t){return t=t<10?"0"+t:t}e.fmtDate=function(t){var e=new Date,a=t?new Date(t):e,u=a.getFullYear(),r=n(a.getMonth()+1),i=n(a.getDate()),o=n(a.getHours()),s=n(a.getMinutes()),l=n(a.getSeconds()),c=u+"-"+r+"-"+i,f=o+":"+s+":"+l;return[c,f].join(" ")}},65:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),r=a(u),i=n(150),o=a(i);r.default.use(o.default);var s=function(t){return n.e(3,function(e){var n=[e(141)];t.apply(null,n)}.bind(this))},l=function(t){return n.e(2,function(e){var n=[e(142)];t.apply(null,n)}.bind(this))},c=function(t){return n.e(1,function(e){var n=[e(143)];t.apply(null,n)}.bind(this))},f=function(t){return n.e(0,function(e){var n=[e(140)];t.apply(null,n)}.bind(this))};e.default=new o.default({mode:"hash",routes:[{path:"/",component:f},{path:"/settings",component:l},{path:"/results",component:s},{path:"/try",component:c},{path:"*",redirect:"/try"}]})},66:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{navShow:!1,router1:{path:"/settings"},router2:{path:"/"},router3:{path:"/try"},router4:{path:"/results"},useRouter:!0}},methods:{hideNav:function(){this.navShow=!1},toggleNav:function(){this.navShow=!this.navShow}}}},125:function(t,e){},130:function(t,e){},138:function(t,e,n){var a,u;n(130),a=n(66);var r=n(148);u=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(u=a=a.default),"function"==typeof u&&(u=u.options),u.render=r.render,u.staticRenderFns=r.staticRenderFns,t.exports=a},148:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav",class:{active:t.navShow}},[n("el-menu",{attrs:{"default-active":"1",theme:"dark",router:t.useRouter}},[n("el-menu-item",{attrs:{index:"1",route:t.router1}},[n("i",{staticClass:"el-icon-setting"}),t._v("\n        抽奖设置\n      ")]),t._v(" "),n("el-menu-item",{attrs:{index:"2",route:t.router2}},[n("i",{staticClass:"el-icon-menu"}),t._v("\n        去抽奖\n      ")]),t._v(" "),n("el-menu-item",{attrs:{index:"3",route:t.router3}},[n("i",{staticClass:"el-icon-document"}),t._v("\n        试试效果\n      ")]),t._v(" "),n("el-menu-item",{attrs:{index:"4",route:t.router4}},[n("i",{staticClass:"el-icon-view"}),t._v("\n        抽奖结果\n      ")])],1),t._v(" "),n("div",{staticClass:"toggleNav",on:{click:t.toggleNav}},[n("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],staticClass:"mask",on:{click:t.hideNav}})]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.9c7477e53e85da56fa1c.js.map