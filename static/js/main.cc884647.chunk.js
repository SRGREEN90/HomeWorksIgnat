(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,s,t){e.exports={message:"Message_message__3HiQP",avatar:"Message_avatar__1i8cV",img:"Message_img__KT3IB",message_content:"Message_message_content__3rXsS",message_body:"Message_message_body__1Oo05",user_message:"Message_user_message__2qIYH",user_name:"Message_user_name__1Oz1c",time_container:"Message_time_container__3Izz7",time:"Message_time__2e0jm"}},,function(e,s,t){e.exports={someClass:"Affairs_someClass__2v-0K",some:"Affairs_some__3XYyF"}},,,function(e,s,t){e.exports={App:"App_App__wU9Ku"}},,,,,function(e,s,t){},,function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n=t(6),r=t.n(n),c=(t(12),t(7)),o=t.n(c),l=t(2),m=t.n(l),j=t(0),d=function(e){return Object(j.jsxs)("div",{className:m.a.message,children:[Object(j.jsx)("div",{className:m.a.avatar,children:Object(j.jsx)("img",{className:m.a.img,src:e.avatar,alt:"avatar"})}),Object(j.jsxs)("div",{className:m.a.message_content,children:[Object(j.jsxs)("div",{className:m.a.message_body,children:[Object(j.jsx)("div",{className:m.a.user_name,children:e.name}),Object(j.jsx)("div",{className:m.a.user_message,children:e.message})]}),Object(j.jsx)("div",{className:m.a.time_container,children:Object(j.jsx)("div",{className:m.a.time,children:e.time})})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",u="Some Name",b="some text",h="22:00";var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(d,{avatar:_,name:u,message:b,time:h}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},O=t(5),x=t(4),g=t.n(x);var v=function(e){return Object(j.jsxs)("div",{className:g.a.someClass,children:[Object(j.jsx)("span",{className:g.a.some,children:e.affair.name}),Object(j.jsx)("span",{children:Object(j.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]})};var p=function(e){var s=e.data.map((function(s){return Object(j.jsx)(v,{affair:s,deleteAffairCallback:e.deleteAffairCallback},s._id)}));return Object(j.jsxs)("div",{children:[s,Object(j.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(k),s=Object(O.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)("all"),r=Object(O.a)(n,2),c=r[0],o=r[1],l=function(e,s){return"all"===s?e:e.filter((function(e){return e.priority===s}))}(t,c);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(p,{data:l,setFilter:o,deleteAffairCallback:function(e){return i(function(e,s){return e.filter((function(e){return e._id!==s}))}(t,e))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var y=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)(f,{}),Object(j.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.cc884647.chunk.js.map