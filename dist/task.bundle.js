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

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(task) {\n  let isSelected = false;\n  const li = document.createElement('li');\n  const itemTaskElement = document.createElement('div');\n  const checkBox = document.createElement('input');\n  const checkBoxContainer = document.createElement('div');\n  checkBoxContainer.classList.add('checkbox-container');\n  const label = document.createElement('label');\n  const iconMenu = document.createElement('div');\n  const iconDelete = document.createElement('div');\n  iconMenu.classList.add('icon-menu-container');\n  itemTaskElement.classList.add('item-element');\n  iconMenu.innerHTML = '<i class=\"fas fa-ellipsis-v\"></i>';\n  iconDelete.innerHTML = '<i class=\"fas fa-trash-alt\"></i>';\n  checkBox.type = 'checkbox';\n  checkBox.id = `check${task.index}`;\n  label.htmlFor = `check${task.index}`;\n  label.innerText = task.description;\n\n  label.addEventListener('click', () => {\n    isSelected = !isSelected;\n    if (isSelected === true) {\n      label.style.textDecoration = 'line-through';\n    } else {\n      label.style.textDecoration = 'none';\n    }\n  });\n\n  checkBox.addEventListener('click', () => {\n    if (checkBox.checked) {\n      label.style.textDecoration = 'line-through';\n    } else {\n      label.style.textDecoration = 'none';\n    }\n  });\n\n  checkBoxContainer.append(checkBox, label);\n  itemTaskElement.append(checkBoxContainer, iconMenu);\n  li.appendChild(itemTaskElement);\n  return li;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/task.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;