webpackJsonp([11,17],{

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vtrade_page_component__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vtrade_page_routing__ = __webpack_require__(1550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtradePageModule", function() { return VtradePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VtradePageModule = /** @class */ (function () {
    function VtradePageModule() {
    }
    VtradePageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__vtrade_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__vtrade_page_component__["a" /* VtradePageComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__apex_services__["j" /* VtradeService */]
            ]
        })
    ], VtradePageModule);
    return VtradePageModule;
}());

//# sourceMappingURL=vtrade-page.module.js.map

/***/ }),

/***/ 1527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VtradePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VtradePageComponent = /** @class */ (function () {
    function VtradePageComponent() {
    }
    VtradePageComponent.prototype.ngOnInit = function () {
    };
    VtradePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vtrade-page',
            template: __webpack_require__(1666),
            styles: [__webpack_require__(1604)]
        }),
        __metadata("design:paramtypes", [])
    ], VtradePageComponent);
    return VtradePageComponent;
}());

//# sourceMappingURL=vtrade-page.component.js.map

/***/ }),

/***/ 1550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vtrade_page_component__ = __webpack_require__(1527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__vtrade_page_component__["a" /* VtradePageComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=vtrade-page.routing.js.map

/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1666:
/***/ (function(module, exports) {

module.exports = "<p>\n  vtrade-page works!\n</p>\n"

/***/ })

});
//# sourceMappingURL=11.chunk.js.map