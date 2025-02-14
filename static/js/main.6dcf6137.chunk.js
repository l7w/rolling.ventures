(this["webpackJsonprolling.ventures"]=this["webpackJsonprolling.ventures"]||[]).push([[0],{10:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(7),r=t(3),m=t(5);const{NODE_ENV:i,REACT_APP_GA_TRACKING_ID:o}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GA_TRACKING_ID:"G-88MS2VSDXE"});"production"===i&&m.a.initialize(o);var s=()=>{const{pathname:e}=Object(r.n)();return Object(l.useEffect)(()=>{"production"===i&&(m.a.set({page:e}),m.a.pageview(e))},[e]),null},E=t(4);var u=[{index:!0,label:"Chris Dickman",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Research",path:"/research"},{label:"Contact",path:"/contact"},{label:"Links",path:"/links"}];const d=Object(l.lazy)(()=>t.e(3).then(t.t.bind(null,41,7)));var b=()=>{const[e,a]=Object(l.useState)(!1);return n.a.createElement("div",{className:"hamburger-container"},n.a.createElement("nav",{className:"main",id:"hambuger-nav"},n.a.createElement("ul",null,e?n.a.createElement("li",{className:"menu close-menu"},n.a.createElement("div",{onClick:()=>a(!e),className:"menu-hover"},"\u2715")):n.a.createElement("li",{className:"menu open-menu"},n.a.createElement("div",{onClick:()=>a(!e),className:"menu-hover"},"\u2630")))),n.a.createElement(l.Suspense,{fallback:n.a.createElement(n.a.Fragment,null)},n.a.createElement(d,{right:!0,isOpen:e},n.a.createElement("ul",{className:"hamburger-ul"},u.map(t=>n.a.createElement("li",{key:t.label},n.a.createElement(E.b,{to:t.path,onClick:()=>a(!e)},n.a.createElement("h3",{className:t.index&&"index-li"},t.label))))))))};var h=()=>n.a.createElement("header",{id:"header"},n.a.createElement("h1",{className:"index-link"},u.filter(e=>e.index).map(e=>n.a.createElement(E.b,{key:e.label,to:e.path},e.label))),n.a.createElement("nav",{className:"links"},n.a.createElement("ul",null,u.filter(e=>!e.index).map(e=>n.a.createElement("li",{key:e.label},n.a.createElement(E.b,{to:e.path},e.label))))),n.a.createElement(b,null)),p=t(12);const{PUBLIC_URL:_}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GA_TRACKING_ID:"G-88MS2VSDXE"});var O=()=>n.a.createElement("section",{id:"sidebar"},n.a.createElement("section",{id:"intro"},n.a.createElement(E.b,{to:"/",className:"logo"},n.a.createElement("img",{src:_+"/images/me.jpg",alt:""})),n.a.createElement("header",null,n.a.createElement("h2",null,"Chris Dickman (cdx)"),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:cdx@l7w.org"},"cdx@l7w.org")))),n.a.createElement("section",{className:"blurb"},n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"Hi, I'm Chris aka cdx. I am a [Reverse+Backend+CloudOps+DevOps] Engineer."),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,window.location.pathname.includes("/resume")?n.a.createElement(E.b,{to:"/about",className:"button"},"About Me"):n.a.createElement(E.b,{to:"/resume",className:"button"},"Learn More")))),n.a.createElement("section",{id:"footer"},n.a.createElement(p.a,null),n.a.createElement("p",{className:"copyright"},"\xa9 Chris Dickman",n.a.createElement(E.b,{to:"/"},"www.l7w.org"),".")));var v=()=>{const{pathname:e}=Object(r.n)();return Object(l.useEffect)(()=>{window.scrollTo(0,0)},[e]),null};const C=e=>n.a.createElement(c.b,null,n.a.createElement(s,null),n.a.createElement(v,null),n.a.createElement(c.a,{titleTemplate:"%s | Chris Dickman",defaultTitle:"Chris Dickman | Resume",defer:!1},e.title&&n.a.createElement("title",null,e.title),n.a.createElement("meta",{name:"description",content:e.description})),n.a.createElement("div",{id:"wrapper"},n.a.createElement(h,null),n.a.createElement("div",{id:"main"},e.children),e.fullPage?null:n.a.createElement(O,null)));C.defaultProps={children:null,fullPage:!1,title:null,description:"Chris Dickman's workLog."};a.a=C},12:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(13),r=t(16),m=t(17);var i=[{link:"tel:+1702",label:"LinkedIn",icon:r.a},{link:"mailto:cdx@l7w.org",label:"Email",icon:m.faEnvelope}];a.a=()=>n.a.createElement("ul",{className:"icons"},i.map(e=>n.a.createElement("li",{key:e.label},n.a.createElement("a",{href:e.link},n.a.createElement(c.a,{icon:e.icon})))))},18:function(e,a,t){e.exports=t(29)},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(8),r=t(4),m=t(3),i=t(10);t(28);const{PUBLIC_URL:o}=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GA_TRACKING_ID:"G-88MS2VSDXE"}),s=Object(l.lazy)(()=>t.e(5).then(t.bind(null,39))),E=Object(l.lazy)(()=>t.e(7).then(t.bind(null,44))),u=Object(l.lazy)(()=>t.e(8).then(t.bind(null,40))),d=Object(l.lazy)(()=>t.e(6).then(t.bind(null,43))),b=Object(l.lazy)(()=>Promise.all([t.e(4),t.e(9)]).then(t.bind(null,42)));var h=()=>n.a.createElement(r.a,{basename:o},n.a.createElement(l.Suspense,{fallback:n.a.createElement(i.a,null)},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(s,null)}),n.a.createElement(m.a,{path:"/about",element:n.a.createElement(s,null)}),n.a.createElement(m.a,{path:"/research",element:n.a.createElement(d,null)}),n.a.createElement(m.a,{path:"/contact",element:n.a.createElement(E,null)}),n.a.createElement(m.a,{path:"/resume",element:n.a.createElement(b,null)}),n.a.createElement(m.a,{path:"*",element:n.a.createElement(u,null)}))));const p=()=>n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),_=document.getElementById("root");if(_.hasChildNodes())Object(c.hydrateRoot)(_,n.a.createElement(p,null));else{Object(c.createRoot)(_).render(n.a.createElement(p,null))}}},[[18,1,2]]]);
//# sourceMappingURL=main.6dcf6137.chunk.js.map