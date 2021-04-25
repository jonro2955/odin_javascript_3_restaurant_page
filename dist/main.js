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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadAbout(){\n  const contentDiv = document.getElementById(\"content\");\n\n  const about = document.createElement(\"div\");\n  const imgMain = document.createElement(\"img\");\n  const aboutText = document.createElement(\"div\");\n\n  imgMain.setAttribute(\"src\", \"/images/kebab.jpg\");\n  imgMain.setAttribute(\"alt\", \"Main Image\");\n  imgMain.setAttribute(\"id\", \"aboutImage\");\n  aboutText.setAttribute(\"id\", \"aboutText\");\n  aboutText.textContent = \"A bold take on the much-loved dish\";\n\n  about.append(imgMain, aboutText);\n  contentDiv.append(about);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact(){\n  const contentDiv = document.getElementById(\"content\");\n\n  const ContactDiv = document.createElement(\"div\");\n\n  ContactDiv.setAttribute(\"id\", \"ContactDiv\");\n\n  ContactDiv.textContent = \"Contact\";\n\n  contentDiv.append(ContactDiv);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHeader(){\n  const contentDiv = document.getElementById(\"content\");\n\n  const headerNav = document.createElement(\"header\");\n  const divLogo = document.createElement(\"div\");\n  const h1Name = document.createElement(\"h1\");\n  const h3Motto = document.createElement(\"h3\");\n  const divAboutTab = document.createElement(\"div\");\n  const divMenuTab = document.createElement(\"div\");\n  const divOrderTab = document.createElement(\"div\")\n  const divContactTab = document.createElement(\"div\");\n\n  h1Name.textContent = \"Berlin Doner\";\n  h3Motto.textContent = \"The Art of Kebab\";\n  divAboutTab.textContent = \"About\";\n  divMenuTab.textContent = \"Menu\";\n  divOrderTab.textContent = \"Order\";\n  divContactTab.textContent = \"Contact\";\n\n  h1Name.setAttribute(\"id\", \"h1Name\")\n  divLogo.setAttribute(\"id\", \"divLogo\");\n  divAboutTab.classList.add(\"tab\");\n  divAboutTab.classList.add(\"selectedTab\");\n  divOrderTab.classList.add(\"tab\");\n  divMenuTab.classList.add(\"tab\");\n  divContactTab.classList.add(\"tab\");\n  divAboutTab.setAttribute(\"id\", \"divAboutTab\");\n  divMenuTab.setAttribute(\"id\", \"divMenuTab\");\n  divOrderTab.setAttribute(\"id\", \"divOrderTab\");\n  divContactTab.setAttribute(\"id\", \"divContactTab\");\n\n\n  divLogo.append(h1Name,h3Motto);\n  headerNav.append(divLogo, divAboutTab, divMenuTab, divOrderTab, divContactTab);\n  contentDiv.append(headerNav);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.js */ \"./src/order.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/**\n * terminal script to compile to dist/main.js:\n * npx webpack --mode development \n */\n\n\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_about_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nconst content = document.querySelector(\"#content\");\nconst tab1About = document.querySelector(\"#divAboutTab\");\nconst tab2Menu = document.querySelector(\"#divMenuTab\");\nconst tab3Order = document.querySelector(\"#divOrderTab\");\nconst tab4Contact = document.querySelector(\"#divContactTab\");\n\ntab1About.classList.add(\"selectedTab\");\n\ntab1About.addEventListener(\"click\", () => {\n  tab1About.classList.add(\"selectedTab\");\n  tab2Menu.classList.remove(\"selectedTab\");\n  tab3Order.classList.remove(\"selectedTab\");\n  tab4Contact.classList.remove(\"selectedTab\");\n  content.removeChild(content.lastChild);\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\n\ntab2Menu.addEventListener(\"click\", () => {\n  tab1About.classList.remove(\"selectedTab\");\n  tab2Menu.classList.add(\"selectedTab\");\n  tab3Order.classList.remove(\"selectedTab\");\n  tab4Contact.classList.remove(\"selectedTab\");\n  content.removeChild(content.lastChild);\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\ntab3Order.addEventListener(\"click\", () => {\n  tab1About.classList.remove(\"selectedTab\");\n  tab2Menu.classList.remove(\"selectedTab\");\n  tab3Order.classList.add(\"selectedTab\");\n  tab4Contact.classList.remove(\"selectedTab\");\n  content.removeChild(content.lastChild);\n  (0,_order_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n});\n\ntab4Contact.addEventListener(\"click\", () => {\n  tab1About.classList.remove(\"selectedTab\");\n  tab2Menu.classList.remove(\"selectedTab\");\n  tab3Order.classList.remove(\"selectedTab\");\n  tab4Contact.classList.add(\"selectedTab\");\n  content.removeChild(content.lastChild);\n  (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n});\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu(){\n  const contentDiv = document.getElementById(\"content\");\n\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"centeredContent\");\n\n  const imgKebab = document.createElement(\"img\");\n  const imgClassic = document.createElement(\"img\");\n  const imgSandwich = document.createElement(\"img\");\n\n  imgKebab.setAttribute(\"src\", \"/images/kebab.jpg\");\n  imgClassic.setAttribute(\"src\", \"/images/classic.jpg\");\n  imgSandwich.setAttribute(\"src\", \"/images/sandwich.jpg\");\n  imgKebab.setAttribute(\"alt\", \"Kebab\");\n  imgClassic.setAttribute(\"alt\", \"Classic\");\n  imgSandwich.setAttribute(\"alt\", \"Sandwich\");\n\n  imgKebab.classList.add(\"menuImage\");\n  imgClassic.classList.add(\"menuImage\");\n  imgSandwich.classList.add(\"menuImage\");\n\n  const labelKebab = document.createElement(\"div\");\n  const labelClassic = document.createElement(\"div\");\n  const labelSandwich = document.createElement(\"div\");\n\n  labelKebab.textContent = \"Kebab\";\n  labelClassic.textContent = \"Classic\";\n  labelSandwich.textContent = \"Sandwich\";\n\n  labelKebab.classList.add(\"menuLabel\");\n  labelClassic.classList.add(\"menuLabel\");\n  labelSandwich.classList.add(\"menuLabel\");\n\n  menu.append(labelKebab, imgKebab, labelClassic, imgClassic, labelSandwich, imgSandwich);\n  contentDiv.append(menu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadOrder(){\n  const contentDiv = document.getElementById(\"content\");\n\n  const orderLinksDiv = document.createElement(\"div\");\n  const ueLink = document.createElement(\"a\");\n  const ddLink = document.createElement(\"a\");\n  const ueImg = document.createElement(\"img\");\n  const ddImg = document.createElement(\"img\");\n\n  orderLinksDiv.setAttribute(\"id\", \"orderLinksDiv\");\n  ueLink.setAttribute(\"href\", \"www.ubereats.com/\");\n  ddLink.setAttribute(\"href\", \"www.doorddash.com/\");\n  ueLink.setAttribute(\"target\", \"_blank\");\n  ddLink.setAttribute(\"target\", \"_blank\");\n\n\n  ueImg.setAttribute(\"src\", \"/images/ue.jpg\");\n  ddImg.setAttribute(\"src\", \"/images/dd.jpg\");\n  ueImg.setAttribute(\"alt\", \"UberEats\");\n  ddImg.setAttribute(\"alt\", \"Door Dash\");\n  ueImg.setAttribute(\"class\", \"orderLink\");\n  ddImg.setAttribute(\"class\", \"orderLink\");\n\n  ueLink.append(ueImg);\n  ddLink.append(ddImg);\n  orderLinksDiv.append(ueLink, ddLink);\n  contentDiv.append(orderLinksDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadOrder);\n\n//# sourceURL=webpack://odin_javascript_3_restaurant_page/./src/order.js?");

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