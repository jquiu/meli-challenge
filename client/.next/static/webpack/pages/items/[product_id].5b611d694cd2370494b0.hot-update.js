/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items/[product_id]",{

/***/ "./components/Header/components/Search/index.jsx":
/*!*******************************************************!*\
  !*** ./components/Header/components/Search/index.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style */ \"./components/Header/style.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/client/components/Header/components/Search/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SearchBar = function SearchBar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var handleSearch = function handleSearch(e) {\n    setSearch(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(event) {\n    var key = event.key;\n    var value = event.target.value;\n\n    if (key === \"Enter\") {\n      window.location.replace(\"/items?search=\".concat(value));\n      setSearch(value);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Actualiza el título del documento usando la API del navegador\n    document.title = \"You clicked \".concat(count, \" times\");\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.SearchFrom, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.SearchInput, {\n      type: \"search\",\n      placeholder: \"Nunca dejes de buscar\",\n      \"aria-label\": \"Ingresa lo que quieras encontrar\",\n      value: search,\n      onChange: handleSearch,\n      onKeyPress: handleEnter,\n      autoCapitalize: \"none\",\n      autoComplete: \"off\",\n      autoCorrect: \"off\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/items?search=\".concat(search),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.SearchLink, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"/ic_Search@2x.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SearchBar, \"/GLerps70H6LPpMRxJUwTVVbb9A=\");\n\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvY29tcG9uZW50cy9TZWFyY2gvaW5kZXguanN4P2MxMTAiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlciIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUV0QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJGLGFBQVMsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsUUFDckJDLEdBRHFCLEdBQ2JELEtBRGEsQ0FDckJDLEdBRHFCO0FBQUEsUUFFckJILEtBRnFCLEdBRVhFLEtBQUssQ0FBQ0gsTUFGSyxDQUVyQkMsS0FGcUI7O0FBRzdCLFFBQUlHLEdBQUcsS0FBSyxPQUFaLEVBQXFCO0FBQ25CQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLHlCQUF5Q04sS0FBekM7QUFDQUosZUFBUyxDQUFDSSxLQUFELENBQVQ7QUFDRDtBQUNGLEdBUEQ7O0FBUUFPLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FDLFlBQVEsQ0FBQ0MsS0FBVCx5QkFBZ0NDLEtBQWhDO0FBQ0QsR0FIUSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsaUJBQVcsRUFBQyx1QkFGZDtBQUdFLG9CQUFXLGtDQUhiO0FBSUUsV0FBSyxFQUFFZixNQUpUO0FBS0UsY0FBUSxFQUFFRSxZQUxaO0FBTUUsZ0JBQVUsRUFBRUksV0FOZDtBQU9FLG9CQUFjLEVBQUMsTUFQakI7QUFRRSxrQkFBWSxFQUFDLEtBUmY7QUFTRSxpQkFBVyxFQUFDO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLDBCQUFtQk4sTUFBbkIsQ0FBVjtBQUFBLDZCQUNFLDhEQUFDLDhDQUFEO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXZDRDs7R0FBTUYsUzs7S0FBQUEsUztBQXlDTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL2NvbXBvbmVudHMvU2VhcmNoL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaEZyb20sIFNlYXJjaElucHV0LCBTZWFyY2hMaW5rIH0gZnJvbSBcIi4uLy4uL3N0eWxlXCI7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvaXRlbXM/c2VhcmNoPSR7dmFsdWV9YCk7XG4gICAgICBzZXRTZWFyY2godmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBY3R1YWxpemEgZWwgdMOtdHVsbyBkZWwgZG9jdW1lbnRvIHVzYW5kbyBsYSBBUEkgZGVsIG5hdmVnYWRvclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFlvdSBjbGlja2VkICR7Y291bnR9IHRpbWVzYDtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoRnJvbT5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW5jYSBkZWplcyBkZSBidXNjYXJcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiSW5ncmVzYSBsbyBxdWUgcXVpZXJhcyBlbmNvbnRyYXJcIlxuICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgYXV0b0NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgLz5cblxuICAgICAgPExpbmsgaHJlZj17YC9pdGVtcz9zZWFyY2g9JHtzZWFyY2h9YH0+XG4gICAgICAgIDxTZWFyY2hMaW5rPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ljX1NlYXJjaEAyeC5wbmdcIiAvPlxuICAgICAgICA8L1NlYXJjaExpbms+XG4gICAgICA8L0xpbms+XG4gICAgPC9TZWFyY2hGcm9tPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/components/Search/index.jsx\n");

/***/ })

});