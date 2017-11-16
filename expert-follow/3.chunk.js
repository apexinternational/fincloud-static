webpackJsonp([3,17],{

/***/ 1412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_apex_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__member_home_page_component__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_info_my_info_component__ = __webpack_require__(1517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_info_change_password_change_password_component__ = __webpack_require__(1515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_info_notification_notification_component__ = __webpack_require__(1547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_portfolio_my_portfolio_component__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_trade_log_my_trade_log_component__ = __webpack_require__(1519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_info_info_course_info_course_component__ = __webpack_require__(1546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_info_info_competition_info_competition_component__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__member_home_page_routing__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_info_edit_member_detail_edit_member_detail_component__ = __webpack_require__(1444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_info_edit_member_detail_confirm_edit_member_detail_confirm_component__ = __webpack_require__(1516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberHomePageModule", function() { return MemberHomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var MemberHomePageModule = /** @class */ (function () {
    function MemberHomePageModule() {
    }
    MemberHomePageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_6__apex_apex_module__["a" /* ApexModule */],
                __WEBPACK_IMPORTED_MODULE_17__member_home_page_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__member_home_page_component__["a" /* MemberHomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__my_info_my_info_component__["a" /* MyInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__my_info_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_12__my_info_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__my_portfolio_my_portfolio_component__["a" /* MyPortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_14__my_trade_log_my_trade_log_component__["a" /* MyTradeLogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_info_info_course_info_course_component__["a" /* MyCoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__my_info_info_competition_info_competition_component__["a" /* MyCompetitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_info_edit_member_detail_confirm_edit_member_detail_confirm_component__["a" /* EditMemberDetailConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_info_edit_member_detail_edit_member_detail_component__["a" /* EditMemberDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__member_home_page_component__["b" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_9__member_home_page_component__["c" /* SumByColumnPipe */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__my_info_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_12__my_info_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_info_info_course_info_course_component__["a" /* MyCoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__my_info_info_competition_info_competition_component__["a" /* MyCompetitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_info_edit_member_detail_confirm_edit_member_detail_confirm_component__["a" /* EditMemberDetailConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_info_edit_member_detail_edit_member_detail_component__["a" /* EditMemberDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["e" /* StockService */],
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["m" /* ExpertService */],
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["n" /* PortfolioService */],
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["l" /* CourseService */],
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["k" /* CompetitionService */],
                __WEBPACK_IMPORTED_MODULE_8__apex_services__["j" /* VtradeService */]
            ]
        })
    ], MemberHomePageModule);
    return MemberHomePageModule;
}());

//# sourceMappingURL=member-home-page.module.js.map

/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var OrderPipe = OrderPipe_1 = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        if (Array.isArray(value)) {
            return this.sortArray(value, expression, reverse);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse) {
        var isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return a > b ? 1 : -1;
            }
            if (!isDeepLink && expression) {
                if (a && b) {
                    return a[expression] > b[expression] ? 1 : -1;
                }
                else {
                    return a > b ? 1 : -1;
                }
            }
            return OrderPipe_1.getValue(a, expression) > OrderPipe_1.getValue(b, expression) ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        var newValue = this.transform(oldValue, lastPredicate, reverse);
        OrderPipe_1.setValue(value, newValue, parsedExpression);
        return value;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    return OrderPipe;
}());
OrderPipe = OrderPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], OrderPipe);
exports.OrderPipe = OrderPipe;
var OrderPipe_1;
//# sourceMappingURL=ngx-order.pipe.js.map

/***/ }),

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_member_detail_confirm_edit_member_detail_confirm_component__ = __webpack_require__(1516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMemberDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditMemberDetailComponent = /** @class */ (function () {
    function EditMemberDetailComponent(modalService, activeModal, auth) {
        var _this = this;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.auth = auth;
        __WEBPACK_IMPORTED_MODULE_3__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getApplymentFormData(event.lang);
        });
    }
    EditMemberDetailComponent.prototype.ngOnInit = function () {
        this._user = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](this.user);
        this.getApplymentFormData(__WEBPACK_IMPORTED_MODULE_3__translation_module__["a" /* TranslationModule */].translate.currentLang);
    };
    EditMemberDetailComponent.prototype.getApplymentFormData = function (lang) {
        var _this = this;
        this.auth.getApplymentFormData(lang).subscribe(function (result) {
            _this.reg = result;
        });
    };
    EditMemberDetailComponent.prototype.confirm = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__edit_member_detail_confirm_edit_member_detail_confirm_component__["a" /* EditMemberDetailConfirmComponent */], { size: 'lg' });
        modalRef.componentInstance.user = this._user;
        modalRef.componentInstance.status = this.status;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__["a" /* User */]) === "function" && _a || Object)
    ], EditMemberDetailComponent.prototype, "user", void 0);
    EditMemberDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-member-detail',
            template: __webpack_require__(1652),
            styles: [__webpack_require__(1591)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], EditMemberDetailComponent);
    return EditMemberDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-member-detail.component.js.map

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by vadimdez on 20/01/2017.
 */
__export(__webpack_require__(1472));
__export(__webpack_require__(1434));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */
var core_1 = __webpack_require__(0);
var ngx_order_pipe_1 = __webpack_require__(1434);
var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    core_1.NgModule({
        declarations: [ngx_order_pipe_1.OrderPipe],
        exports: [ngx_order_pipe_1.OrderPipe]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=ngx-order.module.js.map

/***/ }),

/***/ 1514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services_auth_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberHomePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReplacePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SumByColumnPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberHomePageComponent = /** @class */ (function () {
    function MemberHomePageComponent(auth) {
        this.auth = auth;
    }
    MemberHomePageComponent.prototype.ngOnInit = function () {
    };
    MemberHomePageComponent.prototype.logout = function () {
        this.auth.logout();
    };
    MemberHomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-home-page',
            template: __webpack_require__(1649),
            styles: [__webpack_require__(1611)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], MemberHomePageComponent);
    return MemberHomePageComponent;
    var _a;
}());

var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (item, replace, replacement) {
        if (item === null) {
            return '';
        }
        item = item.replace(replace, replacement);
        return item;
    };
    ReplacePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replace'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ReplacePipe);
    return ReplacePipe;
}());

