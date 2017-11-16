webpackJsonp([6,17],{

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_page_component__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__applyment_form_applyment_form_component__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_applyment_confirm_applyment_component__ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_complete_register_complete_component__ = __webpack_require__(1530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_page_routing__ = __webpack_require__(1551);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__register_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__register_page_component__["a" /* RegisterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__applyment_form_applyment_form_component__["a" /* ApplymentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__confirm_applyment_confirm_applyment_component__["a" /* ConfirmApplymentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_complete_register_complete_component__["a" /* RegisterCompleteComponent */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register-page.module.js.map

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

/***/ 1528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_validation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_directives_equal_validator_directive__ = __webpack_require__(654);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplymentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ApplymentFormComponent = /** @class */ (function () {
    function ApplymentFormComponent(fb, router, auth, cookie, utilSvc) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.cookie = cookie;
        this.utilSvc = utilSvc;
        __WEBPACK_IMPORTED_MODULE_4__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getApplymentFormData(event.lang);
        });
    }
    ApplymentFormComponent.prototype.ngOnInit = function () {
        this.getApplymentFormData(__WEBPACK_IMPORTED_MODULE_4__translation_module__["a" /* TranslationModule */].translate.currentLang);
        var data = this.cookie.getObject('regData') || {};
        this.form = this.fb.group({
            email: [data.email ? data.email : '', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(200),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__shared_validation__["a" /* Validation */].RE_EMAIL)
                ],
                this.auth.emailExistValidator.bind(this.auth)
            ],
            passwords: this.fb.group({
                password: [data.passwords && data.passwords.password ? data.passwords.password : '',
                    [
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__shared_validation__["a" /* Validation */].RE_PASSWD)
                    ]
                ],
                confirmPassword: [data.passwords && data.passwords.confirmPassword ? data.passwords.confirmPassword : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]]
            }, { validator: __WEBPACK_IMPORTED_MODULE_10__shared_directives_equal_validator_directive__["a" /* isEqualValidator */] }),
            name: [data.name ? data.name : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            gender: [data.gender ? data.gender : 'M', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            birthday: [data.birthday ? data.birthday : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            mobile: [data.mobile ? data.mobile : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            state: [data.state ? data.state : 'employed', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            address: [data.address ? data.address : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            career: [data.career ? data.career : '農、林、漁、牧業', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            college: [data.college ? data.college : '--', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]],
            department: [data.department ? data.department : '--', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]]
        });
    };
    ApplymentFormComponent.prototype.getApplymentFormData = function (lang) {
        var _this = this;
        this.auth.getApplymentFormData(lang)
            .subscribe(function (result) {
            _this.reg = result;
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ApplymentFormComponent.prototype.onStateChange = function () {
        switch (this.form.value.state) {
            case 'employed':
                this.form.get('career').setValue(this.reg.career[0].value);
                break;
            case 'student':
                this.form.get('college').setValue('--');
                this.form.get('department').setValue('--');
                break;
            case 'unemployed':
                this.form.get('career').setValue(this.reg.career[0].value);
                this.form.get('college').setValue('--');
                this.form.get('department').setValue('--');
                break;
        }
    };
    ApplymentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.checkEmailExist(this.form.value.email)
            .subscribe(function (result) {
            if (result) {
                _this.form.get('email').setErrors({ 'emailExist': _this.form.get('email') });
                return;
            }
            _this.cookie.putObject('regData', _this.form.value, { expires: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_date_fns__["addMinutes"])(new Date(), __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].cookieExpMins) });
            _this.router.navigate(['/register/confirm-applyment']);
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ApplymentFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applyment-form',
            template: __webpack_require__(1667),
            styles: [__webpack_require__(1605)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__apex_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__["a" /* UtilService */]) === "function" && _e || Object])
    ], ApplymentFormComponent);
    return ApplymentFormComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=applyment-form.component.js.map

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmApplymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfirmApplymentComponent = /** @class */ (function () {
    function ConfirmApplymentComponent(auth, utilSvc, router, modalService, cookie) {
        var _this = this;
        this.auth = auth;
        this.utilSvc = utilSvc;
        this.router = router;
        this.modalService = modalService;
        this.cookie = cookie;
        __WEBPACK_IMPORTED_MODULE_3__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getApplymentFormData(event.lang);
        });
    }
    ConfirmApplymentComponent.prototype.ngOnInit = function () {
        this.getApplymentFormData(__WEBPACK_IMPORTED_MODULE_3__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.regData = this.cookie.getObject('regData');
    };
    ConfirmApplymentComponent.prototype.onConfirm = function () {
        var _this = this;
        // TODO: Error handle
        this.auth.register(this.regData).subscribe(function (result) {
            _this.router.navigate(['/register/success']);
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ConfirmApplymentComponent.prototype.onModify = function () {
        this.router.navigate(['/register/applyment-form']);
    };
    ConfirmApplymentComponent.prototype.getApplymentFormData = function (lang) {
        var _this = this;
        this.auth.getApplymentFormData(lang)
            .subscribe(function (result) {
            _this.reg = result;
            _this.gender = _this.reg.gender.find(function (g) { return g.value === _this.regData.gender; }).key;
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ConfirmApplymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-applyment',
            template: __webpack_require__(1668),
            styles: [__webpack_require__(1606)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__apex_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__apex_services__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__apex_services_util_service__["a" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["a" /* CookieService */]) === "function" && _e || Object])
    ], ConfirmApplymentComponent);
    return ConfirmApplymentComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=confirm-applyment.component.js.map

/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterCompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterCompleteComponent = /** @class */ (function () {
    function RegisterCompleteComponent(cookie) {
        this.cookie = cookie;
    }
    RegisterCompleteComponent.prototype.ngOnInit = function () {
        this.data = this.cookie.getObject('regData');
    };
    RegisterCompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-complete',
            template: __webpack_require__(1669),
            styles: [__webpack_require__(1607)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["a" /* CookieService */]) === "function" && _a || Object])
    ], RegisterCompleteComponent);
    return RegisterCompleteComponent;
    var _a;
}());

//# sourceMappingURL=register-complete.component.js.map

/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(1670),
            styles: [__webpack_require__(1608)]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());

//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_util_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent(auth, utilSvc) {
        var _this = this;
        this.auth = auth;
        this.utilSvc = utilSvc;
        this.isAcceptance = false;
        __WEBPACK_IMPORTED_MODULE_1__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getTermsAndConditions(event.lang);
        });
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
        this.getTermsAndConditions(__WEBPACK_IMPORTED_MODULE_1__translation_module__["a" /* TranslationModule */].translate.currentLang);
    };
    TermsAndConditionsComponent.prototype.getTermsAndConditions = function (lang) {
        var _this = this;
        this.auth.getTermsAndConditions(lang)
            .subscribe(function (result) {
            _this.termsAndConditions = result;
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    TermsAndConditionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__(1671),
            styles: [__webpack_require__(1609)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_util_service__["a" /* UtilService */]) === "function" && _b || Object])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=terms-and-conditions.component.js.map

/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_page_component__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyment_form_applyment_form_component__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_applyment_confirm_applyment_component__ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_complete_register_complete_component__ = __webpack_require__(1530);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__register_page_component__["a" /* RegisterPageComponent */],
        children: [
            { path: '', redirectTo: 'terms-and-conditions', pathMatch: 'full' },
            { path: 'terms-and-conditions', component: __WEBPACK_IMPORTED_MODULE_2__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */] },
            { path: 'applyment-form', component: __WEBPACK_IMPORTED_MODULE_3__applyment_form_applyment_form_component__["a" /* ApplymentFormComponent */] },
            { path: 'confirm-applyment', component: __WEBPACK_IMPORTED_MODULE_4__confirm_applyment_confirm_applyment_component__["a" /* ConfirmApplymentComponent */] },
            { path: 'success', component: __WEBPACK_IMPORTED_MODULE_5__register_complete_register_complete_component__["a" /* RegisterCompleteComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=register-page.routing.js.map

/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "div.container div.h5 {\n  text-align: center; }\n\n#submit {\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "div.container div.h5 {\n  text-align: center; }\n\n.buttonstyle {\n  margin-left: 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "div.container {\n  text-align: center; }\n\n#terms-and-conditions {\n  text-align: left;\n  border: 1px solid #dddddd;\n  height: 300px;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1667:
/***/ (function(module, exports) {

module.exports = "<form class=\"mx-5 p-3\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <div class=\"form-group row\" [class.has-danger]=\"!form.get('email').valid && !form.get('email').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"email\" translate>{{ 'common.content.email' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"email\" id=\"email\" formControlName=\"email\">\n      <span *ngIf=\"!form.get('email').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('required')\" translate>{{ 'common.validation.email_required' }}</small>\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('pattern')\" translate>{{ 'common.validation.email_invalid' }}</small>\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('maxlength')\" translate>{{ 'common.validation.email_invalid' }}</small>\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('email').hasError('emailExist')\" translate>{{ 'common.validation.email_exist' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\" formGroupName=\"passwords\" [class.has-danger]=\"!form.get('passwords').get('password').valid && !form.get('passwords').get('password').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"password\" translate>{{ 'common.content.password' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"password\" id=\"password\" formControlName=\"password\">\n      <span *ngIf=\"!form.get('passwords').get('password').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('passwords').get('password').hasError('required')\" translate>{{ 'common.validation.password_required' }}</small>\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('passwords').get('password').hasError('pattern')\" translate>{{ 'common.validation.password_invalid' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\" formGroupName=\"passwords\" [class.has-danger]=\"(form.get('passwords').hasError('isNotEqual') || !form.get('passwords').get('confirmPassword').valid) && !form.get('passwords').get('confirmPassword').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"confirmPassword\" translate>{{ 'common.content.confirm_password' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"password\" id=\"confirmPassword\" formControlName=\"confirmPassword\">\n      <span *ngIf=\"!form.get('passwords').get('confirmPassword').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('passwords').get('confirmPassword').hasError('required')\" translate>{{ 'common.validation.password_required' }}</small>\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('passwords').hasError('isNotEqual')\" translate>{{ 'common.validation.password_mismatch' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\" [class.has-danger]=\"!form.get('name').valid && !form.get('name').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"name\" translate>{{ 'common.content.name' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"text\" id=\"name\" formControlName=\"name\">\n      <span *ngIf=\"!form.get('name').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('name').hasError('required')\" translate>{{ 'common.validation.name_required' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"gender\" translate>{{ 'common.content.gender' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label mr-5\" *ngFor=\"let g of reg?.gender\">\n          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" [value]=\"g.value\"> {{ g.key }}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"birthday\" translate>{{ 'common.content.birthday' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"date\" id=\"birthday\" placeholder=\"dd/mm/yyyy\" formControlName=\"birthday\">\n    </div>\n  </div>\n  <div class=\"form-group row\" [class.has-danger]=\"!form.get('mobile').valid && !form.get('mobile').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"phone\" translate>{{ 'common.content.phone' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"text\" id=\"phone\" formControlName=\"mobile\">\n      <span *ngIf=\"!form.get('mobile').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('mobile').hasError('required')\" translate>{{ 'common.validation.phone_required' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\" [class.has-danger]=\"!form.get('address').valid && !form.get('address').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"address\" translate>{{ 'common.content.address' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"text\" id=\"address\" formControlName=\"address\">\n      <span *ngIf=\"!form.get('address').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('address').hasError('required')\" translate>{{ 'common.validation.addr_required' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"state\" translate>{{ 'common.content.state' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label mr-5\" *ngFor=\"let s of reg?.state\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"state\" formControlName=\"state\" [value]=\"s.value\" (change)=\"onStateChange()\"> {{ s.key }}\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\" *ngIf=\"form.get('state').value == 'employed'\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"career\" translate>{{ 'common.content.career' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <select id=\"career\" class=\"form-control\" formControlName=\"career\">\n        <option *ngFor=\"let c of reg?.career\" [value]=\"c.value\">{{ c.key }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group row\" *ngIf=\"form.get('state').value == 'student'\" [class.has-danger]=\"!form.get('college').valid && !form.get('college').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"college\" translate>{{ 'common.content.school' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"text\" id=\"college\" formControlName=\"college\">\n      <span *ngIf=\"!form.get('college').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('college').hasError('required')\" translate>{{ 'common.validation.college_required' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group row\" *ngIf=\"form.get('state').value == 'student'\" [class.has-danger]=\"!form.get('department').valid && !form.get('department').pristine\">\n    <div class=\"col-md-3\">\n      <span class=\"text-danger\">*</span>\n      <label class=\"col-form-label\" for=\"department\" translate>{{ 'common.content.department' }}</label>\n    </div>\n    <div class=\"col-md-9\">\n      <input class=\"form-control\" type=\"text\" id=\"department\" formControlName=\"department\">\n      <span *ngIf=\"!form.get('department').pristine\">\n        <small class=\"form-control-feedback\" *ngIf=\"form.get('department').hasError('required')\" translate>{{ 'common.validation.department_required' }}</small>\n      </span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <button type=\"submit\" id=\"submit\" class=\"btn btn-primary mt-3\" [disabled]=\"!form.valid\" translate>{{ 'common.button.submit' }}</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 1668:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.email' }}</div>\n    <div class=\"col-md-9\">{{ regData?.email }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.password' }}</div>\n    <div class=\"col-md-9\">{{ regData?.passwords.password | shadow }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.name' }}</div>\n    <div class=\"col-md-9\">{{ regData?.name }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.gender' }}</div>\n    <div class=\"col-md-9\">{{ gender }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.birthday' }}</div>\n    <div class=\"col-md-9\">{{ regData?.birthday }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.phone' }}</div>\n    <div class=\"col-md-9\">{{ regData?.mobile }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.address' }}</div>\n    <div class=\"col-md-9\">{{ regData?.address }}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"regData?.state == 'employed'\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.career' }}</div>\n    <div class=\"col-md-9\">{{ regData?.career }}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"regData?.state == 'student'\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.school' }}</div>\n    <div class=\"col-md-9\">{{ regData?.college }}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"regData?.state == 'student'\">\n    <div class=\"col-md-3\" translate>{{ 'common.content.department' }}</div>\n    <div class=\"col-md-9\">{{ regData?.department }}</div>\n  </div>\n  <div class=\"mt-3 d-flex justify-content-center\">\n    <button type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"onModify()\" translate>{{ 'common.button.edit' }}</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onConfirm()\" translate>{{ 'common.button.submit' }}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 1669:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"h5\" translate>{{ 'msg.success' }}</div>\n  <div class=\"container p-4 w-50\">\n    <div class=\"row\">\n      <span translate>{{ 'msg.welcome' }}</span>\n      <span class=\"ml-2\">{{ data?.name }},</span>\n      <p class=\"ml-2\" translate>{{ 'register.welcome_msg' }}</p>\n    </div>\n    <div class=\"row mt-5\">\n      <div class=\"col-md-4\" translate>{{ 'common.content.email' }}</div>\n      <div class=\"col-md-8\">{{ data?.email }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\" translate>{{ 'common.content.password' }}</div>\n      <div class=\"col-md-8\">{{ data.passwords.password | shadow }}</div>\n    </div>\n  </div>\n  <button class=\"buttonstyle btn btn-primary\" routerLink=\"/\" translate>{{ 'common.button.back_homepage' }}</button>\n</div>\n"

/***/ }),

/***/ 1670:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\" translate>{{ 'login.sign_up' }}</h4>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"h5\" translate>{{ 'register.terms_and_conditions' }}</div>\n  <div id=\"terms-and-conditions\" class=\"rounded p-2\">\n    <pre>\n    {{ termsAndConditions }}\n    </pre>\n  </div>\n  <div class=\"form-check\">\n  <label class=\"form-check-label d-block my-3\">\n    <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"isAcceptance\" (change)=\"isAcceptance = !isAcceptance\">\n    <span translate>{{ 'register.acceptance' }}</span>\n  </label>\n  <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/register/applyment-form\" [disabled]=\"!isAcceptance\" translate>{{ 'common.button.agree' }}</button>\n</div>\n</div>\n"

/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var empty_1 = __webpack_require__(1674);
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__(89);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map