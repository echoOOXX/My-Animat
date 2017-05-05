/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)e(exports);else{var r={exports:{}};e(r.exports),t.canvas=r.exports}}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function t(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(){function t(){e(this,t),this.canvas=document.getElementById("canvas"),this.cxt=canvas.getContext("2d"),this.width=this.canvas.width=this.canvas.offsetWidth,this.height=this.canvas.height=this.canvas.offsetHeight,this.bounds=this.canvas.getBoundingClientRect(),this.ball_count=10,this.line_range=200,this.r_range=[20,40],this.color=[23,64,86],this.opacity=[.4,1],this.speed=[-5,5],this.balls=[],this.clickHandle=this.clickHandle.bind(this),this.start()}return n(t,[{key:"bindEvent",value:function(){this.canvas.addEventListener("click",this.clickHandle,!1)}},{key:"unbindEvent",value:function(){this.canvas.removeEventListener("click",this.clickHandle,!1)}},{key:"clickHandle",value:function(t){var e=t.clientX-this.bounds.left,r=t.clientY-this.bounds.top;this.addWork({x:e,y:r})}},{key:"start",value:function(){var t=this;if(this.isAnimate)return!1;this.isAnimate=!0;var e=function e(){if(!t.isAnimate)return!1;if(t.balls.length<t.ball_count)for(var r=0;r<t.ball_count-t.balls.length;r++)t.addBall();t.render(),t.update(),requestAnimationFrame(e)};requestAnimationFrame(e)}},{key:"addBall",value:function(){var t={x:this.getRandomNumber([0,this.width]),y:this.getRandomNumber([0,this.height]),vx:this.getRandomNumber(this.speed),vy:this.getRandomNumber(this.speed),opacity:this.getRandomNumber(this.opacity),type:~~this.getRandomNumber([0,3])};switch(t.r=t.opacity*(this.r_range[1]-this.r_range[0])+this.r_range[0],t.color="rgba("+this.color[0]+", "+this.color[1]+", "+this.color[2]+",",t.type){case 0:break;case 1:t.empty={r:this.getRandomNumber([10,t.r-10])};break;case 2:t.empty={r:this.getRandomNumber([t.r/2-3,t.r/2+3])},t.son={r:this.getRandomNumber([7,t.empty.r-3]),color:t.color}}this.balls.push(t)}},{key:"render",value:function(t){var e=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.balls,function(t){e.renderBall(t),t.x<t.r&&e.renderBall(t,t.x+e.width,t.y),t.x>e.width-t.r&&e.renderBall(t,t.x-e.width,t.y),t.y<t.r&&e.renderBall(t,t.x,t.y+e.height),t.y>e.height-t.r&&e.renderBall(t,t.x,t.y-e.height)})}},{key:"renderBall",value:function(t,e,r){var n=this,a=e||t.x,i=r||t.y;this.renderArc(a,i,t.r,t.color+t.opacity+")"),this.cxt.globalCompositeOperation="destination-out",t.type>0&&this.renderArc(a,i,t.empty.r,"#fff"),this.cxt.globalCompositeOperation="source-over",2===t.type&&this.renderArc(a,i,t.son.r,t.son.color+t.opacity+")"),Array.from(this.balls,function(e){if(t===e)return!1;var r=Math.sqrt(Math.pow(a-e.x,2)+Math.pow(i-e.y,2));if(r<n.line_range&&r>t.r+e.r){var o=n.cxt.createLinearGradient(a,i,e.x,e.y);1===t.type?(o.addColorStop(0,t.color+" "+(1-r/n.line_range)+")"),o.addColorStop(t.empty.r/r,t.color+" "+(1-r/n.line_range)+")"),o.addColorStop(t.empty.r/r,"transparent")):2===t.type?(o.addColorStop(0,"transparent"),o.addColorStop(t.son.r/r,"transparent"),o.addColorStop(t.son.r/r,t.color+" "+(1-r/n.line_range)+")"),o.addColorStop(t.empty.r/r,t.color+" "+(1-r/n.line_range)+")"),o.addColorStop(t.empty.r/r,"transparent")):o.addColorStop(0,"transparent"),o.addColorStop(t.r/r,"transparent"),o.addColorStop(t.r/r,t.color+" "+(1-r/n.line_range)+")"),o.addColorStop(1-e.r/r,e.color+" "+(1-r/n.line_range)+")"),o.addColorStop(1-e.r/r,"transparent"),o.addColorStop(1,"transparent"),n.cxt.strokeStyle=o,n.renderLine(a,i,e.x,e.y),t.isCrash=!1}else r<t.r+e.r&&!t.isCrash&&(t.isCrash=!0,e.isCrash=!0,n.crashHandle(t,e))})}},{key:"crashHandle",value:function(t,e){var r=Math.atan2(e.y-t.y,e.x-t.x),n=Math.sqrt(t.vx*t.vx+t.vy*t.vy),a=Math.sqrt(e.vx*e.vx+e.vy*e.vy),i=Math.atan2(t.vy,t.vx),o=Math.atan2(e.vy,e.vx),s=n*Math.cos(i-r),h=n*Math.sin(i-r),l=a*Math.cos(o-r),c=a*Math.sin(o-r),d=l,u=h,y=s,f=c;t.fx=Math.cos(r)*d+Math.cos(r+Math.PI/2)*u,t.fy=Math.sin(r)*d+Math.sin(r+Math.PI/2)*u,e.fx=Math.cos(r)*y+Math.cos(r+Math.PI/2)*f,e.fy=Math.sin(r)*y+Math.sin(r+Math.PI/2)*f}},{key:"update",value:function(){var t=this;this.balls.forEach(function(e){e.x<-e.r&&(e.x=e.x+t.width),e.x>t.width+e.r&&(e.x=e.x-t.width),e.y<-e.r&&(e.y=e.y+t.height),e.y>t.height+e.r&&(e.y=e.y-t.height),e.isCrash&&(e.vx=e.fx,e.vy=e.fy),e.x+=e.vx,e.y+=e.vy})}},{key:"getRandomNumber",value:function(t,e){var n=r(t,2),a=n[0],i=n[1];return Math.random()*(i-a)+a}},{key:"renderArc",value:function(t,e,r,n){this.cxt.fillStyle=n,this.cxt.beginPath(),this.cxt.arc(t,e,r,0,2*Math.PI,!0),this.cxt.closePath(),this.cxt.fill()}},{key:"renderLine",value:function(t,e,r,n){this.cxt.beginPath(),this.cxt.moveTo(t,e),this.cxt.lineTo(r,n),this.cxt.closePath(),this.cxt.stroke()}},{key:"renderTri",value:function(t,e,r){this.cxt.beginPath(),this.cxt.moveTo(t.x,t.y),this.cxt.lineTo(e.x,e.y),this.cxt.lineTo(r.x,r.y),this.cxt.lineTo(t.x,t.y),this.cxt.closePath(),this.cxt.stroke()}}]),t}();t.default=a});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)n(require("./canvas.js"));else{var t={exports:{}};n(e.canvas),e.index=t.exports}}(this,function(e){"use strict";new(function(e){return e&&e.__esModule?e:{default:e}}(e).default)});

/***/ })
/******/ ]);