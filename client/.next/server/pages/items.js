/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/items";
exports.ids = ["pages/items"];
exports.modules = {

/***/ "./components/Main/components/Item/index.jsx":
/*!***************************************************!*\
  !*** ./components/Main/components/Item/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style */ \"./components/Main/style.jsx\");\n/* harmony import */ var _ItemPrice_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ItemPrice/index */ \"./components/Main/components/ItemPrice/index.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/meli-challenge/client/components/Main/components/Item/index.jsx\";\n\n\n\n\n\n\nconst Item = ({\n  item\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: `/items/${item.id}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          src: item.picture,\n          alt: item.title,\n          width: 180,\n          height: 180,\n          \"data-testid\": \"item-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemInfo, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ItemPrice_index__WEBPACK_IMPORTED_MODULE_4__.default, {\n        priceInfo: item.price,\n        showDecimals: false\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), item.free_shipping ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/ic_shipping.png\",\n        alt: \"Free shipping\",\n        width: \"18\",\n        height: \"18\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 31\n      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: `/items/${item.id}`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemTitle, {\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemCity, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: item.address.city_name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01haW4vY29tcG9uZW50cy9JdGVtL2luZGV4LmpzeD8xNjU0Il0sIm5hbWVzIjpbIkl0ZW0iLCJpdGVtIiwiaWQiLCJwaWN0dXJlIiwidGl0bGUiLCJwcmljZSIsImZyZWVfc2hpcHBpbmciLCJhZGRyZXNzIiwiY2l0eV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUN6QixzQkFDRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ0MsRUFBRyxFQUE5QjtBQUFBLDZCQUNFO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUVELElBQUksQ0FBQ0UsT0FEWjtBQUVFLGFBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUZaO0FBR0UsZUFBSyxFQUFFLEdBSFQ7QUFJRSxnQkFBTSxFQUFFLEdBSlY7QUFLRSx5QkFBWTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLDRDQUFEO0FBQUEsOEJBQ0UsOERBQUMscURBQUQ7QUFBVyxpQkFBUyxFQUFFSCxJQUFJLENBQUNJLEtBQTNCO0FBQWtDLG9CQUFZLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHSixJQUFJLENBQUNLLGFBQUwsZ0JBQXFCO0FBQUssV0FBRyxFQUFDLGtCQUFUO0FBQTRCLFdBQUcsRUFBQyxlQUFoQztBQUFnRCxhQUFLLEVBQUMsSUFBdEQ7QUFBMkQsY0FBTSxFQUFDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCLEdBQWlHLElBRnBHLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFVBQVNMLElBQUksQ0FBQ0MsRUFBRyxFQUE5QjtBQUFBLCtCQUNFLDhEQUFDLDZDQUFEO0FBQUEsb0JBQVlELElBQUksQ0FBQ0c7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBb0JFLDhEQUFDLDRDQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0gsSUFBSSxDQUFDTSxPQUFMLENBQWFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBCRCxDQTNCRDs7QUE2QkEsK0RBQWVSLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4vY29tcG9uZW50cy9JdGVtL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJdGVtV3JhcHBlciwgSXRlbUluZm8sIEl0ZW1DaXR5LCBJdGVtVGl0bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVcIjtcbmltcG9ydCBJdGVtUHJpY2UgZnJvbSBcIi4uL0l0ZW1QcmljZS9pbmRleFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEl0ZW0gPSAoeyBpdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbVdyYXBwZXI+XG4gICAgICA8TGluayBocmVmPXtgL2l0ZW1zLyR7aXRlbS5pZH1gfSA+XG4gICAgICAgIDxhID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17aXRlbS5waWN0dXJlfVxuICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICAgIGhlaWdodD17MTgwfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJpdGVtLWltYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8SXRlbUluZm8+XG4gICAgICAgIDxJdGVtUHJpY2UgcHJpY2VJbmZvPXtpdGVtLnByaWNlfSBzaG93RGVjaW1hbHM9e2ZhbHNlfS8+XG4gICAgICAgIHtpdGVtLmZyZWVfc2hpcHBpbmcgPyA8aW1nIHNyYz1cIi9pY19zaGlwcGluZy5wbmdcIiBhbHQ9XCJGcmVlIHNoaXBwaW5nXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIvPiAgOiBudWxsfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPExpbmsgaHJlZj17YC9pdGVtcy8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgPEl0ZW1UaXRsZT57aXRlbS50aXRsZX08L0l0ZW1UaXRsZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9JdGVtSW5mbz5cbiAgICAgIDxJdGVtQ2l0eT5cbiAgICAgICAgPHNwYW4+e2l0ZW0uYWRkcmVzcy5jaXR5X25hbWV9PC9zcGFuPlxuICAgICAgPC9JdGVtQ2l0eT5cbiAgICA8L0l0ZW1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/components/Item/index.jsx\n");

