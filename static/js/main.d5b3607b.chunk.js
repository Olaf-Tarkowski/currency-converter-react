(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),l=(n(10),n(3)),o=n(2),u=(n(11),[{name:"EUR",value:"4.5633"},{name:"USD",value:"3.7736"},{name:"GBP",value:"5.2474"},{name:"CHF",value:"4.1282"}]),i=n(0),j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(u.find((function(e){return"EUR"===e.name})).value),s=Object(o.a)(r,2),j=s[0],b=s[1],m=Object(c.useState)(0),d=Object(o.a)(m,2),f=d[0],O=d[1],h=Object(c.useState)(),v=Object(o.a)(h,2),x=v[0],_=v[1],g=Object(c.useState)(),p=Object(o.a)(g,2),N=p[0],y=p[1];return Object(c.useEffect)((function(){setInterval((function(){var e,t=new Date;_(t.toLocaleDateString(void 0,(e={weekday:"long",day:"long"},Object(l.a)(e,"day","numeric"),Object(l.a)(e,"month","long"),e)))})),setInterval((function(){var e=new Date;y(e.toLocaleTimeString())}))}),[x,N]),Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"form",children:Object(i.jsxs)("fieldset",{className:"form__fieldset",children:[Object(i.jsx)("legend",{className:"form__legend",children:"Currency converter"}),Object(i.jsxs)("p",{className:"form__clock",children:["Dzisiaj jest ",x," , ",N]}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{className:"form__label",children:" I have: PLN "})}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{className:"form__label",children:Object(i.jsx)("input",Object(l.a)({value:n,onChange:function(e){return a(e.target.value)},className:"form__number",type:"number",step:"any",min:"0"},"step","0.01"))})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{className:"form__label",children:[" I want:",Object(i.jsx)("select",{value:j,onChange:function(e){return b(e.target.value)},className:"form__select",children:u.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.name},e.value)}))})]})}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{children:Object(i.jsx)("input",{value:f.toFixed(2),onChange:function(e){return O(e.target.value)},disabled:"true",className:"form__number",type:"number"})})}),Object(i.jsx)("button",{className:"form__button",onClick:function(){O((function(){return n/j}))},children:"Convert"})]})})},b=(n(13),function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{className:"header__title",children:"Welcome in Currency Converter "}),Object(i.jsx)("p",{className:"header__paragraph",children:"nobody can cheat you here, i guess?"})]})}),m=(n(14),function(){return Object(i.jsx)("footer",{className:"footer",children:"YouCode"})}),d=(n(15),function(e){var t=e.children;return Object(i.jsx)("main",{className:"body__backgroundImage",children:t})});var f=function(){return Object(i.jsxs)(d,{children:[Object(i.jsx)(b,{}),Object(i.jsx)(j,{}),Object(i.jsx)(m,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.d5b3607b.chunk.js.map