(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{36:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(3),o=n.n(c),r=n(11),i=n.n(r),u=(n(36),n(12)),s=n(13),p=n(16),b=n(15),h=n(14),f=n(28),l=(n(43),n(44),f.a.initializeApp({apiKey:"AIzaSyAuLpmjZD86qEhsnHsOGDRqDwTqKxkVWVA",authDomain:"chat-app-bf67e.firebaseapp.com",databaseURL:"https://chat-app-bf67e.firebaseio.com",projectId:"chat-app-bf67e",storageBucket:"chat-app-bf67e.appspot.com",messagingSenderId:"915630136742",appId:"1:915630136742:web:622c223daaabecdbfac367",measurementId:"G-GHDM5Z73CH"}),n(20)),d=(n(46),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"boo",children:"Home"}),Object(a.jsx)("button",{onClick:function(){return e.props.facebook_login()},children:"Facebook Login"}),"    "]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("props==>",e),{}}}]),n}(o.a.Component)),j=Object(h.b)((function(e){return{users:e.users}}),(function(e){return{set_data:function(t){return e(function(e){return function(t){console.log(e),t({type:"SETDATA",data:e})}}())},facebook_login:function(){return e((function(e){var t=new l.a.auth.FacebookAuthProvider;l.a.auth().signInWithPopup(t).then((function(e){e.credential.accessToken;var t=e.user;console.log("user==>",t)})).catch((function(e){e.code;var t=e.message;console.log(t)}))}))}}}))(d),g=(n(47),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(j,{})})}}]),n}(o.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},m=(n(48),n(30)),v=n(21),k={users:[{name:"mehroz",email:"blah@gmail.com"}]},y=n(9),A=n(29),D=Object(y.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETDATA":return Object(v.a)(Object(v.a)({},e),{},{users:[].concat(Object(m.a)(e.users),[t.data])});default:return e}}),Object(y.a)(A.a));i.a.render(Object(a.jsx)(h.a,{store:D,children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}},[[49,1,2]]]);
//# sourceMappingURL=main.5cd6d6e2.chunk.js.map