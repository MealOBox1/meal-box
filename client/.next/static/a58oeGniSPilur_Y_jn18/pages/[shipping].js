(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0grt":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var l=n("q1tI"),i=n.n(l),o=n("R2GR"),r=n("aIN1"),a=i.a.createElement;function u(e){return a("div",null,a(o.default,null),e.children,a(r.a,null))}},"O5+v":function(e,t,n){"use strict";n.r(t);var l=n("rePB"),i=n("q1tI"),o=n.n(i),r=(n("0grt"),n("UaXu")),a=n("BMrR"),u=n("kPKH"),s=n("BvKs"),p=n("bx4M"),c=n("2/Rp"),d=(n("YFqc"),n("nOHt")),y=n.n(d),f=n("/MKj"),h=n("Oo8v"),g=n("TuAJ"),m=o.a.createElement;t.default=Object(f.b)((function(e){return{cart:e.order.cart,address:e.item.Address}}),{GetAddress:h.a,OrderAddress:g.c,GetCart:g.b})((function(e){var t=Object(d.useRouter)();console.log(t.query);var n=Object(i.useState)(0),o=n[0],f=n[1],h=Object(i.useState)(0),g=h[0],b=h[1],x=Object(i.useState)(0),w=x[0],v=x[1];return Object(i.useEffect)((function(){console.log("hiiiiiiiiii"),e.GetCart(t.query.shipping),e.GetAddress()}),[]),Object(i.useEffect)((function(){f(e.cart.price),console.log(o),b(20*o/100),v(o+g)})),console.log(e.cart),console.log(e.address[1]),m("div",null,m(r.a,null),m(a.a,null,m("h1",null,"Encrypted checkout")),m(a.a,null,m(u.a,{span:12},m(s.a,{mode:"horizontal"},m(s.a.Item,{key:"1",style:{height:"58px"}},m("h3",null," ",m("a",null,"1. shipping info"))),m(s.a.Item,{key:"2",style:{height:"58px"}},m("a",null,"2. payment info")))),m(u.a,{style:{borderBottom:"1px solid green",height:"42px"}},m("h3",null,"Shopping Cart"))),m(a.a,null,m(u.a,{span:10},m(p.a,{style:Object(l.a)({borderLeft:"3px solid #74cf4e",marginTop:"20px",width:"56%",marginLeft:"10px"},"marginTop","20px")},m("div",null,m("h2",null,"Home"),m("h2",null,"land mark"),m("h3",null,"pincode"),m(c.a,{type:"primary",htmlType:"submit",shape:"round",style:{backgroundColor:"#74cf4e",border:0},onClick:function(){e.OrderAddress(t.query.shipping,e.address[1]._id),y.a.push("/payment")}},"Delivery here"),m(c.a,{type:"primary",htmlType:"submit",shape:"round",style:{backgroundColor:"#74cf4e",border:0,marginLeft:"129px"}},"Edit")))),m(u.a,{style:{marginLeft:"106px"}},m("div",null,m("img",{src:"./images/plate.jpg",style:{objectFit:"cover",height:"48px",width:"234px"}})),m("div",{style:{marginBottom:"7px"}},m("div",{style:{display:"flex",justifyContent:"space-between",width:"233px",fontSize:"15px",height:"20px"}},e.cart.foodid?m("p",null,e.cart.foodid.menu):null,m("p",null,e.cart.days," Days")),m("div",{style:{display:"flex",justifyContent:"space-between",width:"233px",fontSize:"10px"}},m("p",{style:{marginBottom:0}},"Special 1 plate , 4 roti"),m("p",{style:{marginBottom:0}},"$",e.cart.price," "))),m("div",null,m(c.a,{type:"primary",htmlType:"submit",style:{backgroundColor:"#74cf4e",border:0,width:"233px"}},"Apply Promo code"),m("hr",null)),m("div",null,m("ul",{style:{listStyle:"none",fontSize:"12px",padding:0}},m("li",{style:{display:"flex",justifyContent:"space-between"}},m("h4",null,"Subtotal"),m("p",null,"$ ",e.cart.price)),m("li",{style:{display:"flex",justifyContent:"space-between"}},m("h4",null,"Taxes & Fares"),m("p",null,"$",g)),m("li",{style:{display:"flex",justifyContent:"space-between"}},m("h4",null,"Promo Code"),m("p",null,"$ 80")),m("li",{style:{display:"flex",justifyContent:"space-between"}},m("h4",null,"Delivery"),m("p",null,"$ 80")),m("li",{style:{display:"flex",justifyContent:"space-between",marginTop:"14px",fontSize:"27px"}},m("h4",null,"Total"),m("p",null,"$ ",w)))))))}))},TuAJ:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var l=n("DrnY"),i=n("nOHt"),o=n.n(i),r=function(e){return function(t){console.log(e),t({type:l.d,payload:e})}},a=function(e,t){return function(n){console.log(t),l.g.patch("/user/cart/".concat(e,"/address"),t).then((function(e){return n({type:l.c,payload:t})}))}},u=function(e){return function(t){console.log(e),l.g.get("/user/cart/".concat(e)).then((function(e){t({type:"Get_Cart",payload:e.data})}))}},s=function(e){return function(t){console.log(e);l.g.post("/user/cart",e,{headers:{"Content-Type":"application/json"}}).then((function(e){o.a.push("/[shipping]","/".concat(e.data._id)),t({type:"Add_cart",payload:e.data})}))}}},iHXz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[shipping]",function(){return n("O5+v")}])}},[["iHXz",0,1,2,3,5,6,7,8,9,10,4]]]);