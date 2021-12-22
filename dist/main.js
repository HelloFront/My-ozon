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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_renderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderData */ \"./src/modules/renderData.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\n\n\n\n\n\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_2__.filterSum)()\n;(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cart)()\n;(0,_modules_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_2__.filterCategory)()\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/addBacket.js":
/*!**********************************!*\
  !*** ./src/modules/addBacket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\n\n\nconst addBacket = () => {\n    const allBtn = document.querySelectorAll('#addBacketBtn');\n    let arrItems = [];\n\n    allBtn.forEach(item => {\n        item.addEventListener('click', (e) => {\n            let value = +e.target.offsetParent.id;\n\n            (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => {\n                data.forEach(item => {\n                    if(item.id === value) {\n                       arrItems.push(item)\n                    }\n                });\n                (0,_cart__WEBPACK_IMPORTED_MODULE_0__.cart)(arrItems); \n            })\n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addBacket);\n\n//# sourceURL=webpack://ozon/./src/modules/addBacket.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart),\n/* harmony export */   \"openCart\": () => (/* binding */ openCart),\n/* harmony export */   \"closeCart\": () => (/* binding */ closeCart)\n/* harmony export */ });\n/* harmony import */ var _deleteCartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCartItem */ \"./src/modules/deleteCartItem.js\");\n/* harmony import */ var _countSum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countSum */ \"./src/modules/countSum.js\");\n\n\n\nconst cart = (item = undefined) => {\n    const cartBtn = document.getElementById('cart');\n    const cartCloseBtn = document.querySelector('.cart-close');\n    const cartEmpty = document.querySelector('#cart-empty');\n    const counterItem = document.querySelector('.counter');\n\n    if(Array.isArray(item)) counterItem.innerText = item.length;\n    if(counterItem.innerText === '0') cartEmpty.innerHTML = '<p>Вы еще не добавили товаров</p>';\n\n    cartBtn.addEventListener('click', () => openCart(item));\n    cartCloseBtn.addEventListener('click', closeCart);\n}\nconst openCart = (item) => {\n    const cartModal = document.querySelector('.cart');\n    const cartEmpty = document.querySelector('#cart-empty');\n\n    cartModal.style.display = 'flex';\n\n    if(item) {\n        if(item.length !== 0) cartEmpty.innerHTML = '';\n\n        item.forEach(item => {\n            cartEmpty.insertAdjacentHTML('beforeend', `<div class=\"card\" id=\"${item.id}\">\n            <div class=\"card-img-wrapper\">\n                <span class=\"card-img-top\"\n                    style=\"background-image: url('${item.img}')\"></span>\n            </div>\n            <div class=\"card-body justify-content-between\">\n                <div class=\"card-price\">${item.price} ₽</div>\n                <h5 class=\"card-title\">${item.title}</h5>\n                <button class=\"btn btn-remove-item\">Удалить</button>\n            </div>\n        </div>`)\n        })\n\n        ;(0,_countSum__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item);\n        (0,_deleteCartItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n    }\n}\nconst closeCart = () => {\n    const cartModal = document.querySelector('.cart');\n    cartModal.style.display = '';\n}\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst catalog = () => {\n    let isOpen = false;\n\n    document.querySelector('.catalog-button > button').addEventListener('click', () => {\n        isOpen = !isOpen;\n\n        if(isOpen) {\n            document.querySelector('.catalog').style.display = 'block'\n        } else document.querySelector('.catalog').style.display = 'none'\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/countSum.js":
/*!*********************************!*\
  !*** ./src/modules/countSum.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countSum = (arr) => {\n    const total = document.querySelector('.cart-total span');\n    \n    let sum = arr.reduce((acc, item) => {\n        return acc + +item.price;\n    }, 0)\n\n    total.innerText = sum;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countSum);\n\n//# sourceURL=webpack://ozon/./src/modules/countSum.js?");

/***/ }),

