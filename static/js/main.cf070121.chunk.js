(this.webpackJsonporion_web_tools=this.webpackJsonporion_web_tools||[]).push([[0],{34:function(e,t,a){e.exports=a(57)},39:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(39),a(3)),u=a(4),i=a(6),s=a(5),m=a(30),d=(a(42),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-width-1-1"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"uk-text-lead"},"Orion Academy Webtools and Database"),r.a.createElement("p",{className:"uk-text-meta"},"(Parent View - Username = pparent, Password = 123)"),r.a.createElement("p",{className:"uk-text-meta"},"(Admin View - Username = admin, Password = 123)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"Username: "),r.a.createElement("input",{className:"uk-input uk-form uk-form-width-medium uk-margin-right uk-margin-left",id:"userName",type:"text",placeholder:"Username",onChange:this.props.callbackOnChangeUsername}),r.a.createElement("label",{htmlFor:"pwd"},"Password: "),r.a.createElement("input",{className:"uk-input uk-form uk-form-width-medium uk-margin-right uk-margin-left",id:"Pwd",type:"text",placeholder:"Password",onChange:this.props.callbackOnChangePassword}),r.a.createElement(m.AwesomeButton,{id:"awesome button",size:"large",type:"primary",onPress:this.props.callbackButton},"Log In2")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"uk-text-medium uk-margin-top uk-margin-bottom"},"Don't have a username and password, or forgot yours? Email your student's homeroom teacher for assistance!"),r.a.createElement("p",{className:"uk-text-meta uk-margin-top uk-margin-bottom"},"Students must complete 350 hours of homebriding activity to fufill the physical education requirement. Log in to see your student's progress.")))}}]),a}(r.a.Component)),h=(a(43),a(44),a(7));var p=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"not_mobile"},r.a.createElement("nav",{className:"uk-navbar-container uk-width-1-1","uk-navbar":"true","uk-sticky":"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"},r.a.createElement("div",{className:"uk-navbar-center"},r.a.createElement("div",{className:"uk-navbar-center-left"},r.a.createElement("div",null,r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:""},r.a.createElement(h.b,{to:"/detentioncenter"},"Detention Center")),r.a.createElement("li",{className:""},r.a.createElement(h.b,{to:"/homeworkclub"},"Homework Club"))))),r.a.createElement(h.b,{className:"uk-navbar-item uk-logo",to:"/home"},"Orion"),r.a.createElement("div",{className:"uk-navbar-center-right"},r.a.createElement("div",null,r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:""},r.a.createElement(h.b,{to:"/homebriding"},"Homebriding")),r.a.createElement("li",null,r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:""},r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Support")))),r.a.createElement("div",{className:"uk-navbar-dropdown","uk-dropdown":"mode: click; pos: bottom-justify; offset: 10"},r.a.createElement("ul",{className:"uk-nav uk-navbar-dropdown-nav"},r.a.createElement("li",{className:"uk-active"},r.a.createElement("a",{href:"#"},"Support Tickets")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/guides"},"Guides")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Procedures"))))))))))))};var k=function(e){return r.a.createElement("div",{className:"uk-flex uk-flex-center","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("legend",{className:"uk-legend uk-margin-top"},e.collectionLegend),e.children)))},f=a(13);var E=function(e){var t=e.arrayToMap;return r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:e.configObjectValue},e.labelText),r.a.createElement("select",{onChange:e.callbackFunction,defaultValue:"default",id:e.configObjectValue,className:"uk-select"},t.map((function(e){return r.a.createElement("option",{id:f(),value:e},e)}))))},v={students:["Attias, Alessandro","Barnes, Nathan","Bobbitt, Matthew","Bongiorno, Anthony","Boyd, Michael","Brant, Miles","Castro Curry, Diego","Chao Bierhaus, Clara","Che, Micah","Cody, Joshua","Crain, Madi","Cunningham, Jack","Danielson, Kai","Dillon, Ana-Li","Donovan, William","Dwyer, Kelly","Edwardson, Thomas","Ereneta, Ben","Fazzio, Andrew","Foley, Daniel","Fox, John Edmund","Galka, Trevor","Gellman, Mira","Golinski, Daniel","Gorelick, Noah","Heitmann, Adam","Hubbell, Jack","Johnston, Peter","Joslyn, Matthew","Jureidini, Nico","Kantor, Ethan","Kavanaugh-Lynch, Matthew","Krull, Alexander","Lake, Ethan","Lessman, Cameron","Ley-Languren, Sergio","Lynn, Emmett Shaw","Mahoney, Caslyn","Mark, Christopher","Maschal, Charles Ashton","McInnis, Ben","Morales, Dominic","Morewitz, Benjamin","Murphy, Daniel","Owczarz, Adrian","Padgette, Cameron Matthew","Rangan, Govinda","Reiter, Sam","Rogers, Jack","Sofaer, Ezekiel","Sovocool, Natalie","Thomas, Jared","Wright, Julia","Zang, Hannah L."],homeworkClubHeaders:["Student","Class","Assignment Description","Due Date","Completed","Incompleted"],times:["15","30","45","60"],classes:["Computer Science Principles","Intro to Technology"],periods:["A","HR","1","2","3","4","lunch","5","6","7","8"],serverURL:"https://school-tools-demo-server.herokuapp.com"},b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={student:{},hours:0,displayedHours:0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.serverURL+"/api/singleStudent",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({studentId:this.props.studentId})}).then((function(e){return e.json()})).then((function(t){return e.setState({student:t,displayedHours:t.totalHours})}))}},{key:"setMinutes",value:function(){this.setState({hours:document.querySelector("#homebridingTime").value/60})}},{key:"updateHours",value:function(){var e=this;fetch(v.serverURL+"/api/singleStudent",{method:"PUT",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({studentId:this.props.studentId,hoursUpdate:this.state.hours})}).then((function(e){return e.json()})).then((function(t){return e.setState({student:t,displayedHours:e.state.displayedHours+e.state.hours})})).then(alert("Your students hours have been updated! Please refresh to see changes"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"uk-width-1-1 uk-flex uk-flex-center","uk-grid":"True"},r.a.createElement("div",{className:"uk-align-center"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",{className:"uk-text-lead"},"Example Student's homebriding Database")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",{className:"uk-text-small"},this.state.student.fname+" "+this.state.student.lname," has earned ",this.state.displayedHours,"/320 hours so far!"),r.a.createElement("p",{className:"uk-text-small"},"There are X days remaining until the next quarter of homebriding hours"))),r.a.createElement("div",{className:""},r.a.createElement("p",{className:"uk-text-medium"},"Log hours:"),r.a.createElement("label",{className:"uk-margin-right",htmlFor:"userName"},"Activity:"),r.a.createElement("input",{className:"uk-input uk-form uk-form-width-medium uk-margin-right",id:"activity",type:"text",placeholder:"Activity"}),r.a.createElement("label",{className:"uk-margin-right",htmlFor:"pwd"},"Date:"),r.a.createElement("input",{className:"uk-input uk-form uk-form-width-medium uk-margin-right",id:"date",type:"text",placeholder:"Date"}),r.a.createElement("button",{onClick:function(){return e.updateHours()},type:"button",className:"uk-align-right uk-margin-left uk-margin-right uk-button uk-button-primary"},"Submit"),r.a.createElement(E,{configObjectValue:"homebridingTime",arrayToMap:v.times,labelText:"Select amount of time (minutes): ",callbackFunction:function(){return e.setMinutes()}})))}}]),a}(r.a.Component);r.a.Component,r.a.Component;var g=function(e){return r.a.createElement("div",null,r.a.createElement(k,null,r.a.createElement(b,{studentId:e.studentId})))},y=a(2),S=(a(13),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",loginState:"",parent:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mount ",this.state.parent),this.setState({loginState:r.a.createElement(k,null,r.a.createElement(d,{callbackButton:function(){return e.authCheck()},callbackOnChangeUsername:function(t){return e.updateUsernameState(t)},callbackOnChangePassword:function(t){return e.updatePasswordState(t)}}))})}},{key:"updateUsernameState",value:function(e){this.setState({username:e.target.value})}},{key:"updatePasswordState",value:function(e){this.setState({password:e.target.value})}},{key:"authCheck",value:function(){var e=this;fetch(v.serverURL+"/parents",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({username:this.state.username,password:this.state.password})}).then((function(e){return e.json()})).then((function(t){0!=t&&(console.log("auth",t),e.setState({parent:t}))})).then((function(){return e.conditionalCheck()}))}},{key:"conditionalCheck",value:function(){0!=this.state.parent?this.setState({loginState:r.a.createElement(g,{studentId:this.state.parent.student})}):alert(this.state.condition+" is not a registered username!")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/"},this.state.loginState))))}}]),a}(r.a.Component)),w=a(28),C=a.n(w),N=a(32),O=a(12),j=a(14),T=a(13);var x=function(e){return r.a.createElement("div",{className:"uk-flex uk-flex-center uk-margin-right uk-margin-left"},r.a.createElement("table",{className:"uk-table uk-table-striped uk-table-divider uk-table-hover "},r.a.createElement("caption",null,r.a.createElement("legend",{className:"uk-legend uk-margin-top"},e.tableLegend)),r.a.createElement("thead",null,r.a.createElement("tr",{id:T()},e.tableHeaders.map((function(e){return r.a.createElement("th",{id:T()},e)})))),r.a.createElement("tbody",null,e.entries.map((function(e){return e})))))};var D=function(e){return r.a.createElement("button",{id:e.idProp,type:"button",className:"uk-button uk-button-primary",onClick:e.callbackFunction},e.buttonDisplayValue)};var H=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.studentName),r.a.createElement("td",null,e.selectorValue),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.dueDate),r.a.createElement(D,{idProp:e.referenceIndex,color:"green",type:"checkmark",callbackFunction:e.callbackRef,buttonDisplayValue:r.a.createElement("span",{"uk-icon":"icon: check; ratio: 3.5"})}))};var P=function(e){return r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-large uk-margin-bottom",onChange:e.callbackFunction,value:e.passedStateValue,id:e.passedId,type:"text",placeholder:e.descriptionPlaceholder}))};var L=function(e){return console.log(e.students),r.a.createElement("div",{className:"uk-flex uk-flex-center uk-margin-right uk-margin-left"},r.a.createElement("table",{className:"uk-table uk-table-striped uk-table-divider uk-table-hover "},r.a.createElement("caption",null,r.a.createElement("legend",{className:"uk-legend uk-margin-top"},e.tableLegend)),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Student Names"),r.a.createElement("th",null,"Hours Logged"),r.a.createElement("th",null,"Total Hours Earned"),r.a.createElement("th",null,"Hours Needed"))),r.a.createElement("tbody",null,e.students.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.lname+", "+e.fname),r.a.createElement("td",null,"hours this term"),r.a.createElement("td",null,e.totalHours),r.a.createElement("td",null,320-e.totalHours))})))))},M=a(60),A=a(33);a(50);var R=function(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),l=a[0],o=a[1];return r.a.createElement(A.a,{date:l,onDateChange:o,locale:M.a},(function(t){var a=t.inputProps,n=t.focused;return r.a.createElement("input",Object.assign({className:"uk-input uk-form-width-large uk-margin-bottom input"+(n?" -focused":""),onChange:e.callbackFunction,id:"date",type:"text",value:e.passedStateValue},a))}))};var I=function(e){return r.a.createElement("div",null,r.a.createElement(R,null,r.a.createElement("input",{className:"uk-input uk-form-width-large uk-margin-bottom",onChange:e.callbackFunction,id:"date",type:"text",value:e.passedStateValue})))},V=a(13),F=v.students,q=v.classes,U=v.homeworkClubHeaders;function J(e){var t=e.getFullYear(),a=(1+e.getMonth()).toString();a=a.length>1?a:"0"+a;var n=e.getDate().toString();return a+"/"+(n=n.length>1?n:"0"+n)+"/"+t}r.a.Component;var B=a(13),G=v.classes,_=v.periods,z=v.homeworkClubHeaders;function K(e){var t=e.getFullYear(),a=(1+e.getMonth()).toString();a=a.length>1?a:"0"+a;var n=e.getDate().toString();return a+"/"+(n=n.length>1?n:"0"+n)+"/"+t}var Y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={homeworkEntries:[],detentionEntries:[],dueDate:"",descriptionText:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.serverURL+"/api/adminHomeworkClub",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.initialTablePopulation(t)})),this.setState({dueDate:K(new Date)})}},{key:"initialTablePopulation",value:function(e){var t=this;console.log(e);for(var a=function(){var e=Object(j.a)(l[n],2),a=(e[0],e[1]);console.log(" *** value *** ",a),t.setState((function(e){return{homeworkEntries:[].concat(Object(O.a)(e.homeworkEntries),[r.a.createElement(H,{id:B(),referenceIndex:a._id,studentName:a.student.fname+" "+a.student.lname,selectorValue:a.class,description:a.description,dueDate:a.date,callbackRef:function(e){return t.onClickRemoveCard(e)}})])}}))},n=0,l=Object.entries(e);n<l.length;n++)a()}},{key:"onClickAddHomeworkCard",value:function(){var e=this,t=document.querySelector("#studentName").value.split(", "),a={date:document.querySelector("#date").value,assignedBy:"Mr.Lowe",period:document.querySelector("#classPeriod").value,class:document.querySelector("#classSection").value,description:document.querySelector("#descriptionText").value,studentFname:t[1],studentLname:t[0]};fetch(v.serverURL+"/api/adminHomeworkClub",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){return e.additionalTablePopulation(t._id)}))}},{key:"additionalTablePopulation",value:function(e){var t=this,a=document.querySelector("#studentName").value.split(", ");this.setState((function(n){return{homeworkEntries:[].concat(Object(O.a)(n.homeworkEntries),[r.a.createElement(H,{id:B(),referenceIndex:e,studentName:a[1]+" "+a[0],selectorValue:document.querySelector("#classSection").value,description:document.querySelector("#descriptionText").value,dueDate:document.querySelector("#date").value,callbackRef:function(e){return t.onClickRemoveCard(e)}})])}}))}},{key:"onClickRemoveCard",value:function(e){var t={referenceId:e.target.id};console.log(e.target.id),fetch(v.serverURL+"/api/adminHomeworkClub",{method:"DELETE",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(t)}).then((function(e){return e.json()})),this.setState({homeworkEntries:this.state.homeworkEntries.filter((function(t){return t.props.referenceIndex!==e.target.id}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k,{collectionLegend:"Homework Club"},r.a.createElement(E,{configObjectValue:"studentName",arrayToMap:this.props.students,labelText:"Select a student: "}),r.a.createElement(E,{configObjectValue:"classSection",arrayToMap:G,labelText:"Class of assignment: "}),r.a.createElement(E,{configObjectValue:"classPeriod",arrayToMap:_,labelText:"Class Period: "}),r.a.createElement(P,{callbackFunction:function(){return e.setState({descriptionText:document.querySelector("#descriptionText").value})},passedStateValue:this.state.descriptionText,descriptionPlaceholder:"Description of assignment",passedId:"descriptionText"}),r.a.createElement(I,{callbackFunction:function(){return e.setState({dueDate:document.querySelector("#date").value})},passedStateValue:this.state.dueDate}),r.a.createElement(D,{callbackFunction:function(){return e.onClickAddHomeworkCard()},buttonDisplayValue:"Add Student"})),r.a.createElement(x,{entries:this.state.homeworkEntries,tableHeaders:z,tableLegend:"Homework Club Entries"}))}}]),a}(r.a.Component),W=a(13),X=v.classes,Z=v.periods,Q=v.homeworkClubHeaders,$=["Inappropriate language","Teasing","Open computer","Inappropriate use of computer","Headphones on without specific permission","Speaking out during class","Tardiness","Name-calling","Disruptive behavior","Not following directions","Failure to do a chore","Cell Phones out or in use","Refusal to participate","Food in a classroom","Backpack or other materials not part of class, carried into class"];function ee(e){var t=e.getFullYear(),a=(1+e.getMonth()).toString();a=a.length>1?a:"0"+a;var n=e.getDate().toString();return a+"/"+(n=n.length>1?n:"0"+n)+"/"+t}var te=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={homeworkEntries:[],detentionEntries:[],dueDate:"",descriptionText:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.serverURL+"/api/adminHomeworkClub",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.initialTablePopulation(t)})),this.setState({dueDate:ee(new Date)})}},{key:"initialTablePopulation",value:function(e){var t=this;console.log(e);for(var a=function(){var e=Object(j.a)(l[n],2),a=(e[0],e[1]);console.log(" *** value *** ",a),t.setState((function(e){return{homeworkEntries:[].concat(Object(O.a)(e.homeworkEntries),[r.a.createElement(H,{id:W(),referenceIndex:a._id,studentName:a.student.fname+" "+a.student.lname,selectorValue:a.class,description:a.description,dueDate:a.date,callbackRef:function(e){return t.onClickRemoveCard(e)}})])}}))},n=0,l=Object.entries(e);n<l.length;n++)a()}},{key:"onClickAddHomeworkCard",value:function(){var e=this,t=document.querySelector("#studentName").value.split(", "),a={date:document.querySelector("#date").value,assignedBy:"Mr.Lowe",period:document.querySelector("#classPeriod").value,class:document.querySelector("#classSection").value,description:document.querySelector("#descriptionText").value,studentFname:t[1],studentLname:t[0]};fetch(v.serverURL+"/api/adminHomeworkClub",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){return e.additionalTablePopulation(t._id)}))}},{key:"additionalTablePopulation",value:function(e){var t=this,a=document.querySelector("#studentName").value.split(", ");this.setState((function(n){return{homeworkEntries:[].concat(Object(O.a)(n.homeworkEntries),[r.a.createElement(H,{id:W(),referenceIndex:e,studentName:a[1]+" "+a[0],selectorValue:document.querySelector("#classSection").value,description:document.querySelector("#descriptionText").value,dueDate:document.querySelector("#date").value,callbackRef:function(e){return t.onClickRemoveCard(e)}})])}}))}},{key:"onClickRemoveCard",value:function(e){var t={referenceId:e.target.id};console.log(e.target.id),fetch(v.serverURL+"/api/adminHomeworkClub",{method:"DELETE",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(t)}).then((function(e){return e.json()})),this.setState({homeworkEntries:this.state.homeworkEntries.filter((function(t){return t.props.referenceIndex!==e.target.id}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k,{collectionLegend:"Detentions"},r.a.createElement(E,{configObjectValue:"studentName",arrayToMap:this.props.students,labelText:"Select a student: "}),r.a.createElement(E,{configObjectValue:"classSection",arrayToMap:X,labelText:"Class of detention: "}),r.a.createElement(E,{configObjectValue:"classPeriod",arrayToMap:Z,labelText:"Class period detention was issued: "}),r.a.createElement(E,{configObjectValue:"misbehaviorCategory",arrayToMap:$,labelText:"Category of misbehavior"}),r.a.createElement(I,{callbackFunction:function(){return e.setState({dueDate:document.querySelector("#date").value})},passedStateValue:this.state.dueDate}),r.a.createElement(D,{callbackFunction:function(){return e.onClickAddHomeworkCard()},buttonDisplayValue:"Add Student"})),r.a.createElement(x,{entries:this.state.homeworkEntries,tableHeaders:Q,tableLegend:"Homework Club Entries"}))}}]),a}(r.a.Component),ae=(a(13),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allStudentInfo:[],students:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.serverURL+"/api/fetchStudentNames",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.collectStudentInfo(t)}))}},{key:"collectStudentInfo",value:function(e){var t=this;e.sort((function(e,t){return e.lname>t.lname?1:-1})),this.setState({allStudentInfo:e});for(var a=function(){var e=Object(j.a)(r[n],2),a=(e[0],e[1]);t.setState((function(e){return{students:[].concat(Object(O.a)(e.students),[a.lname+", "+a.fname])}}))},n=0,r=Object.entries(e);n<r.length;n++)a()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(p,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/detentioncenter"},r.a.createElement(te,{students:this.state.students}))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/homeworkclub"},r.a.createElement(Y,{students:this.state.students}))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/homebriding"},r.a.createElement(k,{collectionLegend:""},r.a.createElement(L,{students:this.state.allStudentInfo,tableLegend:"Homebriding 2020"})))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/supporttickets"},r.a.createElement("h1",null,"Coming soon!"))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/guides"},r.a.createElement("h1",null,"Coming soon!"))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/procedures"},r.a.createElement("h1",null,"Coming soon!"))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/home"},r.a.createElement("h1",null,"More data required to visualize effectively")))))}}]),a}(r.a.Component)),ne=(a(13),a(51)),re=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",loginState:"",admin:!1,loaded:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loginState:r.a.createElement(k,null,r.a.createElement(d,{callbackButton:function(){return e.authCheck()},callbackOnChangeUsername:function(t){return e.updateUsernameState(t)},callbackOnChangePassword:function(t){return e.updatePasswordState(t)}}))})}},{key:"updateUsernameState",value:function(e){this.setState({username:e.target.value})}},{key:"updatePasswordState",value:function(e){this.setState({password:e.target.value})}},{key:"authCheck",value:function(){var e=Object(N.a)(C.a.mark((function e(){var t=this;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("authcheck started, update finished9!",v.serverURL),e.next=3,fetch(v.serverURL+"/admin",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Origin:"https://ogjaylowe.github.io"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){console.log(e),0!=e&&t.setState({admin:e})})).then((function(){return t.conditionalCheck()}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"conditionalCheck",value:function(){0!=this.state.admin?this.setState({loginState:r.a.createElement(ae,null)}):alert(this.state.condition+" is not a registered username!")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/"},r.a.createElement(ne,{loaded:this.state.loaded},this.state.loginState)))))}}]),a}(r.a.Component);var le=function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/parentClient"},r.a.createElement(S,null)),r.a.createElement(y.a,{path:"/adminClient"},r.a.createElement(re,null)),r.a.createElement("ul",null,r.a.createElement("ul",null,r.a.createElement(h.b,{to:"/parentClient"},r.a.createElement("div",{class:"uk-card uk-card-primary uk-card-small uk-card-body",style:{marginTop:50,marginRight:120,marginLeft:100}},r.a.createElement("h3",{class:"uk-card-title",style:{textAlign:"center"}},"Parents"),r.a.createElement("span",{"uk-icon":"icon: user; ratio: 5",style:{textAlign:"center"}})))),r.a.createElement("ul",null,r.a.createElement(h.b,{to:"/adminClient"},r.a.createElement("div",{class:"uk-card uk-card-secondary uk-card-small uk-card-body",style:{marginTop:50,marginRight:120,marginLeft:100}},r.a.createElement("h3",{class:"uk-card-title"},"Teachers"),r.a.createElement("span",{"uk-icon":"icon: users; ratio: 5"}))))))))};o.a.render(r.a.createElement(le,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cf070121.chunk.js.map