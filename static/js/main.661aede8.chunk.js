(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={conteiner:"App_conteiner__3yuD_",title:"App_title__FAFhN",secondTitle:"App_secondTitle__2nghW"}},12:function(t,e,n){t.exports={label:"Filter_label__1l_xZ",input:"Filter_input__TtbfC"}},2:function(t,e,n){t.exports={label:"Form_label__RflzT",input:"Form_input__2_F3D",btn:"Form_btn__1iPxq"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),s=n(15),o=n(5),l=n(6),u=n(8),b=n(7),m=n(9),d=n.n(m),h=n(0),j=function(t){var e=t.contacts,n=t.onDelete;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:d.a.list,children:e.map((function(t){var e=t.name,a=t.id,r=t.number;return Object(h.jsxs)("li",{className:d.a.itemContact,children:[Object(h.jsxs)("span",{children:[e,": ",r]}),Object(h.jsx)("button",{className:d.a.btn,onClick:function(){return n(a)},children:"Delete"})]},a)}))})})},p=n(14),f=n(3),_=n.n(f),C=n(2),O=n.n(C),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",id:""},t.nameInputId=_.a.generate(),t.numberInputId=_.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.conteiner,children:[Object(h.jsxs)("label",{htmlFor:this.nameInputId,className:O.a.label,children:["Name",Object(h.jsx)("input",{className:O.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(h.jsxs)("label",{htmlFor:this.numberInputId,className:O.a.label,children:["Number",Object(h.jsx)("input",{className:O.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(h.jsx)("button",{className:O.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),v=n(12),g=n.n(v),N=function(t){var e=t.filter,n=t.filterContacts;return Object(h.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},F=n(10),I=n.n(F),y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={name:e.name,number:e.number,id:_.a.generate()};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[n])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.filterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)("div",{className:I.a.conteiner,children:[Object(h.jsx)("h1",{className:I.a.title,children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:I.a.secondTitle,children:"Contacts"}),Object(h.jsx)(N,{filter:t,filterContacts:this.changeFilter}),Object(h.jsx)(j,{contacts:this.getVisibleContacts(),onDelete:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"Contacts_list__3uWer",btn:"Contacts_btn__2rKjL",itemContact:"Contacts_itemContact__2p2IQ"}}},[[29,1,2]]]);
//# sourceMappingURL=main.661aede8.chunk.js.map