(this["webpackJsonpfake-store"]=this["webpackJsonpfake-store"]||[]).push([[0],{19:function(e,t,c){},29:function(e,t,c){},45:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(13),r=c.n(n),i=c(7),l=c(6),o=c(2),j=(c(45),c(1));var u=function(){return Object(j.jsx)("div",{className:"main_About_container",children:Object(j.jsxs)("div",{className:"main_About_talk",children:[Object(j.jsx)("h2",{className:"title_about",children:"about the project"}),Object(j.jsx)("p",{className:"about_this_proect",children:"hi there this is a really fun project i enjoy it really well and it's made using react and redux with the power of sass js and product api & single product api it took me about tow dayes to make it i hope ur enjoy it if and there is an upgrade in the next dayes"})]})})};c(19),c.p;var d=function(){return Object(j.jsx)("div",{className:"main_Home_handler",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"title-container",children:[Object(j.jsx)("h2",{className:"fake_store",children:"get all ur product online"}),Object(j.jsxs)("h2",{children:["from Fake ",Object(j.jsx)("span",{children:"Shop"})]}),Object(j.jsx)(l.b,{to:"/shop",children:Object(j.jsx)("button",{className:"shop_btn",children:"go shopping"})})]})})})},h=c(31),b=c(32),p=c(34),O=c(33),m=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(h.a)(this,c),(e=t.call(this)).state={ulbarOpen:"ulbar",isOpen:!1,hamp:"hamp_line"},e}return Object(b.a)(c,[{key:"log",value:function(){console.log(this.state.isOpen)}},{key:"OpenAndClose",value:function(){var e=this;!1===this.state.isOpen?(e.setState({isOpen:!0}),e.setState({hamp:"hamblineOpen"}),e.setState({ulbarOpen:"ulbar ulbarOpen"})):(e.setState({isOpen:!1}),e.setState({hamp:"hamp_line"}),e.setState({ulbarOpen:"ulbar"}))}},{key:"linkClick",value:function(){this.setState({isOpen:!1}),this.setState({hamp:"hamp_line"}),this.setState({ulbarOpen:"ulbar"})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)(l.b,{to:"/",className:"Home_link",children:"Fake Store"}),Object(j.jsxs)("div",{onClick:function(){return e.OpenAndClose()},className:"hamp",children:[Object(j.jsx)("span",{className:this.state.hamp}),Object(j.jsx)("span",{className:this.state.hamp}),Object(j.jsx)("span",{className:this.state.hamp})]}),Object(j.jsxs)("ul",{className:this.state.ulbarOpen,children:[Object(j.jsx)("li",{className:"liLins",children:Object(j.jsx)(l.b,{onClick:function(){return e.linkClick()},to:"/",className:"ulbar_links",children:"Home"})}),Object(j.jsx)("li",{className:"liLins",children:Object(j.jsx)(l.b,{onClick:function(){return e.linkClick()},to:"/shop",className:"ulbar_links",children:"Shop"})}),Object(j.jsx)("li",{className:"liLins",children:Object(j.jsx)(l.b,{onClick:function(){return e.linkClick()},to:"/about",className:"ulbar_links",children:"About"})})]})]})}}]),c}(s.a.Component),x=c(8),f=c.n(x),v=c(14),N=c(15),_=c.n(N),k="SET_PRODUCTS",g="SELECTED_PRODUCT",y="REMOVE_SELECTED_PRODUCT",S=function(e){return{type:k,payload:e}};c(29);var E=function(){var e=Object(i.c)((function(e){return e.product.products})),t=Object(i.b)(),c=function(){var e=Object(v.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("err",e)}));case 2:c=e.sent,console.log(c),t(S(c.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),console.log(e),Object(j.jsx)("div",{className:"main_products_section",children:e.map((function(e){return Object(j.jsx)(l.b,{to:"/products/".concat(e.id),children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"img",children:Object(j.jsx)("img",{src:e.image,alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{className:"header",children:e.title}),Object(j.jsx)("h2",{className:"price",children:e.price}),Object(j.jsx)("h2",{className:"category",children:e.category})]})]},e.id)})}))})};var C=function(){var e=Object(o.g)().id,t=Object(i.b)(),c=Object(i.c)((function(e){return e.Sproduct})),s=function(){var c=Object(v.a)(f.a.mark((function c(){var a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,_.a.get("https://fakestoreapi.com/products/".concat(e)).catch((function(e){console.log("err",e)}));case 2:a=c.sent,t((s=a.data,{type:g,payload:s}));case 4:case"end":return c.stop()}var s}),c)})));return function(){return c.apply(this,arguments)}}();return Object(a.useEffect)((function(){return e&&""!==e&&s(),function(){t({type:y})}}),[e]),console.log(c),Object(j.jsx)("div",{className:"productDeatials",children:Object(j.jsxs)("div",{className:"product_detail_handler",children:[Object(j.jsx)("div",{className:"image_handler",children:Object(j.jsx)("img",{src:c.image,className:"single_image"})}),Object(j.jsxs)("div",{className:"detail_handler",children:[Object(j.jsx)("h2",{className:"title_name",children:c.title}),Object(j.jsx)("span",{className:"price",children:c.price}),Object(j.jsx)("h3",{className:"category",children:c.category}),Object(j.jsx)("p",{className:"discription",children:c.description}),Object(j.jsx)("button",{className:"addToCard",children:"Add to Card"})]})]})})};var w=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/shop",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/products/:id",element:Object(j.jsx)(C,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/about",element:Object(j.jsx)(u,{})})]})]})})},T=c(16),D=c(10),A=Object(T.a)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case k:return Object(D.a)(Object(D.a)({},e),{},{products:a});default:return e}},Sproduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case g:return Object(D.a)(Object(D.a)({},e),a);case y:return{};default:return e}}}),L=Object(T.b)(A,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{store:L,children:Object(j.jsx)(w,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.94f580c5.chunk.js.map