(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["reapopTheme"] = factory();
	else
		root["reapopTheme"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var css = __webpack_require__(2);

	// media breakpoint - small screen min width
	var smallScreenMin = 768;

	// default className for NotificationsSystem component
	var notificationsSystemClassName = css['notifications-system'];

	// default className for NotificationsContainer component
	var notificationsContainerClassName = {
	  main: css['notifications-container'],
	  position: function position(_position) {
	    return css['notifications-container--' + _position];
	  }
	};

	// default transition for Notification component
	var notificationsContainerTransition = {
	  enterTimeout: 500,
	  leaveTimeout: 900,
	  name: {
	    enter: css['notification-wrapper-enter'],
	    leave: css['notification-wrapper-leave']
	  }
	};

	// default className for Notification component
	var notificationClassName = {
	  main: css['notification'],
	  wrapper: css['notification-wrapper'],
	  meta: css['notification-meta'],
	  title: css['notification-title'],
	  message: css['notification-message'],
	  // `fa` corresponds to font-awesome's class name
	  icon: 'fa ' + css['notification-icon'],
	  imageContainer: css['notification-image-container'],
	  image: css['notification-image'],
	  status: function status(_status) {
	    return css['notification--' + _status];
	  },
	  dismissible: css['notification--dismissible'],
	  buttons: function buttons(count) {
	    if (count === 0) {
	      return '';
	    } else if (count === 1) {
	      return css['notification--buttons-1'];
	    } else if (count === 2) {
	      return css['notification--buttons-2'];
	    }
	    return css['notification-buttons'];
	  },
	  closeButtonContainer: css['notification-close-button-container'],
	  closeButton: 'fa ' + css['notification-close-button'],
	  button: css['notification-button'],
	  buttonText: css['notification-button-text']
	};

	module.exports = {
	  smallScreenMin: smallScreenMin,
	  notificationsSystem: {
	    className: notificationsSystemClassName
	  },
	  notificationsContainer: {
	    className: notificationsContainerClassName,
	    transition: notificationsContainerTransition
	  },
	  notification: {
	    className: notificationClassName
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!./styles.css", function() {
				var newContent = require("!!./../../css-loader/index.js?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * Mixin to create a keyframes for a notification\n * @param $direction (left|top|right|bottom) Translation direction\n * @param $margin-bottom Initial `margin-bottom` value\n */\n/*\n * Mixin to create an animation for a notification\n * @param $direction (left|top|right|bottom) Translation direction\n * @param $margin-bottom Initial `margin-bottom` value\n */\n@keyframes styles__top20px-enter__2JnAU {\n  0% {\n    top: -360px;\n    opacity: 0; }\n  100% {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes styles__top20px-leave__vt5Ez {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes styles__bottom20px-enter__11ZMc {\n  0% {\n    bottom: -360px;\n    opacity: 0; }\n  100% {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes styles__bottom20px-leave__1d30C {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes styles__left20px-enter__2lInW {\n  0% {\n    left: -360px;\n    opacity: 0; }\n  100% {\n    left: 0;\n    opacity: 1; } }\n\n@keyframes styles__left20px-leave__CWV5f {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes styles__right20px-enter__3VM-N {\n  0% {\n    right: -360px;\n    opacity: 0; }\n  100% {\n    right: 0;\n    opacity: 1; } }\n\n@keyframes styles__right20px-leave__bBXWR {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes styles__top0-enter__2SDaC {\n  0% {\n    top: -360px;\n    opacity: 0; }\n  100% {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes styles__top0-leave__29ud- {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 0; }\n  40% {\n    margin-bottom: 0;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes styles__rotating__37Xgw {\n  from {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg); } }\n\n.styles__notifications-system__2pp3g {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.428571429; }\n\n.styles__notifications-container__3DyIs {\n  position: fixed;\n  z-index: 99999; }\n\n.styles__notifications-container--tc__3uD_3, .styles__notifications-container--tr__2uehm, .styles__notifications-container--tl__sEol2, .styles__notifications-container--bc__pEhwB, .styles__notifications-container--br__gPOIJ, .styles__notifications-container--bl__3AXHJ {\n  width: 360px; }\n  .styles__notifications-container--tc__3uD_3 .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5, .styles__notifications-container--tr__2uehm .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5, .styles__notifications-container--tl__sEol2 .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5, .styles__notifications-container--bc__pEhwB .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5, .styles__notifications-container--br__gPOIJ .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5, .styles__notifications-container--bl__3AXHJ .styles__notification--buttons-1__1vzbQ .styles__notification-button__32lr5 {\n    height: 100%; }\n  .styles__notifications-container--tc__3uD_3 .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5, .styles__notifications-container--tr__2uehm .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5, .styles__notifications-container--tl__sEol2 .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5, .styles__notifications-container--bc__pEhwB .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5, .styles__notifications-container--br__gPOIJ .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5, .styles__notifications-container--bl__3AXHJ .styles__notification--buttons-2__1IGYR .styles__notification-button__32lr5 {\n    height: 50%; }\n  .styles__notifications-container--tc__3uD_3 .styles__notification-buttons__3SijB, .styles__notifications-container--tr__2uehm .styles__notification-buttons__3SijB, .styles__notifications-container--tl__sEol2 .styles__notification-buttons__3SijB, .styles__notifications-container--bc__pEhwB .styles__notification-buttons__3SijB, .styles__notifications-container--br__gPOIJ .styles__notification-buttons__3SijB, .styles__notifications-container--bl__3AXHJ .styles__notification-buttons__3SijB {\n    width: 90px; }\n    .styles__notifications-container--tc__3uD_3 .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--tr__2uehm .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--tl__sEol2 .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--bc__pEhwB .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--br__gPOIJ .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--bl__3AXHJ .styles__notification-buttons__3SijB .styles__notification-button__32lr5 {\n      display: block;\n      width: 90px; }\n      .styles__notifications-container--tc__3uD_3 .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2), .styles__notifications-container--tr__2uehm .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2), .styles__notifications-container--tl__sEol2 .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2), .styles__notifications-container--bc__pEhwB .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2), .styles__notifications-container--br__gPOIJ .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2), .styles__notifications-container--bl__3AXHJ .styles__notification-buttons__3SijB .styles__notification-button__32lr5:nth-child(2) {\n        border-top: 1px solid rgba(0, 0, 0, 0.09); }\n\n.styles__notifications-container--b__3mM4P .styles__notification--buttons-1__1vzbQ .styles__notification-buttons__3SijB, .styles__notifications-container--t__14JVq .styles__notification--buttons-1__1vzbQ .styles__notification-buttons__3SijB {\n  width: 90px; }\n\n.styles__notifications-container--b__3mM4P .styles__notification--buttons-2__1IGYR .styles__notification-meta__2nIlF, .styles__notifications-container--t__14JVq .styles__notification--buttons-2__1IGYR .styles__notification-meta__2nIlF {\n  width: calc(100% - 90px * 2); }\n\n.styles__notifications-container--b__3mM4P .styles__notification--buttons-2__1IGYR .styles__notification-buttons__3SijB, .styles__notifications-container--t__14JVq .styles__notification--buttons-2__1IGYR .styles__notification-buttons__3SijB {\n  width: calc(90px * 2); }\n\n.styles__notifications-container--b__3mM4P .styles__notification-buttons__3SijB .styles__notification-button__32lr5, .styles__notifications-container--t__14JVq .styles__notification-buttons__3SijB .styles__notification-button__32lr5 {\n  float: left;\n  width: 90px;\n  height: 100%; }\n\n.styles__notifications-container--t__14JVq {\n  width: calc(100% - 40px);\n  top: 20px;\n  left: 20px; }\n  .styles__notifications-container--t__14JVq .styles__notification-wrapper__2nvVs {\n    position: relative;\n    top: 0; }\n    .styles__notifications-container--t__14JVq .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__top20px-enter__2JnAU;\n      animation-name: styles__top20px-enter__2JnAU;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--t__14JVq .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__top20px-leave__vt5Ez;\n      animation-name: styles__top20px-leave__vt5Ez;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--tc__3uD_3 {\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%); }\n  .styles__notifications-container--tc__3uD_3 .styles__notification-wrapper__2nvVs {\n    position: relative;\n    top: 0; }\n    .styles__notifications-container--tc__3uD_3 .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__top20px-enter__2JnAU;\n      animation-name: styles__top20px-enter__2JnAU;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--tc__3uD_3 .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__top20px-leave__vt5Ez;\n      animation-name: styles__top20px-leave__vt5Ez;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--tr__2uehm {\n  top: 20px;\n  right: 20px; }\n  .styles__notifications-container--tr__2uehm .styles__notification-wrapper__2nvVs {\n    position: relative;\n    right: 0; }\n    .styles__notifications-container--tr__2uehm .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__right20px-enter__3VM-N;\n      animation-name: styles__right20px-enter__3VM-N;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--tr__2uehm .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__right20px-leave__bBXWR;\n      animation-name: styles__right20px-leave__bBXWR;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--tl__sEol2 {\n  top: 20px;\n  left: 20px; }\n  .styles__notifications-container--tl__sEol2 .styles__notification-wrapper__2nvVs {\n    position: relative;\n    left: 0; }\n    .styles__notifications-container--tl__sEol2 .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__left20px-enter__2lInW;\n      animation-name: styles__left20px-enter__2lInW;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--tl__sEol2 .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__left20px-leave__CWV5f;\n      animation-name: styles__left20px-leave__CWV5f;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--b__3mM4P {\n  width: calc(100% - 40px);\n  bottom: 0;\n  left: 20px; }\n  .styles__notifications-container--b__3mM4P .styles__notification-wrapper__2nvVs {\n    position: relative;\n    bottom: 0; }\n    .styles__notifications-container--b__3mM4P .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__bottom20px-enter__11ZMc;\n      animation-name: styles__bottom20px-enter__11ZMc;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--b__3mM4P .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__bottom20px-leave__1d30C;\n      animation-name: styles__bottom20px-leave__1d30C;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--bc__pEhwB {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%); }\n  .styles__notifications-container--bc__pEhwB .styles__notification-wrapper__2nvVs {\n    position: relative;\n    bottom: 0; }\n    .styles__notifications-container--bc__pEhwB .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__bottom20px-enter__11ZMc;\n      animation-name: styles__bottom20px-enter__11ZMc;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--bc__pEhwB .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__bottom20px-leave__1d30C;\n      animation-name: styles__bottom20px-leave__1d30C;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--br__gPOIJ {\n  bottom: 0;\n  right: 20px; }\n  .styles__notifications-container--br__gPOIJ .styles__notification-wrapper__2nvVs {\n    position: relative;\n    right: 0; }\n    .styles__notifications-container--br__gPOIJ .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__right20px-enter__3VM-N;\n      animation-name: styles__right20px-enter__3VM-N;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--br__gPOIJ .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__right20px-leave__bBXWR;\n      animation-name: styles__right20px-leave__bBXWR;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n.styles__notifications-container--bl__3AXHJ {\n  bottom: 0;\n  left: 20px; }\n  .styles__notifications-container--bl__3AXHJ .styles__notification-wrapper__2nvVs {\n    position: relative;\n    left: 0; }\n    .styles__notifications-container--bl__3AXHJ .styles__notification-wrapper-enter__1hcO7 {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__left20px-enter__2lInW;\n      animation-name: styles__left20px-enter__2lInW;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    .styles__notifications-container--bl__3AXHJ .styles__notification-wrapper-leave__2j6fx {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: styles__left20px-leave__CWV5f;\n      animation-name: styles__left20px-leave__CWV5f;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n@media (max-width: 767px) {\n  .styles__notifications-container--t__14JVq {\n    width: 100%;\n    top: 0;\n    left: 0; }\n    .styles__notifications-container--t__14JVq .styles__notification-wrapper__2nvVs {\n      position: relative;\n      top: 0; }\n      .styles__notifications-container--t__14JVq .styles__notification-wrapper-enter__1hcO7 {\n        -webkit-animation-fill-mode: forwards;\n        animation-fill-mode: forwards;\n        -webkit-animation-name: styles__top0-enter__2SDaC;\n        animation-name: styles__top0-enter__2SDaC;\n        -webkit-animation-duration: .4s;\n        animation-duration: .4s; }\n      .styles__notifications-container--t__14JVq .styles__notification-wrapper-leave__2j6fx {\n        -webkit-animation-fill-mode: forwards;\n        animation-fill-mode: forwards;\n        -webkit-animation-name: styles__top0-leave__29ud-;\n        animation-name: styles__top0-leave__29ud-;\n        -webkit-animation-duration: .8s;\n        animation-duration: .8s; }\n    .styles__notifications-container--t__14JVq .styles__notification-wrapper__2nvVs {\n      margin: 0; } }\n\n.styles__notification__3jX4o {\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-height: 40px;\n  border: none;\n  -webkit-box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.3);\n  z-index: 999; }\n  .styles__notification-wrapper__2nvVs {\n    display: block;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 20px; }\n  .styles__notification-image-container__34lk8 {\n    display: table-cell;\n    box-sizing: border-box;\n    padding: 10px 0 10px 15px; }\n  .styles__notification-image__1o39K {\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 40px;\n    width: 40px;\n    height: 40px;\n    background-size: cover; }\n  .styles__notification-icon__3kKtw {\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 10px 0 10px 15px;\n    font-size: 20px !important; }\n  .styles__notification-meta__2nIlF {\n    display: table-cell;\n    vertical-align: top;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 20px; }\n  .styles__notification-close-button-container__Et8ob {\n    display: table-cell;\n    padding: 10px 15px;\n    box-sizing: border-box; }\n  .styles__notification-close-button__1rsEe {\n    font-size: 14px !important;\n    color: #524c4c;\n    cursor: pointer; }\n    .styles__notification-close-button__1rsEe:before {\n      content: \"\\F00D\"; }\n    .styles__notification-close-button__1rsEe:hover {\n      color: #6c6565; }\n  .styles__notification-buttons__3SijB {\n    display: table-cell;\n    box-sizing: border-box;\n    height: 100%;\n    vertical-align: top; }\n    .styles__notification-buttons__3SijB .styles__notification-button__32lr5 {\n      min-height: 40px;\n      box-sizing: border-box;\n      padding: 0;\n      background: none;\n      border: none;\n      border-left: 1px solid rgba(0, 0, 0, 0.09);\n      outline: none;\n      text-align: center;\n      color: #524c4c;\n      cursor: pointer; }\n      .styles__notification-buttons__3SijB .styles__notification-button-text__5AjZR {\n        display: block;\n        height: 25px;\n        width: 70px;\n        white-space: nowrap;\n        overflow: hidden;\n        margin: 0 auto;\n        text-overflow: ellipsis;\n        text-align: center;\n        font-size: 14px;\n        line-height: 25px; }\n      .styles__notification-buttons__3SijB .styles__notification-button__32lr5:hover {\n        color: #349ef3; }\n      .styles__notification-buttons__3SijB .styles__notification-button__32lr5:active {\n        color: #0e86e6; }\n  .styles__notification-title__1g7ZA {\n    margin: 0 0 10px;\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 1.428571429; }\n  .styles__notification-message__WOviS {\n    margin: 0; }\n  .styles__notification--dismissible___YzCo {\n    cursor: pointer; }\n  .styles__notification--default__1dpq4 {\n    background-color: #ffffff;\n    border-left: 2px solid #ffffff;\n    color: #524c4c; }\n    .styles__notification--default__1dpq4 .styles__notification-icon__3kKtw {\n      display: none; }\n  .styles__notification--success__2NKYP {\n    background-color: #ffffff;\n    border-left: 2px solid #4dc657;\n    color: #524c4c; }\n    .styles__notification--success__2NKYP .styles__notification-icon__3kKtw:before {\n      content: \"\\F058\";\n      color: #4dc657; }\n  .styles__notification--info__1rkAu {\n    background-color: #ffffff;\n    border-left: 2px solid #349ef3;\n    color: #524c4c; }\n    .styles__notification--info__1rkAu .styles__notification-icon__3kKtw:before {\n      content: \"\\F05A\";\n      color: #349ef3; }\n  .styles__notification--warning__3lWtD {\n    background-color: #ffffff;\n    border-left: 2px solid #f5aa0a;\n    color: #524c4c; }\n    .styles__notification--warning__3lWtD .styles__notification-icon__3kKtw:before {\n      content: \"\\F071\";\n      color: #f5aa0a; }\n  .styles__notification--error___IR5s {\n    background-color: #ffffff;\n    border-left: 2px solid #f5311d;\n    color: #524c4c; }\n    .styles__notification--error___IR5s .styles__notification-icon__3kKtw:before {\n      content: \"\\F057\";\n      color: #f5311d; }\n  .styles__notification--loading__2QmjY {\n    background-color: #ffffff;\n    border-left: 2px solid #349ef3;\n    color: #524c4c; }\n    .styles__notification--loading__2QmjY .styles__notification-icon__3kKtw {\n      -webkit-animation: styles__rotating__37Xgw 2s infinite linear;\n      animation: styles__rotating__37Xgw 2s infinite linear; }\n    .styles__notification--loading__2QmjY .styles__notification-icon__3kKtw:before {\n      content: \"\\F110\";\n      color: #349ef3; }\n", "", {"version":3,"sources":["/./lib/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;GAIG;AACH;;;;GAIG;AACH;EACE;IACE,YAAY;IACZ,WAAW,EAAE;EACf;IACE,OAAO;IACP,WAAW,EAAE,EAAE;;AAEnB;EACE;IACE,kCAAkC;IAClC,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,kBAAkB,EAAE;EACtB;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW,EAAE;EACf;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW;IACX,cAAc;IACd,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,eAAe;IACf,WAAW,EAAE;EACf;IACE,UAAU;IACV,WAAW,EAAE,EAAE;;AAEnB;EACE;IACE,kCAAkC;IAClC,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,kBAAkB,EAAE;EACtB;IACE,oCAAoC;IACpC,4BAA4B;IAC5B,WAAW,EAAE;EACf;IACE,oCAAoC;IACpC,4BAA4B;IAC5B,WAAW;IACX,cAAc;IACd,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,aAAa;IACb,WAAW,EAAE;EACf;IACE,QAAQ;IACR,WAAW,EAAE,EAAE;;AAEnB;EACE;IACE,kCAAkC;IAClC,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,kBAAkB,EAAE;EACtB;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW,EAAE;EACf;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW;IACX,cAAc;IACd,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,cAAc;IACd,WAAW,EAAE;EACf;IACE,SAAS;IACT,WAAW,EAAE,EAAE;;AAEnB;EACE;IACE,kCAAkC;IAClC,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,kBAAkB,EAAE;EACtB;IACE,oCAAoC;IACpC,4BAA4B;IAC5B,WAAW,EAAE;EACf;IACE,oCAAoC;IACpC,4BAA4B;IAC5B,WAAW;IACX,cAAc;IACd,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,YAAY;IACZ,WAAW,EAAE;EACf;IACE,OAAO;IACP,WAAW,EAAE,EAAE;;AAEnB;EACE;IACE,kCAAkC;IAClC,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,iBAAiB,EAAE;EACrB;IACE,iBAAiB;IACjB,kBAAkB,EAAE;EACtB;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW,EAAE;EACf;IACE,qCAAqC;IACrC,6BAA6B;IAC7B,WAAW;IACX,cAAc;IACd,iBAAiB,EAAE,EAAE;;AAEzB;EACE;IACE,wBAAwB;IACxB,gCAAgC;IAChC,6BAA6B,EAAE;EACjC;IACE,0BAA0B;IAC1B,kCAAkC;IAClC,+BAA+B,EAAE,EAAE;;AAEvC;EACE,4DAA4D;EAC5D,gBAAgB;EAChB,yBAAyB,EAAE;;AAE7B;EACE,gBAAgB;EAChB,eAAe,EAAE;;AAEnB;EACE,aAAa,EAAE;EACf;IACE,aAAa,EAAE;EACjB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE,eAAe;MACf,YAAY,EAAE;MACd;QACE,0CAA0C,EAAE;;AAEpD;EACE,YAAY,EAAE;;AAEhB;EACE,6BAA6B,EAAE;;AAEjC;EACE,sBAAsB,EAAE;;AAE1B;EACE,YAAY;EACZ,YAAY;EACZ,aAAa,EAAE;;AAEjB;EACE,yBAAyB;EACzB,UAAU;EACV,WAAW,EAAE;EACb;IACE,mBAAmB;IACnB,OAAO,EAAE;IACT;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,qDAAsC;MACtC,6CAA8B;MAC9B,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,qDAAsC;MACtC,6CAA8B;MAC9B,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,UAAU;EACV,4BAA4B,EAAE;EAC9B;IACE,mBAAmB;IACnB,OAAO,EAAE;IACT;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,qDAAsC;MACtC,6CAA8B;MAC9B,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,qDAAsC;MACtC,6CAA8B;MAC9B,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,YAAY,EAAE;EACd;IACE,mBAAmB;IACnB,SAAS,EAAE;IACX;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,uDAAwC;MACxC,+CAAgC;MAChC,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,uDAAwC;MACxC,+CAAgC;MAChC,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,WAAW,EAAE;EACb;IACE,mBAAmB;IACnB,QAAQ,EAAE;IACV;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,sDAAuC;MACvC,8CAA+B;MAC/B,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,sDAAuC;MACvC,8CAA+B;MAC/B,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,yBAAyB;EACzB,UAAU;EACV,WAAW,EAAE;EACb;IACE,mBAAmB;IACnB,UAAU,EAAE;IACZ;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,wDAAyC;MACzC,gDAAiC;MACjC,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,wDAAyC;MACzC,gDAAiC;MACjC,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,UAAU;EACV,4BAA4B,EAAE;EAC9B;IACE,mBAAmB;IACnB,UAAU,EAAE;IACZ;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,wDAAyC;MACzC,gDAAiC;MACjC,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,wDAAyC;MACzC,gDAAiC;MACjC,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,YAAY,EAAE;EACd;IACE,mBAAmB;IACnB,SAAS,EAAE;IACX;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,uDAAwC;MACxC,+CAAgC;MAChC,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,uDAAwC;MACxC,+CAAgC;MAChC,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE,UAAU;EACV,WAAW,EAAE;EACb;IACE,mBAAmB;IACnB,QAAQ,EAAE;IACV;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,sDAAuC;MACvC,8CAA+B;MAC/B,gCAAgC;MAChC,wBAAwB,EAAE;IAC5B;MACE,sCAAsC;MACtC,8BAA8B;MAC9B,sDAAuC;MACvC,8CAA+B;MAC/B,gCAAgC;MAChC,wBAAwB,EAAE;;AAEhC;EACE;IACE,YAAY;IACZ,OAAO;IACP,QAAQ,EAAE;IACV;MACE,mBAAmB;MACnB,OAAO,EAAE;MACT;QACE,sCAAsC;QACtC,8BAA8B;QAC9B,kDAAmC;QACnC,0CAA2B;QAC3B,gCAAgC;QAChC,wBAAwB,EAAE;MAC5B;QACE,sCAAsC;QACtC,8BAA8B;QAC9B,kDAAmC;QACnC,0CAA2B;QAC3B,gCAAgC;QAChC,wBAAwB,EAAE;IAC9B;MACE,UAAU,EAAE,EAAE;;AAEpB;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sDAAsD;EACtD,8CAA8C;EAC9C,aAAa,EAAE;EACf;IACE,eAAe;IACf,YAAY;IACZ,aAAa;IACb,oBAAoB,EAAE;EACxB;IACE,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B,EAAE;EAC9B;IACE,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,uBAAuB,EAAE;EAC3B;IACE,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,2BAA2B,EAAE;EAC/B;IACE,oBAAoB;IACpB,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB,EAAE;EACvB;IACE,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;IACE,2BAA2B;IAC3B,eAAe;IACf,gBAAgB,EAAE;IAClB;MACE,iBAAa,EAAE;IACjB;MACE,eAAe,EAAE;EACrB;IACE,oBAAoB;IACpB,uBAAuB;IACvB,aAAa;IACb,oBAAoB,EAAE;IACtB;MACE,iBAAiB;MACjB,uBAAuB;MACvB,WAAW;MACX,iBAAiB;MACjB,aAAa;MACb,2CAA2C;MAC3C,cAAc;MACd,mBAAmB;MACnB,eAAe;MACf,gBAAgB,EAAE;MAClB;QACE,eAAe;QACf,aAAa;QACb,YAAY;QACZ,oBAAoB;QACpB,iBAAiB;QACjB,eAAe;QACf,wBAAwB;QACxB,mBAAmB;QACnB,gBAAgB;QAChB,kBAAkB,EAAE;MACtB;QACE,eAAe,EAAE;MACnB;QACE,eAAe,EAAE;EACvB;IACE,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB,EAAE;EAC7B;IACE,UAAU,EAAE;EACd;IACE,gBAAgB,EAAE;EACpB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,cAAc,EAAE;EACpB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,iBAAa;MACb,eAAe,EAAE;EACrB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,iBAAa;MACb,eAAe,EAAE;EACrB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,iBAAa;MACb,eAAe,EAAE;EACrB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,iBAAa;MACb,eAAe,EAAE;EACrB;IACE,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe,EAAE;IACjB;MACE,8DAA+C;MAC/C,sDAAuC,EAAE;IAC3C;MACE,iBAAa;MACb,eAAe,EAAE","file":"styles.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * Mixin to create a keyframes for a notification\n * @param $direction (left|top|right|bottom) Translation direction\n * @param $margin-bottom Initial `margin-bottom` value\n */\n/*\n * Mixin to create an animation for a notification\n * @param $direction (left|top|right|bottom) Translation direction\n * @param $margin-bottom Initial `margin-bottom` value\n */\n@keyframes :local(top20px-enter) {\n  0% {\n    top: -360px;\n    opacity: 0; }\n  100% {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes :local(top20px-leave) {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes :local(bottom20px-enter) {\n  0% {\n    bottom: -360px;\n    opacity: 0; }\n  100% {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes :local(bottom20px-leave) {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes :local(left20px-enter) {\n  0% {\n    left: -360px;\n    opacity: 0; }\n  100% {\n    left: 0;\n    opacity: 1; } }\n\n@keyframes :local(left20px-leave) {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes :local(right20px-enter) {\n  0% {\n    right: -360px;\n    opacity: 0; }\n  100% {\n    right: 0;\n    opacity: 1; } }\n\n@keyframes :local(right20px-leave) {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 20px; }\n  40% {\n    margin-bottom: 20px;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes :local(top0-enter) {\n  0% {\n    top: -360px;\n    opacity: 0; }\n  100% {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes :local(top0-leave) {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n    opacity: 1;\n    max-height: 200px;\n    margin-bottom: 0; }\n  40% {\n    margin-bottom: 0;\n    max-height: 200px; }\n  50% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    opacity: 0;\n    max-height: 0;\n    margin-bottom: 0; } }\n\n@keyframes :local(rotating) {\n  from {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg); } }\n\n:local .notifications-system {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.428571429; }\n\n:local .notifications-container {\n  position: fixed;\n  z-index: 99999; }\n\n:local .notifications-container--tc, :local .notifications-container--tr, :local .notifications-container--tl, :local .notifications-container--bc, :local .notifications-container--br, :local .notifications-container--bl {\n  width: 360px; }\n  :local .notifications-container--tc .notification--buttons-1 .notification-button, :local .notifications-container--tr .notification--buttons-1 .notification-button, :local .notifications-container--tl .notification--buttons-1 .notification-button, :local .notifications-container--bc .notification--buttons-1 .notification-button, :local .notifications-container--br .notification--buttons-1 .notification-button, :local .notifications-container--bl .notification--buttons-1 .notification-button {\n    height: 100%; }\n  :local .notifications-container--tc .notification--buttons-2 .notification-button, :local .notifications-container--tr .notification--buttons-2 .notification-button, :local .notifications-container--tl .notification--buttons-2 .notification-button, :local .notifications-container--bc .notification--buttons-2 .notification-button, :local .notifications-container--br .notification--buttons-2 .notification-button, :local .notifications-container--bl .notification--buttons-2 .notification-button {\n    height: 50%; }\n  :local .notifications-container--tc .notification-buttons, :local .notifications-container--tr .notification-buttons, :local .notifications-container--tl .notification-buttons, :local .notifications-container--bc .notification-buttons, :local .notifications-container--br .notification-buttons, :local .notifications-container--bl .notification-buttons {\n    width: 90px; }\n    :local .notifications-container--tc .notification-buttons .notification-button, :local .notifications-container--tr .notification-buttons .notification-button, :local .notifications-container--tl .notification-buttons .notification-button, :local .notifications-container--bc .notification-buttons .notification-button, :local .notifications-container--br .notification-buttons .notification-button, :local .notifications-container--bl .notification-buttons .notification-button {\n      display: block;\n      width: 90px; }\n      :local .notifications-container--tc .notification-buttons .notification-button:nth-child(2), :local .notifications-container--tr .notification-buttons .notification-button:nth-child(2), :local .notifications-container--tl .notification-buttons .notification-button:nth-child(2), :local .notifications-container--bc .notification-buttons .notification-button:nth-child(2), :local .notifications-container--br .notification-buttons .notification-button:nth-child(2), :local .notifications-container--bl .notification-buttons .notification-button:nth-child(2) {\n        border-top: 1px solid rgba(0, 0, 0, 0.09); }\n\n:local .notifications-container--b .notification--buttons-1 .notification-buttons, :local .notifications-container--t .notification--buttons-1 .notification-buttons {\n  width: 90px; }\n\n:local .notifications-container--b .notification--buttons-2 .notification-meta, :local .notifications-container--t .notification--buttons-2 .notification-meta {\n  width: calc(100% - 90px * 2); }\n\n:local .notifications-container--b .notification--buttons-2 .notification-buttons, :local .notifications-container--t .notification--buttons-2 .notification-buttons {\n  width: calc(90px * 2); }\n\n:local .notifications-container--b .notification-buttons .notification-button, :local .notifications-container--t .notification-buttons .notification-button {\n  float: left;\n  width: 90px;\n  height: 100%; }\n\n:local .notifications-container--t {\n  width: calc(100% - 40px);\n  top: 20px;\n  left: 20px; }\n  :local .notifications-container--t .notification-wrapper {\n    position: relative;\n    top: 0; }\n    :local .notifications-container--t .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: top20px-enter;\n      animation-name: top20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--t .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: top20px-leave;\n      animation-name: top20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--tc {\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%); }\n  :local .notifications-container--tc .notification-wrapper {\n    position: relative;\n    top: 0; }\n    :local .notifications-container--tc .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: top20px-enter;\n      animation-name: top20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--tc .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: top20px-leave;\n      animation-name: top20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--tr {\n  top: 20px;\n  right: 20px; }\n  :local .notifications-container--tr .notification-wrapper {\n    position: relative;\n    right: 0; }\n    :local .notifications-container--tr .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: right20px-enter;\n      animation-name: right20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--tr .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: right20px-leave;\n      animation-name: right20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--tl {\n  top: 20px;\n  left: 20px; }\n  :local .notifications-container--tl .notification-wrapper {\n    position: relative;\n    left: 0; }\n    :local .notifications-container--tl .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: left20px-enter;\n      animation-name: left20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--tl .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: left20px-leave;\n      animation-name: left20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--b {\n  width: calc(100% - 40px);\n  bottom: 0;\n  left: 20px; }\n  :local .notifications-container--b .notification-wrapper {\n    position: relative;\n    bottom: 0; }\n    :local .notifications-container--b .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: bottom20px-enter;\n      animation-name: bottom20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--b .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: bottom20px-leave;\n      animation-name: bottom20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--bc {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%); }\n  :local .notifications-container--bc .notification-wrapper {\n    position: relative;\n    bottom: 0; }\n    :local .notifications-container--bc .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: bottom20px-enter;\n      animation-name: bottom20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--bc .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: bottom20px-leave;\n      animation-name: bottom20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--br {\n  bottom: 0;\n  right: 20px; }\n  :local .notifications-container--br .notification-wrapper {\n    position: relative;\n    right: 0; }\n    :local .notifications-container--br .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: right20px-enter;\n      animation-name: right20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--br .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: right20px-leave;\n      animation-name: right20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n:local .notifications-container--bl {\n  bottom: 0;\n  left: 20px; }\n  :local .notifications-container--bl .notification-wrapper {\n    position: relative;\n    left: 0; }\n    :local .notifications-container--bl .notification-wrapper-enter {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: left20px-enter;\n      animation-name: left20px-enter;\n      -webkit-animation-duration: .4s;\n      animation-duration: .4s; }\n    :local .notifications-container--bl .notification-wrapper-leave {\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-name: left20px-leave;\n      animation-name: left20px-leave;\n      -webkit-animation-duration: .8s;\n      animation-duration: .8s; }\n\n@media (max-width: 767px) {\n  :local .notifications-container--t {\n    width: 100%;\n    top: 0;\n    left: 0; }\n    :local .notifications-container--t .notification-wrapper {\n      position: relative;\n      top: 0; }\n      :local .notifications-container--t .notification-wrapper-enter {\n        -webkit-animation-fill-mode: forwards;\n        animation-fill-mode: forwards;\n        -webkit-animation-name: top0-enter;\n        animation-name: top0-enter;\n        -webkit-animation-duration: .4s;\n        animation-duration: .4s; }\n      :local .notifications-container--t .notification-wrapper-leave {\n        -webkit-animation-fill-mode: forwards;\n        animation-fill-mode: forwards;\n        -webkit-animation-name: top0-leave;\n        animation-name: top0-leave;\n        -webkit-animation-duration: .8s;\n        animation-duration: .8s; }\n    :local .notifications-container--t .notification-wrapper {\n      margin: 0; } }\n\n:local .notification {\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-height: 40px;\n  border: none;\n  -webkit-box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.3);\n  z-index: 999; }\n  :local .notification-wrapper {\n    display: block;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 20px; }\n  :local .notification-image-container {\n    display: table-cell;\n    box-sizing: border-box;\n    padding: 10px 0 10px 15px; }\n  :local .notification-image {\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 40px;\n    width: 40px;\n    height: 40px;\n    background-size: cover; }\n  :local .notification-icon {\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 10px 0 10px 15px;\n    font-size: 20px !important; }\n  :local .notification-meta {\n    display: table-cell;\n    vertical-align: top;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 20px; }\n  :local .notification-close-button-container {\n    display: table-cell;\n    padding: 10px 15px;\n    box-sizing: border-box; }\n  :local .notification-close-button {\n    font-size: 14px !important;\n    color: #524c4c;\n    cursor: pointer; }\n    :local .notification-close-button:before {\n      content: \"\"; }\n    :local .notification-close-button:hover {\n      color: #6c6565; }\n  :local .notification-buttons {\n    display: table-cell;\n    box-sizing: border-box;\n    height: 100%;\n    vertical-align: top; }\n    :local .notification-buttons .notification-button {\n      min-height: 40px;\n      box-sizing: border-box;\n      padding: 0;\n      background: none;\n      border: none;\n      border-left: 1px solid rgba(0, 0, 0, 0.09);\n      outline: none;\n      text-align: center;\n      color: #524c4c;\n      cursor: pointer; }\n      :local .notification-buttons .notification-button-text {\n        display: block;\n        height: 25px;\n        width: 70px;\n        white-space: nowrap;\n        overflow: hidden;\n        margin: 0 auto;\n        text-overflow: ellipsis;\n        text-align: center;\n        font-size: 14px;\n        line-height: 25px; }\n      :local .notification-buttons .notification-button:hover {\n        color: #349ef3; }\n      :local .notification-buttons .notification-button:active {\n        color: #0e86e6; }\n  :local .notification-title {\n    margin: 0 0 10px;\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 1.428571429; }\n  :local .notification-message {\n    margin: 0; }\n  :local .notification--dismissible {\n    cursor: pointer; }\n  :local .notification--default {\n    background-color: #ffffff;\n    border-left: 2px solid #ffffff;\n    color: #524c4c; }\n    :local .notification--default .notification-icon {\n      display: none; }\n  :local .notification--success {\n    background-color: #ffffff;\n    border-left: 2px solid #4dc657;\n    color: #524c4c; }\n    :local .notification--success .notification-icon:before {\n      content: \"\";\n      color: #4dc657; }\n  :local .notification--info {\n    background-color: #ffffff;\n    border-left: 2px solid #349ef3;\n    color: #524c4c; }\n    :local .notification--info .notification-icon:before {\n      content: \"\";\n      color: #349ef3; }\n  :local .notification--warning {\n    background-color: #ffffff;\n    border-left: 2px solid #f5aa0a;\n    color: #524c4c; }\n    :local .notification--warning .notification-icon:before {\n      content: \"\";\n      color: #f5aa0a; }\n  :local .notification--error {\n    background-color: #ffffff;\n    border-left: 2px solid #f5311d;\n    color: #524c4c; }\n    :local .notification--error .notification-icon:before {\n      content: \"\";\n      color: #f5311d; }\n  :local .notification--loading {\n    background-color: #ffffff;\n    border-left: 2px solid #349ef3;\n    color: #524c4c; }\n    :local .notification--loading .notification-icon {\n      -webkit-animation: rotating 2s infinite linear;\n      animation: rotating 2s infinite linear; }\n    :local .notification--loading .notification-icon:before {\n      content: \"\";\n      color: #349ef3; }\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"notifications-system": "styles__notifications-system__2pp3g",
		"notifications-container": "styles__notifications-container__3DyIs",
		"notifications-container--tc": "styles__notifications-container--tc__3uD_3",
		"notifications-container--tr": "styles__notifications-container--tr__2uehm",
		"notifications-container--tl": "styles__notifications-container--tl__sEol2",
		"notifications-container--bc": "styles__notifications-container--bc__pEhwB",
		"notifications-container--br": "styles__notifications-container--br__gPOIJ",
		"notifications-container--bl": "styles__notifications-container--bl__3AXHJ",
		"notification--buttons-1": "styles__notification--buttons-1__1vzbQ",
		"notification-button": "styles__notification-button__32lr5",
		"notification--buttons-2": "styles__notification--buttons-2__1IGYR",
		"notification-buttons": "styles__notification-buttons__3SijB",
		"notifications-container--b": "styles__notifications-container--b__3mM4P",
		"notifications-container--t": "styles__notifications-container--t__14JVq",
		"notification-meta": "styles__notification-meta__2nIlF",
		"notification-wrapper": "styles__notification-wrapper__2nvVs",
		"notification-wrapper-enter": "styles__notification-wrapper-enter__1hcO7",
		"top20px-enter": "styles__top20px-enter__2JnAU",
		"notification-wrapper-leave": "styles__notification-wrapper-leave__2j6fx",
		"top20px-leave": "styles__top20px-leave__vt5Ez",
		"right20px-enter": "styles__right20px-enter__3VM-N",
		"right20px-leave": "styles__right20px-leave__bBXWR",
		"left20px-enter": "styles__left20px-enter__2lInW",
		"left20px-leave": "styles__left20px-leave__CWV5f",
		"bottom20px-enter": "styles__bottom20px-enter__11ZMc",
		"bottom20px-leave": "styles__bottom20px-leave__1d30C",
		"top0-enter": "styles__top0-enter__2SDaC",
		"top0-leave": "styles__top0-leave__29ud-",
		"notification": "styles__notification__3jX4o",
		"notification-image-container": "styles__notification-image-container__34lk8",
		"notification-image": "styles__notification-image__1o39K",
		"notification-icon": "styles__notification-icon__3kKtw",
		"notification-close-button-container": "styles__notification-close-button-container__Et8ob",
		"notification-close-button": "styles__notification-close-button__1rsEe",
		"notification-button-text": "styles__notification-button-text__5AjZR",
		"notification-title": "styles__notification-title__1g7ZA",
		"notification-message": "styles__notification-message__WOviS",
		"notification--dismissible": "styles__notification--dismissible___YzCo",
		"notification--default": "styles__notification--default__1dpq4",
		"notification--success": "styles__notification--success__2NKYP",
		"notification--info": "styles__notification--info__1rkAu",
		"notification--warning": "styles__notification--warning__3lWtD",
		"notification--error": "styles__notification--error___IR5s",
		"notification--loading": "styles__notification--loading__2QmjY",
		"rotating": "styles__rotating__37Xgw"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;