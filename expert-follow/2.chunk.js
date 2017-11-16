webpackJsonp([2,17],{

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_apex_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_services_expert_service__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apex_services_my_expert_service__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expert_page_component__ = __webpack_require__(1501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__expert_page_routing__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(1503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ranking_ranking_component__ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_expert_following_my_expert_following_component__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__announcement_announcement_component__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__heroes_heroes_component__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_expert_following_my_expert_detail_my_expert_detail_component__ = __webpack_require__(1539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_admin_component__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_modal_competition_detail_modal_competition_detail_component__ = __webpack_require__(1504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_modal_ranking_modal_ranking_component__ = __webpack_require__(1505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_value_chart_modal_value_chart_component__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__my_expert_following_modal_portfolio_chart_modal_portfolio_chart_component__ = __webpack_require__(1538);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertPageModule", function() { return ExpertPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ExpertPageModule = /** @class */ (function () {
    function ExpertPageModule() {
    }
    ExpertPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__apex_apex_module__["a" /* ApexModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__expert_page_routing__["a" /* routing */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_8__expert_page_component__["a" /* ExpertPageComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__expert_page_component__["a" /* ExpertPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ranking_ranking_component__["a" /* RankingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__my_expert_following_my_expert_following_component__["a" /* MyExpertFollowingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__announcement_announcement_component__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_14__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_expert_following_my_expert_detail_my_expert_detail_component__["a" /* MyExpertDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_modal_competition_detail_modal_competition_detail_component__["a" /* ModalCompetitionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_modal_ranking_modal_ranking_component__["a" /* ModalRankingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modal_value_chart_modal_value_chart_component__["a" /* ModalValueChartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__my_expert_following_modal_portfolio_chart_modal_portfolio_chart_component__["a" /* ModalPortfolioChartComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__home_modal_competition_detail_modal_competition_detail_component__["a" /* ModalCompetitionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_modal_ranking_modal_ranking_component__["a" /* ModalRankingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modal_value_chart_modal_value_chart_component__["a" /* ModalValueChartComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__apex_services_expert_service__["a" /* ExpertService */],
                __WEBPACK_IMPORTED_MODULE_7__apex_services_my_expert_service__["a" /* MyExpertService */]
            ]
        })
    ], ExpertPageModule);
    return ExpertPageModule;
}());

//# sourceMappingURL=expert-page.module.js.map

/***/ }),

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalValueChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalValueChartComponent = /** @class */ (function () {
    function ModalValueChartComponent(myExpert) {
        this.myExpert = myExpert;
        this.focus = {};
    }
    ModalValueChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myExpert.getValueChartData(this.code, this.expert.username).subscribe(function (result) {
            _this.data = result;
            _this.expertValue = [];
            var users = Object.keys(_this.data);
            if (users.length > 0) {
                var key = users[0];
                _this.expertValue.push({ label: key, data: [] });
                _this.data[key].his.forEach(function (h) {
                    _this.expertValue[0].data.push({
                        date: __WEBPACK_IMPORTED_MODULE_2_moment__(h.date).format('YYYYMMDD'),
                        value: Number(h.value)
                    });
                });
            }
        });
    };
    ModalValueChartComponent.prototype.onExpertValueFocus = function (event) {
        this.focus.date = event['date'];
        this.focus.value = event[this.expert.username];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalValueChartComponent.prototype, "code", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalValueChartComponent.prototype, "expert", void 0);
    ModalValueChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-value-chart',
            template: __webpack_require__(1635),
            styles: [__webpack_require__(1575)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services__["h" /* MyExpertService */]) === "function" && _a || Object])
    ], ModalValueChartComponent);
    return ModalValueChartComponent;
    var _a;
}());