var SumByColumnPipe = /** @class */ (function () {
    function SumByColumnPipe() {
    }
    SumByColumnPipe.prototype.transform = function (item, column) {
        if (!item) {
            return;
        }
        if (column !== 'RTN') {
            var total_1 = 0;
            item.forEach(function (itemValue) {
                total_1 += parseInt(itemValue[column], 10);
            });
            return total_1;
        }
        else {
            var denominator_1 = 0;
            var molecular_1 = 0;
            var total = 0;
            if (item.length > 0) {
                item.forEach(function (itemValue) {
                    denominator_1 += (parseInt(itemValue.AveCost, 10) * parseInt(itemValue.Amount, 10));
                    molecular_1 += parseInt(itemValue.FloatPL, 10);
                });
                total += (molecular_1 / denominator_1) * 100;
            }
            return total;
        }
    };
    SumByColumnPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sumByColumn'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SumByColumnPipe);
    return SumByColumnPipe;
}());

//# sourceMappingURL=member-home-page.component.js.map

/***/ }),

/***/ 1515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_util_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_validation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_directives_equal_validator_directive__ = __webpack_require__(654);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(activeModal, fb, utilSvc, auth) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.utilSvc = utilSvc;
        this.auth = auth;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            password: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__shared_validation__["a" /* Validation */].RE_PASSWD)
                ]
            ],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
        }, { validator: __WEBPACK_IMPORTED_MODULE_6__shared_directives_equal_validator_directive__["a" /* isEqualValidator */] });
    };
    ChangePasswordComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.auth.changePassword(this.form.value.password)
            .subscribe(function (result) {
            _this.activeModal.close();
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    ChangePasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(1650),
            styles: [__webpack_require__(1589)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_member_detail_edit_member_detail_component__ = __webpack_require__(1444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMemberDetailConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMemberDetailConfirmComponent = /** @class */ (function () {
    function EditMemberDetailConfirmComponent(modalService, activeModal, auth) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.auth = auth;
    }
    EditMemberDetailConfirmComponent.prototype.ngOnInit = function () { };
    EditMemberDetailConfirmComponent.prototype.confirm = function () {
        this.auth.editMemberDetail(this.user);
    };
    EditMemberDetailConfirmComponent.prototype.back = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__edit_member_detail_edit_member_detail_component__["a" /* EditMemberDetailComponent */], { size: 'lg' });
        modalRef.componentInstance.user = this.user;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_objects_user__["a" /* User */]) === "function" && _a || Object)
    ], EditMemberDetailConfirmComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], EditMemberDetailConfirmComponent.prototype, "status", void 0);
    EditMemberDetailConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-member-detail-confirm',
            template: __webpack_require__(1651),
            styles: [__webpack_require__(1590)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], EditMemberDetailConfirmComponent);
    return EditMemberDetailConfirmComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-member-detail-confirm.component.js.map

/***/ }),

/***/ 1517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services_expert_service__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_news_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_services_course_service__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apex_services_competition_service__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apex_services_portfolio_service__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apex_services_util_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__change_password_change_password_component__ = __webpack_require__(1515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_page_home_news_news_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_member_detail_edit_member_detail_component__ = __webpack_require__(1444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyInfoComponent = /** @class */ (function () {
    function MyInfoComponent(modalService, auth, expert, newsSvc, courseService, utilSvc, competitionService, portfolioSvc) {
        var _this = this;
        this.modalService = modalService;
        this.auth = auth;
        this.expert = expert;
        this.newsSvc = newsSvc;
        this.courseService = courseService;
        this.utilSvc = utilSvc;
        this.competitionService = competitionService;
        this.portfolioSvc = portfolioSvc;
        this.userPaid = false;
        this.portfolioData = [];
        this.portfolioDataFloatPL = [];
        this.prod = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production;
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getApplymentFormData(event.lang);
        });
    }
    MyInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getApplymentFormData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.newsSvc.getNews().subscribe(function (news) {
            _this.news = news;
            _this._oriNews = news;
        });
        this.expert.getExpertNotifications().subscribe(function (notifications) {
            _this.expertNotifications = notifications;
            _this._oriExpertNotifications = notifications;
        });
        this.getCourse();
        this.getCompetitions();
        // for auth prority check
        this.auth.userStateChange.subscribe(function (user) {
            _this.user = user;
            if (!user) {
                return;
            }
            var debug = !__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production || user.Permissions.length === 0;
            _this.userPaid = _this.user.mLevel.indexOf('白金會員') > -1 || _this.user.mLevel.indexOf('黃金會員') > -1;
            _this.hasCoursePermission = debug;
            _this.hasCompetitionPermission = debug;
            user.Permissions.forEach(function (p) {
                if (Object.keys(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].permissionMap).indexOf(p) > -1) {
                    switch (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].permissionMap[p].name) {
                        case 'course':
                            _this.hasCoursePermission = true;
                            break;
                        case 'competition':
                            _this.hasCompetitionPermission = true;
                            break;
                    }
                }
            });
            _this.portfolioData = [];
            var _loop_1 = function (i) {
                var data = [];
                _this.portfolioSvc.getPortfolio(i, user.UserId).subscribe(function (portfolio) {
                    portfolio.assets.forEach(function (a) { return data.push({ label: a.CName, value: a.Amount }); });
                    _this.portfolioData[i - 1] = data;
                });
            };
            for (var i = 1; i <= __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].maxPortfolio; i++) {
                _loop_1(i);
            }
            _this.portfolioDataFloatPL = [];
            var _loop_2 = function (i) {
                var data = [];
                _this.portfolioSvc.getPortfolio(i, user.UserId).subscribe(function (portfolio) {
                    portfolio.assets.forEach(function (a) { return data.push({ label: a.CName, value: a.FloatPL }); });
                    _this.portfolioDataFloatPL[i - 1] = data;
                });
            };
            for (var i = 1; i <= __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].maxPortfolio; i++) {
                _loop_2(i);
            }
        });
    };
    MyInfoComponent.prototype.getApplymentFormData = function (lang) {
        var _this = this;
        this.auth.getApplymentFormData(lang)
            .subscribe(function (result) {
            _this.reg = result;
            _this.userGender = _this.reg.gender.find(function (g) { return g.value === _this.user.Sex; }).key;
        }, function (err) {
            _this.utilSvc.showDialog(err.message);
        });
    };
    MyInfoComponent.prototype.getCourse = function () {
        var _this = this;
        this.courseService.getAttendedCourses()
            .subscribe(function (courses) { return _this.courses = courses; }, function (err) { return _this.utilSvc.showDialog(err); });
    };
    MyInfoComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.competitionService.getParticipatedCompetitions()
            .subscribe(function (competitions) { return _this.competitions = competitions; }, function (err) { return _this.utilSvc.showDialog(err); });
    };
    MyInfoComponent.prototype.onFocusAssetOfPortfolio = function (event, id) {
        if (id === 'sharesChart') {
            this.focusAsset = event;
        }
        else {
            this.focusAssetFloatPL = event;
        }
    };
    MyInfoComponent.prototype.onShowChangePassword = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_11__change_password_change_password_component__["a" /* ChangePasswordComponent */]);
    };
    MyInfoComponent.prototype.onClickNews = function (news) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_12__home_page_home_news_news_component__["a" /* NewsComponent */]);
        modalRef.componentInstance.news = news;
    };
    MyInfoComponent.prototype.searchNews = function (keyword) {
        if (keyword) {
            this.news = this._oriNews.filter(function (n) {
                return n.Title.indexOf(keyword) > -1;
            });
        }
        else {
            this.news = this._oriNews;
        }
    };
    MyInfoComponent.prototype.searchExpertNotifications = function (keyword) {
        if (keyword) {
            this.expertNotifications = this._oriExpertNotifications.filter(function (n) {
                return n.content.indexOf(keyword) > -1
                    || n.title.indexOf(keyword) > -1
                    || n.source.indexOf(keyword) > -1;
            });
        }
        else {
            this.expertNotifications = this._oriExpertNotifications;
        }
    };
    MyInfoComponent.prototype.editMemberDetail = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_13__edit_member_detail_edit_member_detail_component__["a" /* EditMemberDetailComponent */], { size: 'lg' });
        modalRef.componentInstance.user = this.user;
    };
    MyInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-info',
            template: __webpack_require__(1655),
            styles: [__webpack_require__(1594)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services_expert_service__["a" /* ExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services_expert_service__["a" /* ExpertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_news_service__["a" /* NewsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__apex_services_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__apex_services_course_service__["a" /* CourseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__apex_services_util_service__["a" /* UtilService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__apex_services_competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__apex_services_competition_service__["a" /* CompetitionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__apex_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__apex_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _h || Object])
    ], MyInfoComponent);
    return MyInfoComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=my-info.component.js.map

/***/ }),

