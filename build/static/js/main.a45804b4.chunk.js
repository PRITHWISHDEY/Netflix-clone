(this.webpackJsonpmoviestreamer=this.webpackJsonpmoviestreamer||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},45:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),i=(a(27),a(4)),l=a.n(i),s=a(5),u=a(3),d=a(17),m=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(45),a(18)),v=a(21),p=a.n(v);var h=function(e){var t=e.title,a=e.fetchURl,o=e.isLargeRow,r=Object(n.useState)([]),i=Object(u.a)(r,2),d=i[0],v=i[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),b=g[0],_=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(a);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},d.map((function(e){return c.a.createElement("img",{className:"row_poster ".concat(o&&"row_posterLarge"),key:e.id,onClick:function(){!function(e){b?_(""):p()((null===e||void 0===e?void 0:e.title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.title})})),";"),b&&c.a.createElement(f.a,{videoId:b,opts:{height:"450",width:"100%",PlayerVars:{autoplay:1}}}))},g="b41027fb7e5b56daf79e1c8eacd5a0fc",b={fetchTrending:"/trending/all/day?api_key=".concat(g),fetchnNetflixOriginals:"/discover/movie?api_key=".concat(g,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=1&with_networks=213"),fetchToprated:"/movie/top_rated?api_key=".concat(g,"&language=en-US&page=1"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=35"),fecthHorrorMovies:"/discover/movie?api_key=".concat(g,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(g,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=10749")};a(61);var _=function(){var e,t,a=Object(n.useState)([]),o=Object(u.a)(a,2),r=o[0],i=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(b.fetchnNetflixOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),c.a.createElement("header",{className:"Banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"Banner-Contents"},c.a.createElement("h1",{className:"Banner-Title"},(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)),c.a.createElement("div",{className:"Banner-Buttons"},c.a.createElement("button",{className:"Banner-Button"},"Play"),c.a.createElement("button",{className:"Banner-Button"},"My List")),c.a.createElement("h1",{className:"Banner-description"},(e=null===r||void 0===r?void 0:r.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"Banner-fadeBottom"}))};a(62);var w=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"Nav ".concat(a&&"Nav-black")},c.a.createElement("img",{className:"Nav-logo",src:"https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=6",alt:"Netflix Logo"}),c.a.createElement("img",{className:"Nav-avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix-logo"}))};a(63);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(_,null),c.a.createElement(h,{title:"NETFLIX ORIGINALS",fetchURl:b.fetchnNetflixOriginals,isLargeRow:!0}),c.a.createElement(h,{title:"Top Rated",fetchURl:b.fetchToprated}),c.a.createElement(h,{title:"Trending",fetchURl:b.fetchTrending}),c.a.createElement(h,{title:"Action Movies",fetchURl:b.fetchActionMovies}),c.a.createElement(h,{title:"Comedy Movies",fetchURl:b.fetchComedyMovies}),c.a.createElement(h,{title:"Romantic Movies",fetchURl:b.fetchRomanticMovies}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.a45804b4.chunk.js.map