//# sourceMappingURL=modal-value-chart.component.js.map

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services_my_expert_service__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_signalr_service__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(_ngZone, router, myExpertSvc, signalr) {
        this._ngZone = _ngZone;
        this.router = router;
        this.myExpertSvc = myExpertSvc;
        this.signalr = signalr;
        this.competitions = [];
        this.groups = [];
        this.followers = [];
        this.selectedCompetition = { Name: '', VrdCode: '' };
        this.selectedGroup = { GroupName: '', value: 0 };
        this.selectedFollowers = [];
        this.sentMessages = { '': [] };
        this.sent = [];
        this.height = 300;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = '';
        this.myExpertSvc.getCompetitions().subscribe(function (result) {
            if (!result.items1) {
                return;
            }
            _this.competitions = result.items1;
            if (_this.competitions.length === 0) {
                return;
            }
            _this.selectedCompetition = _this.competitions[0];
            _this.signalr.stateChange.subscribe(function (state) {
                if (state) {
                    _this.signalr.changeCompetition(_this.selectedCompetition.VrdCode);
                    _this.onConnect();
                }
                else {
                    _this.signalr.unregister('sentMessage');
                    _this.signalr.unregister('getFollowerList');
                }
            });
        });
    };
    AdminComponent.prototype.onConnect = function () {
        var _this = this;
        this.signalr.register('sentMessage', function (result) {
            if (result.success === false) {
                alert(result.msg);
                return;
            }
            var cg = _this.selectedCompetition.VrdCode + '_' + _this.selectedGroup.value;
            if (typeof (_this.sentMessages[cg]) === 'undefined') {
                _this.sentMessages[cg] = [];
            }
            _this.sentMessages[cg].push(result.msg);
            _this.sent = _this.sentMessages[cg];
            _this.height = _this.sent.length * 50 + 300;
            _this.message = '';
            _this._ngZone.run(function () { });
        });
        this.signalr.register('getFollowerList', function (result) {
            if (false === result.success) {
                alert(result.msg);
                _this._ngZone.run(function () {
                    _this.router.navigate(['/member/expert/home']);
                });
                return;
            }
            if (result.items1 && result.items2) {
                result.items1.forEach(function (g, i) {
                    g.value = i + 1;
                    _this.groups.push(g);
                });
                _this.selectedFollowers = [];
                _this.onSelectGroup(1);
                _this.selectedGroup = _this.groups[0];
            }
            else {
                _this.selectedFollowers = [];
                result.items.forEach(function (f, i) {
                    f.group = _this.selectedGroup.value;
                    _this.selectedFollowers.push(f);
                });
            }
            _this._ngZone.run(function () { });
        });
    };
    AdminComponent.prototype.onSend = function () {
        console.log('sent: ' + this.message);
        if (this.selectedFollowers.length > 0 && this.message.length > 0) {
            this.signalr.send(this.selectedCompetition.VrdCode, this.selectedGroup.GId, this.message);
        }
    };
    AdminComponent.prototype.onSelectCompetition = function (code) {
        this.selectedCompetition = this.competitions.find(function (c) { return c.VrdCode === code; });
        this.signalr.changeCompetition(code);
        this.onSelectGroup(1);
    };
    AdminComponent.prototype.onSelectGroup = function (group) {
        this.selectedGroup = this.groups.find(function (g) { return g.value === Number(group); });
        this.signalr.changeGroup(this.selectedGroup.GId);
        var cg = this.selectedCompetition.VrdCode + '_' + this.selectedGroup.value;
        this.sent = this.sentMessages[cg];
    };
    AdminComponent.prototype.updateFollowerGroup = function (f, gid) {
        var old = this.groups.find(function (g) { return g.value === f.group; }).GId;
        this.signalr.updateGroup(old, gid, f.FlwVrtId);
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(1628),
            styles: [__webpack_require__(1568)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services_my_expert_service__["a" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services_my_expert_service__["a" /* MyExpertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_signalr_service__["a" /* SignalrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_signalr_service__["a" /* SignalrService */]) === "function" && _d || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent(expertAnnouncementSvc) {
        this.expertAnnouncementSvc = expertAnnouncementSvc;
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expertAnnouncementSvc.getAnnouncements().subscribe(function (announcements) { return _this.announcements = announcements; });
    };
    AnnouncementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-announcement',
            template: __webpack_require__(1629),
            styles: [__webpack_require__(1569)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services__["i" /* ExpertAnnouncementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services__["i" /* ExpertAnnouncementService */]) === "function" && _a || Object])
    ], AnnouncementComponent);
    return AnnouncementComponent;
    var _a;
}());

//# sourceMappingURL=announcement.component.js.map

/***/ }),

/***/ 1501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpertPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpertPageComponent = /** @class */ (function () {
    function ExpertPageComponent() {
    }
    ExpertPageComponent.prototype.ngOnInit = function () { };
    ExpertPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-expert-page',
            template: __webpack_require__(1630),
            styles: [__webpack_require__(1570)]
        }),
        __metadata("design:paramtypes", [])
    ], ExpertPageComponent);
    return ExpertPageComponent;
}());

//# sourceMappingURL=expert-page.component.js.map

/***/ }),

/***/ 1502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(1631),
            styles: [__webpack_require__(1571)]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());

//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ 1503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_competition_detail_modal_competition_detail_component__ = __webpack_require__(1504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_ranking_modal_ranking_component__ = __webpack_require__(1505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, cookie, modal, myExpert) {
        this.router = router;
        this.cookie = cookie;
        this.modal = modal;
        this.myExpert = myExpert;
        this.ordinaryCompetitions = [];
        this.expertCompetitions = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myExpert.getCompetitions().subscribe(function (result) {
            console.log(result);
            if (result.items1 && result.items2) {
                _this.ordinaryCompetitions = result.items2.filter(function (i) { return i.Source === false; });
                _this.expertCompetitions = result.items1;
            }
        });
    };
    HomeComponent.prototype.onShowDetail = function (c) {
        var m = this.modal.open(__WEBPACK_IMPORTED_MODULE_5__modal_competition_detail_modal_competition_detail_component__["a" /* ModalCompetitionDetailComponent */], { size: 'lg' });
        m.componentInstance.competition = c;
    };
    HomeComponent.prototype.onShowRank = function (c) {
        var m = this.modal.open(__WEBPACK_IMPORTED_MODULE_6__modal_ranking_modal_ranking_component__["a" /* ModalRankingComponent */], { size: 'lg' });
        m.componentInstance.competition = c;
    };
    HomeComponent.prototype.onRedirect = function (c) {
        this.cookie.put('rank_redirect', c.VrdCode);
        this.router.navigate(['/member/expert/ranking']);
    };
    HomeComponent.prototype.onJoin = function (c) {
        var ret = confirm('您確定要參加' + c.Name + '嗎？');
        if (!ret) {
            return;
        }
        this.myExpert.joinCompetition(c.VrdCode).subscribe(function (result) {
            console.log(result);
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(1632),
            styles: [__webpack_require__(1572)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services__["h" /* MyExpertService */]) === "function" && _d || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCompetitionDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalCompetitionDetailComponent = /** @class */ (function () {
    function ModalCompetitionDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalCompetitionDetailComponent.prototype, "competition", void 0);
    ModalCompetitionDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-modal-competition-detail',
            template: __webpack_require__(1633),
            styles: [__webpack_require__(1573)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object])
    ], ModalCompetitionDetailComponent);
    return ModalCompetitionDetailComponent;
    var _a;
}());