/***/ 1518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_portfolio_service__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apex_services_stock_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyPortfolioComponent = /** @class */ (function () {
    function MyPortfolioComponent(formBuilder, auth, portfolioSvc, stock, modalService, route, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.portfolioSvc = portfolioSvc;
        this.stock = stock;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.asset = new __WEBPACK_IMPORTED_MODULE_5__apex_services_portfolio_service__["b" /* AssetForm */]();
        this.sum = 0;
        this.id = 1;
        __WEBPACK_IMPORTED_MODULE_4__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getTradingData(event.lang);
        });
    }
    MyPortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = Number.parseInt(params['id']);
            if (!Number.isNaN(_this.id)) {
                _this.onSelectPortfolio(_this.id);
            }
            else {
                _this.id = 1;
                _this.onSelectPortfolio(1);
            }
        });
        this.updateAssetForm = this.toUpdateAssetFormGroup([]);
        this.getTradingData(__WEBPACK_IMPORTED_MODULE_4__translation_module__["a" /* TranslationModule */].translate.currentLang);
    };
    MyPortfolioComponent.prototype.getTradingData = function (lang) {
        var _this = this;
        this.portfolioSvc.getTradingData(lang).subscribe(function (result) {
            _this.trading = result;
            // For displaying the default value.
            _this.asset.hsid = _this.trading.trading[0].value;
        });
    };
    MyPortfolioComponent.prototype.onSelectSearchStock = function (event) {
        var _this = this;
        this.stockToAdd = event;
        this.stock.getStockDailyPrice(event.Code).subscribe(function (stockPrice) {
            _this.stockToAdd.LastPrice = stockPrice.sort(function (x, y) { return x.date < y.date ? 1 : -1; })[0].close;
        });
    };
    MyPortfolioComponent.prototype.onSelectPortfolio = function (id) {
        var _this = this;
        this.auth.getLoggedInUser().subscribe(function (user) {
            _this.portfolioSvc.getPortfolio(id, user.UserId).subscribe(function (portfolio) {
                _this.currentPortfolioId = id;
                _this.portfolio = portfolio;
                _this.updateAssetForm = _this.toUpdateAssetFormGroup(portfolio.assets);
            });
        });
    };
    MyPortfolioComponent.prototype.onAddAsset = function () {
        var _this = this;
        this.auth.getLoggedInUser().subscribe(function (user) {
            if (!_this.stockToAdd) {
                var modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_8__shared_components__["a" /* DialogComponent */]);
                modalRef.componentInstance.title = 'error.wrong_stock_symbol.title';
                modalRef.componentInstance.msg = 'error.wrong_stock_symbol.msg';
                return;
            }
            _this.asset.aid = _this.stockToAdd.Aid;
            _this.asset.mpid = _this.currentPortfolioId;
            _this.asset.uid = user.UserId;
            // TODO: Could be changed in the future.
            _this.asset.ccycode = 'NTF';
            _this.portfolioSvc.addAsset(_this.asset).subscribe(function (portfolio) {
                _this.portfolio = portfolio;
                _this.updateAssetForm = _this.toUpdateAssetFormGroup(portfolio.assets);
            });
        });
    };
    MyPortfolioComponent.prototype.onDeleteAssets = function () {
        var _this = this;
        console.log(this.updateAssetForm.value);
        this.auth.getLoggedInUser().subscribe(function (user) {
            var deleteSn = [];
            _this.updateAssetForm.value.assets.filter(function (a) { return a.select; }).forEach(function (a) {
                deleteSn.push(a.sn);
            });
            // TODO: error handle.
            _this.portfolioSvc.delAssets(deleteSn, user.UserId).subscribe(function (result) {
                if (result) {
                    deleteSn.forEach(function (sn) {
                        _this.portfolio.assets = _this.portfolio.assets.filter(function (a) { return a.SN !== sn; });
                    });
                }
            });
        });
    };
    MyPortfolioComponent.prototype.onModifyShares = function (shares, asset) {
        var _this = this;
        this.auth.getLoggedInUser().subscribe(function (user) {
            _this.portfolioSvc.updateAssets(asset.SN, user.UserId, shares, asset.AveCost)
                .subscribe(function (result) {
                _this.onSelectPortfolio(asset.MPortfolioId);
                // TODO: error handle.
            });
        });
    };
    MyPortfolioComponent.prototype.onModifyAvgCost = function (avgCost, asset) {
        var _this = this;
        this.auth.getLoggedInUser().subscribe(function (user) {
            _this.portfolioSvc.updateAssets(asset.SN, user.UserId, asset.Amount, avgCost)
                .subscribe(function (result) {
                _this.onSelectPortfolio(asset.MPortfolioId);
                // TODO: error handle.
            });
        });
    };
    MyPortfolioComponent.prototype.toUpdateAssetFormGroup = function (assets) {
        var array = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormArray */]([]);
        assets.forEach(function (a) {
            var group = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormGroup */]({});
            group.addControl('sn', new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */](a.SN));
            group.addControl('select', new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */](false));
            group.addControl('amount', new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */](a.Amount));
            group.addControl('avgCost', new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */](a.AveCost));
            array.push(group);
        });
        return new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormGroup */]({
            assets: array
        });
    };
    MyPortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-my-portfolio',
            template: __webpack_require__(1657),
            styles: [__webpack_require__(1596)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__apex_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__apex_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__apex_services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__apex_services_stock_service__["a" /* StockService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _g || Object])
    ], MyPortfolioComponent);
    return MyPortfolioComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=my-portfolio.component.js.map

/***/ }),

