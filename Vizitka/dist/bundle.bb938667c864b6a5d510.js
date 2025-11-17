/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Element{\r\n    constructor(elementName){\r\n        this.name = elementName;\r\n        this.id = '';\r\n        this.classes = [];\r\n        this.childrens = [];\r\n        this.css = [];\r\n    }\r\n\r\n    setId(id){\r\n        this.id = id;\r\n    }\r\n\r\n    addClasses(...classes){\r\n        //при помощи оператора расширения (Способ1):\r\n        this.classes = [...this.classes, ...classes];\r\n        /*c помощью цикла (способ номер 2)\r\n        for(let c of classes){\r\n            this.classes.push(c);\r\n        }*/\r\n    }\r\n    \r\n    removeClasses(...classes){\r\n        for(let c of classes){\r\n            let index = this.classes.indexOf(c);\r\n\r\n            if(index != -1){\r\n                this.classes.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n    \r\n    render(parantElement){\r\n        let el = document.createElement(this.name);\r\n        el.id = this.id;\r\n\r\n        for (let c of this.classes){\r\n            el.classList.add(c);\r\n        }\r\n        \r\n        parantElement.append(el); \r\n    }\r\n        //console.dir(el) - проверяем установился ли метод добавления свойства id;\r\n\r\n        \r\n        //Можно написать и одной строчкой: parantElement.append(document.createElement(this.name))\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\r\n\n\n//# sourceURL=webpack://vizitka/./src/js/element.js?\n}");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/js/element.js\");\n\r\n\r\nconst el = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ('div');\r\n\r\nel.setId('block');\r\n\r\nel.addClasses(\"border\", \"flex\");\r\nel.removeClasses(\"flex\");\r\nel.removeClasses(\"flex125\"); // такой элемент не находит\r\n\r\nel.render(document.body);\r\n\r\n/*function summ(...params){\r\n    let result = 0;\r\n\r\n    for(let param of params){\r\n        result += param;\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\nconsole.log(summ(2,3));\r\nconsole.log(summ(2,3,6));*/\r\nconsole.log(el);\n\n//# sourceURL=webpack://vizitka/./src/js/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;