//# sourceMappingURL=modal-competition-detail.component.js.map

/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRankingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalRankingComponent = /** @class */ (function () {
    function ModalRankingComponent(activeModal, myExpert) {
        this.activeModal = activeModal;
        this.myExpert = myExpert;
    }
    ModalRankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myExpert.getRanking(this.competition.VrdCode).subscribe(function (result) {
            console.log(result);
            if (result.items) {
                _this.ranking = result.items;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalRankingComponent.prototype, "competition", void 0);
    ModalRankingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-modal-ranking',
            template: __webpack_require__(1634),
            styles: [__webpack_require__(1574)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services__["h" /* MyExpertService */]) === "function" && _b || Object])
    ], ModalRankingComponent);
    return ModalRankingComponent;
    var _a, _b;
}());

//# sourceMappingURL=modal-ranking.component.js.map

/***/ }),

/***/ 1506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_value_chart_modal_value_chart_component__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExpertFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyExpertFollowingComponent = /** @class */ (function () {
    function MyExpertFollowingComponent(_ngZone, modal, myExpert, signalr) {
        this._ngZone = _ngZone;
        this.modal = modal;
        this.myExpert = myExpert;
        this.signalr = signalr;
        this.values = {};
    }
    MyExpertFollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myExpert.getCompetitions().subscribe(function (result) {
            if (!result.items1) {
                return;
            }
            _this.competitions = result.items1;
            if (_this.competitions.length > 0) {
                var code = _this.competitions[0].VrdCode;
                _this.onSelectCompetition(code);
            }
        });
        this.signalr.register('subscribeMessage', function (result) {
            if (result.success === false) {
                return;
            }
            _this._ngZone.run(function () {
                _this.fetchFollowing();
            });
        });
    };
    MyExpertFollowingComponent.prototype.onSelectCompetition = function (code) {
        this.code = code;
        this.selected = this.competitions.find(function (c) { return c.VrdCode === code; });
        this.fetchFollowing();
        this.fetchWatching();
    };
    MyExpertFollowingComponent.prototype.fetchFollowing = function () {
        var _this = this;
        this.myExpert.getFollowing(this.code).subscribe(function (result) {
            var usernames = [];
            result.items.forEach(function (i) {
                usernames.push(i.username);
            });
            _this.fetchValueChartData(usernames);
            _this.following = result.items;
        });
    };
    MyExpertFollowingComponent.prototype.fetchWatching = function () {
        var _this = this;
        this.myExpert.getWatching(this.code).subscribe(function (result) {
            var usernames = [];
            result.items.forEach(function (i) {
                i.stockNames = i.stockName ? i.stockName.split('<br/>') : [];
                usernames.push(i.username);
            });
            _this.fetchValueChartData(usernames);
            _this.watching = result.items;
        });
    };
    MyExpertFollowingComponent.prototype.fetchValueChartData = function (usernames) {
        var _this = this;
        if (!usernames.length) {
            return;
        }
        this.myExpert.getValueChartData(this.code, usernames).subscribe(function (data) {
            _this.values = _this.values || {};
            Object.keys(data).forEach(function (username) {
                _this.values[username] = [];
                data[username].his.forEach(function (h) {
                    _this.values[username].push({ date: __WEBPACK_IMPORTED_MODULE_4_moment__(h.date).format('YYYYMMDD'), value: Number(h.value) });
                });
            });
        });
    };
    MyExpertFollowingComponent.prototype.onShowValueChart = function (expert) {
        var m = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modal_value_chart_modal_value_chart_component__["a" /* ModalValueChartComponent */], { size: 'lg' });
        m.componentInstance.code = this.code;
        m.componentInstance.expert = expert;
    };
    MyExpertFollowingComponent.prototype.onClickDetail = function (expert) {
        this.selectedExpert = expert;
        this.showDetail = true;
    };
    MyExpertFollowingComponent.prototype.onClickUnwatch = function (username) {
        var _this = this;
        this.myExpert.unwatch(this.code, username).subscribe(function (result) {
            if (result.success) {
                _this.fetchWatching();
            }
        });
    };
    MyExpertFollowingComponent.prototype.onClickFollow = function (username) {
        if (this.signalr.isConnected()) {
            this.signalr.follow(this.code, username);
        }
        else {
            console.log('signalr is not connected');
        }
    };
    MyExpertFollowingComponent.prototype.onClickUnfollow = function (expert) {
        var ret = confirm('您確定要取消追隨' + expert.name + '嗎？');
        if (!ret) {
            return;
        }
        if (this.signalr.isConnected()) {
            this.signalr.unfollow(this.code, expert.username);
        }
        else {
            console.log('signalr is not connected');
        }
    };
    MyExpertFollowingComponent.prototype.onBack = function () {
        this.showDetail = false;
    };
    MyExpertFollowingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-expert-following',
            template: __webpack_require__(1638),
            styles: [__webpack_require__(1578)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services__["h" /* MyExpertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services__["b" /* SignalrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services__["b" /* SignalrService */]) === "function" && _d || Object])
    ], MyExpertFollowingComponent);
    return MyExpertFollowingComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=my-expert-following.component.js.map

/***/ }),

