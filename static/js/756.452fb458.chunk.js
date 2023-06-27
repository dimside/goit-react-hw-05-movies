"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{3756:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,a,c,i,s,u=e(5861),o=e(9439),p=e(4687),f=e.n(p),x=e(2791),d=e(7689),h=e(6286),l=e(8282),m=e(4546),v=e(5763),g=e(168),Z=e(5706),w=Z.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0px 2px 2px 2px #b0b0b0;\n  width: 205px;\n  height: 360px;\n\n  & img {\n    width: 205px;\n  }\n"]))),j=Z.Z.div(a||(a=(0,g.Z)(["\n  height: 308px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-shadow: 0 4px 2px -2px gray;\n"]))),b=Z.Z.div(c||(c=(0,g.Z)(["\n  padding: 5px 10px;\n  overflow: auto;\n\n  & b {\n    margin-bottom: 5px;\n  }\n"]))),y=e(184),I=function(n){var t=n.name,e=n.character,r=n.actorImg;return(0,y.jsxs)(w,{children:[(0,y.jsx)(j,{children:r?(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:"actor ".concat(t)}):(0,y.jsx)("img",{src:m,alt:"There are no images",width:100})}),(0,y.jsxs)(b,{children:[(0,y.jsxs)("b",{children:[(0,y.jsx)(v.Lqe,{})," ",t]}),(0,y.jsx)("p",{children:"Character: ".concat(e)})]})]})},k=Z.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 200px;\n"]))),M=Z.Z.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding-top: 15px;\n  \n"]))),N=function(){var n=(0,x.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)(),c=(0,o.Z)(a,2),i=c[0],s=c[1],p=(0,x.useState)(),m=(0,o.Z)(p,2),v=m[0],g=m[1],Z=(0,d.UO)().movieId;return(0,x.useEffect)((function(){try{g(!0),(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.zv)(Z);case 2:t=n.sent,r(t),g(!1);case 5:case"end":return n.stop()}}),n)})))()}catch(n){g(!1),s(n.message)}}),[Z]),(0,y.jsxs)(y.Fragment,{children:[v&&(0,y.jsx)(k,{children:(0,y.jsx)(h.NB,{colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})}),i&&!v&&(0,y.jsx)("div",{children:i}),!v&&(0,y.jsx)(M,{children:e.map((function(n){var t=n.name,e=n.character,r=n.profile_path,a=n.id;return(0,y.jsx)(I,{name:t,character:e,actorImg:r,id:a},a)}))})]})}},8282:function(n,t,e){e.d(t,{Hg:function(){return s},TP:function(){return o},tx:function(){return f},z1:function(){return u},zv:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmM3MDM0ZjQzZmMxMWRhZjUzOTY2NmIxNGU1YmVhMCIsInN1YiI6IjY0OTk4NTA1YjM0NDA5MDBlMjcyZTgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0M9W_VhYxYdCcevqQPPA792PMZPlCZIhzDoN3aG3W-M",accept:"application/json"}}),s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/all/day?");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"?"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/credits?"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/reviews?"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4546:function(n,t,e){n.exports=e.p+"static/media/emptyImg.3684e37c6c29c788e623.png"}}]);
//# sourceMappingURL=756.452fb458.chunk.js.map