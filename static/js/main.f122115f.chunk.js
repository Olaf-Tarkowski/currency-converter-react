(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(4),s=t.n(a),l=(t(10),t(5)),u=t(2),o=(t(11),[{name:"EUR",value:"4.5633"},{name:"USD",value:"3.7736"},{name:"GBP",value:"5.2474"},{name:"CHF",value:"4.1282"}]),i=t(0),j=function(){var e=Object(c.useState)(""),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(o.find((function(e){return"EUR"===e.name})).value),s=Object(u.a)(a,2),j=s[0],b=s[1],m=Object(c.useState)(0),d=Object(u.a)(m,2),f=d[0],h=d[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"form",children:Object(i.jsxs)("fieldset",{className:"form__fieldset",children:[Object(i.jsx)("legend",{className:"form__legend",children:"Currency converter"}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{className:"form__label",children:" I have: PLN "})}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{className:"form__label",children:Object(i.jsx)("input",Object(l.a)({value:t,onChange:function(e){return r(e.target.value)},className:"form__number",type:"number",step:"any",min:"0"},"step","0.01"))})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{className:"form__label",children:[" I want:",Object(i.jsx)("select",{value:j,onChange:function(e){return b(e.target.value)},className:"form__select",children:o.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.name},e.value)}))})]})}),Object(i.jsx)("p",{children:Object(i.jsx)("label",{children:Object(i.jsx)("input",{value:f.toFixed(2),onChange:function(e){return h(e.target.value)},disabled:"true",className:"form__number",type:"number"})})}),Object(i.jsx)("button",{className:"form__button",onClick:function(){h((function(){return t/j}))},children:"Convert"})]})})},b=(t(13),function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{className:"header__title",children:"Welcome in Currency Converter "}),Object(i.jsx)("p",{className:"header__paragraph",children:"nobody can cheat you here, i guess?"})]})}),m=(t(14),function(){return Object(i.jsx)("footer",{className:"footer",children:"YouCode"})}),d=(t(15),function(e){var n=e.children;return Object(i.jsx)("main",{className:"body__backgroundImage",children:n})});var f=function(){return Object(i.jsxs)(d,{children:[Object(i.jsx)(b,{}),Object(i.jsx)(j,{}),Object(i.jsx)(m,{})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.f122115f.chunk.js.map