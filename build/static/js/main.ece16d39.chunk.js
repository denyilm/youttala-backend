(this["webpackJsonpyouttala-frontend"]=this["webpackJsonpyouttala-frontend"]||[]).push([[0],{41:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(31),s=n.n(c),i=n(16),o=(n(41),n(3)),u=n.n(o),l=n(4),d=n(2),b=n(13),j=n.n(b),h="/api/subtitles",f={getAll:function(){return j.a.get(h).then((function(e){return e.data}))},getAbout:function(){var e="".concat(h,"/about");return j.a.get(e).then((function(e){return e.data}))},getOne:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"/").concat(t),e.next=3,j.a.get(n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getResults:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"/results/").concat(t),console.log(n),e.next=4,j.a.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),reportBug:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"/").concat(t.videoId),e.next=3,j.a.put(n,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBuggyLines:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"/").concat(t.id),e.next=3,j.a.put(n,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var p=function(e,t){var n=/[.,"'?!;:]*/,a=new RegExp(/^/.source+n.source+e+n.source+/$/.source,"i"),r=[];return t.forEach((function(e){e.split(" ").forEach((function(t){a.test(t)&&r.push(e)}))})),0!==r.length};function O(e){return 3600*parseInt(e[0])+60*parseInt(e[1])+parseInt(e[2])}function x(e,t){for(var n,a,r="",c="",s="",i=e;i>0;i--)if(t[i].includes("--\x3e")){n=t[i],r=t[i].substring(0,2),c=t[i].substring(3,5),s=t[i].substring(6,8),a=i;break}return{timeStamp:n,time:O([r,c,s]),firstTimeIndex:a}}function v(e,t){for(var n,a,r=e+1;r<t.length-1;r++)if(t[r].includes("--\x3e")){n=t[r],a=r;break}return{nextTimeStamp:n,secondTimeIndex:a}}function m(e){for(var t=[],n=[],a=e.length,r=0;r<a;){var c=Math.floor(Math.random()*a);-1===n.indexOf(c)&&(r++,n.push(c),t.push(e[c]))}return t}function g(e,t,n){for(var a,r=t+1;r<n.length-1;r++)if(n[r].includes("--\x3e")||r===n.length-1){a=r;break}var c=n[t].split(" --\x3e ");return{timeDifference:O([c[1].substring(0,2),c[1].substring(3,5),c[1].substring(6,8)])-e,text:function(e,t,n){return e.slice(t+1,n).reduce((function(e,t){return e+t+"\n"}),"").split("\n").slice(0,-1).join("\n")}(n,t,a)}}var y=function(e,t,n){for(var a=/[.,"'?!;:]*/,r=new RegExp(/^/.source+a.source+e+a.source+/$/.source,"i"),c=[],s=m(t),i=function(e){for(var t=s[e],a=n.filter((function(e){return e.videoId===t}))[0].text,i=a.length,o=function(e){var n=void 0,s=void 0,i=void 0,o="";a[e].split(" ").forEach((function(u){r.test(u)&&(n=x(e,a).time,s=x(e,a).timeStamp,i=x(e,a).firstTimeIndex,o=function(e,t){return"https://www.youtube.com/embed/".concat(e,"?start=").concat(t,"&autoplay=1&cc_load_policy=1&cc_lang_pref=sv")}(t,n),c.push({youtubeLink:o,videoId:t,time:n,timeStamp:s,firstTimeIndex:i,nextTimeStamp:v(i,a).nextTimeStamp,secondTimeIndex:v(i,a).secondTimeIndex,lineIndex:e,shownSubtitles:g(n,i,a).text,timeDifference:g(n,i,a).timeDifference,lineText:a[e]}))}))},u=0;u<i-1;u++)o(u);if(c.length>1e3)return"break"},o=0;o<t.length-1;o++){if("break"===i(o))break}return m(c)};var w=function(e){return Object(a.jsxs)("div",{className:"main-header",children:[Object(a.jsx)("a",{onClick:e.logo,className:"brand-logo",children:Object(a.jsx)("div",{className:"brand-logo-name",children:"youttala"})}),Object(a.jsx)("div",{className:"main-nav",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"header-button",onClick:e.home,children:"home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"header-button",onClick:e.about,children:"about"})})]})})]})},k=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(a.jsx)("input",{autoFocus:!0,className:"searchbar",value:e.query,type:"text",placeholder:"how to pronounce...",onChange:e.handleQueryChange}),Object(a.jsx)("button",{className:"search-button",type:"submit",children:"search"})]})})},S=n(32),I=n(5),N=function(e){var t={display:e.showStats?"":"none"},n={display:e.showStats?"none":""};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsx)("div",{className:"video",children:Object(a.jsx)(S.a,{videoId:e.videoId,opts:e.opts,onPlay:e.onPlay})}),Object(a.jsxs)("div",{className:"player-bar",children:[Object(a.jsx)("div",{className:"empty"}),Object(a.jsxs)("div",{className:"button-set",children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",title:"Previous video",id:"back-button",onClick:e.handleBack,children:Object(a.jsx)(I.c,{size:23})})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",id:"restart-button",title:"replay",onClick:e.handleK\u00f6rOm,children:Object(a.jsx)(I.i,{size:23})})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"button",id:"next-button",title:"next video",onClick:e.handleNext,children:Object(a.jsx)(I.g,{size:23})})})]}),Object(a.jsxs)("div",{className:"extras",children:[Object(a.jsxs)("span",{style:t,children:[" ",e.videoIndex," of ",e.length]}),Object(a.jsx)("span",{style:n}),Object(a.jsx)("button",{style:t,className:"button",id:"bug-button",title:"report a bug",onClick:e.handleBug,children:Object(a.jsx)(I.e,{size:13})}),Object(a.jsx)("span",{style:n})]})]})]})},T=function(e){var t=e.shownSubtitles,n=e.shownSubtitlesArr,r=e.showSubtitle,c=e.handleShow,s=e.handleHide,i=e.query,o={display:r?"none":""},u={display:r?"":"none"},l=/[.,"'?!;:]*/,d=new RegExp(/^/.source+l.source+i+l.source+/$/.source,"i"),b=function(e){e.preventDefault();var t=document.getElementById("shownSubtitles").innerText;navigator.clipboard.writeText(t).then((function(e){return t+=e}))};return Object(a.jsx)("div",{children:null===t?Object(a.jsx)("div",{className:"first-subtitle",children:Object(a.jsx)("div",{className:"yarrak",children:"you can find your search result here!"})}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"subtitle",style:u,children:[Object(a.jsxs)("div",{className:"subtitle-buttons",children:[Object(a.jsx)("button",{title:"copy the search result",className:"button",onClick:b,children:Object(a.jsx)(I.d,{size:13})}),Object(a.jsx)("button",{className:"button",title:"hide the search result",onClick:s,children:Object(a.jsx)(I.f,{size:13})})]}),Object(a.jsx)("div",{className:"subtitle-subtitle",children:Object(a.jsx)("p",{className:"paragraph",id:"shownSubtitles",children:n.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(a.jsx)("span",{style:{color:d.test(e)?"red":"black"},children:"".concat(e," ")},e+t+1)}))})})]}),Object(a.jsxs)("div",{className:"hidden-subtitle",style:o,children:[Object(a.jsx)("div",{id:"three-dots",children:Object(a.jsx)("span",{})}),Object(a.jsx)("div",{id:"show-button-bar",children:Object(a.jsx)("button",{className:"button",title:"show the search result",onClick:c,children:Object(a.jsx)(I.f,{size:13})})})]})]})})},C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2);t[0],t[1];return Object(a.jsxs)("div",{className:"main-footer",children:[Object(a.jsx)("span",{id:"copyright",children:"\xa9 2021, youttala. all rights reserved."}),Object(a.jsxs)("span",{title:"contact",id:"contact",children:["info@youttala.com ",Object(a.jsx)("a",{id:"e-mail-a",href:"mailto:info@youttala.com",children:Object(a.jsx)(I.j,{})})]}),Object(a.jsx)("span",{title:"contact",id:"contact-small",children:Object(a.jsx)("a",{id:"e-mail-a",href:"mailto:info@youttala.com",children:Object(a.jsx)(I.j,{})})})]})},B=function(e){return Object(a.jsxs)("div",{style:{display:"none",border:"solid",borderWidth:1},children:["admin bar, correct buggy lines!",Object(a.jsx)("br",{}),"OBS! dont forget to enable the correct put route and disable the other one in backend!",Object(a.jsx)("br",{}),"Search by videoId, once found search by bugId, once found remove it",Object(a.jsxs)("form",{onSubmit:e.searchVideoById,children:["Query videoId:",Object(a.jsx)("input",{value:e.queryVideoId,type:"text",onChange:e.handleQueryVideoIdChange}),Object(a.jsx)("button",{type:"submit",children:"search by id"})]}),Object(a.jsx)("span",{children:e.adminMessage1}),Object(a.jsx)("br",{}),Object(a.jsxs)("form",{onSubmit:e.searchBugById,children:["Query bugId:",Object(a.jsx)("input",{value:e.queryBugId,type:"text",onChange:e.handleQueryBugIdChange}),Object(a.jsx)("button",{type:"submit",children:"search bug"})]}),Object(a.jsx)("span",{children:e.adminMessage2}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:e.handleCorrect,children:"remove the buggy part"}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.adminMessage3})]})},L=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],i=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s(!c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{id:"about-container",children:[Object(a.jsx)("h1",{id:"about-title",children:"Hej!"}),Object(a.jsxs)("div",{id:"about-description",children:["Welcome to youttala!",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"youttala is a web application where Swedish learners can instantly learn how Swedish words are actually pronounced by watching YouTube! In youttala, you can hear the pronunciation of a word from real Swedish speakers in real use cases! Just type the word you want to hear and search.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"We hope that youttala would be a useful tool and wish you good luck in the learning journey!",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Before we start, please take a look at the quick guideline!",Object(a.jsx)("a",{className:"angle",style:{display:c?"none":""},onClick:i,children:Object(a.jsx)(I.a,{size:13})}),Object(a.jsx)("a",{className:"angle",style:{display:c?"":"none"},onClick:i,children:Object(a.jsx)(I.b,{size:13})})]}),Object(a.jsx)("div",{id:"guideline",style:{display:c?"":"none"},children:Object(a.jsxs)("div",{id:"guideline-content",children:[Object(a.jsx)(I.l,{className:"spinner",size:10})," For now, it is only possible to search a word, so if you try to search a particle verb or a sentence, it would not work.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(I.l,{className:"spinner",size:10})," We would be very happy if you help us and other learners by reporting bugs by clicking on this sign ",Object(a.jsx)(I.e,{size:10})," that is located in the right-bottom corner of the player console.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(I.l,{className:"spinner",size:10})," By bugs, we mean unmatching subtitles. Sometimes, the piece of subtitle could be a paraphrased version of what is said rather than word by word captions. We would like to identify and remove those instances to provide you a better experience!"]})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("a",{onClick:e.handleK\u00f6rBara,style:{display:c?"none":""},id:"k\xf6r-bara",children:["Nu k\xf6r vi! ",Object(a.jsx)(I.h,{size:17})]}),Object(a.jsx)("div",{className:"complete"})]})]})},D=n(15),z=n(7),E=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),o=i[0],b=i[1],j=Object(r.useState)([]),h=Object(d.a)(j,2),O=h[0],x=h[1],v=Object(r.useState)(0),m=Object(d.a)(v,2),g=m[0],S=m[1],I=Object(r.useState)("G_O0N3R-Lv8"),E=Object(d.a)(I,2),_=E[0],W=E[1],M=Object(r.useState)(null),q=Object(d.a)(M,2),R=q[0],Q=q[1],A=Object(r.useState)([]),V=Object(d.a)(A,2),G=V[0],K=V[1],P=Object(r.useState)(!1),F=Object(d.a)(P,2),H=F[0],J=F[1],$=Object(r.useState)(!1),Y=Object(d.a)($,2),U=Y[0],X=Y[1],Z=Object(r.useState)(0),ee=Object(d.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(r.useState)(0),re=Object(d.a)(ae,2),ce=(re[0],re[1],Object(r.useState)(0)),se=Object(d.a)(ce,2),ie=(se[0],se[1],Object(r.useState)()),oe=Object(d.a)(ie,2),ue=oe[0],le=oe[1],de=Object(r.useState)(),be=Object(d.a)(de,2),je=be[0],he=be[1],fe=Object(r.useState)("iFrame"),pe=Object(d.a)(fe,2),Oe=pe[0],xe=(pe[1],Object(r.useState)(0)),ve=Object(d.a)(xe,2),me=ve[0],ge=ve[1],ye=Object(r.useState)(0),we=Object(d.a)(ye,2),ke=(we[0],we[1]),Se=Object(r.useState)(!1),Ie=Object(d.a)(Se,2),Ne=Ie[0],Te=Ie[1],Ce=Object(r.useState)(!1),Be=Object(d.a)(Ce,2),Le=(Be[0],Be[1],Object(r.useState)(!1)),De=Object(d.a)(Le,2),ze=De[0],Ee=De[1],_e=Object(r.useState)(null),We=Object(d.a)(_e,2),Me=We[0],qe=We[1],Re=Object(r.useState)(""),Qe=Object(d.a)(Re,2),Ae=Qe[0],Ve=Qe[1],Ge=Object(r.useState)(""),Ke=Object(d.a)(Ge,2),Pe=Ke[0],Fe=Ke[1],He=Object(r.useState)(""),Je=Object(d.a)(He,2),$e=Je[0],Ye=Je[1],Ue=Object(r.useState)(null),Xe=Object(d.a)(Ue,2),Ze=Xe[0],et=Xe[1],tt=Object(r.useState)(""),nt=Object(d.a)(tt,2),at=nt[0],rt=nt[1],ct=Object(r.useState)(""),st=Object(d.a)(ct,2),it=st[0],ot=st[1],ut=Object(z.d)(),lt=["skillnad","stark","tycker","ocks\xe5","n\xe5gon","n\xe5gonsin","\xe4lskar","sk\xe4mtar","k\xf6r","g\xf6r","gjorde","gjort","sig","dig","mig","sk\xf6nt","bygger","dagen","roligt","kul","j\xe4ttekul","h\xe4rifr\xe5n","\xe5tminstone","d\xe4rifr\xe5n","l\xe4skigt","f\xf6rsvinner","v\xe4ldigt","l\xe4ngesen","sj\xe4lv","sj\xe4lvklart","f\xf6rsiktig","allvarligt","l\xe4get"];Object(r.useEffect)((function(){"/"===ut.location.pathname?f.getAll().then((function(e){c(e),Ee(!0)})):"/about"===ut.location.pathname&&(Te(!0),f.getAbout().then((function(e){c(e),Ee(!0)})))}),[]),Object(r.useEffect)((function(){D.a.initialize("UA-186348116-1"),D.a.pageview("/"),D.a.pageview("/about")}),[]),Object(r.useEffect)((function(){window.innerWidth<415?(le("320"),he("200")):window.innerWidth<668?(le("400"),he("300")):window.innerWidth>668&&(le("640"),he("360"))}),[]),window.addEventListener("resize",(function(e){e.preventDefault(),window.innerWidth<415?(le("310"),he("200")):window.innerWidth<668?(le("400"),he("300")):window.innerWidth>668&&(le("640"),he("360"))})),window.addEventListener("popstate",(function(e){"/"===ut.location.pathname?Te(!1):window.history.back()}));var dt=function(){switch(ue){case"640":le("640.1");break;case"640.1":le("640");break;case"400":le("400.1");break;case"400.1":le("400");break;case"310":le("310.1");break;case"310.1":le("310")}},bt=function(e){return b(e.target.value)},jt=function(e){x(e),S(0);var t=e[0].videoId;W(t);var n=e[0].time;ne(n),t===_&&n===te&&dt();var a=e[0].firstTimeIndex;ke(a),ge(1),J(!1),X(!0)},ht=function(e,t){W("G_O0N3R-Lv8"),ke(0),ne(0),ge(0),X(!1),x([]);var n=lt.length-1,a=lt[[Math.floor(Math.random()*n)]],r="".concat(t).concat(e,", try '").concat(a,"'");Q(r);var c=r.split(/[\s\n]+/);K(c),J(!0),window.clearTimeout(Me)},ft=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=[],r=[],""!==o)try{ze?(n.forEach((function(e){p(o,e.text)&&r.push(e.videoId)})),a=y(o,r,n),jt(a)):f.getResults(o).then((function(e){a=e.youTubeLinkList,0===(r=e.videoIDsThatContain).length?ht(o,"nothing found for "):jt(a)}))}catch(c){0===r.length&&ht(o,"nothing found for ")}else ht(o,"please type something");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pt={height:je,width:ue,playerVars:{cc_lang_pref:"sv",autoplay:me,start:te,cc_load_policy:me,enablejsapi:1}},Ot=function(e){if(O.length>0){window.clearTimeout(Me);var t=O[g],n=t.shownSubtitles;Q(n);var a=n.split(/[\s\n]+/);K(a),J(!0);var r=1e3*t.timeDifference+300,c=window.setTimeout((function(){J(!1)}),r);qe(c)}},xt=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g>=1&&(S(g-1),n=O[g-1].videoId,W(n),a=O[g-1].time,ne(a),n===_&&a===te&&dt(),r=O[g-1].firstTimeIndex,ke(r),J(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),vt=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),J(!0),dt();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),mt=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g<O.length-1&&(S(g+1),n=O[g+1].videoId,W(n),a=O[g+1].time,ne(a),dt(),r=O[g+1].firstTimeIndex,ke(r),J(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),gt=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,c,s,i,o,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={},e.prev=2,e.next=5,f.getOne(t).then((function(e){return e}));case 5:if(n=e.sent,a=n.buggyLines,r=O[g],c=r.timeStamp,s=c.substring(0,2),i=c.substring(3,5),o=c.substring(6,8),l=c.substring(9,12),d="".concat(r.videoId,"_").concat(s).concat(i).concat(o).concat(l),a.find((function(e){return e.bugId===d}))){e.next=21;break}return a.push({bugId:d,buggyText:r.lineText,lineIndex:r.lineIndex,time:r.time,timeStamp:r.timeStamp,firstTimeIndex:r.firstTimeIndex,nextTimeStamp:r.nextTimeStamp,secondTimeIndex:r.secondTimeIndex,link:r.youtubeLink}),e.next=18,f.reportBug({videoId:n.videoId,buggyLines:a});case 18:e.sent,e.next=22;break;case 21:console.log("already reported");case 22:window.confirm("You found and reported a bug! Thank you for helping us and other learners!"),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(2),console.log(e.t0),console.log("handleBug failed");case 29:case"end":return e.stop()}}),e,null,[[2,25]])})));return function(t){return e.apply(this,arguments)}}(),yt=function(){return J(!0)},wt=function(){return J(!1)},kt=function(e){return Ve(e.target.value)},St=function(e){return Fe(e.target.value)},It=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{ke(0),ne(0),ge(0),X(!1),x([]),n.find((function(e){return e.videoId===Ae}))?(W(Ae),Ye("".concat(Ae," found")),et(n.find((function(e){return e.videoId===Ae})))):(W("5bfx6BNufdE"),Ye("This subtitle is not in the db"),Fe(""),rt(""))}catch(a){console.log(a),Ye("There was an error, check the console"),ke(0),ne(0),ge(0),X(!1),x([]),W("5bfx6BNufdE")}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Nt=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{Ze.buggyLines.find((function(e){return e.bugId===Pe}))?(rt("".concat(Pe," found")),Fe(Pe),n=Ze.buggyLines.find((function(e){return e.bugId===Pe})),ne(n.time),ge(1),Q(!1)):rt("".concat(Pe," not found"))}catch(a){console.log(a),rt("There was an error, see the console, ".concat(Pe," not found"))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Tt=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,r,c,s,i,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.buggyLines.find((function(e){return e.bugId===n})),console.log(a),!window.confirm("Do you really want to remove the part from ".concat(a.timeStamp," to ").concat(a.nextTimeStamp,"?"))){e.next=26;break}return e.prev=4,r=a.firstTimeIndex,c=a.secondTimeIndex,s=c-r,i=t.buggyLines.slice(),console.log(i),o=i.filter((function(e){return e.bugId!==n})),console.log(o),(l=t.text).splice(r,s),e.next=16,f.deleteBuggyLines({id:t.id,buggyLines:o,text:l});case 16:e.sent,ot("".concat(n," corrected")),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),ot("Correction failed, see the conssole");case 24:e.next=27;break;case 26:ot("Correction cancelled");case 27:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t,n){return e.apply(this,arguments)}}(),Ct=function(){dt(),Te(!1),b(""),W("G_O0N3R-Lv8"),ke(0),ne(0),ge(0),X(!1),x([]),Q(null),K([]),J(!1),window.clearTimeout(Me)},Bt=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Ct(),ut.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Lt=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Ct(),ut.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Dt=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),dt(),Te(!0),b(""),W("G_O0N3R-Lv8"),ke(0),ne(0),ge(0),X(!1),x([]),Q(null),K([]),J(!1),window.clearTimeout(Me),ut.push("/about");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Ne?Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{logo:Lt,about:Dt,home:Bt}),Object(a.jsx)("div",{id:"main-container-about",className:"container",children:Object(a.jsx)(L,{"handleK\xf6rBara":Bt})}),Object(a.jsx)(C,{})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{logo:Lt,about:Dt,home:Bt}),Object(a.jsx)(B,{queryVideoId:Ae,handleQueryVideoIdChange:kt,searchVideoById:It,adminMessage1:$e,queryBugId:Pe,handleQueryBugIdChange:St,searchBugById:Nt,adminMessage2:at,handleCorrect:function(){return Tt(Ze,Pe)},adminMessage3:it}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k,{query:o,handleQueryChange:bt,handleSubmit:ft}),Object(a.jsx)("div",{className:"player-all",children:Object(a.jsx)(N,{videoId:_,opts:pt,containerClassName:Oe,handleBack:xt,"handleK\xf6rOm":vt,handleNext:mt,onPlay:Ot,showStats:U,videoIndex:g+1,length:O.length,handleBug:function(){return gt(_)}})}),Object(a.jsx)(T,{showSubtitle:H,shownSubtitles:R,shownSubtitlesArr:G,handleShow:yt,handleHide:wt,query:o})]}),Object(a.jsx)(C,{})]})]})})};s.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ece16d39.chunk.js.map