/***/ 1507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_value_chart_modal_value_chart_component__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RankingComponent = /** @class */ (function () {
    function RankingComponent(_ngZone, route, cookie, modal, myExpert, signalr) {
        this._ngZone = _ngZone;
        this.route = route;
        this.cookie = cookie;
        this.modal = modal;
        this.myExpert = myExpert;
        this.signalr = signalr;
        this.values = {};
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sort = {
            column: 'rank',
            direction: 1
        };
        this.myExpert.getCompetitions().subscribe(function (result) {
            if (!result.items1) {
                return;
            }
            _this.competitions = result.items1;
            if (_this.competitions.length > 0) {
                var code = _this.cookie.get('rank_redirect');
                if (typeof (code) === 'undefined') {
                    _this.onSelectCompetition(_this.competitions[0].VrdCode);
                }
                else {
                    _this.onSelectCompetition(code);
                    _this.cookie.remove('rank_redirect');
                }
            }
        });
        this.signalr.register('subscribeMessage', function (result) {
            if (result.success === false) {
                return;
            }
            _this._ngZone.run(function () {
                _this.fetchRanking();
            });
        });
    };
    RankingComponent.prototype.onSelectCompetition = function (code) {
        this.code = code;
        this.fetchRanking();
    };
    RankingComponent.prototype.fetchRanking = function () {
        var _this = this;
        this.myExpert.getExpertRanking(this.code).subscribe(function (result) {
            if (!result.items) {
                return;
            }
            var usernames = [];
            result.items.forEach(function (i) {
                i.stockNames = i.stockName ? i.stockName.split('<br/>') : [];
                usernames.push(i.username);
            });
            _this.myExpert.getValueChartData(_this.code, usernames).subscribe(function (data) {
                _this.values = {};
                Object.keys(data).forEach(function (username) {
                    _this.values[username] = [];
                    data[username].his.forEach(function (h) {
                        _this.values[username].push({ date: __WEBPACK_IMPORTED_MODULE_6_moment__(h.date).format('YYYYMMDD'), value: Number(h.value) });
                    });
                });
            });
            _this.ranking = result.items.sort(function (a, b) { return a.rank - b.rank; });
        });
    };
    RankingComponent.prototype.onSort = function (column) {
        var _this = this;
        if (this.sort.direction === 1) {
            this.ranking = this.ranking.sort(function (a, b) {
                return _this.processSort(column, b, a);
            });
        }
        else {
            this.ranking = this.ranking.sort(function (a, b) {
                return _this.processSort(column, a, b);
            });
        }
        this.sort.column = column;
        this.sort.direction = this.sort.direction * -1;
    };
    RankingComponent.prototype.onClickWatch = function (username) {
        var _this = this;
        this.myExpert.watch(this.code, username).subscribe(function (result) {
            if (result.success) {
                _this.fetchRanking();
            }
        });
    };
    RankingComponent.prototype.onClickUnwatch = function (username) {
        var _this = this;
        this.myExpert.unwatch(this.code, username).subscribe(function (result) {
            if (result.success) {
                _this.fetchRanking();
            }
        });
    };
    RankingComponent.prototype.onClickFollow = function (username) {
        if (this.signalr.isConnected()) {
            this.signalr.follow(this.code, username);
            //this.fetchRanking();
        }
        else {
            console.log('signalr is not connected');
        }
    };
    RankingComponent.prototype.getSortIcon = function (column) {
        var s = (this.sort.direction === 1) ? 'sort-asc' : 'sort-desc';
        var a = (this.sort.column === column) ? '' : ' sort-icon-white';
        return s + a;
    };
    RankingComponent.prototype.onShowValueChart = function (expert) {
        var m = this.modal.open(__WEBPACK_IMPORTED_MODULE_5__modal_value_chart_modal_value_chart_component__["a" /* ModalValueChartComponent */], { size: 'lg' });
        m.componentInstance.code = this.code;
        m.componentInstance.expert = expert;
    };
    RankingComponent.prototype.processSort = function (column, a, b) {
        a = a[column];
        b = b[column];
        if (column === 'rate' && a.indexOf('%') > -1 && b.indexOf('%') > -1) {
            return Number(a.slice(0, -1)) - Number(b.slice(0, -1));
        }
        else {
            return Number(a) - Number(b);
        }
    };
    RankingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(1639),
            styles: [__webpack_require__(1579)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services__["h" /* MyExpertService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__apex_services__["b" /* SignalrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__apex_services__["b" /* SignalrService */]) === "function" && _f || Object])
    ], RankingComponent);
    return RankingComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=ranking.component.js.map

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expert_page_component__ = __webpack_require__(1501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(1503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ranking_ranking_component__ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_expert_following_my_expert_following_component__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__announcement_announcement_component__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_heroes_component__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__(1499);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__expert_page_component__["a" /* ExpertPageComponent */],
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'ranking', component: __WEBPACK_IMPORTED_MODULE_3__ranking_ranking_component__["a" /* RankingComponent */] },
            { path: 'my-expert-following', component: __WEBPACK_IMPORTED_MODULE_4__my_expert_following_my_expert_following_component__["a" /* MyExpertFollowingComponent */] },
            { path: 'announcement', component: __WEBPACK_IMPORTED_MODULE_5__announcement_announcement_component__["a" /* AnnouncementComponent */] },
            { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_6__heroes_heroes_component__["a" /* HeroesComponent */] },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=expert-page.routing.js.map

/***/ }),

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPortfolioChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalPortfolioChartComponent = /** @class */ (function () {
    function ModalPortfolioChartComponent() {
    }
    ModalPortfolioChartComponent.prototype.ngOnInit = function () {
    };
    ModalPortfolioChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-portfolio-chart',
            template: __webpack_require__(1636),
            styles: [__webpack_require__(1576)]
        }),
        __metadata("design:paramtypes", [])
    ], ModalPortfolioChartComponent);
    return ModalPortfolioChartComponent;
}());

//# sourceMappingURL=modal-portfolio-chart.component.js.map