/***/ }),

/***/ "./components/Main/components/ItemList/index.jsx":
/*!*******************************************************!*\
  !*** ./components/Main/components/ItemList/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Item/index */ \"./components/Main/components/Item/index.jsx\");\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/meli-challenge/client/components/Main/components/ItemList/index.jsx\";\n\n\n\nconst ItemList = ({\n  items\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: items && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: items.map((element, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item_index__WEBPACK_IMPORTED_MODULE_2__.default, {\n        item: element\n      }, element.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01haW4vY29tcG9uZW50cy9JdGVtTGlzdC9pbmRleC5qc3g/MWI3MyJdLCJuYW1lcyI6WyJJdGVtTGlzdCIsIml0ZW1zIiwibWFwIiwiZWxlbWVudCIsImlkeCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDOUIsc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLGlCQUNKO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLENBQUNDLE9BQUQsRUFBVUMsR0FBVixrQkFDVCw4REFBQyxnREFBRDtBQUF1QixZQUFJLEVBQUVEO0FBQTdCLFNBQVdBLE9BQU8sQ0FBQ0UsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztBQWNBLCtEQUFlTCxRQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluL2NvbXBvbmVudHMvSXRlbUxpc3QvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL0l0ZW0vaW5kZXhcIjtcblxuY29uc3QgSXRlbUxpc3QgPSAoeyBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtpdGVtcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7aXRlbXMubWFwKChlbGVtZW50LCBpZHgpID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17ZWxlbWVudC5pZH0gaXRlbT17ZWxlbWVudH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/components/ItemList/index.jsx\n");

/***/ }),

/***/ "./components/Main/components/SearchRescue/index.jsx":
/*!***********************************************************!*\
  !*** ./components/Main/components/SearchRescue/index.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ \"./components/Main/style.jsx\");\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/meli-challenge/client/components/Main/components/SearchRescue/index.jsx\";\n\n\nconst SearchRescue = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.SearchRescueContaiuner, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"/not_found.svg\",\n      alt: \"Search Rescue\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.SearchRescueInfo, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"No hay publicaciones que coincidan con tu b\\xFAsqueda.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: \"Revisa la ortograf\\xEDa\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, undefined), \" de la palabra.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [\"Utiliza \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: \"palabras m\\xE1s gen\\xE9ricas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 21\n          }, undefined), \" o menos palabras.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://www.mercadolibre.com.co/categories.html\",\n            children: [\" \", \"Navega por las categor\\xEDas\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, undefined), \" \", \"para encontrar un producto similar\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchRescue);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01haW4vY29tcG9uZW50cy9TZWFyY2hSZXNjdWUvaW5kZXguanN4P2JmZmQiXSwibmFtZXMiOlsiU2VhcmNoUmVzY3VlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFLQSxNQUFNQSxZQUFZLEdBQUcsTUFBTTtBQUN6QixzQkFDRSw4REFBQywwREFBRDtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFDLGdCQUFUO0FBQTBCLFNBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBLDhDQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQU9FO0FBQUEsa0NBQ0U7QUFBRyxnQkFBSSxFQUFDLGlEQUFSO0FBQUEsdUJBQ0csR0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFJTyxHQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUJELENBeEJEOztBQTBCQSwrREFBZUEsWUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi9jb21wb25lbnRzL1NlYXJjaFJlc2N1ZS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTZWFyY2hSZXNjdWVDb250YWl1bmVyLFxuICBTZWFyY2hSZXNjdWVJbmZvLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVcIjtcblxuY29uc3QgU2VhcmNoUmVzY3VlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hSZXNjdWVDb250YWl1bmVyPlxuICAgICAgPGltZyBzcmM9XCIvbm90X2ZvdW5kLnN2Z1wiIGFsdD1cIlNlYXJjaCBSZXNjdWVcIi8+XG4gICAgICA8U2VhcmNoUmVzY3VlSW5mbz5cbiAgICAgICAgPGgzPk5vIGhheSBwdWJsaWNhY2lvbmVzIHF1ZSBjb2luY2lkYW4gY29uIHR1IGLDunNxdWVkYS48L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHN0cm9uZz5SZXZpc2EgbGEgb3J0b2dyYWbDrWE8L3N0cm9uZz4gZGUgbGEgcGFsYWJyYS5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIFV0aWxpemEgPHN0cm9uZz5wYWxhYnJhcyBtw6FzIGdlbsOpcmljYXM8L3N0cm9uZz4gbyBtZW5vcyBwYWxhYnJhcy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5tZXJjYWRvbGlicmUuY29tLmNvL2NhdGVnb3JpZXMuaHRtbFwiPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIE5hdmVnYSBwb3IgbGFzIGNhdGVnb3LDrWFzXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgcGFyYSBlbmNvbnRyYXIgdW4gcHJvZHVjdG8gc2ltaWxhclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L1NlYXJjaFJlc2N1ZUluZm8+XG4gICAgPC9TZWFyY2hSZXNjdWVDb250YWl1bmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzY3VlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main/components/SearchRescue/index.jsx\n");

/***/ }),

