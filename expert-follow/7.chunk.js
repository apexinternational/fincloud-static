webpackJsonp([7,17],{

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__irobot_page_component__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kyc_kyc_component__ = __webpack_require__(1509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__irobot_page_routing__ = __webpack_require__(1540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrobotPageModule", function() { return IrobotPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var IrobotPageModule = /** @class */ (function () {
    function IrobotPageModule() {
    }
    IrobotPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_7__irobot_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__irobot_page_component__["a" /* IrobotPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__kyc_kyc_component__["a" /* KycComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__apex_services__["g" /* IrobotService */]
            ]
        })
    ], IrobotPageModule);
    return IrobotPageModule;
}());

//# sourceMappingURL=irobot-page.module.js.map

/***/ }),

/***/ 1508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrobotPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IrobotPageComponent = /** @class */ (function () {
    function IrobotPageComponent() {
    }
    IrobotPageComponent.prototype.ngOnInit = function () {
    };
    IrobotPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-irobot-page',
            template: __webpack_require__(1640),
            styles: [__webpack_require__(1580)]
        }),
        __metadata("design:paramtypes", [])
    ], IrobotPageComponent);
    return IrobotPageComponent;
}());

//# sourceMappingURL=irobot-page.component.js.map

/***/ }),

/***/ 1509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_objects_risk__ = __webpack_require__(674);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KycComponent = /** @class */ (function () {
    function KycComponent(irobotSvc) {
        var _this = this;
        this.irobotSvc = irobotSvc;
        this.scoreResluts = [];
        this.score = 0;
        this.scoreLength = 0;
        this.isScore = false;
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getKycData(event.lang);
            _this.getRiskData(event.lang);
        });
        this.results = new Map();
    }
    KycComponent.prototype.ngOnInit = function () {
        this.getKycData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.getRiskData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        // Fixme future perhapes need to do
        // this.irobotSvc.getKyc().subscribe(kyc => this.kyc = kyc);
        // this.irobotSvc.getRisk().subscribe(risk => this.risk = risk);
    };
    KycComponent.prototype.setResults = function (item, value) {
        this.results.set(item, value);
        var index = 0;
        this.results.forEach(function (values, items) {
            index++;
        });
        this.scoreLength = index;
    };
    KycComponent.prototype.scoring = function () {
        var _this = this;
        this.results.forEach(function (value, item) {
            _this.scoreResluts.push(new __WEBPACK_IMPORTED_MODULE_3__apex_objects_risk__["a" /* Risk */](item, value));
            _this.score += value;
        });
        this.isScore = true;
    };
    KycComponent.prototype.getKycData = function (lang) {
        var _this = this;
        this.irobotSvc.getIrobotData(lang).subscribe(function (result) {
            _this.kyc = result.kyc;
        });
    };
    KycComponent.prototype.getRiskData = function (lang) {
        var _this = this;
        this.irobotSvc.getIrobotData(lang).subscribe(function (result) {
            _this.risk = result.risk;
        });
    };
    KycComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kyc',
            template: __webpack_require__(1641),
            styles: [__webpack_require__(1581)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services__["g" /* IrobotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services__["g" /* IrobotService */]) === "function" && _a || Object])
    ], KycComponent);
    return KycComponent;
    var _a;
}());

//# sourceMappingURL=kyc.component.js.map

/***/ }),