/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExpertDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyExpertDetailComponent = /** @class */ (function () {
    function MyExpertDetailComponent(myExpert) {
        this.myExpert = myExpert;
        this.onBack = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.total = {};
        this.pie = { data: [], width: 100, height: 100 };
        this.line = { data: [], width: 400, height: 100 };
    }
    MyExpertDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myExpert.getExpertDetail(this.code, this.expert.username).subscribe(function (result) {
            _this.fillDetail(result);
        });
        this.myExpert.getValueChartData(this.code, this.expert.username).subscribe(function (result) {
            var users = Object.keys(result);
            if (users.length > 0) {
                var key = users[0];
                _this.line.data = [];
                result[key].his.forEach(function (h) {
                    _this.line.data.push({
                        date: __WEBPACK_IMPORTED_MODULE_2_moment__(h.date).format('YYYYMMDD'),
                        value: Number(h.value)
                    });
                });
                console.log(_this.line.data);
            }
        });
    };
    MyExpertDetailComponent.prototype.onClickBack = function () {
        this.onBack.emit();
    };
    MyExpertDetailComponent.prototype.fillDetail = function (result) {
        var _this = this;
        this.selected = result;
        if (this.selected.items4) {
            this.total = this.selected.items4[0].Total[0];
            var info_1 = this.selected.items4[0].Info;
            this.pie.data = [];
            Object.keys(info_1).forEach(function (k) {
                _this.pie.data.push({ label: k, value: info_1[k].holdlevel });
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyExpertDetailComponent.prototype, "code", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyExpertDetailComponent.prototype, "expert", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyExpertDetailComponent.prototype, "competition", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], MyExpertDetailComponent.prototype, "onBack", void 0);
    MyExpertDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-expert-detail',
            template: __webpack_require__(1637),
            styles: [__webpack_require__(1577)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services__["h" /* MyExpertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services__["h" /* MyExpertService */]) === "function" && _b || Object])
    ], MyExpertDetailComponent);
    return MyExpertDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=my-expert-detail.component.js.map