/***/ "./components/Main/index.jsx":
/*!***********************************!*\
  !*** ./components/Main/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BreadCrumb_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BreadCrumb/index */ \"./components/Main/components/BreadCrumb/index.jsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./components/Main/style.jsx\");\n/* harmony import */ var _components_ItemList_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ItemList/index */ \"./components/Main/components/ItemList/index.jsx\");\n/* harmony import */ var _components_SearchRescue_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchRescue/index */ \"./components/Main/components/SearchRescue/index.jsx\");\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/meli-challenge/client/components/Main/index.jsx\";\n\n\n\n\n\nconst Main = ({\n  search\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ResultsWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BreadCrumb_index__WEBPACK_IMPORTED_MODULE_1__.default, {\n      categories: search.categories\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ResultsContainer, {\n      children: !!search.items.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemList_index__WEBPACK_IMPORTED_MODULE_3__.default, {\n        items: search.items\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 34\n      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchRescue_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 70\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01haW4vaW5kZXguanN4P2M0ZDMiXSwibmFtZXMiOlsiTWFpbiIsInNlYXJjaCIsImNhdGVnb3JpZXMiLCJpdGVtcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzNCLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBYSxnQkFBVSxFQUFFQSxNQUFNLENBQUNDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFBLGdCQUNHLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRSxLQUFQLENBQWFDLE1BQWYsZ0JBQXdCLDhEQUFDLCtEQUFEO0FBQVUsYUFBSyxFQUFFSCxNQUFNLENBQUNFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXhCLGdCQUE0RCw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRC9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVdBLCtEQUFlSCxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmVhZGNydW1icyBmcm9tIFwiLi9jb21wb25lbnRzL0JyZWFkQ3J1bWIvaW5kZXhcIjtcbmltcG9ydCB7IFJlc3VsdHNXcmFwcGVyLCBSZXN1bHRzQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCBJdGVtTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0l0ZW1MaXN0L2luZGV4XCI7XG5pbXBvcnQgU2VhcmNoUmVzY3VlIGZyb20gXCIuL2NvbXBvbmVudHMvU2VhcmNoUmVzY3VlL2luZGV4XCI7XG5cbmNvbnN0IE1haW4gPSAoeyBzZWFyY2ggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZXN1bHRzV3JhcHBlcj5cbiAgICAgIDxCcmVhZGNydW1icyBjYXRlZ29yaWVzPXtzZWFyY2guY2F0ZWdvcmllc30gLz5cbiAgICAgIDxSZXN1bHRzQ29udGFpbmVyPlxuICAgICAgICB7ISFzZWFyY2guaXRlbXMubGVuZ3RoID8gPEl0ZW1MaXN0IGl0ZW1zPXtzZWFyY2guaXRlbXN9IC8+IDogPFNlYXJjaFJlc2N1ZSAvPn1cbiAgICAgIDwvUmVzdWx0c0NvbnRhaW5lcj5cbiAgICA8L1Jlc3VsdHNXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/index.jsx\n");

/***/ }),

/***/ "./pages/api/search.jsx":
/*!******************************!*\
  !*** ./pages/api/search.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": function() { return /* binding */ getData; },\n/* harmony export */   \"handler\": function() { return /* binding */ handler; }\n/* harmony export */ });\n// pages/api/search\nasync function getData(query) {\n  const response = await fetch(`http://localhost:9000/api/items?q=${query}`);\n  const jsonData = await response.json();\n  return jsonData;\n}\nasync function handler(req, res) {\n  const jsonData = await getData();\n  return jsonData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvc2VhcmNoLmpzeD9iMmJkIl0sIm5hbWVzIjpbImdldERhdGEiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ08sZUFBZUEsT0FBZixDQUF1QkMsS0FBdkIsRUFBOEI7QUFDbkMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxxQ0FBb0NGLEtBQU0sRUFBNUMsQ0FBNUI7QUFDQSxRQUFNRyxRQUFRLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXZCO0FBQ0EsU0FBT0QsUUFBUDtBQUNEO0FBRU0sZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ3RDLFFBQU1KLFFBQVEsR0FBRyxNQUFNSixPQUFPLEVBQTlCO0FBQ0EsU0FBT0ksUUFBUDtBQUVEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NlYXJjaC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc2VhcmNoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShxdWVyeSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjkwMDAvYXBpL2l0ZW1zP3E9JHtxdWVyeX1gKTtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uRGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gIHJldHVybiBqc29uRGF0YTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/search.jsx\n");

