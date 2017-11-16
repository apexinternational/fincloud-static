webpackJsonp([8,17],{

/***/ 1406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page_component__ = __webpack_require__(1489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_page_routing__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forget_pwd_forget_pwd_component__ = __webpack_require__(1488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__login_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__forget_pwd_forget_pwd_component__["a" /* ForgetPwdComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__forget_pwd_forget_pwd_component__["a" /* ForgetPwdComponent */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login-page.module.js.map

/***/ }),

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_validation__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgetPwdComponent = /** @class */ (function () {
    function ForgetPwdComponent(activeModal, fb, router, auth, utilSvc) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.utilSvc = utilSvc;
        this.isSuccess = false;
    }
    ForgetPwdComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__shared_validation__["a" /* Validation */].RE_EMAIL)
                ],
                this.auth.emailNotExistValidator.bind(this.auth)
            ]
        });
    };
    ForgetPwdComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.checkEmailExist(this.form.value.email)
            .flatMap(function (result) {
            if (!result) {
                _this.form.get('email').setErrors({ 'emailNotExist': _this.form.value.email });
                return;
            }
            return _this.auth.resetPassword(_this.form.value.email);
        })
            .subscribe(function (result) {
            _this.isSuccess = true;
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ForgetPwdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgetpwd',
            template: __webpack_require__(1613),
            styles: [__webpack_require__(1553)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */]) === "function" && _e || Object])
    ], ForgetPwdComponent);
    return ForgetPwdComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=forget-pwd.component.js.map

/***/ }),

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forget_pwd_forget_pwd_component__ = __webpack_require__(1488);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, auth, modalService) {
        this.router = router;
        this.auth = auth;
        this.modalService = modalService;
        this.prod = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getLoggedInUser().subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/member']);
            }
        });
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.email, this.password).subscribe(function (user) {
            _this.router.navigate(['/member']);
        }, function (err) {
            var modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__shared_components__["a" /* DialogComponent */]);
            modalRef.componentInstance.title = 'error.' + err.message + '.title';
            modalRef.componentInstance.msg = 'error.' + err.message + '.msg';
        });
    };
    LoginPageComponent.prototype.onForgetPassword = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__forget_pwd_forget_pwd_component__["a" /* ForgetPwdComponent */]);
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(1614),
            styles: [__webpack_require__(1554)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_page_component__ = __webpack_require__(1489);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_page_component__["a" /* LoginPageComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=login-page.routing.js.map

/***/ }),

/***/ 1553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "#login-box {\n  color: #666666; }\n  #login-box #login-banner {\n    width: 100%; }\n  #login-box #sign-in {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1613:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" translate>{{ 'common.content.forget_password' }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form (ngSubmit)=\"onSubmit\" [formGroup]=\"form\">\n  <div class=\"modal-body\">\n    <div translate>{{ 'msg.forget_pwd_msg' }}</div>\n      <div class=\"form-inline\"  [class.has-danger]=\"!form.get('email').valid && !form.get('email').pristine\">\n        <label class=\"control-label\" for=\"email\" translate>{{ 'common.content.email' }}</label>:\n        <input type=\"email\" class=\"form-control form-control-sm mx-2\" id=\"email\" formControlName=\"email\">\n        <div *ngIf=\"!form.get('email').pristine\">\n          <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('required')\" translate>{{ 'common.validation.email_required' }}</small>\n          <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('pattern')\" translate>{{ 'common.validation.email_invalid' }}</small>\n          <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('emailNotExist')\" translate>{{ 'common.validation.email_unregistered' }}</small>\n        </div>\n      </div>\n    <div *ngIf=\"isSuccess\" class=\"mt-2\" translate>{{ 'msg.pwd_has_been_sent' }}</div>\n  </div>\n  <div class=\"modal-footer\">\n    <button id=\"forget\"\n            *ngIf=\"!isSuccess\"\n            type=\"submit\"\n            class=\"btn btn-primary float-right\"\n            (click)=\"onSubmit()\"\n            [disabled]=\"!form.valid\"\n            translate>\n      {{ 'common.button.forget' }}\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ 1614:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"login-box\" class=\"card p-3\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <img src=\"./assets/images/banners/login_banner.jpg\" alt=\"LOGIN_BANNER\" id=\"login-banner\">\n      </div>\n      <div class=\"col-md-4 pl-0\">\n        <h3 translate>{{ 'login.title' }}</h3>\n        <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"email\" translate>{{ 'common.content.email' }}</label>\n            <input type=\"email\"\n                   class=\"form-control\"\n                   id=\"email\"\n                   placeholder=\"Email\"\n                   [(ngModel)]=\"email\"\n                   name=\"email\"\n                   required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" translate>{{ 'common.content.password' }}</label>\n            <input type=\"password\"\n                   class=\"form-control\"\n                   id=\"password\"\n                   placeholder=\"Password\"\n                   [(ngModel)]=\"password\"\n                   name=\"password\"\n                   required>\n          </div>\n          <button id=\"sign-up\"\n                  *ngIf=\"!prod\"\n                  type=\"button\"\n                  class=\"btn btn-link\"\n                  routerLink=\"/register\"\n                  translate>\n            {{ 'login.sign_up' }}\n          </button>\n          <a class=\"btn btn-link\"\n             *ngIf=\"prod\"\n             href=\"/2017vrtrading\"\n             translate>\n            {{ 'login.sign_up' }}\n          </a>\n          <button id=\"forget-password\"\n                  *ngIf=\"!prod\"\n                  type=\"button\"\n                  class=\"btn btn-link\"\n                  (click)=\"onForgetPassword()\"\n                  translate>\n            {{ 'common.content.forget_password' }}\n          </button>\n          <button id=\"sign-in\"\n                  type=\"submit\"\n                  class=\"btn btn-primary\"\n                  [disabled]=\"!loginForm.form.valid\"\n                  translate>\n            {{ 'login.sign_in' }}\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map