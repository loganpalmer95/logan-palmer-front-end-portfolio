(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){var a={"./links/0.jpg":14,"./links/1.jpg":15,"./work/0.jpg":16,"./work/1.jpg":17,"./work/2.jpg":18};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=13},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.d387e085.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.82504940.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.000e1b5f.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.f349d6db.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.1ca4ae87.jpg"},function(e,t,n){var a={"./links/0.jpg":20,"./links/1.jpg":21,"./work/0.jpg":22,"./work/1.jpg":23,"./work/2.jpg":24};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=19},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.d387e085.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.82504940.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.000e1b5f.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.f349d6db.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.1ca4ae87.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),i=n.n(c),o=(n(11),n(2));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=n(0);var d=function(e){var t=e.categories,n=void 0===t?[]:t,r=e.setCurrentCategory,c=e.contactSelected,i=e.currentCategory,o=e.setContactSelected;return Object(a.useEffect)((function(){document.title=s(i.name)}),[i]),Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:" "})," Logan Palmer"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return o(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(c&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return o(!0)},children:"Contact"})}),n.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(i.name===e.name&&!c&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){r(e),o(!1)},children:s(e.name)})},e.name)}))]})})]})},u=n.p+"static/media/cover-image.b391b80c.jpg";var j=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:u,className:"my-2",style:{width:"50%"},alt:"cover"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"I am a recent graduate of University of Central Florida's Full-Stack Software developer bootcamp leveraging a background in Customer Service and Operations Management working towards my career goal of becoming a Software Developer. In my off time, I enjoy spending time with family, friends and playing golf."})})]})},m=n(3),b=function(e){var t=e.onClose,a=e.currentPhoto,r=a.name,c=a.description,i=a.category,o=a.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsxs)("h3",{className:"modalTitle",children:[r," "]}),Object(l.jsx)("img",{src:n(13)("./".concat(i,"/").concat(o,".jpg")).default,alt:"current category"}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("button",{type:"button",onClick:t,children:"Close this window"})]})})},p=function(e){var t=e.category,r=Object(a.useState)(!1),c=Object(o.a)(r,2),i=c[0],s=c[1],d=Object(a.useState)(),u=Object(o.a)(d,2),j=u[0],p=u[1],h=Object(a.useState)([{name:"Run Buddy",category:"work",description:"An application where a user can locate a fitness instructor for one on one mentoring. GitHib Repo: https://github.com/loganpalmer95/run-buddy. See deployed app here: https://loganpalmer95.github.io/run-buddy/."},{name:"Open Source Kanban",category:"work",description:"This is a web app that allows developers bring new thoughts and ideas to the world. You are able to log in and register and then post content, delete content, reply to someone else's post and then edit or delete those responses. GitHub Repo: https://github.com/AdrianHenry15/Open-Source-Kanban. See deployed app here: https://oskdb.herokuapp.com/"},{name:"Food Finder",category:"work",description:"This is a web app that allows users to enter a city name and show them the Google Weather API and local restaurants within a 5 mile radius. GitHub Repo: https://github.com/loganpalmer95/group-project. See deployed web app here: https://loganpalmer95.github.io/group-project/"},{name:"LinkedIn",category:"links",description:"Find my LinkedIn profile here: https://www.linkedin.com/in/loganpalmer95/."},{name:"GitHub",category:"links",description:"Find my GitHub Repo here: https://github.com/loganpalmer95/."}]),g=Object(o.a)(h,1)[0].filter((function(e){return e.category===t})),f=function(e,t){p(Object(m.a)(Object(m.a)({},e),{},{index:t})),s(!i)};return Object(l.jsxs)("div",{children:[i&&Object(l.jsx)(b,{onClose:f,currentPhoto:j}),Object(l.jsx)("div",{className:"flex-row",children:g.map((function(e,a){return Object(l.jsx)("img",{src:n(19)("./".concat(t,"/").concat(a,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return f(e,a)}},e.name)}))})]})};var h=function(e){var t=e.currentCategory;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:s(t.name)}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)(p,{category:t.name})]})},g=n(4);var f=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],d=i[1],u=n.name,j=n.email,b=n.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));s||(r(Object(m.a)(Object(m.a)({},n),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:p})]}),s&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:s})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var O=function(){var e=Object(a.useState)([{name:"work",description:"Screenshots and links to previous projects I've worked on"},{name:"links",description:"Links to my LinkedIn and GitHub"}]),t=Object(o.a)(e,1)[0],n=Object(a.useState)(t[0]),r=Object(o.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),m=u[0],b=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{categories:t,setCurrentCategory:i,currentCategory:c,contactSelected:m,setContactSelected:b}),Object(l.jsx)("main",{children:m?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{currentCategory:c}),Object(l.jsx)(j,{})]})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}],[[25,1,2]]]);
//# sourceMappingURL=main.e95ef7d1.chunk.js.map