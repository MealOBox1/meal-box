(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+a/K":function(e,t,r){},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},FrYa:function(e,t,r){},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},R2GR:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r("q1tI"),o=r.n(n),a=r("UaXu"),i=r("Ol7k"),s=r("BMrR"),u=r("Tckk"),l=r("BvKs"),c=(r("R7RW"),r("wIM2"),r("YFqc")),p=r.n(c),f=o.a.createElement;function h(){return f(o.a.Fragment,null,f(s.a,{className:"panel"},f(u.a,{style:{border:"1px solid #44cd48"},size:80,src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})),f(s.a,{style:{justifyContent:"center"}}," ",f("h1",{style:{margin:"0"}},"Ram")),f(s.a,{style:{justifyContent:"center"}}," ",f("h4",null,"Ram")),f(s.a,{style:{justifyContent:"center"}},f(l.a,{mode:"horizontal",style:{boxShadow:"1px 4px 6px #888888",borderRadius:" 30px"}},f(l.a.Item,null,f(p.a,{href:"./food"},"Restaurants")),f(l.a.Item,null,f(p.a,{href:"./Overview"}," Overview")),f(l.a.Item,null,f(p.a,{href:"./usersummary"},"Account info")),f(l.a.Item,null,f(p.a,{href:"./Subscription"},"Subscription")))))}r("FrYa"),r("aIN1");var d=o.a.createElement;function m(){return d(o.a.Fragment,null,d(i.a,null,d(s.a,{style:{zIndex:-1,position:"relative"}},d("img",{src:"./images/thali.png",className:"headerBg",style:{width:"697px"}})),d(a.a,null),d(h,null)))}},R7RW:function(e,t,r){},Tckk:function(e,t,r){"use strict";var n=r("q1tI"),o=r("TSYQ"),a=r.n(o),i=r("H84U"),s=r("uaoM");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},y=function(){var e=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,r,o,u=h(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=u.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,r=e.avatarNode.offsetWidth;0===t||0===r||e.lastChildrenWidth===t&&e.lastNodeWidth===r||(e.lastChildrenWidth=t,e.lastNodeWidth=r,e.setState({scale:r-8<t?(r-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var r,o,i=t.getPrefixCls,u=e.props,p=u.prefixCls,f=u.shape,h=u.size,d=u.src,m=u.srcSet,y=u.icon,b=u.className,g=u.alt,w=v(u,["prefixCls","shape","size","src","srcSet","icon","className","alt"]);Object(s.a)(!("string"===typeof y&&y.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y,"` at https://ant.design/components/icon"));var O=e.state,x=O.isImgExist,C=O.scale,S=(O.mounted,i("avatar",p)),N=a()((c(r={},"".concat(S,"-lg"),"large"===h),c(r,"".concat(S,"-sm"),"small"===h),r)),E=a()(S,b,N,(c(o={},"".concat(S,"-").concat(f),f),c(o,"".concat(S,"-image"),d&&x),c(o,"".concat(S,"-icon"),y),o)),P="number"===typeof h?{width:h,height:h,lineHeight:"".concat(h,"px"),fontSize:y?h/2:18}:{},M=e.props.children;if(d&&x)M=n.createElement("img",{src:d,srcSet:m,onError:e.handleImgLoadError,alt:g});else if(y)M=y;else{if(e.avatarChildren||1!==C){var j="scale(".concat(C,") translateX(-50%)"),I={msTransform:j,WebkitTransform:j,transform:j},k="number"===typeof h?{lineHeight:"".concat(h,"px")}:{};M=n.createElement("span",{className:"".concat(S,"-string"),ref:function(t){return e.avatarChildren=t},style:l(l({},k),I)},M)}else{M=n.createElement("span",{className:"".concat(S,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},M)}}return n.createElement("span",l({},w,{style:l(l({},P),w.style),className:E,ref:function(t){return e.avatarNode=t}}),M)},e}return t=d,(r=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return n.createElement(i.a,null,this.renderAvatar)}}])&&p(t.prototype,r),o&&p(t,o),d}(n.Component);return e.defaultProps={shape:"circle",size:"default"},e}();t.a=y},UaXu:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("q1tI"),o=r.n(n),a=r("Ol7k"),i=r("BvKs"),s=r("Tckk"),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},l=r("6VBw"),c=function(e,t){return n.createElement(l.a,Object.assign({},e,{ref:t,icon:u}))};c.displayName="SettingOutlined";var p=n.forwardRef(c),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},h=function(e,t){return n.createElement(l.a,Object.assign({},e,{ref:t,icon:f}))};h.displayName="BellOutlined";var d=n.forwardRef(h),m=r("+a/K"),v=r.n(m),y=o.a.createElement,b=a.a.Header;a.a.Slider,a.a.Content;function g(){return y("div",null,y(b,null,y("div",{className:"logo"},y("a",{href:"./home"},y("img",{style:{borderRadius:"4px"},src:"./images/logo2.jpeg"}))),y(i.a,{style:{float:"right",display:"flex"},defaultSelectedKeys:["1"]},y(i.a.Item,null,y(p,null)),y(i.a.Item,null,y(d,null)),y(i.a.Item,null,"Ram"),y(i.a.Item,null,y(s.a,{className:v.a.avatar,src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}))))," ")}},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),s=r("Nsbk");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=r("TqRt"),c=r("284h");t.__esModule=!0,t.default=void 0;var p,f=c(r("q1tI")),h=r("QmWs"),d=r("g/15"),m=l(r("nOHt")),v=r("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,w={};function O(){return p||(g?p=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){a(l,e);var t,r=(t=l,function(){var e,r=s(t);if(u()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return i(this,e)});function l(e){var t;return n(this,l),(t=r.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),s=s?(0,h.resolve)(u,s):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,h.resolve)(e,r);return[o,n?(0,h.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=O();return r?(r.observe(e),b.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),f.default.cloneElement(a,i)}}]),l}(f.Component);t.default=x},wIM2:function(e,t,r){"use strict";var n=r("wx14"),o=r("rePB"),a=r("BMrR"),i=r("Vl3Y"),s=r("5rEg"),u=r("q1tI"),l=r.n(u),c=r("TSYQ"),p=r.n(c),f=r("jo6Y"),h=r.n(f),d=r("QbLZ"),m=r.n(d),v=r("iCc5"),y=r.n(v),b=r("FYw3"),g=r.n(b),w=r("mRg0"),O=r.n(w),x=r("4IlW");function C(){}function S(e){e.preventDefault()}var N=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,E=function(e){return void 0!==e&&null!==e},P=function(e,t){return t===e||"number"===typeof t&&"number"===typeof e&&isNaN(t)&&isNaN(e)},M=function(e){function t(r){y()(this,t);var n=g()(this,e.call(this,r));j.call(n);var o=void 0;o="value"in r?r.value:r.defaultValue,n.state={focused:r.autoFocus};var a=n.getValidValue(n.toNumber(o));return n.state=m()({},n.state,{inputValue:n.toPrecisionAsStep(a),value:a}),n}return O()(t,e),t.prototype.componentDidMount=function(){this.componentDidUpdate()},t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.value,n=t.onChange,o=t.max,a=t.min,i=this.state.focused;if(e){if(!P(e.value,r)||!P(e.max,o)||!P(e.min,a)){var s=i?r:this.getValidValue(r),u=void 0;u=this.pressingUpOrDown?s:this.inputting?this.rawInput:this.toPrecisionAsStep(s),this.setState({value:s,inputValue:u})}var l="value"in this.props?r:this.state.value;"max"in this.props&&e.max!==o&&"number"===typeof l&&l>o&&n&&n(o),"min"in this.props&&e.min!==a&&"number"===typeof l&&l<a&&n&&n(a)}try{if(void 0!==this.cursorStart&&this.state.focused)if(this.partRestoreByAfter(this.cursorAfter)||this.state.value===this.props.value){if(this.currentValue===this.input.value)switch(this.lastKeyCode){case x.a.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case x.a.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1)}}else{var c=this.cursorStart+1;this.cursorAfter?this.lastKeyCode===x.a.BACKSPACE?c=this.cursorStart-1:this.lastKeyCode===x.a.DELETE&&(c=this.cursorStart):c=this.input.value.length,this.fixCaret(c,c)}}catch(p){}this.lastKeyCode=null,this.pressingUpOrDown&&(this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.input&&this.focus(),this.pressingUpOrDown=!1)},t.prototype.componentWillUnmount=function(){this.stop()},t.prototype.getCurrentValidValue=function(e){var t=e;return t=""===t?"":this.isNotCompleteNumber(parseFloat(t,10))?this.state.value:this.getValidValue(t),this.toNumber(t)},t.prototype.getRatio=function(e){var t=1;return e.metaKey||e.ctrlKey?t=.1:e.shiftKey&&(t=10),t},t.prototype.getValueFromEvent=function(e){var t=e.target.value.trim().replace(/\u3002/g,".");return E(this.props.decimalSeparator)&&(t=t.replace(this.props.decimalSeparator,".")),t},t.prototype.getValidValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.min,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.max,n=parseFloat(e,10);return isNaN(n)?e:(n<t&&(n=t),n>r&&(n=r),n)},t.prototype.setValue=function(e,t){var r=this.props.precision,n=this.isNotCompleteNumber(parseFloat(e,10))?null:parseFloat(e,10),o=this.state,a=o.value,i=void 0===a?null:a,s=o.inputValue,u=void 0===s?null:s,l="number"===typeof n?n.toFixed(r):""+n,c=n!==i||l!==""+u;return"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},t):this.setState({value:n,inputValue:this.toPrecisionAsStep(e)},t),c&&this.props.onChange(n),n},t.prototype.getFullNum=function(e){return isNaN(e)?e:/e/i.test(String(e))?e.toFixed(18).replace(/\.?0+$/,""):e},t.prototype.getPrecision=function(e){if(E(this.props.precision))return this.props.precision;var t=e.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var r=0;return t.indexOf(".")>=0&&(r=t.length-t.indexOf(".")-1),r},t.prototype.getMaxPrecision=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.props,n=r.precision,o=r.step;if(E(n))return n;var a=this.getPrecision(t),i=this.getPrecision(o),s=this.getPrecision(e);return e?Math.max(s,a+i):a+i},t.prototype.getPrecisionFactor=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.getMaxPrecision(e,t);return Math.pow(10,r)},t.prototype.fixCaret=function(e,t){if(void 0!==e&&void 0!==t&&this.input&&this.input.value)try{var r=this.input.selectionStart,n=this.input.selectionEnd;e===r&&t===n||this.input.setSelectionRange(e,t)}catch(o){}},t.prototype.focus=function(){this.input.focus(),this.recordCursorPosition()},t.prototype.blur=function(){this.input.blur()},t.prototype.select=function(){this.input.select()},t.prototype.formatWrapper=function(e){return this.props.formatter?this.props.formatter(e):e},t.prototype.toPrecisionAsStep=function(e){if(this.isNotCompleteNumber(e)||""===e)return e;var t=Math.abs(this.getMaxPrecision(e));return isNaN(t)?e.toString():Number(e).toFixed(t)},t.prototype.isNotCompleteNumber=function(e){return isNaN(e)||""===e||null===e||e&&e.toString().indexOf(".")===e.toString().length-1},t.prototype.toNumber=function(e){var t=this.props.precision,r=this.state.focused,n=e&&e.length>16&&r;return this.isNotCompleteNumber(e)||n?e:E(t)?Math.round(e*Math.pow(10,t))/Math.pow(10,t):Number(e)},t.prototype.upStep=function(e,t){var r=this.props.step,n=this.getPrecisionFactor(e,t),o=Math.abs(this.getMaxPrecision(e,t)),a=((n*e+n*r*t)/n).toFixed(o);return this.toNumber(a)},t.prototype.downStep=function(e,t){var r=this.props.step,n=this.getPrecisionFactor(e,t),o=Math.abs(this.getMaxPrecision(e,t)),a=((n*e-n*r*t)/n).toFixed(o);return this.toNumber(a)},t.prototype.step=function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments[3];this.stop(),t&&(t.persist(),t.preventDefault());var a=this.props;if(!a.disabled){var i=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(i)){var s=this[e+"Step"](i,n),u=s>a.max||s<a.min;s>a.max?s=a.max:s<a.min&&(s=a.min),this.setValue(s),this.setState({focused:!0}),u||(this.autoStepTimer=setTimeout((function(){r[e](t,n,!0)}),o?200:600))}}},t.prototype.render=function(){var e,t,r,n=this.props,o=n.prefixCls,a=n.disabled,i=n.readOnly,s=n.useTouch,u=n.autoComplete,c=n.upHandler,f=n.downHandler,d=n.className,v=n.max,y=n.min,b=n.style,g=n.title,w=n.onMouseEnter,O=n.onMouseLeave,x=n.onMouseOver,N=n.onMouseOut,E=n.required,P=n.onClick,M=n.tabIndex,j=n.type,I=n.placeholder,k=n.id,R=n.inputMode,V=n.pattern,D=n.step,A=n.maxLength,T=n.autoFocus,F=n.name,U=h()(n,["prefixCls","disabled","readOnly","useTouch","autoComplete","upHandler","downHandler","className","max","min","style","title","onMouseEnter","onMouseLeave","onMouseOver","onMouseOut","required","onClick","tabIndex","type","placeholder","id","inputMode","pattern","step","maxLength","autoFocus","name"]),K=this.state,L=K.value,B=K.focused,z=p()(o,((e={})[d]=!!d,e[o+"-disabled"]=a,e[o+"-focused"]=B,e)),W={};for(var q in U)!U.hasOwnProperty(q)||"data-"!==q.substr(0,5)&&"aria-"!==q.substr(0,5)&&"role"!==q||(W[q]=U[q]);var H=!i&&!a,_=this.getInputDisplayValue(),Y=(L||0===L)&&(isNaN(L)||Number(L)>=v)||a||i,X=(L||0===L)&&(isNaN(L)||Number(L)<=y)||a||i,J=p()(o+"-handler",o+"-handler-up",((t={})[o+"-handler-up-disabled"]=Y,t)),$=p()(o+"-handler",o+"-handler-down",((r={})[o+"-handler-down-disabled"]=X,r)),Q=s?{onTouchStart:Y?C:this.up,onTouchEnd:this.stop}:{onMouseDown:Y?C:this.up,onMouseUp:this.stop,onMouseLeave:this.stop},Z=s?{onTouchStart:X?C:this.down,onTouchEnd:this.stop}:{onMouseDown:X?C:this.down,onMouseUp:this.stop,onMouseLeave:this.stop};return l.a.createElement("div",{className:z,style:b,title:g,onMouseEnter:w,onMouseLeave:O,onMouseOver:x,onMouseOut:N},l.a.createElement("div",{className:o+"-handler-wrap"},l.a.createElement("span",m()({unselectable:"unselectable"},Q,{role:"button","aria-label":"Increase Value","aria-disabled":Y,className:J}),c||l.a.createElement("span",{unselectable:"unselectable",className:o+"-handler-up-inner",onClick:S})),l.a.createElement("span",m()({unselectable:"unselectable"},Z,{role:"button","aria-label":"Decrease Value","aria-disabled":X,className:$}),f||l.a.createElement("span",{unselectable:"unselectable",className:o+"-handler-down-inner",onClick:S}))),l.a.createElement("div",{className:o+"-input-wrap"},l.a.createElement("input",m()({role:"spinbutton","aria-valuemin":y,"aria-valuemax":v,"aria-valuenow":L,required:E,type:j,placeholder:I,onClick:P,onMouseUp:this.onMouseUp,className:o+"-input",tabIndex:M,autoComplete:u,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:H?this.onKeyDown:C,onKeyUp:H?this.onKeyUp:C,autoFocus:T,maxLength:A,readOnly:i,disabled:a,max:v,min:y,step:D,name:F,title:g,id:k,onChange:this.onChange,ref:this.saveInput,value:_,pattern:V,inputMode:R},W))))},t}(l.a.Component);M.defaultProps={focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",min:-N,step:1,style:{},onChange:C,onKeyDown:C,onPressEnter:C,onFocus:C,onBlur:C,parser:function(e){return e.replace(/[^\w\.-]+/g,"")},required:!1,autoComplete:"off"};var j=function(){var e=this;this.onKeyDown=function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=e.props,i=a.onKeyDown,s=a.onPressEnter;if(t.keyCode===x.a.UP){var u=e.getRatio(t);e.up(t,u),e.stop()}else if(t.keyCode===x.a.DOWN){var l=e.getRatio(t);e.down(t,l),e.stop()}else t.keyCode===x.a.ENTER&&s&&s(t);e.recordCursorPosition(),e.lastKeyCode=t.keyCode,i&&i.apply(void 0,[t].concat(n))},this.onKeyUp=function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=e.props.onKeyUp;e.stop(),e.recordCursorPosition(),a&&a.apply(void 0,[t].concat(n))},this.onChange=function(t){var r=e.props.onChange;e.state.focused&&(e.inputting=!0),e.rawInput=e.props.parser(e.getValueFromEvent(t)),e.setState({inputValue:e.rawInput}),r(e.toNumber(e.rawInput))},this.onMouseUp=function(){var t=e.props.onMouseUp;e.recordCursorPosition(),t&&t.apply(void 0,arguments)},this.onFocus=function(){var t;e.setState({focused:!0}),(t=e.props).onFocus.apply(t,arguments)},this.onBlur=function(){var t=e.props.onBlur;e.inputting=!1,e.setState({focused:!1});var r=e.getCurrentValidValue(e.state.inputValue),n=e.setValue(r);if(t){var o=e.input.value,a=Number(e.getInputDisplayValue({focus:!1,value:n}));e.input.value=a,t.apply(void 0,arguments),e.input.value=o}},this.getInputDisplayValue=function(t){var r=t||e.state,n=r.focused,o=r.inputValue,a=r.value,i=void 0;void 0!==(i=n?o:e.toPrecisionAsStep(a))&&null!==i||(i="");var s=e.formatWrapper(i);return E(e.props.decimalSeparator)&&(s=s.toString().replace(".",e.props.decimalSeparator)),e.getFullNum(s)},this.recordCursorPosition=function(){try{e.cursorStart=e.input.selectionStart,e.cursorEnd=e.input.selectionEnd,e.currentValue=e.input.value,e.cursorBefore=e.input.value.substring(0,e.cursorStart),e.cursorAfter=e.input.value.substring(e.cursorEnd)}catch(t){}},this.restoreByAfter=function(t){if(void 0===t)return!1;var r=e.input.value,n=r.lastIndexOf(t);if(-1===n)return!1;var o=e.cursorBefore.length;return e.lastKeyCode===x.a.DELETE&&e.cursorBefore.charAt(o-1)===t[0]?(e.fixCaret(o,o),!0):n+t.length===r.length&&(e.fixCaret(n,n),!0)},this.partRestoreByAfter=function(t){return void 0!==t&&Array.prototype.some.call(t,(function(r,n){var o=t.substring(n);return e.restoreByAfter(o)}))},this.stop=function(){e.autoStepTimer&&clearTimeout(e.autoStepTimer)},this.down=function(t,r,n){e.pressingUpOrDown=!0,e.step("down",t,r,n)},this.up=function(t,r,n){e.pressingUpOrDown=!0,e.step("up",t,r,n)},this.saveInput=function(t){e.input=t}},I=M,k=r("FH2Y"),R=r.n(k),V=r("HQEm"),D=r.n(V),A=r("H84U"),T=r("3Nzz");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},L=u.forwardRef((function(e,t){var r=function(r){var n=r.getPrefixCls,o=r.direction,a=e.className,i=e.size,s=e.prefixCls,l=K(e,["className","size","prefixCls"]),c=n("input-number",s),f=u.createElement(R.a,{className:"".concat(c,"-handler-up-inner")}),h=u.createElement(D.a,{className:"".concat(c,"-handler-down-inner")});return u.createElement(T.b.Consumer,null,(function(e){var r,n=i||e,s=p()((U(r={},"".concat(c,"-lg"),"large"===n),U(r,"".concat(c,"-sm"),"small"===n),U(r,"".concat(c,"-rtl"),"rtl"===o),r),a);return u.createElement(I,F({ref:t,className:s,upHandler:f,downHandler:h,prefixCls:c},l))}))};return u.createElement(A.a,null,r)}));L.defaultProps={step:1};var B=L,z=r("2/Rp"),W=r("/MKj"),q=r("Oo8v"),H=l.a.createElement;function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(W.b)(null,{postAddress:q.d})((function(e){var t={labelCol:{span:8},wrapperCol:{span:16}};return H("div",null,H(a.a,null,H("h3",{style:{marginLeft:"567px",marginTop:"35px"}},"Account Information")),H(a.a,null,H(i.a,Object(n.a)({style:{width:"681px",marginLeft:"340px"}},t,{name:"nest-messages",onFinish:function(t){console.log(t),e.postAddress(t.user)},validateMessages:{required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}}}),H(i.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0}]},H(s.a,null)),H(i.a.Item,{name:["user","landmark"],label:"Landmark",rules:[{required:!0}]},H(s.a,null)),H(i.a.Item,{name:["user","pincode"],label:"Pincode",rules:[{type:"number"}]},H(B,null)),H(i.a.Item,{name:["user","introduction"],label:"Introduction"},H(s.a.TextArea,null)),H(i.a.Item,{wrapperCol:Y({},t.wrapperCol,{offset:8})},H(z.a,{type:"primary",htmlType:"submit",shape:"round",style:{backgroundColor:"#74cf4e",border:0}},"Save")))))}))}}]);