"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/elements/image.js":
/*!**************************************!*\
  !*** ./components/elements/image.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/media */ \"./utils/media.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/types */ \"./utils/types.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar NextImage = function(_param) {\n    var media = _param.media, props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_param, [\n        \"media\"\n    ]);\n    var _attributes = media.data.attributes, url = _attributes.url, alternativeText = _attributes.alternativeText, width = _attributes.width, height = _attributes.height;\n    var loader = function(param) {\n        var src = param.src, width = param.width;\n        return (0,utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(src);\n    };\n    // The image has a fixed width and height\n    if (props.width && props.height) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            loader: loader,\n            src: url,\n            alt: alternativeText || \"\"\n        }, props), void 0, false, {\n            fileName: \"/Users/scfmac/strapi/next-corporate/frontend/components/elements/image.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this);\n    }\n    // The image is responsive\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        loader: loader,\n        layout: \"responsive\",\n        width: width || \"100%\",\n        height: height || \"100%\",\n        objectFit: \"contain\",\n        src: url,\n        alt: alternativeText || \"\"\n    }, void 0, false, {\n        fileName: \"/Users/scfmac/strapi/next-corporate/frontend/components/elements/image.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = NextImage;\n(next_image__WEBPACK_IMPORTED_MODULE_2___default().propTypes) = {\n    media: utils_types__WEBPACK_IMPORTED_MODULE_4__.mediaPropTypes,\n    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NextImage);\nvar _c;\n$RefreshReg$(_c, \"NextImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL2ltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNkM7QUFDZDtBQUNJO0FBQ1U7QUFFN0MsSUFBTUksU0FBUyxHQUFHLGlCQUF5QjtRQUF0QkMsS0FBSyxVQUFMQSxLQUFLLEVBQUtDLEtBQUs7UUFBZkQsT0FBSzs7SUFDeEIsSUFBZ0RBLFdBQXFCLEdBQXJCQSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsVUFBVSxFQUE3REMsR0FBRyxHQUFxQ0osV0FBcUIsQ0FBN0RJLEdBQUcsRUFBRUMsZUFBZSxHQUFvQkwsV0FBcUIsQ0FBeERLLGVBQWUsRUFBRUMsS0FBSyxHQUFhTixXQUFxQixDQUF2Q00sS0FBSyxFQUFFQyxNQUFNLEdBQUtQLFdBQXFCLENBQWhDTyxNQUFNO0lBRTNDLElBQU1DLE1BQU0sR0FBRyxnQkFBb0I7WUFBakJDLEdBQUcsU0FBSEEsR0FBRyxFQUFFSCxLQUFLLFNBQUxBLEtBQUs7UUFDMUIsT0FBT1gsMkRBQWMsQ0FBQ2MsR0FBRyxDQUFDLENBQUM7S0FDNUI7SUFFRCx5Q0FBeUM7SUFDekMsSUFBSVIsS0FBSyxDQUFDSyxLQUFLLElBQUlMLEtBQUssQ0FBQ00sTUFBTSxFQUFFO1FBQy9CLHFCQUNFLDhEQUFDWCxtREFBSztZQUFDWSxNQUFNLEVBQUVBLE1BQU07WUFBRUMsR0FBRyxFQUFFTCxHQUFHO1lBQUVNLEdBQUcsRUFBRUwsZUFBZSxJQUFJLEVBQUU7V0FBTUosS0FBSzs7OztpQkFBSSxDQUMxRTtLQUNIO0lBRUQsMEJBQTBCO0lBQzFCLHFCQUNFLDhEQUFDTCxtREFBSztRQUNKWSxNQUFNLEVBQUVBLE1BQU07UUFDZEcsTUFBTSxFQUFDLFlBQVk7UUFDbkJMLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU07UUFDdEJDLE1BQU0sRUFBRUEsTUFBTSxJQUFJLE1BQU07UUFDeEJLLFNBQVMsRUFBQyxTQUFTO1FBQ25CSCxHQUFHLEVBQUVMLEdBQUc7UUFDUk0sR0FBRyxFQUFFTCxlQUFlLElBQUksRUFBRTs7Ozs7YUFDMUIsQ0FDRjtDQUNIO0FBMUJLTixLQUFBQSxTQUFTO0FBNEJmSCw2REFBZSxHQUFHO0lBQ2hCSSxLQUFLLEVBQUVGLHVEQUFjO0lBQ3JCZ0IsU0FBUyxFQUFFakIsMERBQWdCO0NBQzVCLENBQUM7QUFFRiwrREFBZUUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWxlbWVudHMvaW1hZ2UuanM/OGUwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ3V0aWxzL21lZGlhJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtZWRpYVByb3BUeXBlcyB9IGZyb20gJ3V0aWxzL3R5cGVzJztcblxuY29uc3QgTmV4dEltYWdlID0gKHsgbWVkaWEsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzO1xuXG4gIGNvbnN0IGxvYWRlciA9ICh7IHNyYywgd2lkdGggfSkgPT4ge1xuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShzcmMpO1xuICB9O1xuXG4gIC8vIFRoZSBpbWFnZSBoYXMgYSBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0XG4gIGlmIChwcm9wcy53aWR0aCAmJiBwcm9wcy5oZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEltYWdlIGxvYWRlcj17bG9hZGVyfSBzcmM9e3VybH0gYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJyd9IHsuLi5wcm9wc30gLz5cbiAgICApO1xuICB9XG5cbiAgLy8gVGhlIGltYWdlIGlzIHJlc3BvbnNpdmVcbiAgcmV0dXJuIChcbiAgICA8SW1hZ2VcbiAgICAgIGxvYWRlcj17bG9hZGVyfVxuICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xuICAgICAgd2lkdGg9e3dpZHRoIHx8ICcxMDAlJ31cbiAgICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxMDAlJ31cbiAgICAgIG9iamVjdEZpdD0nY29udGFpbidcbiAgICAgIHNyYz17dXJsfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJyd9XG4gICAgLz5cbiAgKTtcbn07XG5cbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgbWVkaWE6IG1lZGlhUHJvcFR5cGVzLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0SW1hZ2U7XG4iXSwibmFtZXMiOlsiZ2V0U3RyYXBpTWVkaWEiLCJJbWFnZSIsIlByb3BUeXBlcyIsIm1lZGlhUHJvcFR5cGVzIiwiTmV4dEltYWdlIiwibWVkaWEiLCJwcm9wcyIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwcm9wVHlwZXMiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/image.js\n"));

/***/ })

});