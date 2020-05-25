/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"img {\\n  width: 20px; }\\n\\nbody {\\n  background: #2193b0;\\n  /* fallback for old browsers */\\n  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);\\n  /* Chrome 10-25, Safari 5.1-6 */\\n  background: linear-gradient(to right, #6dd5ed, #2193b0);\\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  display: flex;\\n  justify-content: center;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n.main-container {\\n  width: 70vw;\\n  transform: translateY(10%);\\n  display: grid;\\n  grid-template-rows: repeat(2, 1fr); }\\n\\n.search-container {\\n  grid-column: 1/2;\\n  margin-top: 15px;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center; }\\n\\ninput {\\n  width: 70%;\\n  height: 30px;\\n  padding-left: 8px;\\n  border: none;\\n  border-radius: 25px;\\n  font-size: 16px; }\\n\\ninput:focus {\\n  outline: none; }\\n\\n.search-img {\\n  position: relative;\\n  right: 30px;\\n  top: 5px;\\n  align-self: flex-start; }\\n\\n.city-info-container {\\n  width: 40%;\\n  height: 100px;\\n  margin: auto;\\n  text-align: center;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-top: -15px; }\\n\\n.city-info-container p {\\n  height: 10px; }\\n\\n.location {\\n  grid-column: 1/3;\\n  justify-self: start;\\n  padding-left: 10px;\\n  font-size: 13px; }\\n\\n.city {\\n  font-size: 22px; }\\n\\n.time {\\n  padding-top: 13px;\\n  font-size: 22px; }\\n\\n.secondary-container {\\n  width: 70%;\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-around;\\n  margin-top: 10px; }\\n\\n.container-a {\\n  display: flex; }\\n\\n.temperature {\\n  font-size: 35px; }\\n\\n.temperature-container p {\\n  height: 8px;\\n  text-align: center; }\\n\\n.temperature-container {\\n  position: relative;\\n  top: 20px; }\\n\\n.description {\\n  font-size: 18px; }\\n\\n.right-container div {\\n  display: flex; }\\n\\n.right-container img {\\n  align-self: center;\\n  margin-right: 5px; }\\n\\nfooter {\\n  position: absolute;\\n  right: 10px;\\n  bottom: 10px;\\n  font-size: 12px; }\\n\\n.icon {\\n  position: relative;\\n  display: inline-block;\\n  width: 12em;\\n  height: 10em;\\n  font-size: 1em;\\n  /* control icon size here */ }\\n\\n.cloud {\\n  position: absolute;\\n  z-index: 1;\\n  top: 50%;\\n  left: 50%;\\n  width: 3.6875em;\\n  height: 3.6875em;\\n  margin: -1.84375em;\\n  background: currentColor;\\n  border-radius: 50%;\\n  box-shadow: -2.1875em 0.6875em 0 -0.6875em,\\r 2.0625em 0.9375em 0 -0.9375em,\\r 0 0 0 0.375em #fff,\\r -2.1875em 0.6875em 0 -0.3125em #fff,\\r 2.0625em 0.9375em 0 -0.5625em #fff; }\\n\\n.cloud:after {\\n  content: '';\\n  position: absolute;\\n  bottom: 0;\\n  left: -0.5em;\\n  display: block;\\n  width: 4.5625em;\\n  height: 1em;\\n  background: currentColor;\\n  box-shadow: 0 0.4375em 0 -0.0625em #fff; }\\n\\n.cloud:nth-child(2) {\\n  z-index: 0;\\n  background: #fff;\\n  box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,\\r 2.0625em 0.9375em 0 -0.9375em #fff,\\r 0 0 0 0.375em #fff,\\r -2.1875em 0.6875em 0 -0.3125em #fff,\\r 2.0625em 0.9375em 0 -0.5625em #fff;\\n  opacity: 0.3;\\n  transform: scale(0.5) translate(6em, -3em);\\n  animation: cloud 4s linear infinite; }\\n\\n.cloud:nth-child(2):after {\\n  background: #fff; }\\n\\n.sun {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 2.5em;\\n  height: 2.5em;\\n  margin: -1.25em;\\n  background: currentColor;\\n  border-radius: 50%;\\n  box-shadow: 0 0 0 0.375em #fff;\\n  animation: spin 12s infinite linear; }\\n\\n.rays {\\n  position: absolute;\\n  top: -2em;\\n  left: 50%;\\n  display: block;\\n  width: 0.375em;\\n  height: 1.125em;\\n  margin-left: -0.1875em;\\n  background: #fff;\\n  border-radius: 0.25em;\\n  box-shadow: 0 5.375em #fff; }\\n\\n.rays:before,\\n.rays:after {\\n  content: '';\\n  position: absolute;\\n  top: 0em;\\n  left: 0em;\\n  display: block;\\n  width: 0.375em;\\n  height: 1.125em;\\n  transform: rotate(60deg);\\n  transform-origin: 50% 3.25em;\\n  background: #fff;\\n  border-radius: 0.25em;\\n  box-shadow: 0 5.375em #fff; }\\n\\n.rays:before {\\n  transform: rotate(120deg); }\\n\\n.cloud + .sun {\\n  margin: -2em 1em; }\\n\\n.rain,\\n.lightning,\\n.snow {\\n  position: absolute;\\n  z-index: 2;\\n  top: 50%;\\n  left: 50%;\\n  width: 3.75em;\\n  height: 3.75em;\\n  margin: 0.375em 0 0 -2em;\\n  background: currentColor; }\\n\\n.rain:after {\\n  content: '';\\n  position: absolute;\\n  z-index: 2;\\n  top: 50%;\\n  left: 50%;\\n  width: 1.125em;\\n  height: 1.125em;\\n  margin: -1em 0 0 -0.25em;\\n  background: #0cf;\\n  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;\\n  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2), -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2), -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);\\n  transform: rotate(-28deg);\\n  animation: rain 3s linear infinite; }\\n\\n.bolt {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin: -0.25em 0 0 -0.125em;\\n  color: #fff;\\n  opacity: 0.3;\\n  animation: lightning 2s linear infinite; }\\n\\n.bolt:nth-child(2) {\\n  width: 0.5em;\\n  height: 0.25em;\\n  margin: -1.75em 0 0 -1.875em;\\n  transform: translate(2.5em, 2.25em);\\n  opacity: 0.2;\\n  animation: lightning 1.5s linear infinite; }\\n\\n.bolt:before,\\n.bolt:after {\\n  content: '';\\n  position: absolute;\\n  z-index: 2;\\n  top: 50%;\\n  left: 50%;\\n  margin: -1.625em 0 0 -1.0125em;\\n  border-top: 1.25em solid transparent;\\n  border-right: 0.75em solid;\\n  border-bottom: 0.75em solid;\\n  border-left: 0.5em solid transparent;\\n  transform: skewX(-10deg); }\\n\\n.bolt:after {\\n  margin: -0.25em 0 0 -0.25em;\\n  border-top: 0.75em solid;\\n  border-right: 0.5em solid transparent;\\n  border-bottom: 1.25em solid transparent;\\n  border-left: 0.75em solid;\\n  transform: skewX(-10deg); }\\n\\n.bolt:nth-child(2):before {\\n  margin: -0.75em 0 0 -0.5em;\\n  border-top: 0.625em solid transparent;\\n  border-right: 0.375em solid;\\n  border-bottom: 0.375em solid;\\n  border-left: 0.25em solid transparent; }\\n\\n.bolt:nth-child(2):after {\\n  margin: -0.125em 0 0 -0.125em;\\n  border-top: 0.375em solid;\\n  border-right: 0.25em solid transparent;\\n  border-bottom: 0.625em solid transparent;\\n  border-left: 0.375em solid; }\\n\\n.flake:before,\\n.flake:after {\\n  content: '\\\\2744';\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin: -1.025em 0 0 -1.0125em;\\n  color: #fff;\\n  opacity: 0.2;\\n  animation: spin 8s linear infinite reverse; }\\n\\n.flake:after {\\n  margin: 0.125em 0 0 -1em;\\n  font-size: 1.5em;\\n  opacity: 0.4;\\n  animation: spin 14s linear infinite; }\\n\\n.flake:nth-child(2):before {\\n  margin: -0.5em 0 0 0.25em;\\n  font-size: 1.25em;\\n  opacity: 0.2;\\n  animation: spin 10s linear infinite; }\\n\\n.flake:nth-child(2):after {\\n  margin: 0.375em 0 0 0.125em;\\n  font-size: 2em;\\n  opacity: 0.4;\\n  animation: spin 16s linear infinite reverse; }\\n\\n/* Animations */\\n@keyframes spin {\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n@keyframes cloud {\\n  0% {\\n    opacity: 0; }\\n  50% {\\n    opacity: 0.3; }\\n  100% {\\n    opacity: 0;\\n    transform: scale(0.5) translate(-200%, -3em); } }\\n\\n@keyframes rain {\\n  0% {\\n    background: #0cf;\\n    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2), -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2), -1.375em -0.125em 0 #0cf; }\\n  25% {\\n    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2), -0.875em 1.125em 0 -0.125em #0cf, -1.375em -0.125em 0 rgba(255, 255, 255, 0.2); }\\n  50% {\\n    background: rgba(255, 255, 255, 0.3);\\n    box-shadow: 0.625em 0.875em 0 -0.125em #0cf, -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2), -1.375em -0.125em 0 rgba(255, 255, 255, 0.2); }\\n  100% {\\n    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2), -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2), -1.375em -0.125em 0 #0cf; } }\\n\\n@keyframes lightning {\\n  45% {\\n    color: #fff;\\n    background: #fff;\\n    opacity: 0.2; }\\n  50% {\\n    color: #0cf;\\n    background: #0cf;\\n    opacity: 1; }\\n  55% {\\n    color: #fff;\\n    background: #fff;\\n    opacity: 0.2; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DOM = {\n  input: document.querySelector('input'),\n  city: document.querySelector('.city'),\n  location: document.querySelector('.location')\n};\nDOM.input.addEventListener('keydown', async event => {\n  if (event.keyCode === 13) {\n    const inputCity = event.target.value;\n    const city = new City(inputCity);\n    await city.getInfo(); //UI\n\n    DOM.city.innerHTML = `${city.city}`;\n    DOM.location.innerHTML = `Latitude: ${city.latitude} Longitude: ${city.longitude}`;\n  }\n});\nconsole.log('hi');\n\nclass City {\n  constructor(city) {\n    this.city = city;\n  }\n\n  async getInfo() {\n    try {\n      let forecast = await fetch(`http://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);\n      let json = await forecast.json(); //console.log(json);\n\n      this.latitude = json.coord.lat;\n      this.longitude = json.coord.lon;\n      this.temperature = json.main.temp;\n      this.description = json.weather[0].description;\n      this.windSpeed = json.wind.speed;\n      this.pressure = json.main.pressure;\n      this.humidity = json.main.humidity;\n      this.countryCode = json.sys.country;\n      console.log(this);\n    } catch (error) {\n      console.log(error);\n      alert('Ops, something went wrong. Please try again.');\n    }\n  }\n\n}\n/*TO DO LATER\r\n*backgrond change\r\n* forecast\r\n* add option to change from calling by city to calling by other methods (EX: zip code) (check documents).*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });