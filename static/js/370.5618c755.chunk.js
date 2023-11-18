"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{641:function(t,e,n){n.d(e,{C:function(){return u}});var a=n(433),o=(n(791),n(535)),c=n(434),r=n(671),s=n(686),i=n(184),u=function(){var t=(0,c.I0)(),e=(0,c.v9)((function(t){return t.contactsStore.contacts})),n=(0,c.v9)((function(t){return t.contactsStore.filter})),u=(0,c.v9)((function(t){return t.contactsStore.favoriteContacts})),l=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})),m=(0,a.Z)(l).sort((function(t,e){return t.name.localeCompare(e.name)}));return(0,i.jsx)("ul",{className:o.Z.list,children:m.length>0?m.map((function(e){return(0,i.jsxs)("li",{className:o.Z.item,children:[(n=e.id,u.some((function(t){return t.id===n}))?(0,i.jsx)("button",{className:o.Z.button,onClick:function(){return function(e){t((0,r.QJ)(e.id)),s.Notify.info('Contact "'.concat(e.name,'" removed from favorites'))}(e)},title:'Remove favorite "'.concat(e.name,'"'),children:"\ud83d\udc99"}):(0,i.jsx)("button",{className:o.Z.button,onClick:function(){return function(e){t((0,r.Jh)(e)),s.Notify.success('Contact "'.concat(e.name,'" added to favorites'))}(e)},title:'Add to favorite "'.concat(e.name,'"'),children:"\ud83e\udd0d"})),(0,i.jsxs)("a",{className:o.Z.link,href:"tel:".concat(e.number),children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:e.name}),":"]}),(0,i.jsxs)("span",{children:[e.number,":"]})]}),(0,i.jsx)("button",{className:"".concat(o.Z.button," ").concat(o.Z.buttonDelete),onClick:function(){return function(e,n){t((0,r.GK)(n)),s.Notify.info('Contact "'.concat(e,'" deleted')),t((0,r.QJ)(n))}(e.name,e.id)},title:'Delete contact "'.concat(e.name,'"'),children:"Delete"})]},e.id);var n})):(0,i.jsx)("h3",{className:o.Z.subtitle,children:"No contacts found."})})}},916:function(t,e,n){n.d(e,{w:function(){return s}});var a=n(434),o="Filter_input__N7T3z",c=n(671),r=n(184),s=function(){var t=(0,a.I0)();return(0,r.jsx)("input",{className:o,type:"text",placeholder:"Search by name",onChange:function(e){return t((0,c.xO)(e.target.value))}})}},370:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(439),o=n(434),c="ContactForm_form__dhl+T",r="ContactForm_input__Bl93P",s="ContactForm_button__eSwX9",i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},u=n(671),l=n(686),m=n(184),d=function(){var t=(0,o.I0)(),e=(0,o.v9)((function(t){return t.contactsStore.contacts}));return(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var o=(0,a.Z)(n.target.elements,2),c=o[0],r=o[1];if(e.some((function(t){return t.name.toLowerCase()===c.value.toLowerCase()})))alert("A contact with that name (".concat(c.value.toLowerCase(),") already exists, try changing the name"));else if(e.some((function(t){return t.number===r.value})))alert("A contact with this phone number (".concat(r.value,") already exists"));else{var s={name:c.value,number:r.value,id:i()};try{t((0,u.uK)(s)),c.value="",r.value="",l.Notify.success('Contact "'.concat(s.name,'"  added successfully'))}catch(m){l.Notify.error('Contact "'.concat(s.name,'" not added.  Error: ').concat(m.message))}}},className:c,children:[(0,m.jsx)("input",{className:r,type:"text",name:"name",placeholder:"Enter name",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0407\u0457\u0406\u0456\\s]+$",title:"You can enter only letters of the Latin and Cyrillic alphabets, as well as spaces."}),(0,m.jsx)("input",{className:r,type:"tel",name:"number",placeholder:"Enter number",required:!0,pattern:"^(\\+?\\d+){5,12}$",title:"Phone number must start with '+' (optional) and contain only digits. Length: 5-12 characters."}),(0,m.jsx)("button",{type:"submit",className:s,title:"Add new contact",children:"Add contact"})]})},f=n(641),h=n(916),_=(n(791),n(971)),b=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:_.Z.title,children:"Phonebook"}),(0,m.jsx)(d,{}),(0,m.jsx)("h2",{className:_.Z.subtitle,children:"Contacts"}),(0,m.jsx)(h.w,{}),(0,m.jsx)(f.C,{})]})}},535:function(t,e){e.Z={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",link:"ContactList_link__SuaLH",button:"ContactList_button__7kL4l",subtitle:"ContactList_subtitle__sjzfd",buttonDelete:"ContactList_buttonDelete__3LEoC"}},971:function(t,e){e.Z={title:"styles_title__Eys6g",subtitle:"styles_subtitle__DqUiJ"}}}]);
//# sourceMappingURL=370.5618c755.chunk.js.map