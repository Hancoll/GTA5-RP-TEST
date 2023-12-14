/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/farming/planting.js":
/*!*********************************!*\
  !*** ./src/farming/planting.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plantSeed: () => (/* binding */ plantSeed)\n/* harmony export */ });\nconst PLANT_SEED_REMOTE_EVENT = \"CLIENT:SERVER::CLIENT_PLANT_SEED\";\r\n\r\nfunction plantSeed() {\r\n    mp.events.callRemote(PLANT_SEED_REMOTE_EVENT); \r\n}\n\n//# sourceURL=webpack://client/./src/farming/planting.js?");

/***/ }),

/***/ "./src/hud/hud.js":
/*!************************!*\
  !*** ./src/hud/hud.js ***!
  \************************/
/***/ (() => {

eval("mp.events.add(\"playerSpawn\", () => {\r\n    mp.browsers.new(\"package://cef/index.html\");\r\n});\n\n//# sourceURL=webpack://client/./src/hud/hud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./player/player */ \"./src/player/player.js\");\r\n__webpack_require__(/*! ./hud/hud */ \"./src/hud/hud.js\");\n\n//# sourceURL=webpack://client/./src/index.js?");

/***/ }),

/***/ "./src/player/collisions.js":
/*!**********************************!*\
  !*** ./src/player/collisions.js ***!
  \**********************************/
/***/ (() => {

eval("const ENTER_COLSHAPE_REMOTE_EVENT = \"CLIENT:SERVER::CLIENT_ENTER_COLSHAPE\";\r\nconst EXIT_COLSHAPE_REMOTE_EVENT = \"CLIENT:SERVER::CLIENT_EXIT_COLSHAPE\";\r\n\r\nmp.events.add(\"playerEnterColshape\", (player, colShape) => {\r\n    mp.events.callRemote(ENTER_COLSHAPE_REMOTE_EVENT, player, colShape); \r\n});\r\n\r\nmp.events.add(\"playerExitColshape\", (player, colShape) => {\r\n    mp.events.callRemote(EXIT_COLSHAPE_REMOTE_EVENT, player, colShape); \r\n});\n\n//# sourceURL=webpack://client/./src/player/collisions.js?");

/***/ }),

/***/ "./src/player/control.js":
/*!*******************************!*\
  !*** ./src/player/control.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _farming_planting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../farming/planting */ \"./src/farming/planting.js\");\n\r\n\r\nconst INTERACT_KEY = 0x45; // E key\r\nconst USE_ITEM_KEY = 0x47; // G key\r\nconst INTERACT_REMOTE_EVENT = \"CLIENT:SERVER::CLIENT_INTERACT\";\r\n\r\nmp.keys.bind(USE_ITEM_KEY, true, () => {\r\n    // test\r\n    (0,_farming_planting__WEBPACK_IMPORTED_MODULE_0__.plantSeed)();\r\n});\r\n\r\nmp.keys.bind(INTERACT_KEY, true, () => {\r\n    mp.events.callRemote(INTERACT_REMOTE_EVENT); \r\n});\n\n//# sourceURL=webpack://client/./src/player/control.js?");

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./control */ \"./src/player/control.js\");\r\n__webpack_require__(/*! ./collisions */ \"./src/player/collisions.js\");\n\n//# sourceURL=webpack://client/./src/player/player.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;