/***/ "./src/modules/deleteCartItem.js":
/*!***************************************!*\
  !*** ./src/modules/deleteCartItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _countSum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countSum */ \"./src/modules/countSum.js\");\n\n\n\nconst deleteItem = (arr) => {\n    const delBtn = document.querySelectorAll('.btn-remove-item');\n\n    delBtn.forEach(item => item.addEventListener('click', (e) => {\n        arr.splice(arr.indexOf(+e.target.offsetParent.id), 1);\n        e.target.offsetParent.remove();\n\n        (0,_cart__WEBPACK_IMPORTED_MODULE_0__.cart)(arr);\n        (0,_countSum__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n    }))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);\n\n//# sourceURL=webpack://ozon/./src/modules/deleteCartItem.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterSum\": () => (/* binding */ filterSum),\n/* harmony export */   \"filterCategory\": () => (/* binding */ filterCategory)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderData */ \"./src/modules/renderData.js\");\n\n\n\nconst filterSum = () => {\n    const form = document.forms[0]\n    \n    form.addEventListener('input', () => {\n        let min = form.min.value;\n        let max = form.max.value;\n        let arr = [];\n\n        if(!max) max = 100000;\n\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n            data.forEach(item => {\n                if(item.price > min && item.price < max) arr.push(item)\n            });\n            (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr)\n        })\n    })\n}\n\nconst filterCategory = () => {\n    const allItem = document.querySelectorAll('.catalog-list li');\n\n\n    allItem.forEach(item => item.addEventListener('click', (e) => {\n\n        let arr = [];\n        let value = e.target.innerText;\n\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n            data.forEach(item => {\n                if(value === item.category) arr.push(item)\n            });\n\n            (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n        })\n    }));\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n    return fetch('https://new-project-2cccd-default-rtdb.europe-west1.firebasedatabase.app/goods.json')\n        .then(res => res.json())\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/renderData.js":
/*!***********************************!*\
  !*** ./src/modules/renderData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addBacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBacket */ \"./src/modules/addBacket.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _saleFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saleFilter */ \"./src/modules/saleFilter.js\");\n\n\n\n\nconst renderData = (arr) => {\n    const goods = document.querySelector('.goods')\n    goods.innerHTML = '';\n\n    if(!arr) {\n        (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => {\n            showContent(data)\n        })\n    } else showContent(arr);\n\n    function showContent (arr) {\n        arr.forEach(item => {\n            goods.insertAdjacentHTML('beforeend' , `\n                    <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                    <div class=\"card\" id=\"${item.id}\">\n                    ${item.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n                        <div class=\"card-img-wrapper\">\n                            <span class=\"card-img-top\"\n                                style=\"background-image: url('${item.img}')\"></span>\n                        </div>\n                        <div class=\"card-body justify-content-between\">\n                            <div class=\"card-price\">${item.price} ₽</div>\n                            <h5 class=\"card-title\">${item.title}</h5>\n                            <button class=\"btn btn-primary\" id=\"addBacketBtn\">В корзину</button>\n                        </div>\n                    </div>\n                </div>`)\n        });\n        (0,_addBacket__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_saleFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);\n\n//# sourceURL=webpack://ozon/./src/modules/renderData.js?");

/***/ }),

/***/ "./src/modules/saleFilter.js":
/*!***********************************!*\
  !*** ./src/modules/saleFilter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderData */ \"./src/modules/renderData.js\");\n\n\n\nconst saleFilter = () => {\n    let active = false;\n\n    const allItems = document.querySelectorAll('.card');\n\n    document.querySelector('.filter-check_checkmark').addEventListener('click', (e) => {\n        e.target.classList.toggle('checked');\n\n        active = !active;\n        if(active) {\n            let array = []\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(json => {\n                allItems.forEach(item => {\n                    json.forEach(elem => {\n                        if(+item.id === elem.id && elem.sale) array.push(elem);\n                    })\n                })\n                ;(0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array)\n            })\n        } \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saleFilter);\n\n//# sourceURL=webpack://ozon/./src/modules/saleFilter.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderData */ \"./src/modules/renderData.js\");\n\n\n\n\nconst search = () => {\n    const searchInput = document.querySelector('.search-wrapper_input');\n\n    searchInput.addEventListener('input', (e) => {\n        let value = e.target.value;\n        let arr = [];\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n            data.forEach(item => {\n               if(item.title.toLowerCase().includes(value.toLowerCase())) arr.push(item);\n            });\n            (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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