/***/ 1519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTradeLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyTradeLogComponent = /** @class */ (function () {
    function MyTradeLogComponent(vtradeSvc, modalService) {
        this.vtradeSvc = vtradeSvc;
        this.modalService = modalService;
        this.endDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(new Date(), 'YYYY-MM-DD');
    }
    MyTradeLogComponent.prototype.ngOnInit = function () {
    };
    MyTradeLogComponent.prototype.onSearchLog = function () {
        var _this = this;
        if (!this.startDate || !this.endDate) {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__shared_components__["a" /* DialogComponent */]);
            modalRef.componentInstance.title = 'error.date_range_incorrect.title';
            modalRef.componentInstance.msg = 'error.date_range_incorrect.msg';
            return;
        }
        this.vtradeSvc.getTradeLog(this.startDate, this.endDate).subscribe(function (tradeLog) { return _this.tradeLog = tradeLog; });
    };
    MyTradeLogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-trade-log',
            template: __webpack_require__(1658),
            styles: [__webpack_require__(1597)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services__["j" /* VtradeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services__["j" /* VtradeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
    ], MyTradeLogComponent);
    return MyTradeLogComponent;
    var _a, _b;
}());

//# sourceMappingURL=my-trade-log.component.js.map

/***/ }),

/***/ 1544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_home_page_component__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_info_my_info_component__ = __webpack_require__(1517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_portfolio_my_portfolio_component__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_trade_log_my_trade_log_component__ = __webpack_require__(1519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__member_home_page_component__["a" /* MemberHomePageComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                children: [
                    { path: '', redirectTo: 'myinfo', pathMatch: 'full' },
                    { path: 'myinfo', component: __WEBPACK_IMPORTED_MODULE_2__my_info_my_info_component__["a" /* MyInfoComponent */] },
                    { path: 'myportfolio', component: __WEBPACK_IMPORTED_MODULE_3__my_portfolio_my_portfolio_component__["a" /* MyPortfolioComponent */] },
                    { path: 'mytradelog', component: __WEBPACK_IMPORTED_MODULE_4__my_trade_log_my_trade_log_component__["a" /* MyTradeLogComponent */] }
                ]
            }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=member-home-page.routing.js.map

/***/ }),

/***/ 1545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCompetitionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyCompetitionsComponent = /** @class */ (function () {
    function MyCompetitionsComponent() {
        this.currentPage = 1;
        this.offset = 2;
    }
    MyCompetitionsComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MyCompetitionsComponent.prototype, "competitions", void 0);
    MyCompetitionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-competition',
            template: __webpack_require__(1653),
            styles: [__webpack_require__(1592)]
        }),
        __metadata("design:paramtypes", [])
    ], MyCompetitionsComponent);
    return MyCompetitionsComponent;
}());

//# sourceMappingURL=info-competition.component.js.map

/***/ }),

/***/ 1546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyCoursesComponent = /** @class */ (function () {
    function MyCoursesComponent() {
        this.currentPage = 1;
        this.offset = 2;
    }
    MyCoursesComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MyCoursesComponent.prototype, "courses", void 0);
    MyCoursesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-course',
            template: __webpack_require__(1654),
            styles: [__webpack_require__(1593)]
        }),
        __metadata("design:paramtypes", [])
    ], MyCoursesComponent);
    return MyCoursesComponent;
}());

//# sourceMappingURL=info-course.component.js.map

