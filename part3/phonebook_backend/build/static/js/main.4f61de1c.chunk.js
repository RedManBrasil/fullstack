(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(14),r=n(0),l=n.n(r),c=n(13),u=n.n(c),i=n(2),s=n.n(i),d="http://localhost:3001/persons",f=function(e){return s.a.post(d,e).then(function(e){return e.data})},m=function(e,t){return s.a.put("".concat(d,"/").concat(e),t).then(function(e){return e.data})},w=function(e){return s.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data})},b=(n(38),function(e){if(null===e.alert)return null;return e.alertGood?l.a.createElement("div",{className:"error",style:{color:"#23db79"}},e.alert):l.a.createElement("div",{className:"error",style:{color:"#eb4034"}},e.alert)}),p=function(e){return l.a.createElement("div",null,"filter shown with: ",l.a.createElement("input",{value:e.new,onChange:function(t){e.set(t.target.value)}}))},h=function(e){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={name:e.newNa,number:e.newNo,date:(new Date).toISOString(),id:Math.floor(1e3*Math.random()+1)};if(void 0===e.newPe.find(function(t){return t.name===e.newNa}))e.setPe(e.newPe.concat(n)),f(n),e.setAlGood(!0),e.setAl("Added ".concat(e.newNa)),e.setNa(""),e.setNo(""),setTimeout(function(){e.setAl(null)},5e3);else if(!0===window.confirm("".concat(e.newNa," is already added to the phonebook, replace the older number to a new one?"))){var a=e.newPe.find(function(t){return t.name===e.newNa}).id,r=e.newPe;m(a,Object(o.a)({},n,{id:a})).then(function(t){var n=e.newPe.map(function(e){return e.id}).indexOf(a);console.log(r),r[n].number=e.newNo,e.setPe(r),e.setNa(""),e.setNo("")})}else e.setNa(""),e.setNo("")}},l.a.createElement("div",null,"name: ",l.a.createElement("input",{value:e.newNa,onChange:function(t){e.setNa(t.target.value)}})),l.a.createElement("div",null,"number: ",l.a.createElement("input",{value:e.newNo,onChange:function(t){e.setNo(t.target.value)}})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"add"))))},v=function(e){return l.a.createElement("div",null,l.a.createElement("br",null),function(){return(t=e.newFi,e.persons.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1})).map(function(t){return l.a.createElement("div",{key:t.id},t.name," ",t.number," ",l.a.createElement("button",{onClick:function(){return function(t){if(!0===window.confirm("Confirm deletion?")){var n=e.persons.concat([]),a=e.persons.map(function(e){return e.id}).indexOf(t);w(t).catch(function(t){e.setAlGood(!1),e.setAl("Information of ".concat(e.persons[a].name," has already been removed from the server")),setTimeout(function(){e.setAl(null)},5e3)}),n.splice(a,1),e.setPe(n)}}(t.id)}},"delete"))});var t}())},E=function(){var e=Object(r.useState)([{name:"Arto Hellas",number:"99632-1057",date:"2019-07-01T00:00:00.334Z",id:1}]),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("write name here..."),u=Object(a.a)(c,2),i=u[0],d=u[1],f=Object(r.useState)("write number here..."),m=Object(a.a)(f,2),w=m[0],E=m[1],N=Object(r.useState)(""),O=Object(a.a)(N,2),j=O[0],g=O[1],P=Object(r.useState)(null),A=Object(a.a)(P,2),S=A[0],y=A[1],k=Object(r.useState)(!1),C=Object(a.a)(k,2),G=C[0],x=C[1];return Object(r.useEffect)(function(){s.a.get("https://stormy-bastion-72047.herokuapp.com/api/persons").then(function(e){console.log("promise fulfilled"),o(e.data),console.log(e.data)})},[]),Object(r.useEffect)(function(){console.log("State of Persons has changed")},[n]),l.a.createElement("div",null,l.a.createElement("h2",null,"Phonebook"),l.a.createElement(b,{alert:S,alertGood:G}),l.a.createElement(p,{set:g,new:j}),l.a.createElement("h3",null,"add a new"),l.a.createElement(h,{setNo:E,newNo:w,setNa:d,newNa:i,newPe:n,setPe:o,setAl:y,setAlGood:x}),l.a.createElement(v,{persons:n,setPe:o,newFi:j,setAl:y,setAlGood:x}))};t.default=E;u.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4f61de1c.chunk.js.map