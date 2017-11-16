webpackJsonp([10,17],{

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_account_page_component__ = __webpack_require__(1533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verify_account_page_routing__ = __webpack_require__(1552);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountPageModule", function() { return VerifyAccountPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VerifyAccountPageModule = /** @class */ (function () {
    function VerifyAccountPageModule() {
    }
    VerifyAccountPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__verify_account_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__verify_account_page_component__["a" /* VerifyAccountPageComponent */]
            ]
        })
    ], VerifyAccountPageModule);
    return VerifyAccountPageModule;
}());

//# sourceMappingURL=verify-account-page.module.js.map

/***/ }),

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyAccountPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyAccountPageComponent = /** @class */ (function () {
    function VerifyAccountPageComponent(route, auth) {
        var _this = this;
        this.route = route;
        this.auth = auth;
        this.ret = false;
        this.showGreeting = false;
        this.route.params.subscribe(function (params) {
            var hash = params['hash'];
            _this.auth.verifyEmail(hash).subscribe(function (result) {
                _this.ret = true;
                _this.showGreeting = result;
            });
        });
    }
    VerifyAccountPageComponent.prototype.ngOnInit = function () {
    };
    VerifyAccountPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-account-page',
            template: __webpack_require__(1672),
            styles: [__webpack_require__(1610)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services__["a" /* AuthService */]) === "function" && _b || Object])
    ], VerifyAccountPageComponent);
    return VerifyAccountPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=verify-account-page.component.js.map

/***/ }),

/***/ 1552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verify_account_page_component__ = __webpack_require__(1533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: ':hash', component: __WEBPACK_IMPORTED_MODULE_1__verify_account_page_component__["a" /* VerifyAccountPageComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=verify-account-page.routing.js.map

/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1672:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div *ngIf=\"!showGreeting && ret == true\">\n        <div class=\"h4\" translate>{{ 'verify_account.greeting' }}</div>\n        <div translate>{{ 'verify_account.failed_content' }}</div>\n      </div>\n      <div *ngIf=\"showGreeting && ret == true\">\n        <div class=\"h4\" translate>{{ 'verify_account.greeting' }}</div>\n        <div translate>{{ 'verify_account.content' }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map