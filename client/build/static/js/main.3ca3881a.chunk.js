(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,a){e.exports=a(87)},59:function(e,t,a){},60:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),l=(a(58),a(59),a(5)),o=a(6),u=a(8),i=a(7),h=a(9),m=(a(60),a(19)),p=a(16),d=a(91),f=a(10),g=a.n(f),k=function(e,t){return g.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},E=function(e,t,a){return g.a.post("/api/auth/signup/".concat(a),{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t){return g.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e){return r.a.createElement(d.a,{className:"nav justify-content-center",bg:"basic"},e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/"},"Welcome ",e.user.username),r.a.createElement(p.b,{to:"/",onClick:function(){console.log("click"),g.a.delete("/api/auth/logout"),e.clearUser(null)}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/signup"},"Signup"),r.a.createElement(p.b,{to:"/login"},"Login")))},w=a(18),y=a(90),O=a(92),j=a(89),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),k(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/create-flat"))}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Sign up"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(y.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(y.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(O.a,{variant:"danger"},this.state.error),r.a.createElement(j.a,{type:"submit"},"Sign up")))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",flatId:a.props.match.params.flatId,error:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),E(a.state.username,a.state.password,a.state.flatId).then((function(e){e.message?a.setState({error:e.message}):(console.log(e),a.props.setUser(e),a.props.history.push("/dashboard"))}))},a.componentDidMount=function(){console.log("Hallooooo"),console.log(a.props.match.params.flatId)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Signup"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(y.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(y.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(O.a,{variant:"danger"},this.state.error),r.a.createElement(j.a,{type:"submit"},"Sign up")))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),b(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/dashboard"))}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Log in"),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(y.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(y.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(O.a,{variant:"danger"},this.state.error),r.a.createElement(j.a,{type:"submit"},"Log in")))}}]),t}(n.Component),T=function(e){return r.a.createElement("input",Object.assign({type:"checkbox"},e))},A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",weeklyTasks:[],user:[],checkedOne:!1,checkedTwo:!1},a.handleCheckboxOneChange=function(e){console.log("here you have multiple things checked",e),a.setState({checkedOne:!a.state.checkedOne,weeklyTasks:a.state.weeklyTasks.concat(e)})},a.handleCheckboxTwoChange=function(e){console.log("here you have multiple things checked",e),a.setState({checkedTwo:!a.state.checkedTwo,weeklyTasks:a.state.weeklyTasks.concat(e)})},a.handleChange=function(e){console.log(e.target.name,e.target.value),a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("FLATFORM IS SUBMITED. B A N A N A S"),g.a.post("/api/create-flat",{name:a.state.name,weeklyTasks:a.state.weeklyTasks,user:a.props.user}).then((function(e){console.log("SHOW ME UPDATED DATAAAA",e),a.props.history.push("/invite/".concat(e.data._id))})).catch((function(e){console.log(e)}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Tell us about your flat "),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Name your apartment:"),r.a.createElement(y.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement("h2",null,"Choose your weekly tasks:"),r.a.createElement("label",null,r.a.createElement(T,{checked:this.state.checkedOne,onChange:function(){return e.handleCheckboxOneChange("Clean the kitchen")}}),r.a.createElement("span",null,"Clean the kitchen")),r.a.createElement("label",null,r.a.createElement(T,{checked:this.state.checkedTwo,onChange:function(){return e.handleCheckboxTwoChange("Clean the bathroom")}}),r.a.createElement("span",null,"Clean the bathroom")),r.a.createElement(j.a,{type:"submit"},"Create your flat!")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).getData=function(){var e=a.props.match.params.id;g.a.get("/api/invite/".concat(e)).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("MOUNTED"),this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,"Your flat has been successfully created. You can invite your flatmates by sharing this link with them.",r.a.createElement("p",null," signup/",this.props.match.params.id),r.a.createElement(p.b,{to:"/dashboard"},"GO to your DASHBOARD"))}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is the user page!"))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={currentWeek:"",currentYear:"",weekRange:""},a.previousWeek=function(){a.setState({currentWeek:a.state.currentWeek-1},(function(){g.a.get("/api/dashboard/".concat(a.state.currentWeek,"/").concat(a.state.currentYear)).then((function(e){console.log(e.data),a.setState({currentWeek:e.data.currentWeek.week,currentYear:e.data.currentWeek.year,weekRange:e.data.currentWeek.weekRange,flatName:e.data.rest.flat.name})}))}))},a.nextWeek=function(){var e=2019===a.state.currentYear||2021===a.state.currentYear||2022===a.state.currentYear;52===a.state.currentWeek&&e?a.setState({currentWeek:1,currentYear:a.state.currentYear+1},(function(){g.a.get("/api/dashboard/".concat(a.state.currentWeek,"/").concat(a.state.currentYear)).then((function(e){a.setState({currentWeek:e.data.currentWeek.week,currentYear:e.data.currentWeek.year,weekRange:e.data.currentWeek.weekRange,flatName:e.data.rest.flat.name})}))})):53!==a.state.currentWeek||e?a.setState({currentWeek:a.state.currentWeek+1},(function(){g.a.get("/api/dashboard/".concat(a.state.currentWeek,"/").concat(a.state.currentYear)).then((function(e){a.setState({currentWeek:e.data.currentWeek.week,currentYear:e.data.currentWeek.year,weekRange:e.data.currentWeek.weekRange,flatName:e.data.rest.flat.name})}))})):a.setState({currentWeek:1,currentYear:a.state.currentYear+1},(function(){g.a.get("/api/dashboard/".concat(a.state.currentWeek,"/").concat(a.state.currentYear)).then((function(e){a.setState({currentWeek:e.data.currentWeek.week,currentYear:e.data.currentWeek.year,weekRange:e.data.currentWeek.weekRange,flatName:e.data.rest.flat.name})}))}))},a.getData=function(){},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement(d.a,{className:"nav",bg:"basic"},this.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{onClick:this.previousWeek},"Last week"),r.a.createElement("h1",null,"This week ",this.props.currentInfo.currentWeek),r.a.createElement("h2",{onClick:this.nextWeek},"Next Week")):r.a.createElement(r.a.Fragment,null),this.state.currentWeek,r.a.createElement("h3",null,this.props.currentInfo.currentYear),r.a.createElement("br",null),r.a.createElement("div",null,this.props.currentInfo.weekRange),r.a.createElement("h1",null,"Ma flat"),r.a.createElement("div",null,this.props.flatInfo.name))}}]),t}(n.Component),x=function(e){console.log("COMING FROM ANOTHER COMPONENT PROPS",e);return r.a.createElement("button",{onClick:function(){g.a.put("/api/dashboard/".concat(e.task._id)).then((function(e){console.log("this is the Axios response: ",e)}))}},e.name)},R=function(e){return console.log("TASKS",e.tasks),r.a.createElement("div",null,r.a.createElement("h1",null,"Here are the unassigned Tasks"),e.tasks.map((function(e,t){return r.a.createElement(x,{key:t,task:e,name:e.name})})))},I=function(e){return console.log("ELEMNTARY DEAR AMELIA",e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{key:e.user._id}," ",e.user.username)))},U=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Here are the flatmates"),e.flatmate.map((function(e,t){return r.a.createElement(I,{key:t,user:e})})))},F=a(35),L=a.n(F),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,allTasks:[],flatInfo:{},currentWeek:null,currentYear:null,weekRange:null,flatmates:[],thisWeekTask:[]},a.getData=function(){console.log("Function getData / Refresh data got called"),g.a.get("/api/dashboard").then((function(e){console.log("Das Beautiful Resposne",e.data);var t=1*L()().format("W"),n=1*L()().format("Y"),r=e.data.filter((function(e){return e.week.week===t&&e.week.year===n})),s=r[0].week.weekRange,c=e.data[0].flat;a.setState({allTasks:e.data,flatInfo:c,thisWeekTask:r,currentWeek:r[0].week.week,currentYear:r[0].week.year,weekRange:s,flatmates:e.data[0].flat.user})})).catch((function(e){console.log(e)}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log(this.state),console.log(this.props),r.a.createElement("div",{className:"flat-container"},r.a.createElement(Y,{currentInfo:this.state,flatInfo:this.state.flatInfo,user:this.state.user}),r.a.createElement(U,{flatmate:this.state.flatmates,tasks:this.state.thisWeekTask}),r.a.createElement(R,{tasks:this.state.thisWeekTask}))}}]),t}(n.Component),G=(a(86),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-nav"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"teach-me-css-pls"},r.a.createElement("h1",null,"Flat'll Be the Day")),r.a.createElement("h2",null,"We offer a great solution to manage your WG life!")),r.a.createElement("div",{className:"home-button"},r.a.createElement("div",{className:"home-button-container"},r.a.createElement("a",{className:"button-links",href:"/signup"},"Sign up!")," "),r.a.createElement("div",{className:"home-button-container"},r.a.createElement("a",{className:"button-links",href:"/login"},"Log in!")," "))))}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:G}),r.a.createElement(m.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(C,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(m.a,{exact:!0,path:"/signup/:flatId",render:function(t){return r.a.createElement(W,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(m.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(S,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(m.a,{exact:!0,path:"/create-flat",render:function(t){return r.a.createElement(A,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(m.a,{exact:!0,path:"/invite/:id",render:function(t){return r.a.createElement(N,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{user:this.state.user,clearUser:this.setUser}),r.a.createElement(m.a,{exact:!0,path:"/dashboard",render:function(t){return r.a.createElement(M,Object.assign({},t,{user:e.state.user}))}})),r.a.createElement(m.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(D,Object.assign({},t,{user:e.state.user}))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log(e.data),c.a.render(r.a.createElement(p.a,null,r.a.createElement(B,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.3ca3881a.chunk.js.map