/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".follower-count {\n  padding: 8px 12px;\n  border-bottom: 1px solid #eee; }\n\n.competition {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n\n.sent-message {\n  height: 300px;\n  overflow-y: scroll; }\n\n.follower-list {\n  padding: 10px;\n  height: 333px;\n  overflow-y: scroll; }\n\n.message-input {\n  height: 60px;\n  resize: none; }\n\n.group-display {\n  color: blue;\n  text-align: center; }\n\n.group-radio {\n  margin: 0 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".vc-container {\n  margin: 10px 7px; }\n\n.vc-header {\n  margin: 5px 0;\n  font-size: 24px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".info {\n  height: 200px; }\n\n.line-chart {\n  height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".value-chart {\n  margin: auto;\n  padding: 0;\n  cursor: pointer;\n  width: 150px;\n  height: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".sort-icon-white {\n  color: white; }\n\n.column-clickable {\n  cursor: pointer;\n  color: royalblue;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.value-chart {\n  margin: auto;\n  padding: 0;\n  cursor: pointer;\n  width: 150px;\n  height: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1628:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">{{ selectedCompetition.Name + ' ' + selectedGroup.GroupName + ' 發出訊息' }}</div>\n        <div class=\"card-block sent-message\" [scrollTop]=\"height\">\n          <div *ngFor=\"let s of sent\">{{ s }}</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <textarea class=\"form-control message-input\" [value]=\"message\" (input)=\"message=$event.target.value\" placeholder=\"say something\"></textarea>\n      </div>\n      <div class=\"form-inline\">\n        <select class=\"form-control competition\" (change)=\"onSelectCompetition($event.target.value)\">\n          <option *ngFor=\"let c of competitions\" value=\"{{ c.VrdCode }}\">{{ c.Name }}</option>\n        </select>\n        <select class=\"form-control\" (change)=\"onSelectGroup($event.target.value)\">\n          <option *ngFor=\"let g of groups\" value=\"{{ g.value }}\">{{ g.GroupName }}</option>\n        </select>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onSend()\" [disabled]=\"selectedFollowers.length === 0 || message.length === 0\">發送訊息</button>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">{{ selectedCompetition.Name }}</div>\n        <div class=\"row follower-count\">\n          <div class=\"col-md-8\">\n            <div>\n              追隨專家您的總人數：<span>{{ followers.length }}</span> 人\n            </div>\n            <div>\n              目前群組人數：<span>{{ selectedFollowers.length }}</span> 人\n            </div>\n          </div>\n          <div class=\"group-display col-md-4\">\n            <div>{{ selectedGroup.GroupName }}</div>\n            <span *ngFor=\"let g of groups\">\n              <i class=\"fa {{ g.GroupName === selectedGroup.GroupName ? 'fa-circle' : 'fa-circle-thin' }}\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n        </div>\n        <div class=\"follower-list\">\n          <div class=\"form-check\" *ngFor=\"let f of selectedFollowers\">\n            <span>{{ f.UserName }}</span>\n            <span>群組：</span>\n            <span class=\"group-radio\" *ngFor=\"let g of groups\"><input type=\"radio\" name=\"{{ 'group-' + f.FlwVrtId }}\" [value]=\"g.GId\" [checked]=\"f.group === g.value\" (change)=\"updateFollowerGroup(f, $event.target.value)\" /></span>\n          </div>\n        </div><!-- follower-list -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1629:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">系統公告</div>\n        <!-- <div class=\"card-block\"> -->\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>主題</th>\n                <th>點閱數</th>\n                <th>提供機構</th>\n                <th>發表日期</th>\n                <th>時間</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let a of announcements\">\n              <tr>\n                <td>{{ a.subject }}</td>\n                <td>{{ a.view }}</td>\n                <td>{{ a.organizer }}</td>\n                <td>{{ a.publishDate }}</td>\n                <td>{{ a.publishTime }}</td>\n              </tr>\n            </tbody>\n          </table>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1630:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 1631:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1632:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\" translate>素人爭霸戰</div>\n        <div class=\"card-block\" *ngFor=\"let c of ordinaryCompetitions\">\n          <div class=\"card\">\n            <div class=\"card-header\">{{ c.Name }}</div>\n            <div class=\"card-block\">\n              <div>\n                <span translate>{{ 'competition.organizer' }}</span>:\n                <span>{{ c.Org }}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.co_organizer' }}</span>:\n                <span>{{ c.CoOrg}}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.invite' }}</span>:\n                <span>{{ c.Invitees }}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.date' }}</span>:\n                <span>{{ c.Dur }}</span>\n              </div>\n              <div class=\"btn-group w-100\">\n                <button class=\"btn btn-secondary w-50\" (click)=\"onShowDetail(c)\" translate>{{ 'common.button.detail' }}</button>\n                <button class=\"btn btn-secondary w-50\" (click)=\"onShowRank(c)\" translate>{{ 'competition.rank' }}</button>\n                <button class=\"btn btn-secondary w-50\" (click)=\"onJoin(c)\" translate>報名參加</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\" translate>菁英名人賽</div>\n        <div class=\"card-block\" *ngFor=\"let c of expertCompetitions\">\n          <div class=\"card\">\n            <div class=\"card-header\">{{ c.Name }}</div>\n            <div class=\"card-block\">\n              <div>\n                <span translate>{{ 'competition.organizer' }}</span>:\n                <span>{{ c.Org }}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.co_organizer' }}</span>:\n                <span>{{ c.CoOrg}}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.invite' }}</span>:\n                <span>{{ c.Invitees }}</span>\n              </div>\n              <div>\n                <span translate>{{ 'competition.date' }}</span>:\n                <span>{{ c.Dur }}</span>\n              </div>\n              <div class=\"btn-group w-100\">\n                <button class=\"btn btn-secondary w-50\" (click)=\"onShowDetail(c)\" translate>{{ 'common.button.detail' }}</button>\n                <button class=\"btn btn-secondary w-50\" (click)=\"onRedirect(c)\" translate>{{ 'competition.rank' }}</button>\n                <button class=\"btn btn-secondary w-50\" (click)=\"onJoin(c)\" translate>報名參加</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1633:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" >\n  <h4 class=\"modal-title\" translate>{{ 'competition.detail_competes' }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"card-header\">{{ competition.name }}</div>\n  <table class=\"table table-bordered\">\n    <tbody>\n    <tr>\n      <th translate>{{ 'competition.organizer' }}</th>\n      <td>{{ competition.organizer }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.co_organizer' }}</th>\n      <td>{{ competition.coOrganizer }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.invite' }}</th>\n      <td>{{ competition.invitees }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.date' }}</th>\n      <td>{{ competition.duration }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.detdur' }}</th>\n      <td>\n        <!--<div class=\"competition-date\" *ngFor=\"let row of competition.schedule\">{{ row.title }}: {{ row.date }}<br></div>-->\n        {{ competition.detdur }}\n      </td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.content' }}</th>\n      <td >\n        <!--<div class=\"competition-date\" *ngFor=\"let row of competition.awards\">{{ row.date }}: {{ row.title }} <br></div>-->\n        {{ competition.info }}\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n<div class=\"modal-body\">\n  <div class=\"card-header\" translate>{{ 'competition.rule' }}</div>\n  <div class=\"rounded p-2 rule\">\n    <pre>\n      {{ competition.rule }}\n    </pre>\n  </div>\n</div>\n<div class=\"modal-body\">\n  <div class=\"card-header\" translate>{{ 'competition.contact' }}</div>\n  <div class=\"rounded p-2 information\">\n    <pre>\n      {{ competition.contacts }}\n    </pre>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 1634:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" >\n  <h4 class=\"modal-title w-100\" translate>{{ 'competition.detail_competes' }}\n    <span class=\"competition-time float-right\" translate>{{ 'competition.time' }}</span>\n  </h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <table class=\"table table-bordered\">\n    <tbody>\n    <tr>\n      <th colspan=\"2\">{{ competition.name }}</th>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.organizer' }}</th>\n      <td>{{ competition.organizer }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.co_organizer' }}</th>\n      <td>{{ competition.coOrganizer }}</td>\n    </tr>\n    <tr>\n      <th translate>{{ 'competition.date' }}</th>\n      <td>{{ competition.dur }}</td>\n    </tr>\n    </tbody>\n  </table>\n  <table class=\"table table-bordered\">\n    <thead>\n      <!--<tr>-->\n        <!--<th colspan=\"3\" translate>{{ 'competition.rank' }}</th>-->\n      <!--</tr>-->\n      <tr>\n        <th>排名</th>\n        <th>競賽者帳號</th>\n        <th>資產淨值</th>\n        <th>投資績效</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let u of ranking\">\n        <td>{{ u.rank }}</td>\n        <td>{{ u.username }}</td>\n        <td>{{ u.pflvalue }}</td>\n        <td>{{ u.rate }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ 1635:
/***/ (function(module, exports) {

module.exports = "<div class=\"vc-container\">\n  <div class=\"vc-header\">{{ expert.username }} 淨值曲線圖</div>\n  <span>日期：</span>\n  <span>{{ focus?.date }}</span>\n  <span>淨值：</span>\n  <span>{{ focus?.value }}</span>\n  <app-line-chart [series]=\"expertValue\" (onFocus)=\"onExpertValueFocus($event)\"></app-line-chart>\n</div>\n"

/***/ }),

/***/ 1636:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" >\n  <h4 class=\"modal-title w-100\" translate>專家投資組合圓餅圖</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <app-pie-chart [data]=\"pie.data\" [width]=\"pie.width\" [height]=\"pie.height\"></app-pie-chart>\n</div>\n\n"

/***/ }),

