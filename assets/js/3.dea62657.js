(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{411:function(t,e,n){},412:function(t,e,n){},415:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(32),n(245),n(63);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(r),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return s.test(o)?t:o+".html"+n}function f(t,e,n){if(!t)return n;for(var r,i=e;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||n}},416:function(t,e,n){},417:function(t,e,n){},418:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",o="month",a="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,o),i=e-r<0,s=t.clone().add(n+(i?-1:1),o);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:o,y:u,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",m={};m[p]=d;var v=function(t){return t instanceof y},g=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},$=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},_=h;_.l=g,_.i=v,_.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function f(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return _},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return $(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<$(t)},h.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",u)},h.month=function(t){return this.$g(t,"$M",o)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,l=!!_.u(a)||a,f=_.p(t),h=function(t,e){var n=_.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(i)},d=function(t,e){return _.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,m=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case u:return l?h(1,0):h(31,11);case o:return l?h(1,m):h(0,m+1);case s:var $=this.$locale().weekStart||0,y=(p<$?p+7:p)-$;return h(l?v-y:v+(6-y),m);case i:case"date":return d(g+"Hours",0);case r:return d(g+"Minutes",1);case n:return d(g+"Seconds",2);case e:return d(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var c,l=_.p(s),f="set"+(this.$u?"UTC":""),h=(c={},c.day=f+"Date",c.date=f+"Date",c[o]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],d=l===i?this.$D+(a-this.$W):a;if(l===o||l===u){var p=this.clone().set("date",1);p.$d[h](d),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else h&&this.$d[h](d);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[_.p(t)]()},h.add=function(t,a){var c,l=this;t=Number(t);var f=_.p(a),h=function(e){var n=$(l);return _.w(n.date(n.date()+Math.round(e*t)),l)};if(f===o)return this.set(o,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===i)return h(1);if(f===s)return h(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,p=this.$d.getTime()+t*d;return _.w(p,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=_.z(this),i=this.$locale(),s=this.$H,o=this.$m,a=this.$M,u=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return _.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:f(i.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,u,2),ddd:f(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:_.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:_.s(o,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||p[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,i,c){var l,f=_.p(i),h=$(t),d=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,m=_.m(this,h);return m=(l={},l[u]=m/12,l[o]=m,l[a]=m/3,l[s]=(p-d)/6048e5,l.day=(p-d)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[f]||p,c?m:_.a(m)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return _.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}();return $.prototype=y.prototype,$.extend=function(t,e){return t(e,y,$),$},$.locale=g,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=m[p],$.Ls=m,$}()},419:function(t,e,n){},420:function(t,e,n){"use strict";var r=n(411);n.n(r).a},421:function(t,e,n){"use strict";var r=n(412);n.n(r).a},422:function(t,e,n){"use strict";var r=n(10),i=n(6),s=n(141),o=n(27),a=n(11),u=n(44),c=n(247),l=n(64),f=n(3),h=n(45),d=n(65).f,p=n(33).f,m=n(12).f,v=n(246).trim,g=i.Number,$=g.prototype,_="Number"==u(h($)),y=function(t){var e,n,r,i,s,o,a,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(s=c.slice(2)).length,a=0;a<o;a++)if((u=s.charCodeAt(a))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(s("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var b,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(_?f((function(){$.valueOf.call(n)})):"Number"!=u(n))?c(new g(y(e)),n,S):y(e)},w=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;w.length>M;M++)a(g,b=w[M])&&!a(S,b)&&m(S,b,p(g,b));S.prototype=$,$.constructor=S,o(i,"Number",S)}},423:function(t,e,n){var r=n(243),i=n(236),s=n(424),o=n(428);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),s(t,n,(function(t,n){return e(t,n[0])}))}},424:function(t,e,n){var r=n(146),i=n(425),s=n(139);t.exports=function(t,e,n){for(var o=-1,a=e.length,u={};++o<a;){var c=e[o],l=r(t,c);n(l,c)&&i(u,s(c,t),l)}return u}},425:function(t,e,n){var r=n(426),i=n(139),s=n(144),o=n(95),a=n(66);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,l=(e=i(e,t)).length,f=l-1,h=t;null!=h&&++c<l;){var d=a(e[c]),p=n;if(c!=f){var m=h[d];void 0===(p=u?u(m,d,h):void 0)&&(p=o(m)?m:s(e[c+1])?[]:{})}r(h,d,p),h=h[d]}return t}},426:function(t,e,n){var r=n(427),i=n(143),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},427:function(t,e,n){var r=n(244);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},428:function(t,e,n){var r=n(237),i=n(429),s=n(431);t.exports=function(t){return r(t,s,i)}},429:function(t,e,n){var r=n(142),i=n(430),s=n(238),o=n(239),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,s(t)),t=i(t);return e}:o;t.exports=a},430:function(t,e,n){var r=n(242)(Object.getPrototypeOf,Object);t.exports=r},431:function(t,e,n){var r=n(240),i=n(432),s=n(145);t.exports=function(t){return s(t)?r(t,!0):i(t)}},432:function(t,e,n){var r=n(95),i=n(241),s=n(433),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return s(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},433:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},434:function(t,e,n){},447:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return h}));n(14);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,460,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(420),n(7)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(421),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(422),n(97)),u=n.n(a),c=n(423),l=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},449:function(t,e,n){"use strict";var r=n(2),i=n(46).findIndex,s=n(147),o=n(28),a=!0,u=o("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},450:function(t,e,n){"use strict";var r=n(416);n.n(r).a},451:function(t,e,n){"use strict";var r=n(417);n.n(r).a},452:function(t,e,n){"use strict";var r=n(419);n.n(r).a},453:function(t,e,n){"use strict";var r=n(434);n.n(r).a},461:function(t,e,n){"use strict";n.r(e);n(14),n(449),n(234);var r,i=n(415),s={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),r=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-r-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(450),n(7));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var u={components:{Sticker:Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),r=e.top-n.top;r<20?this.$el.scrollTop=this.$el.scrollTop+r-20:r+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var r=e&&document.getElementById(e);r&&window.scrollTo(0,a(r)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===r&&(r=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,s=function(e){t.activeIndex=e};i<n.length;i++){if(!(a(document.getElementById(n[i].slug))-50<e)){i||s(i);break}s(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},c=(n(451),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,r){return n("div",{key:r,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===r}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(96),n(418)),f=n.n(l),h={name:"PostTag",props:{tag:{type:String,required:!0}}},d=(n(452),{name:"PostMeta",components:{PostTag:Object(o.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("router-link",{attrs:{to:"/tag/"+this.tag}},[this._v(" "+this._s(this.tag)+" ")])}),[],!1,null,"43160e8a",null).exports},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return f()(this.date).format(this.$themeConfig.dateFormat||"ddd, MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}}),p={components:{Toc:c,PostMeta:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()]):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n"+t._s(t.resolvedDate)+"\n")])]):t._e(),t._v(" "),t.tags?n("div",{staticClass:"card-subheading post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(447).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,465))}}},m=(n(453),Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("header",[n("span",{staticClass:"text-muted"},[n("PostMeta",{attrs:{date:t.$frontmatter.date}})],1),t._v(" "),n("h1",{staticClass:"article-head mt-3",attrs:{itemprop:"name headline"}},[t._v("\n            "+t._s(t.$frontmatter.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.$frontmatter.description))])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center text-center mt-4 mb-40"},[n("div",{staticClass:"col-md-9"},[n("img",{staticClass:"featuredimg",attrs:{src:t.$frontmatter.featuredimg}})])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags}})],1)])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-9"},[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("Comment")],1)]),t._v(" "),n("Toc")],1)}),[],!1,null,"0b0ea084",null));e.default=m.exports}}]);