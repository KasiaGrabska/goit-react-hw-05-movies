"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,n,t){t.r(n);var r=t(861),c=t(439),o=t(757),a=t.n(o),i=t(791),u=t(87),s=t(184);n.default=function(){var e=(0,i.useState)(""),n=(0,c.Z)(e,2),t=n[0],o=n[1],h=(0,i.useState)([]),l=(0,c.Z)(h,2),f=l[0],v=l[1],d=function(){var e=(0,r.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=2c19f06b3ac9c7abd175314ddc5a725d&query=".concat(encodeURIComponent(t)));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,v(r.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error searching for movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Search Movies"}),(0,s.jsx)("input",{type:"text",value:t,onChange:function(e){return o(e.target.value)}}),(0,s.jsx)("button",{onClick:d,children:"Search"}),(0,s.jsx)("ul",{children:f.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,o,a){try{var i=e[o](a),u=i.value}catch(s){return void t(s)}i.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,o){var a=e.apply(n,t);function i(e){r(a,c,o,i,u,"next",e)}function u(e){r(a,c,o,i,u,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=115.9db4fad0.chunk.js.map