(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{317:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(60),{layout:"void",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios,e.next=6;break;case 4:return n=e.sent,e.abrupt("return",{workshop:n});case 6:case"end":return e.stop()}}),e)})))()}}),c=n(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.workshop?n("div",{staticClass:"articles container2"},t._l(t.workshop,(function(e,i){return n("div",{key:i,staticClass:"article",on:{click:function(n){return t.$router.push("/workshop-page/"+e.id)}}},[n("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("nuxt-link",{attrs:{to:"/workshop-page/"+e.id}},[e.image.name?n("img",{staticClass:"image",attrs:{src:"../images/"+e.image.name,alt:""}}):t._e()]),t._v(" "),n("div",{staticClass:"desc",domProps:{innerHTML:t._s(e.about)}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);