/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_objects__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(activeModal) {
        this.activeModal = activeModal;
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__apex_objects__["x" /* Notification */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_objects__["x" /* Notification */]) === "function" && _a || Object)
    ], NotificationComponent.prototype, "notification", void 0);
    NotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(1656),
            styles: [__webpack_require__(1595)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _b || Object])
    ], NotificationComponent);
    return NotificationComponent;
    var _a, _b;
}());

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ 1589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "button#submit {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".coursetitle {\n  font-weight: 800; }\n\n.coursebtn {\n  float: right; }\n\n.courseblock {\n  font-size: small; }\n  .courseblock .name {\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".competetitle {\n  font-weight: 800; }\n\n.competebtn {\n  float: right; }\n\n.competeblock {\n  font-size: small; }\n  .competeblock .name {\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "div.container div.row div.card {\n  margin-bottom: 8px; }\n\ndiv.container div.row div.card-block table {\n  font-size: 0.8rem; }\n\n#info {\n  height: 564px; }\n\n#news,\n#expert-notification {\n  height: 200px;\n  overflow: scroll; }\n\ninput#keyword {\n  width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".middle-cell {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1649:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 1650:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" translate>{{ 'common.content.change_password' }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container\">\n    <form (ngSubmit)=\"onChangePassword()\" [formGroup]=\"form\">\n      <div class=\"form-group row\" [class.has-danger]=\"!form.get('password').valid && !form.get('password').pristine\">\n        <label class=\"col-md-5 col-form-label\" for=\"password\" translate>{{ 'common.content.password' }}</label>\n        <div class=\"col-md-7\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 id=\"password\"\n                 formControlName=\"password\">\n          <span *ngIf=\"!form.get('password').pristine\">\n            <small class=\"form-control-feedback\" *ngIf=\"form.get('password').hasError('required')\" translate>{{ 'common.validation.password_required' }}</small>\n            <small class=\"form-control-feedback\" *ngIf=\"form.get('password').hasError('pattern')\" translate>{{ 'common.validation.password_invalid' }}</small>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group row\" [class.has-danger]=\"(!form.get('confirmPassword').valid && !form.get('confirmPassword').pristine) || (form.hasError('isNotEqual') && !form.get('confirmPassword').pristine)\">\n        <label class=\"col-md-5 col-form-label\" for=\"confirmPassword\" translate>{{ 'common.content.confirm_password' }}</label>\n        <div class=\"col-md-7\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 id=\"confirmPassword\"\n                 formControlName=\"confirmPassword\">\n          <span *ngIf=\"!form.get('confirmPassword').pristine\">\n            <small class=\"form-control-feedback\" *ngIf=\"form.get('confirmPassword').hasError('required')\" translate>{{ 'common.validation.password_required' }}</small>\n            <small class=\"form-control-feedback\" *ngIf=\"form.hasError('isNotEqual')\" translate>{{ 'common.validation.password_mismatch' }}</small>\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button type=\"submit\"\n                id=\"submit\"\n                class=\"btn btn-primary mt-3\"\n                [disabled]=\"!form.valid\"\n                translate>\n          {{ 'common.button.submit' }}\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 1651:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" translate>{{ 'common.content.announcement' }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"ml-1\">\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" translate>{{ 'common.content.email' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div>{{ user.Email }}</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" translate>{{ 'common.content.name' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div>{{ user.UserName }}</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" translate>{{ 'common.content.gender' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div>{{ user.Sex }}</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" translate>{{ 'common.content.address' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div>{{ user.Address }}</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" *ngIf=\"status == 1 || status == 2\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" translate>{{ 'common.content.career' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div *ngIf=\"status == 1\" translate>{{ 'common.content.student' }}</div>\n          <div *ngIf=\"status == 2\">{{ user.Career }}</div>\n        </div>\n      </div>\n    </div>\n    <br>\n      <button (click)=\"activeModal.dismiss('Cross click');confirm()\" type=\"button\" class=\"btn btn-secondary offset-md-8\" translate>{{ 'msg.confirm_again' }}</button>\n      <button (click)=\"activeModal.dismiss('Cross click');back()\" type=\"button\" class=\"btn btn-secondary\" translate>{{ 'common.button.edit' }}</button>\n    <br>\n    <br>\n  </form>\n</div>\n"

/***/ }),

/***/ 1652:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" translate>{{ 'common.content.modify_member' }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #registerForm=\"ngForm\">\n    <div class=\"ml-1\">\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <span class=\"text-danger\">*</span>\n          <label class=\"col-form-label\" translate>{{ 'common.content.email' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <div>{{ user.Email }}</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <span class=\"text-danger\">*</span>\n          <label class=\"col-form-label\" for=\"name\" translate>{{ 'common.content.name' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" [ngModel]=\"_user.UserName\" (ngModelChange)=\"_user.UserName = $event\" required>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <span class=\"text-danger\">*</span>\n          <label class=\"col-form-label\" translate>{{ 'common.content.gender' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <label class=\"center-block col-sm-3\" translate><input type=\"radio\" name=\"sex\" [ngModel]=\"_user.Sex\" (ngModelChange)=\"_user.Sex = $event\" value=\"M\" required>{{ 'common.content.male' }}</label>\n          <label class=\"center-block col-sm-3\" translate><input type=\"radio\" name=\"sex\" [ngModel]=\"_user.Sex\" (ngModelChange)=\"_user.Sex = $event\" value=\"F\">{{ 'common.content.female' }}</label>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <span class=\"text-danger\">*</span>\n          <label class=\"col-form-label\" for=\"address\" translate>{{ 'common.content.address' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <input class=\"form-control\" type=\"text\" id=\"address\" name=\"address\" [ngModel]=\"_user.Address\" (ngModelChange)=\"_user.Address = $event\" required>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <span class=\"text-danger\">*</span>\n          <label class=\"col-form-label\" translate>{{ 'common.content.state' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <label class=\"center-block col-sm-3\" translate><input type=\"radio\" [(ngModel)]=\"status\" name=\"status\" value=\"1\" required>{{ 'common.content.student' }}</label>\n          <label class=\"center-block col-sm-3\" translate><input type=\"radio\" [(ngModel)]=\"status\" name=\"status\" value=\"2\">{{ 'common.content.employment' }}</label>\n          <label class=\"center-block col-sm-3\" translate><input type=\"radio\" [(ngModel)]=\"status\" name=\"status\" value=\"3\">{{ 'common.content.retirement' }}</label>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" for=\"career\" translate>{{ 'common.content.career' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <select id=\"career\" class=\"form-control\" required [(ngModel)]=\"_user.Career\" (ngModelChange)=\"_user.Career = $event\" name=\"career\" [disabled]=\"status == 1 || status == 3 || status == null\">\n            <option *ngFor=\"let c of reg?.career\" [value]=\"c.value\">{{ c.key }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" for=\"school\" translate>{{ 'common.content.school' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <input class=\"form-control\" type=\"text\" id=\"school\" name=\"school\" [disabled]=\"status == 3 || status == 2 || status == null\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\">\n          <label class=\"col-form-label\" for=\"department\" translate>{{ 'common.content.department' }}</label>\n        </div>\n        <div class=\"col-md-9\">\n          <input class=\"form-control\" type=\"text\" id=\"department\" name=\"department\" [disabled]=\"status == 3 || status == 2 || status == null\">\n        </div>\n      </div>\n\n    </div>\n    <br>\n      <button (click)=\"activeModal.dismiss('Cross click');confirm()\" type=\"button\" class=\"btn btn-secondary\" style=\"float: right\" [disabled]=\"!registerForm.form.valid\" translate>{{ 'common.button.confirm' }}</button>\n    <br>\n    <br>\n  </form>\n</div>\n"