/***/ 1540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__irobot_page_component__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kyc_kyc_component__ = __webpack_require__(1509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__irobot_page_component__["a" /* IrobotPageComponent */],
        children: [
            { path: '', redirectTo: 'kyc', pathMatch: 'full' },
            { path: 'kyc', component: __WEBPACK_IMPORTED_MODULE_2__kyc_kyc_component__["a" /* KycComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=irobot-page.routing.js.map

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1640:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 1641:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <ngb-tabset>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            <span translate>{{ 'irobot.personal_information' }}</span>\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"mb-2\" *ngFor=\"let q of kyc; let i = index\">\n              <div>\n                <span>{{ i + 1 }}.</span>\n                <span class=\"ml-1\">{{ q.question }}</span>\n              </div>\n              <div class=\"my-1\">\n                <span class=\"mr-4\" *ngFor=\"let a of q.answer\">\n                  <input [type]=\"q.multi ? 'checkbox' : 'radio'\" [name]=\"q.answer\"> {{ a }}\n                </span>\n              </div>\n            </div>\n            <button class=\"btn btn-primary float-right w-25\" translate>{{ 'irobot.submit' }}</button>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            <span translate>{{ 'irobot.risk_analysis' }}</span>\n          </ng-template>\n          <ng-template ngbTabContent>\n\n            <div *ngIf=\"!isScore\">\n\n              <div class=\"mb-2\" *ngFor=\"let q of risk; let i = index\">\n                <div>\n                  <span>{{ i + 1 }}.</span>\n                  <span class=\"ml-1\">{{ q.question }}</span>\n                </div>\n                <div class=\"my-1\">\n                  <span class=\"mr-4\" *ngFor=\"let a of q.answer; let i = index\">\n                    <input [type]=\"q.multi ? 'checkbox' : 'radio'\"\n                           [name]=\"q.question\" [value]=\"a.score\" (change)=\"setResults(q, a.score)\"> {{ a.title }}\n                  </span>\n                </div>\n              </div>\n              <button class=\"btn btn-primary float-right w-25\" [disabled]=\"scoreLength < 7\" (click)=\"scoring()\" translate>{{ 'irobot.submit' }}</button>\n\n            </div>\n\n            <div *ngIf=\"isScore\">\n              <div class=\"mb-2\">\n                <div translate>{{ 'irobot.result_title' }}</div>\n                <hr>\n                <div><span>根據您所提供的回答，您的分數為: </span><span class=\"text-danger\">{{ score }}</span></div>\n                <br>\n\n                <div *ngIf=\"score >= 7 && score <= 11\">\n                  <table class=\"table table-bordered table-sm\">\n                    <thead>\n                        <th>風險屬性分類</th>\n                        <th>定義</th>\n                    </thead>\n                    <tbody>\n                        <td>保守型</td>\n                        <td>\n                          您能承受的資產波動風險極低，極度保守的您十分注重本金的保護，寧可讓資產隨著利率水<br>\n                          準每年獲取穩定的孽息收入，也不願冒風險追求可能的可觀報酬。您的理財目的可利用銀行<br>\n                          存款，或具有穩定收益的產品來達成。\n                        </td>\n                    </tbody>\n                  </table>\n\n                  <ul>\n                    <li>貨幣型基金</li>\n                    <li>短期票券</li>\n                    <li>短期債券</li>\n                    <li>銀行定存</li>\n                  </ul>\n                  <div>\n                    本風險屬性評估問券結果係根據您所提供的資料及親自撰寫之投資人風險屬性分析問券而推論得知。此問券內容及結果不構成\n                    與您進行交易之要約或要約之引誘，亦非投資買賣建議。寶碩財務金融科技公司對此份問券之準確性及完整性不負義務或責任。\n                    寶碩財務金融科技公司將就您在此問券上所填載的基本資料保密。為保護您個人資料隱私權，除法律或主管機關另有規定外，未\n                    經您的書面同意，本公司將不會像任何第三人提供您的個人資料。\n                  </div>\n                </div>\n\n                <div *ngIf=\"score >= 12 && score <= 17\">\n                  <table class=\"table table-bordered table-sm\">\n                    <thead>\n                    <th>風險屬性分類</th>\n                    <th>定義</th>\n                    </thead>\n                    <tbody>\n                    <td>穩健型</td>\n                    <td>\n                      您能承受的資產波動風險中庸，穩健的您期望在本金，固定孳息與資本增長達致平衡。您可<br>\n                      以接受短期間的市場波動，並且瞭解投資現值可能因而減損。穩健的投資組合可以包括多種<br>\n                      類別的資產，透過風險分散的方式獲得穩健的投資報酬，但仍須留意個別產品類型的波動性。\n                    </td>\n                    </tbody>\n                  </table>\n\n                  <ul>\n                    <li>貨幣型基金</li>\n                    <li>債券型基金</li>\n                    <li>平衡型基金</li>\n                    <li>組合型基金</li>\n                    <li>保守型私募基金</li>\n                    <li>穩健型私募基金</li>\n                    <li>全球股票型基金</li>\n                    <li>區域配置股票型基金</li>\n                  </ul>\n                  <div>\n                    本風險屬性評估問券結果係根據您所提供的資料及親自撰寫之投資人風險屬性分析問券而推論得知。此問券內容及結果不構成\n                    與您進行交易之要約或要約之引誘，亦非投資買賣建議。寶碩財務金融科技公司對此份問券之準確性及完整性不負義務或責任。\n                    寶碩財務金融科技公司將就您在此問券上所填載的基本資料保密。為保護您個人資料隱私權，除法律或主管機關另有規定外，未\n                    經您的書面同意，本公司將不會像任何第三人提供您的個人資料。\n                  </div>\n                </div>\n\n                <div *ngIf=\"score >= 18\">\n                  <table class=\"table table-bordered table-sm\">\n                    <thead>\n                    <th>風險屬性分類</th>\n                    <th>定義</th>\n                    </thead>\n                    <tbody>\n                    <td>積極型</td>\n                    <td>\n                      您能承受的資產波動風險極高，非常積極的您如獵鶯般不停尋找獲利市場，並願意大筆投資<br>\n                      在風險屬性較高的商品，積極的投資組合中資產類別包羅萬象，且在必要時利用槓桿操作來<br>\n                      提高獲利，但因市場反轉所造成的資本下跌風險偏高，建議嚴格執行停損停利的投資原則，<br>\n                      才能達到長期資產增值的目的。\n                    </td>\n                    </tbody>\n                  </table>\n\n                  <ul>\n                    <li>貨幣型基金</li>\n                    <li>債券型基金</li>\n                    <li>平衡型基金</li>\n                    <li>組合型基金</li>\n                    <li>保守型私募基金</li>\n                    <li>穩健型私募基金</li>\n                    <li>股票型基金</li>\n                    <li>積極型的私募基金</li>\n                  </ul>\n                  <div>\n                    本風險屬性評估問券結果係根據您所提供的資料及親自撰寫之投資人風險屬性分析問券而推論得知。此問券內容及結果不構成\n                    與您進行交易之要約或要約之引誘，亦非投資買賣建議。寶碩財務金融科技公司對此份問券之準確性及完整性不負義務或責任。\n                    寶碩財務金融科技公司將就您在此問券上所填載的基本資料保密。為保護您個人資料隱私權，除法律或主管機關另有規定外，未\n                    經您的書面同意，本公司將不會像任何第三人提供您的個人資料。\n                  </div>\n                </div>\n\n\n              </div>\n            </div>\n\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=7.chunk.js.map