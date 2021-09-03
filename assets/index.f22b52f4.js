import{o as t,c as e,a as n,b as s,m as r,t as o,d as i,F as a,r as l,T as h,w as d,e as g,f as c,g as m,v as u,h as p,i as v,j as w}from"./vendor.f14cd645.js";const y=["green","blue","red","yellow","indigo","purple","pink"];var f={props:["event","widthPerDay","startYear","columnWidth"],data:()=>({imageStatus:"not loaded",images:[],showingImages:!1}),computed:{hasImages(){return!!this.event.event.googlePhotosLink},eventRowStyle(){return`margin-left: ${this.getLeftMarginForDate(this.event,this.event.range.from)}px`},photoBarClass(){let t="photoBar transition rounded-lg shadow ";const e=this.event.event.tags[0];return this.$store.getters.tags[e]?y.includes(this.$store.getters.tags[e])&&(t+=`bg-${this.$store.getters.tags[e].toLowerCase()}-300 `):t+="bg-gray-300 ",t},eventBarClass(){let t="eventBar transition opacity-50 rounded-lg shadow ";const e=this.event.event.tags[0];return this.$store.getters.tags[e]?y.includes(this.$store.getters.tags[e])&&(t+=`bg-${this.$store.getters.tags[e].toLowerCase()}-300 `):t+="bg-gray-300 ",t},barColor(){let t="";const e=this.event.event.tags[0];return this.$store.getters.tags[e]&&!y.includes(this.$store.getters.tags[e])&&(t+=` background-color: ${this.$store.getters.tags[e]}`),t},eventBarStyle(){return`width: ${this.getWidthForRange(this.event.range)}px; ${this.barColor}`},photoBarStyle(){return`width: 10px; ${this.barColor}; top: calc(0.5rem + 1px)`}},methods:{async loadImages(){this.imageStatus="loading";const t=await fetch(`https://k.npkn.net/google-photos/${this.event.event.googlePhotosLink}`);this.images=await t.json(),this.imageStatus="loaded"},togglePhotos(){this.showingImages=!this.showingImages,"not loaded"===this.imageStatus&&this.loadImages()},getWidthForRange(t){return Math.max(10,Math.max(1,t.numDays())*this.widthPerDay)},getLeftMarginForDate(t,e){let n=(t.startingYear()-this.startYear)*this.columnWidth;if(e.month){const t=this.columnWidth/12*(e.month-1);return e.day?n+t+(e.day-1)*(this.columnWidth/12/30):n+t}return n+0}}};const x={class:"flex flex-row"},k={class:"eventDate"},b={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-2 mb-px",viewBox:"0 0 20 20",fill:"currentColor"},S=s("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"},null,-1),C={key:1,class:"animate-spin h-3 w-3 ml-3 mb-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},$=s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),D=s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),W={key:1,class:"bg-gray-900 rounded p-2 -mx-2 inline-flex mt-1 relative shadow-lg",style:{"max-width":"100vw"}},T=s("div",{class:"ml-2 mr-3"},null,-1),I={class:"flex flex-row overflow-x-scroll items-center rounded"};f.render=function(h,d,g,c,m,u){return t(),e("div",{class:"eventRow flex flex-col relative",style:u.eventRowStyle},[m.showingImages?(t(),e("div",{key:0,class:[u.photoBarClass,"absolute left-0 mr-2 bottom-2 z-20 opacity-50"],style:u.photoBarStyle},null,6)):n("",!0),s("div",x,[s("div",r({class:["\n          eventItem\n          flex-row\n          items-center\n          flex\n          rounded\n          -mx-2\n          px-2\n          py-1\n          transition\n        ",{"hover:bg-gray-800 hover:shadow-lg":!!g.event.event.googlePhotosLink,"bg-gray-900 shadow-lg":m.showingImages,"cursor-pointer":!!g.event.event.googlePhotosLink}]},o(g.event.event.googlePhotosLink?{click:u.togglePhotos}:{})),[s("div",{class:u.eventBarClass,style:u.eventBarStyle},null,6),s("p",k,i(g.event.getDateHtml()),1),g.event.event.googlePhotosLink&&"loading"!==m.imageStatus?(t(),e("svg",b,[S])):g.event.event.googlePhotosLink&&"loading"===m.imageStatus?(t(),e("svg",C,[$,D])):n("",!0),s("p",{class:"eventTitle ml-2",innerHTML:g.event.getInnerHtml()},null,8,["innerHTML"])],16)]),m.showingImages&&"loaded"===m.imageStatus&&m.images.length>0?(t(),e("div",W,[T,s("div",I,[(t(!0),e(a,null,l(m.images,((n,r)=>(t(),e("a",{href:g.event.event.googlePhotosLink,key:n,class:{"mr-2":r!==m.images.length-1}},[s("img",{src:n,class:"rounded max-w-none z-30"},null,8,["src"])],10,["href"])))),128))])])):n("",!0)],4)};var M={components:{EventRow:f},data:()=>({panning:{}}),computed:{containerStyle(){return`width: ${this.columnWidth*this.numColumns}px`},isPanning(){var t,e,n,s;return!!(null==(e=null==(t=this.panning)?void 0:t.mouseStart)?void 0:e.x)&&!!(null==(s=null==(n=this.panning)?void 0:n.mouseStart)?void 0:s.y)},columnWidth(){return this.$store.state.settings.yearWidth},years(){const t=this.$store.getters.events;if(!t||0===t.length)return{start:2010,end:2020};let e=t[0].startingYear(),n=t[0].getNextYear();for(let s of t)s.startingYear()<e&&(e=s.startingYear()),s.getNextYear()>n&&(n=s.getNextYear());return{start:e-1,end:n+6}},numColumns(){return this.years.end-this.years.start},numRows(){return this.$store.getters.events.length+1},widthPerDay(){return this.columnWidth/12/30}},methods:{styleForMonth(t){const e={top:"0px",left:t*(this.columnWidth/12)+"px"};if(0!==t&&12!==t&&this.columnWidth>600){let t=.2;e["border-left"]=`1px dashed rgba(128, 128, 128, ${t+this.columnWidth/1600*.3})`}return e},mouseDown(t){t.stopPropagation();const e=document.getElementById("timelineContainer");e.style.cssText="cursor: grabbing;",this.panning={mouseStart:{x:t.clientX,y:t.clientY},containerStart:{x:e.scrollLeft,y:e.scrollTop}}},mouseUp(t){document.getElementById("timelineContainer").style.cssText="cursor: grab;",this.panning={}},mouseMove(t){if(!this.isPanning)return;t.stopPropagation();const e=document.getElementById("timelineContainer");e.scrollLeft=this.panning.containerStart.x+(this.panning.mouseStart.x-t.clientX),e.scrollTop=this.panning.containerStart.y+(this.panning.mouseStart.y-t.clientY)},range:(t,e=0)=>[...Array(t).keys()].map((t=>t+e))}};const B={id:"years",class:"flex absolute inset-0 pointer-events-none"},P={class:"yearTitle text-sm"},L={id:"events"},H=s("div",{class:"h-24"},null,-1),E=s("div",{style:{height:"50vh"}},null,-1);M.render=function(n,r,o,c,m,u){const p=g("event-row");return t(),e("div",{class:"relative",style:u.containerStyle},[s("div",B,[(t(!0),e(a,null,l(u.range(u.years.end-u.years.start+1,u.years.start),(n=>(t(),e("div",{class:"year flex-shrink-0 relative",key:n,style:`width: ${this.columnWidth}px`},[s("h6",P,i(n),1),(t(!0),e(a,null,l(u.range(12,0),(n=>(t(),e("div",{class:"absolute h-full",key:n,style:u.styleForMonth(n)},null,4)))),128))],4)))),128))]),s("div",L,[H,s(h,{name:"eventRow"},{default:d((()=>[(t(!0),e(a,null,l(n.$store.getters.filteredEvents,(n=>(t(),e(p,{key:n.eventString,event:n,widthPerDay:u.widthPerDay,startYear:u.years.start,columnWidth:u.columnWidth},null,8,["event","widthPerDay","startYear","columnWidth"])))),128))])),_:1}),E])],4)};var Y={props:["list"]};const F={class:"flex flex-col mr-3"},R=s("h3",{class:"text-xl border-b"},"My cascades",-1),A={key:0,class:""},N={class:""},j={class:"ml-auto mt-1"},z=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),O={key:1,class:""},G=s("div",{class:""},"No saved cascades",-1);Y.render=function(n,r,o,h,d,g){return t(),e("div",F,[R,o.list&&o.list.length>0?(t(),e("div",A,[(t(!0),e(a,null,l(o.list,(r=>(t(),e("div",{class:"cursor-pointer flex flex-row align-baseline mb-1 hover:bg-blue-100 rounded px-1 transition-color duration-100",key:r,onClick:t=>n.$emit("selected",r)},[s("div",N,i(r),1),s("div",j,[(t(),e("svg",{onClick:t=>n.$emit("delete",r),xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[z],8,["onClick"]))])],8,["onClick"])))),128))])):(t(),e("div",O,[G]))])};class U{constructor(t){"now"===t&&(t=(new Date).toLocaleDateString());let[e,n,s]=t.split("/").reverse();const r=parseInt(e);this.year=r,n&&(s?(this.month=parseInt(s),this.day=parseInt(n)):this.month=parseInt(n))}}class V{constructor(t){this.originalString=t;const e=t.indexOf("//");e>=0&&(t=t.substring(0,e));const[n,s]=t.split("-");this.from=new U(n),this.to=s?new U(s):void 0}getNextYear(){return this.to?this.to.year+1:this.from.year+1}startingDay(){return{year:this.from.year,month:this.from.month?this.from.month:1,day:this.from.day?this.from.day:1}}endingDay(){return this.to?{year:this.to.year,month:this.to.month?this.to.month:12,day:this.to.day?Math.min(this.to.day,30):30}:{year:this.from.year,month:this.from.month?this.from.month:12,day:this.from.day?Math.min(this.from.day,30):30}}numDays(){return V.numDaysBetween(this.startingDay(),this.endingDay())}static numDaysBetween(t,e){let n;if(t.year===e.year)n=30*(e.month-t.month)+(e.day-t.day)+1;else{const s=V.numDaysBetween(t,{year:t.year,month:12,day:30}),r=V.numDaysBetween({year:e.year,month:1,day:1},e);n=s+360*(e.year-t.year-1)+r}return n}}class J{constructor(t){this.linkRegex=/\[([\w\s\d\.]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g,this.googlePhotosRegex=/(?:https:\/\/)?photos.app.goo.gl\/\w+/g,t=t.replace(this.googlePhotosRegex,(t=>(this.googlePhotosLink=t,"")));let e=J.reverseString(t);const n=new Set;let s;this.tags=[];let r=0;for(;null!==(s=/(?:^(\w+)# )/gm.exec(e));)s.forEach(((t,e)=>{if(1===e){const e=J.reverseString(t);n.has(e)||(n.add(e),this.tags.push(e)),r=t.length+2}})),e=e.substring(r);this.eventDescription=J.reverseString(e.trim())}getInnerHtml(){return this.eventDescription.replace(this.linkRegex,((t,e,n)=>`<a class="underline" href="${n}">${e}</a>`))}static reverseString(t){return t.split("").reverse().join("")}}class K{constructor(t,e,n){this.eventString=t,this.range=e,this.event=n}startingYear(){return this.range.from.year}getNextYear(){return this.range.getNextYear()}getInnerHtml(){return this.event.getInnerHtml()}getDateHtml(){return this.range.originalString}static fromString(t){const e=t.indexOf(":");if(-1===e)return;const n=t.substring(0,e).trim(),s=new V(n),r=new J(t.substring(e+1).trim());return new K(t,s,r)}}const Z=["green","blue","red","yellow","indigo","purple","pink"];var X=c({state:()=>({settings:{yearWidth:120},filter:new Set,eventsString:"// Comments start with two slashes: `//`\n// Tags start with a pound sign: `#`\n\n// Add a shareable google photos link to display images. Events with the image icon have displayable images.\n\n// This is an indication that events tagged `#Work` will be colored #e13\n#Work: #e13\n\n08/2008-05/2012: Psych degree #Education\n02/2010-06/2012: Dispatcher #Work\n10/2010: Barn built across the street https://photos.app.goo.gl/Er9D81cdiE2tUwDZA\n06/2011-08/2011: Westover Air Reserve Base https://photos.app.goo.gl/NZ5rnGS7vZTXHe7aA #Work\n\n// 2013\n03/15/2013-04/2015: China https://photos.app.goo.gl/4UEkw3EbUkUuNzKGA #Work\n\n// 2014\n07/2014: 4th of July in DC https://photos.app.goo.gl/d418j6GSkCD5LGmY8\n\n// 2015\n05/2015-08/2015: Summer classes so I can graduate in two years #Education\n05/2015: James graduation\n06/2015: Built desk\n06/2015: Kim and Matt wedding\n08/2015-05/2017: CS degree #Education\n\n// 2016\n05/22/2016-08/12/2016: Cardinal Health #Work\n08/16/2016-08/27/2016: Italy\n\n// 2017\n05/2017-05/2018: Cladwell #Work\n06/10/2017-06/17/2017: The Hague & Copenhagen\n\n// 2018\n07/21/2018-07/22/2018: Chicago\n07/26/2018-07/31/2018: LA and Seattle (interviewing)\n08/04/2018-08/14/2018: Mexico City\n09/05/2018-09/11/2018: Hong Kong and Macau\n09/19/2018-09/22/2018: Road trip to Seattle\n10/01/2018-01/2021: [Google](https://www.google.com) #Work\n12/28/2018-12/29/2018: Nemacolin and Fallingwater\n\n// 2019\n06/08/2019: Paula's wedding\n07/04/2019: 4th of July in Seattle with siblings\n08/23/2019-08/27/2019: SF and Bishop's Ranch\n09/2019: Hawaii with Google\n12/20/2019-12/22/2019: Train from Seattle to Chicago\n12/2019: Christmas at home, Dad to hospital\n\n// 2020\n02/29/2020: Molly and Kaitlyn to Seattle (thus starting covid)\n03/28/2020: James to Austin\n05/24/2020: Sold the Impala\n07/2020: Oregon & Crater Lake\n08/2020: Mt. Rainier\n08/2020: Oak Island\n09/2020: Hurricane Ridge\n9/2020: Trip to Coeur d'Alene\n11/2020: Trip to Denver\n12/2020: Reese\n12/25/2020: Christmas in Blaine\n\n// 2021\n01/2021: qr.new featured on [Hacker News](https://news.ycombinator.com/item?id=25481772)\n02/2021: Hawaii\n02/01/2021-now: Working on [swink](https://sw.ink) full time #Work\n05/25/2021: [cascade.page](https://cascade.page) featured on [Hacker News](https://news.ycombinator.com/item?id=27282842)\n06/05/2021-06/12/2021: Ohio and James's Party\n08/11/2021-08/17/2021: Cincinnati https://photos.app.goo.gl/h5CfrZamP5Tw6yDn7"}),mutations:{setYearWidth(t,e){t.settings.yearWidth=e},setEventsString(t,e){t.eventsString=e},clearFilters(t){t.filter.clear()},filterTag(t,e){t.filter.has(e)?t.filter.delete(e):t.filter.add(e)}},getters:{trimmedAndFilteredEntries:t=>t.eventsString.split("\n").filter((t=>!!t&&null===t.match(/^\s*\/\/.*/))).map((t=>t.trim())),events:(t,e)=>e.trimmedAndFilteredEntries.filter((t=>!t.startsWith("!")&&!t.startsWith("#"))).map(K.fromString).filter((t=>!!t)),filteredEvents:(t,e)=>e.events.filter((e=>0===t.filter.size||e.event.tags.some((e=>t.filter.has(e))))),tags(t,e){let n=0;const s=new Set(e.events.flatMap((t=>t.event.tags))),r=e.trimmedAndFilteredEntries.filter((t=>t.startsWith("#"))).map((t=>t.substring(1).split(": "))),o={};for(let i of r)o[i[0]]=i[1];for(let i of s)o[i]||(o[i]=Z[n++%Z.length]);return o}}}),q={methods:{buttonClass(t){const e=this.$store.getters.tags[t];return Z.includes(e)?`bg-${e}-300`:""},buttonStyle(t){const e=this.$store.getters.tags[t];return Z.includes(e)?"":`background-color: ${e}`},filterTag(t){this.$store.commit("filterTag",t)},clearFilters(){this.$store.commit("clearFilters")}}};const _={class:"flex flex-row",style:{"flex-wrap":"nowrap","overflow-x":"auto","--webkit-overflow-scrolling":"touch"}},Q=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 md:mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"})],-1),tt=s("span",{class:"hidden md:block"},"Show all tags",-1),et={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},nt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),st={class:"hidden md:block md:ml-2"};q.render=function(r,o,h,d,g,c){return t(),e("div",_,[Object.keys(r.$store.getters.tags).length>0?(t(),e("button",{key:0,class:"\n        mr-2\n        rounded\n        bg-gray-800\n        hover:bg-gray-700\n        md:px-2\n        md:py-0\n        p-1\n        flex flex-row\n        items-center\n      ",onClick:o[1]||(o[1]=(...t)=>c.clearFilters&&c.clearFilters(...t))},[Q,tt])):n("",!0),(t(!0),e(a,null,l(Object.keys(r.$store.getters.tags),(o=>(t(),e("button",{class:"\n        flex flex-row\n        items-center\n        mr-2\n        rounded\n        bg-gray-800\n        hover:bg-gray-700\n        md:px-2\n        md:py-0\n        p-1\n      ",key:o,onClick:t=>c.filterTag(o)},[s("div",{class:["h-4 w-4 rounded",c.buttonClass(o)],style:c.buttonStyle(o)},[r.$store.state.filter.has(o)?(t(),e("svg",et,[nt])):n("",!0)],6),s("span",st,i(o),1)],8,["onClick"])))),128))])};const rt={data(){return{width:this.$store.state.settings.yearWidth}},watch:{width(t,e){this.$store.commit("setYearWidth",t)}}},ot={class:"flex flex-col mx-2"};rt.render=function(n,r,o,i,a,l){return t(),e("div",ot,[m(s("input",{type:"range",min:"10",max:"1600","onUpdate:modelValue":r[1]||(r[1]=t=>a.width=t),class:"my-1"},null,512),[[u,a.width]])])};var it={components:{Storage:Y,Tags:q,DisplaySettings:rt},data:()=>({collapsed:!1,currentTimelineName:"",list:[]}),mounted(){this.getTimelines()},methods:{deleteTimeline(t){confirm(`Delete ${t}?`)&&(localStorage.removeItem(t),this.list.splice(this.list.indexOf(t),1),localStorage.setItem("timelines",this.list.join(",")))},selectedTimeline(t){this.loadTimeline(t)},save(){const t=prompt("Save cascade as: ",this.currentTimelineName);if(t){if(localStorage.setItem(t,this.$store.state.eventsString),this.list.includes(t))return;this.list.push(t),localStorage.setItem("timelines",this.list.join(","))}},loadTimeline(t){var e;this.$store.commit("setEventsString",null!=(e=localStorage.getItem(t))?e:""),this.currentTimelineName=t},getTimelines(){const t=localStorage.getItem("timelines");t&&(this.list=t.split(","),this.loadTimeline(this.list[0]))}}};const at={class:"\n      fixed\n      bottom-0\n      left-0\n      right-0\n      p-2\n      z-30\n      backdrop-filter backdrop-blur-2xl\n      border-t border-gray-600\n    ",style:{"max-height":"50vh"}},lt={class:"flex flex-row"},ht=s("div",{class:"underline flex items-end"},[s("a",{href:"https://github.com/kochrt/cascade.page"},"GitHub")],-1),dt={class:"hidden md:block"},gt={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ct=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),mt={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ut=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),pt={class:"flex flex-col pt-3"},vt={class:""},wt={class:"flex flex-col mb-3 text-black"};it.render=function(r,o,a,l,h,d){const c=g("display-settings"),v=g("tags"),w=g("Storage");return t(),e("div",at,[s("div",lt,[ht,s(c),s(v),s("button",{class:"\n          ml-auto\n          hover:bg-gray-500\n          rounded\n          px-3\n          flex flex-row\n          items-center\n        ",onClick:o[1]||(o[1]=t=>h.collapsed=!h.collapsed)},[s("span",dt,i(h.collapsed?"Expand":"Collapse"),1),h.collapsed?n("",!0):(t(),e("svg",gt,[ct])),h.collapsed?(t(),e("svg",mt,[ut])):n("",!0)])]),m(s("div",pt,[s(w,{list:h.list,onSelected:d.selectedTimeline,onDelete:d.deleteTimeline},null,8,["list","onSelected","onDelete"]),s("div",vt,[s("div",wt,[m(s("textarea",{class:"border shadow-md flex-grow p-2 font-mono text-sm",name:"eventsField",cols:"55",rows:"12","onUpdate:modelValue":o[2]||(o[2]=t=>r.$store.state.eventsString=t)},null,512),[[u,r.$store.state.eventsString]]),s("button",{class:"\n              bg-blue-100\n              mt-3\n              rounded\n              shadow-md\n              hover:shadow-none\n              transition-all\n              duration-100\n            ",onClick:o[3]||(o[3]=(...t)=>d.save&&d.save(...t))}," Save cascade ")])])],512),[[p,!h.collapsed]])])};var yt={components:{Sidebar:it,Timeline:M,Storage:Storage}};yt.render=function(n,r,o,i,a,l){const h=g("timeline"),d=g("sidebar");return t(),e("div",null,[s(h),s(d)])};var ft=v({name:"App",components:{MainVue:yt}});ft.render=function(n,s,r,o,i,a){const l=g("main-vue");return t(),e(l)};const xt=w(ft);xt.use(X),xt.mount("#app");
