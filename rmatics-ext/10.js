(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{B0Y9:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("ye30"),u=function(){function n(n,l){this.workshopService=n,this.router=l,this.workshop=this.workshopService.workshop,this.isFetching=this.workshopService.isFetching}return n.prototype.ngOnInit=function(){var n=Number(this.router.routerState.snapshot.root.children[0].paramMap.get("workshopId"));this.workshopService.getWorkshop(n)},n.prototype.onContestClicked=function(n){this.hasContestStarted(n.time_start)&&(this.workshopService.setFetching(!0),this.router.navigate(["contest",n.id]))},n.prototype.hasContestStarted=function(n){return new Date(n)<new Date},n.prototype.sortContests=function(n){return n.sort(function(n,l){return n.position-l.position})},n}(),i=function(){return function(){}}(),r=t("pMnS"),a=t("Ip0R"),s=t("9T6n"),c=t("Kcpt"),p=function(){function n(){this.titleMain="",this.titleExtra="",this.open=!1}return n.prototype.ngOnInit=function(){},n}(),b=o.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}._open[_nghost-%COMP%]{box-shadow:inset 0 -1px 0 0 var(--light-gray-1)}.button[_ngcontent-%COMP%]{width:100%;padding:13px 16px;background-color:var(--light-gray-3);border-radius:2px}.title[_ngcontent-%COMP%]{font-family:var(--roboto);font-size:14px;font-weight:500;line-height:1.29}.title_extra[_ngcontent-%COMP%]:before{content:'';display:block;margin:0 8px;height:1em;width:1px;background-color:var(--light-gray-1)}.icon[_ngcontent-%COMP%]{transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.icon_rotated[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.inner[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}"]],data:{}});function h(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"span",[["class","title title_extra flex-center"]],null,null,null,null,null)),(n()(),o.Lb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.titleExtra)})}function g(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"div",[["class","inner"]],null,null,null,null,null)),o.Cb(null,0)],null,null)}function f(n){return o.Nb(2,[(n()(),o.tb(0,0,null,null,9,"button",[["class","button flex-center flex-space-between"]],null,[[null,"click"]],function(n,l,t){var o=!0,e=n.component;return"click"===l&&(o=0!=(e.open=!e.open)&&o),o},null,null)),(n()(),o.tb(1,0,null,null,4,"div",[["class","flex-center"]],null,null,null,null,null)),(n()(),o.tb(2,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),o.Lb(3,null,[" "," "])),(n()(),o.kb(16777216,null,null,1,null,h)),o.sb(5,16384,null,0,a.k,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(n()(),o.tb(6,0,null,null,3,"app-icon",[["class","icon"],["height","9"],["icon","arrow"],["width","13"]],null,null,null,s.b,s.a)),o.sb(7,278528,null,0,a.i,[o.u,o.v,o.k,o.H],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Gb(8,{icon_rotated:0}),o.sb(9,49152,null,0,c.a,[],{icon:[0,"icon"],width:[1,"width"],height:[2,"height"]},null),(n()(),o.kb(16777216,null,null,1,null,g)),o.sb(11,16384,null,0,a.k,[o.S,o.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,5,0,t.titleExtra);var o=n(l,8,0,t.open);n(l,7,0,"icon",o),n(l,9,0,"arrow","13","9"),n(l,11,0,t.open)},function(n,l){n(l,3,0,l.component.titleMain)})}var d=t("zgJ7"),k=t("o7am"),w=t("ZYCi"),m=o.rb({encapsulation:0,styles:[[".paragraph[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.link[_ngcontent-%COMP%]{cursor:pointer}.loading[_ngcontent-%COMP%]{display:flex;width:500px;height:500px;margin:auto;justify-content:center;align-items:center}.workshop-title[_ngcontent-%COMP%]{padding-bottom:24px;font-size:28px;font-weight:500;line-height:1.29;letter-spacing:normal;color:#2d3446}.text[_ngcontent-%COMP%]{font-size:14px;line-height:1.29;overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 32px);color:var(--black)}"]],data:{}});function x(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,2,"div",[["class","flex-center paragraph"]],[[2,"link",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.onContestClicked(n.context.$implicit)&&o),o},null,null)),(n()(),o.tb(1,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(n()(),o.Lb(2,null,["",""]))],null,function(n,l){n(l,0,0,l.component.hasContestStarted(l.context.$implicit.time_start)),n(l,2,0,l.context.$implicit.statement.name)})}function v(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,4,"app-accordion",[["titleMain","\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"]],[[2,"_open",null]],null,null,f,b)),o.sb(2,114688,null,0,p,[],{titleMain:[0,"titleMain"],open:[1,"open"]},null),(n()(),o.kb(16777216,null,0,2,null,x)),o.sb(4,278528,null,0,a.j,[o.S,o.P,o.u],{ngForOf:[0,"ngForOf"]},null),o.Fb(131072,a.b,[o.h])],function(n,l){var t=l.component;n(l,2,0,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",!0),n(l,4,0,t.sortContests(o.Mb(l,4,0,o.Db(l,5).transform(t.workshop)).contests))},function(n,l){n(l,1,0,o.Db(l,2).open)})}function C(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,2,"div",[["class","loading"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,1,"app-loader",[],null,null,null,d.b,d.a)),o.sb(2,49152,null,0,k.a,[],null,null)],null,null)}function M(n){return o.Nb(2,[(n()(),o.kb(16777216,null,null,2,null,v)),o.sb(1,16384,null,0,a.k,[o.S,o.P],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),o.Fb(131072,a.b,[o.h]),(n()(),o.kb(0,[["loading",2]],null,0,null,C))],function(n,l){var t=l.component;n(l,1,0,!o.Mb(l,1,0,o.Db(l,2).transform(t.isFetching)),o.Db(l,3))},null)}function _(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"app-workshop",[],null,null,null,M,m)),o.sb(1,114688,null,0,u,[e.a,w.o],null,null)],function(n,l){n(l,1,0)},null)}var y=o.pb("app-workshop",u,_,{},{},[]),P=t("gIcY"),O=t("PCNd"),B=t("AKD8"),S=t("hhbb"),I=t("oRDy");t.d(l,"WorkshopModuleNgFactory",function(){return N});var N=o.qb(i,[],function(n){return o.Ab([o.Bb(512,o.j,o.fb,[[8,[r.a,y]],[3,o.j],o.A]),o.Bb(4608,a.m,a.l,[o.w,[2,a.u]]),o.Bb(4608,P.r,P.r,[]),o.Bb(4608,P.d,P.d,[]),o.Bb(1073742336,a.c,a.c,[]),o.Bb(1073742336,P.p,P.p,[]),o.Bb(1073742336,P.h,P.h,[]),o.Bb(1073742336,O.a,O.a,[]),o.Bb(1073742336,w.q,w.q,[[2,w.x],[2,w.o]]),o.Bb(1073742336,P.n,P.n,[]),o.Bb(1073742336,B.a,B.a,[]),o.Bb(1073742336,S.b,S.b,[]),o.Bb(1073742336,I.a,I.a,[]),o.Bb(1073742336,i,i,[]),o.Bb(1024,w.m,function(){return[[{path:"",component:u}]]},[])])})}}]);