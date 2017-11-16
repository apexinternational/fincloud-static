webpackJsonp([9,17],{

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_apex_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_pages_component__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_pages_routing__ = __webpack_require__(1548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(1487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPagesModule", function() { return MemberPagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MemberPagesModule = /** @class */ (function () {
    function MemberPagesModule() {
    }
    MemberPagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__apex_apex_module__["a" /* ApexModule */],
                __WEBPACK_IMPORTED_MODULE_5__member_pages_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__member_pages_component__["a" /* MemberPagesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]
            ]
        })
    ], MemberPagesModule);
    return MemberPagesModule;
}());

//# sourceMappingURL=member-pages.module.js.map

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var mergeMap_1 = __webpack_require__(648);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authorize(state.url);
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.authorize(state.url);
    };
    AuthGuard.prototype.authorize = function (url) {
        var _this = this;
        return this.auth.getLoggedInUser().map(function (user) {
            if (user) {
                var pass_1 = false;
                user.Permissions.forEach(function (p) {
                    if (Object.keys(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].permissionMap).indexOf(p) > -1) {
                        var re = new RegExp('^' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].permissionMap[p].url + '(?:/.*)?$');
                        if (re.test(url)) {
                            pass_1 = true;
                        }
                    }
                });
                return pass_1;
            }
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 1520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberPagesComponent = /** @class */ (function () {
    function MemberPagesComponent() {
    }
    MemberPagesComponent.prototype.ngOnInit = function () {
    };
    MemberPagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-pages',
            template: __webpack_require__(1659),
            styles: [__webpack_require__(1612)]
        }),
        __metadata("design:paramtypes", [])
    ], MemberPagesComponent);
    return MemberPagesComponent;
}());

//# sourceMappingURL=member-pages.component.js.map

/***/ }),

/***/ 1548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__(1487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_pages_component__ = __webpack_require__(1520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__member_pages_component__["a" /* MemberPagesComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', loadChildren: './member-home-page/member-home-page.module#MemberHomePageModule' },
            { path: 'course', loadChildren: './course-page/course-page.module#CoursePageModule' },
            { path: 'competition', loadChildren: './competition-page/competition-page.module#CompetitionPageModule' },
            { path: 'vtrade', loadChildren: './vtrade-page/vtrade-page.module#VtradePageModule' },
            { path: 'expert', loadChildren: './expert-page/expert-page.module#ExpertPageModule' },
            { path: 'istock', loadChildren: './istock-page/istock-page.module#IstockPageModule' },
            { path: 'irobot', loadChildren: './irobot-page/irobot-page.module#IrobotPageModule' },
            { path: 'vdata', loadChildren: './vdata-page/vdata-page.module#VdataPageModule' }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=member-pages.routing.js.map

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1659:
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb></app-breadcrumb>\n<router-outlet></router-outlet>\n"

/***/ })

});
//# sourceMappingURL=9.chunk.js.map