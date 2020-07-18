module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! next/head */ \"next/head\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar __jsx = _react.default.createElement;\n\nconst Head = ({\n  title,\n  description\n}) => __jsx(_head.default, null, __jsx(\"meta\", {\n  charSet: \"UTF-8\"\n}), __jsx(\"title\", null, title), __jsx(\"meta\", {\n  name: \"description\",\n  content: description\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n}));\n\nHead.propTypes = {\n  title: _propTypes.default.string,\n  description: _propTypes.default.string\n};\nHead.defaultProps = {\n  title: 'e-menu',\n  description: 'E-Menu app'\n};\nvar _default = Head;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWQuanM/YjU3NyJdLCJuYW1lcyI6WyJIZWFkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUNYLE1BQUMsYUFBRCxRQUNFO0FBQU0sU0FBTyxFQUFDO0FBQWQsRUFERixFQUVFLHFCQUFRRCxLQUFSLENBRkYsRUFHRTtBQUFNLE1BQUksRUFBQyxhQUFYO0FBQXlCLFNBQU8sRUFBR0M7QUFBbkMsRUFIRixFQUlFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDO0FBQTlCLEVBSkYsQ0FERjs7QUFTQUYsSUFBSSxDQUFDRyxTQUFMLEdBQWlCO0FBQ2ZGLE9BQUssRUFBRUcsbUJBQVVDLE1BREY7QUFFZkgsYUFBVyxFQUFFRSxtQkFBVUM7QUFGUixDQUFqQjtBQUtBTCxJQUFJLENBQUNNLFlBQUwsR0FBb0I7QUFDbEJMLE9BQUssRUFBRSxRQURXO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFwQjtlQUtlRixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEhlYWQgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICA8TmV4dEhlYWQ+XG4gICAgPG1ldGEgY2hhclNldD0nVVRGLTgnLz5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9eyBkZXNjcmlwdGlvbiB9Lz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm8nLz5cbiAgPC9OZXh0SGVhZD5cbik7XG5cbkhlYWQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkhlYWQuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ2UtbWVudScsXG4gIGRlc2NyaXB0aW9uOiAnRS1NZW51IGFwcCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/head.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.IndexPage = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../components/head */ \"./components/head.js\"));\n\nvar _gasketEmblem = _interopRequireDefault(__webpack_require__(/*! @gasket/assets/react/gasket-emblem */ \"@gasket/assets/react/gasket-emblem\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar __jsx = _react.default.createElement;\nconst pageStyle = {\n  textAlign: 'center'\n};\nconst logoStyle = {\n  width: '250px',\n  height: '250px'\n};\n\nconst IndexPage = () => __jsx(\"div\", {\n  style: pageStyle\n}, __jsx(_head.default, {\n  title: \"Home\"\n}), __jsx(_gasketEmblem.default, {\n  style: logoStyle\n}), __jsx(\"h1\", null, \"Welcome to Gasket!\"), __jsx(\"p\", null, \"To get started, edit \", __jsx(\"code\", null, \"pages/index.js\"), \" and save to reload.\"), __jsx(\"p\", null, __jsx(\"a\", {\n  href: \"https://gasket.dev\"\n}, \"Learn Gasket\")));\n\nexports.IndexPage = IndexPage;\nvar _default = IndexPage;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBhZ2VTdHlsZSIsInRleHRBbGlnbiIsImxvZ29TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7O0FBRUEsTUFBTUEsU0FBUyxHQUFHO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxRQUFNLEVBQUU7QUFBMUIsQ0FBbEI7O0FBRU8sTUFBTUMsU0FBUyxHQUFHLE1BQ3ZCO0FBQUssT0FBSyxFQUFHTDtBQUFiLEdBQ0UsTUFBQyxhQUFEO0FBQU0sT0FBSyxFQUFDO0FBQVosRUFERixFQUVFLE1BQUMscUJBQUQ7QUFBYyxPQUFLLEVBQUdFO0FBQXRCLEVBRkYsRUFHRSx1Q0FIRixFQUlFLDBDQUF3QixxQ0FBeEIseUJBSkYsRUFLRSxpQkFBRztBQUFHLE1BQUksRUFBQztBQUFSLGtCQUFILENBTEYsQ0FESzs7O2VBVVFHLFMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCBHYXNrZXRFbWJsZW0gZnJvbSAnQGdhc2tldC9hc3NldHMvcmVhY3QvZ2Fza2V0LWVtYmxlbSc7XG5cbmNvbnN0IHBhZ2VTdHlsZSA9IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9O1xuY29uc3QgbG9nb1N0eWxlID0geyB3aWR0aDogJzI1MHB4JywgaGVpZ2h0OiAnMjUwcHgnIH07XG5cbmV4cG9ydCBjb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9eyBwYWdlU3R5bGUgfT5cbiAgICA8SGVhZCB0aXRsZT0nSG9tZScvPlxuICAgIDxHYXNrZXRFbWJsZW0gc3R5bGU9eyBsb2dvU3R5bGUgfS8+XG4gICAgPGgxPldlbGNvbWUgdG8gR2Fza2V0ITwvaDE+XG4gICAgPHA+VG8gZ2V0IHN0YXJ0ZWQsIGVkaXQgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+IGFuZCBzYXZlIHRvIHJlbG9hZC48L3A+XG4gICAgPHA+PGEgaHJlZj0naHR0cHM6Ly9nYXNrZXQuZGV2Jz5MZWFybiBHYXNrZXQ8L2E+PC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/javid/Documents/e-Menu API & React /e-menu/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@gasket/assets/react/gasket-emblem":
/*!*****************************************************!*\
  !*** external "@gasket/assets/react/gasket-emblem" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@gasket/assets/react/gasket-emblem\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Fza2V0L2Fzc2V0cy9yZWFjdC9nYXNrZXQtZW1ibGVtXCI/Njc5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZ2Fza2V0L2Fzc2V0cy9yZWFjdC9nYXNrZXQtZW1ibGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdhc2tldC9hc3NldHMvcmVhY3QvZ2Fza2V0LWVtYmxlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@gasket/assets/react/gasket-emblem\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });