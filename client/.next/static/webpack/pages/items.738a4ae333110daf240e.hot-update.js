/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items",{

/***/ "./components/Main/components/ItemPrice/index.jsx":
/*!********************************************************!*\
  !*** ./components/Main/components/ItemPrice/index.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! number-formatter */ \"./node_modules/number-formatter/lib/format.js\");\n/* harmony import */ var number_formatter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(number_formatter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formartter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/formartter */ \"./utils/formartter.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/jennifferquintero/Documents/client/components/Main/components/ItemPrice/index.jsx\";\n\n\n\nfunction ItemPrice(_ref) {\n  var priceInfo = _ref.priceInfo,\n      showDecimals = _ref.showDecimals;\n  var price = parseFloat(priceInfo.amount);\n  var priceRounded = (0,_utils_formartter__WEBPACK_IMPORTED_MODULE_2__.getIntegerNumber)(price);\n  var priceDecimals = (0,_utils_formartter__WEBPACK_IMPORTED_MODULE_2__.getDecimalNumber)(price, parseInt(priceInfo.decimal));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n    children: [priceInfo.symbol, number_formatter__WEBPACK_IMPORTED_MODULE_1___default()(\"#.##0,#\", priceRounded), (showDecimals || priceDecimals > 0) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: priceDecimals.toString().slice(2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ItemPrice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemPrice);\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemPrice\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL2NvbXBvbmVudHMvSXRlbVByaWNlL2luZGV4LmpzeD81MzdjIl0sIm5hbWVzIjpbIkl0ZW1QcmljZSIsInByaWNlSW5mbyIsInNob3dEZWNpbWFscyIsInByaWNlIiwicGFyc2VGbG9hdCIsImFtb3VudCIsInByaWNlUm91bmRlZCIsImdldEludGVnZXJOdW1iZXIiLCJwcmljZURlY2ltYWxzIiwiZ2V0RGVjaW1hbE51bWJlciIsInBhcnNlSW50IiwiZGVjaW1hbCIsInN5bWJvbCIsIm51bWJlckZvcm1hdHRlciIsInRvU3RyaW5nIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsU0FBU0EsU0FBVCxPQUFnRDtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzlDLE1BQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDSCxTQUFTLENBQUNJLE1BQVgsQ0FBeEI7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLG1FQUFnQixDQUFDSixLQUFELENBQXJDO0FBQ0EsTUFBTUssYUFBYSxHQUFHQyxtRUFBZ0IsQ0FBQ04sS0FBRCxFQUFRTyxRQUFRLENBQUNULFNBQVMsQ0FBQ1UsT0FBWCxDQUFoQixDQUF0QztBQUVBLHNCQUNFO0FBQUEsZUFDR1YsU0FBUyxDQUFDVyxNQURiLEVBRUdDLHVEQUFlLENBQUMsU0FBRCxFQUFZUCxZQUFaLENBRmxCLEVBR0csQ0FBQ0osWUFBWSxJQUFJTSxhQUFhLEdBQUcsQ0FBakMsa0JBQ0M7QUFBQSxnQkFBT0EsYUFBYSxDQUFDTSxRQUFkLEdBQXlCQyxLQUF6QixDQUErQixDQUEvQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQWRRZixTO0FBZ0JULCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluL2NvbXBvbmVudHMvSXRlbVByaWNlL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBudW1iZXJGb3JtYXR0ZXIgZnJvbSBcIm51bWJlci1mb3JtYXR0ZXJcIjtcbmltcG9ydCB7XG4gIGdldEludGVnZXJOdW1iZXIsXG4gIGdldERlY2ltYWxOdW1iZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9mb3JtYXJ0dGVyXCI7XG5cbmZ1bmN0aW9uIEl0ZW1QcmljZSh7IHByaWNlSW5mbywgc2hvd0RlY2ltYWxzIH0pIHtcbiAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlSW5mby5hbW91bnQpO1xuICBjb25zdCBwcmljZVJvdW5kZWQgPSBnZXRJbnRlZ2VyTnVtYmVyKHByaWNlKTtcbiAgY29uc3QgcHJpY2VEZWNpbWFscyA9IGdldERlY2ltYWxOdW1iZXIocHJpY2UsIHBhcnNlSW50KHByaWNlSW5mby5kZWNpbWFsKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtwcmljZUluZm8uc3ltYm9sfVxuICAgICAge251bWJlckZvcm1hdHRlcihcIiMuIyMwLCNcIiwgcHJpY2VSb3VuZGVkKX1cbiAgICAgIHsoc2hvd0RlY2ltYWxzIHx8IHByaWNlRGVjaW1hbHMgPiAwKSAmJiAoXG4gICAgICAgIDxzcGFuPntwcmljZURlY2ltYWxzLnRvU3RyaW5nKCkuc2xpY2UoMil9PC9zcGFuPlxuICAgICAgKX1cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1QcmljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main/components/ItemPrice/index.jsx\n");

/***/ })

});