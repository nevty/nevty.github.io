(this["webpackJsonptestwork-avia"]=this["webpackJsonptestwork-avia"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/error_face.bc5f6531.svg"},43:function(e,t,a){e.exports=a.p+"static/media/loading.0662fe34.svg"},50:function(e,t,a){e.exports=a(82)},55:function(e,t,a){},57:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),i=(a(55),a(56),a(57),a(14)),l=a(15),o=a(17),u=a(16),m=a(13),d=a(18),h=a(10),f=a(12),p=a(40),E=a.n(p).a.create({baseURL:"https://front-test.beta.aviasales.ru"}),v=function(){return E.get("/search")},_=function(e){return E.get("/tickets?searchId=".concat(e))},g={tickets:[],searchId:"",filteredByStops:"",sorted:null,stop:!1,maxSize:10,ticketsErrorResponse:null,isFetching:!1},b=function(e){return{type:"SET_TICKETS_FETCHING",boolean:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TICKETS":return Object(f.a)({},e,{tickets:t.tickets});case"SET_TICKETS_ERROR_RESPONSE":return Object(f.a)({},e,{ticketsErrorResponse:t.error});case"SET_TICKETS_FETCHING":return Object(f.a)({},e,{isFetching:t.boolean});case"SET_SEARCH_ID":return Object(f.a)({},e,{searchId:t.id});case"SORT_TICKETS_BY_PRICE":return Object(f.a)({},e,{sorted:"cheap",tickets:e.tickets.sort((function(e,t){return e.price-t.price}))});case"SORT_TICKETS_BY_DURATION":return Object(f.a)({},e,{sorted:"fast",tickets:e.tickets.sort((function(e,t){return e.segments[0].duration-t.segments[0].duration}))});case"SET_FILTER_TICKETS_BY_STOPS":return Object(f.a)({},e,{filteredByStops:t.number});default:return e}},S=a(84),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target;this.props.setFilterTicketsByStops(t.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("aside",{className:"Tickets__filter text-left p-4 mt-2 shadow-sm bg-white rounded"},r.a.createElement("h5",null,"\u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a"),[{value:"",label:"\u0412\u0441\u0435"},{value:0,label:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0441\u0430\u0434\u043e\u043a"},{value:1,label:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"},{value:2,label:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"},{value:3,label:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}].map((function(t){return r.a.createElement("div",{key:t.value},r.a.createElement(S.a.Check,{custom:!0,type:"radio",name:"stops",id:"custom-radio-".concat(t.value),value:t.value,label:t.label,onChange:e.handleChange}))})))}}]),t}(r.a.Component),y=Object(h.b)((function(e){return{filteredByStops:e.ticketsPage.filteredByStops}}),(function(e){return{setFilterTicketsByStops:function(t){e(function(e){return{type:"SET_FILTER_TICKETS_BY_STOPS",number:e}}(t))}}}))(T),O=a(86),N=a(49),w=a(48),j=a(85),x=a(83);function C(e,t){var a=Math.floor(e/60),n=e%60;return"dotted"===t?R(a,n):"hm"===t?"".concat(a,"\u0447 ").concat(n,"\u043c"):"".concat(a,"h ").concat(n,"m")}function R(e,t){return t=t<10?"0"+t:t,"".concat(e=e<10?"0"+e:e,":").concat(t)}function I(e,t){var a=new Date(e.getTime()+6e4*t);return R(a.getHours(),a.getMinutes())}var B=function(e){var t=e.tickets;if(""!==e.filteredByStops&&t.length){var a=+e.filteredByStops;t=Object(w.a)(e.tickets.filter((function(e){return e.segments[0].stops.length===a&&e.segments[1].stops.length===a})))}var n=t.slice(0,e.offset).map((function(e,t){var a=e.segments[0].origin,n=e.segments[1].destination,c=e.segments[0].stops,s=e.segments[1].stops,i=c.join(", "),l=s.join(", "),o=e.segments[0].duration,u=e.segments[1].duration,m=new Date(e.segments[0].date),d=new Date(e.segments[1].date),h=R(m.getHours(),d.getMinutes()),f=R(d.getHours(),d.getMinutes()),p=I(m,o),E=I(d,u);return r.a.createElement(j.a,{key:t,className:"mt-4 p-4 shadow-sm"},r.a.createElement("div",{className:"ticket__container"},r.a.createElement("div",{className:"ticket__head row"},r.a.createElement("h3",{className:"ticket__price col-6 text-left text-primary"},e.price,r.a.createElement("span",{className:"price__currency"}," \u0420")),r.a.createElement("div",{className:"ticket__ship-info col-6 text-right"},r.a.createElement(x.a,{src:"http://pics.avs.io/99/36/".concat(e.carrier,".png"),className:"",alt:e.carrier}))),r.a.createElement("div",{className:"ticket__table"},r.a.createElement("div",{className:"ticket__to row"},r.a.createElement("div",{className:"table__tr col text-left"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},a," - ",n),r.a.createElement("div",{className:"table__td"},h," - ",p)),r.a.createElement("div",{className:"table__tr col"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement("div",{className:"table__td"},C(o,"hm"))),r.a.createElement("div",{className:"table__tr col text-right"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},"\u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438: ",c.length?c.length:""),r.a.createElement("div",{className:"table__td"},c.length?i:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"))),r.a.createElement("div",{className:"ticket__back row"},r.a.createElement("div",{className:"table__tr col text-left"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},n," - ",a),r.a.createElement("div",{className:"table__td"},f," - ",E)),r.a.createElement("div",{className:"table__tr col"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement("div",{className:"table__td"},C(u,"hm"))),r.a.createElement("div",{className:"table__tr col text-right"},r.a.createElement("div",{className:"ticket__headline text-secondary text-grey"},"\u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438: ",s.length?s.length:""),r.a.createElement("div",{className:"table__td"},s.length?l:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"))))))}));return r.a.createElement(r.a.Fragment,null,n)},P=a(11),F=a(42),K=a.n(F),D=function(e){return{ticketsErrorResponse:e.ticketsPage.ticketsErrorResponse}},H=a(43),z=a.n(H),Y=function(e){return r.a.createElement("div",{className:"mt-4 mb-4 bg-white"},r.a.createElement("img",{src:z.a,width:"70",alt:""}))};var A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={ticketsOffest:a.props.maxSize},a.main=r.a.createRef(),a.handleSort=a.handleSort.bind(Object(m.a)(a)),a.handleScroll=a.handleScroll.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getTicketsRequest(),window.addEventListener("scroll",function(e,t){var a=!0,n=null,r=null;return function c(){for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];if(!a)return n=i,void(r=this);e.apply(this,i),a=!1,r=null,n=null,setTimeout((function(){a=!0,n&&c.apply(r,n)}),t)}}(this.handleScroll,40))}},{key:"handleScroll",value:function(e){var t=this,a=this.main.current;a.scrollHeight+a.offsetTop-(window.innerHeight+window.pageYOffset)===0&&this.setState((function(e){return{ticketsOffest:e.ticketsOffest+t.props.maxSize}}))}},{key:"handleSort",value:function(e){var t=e.target;this.props.sorted!==t.value&&("cheap"===t.value&&this.props.sortTicketsByPrice(),"fast"===t.value&&this.props.sortTicketsByDuration())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{type:"radio",name:"sort",className:"shadow-sm w-100"},r.a.createElement(N.a,{variant:"light",value:"cheap",onChange:this.handleSort},"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0451\u0432\u044b\u0439"),r.a.createElement(N.a,{variant:"light",value:"fast",onChange:this.handleSort},"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439")),r.a.createElement("div",{className:"Tickets__list",ref:this.main},r.a.createElement(B,{tickets:this.props.tickets,offset:this.state.ticketsOffest,filteredByStops:this.props.filteredByStops,maxSize:this.props.maxSize}),this.props.isFetching?r.a.createElement(Y,null):null))}}]),t}(r.a.Component),M=Object(P.d)(Object(h.b)((function(e){return{tickets:e.ticketsPage.tickets,filteredByStops:e.ticketsPage.filteredByStops,sorted:e.ticketsPage.sorted,maxSize:e.ticketsPage.maxSize,isFetching:e.ticketsPage.isFetching}}),(function(e){return{getTicketsRequest:function(){e((function(e){v().then((function(e){return e.data.searchId})).then((function(t){return e(b(!0)),_(t)})).then((function(t){var a=t.data.tickets;e(function(e){return{type:"SET_TICKETS",tickets:e}}(a)),e(b(!1))}),(function(t){e(function(e){return{type:"SET_TICKETS_ERROR_RESPONSE",error:e}}(t.response.status))}))}))},sortTicketsByPrice:function(){e({type:"SORT_TICKETS_BY_PRICE"})},sortTicketsByDuration:function(){e({type:"SORT_TICKETS_BY_DURATION"})}}})),(function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return null!==this.props.ticketsErrorResponse?r.a.createElement("div",{className:"fallback vh-100 bg-white"},r.a.createElement("div",{className:"fallback__message"},r.a.createElement("h4",null,"Something went wrong"),r.a.createElement("img",{src:K.a,width:"60",alt:""}))):r.a.createElement(e,this.props)}}]),a}(r.a.Component);return Object(h.b)(D)(t)}))(A);var L=function(){return r.a.createElement("div",{className:"App container-fluid"},r.a.createElement("div",{className:"row limit"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(y,null)),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(46),q=a(44),G=Object(P.c)({ticketsPage:k}),J=Object(P.e)(G,Object(P.a)(q.a));window.store=J;var W=J;s.a.render(r.a.createElement(U.a,null,r.a.createElement(h.a,{store:W},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.1f9ea9ec.chunk.js.map