/***/ }),

/***/ 1653:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-title\"><small class=\"coursetitle\" translate>{{ 'member.compete_title' }}</small>\n  <button *ngIf=\"competitions.length > 0\" class=\"coursebtn btn btn-primary\" routerLink=\"/member/competition\"><small translate>{{ 'member.compete_search' }}</small></button>\n</div>\n<div class=\"card-block p-2\">\n  <button *ngIf=\"competitions.length == 0\" class=\"btn\" routerLink=\"/member/competition\"><small translate>{{ 'member.compete_search' }}</small></button>\n  <div *ngIf=\"competitions.length > 0\">\n\n    <div class=\"courseblock\" *ngFor=\"let row of competitions | orderBy: 'startDate' : reverse | slice: ((currentPage - 1)*offset):currentPage*offset;let i = index\" >\n      <div class=\"name\">{{row.name}}</div>\n      <div><span translate>{{ 'competition.organizer' }}</span>: {{row.organizer}}</div>\n      <div><span translate>{{ 'competition.co_organizer' }}</span>: {{row.coOrganizer}}</div>\n      <div><span translate>{{ 'competition.invite' }}</span>: {{row.time}}</div>\n      <div><span translate>{{ 'competition.date' }}</span>: {{row.startDate}} ~ {{row.endDate}}</div>\n      <hr>\n    </div>\n    <ngb-pagination [collectionSize]=\"(competitions.length*10)/2\" [(page)]=\"currentPage\" [maxSize]=\"3\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 1654:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-title\"><small class=\"competetitle\" translate>{{ 'member.course_title' }}</small>\n  <button *ngIf=\"courses.length > 0\" class=\"competebtn btn btn-primary\" routerLink=\"/member/course\" ><small translate>{{ 'member.course_search' }}</small></button>\n</div>\n<div class=\"card-block p-2\">\n  <button *ngIf=\"courses.length == 0\" class=\"btn\" routerLink=\"/member/course\"><small translate>{{ 'member.course_search' }}</small></button>\n  <div *ngIf=\"courses.length > 0\">\n\n    <div class=\"competeblock\" *ngFor=\"let row of courses | orderBy: 'startDate' : reverse | slice: ((currentPage - 1) * offset) : currentPage*offset; let i = index\">\n      <div class=\"name\">{{ row.name }}</div>\n      <div><span translate>{{ 'course.organization' }}</span>: {{ row.organization }}</div>\n      <div><span translate>{{ 'course.teaching_way' }}</span>: {{ row.teachingWay }}</div>\n      <div><span translate>{{ 'course.duration' }}</span>: {{ row.duration }}</div>\n      <div><span translate>{{ 'common.content.date' }}</span>: {{ row.startDate }} ~ {{ row.endDate }}</div>\n      <hr>\n    </div>\n    <ngb-pagination [collectionSize]=\"(courses.length * 10) / 2\" [(page)]=\"currentPage\" [maxSize]=\"3\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 1655:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 px-1\">\n      <div id=\"info\" class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"card-title\" translate>\n            {{ 'member.member_info' }}\n            <span class=\"btn btn-sm btn-link float-right\" (click)=\"editMemberDetail()\" *ngIf=\"!prod\" translate>{{ 'common.content.modify_member' }}</span>\n          </div>\n          <div class=\"card-block p-2\">\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'common.content.email' }}</small>\n              <div>{{ user?.Email }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'common.content.address' }}</small>\n              <div>{{ user?.Address }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'common.content.gender' }}</small>\n              <div>{{ userGender }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'common.content.career' }}</small>\n              <div>{{ user?.Career }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'member.level' }}</small>\n              <div>{{ user?.mLevel }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <small class=\"d-block\" translate>{{ 'member.payment_status' }}</small>\n              <div *ngIf=\"userPaid\" translate>{{ 'common.content.paid' }}</div>\n              <div *ngIf=\"!userPaid\" translate>{{ 'common.content.unpaid' }}</div>\n            </div>\n            <div class=\"mb-2\">\n              <i class=\"fa fa-edit\"></i>\n              <button class=\"btn btn-link btn-sm p-0\" (click)=\"onShowChangePassword()\" translate>{{ 'common.content.change_password' }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8 px-1\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <span translate>{{ 'member.news' }}</span>\n            <input id=\"keyword\" type=\"text\" class=\"form-control form-control-sm float-right\" placeholder=\"{{ 'common.button.search' | translate }}\" [ngModel]=\"keyword\" (ngModelChange)=\"searchNews($event)\">\n          </div>\n          <div id=\"news\" class=\"card-block p-2\">\n            <table class=\"table table-sm\">\n              <thead>\n              <tr>\n                <th translate>{{ 'common.content.date' }}</th>\n                <th translate>{{ 'common.content.title' }}</th>\n                <th translate>{{ 'common.content.source' }}</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let n of news\" (click)=\"onClickNews(n)\">\n                <td>{{ n.NewsTime | date:'yyyy/MM/dd' }}</td>\n                <td>{{ n.Title }}</td>\n                <td>{{ n.Source }}</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <span translate>{{ 'member.expert_notification' }}</span>\n            <input id=\"keyword\" class=\"form-control form-control-sm float-right\" type=\"text\" placeholder=\"{{ 'common.button.search' | translate }}\" [ngModel]=\"keyword\" (ngModelChange)=\"searchExpertNotifications($event)\">\n          </div>\n          <div id=\"expert-notification\" class=\"card-block p-2\">\n            <!--<table class=\"table table-sm\">-->\n              <!--<thead>-->\n              <!--<tr>-->\n                <!--<th translate>{{ 'common.content.date' }}</th>-->\n                <!--<th translate>{{ 'common.content.title' }}</th>-->\n                <!--<th translate>{{ 'common.content.source' }}</th>-->\n              <!--</tr>-->\n              <!--</thead>-->\n              <!--<tbody>-->\n              <!--<tr *ngFor=\"let n of expertNotifications\">-->\n                <!--<td>{{ n.datetime | date:'yyyy/MM/dd' }}</td>-->\n                <!--<td>{{ n.title }}</td>-->\n                <!--<td>{{ n.source }}</td>-->\n              <!--</tr>-->\n              <!--</tbody>-->\n            <!--</table>-->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-4 px-1\">\n      <div class=\"card\" style=\"height: 400px\">\n        <div class=\"card-block\">\n\n          <app-info-course *ngIf=\"hasCoursePermission\" [courses]=\"courses\"></app-info-course>\n\n        </div>\n      </div>\n      <div class=\"card\" style=\"height: 400px\">\n        <div class=\"card-block\">\n\n          <app-info-competition *ngIf=\"hasCompetitionPermission\" [competitions]=\"competitions\"></app-info-competition>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-8 px-1\">\n      <div class=\"card\" style=\"height: 800px\">\n        <div class=\"card-block\">\n\n          <ngb-tabset>\n\n            <ngb-tab *ngFor=\"let data of portfolioData; let i = index\">\n              <ng-template ngbTabTitle><span translate>{{ 'member.portfolio' }}{{ i + 1 }}</span></ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"p-2\">\n                  <button *ngIf=\"data && data.length == 0\" class=\"btn btn-primary\" [routerLink]=\"['/member/home/myportfolio', {'id': i+1}]\" translate>{{ 'member.portfolio_jump' }}</button>\n\n                  <div *ngIf=\"data && data.length > 0\">\n                    <span translate>{{ 'common.content.stock_name' }}</span>:\n                    <span class=\"mr-2\">{{ focusAsset?.label }}</span>\n                    <span translate>{{ 'common.unit.shares' }}</span>:\n                    <span class=\"mr-2\">{{ focusAsset?.value }}</span>\n                    <app-bar-chart [data]=\"data\" (onFocus)=\"onFocusAssetOfPortfolio($event, 'sharesChart')\"></app-bar-chart>\n                    <span translate>{{ 'common.content.stock_name' }}</span>:\n                    <span class=\"mr-2\">{{ focusAssetFloatPL?.label }}</span>\n                    <span translate>{{ 'competition.rank_remuneration' }}</span>:\n                    <span class=\"mr-2\">{{ focusAssetFloatPL?.value }}</span>\n                    <app-bar-chart [data]=\"portfolioDataFloatPL[i]\" (onFocus)=\"onFocusAssetOfPortfolio($event, 'roiChart')\"></app-bar-chart>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n\n          </ngb-tabset>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 1656:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ notification.title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <table class=\"table table-bordered\">\n    <tbody>\n      <tr>\n        <th translate>{{ 'news.date' }}</th>\n        <td>{{ notification.datetime }}</td>\n      </tr>\n      <tr>\n        <th translate>{{ 'news.body' }}</th>\n        <td>{{ notification.content }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 1657:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <select class=\"form-control form-control-sm mb-2\" [(ngModel)]=\"id\" (change)=\"onSelectPortfolio($event.target.value)\">\n        <option *ngFor=\"let i of [1,2,3,4,5]\" value=\"{{ i }}\"><span translate>{{ 'portfolio.portfolio' }}</span>-{{ i }}</option>\n      </select>\n      <form [formGroup]=\"updateAssetForm\">\n        <table class=\"table table-bordered table-sm\">\n          <thead>\n            <tr>\n              <th translate>{{ 'common.content.delete' }}</th>\n              <th translate>{{ 'common.content.stock_name' }}</th>\n              <th translate>{{ 'portfolio.trade_type' }}</th>\n              <th translate>{{ 'portfolio.price' }}</th>\n              <th translate>{{ 'portfolio.up_down' }}</th>\n              <th translate>{{ 'portfolio.shares' }}</th>\n              <th translate>{{ 'portfolio.avg_cost' }}</th>\n              <th translate>{{ 'portfolio.profit' }}</th>\n              <th translate>{{ 'portfolio.return_on_investment' }}</th>\n            </tr>\n          </thead>\n          <tbody formArrayName=\"assets\">\n            <tr *ngFor=\"let a of portfolio?.assets; let i = index\">\n              <td class=\"middle-cell\" formGroupName=\"{{ i }}\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"select\">\n                </label>\n              </td>\n              <td>{{ a.CName }}</td>\n              <td>{{ a.SName }}</td>\n              <td>{{ a.Price }}</td>\n              <td>{{ a.Change }}</td>\n              <td formGroupName=\"{{ i }}\">\n                <app-inline-edit formControlName=\"amount\" [required]=\"true\" type=\"text\" [(ngModel)]=\"a.Amount\" name=\"amount\" (onSaved)=\"onModifyShares($event, a)\" [re]=\"'^[0-9]+$'\" [errMsg]=\"'portfolio.number_invalid'\"></app-inline-edit>\n              </td>\n              <td formGroupName=\"{{ i }}\">\n                <app-inline-edit formControlName=\"avgCost\" [required]=\"true\" type=\"text\" [(ngModel)]=\"a.AveCost\" name=\"aveCost\" (onSaved)=\"onModifyAvgCost($event, a)\" [re]=\"'^[0-9]+$'\" [errMsg]=\"'portfolio.number_invalid'\"></app-inline-edit>\n              </td>\n              <!--TODO there will be no replace pipe to replace the symbol in the future-->\n              <td>{{ a.FloatPL | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n              <td>{{ a.RTN }}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td>\n                <span>Total</span>\n              </td>\n              <td colspan=\"6\" ></td>\n              <td>{{ portfolio?.assets  | sumByColumn: 'FloatPL' | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n              <td>{{ portfolio?.assets  | sumByColumn: 'RTN' | currency:'NTD':true:'.2' | replace:'NTD':'' }}%</td>\n            </tr>\n          </tfoot>\n        </table>\n      </form>\n      <form (ngSubmit)=\"onAddAsset()\" #addAssetForm=\"ngForm\">\n        <div class=\"form-group row mb-0\">\n          <div class=\"col-md-2 p-2\">\n            <label class=\"m-0\" for=\"keyword\"><small translate>{{ 'common.button.search' }}</small></label>\n            <app-stock-typeahead id=\"keyword\" (onSelectStock)=\"onSelectSearchStock($event)\"></app-stock-typeahead>\n          </div>\n          <div class=\"col-md-1 p-2\">\n            <label class=\"m-0\" for=\"price\"><small translate>{{ 'common.content.stock_name' }}</small></label>\n            <div>{{ stockToAdd?.Name }}</div>\n          </div>\n          <div class=\"col-md-1 p-2\">\n            <label class=\"m-0\" for=\"price\"><small translate>{{ 'portfolio.price' }}</small></label>\n            <div><span *ngIf=\"!stockToAdd?.LastPrice && stockToAdd?.Name\"><i class=\"fa fa-circle-o-notch fa-spin fa-lg fa-fw\"></i></span>{{ stockToAdd?.LastPrice }}</div>\n          </div>\n          <div class=\"col-md-2 p-2\">\n            <label class=\"m-0\" for=\"trading\"><small translate>{{ 'portfolio.trade_type' }}</small></label>\n            <select id=\"trading\" class=\"form-control form-control-sm\" required [(ngModel)]=\"asset.hsid\" name=\"hsid\">\n              <option *ngFor=\"let t of trading?.trading\" [value]=\"t.value\">{{ t.key }}</option>\n            </select>\n          </div>\n          <div class=\"col-md-2 p-2\" [class.has-danger]=\"!avgCost.valid && !avgCost.pristine\">\n            <label class=\"m-0 p-0 col-form-label\" for=\"avg-cost\"><small translate>{{ 'portfolio.avg_cost' }}</small></label>\n            <input class=\"form-control form-control-sm\" type=\"text\" id=\"avg-cost\" [(ngModel)]=\"asset.avecost\" name=\"avecost\" [class.form-control-danger]=\"!avgCost.valid && !avgCost.pristine\" required appNumberValidator #avgCost=\"ngModel\">\n            <small class=\"form-control-feedback\" [hidden]=\"avgCost.valid || avgCost.pristine\" translate>{{ 'common.validation.number_invalid' }}</small>\n          </div>\n          <div class=\"col-md-2 p-2\" [class.has-danger]=\"!shares.valid && !shares.pristine\">\n            <label class=\"m-0 p-0 col-form-label\" for=\"shares\"><small translate>{{ 'portfolio.shares' }}</small></label>\n            <input class=\"form-control form-control-sm\" type=\"text\" id=\"shares\" [(ngModel)]=\"asset.amount\" name=\"amount\" [class.form-control-danger]=\"!shares.valid && !shares.pristine\" required appNumberValidator #shares=\"ngModel\">\n            <small class=\"form-control-feedback\" [hidden]=\"shares.valid || shares.pristine\" translate>{{ 'common.validation.number_invalid' }}</small>\n          </div>\n          <div class=\"col-md-1 p-2\">\n            <label class=\"m-0\"><small>&nbsp;</small></label>\n            <button class=\"btn btn-sm btn-primary w-100\" type=\"submit\" [disabled]=\"!addAssetForm.form.valid\" translate>{{ 'common.button.add' }}</button>\n          </div>\n          <div class=\"col-md-1 p-2\">\n            <label class=\"m-0\"><small>&nbsp;</small></label>\n            <button class=\"btn btn-sm btn-danger w-100\" type=\"button\" (click)=\"onDeleteAssets()\" translate>{{ 'common.content.delete' }}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1658:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <table class=\"table table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th translate>{{ 'vtrade.date' }}</th>\n            <th translate>{{ 'common.content.stock_name' }}</th>\n            <th translate>{{ 'vtrade.currency' }}</th>\n            <th translate>{{ 'vtrade.day_trade' }}</th>\n            <th translate>{{ 'vtrade.deal_shares' }}</th>\n            <th translate>{{ 'vtrade.deal_price' }}</th>\n            <th translate>{{ 'vtrade.profit' }}</th>\n            <th translate>{{ 'vtrade.return_of_investment' }}</th>\n            <th translate>{{ 'common.content.note' }}</th>\n            <th translate>{{ 'common.content.detailed' }}</th>\n          </tr>\n        </thead>\n        <!--<tbody>-->\n          <!--<tr *ngFor=\"let log of tradeLog\">-->\n            <!--<td>{{ log.date }}</td>-->\n            <!--<td>{{ log.stock }}</td>-->\n            <!--<td>{{ log.currency }}</td>-->\n            <!--<td>{{ log.dayTrade }}</td>-->\n            <!--<td>{{ log.shares }}</td>-->\n            <!--<td>{{ log.price }}</td>-->\n            <!--<td>{{ log.profit }}</td>-->\n            <!--<td>{{ log.ROI }}%</td>-->\n            <!--<td>{{ log.note }}</td>-->\n            <!--<td>{{ log.detailed }}</td>-->\n          <!--</tr>-->\n        <!--</tbody>-->\n      </table>\n      <form (ngSubmit)=\"onSearchLog()\" #searchForm=\"ngForm\">\n        <div class=\"form-group row mb-0\">\n          <div class=\"col-md-3 p-2\">\n            <label class=\"m-0\" for=\"start-date\"><small translate>{{ 'common.content.start_date' }}</small></label>\n            <input id=\"start-date\" class=\"form-control form-control-sm\" type=\"date\" [(ngModel)]=\"startDate\" name=\"startDate\">\n          </div>\n          <div class=\"col-md-3 p-2\">\n            <label class=\"m-0\" for=\"end-date\"><small translate>{{ 'common.content.end_date' }}</small></label>\n            <input id=\"end-date\" class=\"form-control form-control-sm\" type=\"date\" [(ngModel)]=\"endDate\" name=\"endDate\">\n          </div>\n          <div class=\"col-md-1 p-2\">\n            <label class=\"m-0\"><small>&nbsp;</small></label>\n            <button class=\"btn btn-primary btn-sm w-100\" translate>{{ 'common.button.search' }}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map