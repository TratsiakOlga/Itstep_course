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

/***/ "./src/js/game.ts"
/*!************************!*\
  !*** ./src/js/game.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function () {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n  return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n        case 7:\n          op = _.ops.pop();\n          _.trys.pop();\n          continue;\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n            _.ops.push(op);\n            break;\n          }\n          if (t[2]) _.ops.pop();\n          _.trys.pop();\n          continue;\n      }\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nvar state = JSON.parse(window.localStorage.getItem('state'));\nif (!state) {\n  state = {\n    topicIndex: null,\n    wordIndex: null\n  };\n}\nvar currendWord = null;\nvar wordLetters = []; // Можно так было писать вместа array: string[]\nvar errorScore = 0;\nvar successScore = 0;\nvar alphabet = 'абвгдеёжзиклмнопрстуфхцчшщьъыэюя';\nvar topics = [\"Города\", \"Транспорт\", \"Спорт\"];\nvar words = {\n  \"Города\": [\"минск\", \"москва\", \"мариж\", \"рим\"],\n  \"Транспорт\": [\"автомобиль\", \"самолет\", \"телега\", \"трамвай\"],\n  \"Спорт\": [\"футбол\", \"шахматы\", \"керлинг\", \"теннис\"]\n};\nvar gameElements = {\n  topic: document.getElementById(\"game-topic\"),\n  word: document.querySelector(\".word\"),\n  letters: document.querySelector(\".letters\"),\n  hungman: [document.getElementById(\"kran\"), document.getElementById(\"head\"), document.getElementById(\"body\"), document.getElementById(\"left-hand\"), document.getElementById(\"right-hand\"), document.getElementById(\"left-leg\"), document.getElementById(\"right-leg\")]\n};\nfunction init() {\n  var topicIndex = state.topicIndex !== null ? state.topicIndex : rand(0, topics.length - 1);\n  var wordsSet = words[topics[topicIndex]];\n  var wordIndex = state.wordIndex !== null ? state.wordIndex : rand(0, wordsSet.length - 1);\n  currendWord = wordsSet[wordIndex];\n  gameElements.topic.innerText = topics[topicIndex];\n  for (var i = 0; i < currendWord.length; i++) {\n    var span = document.createElement(\"span\");\n    span.classList.add(\"word-letter\");\n    gameElements.word.append(span);\n    var wordLetter = {\n      letter: currendWord[i],\n      element: span\n    };\n    wordLetters.push(wordLetter);\n  }\n  var _loop_1 = function (i) {\n    var button = document.createElement(\"button\");\n    button.classList.add(\"letter\");\n    button.innerText = alphabet[i];\n    button.onclick = function () {\n      checkLetter(alphabet[i]);\n      button.disabled = true; // либо можно отключить обработчик событий:  button.onclick = null;\n    };\n    gameElements.letters.append(button);\n  };\n  for (var i = 0; i < alphabet.length; i++) {\n    _loop_1(i);\n  }\n}\nfunction showHungmanPartGenerate() {\n  var i;\n  return __generator(this, function (_a) {\n    switch (_a.label) {\n      case 0:\n        i = 0;\n        _a.label = 1;\n      case 1:\n        if (!(i < gameElements.hungman.length)) return [3 /*break*/, 4];\n        gameElements.hungman[i].style.display = 'block';\n        return [4 /*yield*/];\n      case 2:\n        _a.sent();\n        _a.label = 3;\n      case 3:\n        i++;\n        return [3 /*break*/, 1];\n      case 4:\n        return [2 /*return*/];\n    }\n  });\n}\nvar showHungmanPart = showHungmanPartGenerate();\nfunction checkLetter(letter) {\n  //console.log(letter); - проверяем отражается ли в консоли буква, которую мы нажимаем\n  var pos = 0;\n  var indexes = [];\n  while (true) {\n    var foundPos = currendWord.indexOf(letter, pos);\n    if (foundPos == -1) {\n      break;\n    }\n    indexes.push(foundPos);\n    pos = foundPos + 1;\n  }\n  if (indexes.length > 0) {\n    for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {\n      var index = indexes_1[_i];\n      wordLetters[index].element.innerText = wordLetters[index].letter;\n      successScore++;\n    }\n    if (successScore == currendWord.length) {\n      gameOver('Вы выиграли!!!');\n    }\n  } else {\n    showHungmanPart.next();\n    errorScore++;\n    if (errorScore >= gameElements.hungman.length) {\n      gameOver('Вы проиграли!!!');\n    }\n  }\n}\nfunction gameOver(message) {\n  var gameOver = document.querySelector(\".game-over\");\n  gameOver.innerText = message;\n  gameOver.classList.add(\"active\");\n  setTimeout(function () {\n    window.location.reload();\n  }, 3000);\n}\nfunction rand(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\ninit();\n\n//# sourceURL=webpack://test-typescript/./src/js/game.ts?\n}");

/***/ },

/***/ "./src/scss/index.scss"
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-typescript/./src/scss/index.scss?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/game.ts");
/******/ 	
/******/ })()
;