/***/ 1637:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div>{{ competition.Name }}</div>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"back btn btn-secondarybtn btn-secondary pull-right\" (click)=\"onClickBack();\" translate>{{ 'common.button.back' }}</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">專家資訊與分析</div>\n      <div class=\"card-block info\">\n        <div class=\"d-inline-block\">\n          <div><span>專家名稱：</span><span>{{ expert.name }}</span></div>\n          <div><span>總已實現損益：</span><span>{{ total.totalrealpl | currency:'NTD' | replace:'NTD':'' }}</span></div>\n          <div><span>總未實現損益：</span><span>{{ total.totalunrealpl | currency:'NTD' | replace:'NTD':'' }}</span></div>\n          <div><span>總市值：</span><span>{{ total.totalmarketvalue | currency:'NTD' | replace:'NTD':'' }}</span></div>\n          <div><span>總持股水位：</span><span>{{ total.totalholdlevel | currency:'NTD' | replace:'NTD':'' }}</span></div>\n          <div><span>總報酬率：</span><span>{{ total.returnpl | currency:'NTD' | replace:'NTD':'' }}</span></div>\n        </div>\n        <button class=\"btn btn-secondary pull-right\">專家投組圓餅圖</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">專家資訊與分析</div>\n      <div class=\"line-chart\">\n        <app-simple-line-chart [data]=\"line.data\"></app-simple-line-chart>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ngb-tabset>\n      <ngb-tab>\n        <ng-template ngbTabTitle><span translate>投資部位查詢</span></ng-template>\n        <ng-template ngbTabContent>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>商品名稱</th>\n                <th>買賣類型</th>\n                <th>市價</th>\n                <th>漲跌</th>\n                <th>市值</th>\n                <th>平圴成本</th>\n                <th>持有數量</th>\n                <th>帳面損益</th>\n                <th>預估報酬率</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let i of selected?.items1\">\n              <tr>\n                <td>{{ i.name }}</td>\n                <td>{{ i.className }}</td>\n                <td>{{ i.price | currency:'NTD' | replace:'NTD':'' }}</td>\n                <td>{{ i.QQ }}</td>\n                <td>{{ i.value  | currency:'NTD' | replace:'NTD':'' }}</td>\n                <td>{{ i.cost  | currency:'NTD' | replace:'NTD':'' }}</td>\n                <td>{{ i.hold | currency:'NTD' | replace:'NTD':'' }}</td>\n                <td>{{ i.pl | currency:'NTD' | replace:'NTD':'' }}</td>\n                <td>{{ (i.price / i.cost - 1) * 100 | currency:'NTD' | replace:'NTD':'' }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle><span translate>委託回報</span></ng-template>\n        <ng-template ngbTabContent>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>商品代碼</th>\n                <th>商品名稱</th>\n                <th>買賣種類</th>\n                <th>掛單類型</th>\n                <th>委託價格</th>\n                <th>撮合量/委託量</th>\n                <th>委託狀態</th>\n                <th>委託時間</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let i of selected?.items2\">\n              <tr>\n                <td>{{ i.code }}</td>\n                <td>{{ i.name }}</td>\n                <td>{{ i.bsName }}</td>\n                <td>{{ i.otName }}</td>\n                <td>{{ i.price }}</td>\n                <td>\n                  <span>{{ i.orgvol - i.volume }}</span>/<span>{{ i.volume }}</span>\n                </td>\n                <td>{{ i.stsName }}</td>\n                <td>{{ i.time }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle><span translate>成交回報</span></ng-template>\n        <ng-template ngbTabContent>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>商品代碼</th>\n                <th>商品名稱</th>\n                <th>買賣種類</th>\n                <th>掛單類型</th>\n                <th>成交價格</th>\n                <th>交易稅</th>\n                <th>手續費</th>\n                <th>成交量</th>\n                <th>成交時間</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let i of selected?.items3\">\n              <tr>\n                <td>{{ i.code }}</td>\n                <td>{{ i.name }}</td>\n                <td>{{ i.bsName }}</td>\n                <td>{{ i.otName }}</td>\n                <td>{{ i.price }}</td>\n                <td>{{ i.tax }}</td>\n                <td>{{ i.fee }}</td>\n                <td>{{ i.volume }}</td>\n                <td>{{ i.time }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ngb-tab>\n      <!--\n      <ngb-tab>\n        <ng-template ngbTabTitle><span translate>歷史已實現損益</span></ng-template>\n        <ng-template ngbTabContent>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>交易日期</th>\n                <th>商品名稱</th>\n                <th>交易種類</th>\n                <th>成交股數</th>\n                <th>成交價格</th>\n                <th>損益</th>\n                <th>報酬率</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let i of selected?.items4\">\n              <tr>\n                <td>{{ i.date }}</td>\n                <td>{{ i.name }}</td>\n                <td>{{ i.type }}</td>\n                <td>{{ i.k4 }}</td>\n                <td>{{ i.k5 }}</td>\n                <td>{{ i.k6 }}</td>\n                <td>{{ i.rate }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ng-template>\n      </ngb-tab>\n      -->\n    </ngb-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ 1638:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div *ngIf=\"!showDetail\">\n            <select class=\"form-control form-control-sm mb-2\" (change)=\"onSelectCompetition($event.target.value)\">\n              <option *ngFor=\"let c of competitions\" value=\"{{ c.VrdCode }}\"><span>{{ c.Name }}</span></option>\n            </select>\n            <ngb-tabset>\n              <ngb-tab>\n                <ng-template ngbTabTitle><span translate>已追隨名單</span></ng-template>\n                <ng-template ngbTabContent>\n                  <table class=\"table table-bordered\">\n                    <thead>\n                      <tr>\n                        <th>排名</th>\n                        <th>專家名稱</th>\n                        <th>資產淨值</th>\n                        <th>本日淨值增減幅</th>\n                        <th>持股水位</th>\n                        <th>績效曲線</th>\n                        <th>詳細資料</th>\n                        <th>取消追隨</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let f of following\">\n                        <td>{{ f.rank }}</td>\n                        <td>{{ f.name }}</td>\n                        <td>{{ f.pflvalue }}</td>\n                        <td><span>缺 pvchange</span></td>\n                        <td><span>缺 totalholdlevel</span></td>\n                        <td>\n                          <div class=\"value-chart\" (click)=\"onShowValueChart(f)\">\n                            <app-simple-line-chart [data]=\"values[f.username]\"></app-simple-line-chart>\n                          </div>\n                        </td>\n                        <td>\n                          <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"onClickDetail(f)\" translate>深入了解</button>\n                        </td>\n                        <td>\n                          <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"onClickUnfollow(f)\" translate>取消追隨</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </ng-template>\n              </ngb-tab>\n              <ngb-tab>\n                <ng-template ngbTabTitle><span translate>觀察名單</span></ng-template>\n                <ng-template ngbTabContent>\n                  <table class=\"table table-bordered\">\n                    <thead>\n                      <tr>\n                        <th>排名</th>\n                        <th>專家名稱</th>\n                        <th>資產淨值</th>\n                        <th>投資績效</th>\n                        <th>追蹤人數</th>\n                        <th>前三大部位</th>\n                        <th>績效曲線</th>\n                        <th>追蹤/訂閱</th>\n                      </tr>\n                    </thead>\n                    <tbody> \n                      <tr *ngFor=\"let w of watching\">\n                        <td>{{ w.rank }}</td>\n                        <td>{{ w.name }}</td>\n                        <td>{{ w.pflvalue }}</td>\n                        <td>{{ w.rate }}</td>\n                        <td>{{ w.cnt }}</td>\n                        <td>\n                          <div *ngFor=\"let s of w.stockNames\">{{ s }}</div>\n                        </td>\n                        <td>\n                          <div class=\"value-chart\" (click)=\"onShowValueChart(w)\">\n                            <app-simple-line-chart [data]=\"values[w.username]\"></app-simple-line-chart>\n                          </div>\n                        </td>\n                        <td>\n                          <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"onClickUnwatch(w.username)\" translate>取消觀察</button>\n                          <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"onClickFollow(w.username)\" translate>追隨專家</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </ng-template>\n              </ngb-tab>\n            </ngb-tabset>\n          </div>\n          <div *ngIf=\"showDetail\">\n            <app-my-expert-detail [code]=\"code\" [expert]=\"selectedExpert\" [competition]=\"selected\" (onBack)=\"onBack()\"></app-my-expert-detail>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1639:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <select class=\"form-control form-control-sm mb-2\" (change)=\"onSelectCompetition($event.target.value)\" [value]=\"code\">\n            <option *ngFor=\"let c of competitions\" value=\"{{ c.VrdCode }}\"><span>{{ c.Name }}</span></option>\n          </select>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>\n                  <span class=\"column-clickable\" (click)=\"onSort('rank')\">排名</span>\n                  <i class=\"fa fa-{{ getSortIcon('rank') }}\" aria-hidden=\"true\"></i>\n                </th>\n                <th>專家名稱</th>\n                <th>資產淨值</th>\n                <th>投資績效</th>\n                <th>\n                  <span class=\"column-clickable\" (click)=\"onSort('cnt')\">追蹤人數</span>\n                  <i class=\"fa fa-{{ getSortIcon('cnt') }}\" aria-hidden=\"true\"></i>\n                </th>\n                <th>前三大部位</th>\n                <th>績效曲線</th>\n                <th>追蹤/訂閱</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let r of ranking\">\n              <tr>\n                <td>{{ r.rank }}</td>\n                <td>{{ r.name }}</td>\n                <td>{{ r.pflvalue }}</td>\n                <td>{{ r.rate }}</td>\n                <td>{{ r.cnt }}</td>\n                <td>\n                  <div *ngFor=\"let s of r.stockNames\">{{ s }}</div>\n                </td>\n                <td>\n                  <div class=\"value-chart\" (click)=\"onShowValueChart(r)\">\n                    <app-simple-line-chart [data]=\"values[r.username]\"></app-simple-line-chart>\n                  </div>\n                </td>\n                <td>\n                  <div *ngIf=\"!r.isFlw\">\n                    <button class=\"btn btn-sm btn-secondary w-75\" (click)=\"onClickWatch(r.username)\" *ngIf=\"!r.isObs\" translate>加入觀察</button>\n                    <button class=\"btn btn-sm btn-secondary w-75\" (click)=\"onClickUnwatch(r.username)\" *ngIf=\"r.isObs\" translate>取消觀察</button>\n                    <button class=\"btn btn-sm btn-secondary w-75\" (click)=\"onClickFollow(r.username)\" translate>追隨專家</button>\n                  </div>\n                  <div *ngIf=\"r.isFlw\">追隨專家中</div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map