/***/ }),

/***/ "./pages/items/index.jsx":
/*!*******************************!*\
  !*** ./pages/items/index.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/index */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Main_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Main/index */ \"./components/Main/index.jsx\");\n/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/search */ \"./pages/api/search.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/meli-challenge/client/pages/items/index.jsx\";\n\n\n\n\n\nfunction Search({\n  query,\n  data\n}) {\n  const metaDescription = () => {\n    const {\n      categories\n    } = data;\n\n    if (categories.length) {\n      const [principalCategory] = categories;\n      return `Encuentra ${query}  ${principalCategory} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`;\n    } else {\n      return `Encuentra ${query} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`;\n    }\n  };\n\n  const setCanonical = () => {\n    return `https://listado.mercadolibre.com.co/${query}`;\n  };\n\n  const setAlternante = platform => {\n    const link = platform === \"android\" ? `android-app://com.mercadolibre/meli/search?go=https://listado.mercadolibre.com.co/${query}` : `ios-app://463624852/meli/search?go=https://listado.mercadolibre.com.co/${query}`;\n    return link;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [query, \" | MercadoLibre.com\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: metaDescription()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"canonical\",\n        href: setCanonical()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"alternate\",\n        href: setAlternante(\"ios\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"alternate\",\n        href: setAlternante(\"android\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_index__WEBPACK_IMPORTED_MODULE_2__.default, {\n      search: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nasync function getServerSideProps(context) {\n  const {\n    search\n  } = context.query;\n  const jsonData = await (0,_api_search__WEBPACK_IMPORTED_MODULE_3__.getData)(search);\n  return {\n    props: {\n      query: search || null,\n      data: jsonData\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pdGVtcy9pbmRleC5qc3g/ZGFjOSJdLCJuYW1lcyI6WyJTZWFyY2giLCJxdWVyeSIsImRhdGEiLCJtZXRhRGVzY3JpcHRpb24iLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwicHJpbmNpcGFsQ2F0ZWdvcnkiLCJzZXRDYW5vbmljYWwiLCJzZXRBbHRlcm5hbnRlIiwicGxhdGZvcm0iLCJsaW5rIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlYXJjaCIsImpzb25EYXRhIiwiZ2V0RGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBaEIsRUFBaUM7QUFDL0IsUUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBTTtBQUFFQztBQUFGLFFBQWlCRixJQUF2Qjs7QUFDQSxRQUFJRSxVQUFVLENBQUNDLE1BQWYsRUFBdUI7QUFDckIsWUFBTSxDQUFDQyxpQkFBRCxJQUFzQkYsVUFBNUI7QUFDQSxhQUFRLGFBQVlILEtBQU0sS0FBSUssaUJBQWtCLGdJQUFoRDtBQUNELEtBSEQsTUFHTztBQUNMLGFBQVEsYUFBWUwsS0FBTSxnSUFBMUI7QUFDRDtBQUNGLEdBUkQ7O0FBU0EsUUFBTU0sWUFBWSxHQUFHLE1BQU07QUFDekIsV0FBUSx1Q0FBc0NOLEtBQU0sRUFBcEQ7QUFDRCxHQUZEOztBQUlBLFFBQU1PLGFBQWEsR0FBSUMsUUFBRCxJQUFjO0FBQ2xDLFVBQU1DLElBQUksR0FDUkQsUUFBUSxLQUFLLFNBQWIsR0FDSyxxRkFBb0ZSLEtBQU0sRUFEL0YsR0FFSywwRUFBeUVBLEtBQU0sRUFIdEY7QUFJQSxXQUFPUyxJQUFQO0FBQ0QsR0FORDs7QUFRQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxtQkFBUVQsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUVFLGVBQWU7QUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0U7QUFBTSxXQUFHLEVBQUMsV0FBVjtBQUFzQixZQUFJLEVBQUVJLFlBQVk7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFDRSxXQUFHLEVBQUMsV0FETjtBQUVFLFlBQUksRUFBRUMsYUFBYSxDQUFDLEtBQUQ7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBYUU7QUFDRSxXQUFHLEVBQUMsV0FETjtBQUVFLFlBQUksRUFBRUEsYUFBYSxDQUFDLFNBQUQ7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBb0JFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUFxQkUsOERBQUMsMkRBQUQ7QUFBTSxZQUFNLEVBQUVOO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7QUFFRCwrREFBZUYsTUFBZjtBQUVPLGVBQWVXLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNO0FBQUVDO0FBQUYsTUFBYUQsT0FBTyxDQUFDWCxLQUEzQjtBQUNBLFFBQU1hLFFBQVEsR0FBRyxNQUFNQyxvREFBTyxDQUFDRixNQUFELENBQTlCO0FBRUEsU0FBTztBQUNMRyxTQUFLLEVBQUU7QUFDTGYsV0FBSyxFQUFFWSxNQUFNLElBQUksSUFEWjtBQUVMWCxVQUFJLEVBQUVZO0FBRkQ7QUFERixHQUFQO0FBTUQiLCJmaWxlIjoiLi9wYWdlcy9pdGVtcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbi9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuLi9hcGkvc2VhcmNoXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaCh7IHF1ZXJ5LCBkYXRhIH0pIHtcbiAgY29uc3QgbWV0YURlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gZGF0YTtcbiAgICBpZiAoY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IFtwcmluY2lwYWxDYXRlZ29yeV0gPSBjYXRlZ29yaWVzO1xuICAgICAgcmV0dXJuIGBFbmN1ZW50cmEgJHtxdWVyeX0gICR7cHJpbmNpcGFsQ2F0ZWdvcnl9IGVuIE1lcmNhZG9MaWJyZS5jb20uY28hIEVudHJlIHkgY29ub3pjYSBudWVzdHJhcyBpbmNyZcOtYmxlcyBvZmVydGFzIHkgcHJvbW9jaW9uZXMuIERlc2N1YnJlIGxhIG1lam9yIGZvcm1hIGRlIGNvbXByYXIgb25saW5lLmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgRW5jdWVudHJhICR7cXVlcnl9IGVuIE1lcmNhZG9MaWJyZS5jb20uY28hIEVudHJlIHkgY29ub3pjYSBudWVzdHJhcyBpbmNyZcOtYmxlcyBvZmVydGFzIHkgcHJvbW9jaW9uZXMuIERlc2N1YnJlIGxhIG1lam9yIGZvcm1hIGRlIGNvbXByYXIgb25saW5lLmA7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRDYW5vbmljYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2xpc3RhZG8ubWVyY2Fkb2xpYnJlLmNvbS5jby8ke3F1ZXJ5fWA7XG4gIH07XG5cbiAgY29uc3Qgc2V0QWx0ZXJuYW50ZSA9IChwbGF0Zm9ybSkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPVxuICAgICAgcGxhdGZvcm0gPT09IFwiYW5kcm9pZFwiXG4gICAgICAgID8gYGFuZHJvaWQtYXBwOi8vY29tLm1lcmNhZG9saWJyZS9tZWxpL3NlYXJjaD9nbz1odHRwczovL2xpc3RhZG8ubWVyY2Fkb2xpYnJlLmNvbS5jby8ke3F1ZXJ5fWBcbiAgICAgICAgOiBgaW9zLWFwcDovLzQ2MzYyNDg1Mi9tZWxpL3NlYXJjaD9nbz1odHRwczovL2xpc3RhZG8ubWVyY2Fkb2xpYnJlLmNvbS5jby8ke3F1ZXJ5fWA7XG4gICAgcmV0dXJuIGxpbms7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cXVlcnl9IHwgTWVyY2Fkb0xpYnJlLmNvbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXttZXRhRGVzY3JpcHRpb24oKX1cbiAgICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17c2V0Q2Fub25pY2FsKCl9ICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXG4gICAgICAgICAgaHJlZj17c2V0QWx0ZXJuYW50ZShcImlvc1wiKX1cbiAgICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICAgIGhyZWY9e3NldEFsdGVybmFudGUoXCJhbmRyb2lkXCIpfVxuICAgICAgICAgIFxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1haW4gc2VhcmNoPXtkYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBnZXREYXRhKHNlYXJjaCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcXVlcnk6IHNlYXJjaCB8fCBudWxsLFxuICAgICAgZGF0YToganNvbkRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/items/index.jsx\n");

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "number-formatter":
/*!***********************************!*\
  !*** external "number-formatter" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("number-formatter");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js-node_modules_next_link_js","components_Header_index_jsx-components_Main_components_BreadCrumb_index_jsx-components_Main_c-1e7f10"], function() { return __webpack_exec__("./pages/items/index.jsx"); });
module.exports = __webpack_exports__;

})();