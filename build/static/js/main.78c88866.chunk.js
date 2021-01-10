(this["webpackJsonpyouttala-frontend"]=this["webpackJsonpyouttala-frontend"]||[]).push([[0],{29:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(20),s=n.n(c),i=(n(29),n(3)),o=n.n(i),u=n(4),l=n(2),d=n(8),b=n.n(d),j="/api/subtitles",h={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},getOne:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/").concat(t),e.next=3,b.a.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getResults:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/results/").concat(t),console.log(n),e.next=4,b.a.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),reportBug:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/").concat(t.videoId),e.next=3,b.a.put(n,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBuggyLines:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/").concat(t.id),e.next=3,b.a.put(n,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var f=function(e,t){var n=/[.,"'?!;:]*/,r=new RegExp(/^/.source+n.source+e+n.source+/$/.source,"i"),a=[];return t.forEach((function(e){e.split(" ").forEach((function(t){r.test(t)&&a.push(e)}))})),0!==a.length};function p(e){return 3600*parseInt(e[0])+60*parseInt(e[1])+parseInt(e[2])}function x(e,t){for(var n,r,a="",c="",s="",i=e;i>0;i--)if(t[i].includes("--\x3e")){n=t[i],a=t[i].substring(0,2),c=t[i].substring(3,5),s=t[i].substring(6,8),r=i;break}return{timeStamp:n,time:p([a,c,s]),firstTimeIndex:r}}function O(e,t){for(var n,r,a=e+1;a<t.length-1;a++)if(t[a].includes("--\x3e")){n=t[a],r=a;break}return{nextTimeStamp:n,secondTimeIndex:r}}function v(e){for(var t=[],n=[],r=e.length,a=0;a<r;){var c=Math.floor(Math.random()*r);-1===n.indexOf(c)&&(a++,n.push(c),t.push(e[c]))}return t}function m(e,t,n){for(var r,a=t+1;a<n.length-1;a++)if(n[a].includes("--\x3e")||a===n.length-1){r=a;break}var c=n[t].split(" --\x3e ");return{timeDifference:p([c[1].substring(0,2),c[1].substring(3,5),c[1].substring(6,8)])-e,text:function(e,t,n){return e.slice(t+1,n).reduce((function(e,t){return e+t+"\n"}),"").split("\n").slice(0,-1).join("\n")}(n,t,r)}}var g=function(e,t,n){for(var r=/[.,"'?!;:]*/,a=new RegExp(/^/.source+r.source+e+r.source+/$/.source,"i"),c=[],s=v(t),i=function(e){for(var t=s[e],r=n.filter((function(e){return e.videoId===t}))[0].text,i=r.length,o=function(e){var n=void 0,s=void 0,i=void 0,o="";r[e].split(" ").forEach((function(u){a.test(u)&&(n=x(e,r).time,s=x(e,r).timeStamp,i=x(e,r).firstTimeIndex,o=function(e,t){return"https://www.youtube.com/embed/".concat(e,"?start=").concat(t,"&autoplay=1&cc_load_policy=1&cc_lang_pref=sv")}(t,n),c.push({youtubeLink:o,videoId:t,time:n,timeStamp:s,firstTimeIndex:i,nextTimeStamp:O(i,r).nextTimeStamp,secondTimeIndex:O(i,r).secondTimeIndex,lineIndex:e,shownSubtitles:m(n,i,r).text,timeDifference:m(n,i,r).timeDifference,lineText:r[e]}))}))},u=0;u<i-1;u++)o(u);if(c.length>1e3)return"break"},o=0;o<t.length-1;o++){if("break"===i(o))break}return v(c)};var y=function(e){return Object(r.jsxs)("div",{className:"main-header",children:[Object(r.jsx)("a",{onClick:e.logo,className:"brand-logo",children:Object(r.jsx)("div",{className:"brand-logo-name",children:"youttala"})}),Object(r.jsx)("div",{className:"main-nav",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"header-button",onClick:e.home,children:"home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"header-button",onClick:e.about,children:"about"})})]})})]})},w=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(r.jsx)("input",{autoFocus:!0,className:"searchbar",value:e.query,type:"text",placeholder:"how to pronounce...",onChange:e.handleQueryChange}),Object(r.jsx)("button",{className:"search-button",type:"submit",children:"search"})]})})},k=n(21),I=n(5),S=function(e){var t={display:e.showStats?"":"none"},n={display:e.showStats?"none":""};return Object(r.jsxs)("div",{className:"player",children:[Object(r.jsx)("div",{className:"video",children:Object(r.jsx)(k.a,{videoId:e.videoId,opts:e.opts,onPlay:e.onPlay})}),Object(r.jsxs)("div",{className:"player-bar",children:[Object(r.jsx)("div",{className:"empty"}),Object(r.jsxs)("div",{className:"button-set",children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"button",title:"Previous video",id:"back-button",onClick:e.handleBack,children:Object(r.jsx)(I.c,{size:23})})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"button",id:"restart-button",title:"replay",onClick:e.handleK\u00f6rOm,children:Object(r.jsx)(I.i,{size:23})})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"button",id:"next-button",title:"next video",onClick:e.handleNext,children:Object(r.jsx)(I.g,{size:23})})})]}),Object(r.jsxs)("div",{className:"extras",children:[Object(r.jsxs)("span",{style:t,children:[" ",e.videoIndex," of ",e.length]}),Object(r.jsx)("span",{style:n}),Object(r.jsx)("button",{style:t,className:"button",id:"bug-button",title:"report a bug",onClick:e.handleBug,children:Object(r.jsx)(I.e,{size:13})}),Object(r.jsx)("span",{style:n})]})]})]})},N=function(e){var t=e.shownSubtitles,n=e.shownSubtitlesArr,a=e.showSubtitle,c=e.handleShow,s=e.handleHide,i=e.query,o={display:a?"none":""},u={display:a?"":"none"},l=/[.,"'?!;:]*/,d=new RegExp(/^/.source+l.source+i+l.source+/$/.source,"i"),b=function(e){e.preventDefault();var t=document.getElementById("shownSubtitles").innerText;navigator.clipboard.writeText(t).then((function(e){return t+=e}))};return Object(r.jsx)("div",{children:null===t?Object(r.jsx)("div",{className:"first-subtitle",children:Object(r.jsx)("div",{className:"yarrak",children:"you can find your search result here!"})}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"subtitle",style:u,children:[Object(r.jsxs)("div",{className:"subtitle-buttons",children:[Object(r.jsx)("button",{title:"copy the search result",className:"button",onClick:b,children:Object(r.jsx)(I.d,{size:13})}),Object(r.jsx)("button",{className:"button",title:"hide the search result",onClick:s,children:Object(r.jsx)(I.f,{size:13})})]}),Object(r.jsx)("div",{className:"subtitle-subtitle",children:Object(r.jsx)("p",{className:"paragraph",id:"shownSubtitles",children:n.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(r.jsx)("span",{style:{color:d.test(e)?"red":"black"},children:"".concat(e," ")},e+t+1)}))})})]}),Object(r.jsxs)("div",{className:"hidden-subtitle",style:o,children:[Object(r.jsx)("div",{id:"three-dots",children:Object(r.jsx)("span",{})}),Object(r.jsx)("div",{id:"show-button-bar",children:Object(r.jsx)("button",{className:"button",title:"show the search result",onClick:c,children:Object(r.jsx)(I.f,{size:13})})})]})]})})},T=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2);t[0],t[1];return Object(r.jsxs)("div",{className:"main-footer",children:[Object(r.jsx)("span",{id:"copyright",children:"\xa9 2021, youttala. all rights reserved."}),Object(r.jsxs)("span",{title:"contact",id:"contact",children:["info@youttala.com ",Object(r.jsx)("a",{id:"e-mail-a",href:"mailto:info@youttala.com",children:Object(r.jsx)(I.j,{})})]}),Object(r.jsx)("span",{title:"contact",id:"contact-small",children:Object(r.jsx)("a",{id:"e-mail-a",href:"mailto:info@youttala.com",children:Object(r.jsx)(I.j,{})})})]})},C=function(e){return Object(r.jsxs)("div",{style:{display:"none",border:"solid",borderWidth:1},children:["admin bar, correct buggy lines!",Object(r.jsx)("br",{}),"OBS! dont forget to enable the correct put route and disable the other one in backend!",Object(r.jsx)("br",{}),"Search by videoId, once found search by bugId, once found remove it",Object(r.jsxs)("form",{onSubmit:e.searchVideoById,children:["Query videoId:",Object(r.jsx)("input",{value:e.queryVideoId,type:"text",onChange:e.handleQueryVideoIdChange}),Object(r.jsx)("button",{type:"submit",children:"search by id"})]}),Object(r.jsx)("span",{children:e.adminMessage1}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{onSubmit:e.searchBugById,children:["Query bugId:",Object(r.jsx)("input",{value:e.queryBugId,type:"text",onChange:e.handleQueryBugIdChange}),Object(r.jsx)("button",{type:"submit",children:"search bug"})]}),Object(r.jsx)("span",{children:e.adminMessage2}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:e.handleCorrect,children:"remove the buggy part"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:e.adminMessage3})]})},B=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],i=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s(!c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{id:"about-container",children:[Object(r.jsx)("h1",{id:"about-title",children:"Hej!"}),Object(r.jsxs)("div",{id:"about-description",children:["Welcome to youttala!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"youttala is a web application where Swedish learners can instantly learn how Swedish words are actually pronounced by watching YouTube! In youttala, you can hear the pronunciation of a word from real Swedish speakers in real use cases! Just type the word you want to hear and search.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"We hope that youttala would be a useful tool and wish you good luck in the learning journey!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:["Before we start, please take a look at the quick guideline!",Object(r.jsx)("a",{className:"angle",style:{display:c?"none":""},onClick:i,children:Object(r.jsx)(I.a,{size:13})}),Object(r.jsx)("a",{className:"angle",style:{display:c?"":"none"},onClick:i,children:Object(r.jsx)(I.b,{size:13})})]}),Object(r.jsx)("div",{id:"guideline",style:{display:c?"":"none"},children:Object(r.jsxs)("div",{id:"guideline-content",children:[Object(r.jsx)(I.l,{className:"spinner",size:10})," For now, it is only possible to search a word, so if you try to search a particle verb or a sentence, it would not work.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(I.l,{className:"spinner",size:10})," We would be very happy if you help us and other learners by reporting bugs by clicking on this sign ",Object(r.jsx)(I.e,{size:10})," that is located in the right-bottom corner of the player console.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(I.l,{className:"spinner",size:10})," By bugs, we mean unmatching subtitles. Sometimes, the piece of subtitle could be a paraphrased version of what is said rather than word by word captions. We would like to identify and remove those instances to provide you a better experience!"]})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("a",{onClick:e.handleK\u00f6rBara,style:{display:c?"none":""},id:"k\xf6r-bara",children:["Nu k\xf6r vi! ",Object(r.jsx)(I.h,{size:17})]}),Object(r.jsx)("div",{className:"complete"})]})]})},D=(n(10),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),d=i[0],b=i[1],j=Object(a.useState)([]),p=Object(l.a)(j,2),x=p[0],O=p[1],v=Object(a.useState)(0),m=Object(l.a)(v,2),k=m[0],I=m[1],D=Object(a.useState)("vfQU6pI51ww"),z=Object(l.a)(D,2),E=z[0],L=z[1],Q=Object(a.useState)(null),W=Object(l.a)(Q,2),M=W[0],q=W[1],_=Object(a.useState)([]),V=Object(l.a)(_,2),R=V[0],A=V[1],K=Object(a.useState)(!1),P=Object(l.a)(K,2),F=P[0],H=P[1],J=Object(a.useState)(!1),U=Object(l.a)(J,2),$=U[0],Y=U[1],G=Object(a.useState)(0),X=Object(l.a)(G,2),Z=X[0],ee=X[1],te=Object(a.useState)(0),ne=Object(l.a)(te,2),re=(ne[0],ne[1],Object(a.useState)(0)),ae=Object(l.a)(re,2),ce=(ae[0],ae[1],Object(a.useState)()),se=Object(l.a)(ce,2),ie=se[0],oe=se[1],ue=Object(a.useState)(),le=Object(l.a)(ue,2),de=le[0],be=le[1],je=Object(a.useState)("iFrame"),he=Object(l.a)(je,2),fe=he[0],pe=(he[1],Object(a.useState)(0)),xe=Object(l.a)(pe,2),Oe=xe[0],ve=xe[1],me=Object(a.useState)(0),ge=Object(l.a)(me,2),ye=(ge[0],ge[1]),we=Object(a.useState)(!1),ke=Object(l.a)(we,2),Ie=ke[0],Se=ke[1],Ne=Object(a.useState)(!1),Te=Object(l.a)(Ne,2),Ce=(Te[0],Te[1],Object(a.useState)(!1)),Be=Object(l.a)(Ce,2),De=Be[0],ze=Be[1],Ee=Object(a.useState)(""),Le=Object(l.a)(Ee,2),Qe=Le[0],We=Le[1],Me=Object(a.useState)(""),qe=Object(l.a)(Me,2),_e=qe[0],Ve=qe[1],Re=Object(a.useState)(""),Ae=Object(l.a)(Re,2),Ke=Ae[0],Pe=Ae[1],Fe=Object(a.useState)(null),He=Object(l.a)(Fe,2),Je=He[0],Ue=He[1],$e=Object(a.useState)(""),Ye=Object(l.a)($e,2),Ge=Ye[0],Xe=Ye[1],Ze=Object(a.useState)(""),et=Object(l.a)(Ze,2),tt=et[0],nt=et[1],rt=["skillnad","stark","tycker","ocks\xe5","n\xe5gon","n\xe5gonsin","\xe4lskar","sk\xe4mtar","k\xf6r","g\xf6r","gjorde","gjort","sig","dig","mig","sk\xf6nt","bygger","dagen","roligt","kul","j\xe4ttekul","h\xe4rifr\xe5n","\xe5tminstone","d\xe4rifr\xe5n","l\xe4skigt","f\xf6rsvinner","v\xe4ldigt","l\xe4ngesen","sj\xe4lv","sj\xe4lvklart","f\xf6rsiktig","allvarligt","l\xe4get"];Object(a.useEffect)((function(){h.getAll().then((function(e){c(e),ze(!0)}))}),[]),Object(a.useEffect)((function(){window.innerWidth<415?(oe("320"),be("200")):window.innerWidth<668?(oe("400"),be("300")):window.innerWidth>668&&(oe("640"),be("360"))}),[]),window.addEventListener("resize",(function(e){e.preventDefault(),window.innerWidth<415?(oe("310"),be("200")):window.innerWidth<668?(oe("400"),be("300")):window.innerWidth>668&&(oe("640"),be("360"))}));var at=function(){switch(ie){case"640":oe("640.1");break;case"640.1":oe("640");break;case"400":oe("400.1");break;case"400.1":oe("400");break;case"310":oe("310.1");break;case"310.1":oe("310")}},ct=function(e){return b(e.target.value)},st=function(e){O(e),I(0);var t=e[0].videoId;L(t);var n=e[0].time;ee(n),t===E&&n===Z&&at();var r=e[0].firstTimeIndex;ye(r),ve(1),H(!1),Y(!0)},it=function(e,t){L("vfQU6pI51ww"),ye(0),ee(0),ve(0),Y(!1),O([]);var n=rt.length-1,r=rt[[Math.floor(Math.random()*n)]],a="".concat(t).concat(e,", try '").concat(r,"'");q(a);var c=a.split(/[\s\n]+/);A(c),H(!0)},ot=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=[],a=[],""!==d)try{De?(n.forEach((function(e){f(d,e.text)&&a.push(e.videoId)})),r=g(d,a,n),st(r)):h.getResults(d).then((function(e){r=e.youTubeLinkList,0===(a=e.videoIDsThatContain).length?it(d,"nothing found for "):st(r)}))}catch(c){0===a.length&&it(d,"nothing found for ")}else it(d,"please type something");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ut={height:de,width:ie,playerVars:{cc_lang_pref:"sv",autoplay:Oe,start:Z,cc_load_policy:Oe,enablejsapi:1}},lt=function(e){var t=x[k],n=t.shownSubtitles;q(n);var r=n.split(/[\s\n]+/);A(r),H(!0);var a=1e3*t.timeDifference+300;setTimeout((function(){H(!1)}),a)},dt=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k>=1&&(I(k-1),n=x[k-1].videoId,L(n),r=x[k-1].time,ee(r),n===E&&r===Z&&at(),a=x[k-1].firstTimeIndex,ye(a),H(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bt=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),H(!0),at();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),jt=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k<x.length-1&&(I(k+1),n=x[k+1].videoId,L(n),r=x[k+1].time,ee(r),at(),a=x[k+1].firstTimeIndex,ye(a),H(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ht=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c,s,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={},e.prev=2,e.next=5,h.getOne(t).then((function(e){return e}));case 5:if(n=e.sent,r=n.buggyLines,a=x[k],c=a.timeStamp,s=c.substring(0,2),i=c.substring(3,5),u=c.substring(6,8),l=c.substring(9,12),d="".concat(a.videoId,"_").concat(s).concat(i).concat(u).concat(l),r.find((function(e){return e.bugId===d}))){e.next=21;break}return r.push({bugId:d,buggyText:a.lineText,lineIndex:a.lineIndex,time:a.time,timeStamp:a.timeStamp,firstTimeIndex:a.firstTimeIndex,nextTimeStamp:a.nextTimeStamp,secondTimeIndex:a.secondTimeIndex,link:a.youtubeLink}),e.next=18,h.reportBug({videoId:n.videoId,buggyLines:r});case 18:e.sent,e.next=22;break;case 21:console.log("already reported");case 22:window.confirm("You found and reported a bug! Thank you for helping us and other learners!"),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(2),console.log(e.t0),console.log("handleBug failed");case 29:case"end":return e.stop()}}),e,null,[[2,25]])})));return function(t){return e.apply(this,arguments)}}(),ft=function(){return H(!0)},pt=function(){return H(!1)},xt=function(e){return We(e.target.value)},Ot=function(e){return Ve(e.target.value)},vt=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{ye(0),ee(0),ve(0),Y(!1),O([]),n.find((function(e){return e.videoId===Qe}))?(L(Qe),Pe("".concat(Qe," found")),Ue(n.find((function(e){return e.videoId===Qe})))):(L("5bfx6BNufdE"),Pe("This subtitle is not in the db"),Ve(""),Xe(""))}catch(r){console.log(r),Pe("There was an error, check the console"),ye(0),ee(0),ve(0),Y(!1),O([]),L("5bfx6BNufdE")}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),mt=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{Je.buggyLines.find((function(e){return e.bugId===_e}))?(Xe("".concat(_e," found")),Ve(_e),n=Je.buggyLines.find((function(e){return e.bugId===_e})),ee(n.time),ve(1),q(!1)):Xe("".concat(_e," not found"))}catch(r){console.log(r),Xe("There was an error, see the console, ".concat(_e," not found"))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),gt=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r,a,c,s,i,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.buggyLines.find((function(e){return e.bugId===n})),console.log(r),!window.confirm("Do you really want to remove the part from ".concat(r.timeStamp," to ").concat(r.nextTimeStamp,"?"))){e.next=26;break}return e.prev=4,a=r.firstTimeIndex,c=r.secondTimeIndex,s=c-a,i=t.buggyLines.slice(),console.log(i),u=i.filter((function(e){return e.bugId!==n})),console.log(u),(l=t.text).splice(a,s),e.next=16,h.deleteBuggyLines({id:t.id,buggyLines:u,text:l});case 16:e.sent,nt("".concat(n," corrected")),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),nt("Correction failed, see the conssole");case 24:e.next=27;break;case 26:nt("Correction cancelled");case 27:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t,n){return e.apply(this,arguments)}}(),yt=function(){at(),Se(!1),b(""),L("vfQU6pI51ww"),ye(0),ee(0),ve(0),Y(!1),O([]),q(null),A([]),H(!1)},wt=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),yt();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),kt=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),yt();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Ie?Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{logo:kt,about:function(){return Se(!0)},home:wt}),Object(r.jsx)("div",{id:"main-container-about",className:"container",children:Object(r.jsx)(B,{"handleK\xf6rBara":function(){return Se(!1)}})}),Object(r.jsx)(T,{})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{logo:kt,about:function(){return Se(!0)},home:wt}),Object(r.jsx)(C,{queryVideoId:Qe,handleQueryVideoIdChange:xt,searchVideoById:vt,adminMessage1:Ke,queryBugId:_e,handleQueryBugIdChange:Ot,searchBugById:mt,adminMessage2:Ge,handleCorrect:function(){return gt(Je,_e)},adminMessage3:tt}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(w,{query:d,handleQueryChange:ct,handleSubmit:ot}),Object(r.jsx)("div",{className:"player-all",children:Object(r.jsx)(S,{videoId:E,opts:ut,containerClassName:fe,handleBack:dt,"handleK\xf6rOm":bt,handleNext:jt,onPlay:lt,showStats:$,videoIndex:k+1,length:x.length,handleBug:function(){return ht(E)}})}),Object(r.jsx)(N,{showSubtitle:F,shownSubtitles:M,shownSubtitlesArr:R,handleShow:ft,handleHide:pt,query:d})]}),Object(r.jsx)(T,{})]})]})})});s.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.78c88866.chunk.js.map