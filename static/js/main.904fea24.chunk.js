(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(38)},20:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(20),t(1)),s=t(2),i=t(4),u=t(3),m=t(5),p=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"obj-title"},e.title))},E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).marcaRef=r.a.createRef(),t.yearRef=r.a.createRef(),t.planBaseRef=r.a.createRef(),t.planFullRef=r.a.createRef(),t.cotizarSeguro=function(e){e.preventDefault();var a=t.planBaseRef.current.checked?"basico":"completo",n={marca:t.marcaRef.current.value,year:t.yearRef.current.value,plan:a};t.props.cotizarSeguro(n)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"cotizar-auto",onSubmit:this.cotizarSeguro},r.a.createElement("div",{className:"campo"},r.a.createElement("label",{className:"mb-3 d-block"},"Marca"),r.a.createElement("select",{name:"marca",ref:this.marcaRef,className:"browser-default mb-4"},r.a.createElement("option",{defaultValue:"",disabled:""},"Seleccione una Marca"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",{className:"mb-3 d-block"},"A\xf1o"),r.a.createElement("select",{name:"year",ref:this.yearRef,className:"browser-default mb-4"},r.a.createElement("option",{defaultValue:"",disabled:""},"Seleccione una A\xf1o"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"),r.a.createElement("option",{value:"2011"},"2011"),r.a.createElement("option",{value:"2010"},"2010"),r.a.createElement("option",{value:"2009"},"2009"),r.a.createElement("option",{value:"2008"},"2008"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Plan:"),r.a.createElement("div",{className:"clear-line"},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"group1",ref:this.planBaseRef,type:"radio"}),r.a.createElement("span",null,"Basico"))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"group1",ref:this.planFullRef,type:"radio"}),r.a.createElement("span",null,"Completo"))))),r.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn orange"},"Cotizar"))}}]),a}(n.Component);function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}var f=t(8),v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).mostrarResumen=function(){var e=t.props.datos,a=e.marca,n=e.year,l=e.plan,c=t.props.resultado;return a&&n&&l?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card red lighten-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Resumen de Cotizacion"),r.a.createElement("p",null,r.a.createElement("b",null,"Marca:")," ",d(a)),r.a.createElement("p",null,r.a.createElement("b",null,"Plan:")," ",d(l)),r.a.createElement("p",null,r.a.createElement("b",null,"A\xf1o:")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"Valor Poliza:")," $",r.a.createElement(f.TransitionGroup,{component:"span",className:"resultado"},r.a.createElement(f.CSSTransition,{classNames:"resultado",key:c,timeout:{enter:500,exit:500}},r.a.createElement("span",null,c)))))))):null},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.mostrarResumen())}}]),a}(n.Component),b=(t(31),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={resultado:"",datos:{}},t.cotizarSeguro=function(e){console.log(e);var a=e.marca,n=e.plan,r=e.year,l=2e3,c=function(e){return(new Date).getFullYear()-e}(r);console.log("la diferencia es de "+c),l-=3*c*l/100,console.log(l),l=function(e){var a;switch(e){case"europeo":a=1.3;break;case"americano":a=1.15;break;case"asiatico":a=1.05}return a}(a)*l,console.log(l);var o=function(e){return"basico"===e?1.2:1.5}(n);l=parseFloat(o*l).toFixed(2),console.log("resultado plan ".concat(l));var s={marca:a,year:r,plan:n};t.setState({resultado:l,datos:s})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{title:"Cotizar Seguro"}),r.a.createElement(E,{cotizarSeguro:this.cotizarSeguro}),r.a.createElement(v,{datos:this.state.datos,resultado:this.state.resultado}))}}]),a}(n.Component));t(33),t(35),t(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.904fea24.chunk.js.map