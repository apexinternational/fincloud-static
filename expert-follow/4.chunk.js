webpackJsonp([4,17],{

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_apex_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vdata_page_component__ = __webpack_require__(1526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stock_stock_component__ = __webpack_require__(1525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fund_fund_component__ = __webpack_require__(1522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fxrate_fxrate_component__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_global_component__ = __webpack_require__(1524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__economic_economic_component__ = __webpack_require__(1521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vdata_page_routing__ = __webpack_require__(1549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_order_pipe__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VdataPageModule", function() { return VdataPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var VdataPageModule = /** @class */ (function () {
    function VdataPageModule() {
    }
    VdataPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__apex_apex_module__["a" /* ApexModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_12__vdata_page_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__vdata_page_component__["a" /* VdataPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stock_stock_component__["a" /* StockComponent */],
                __WEBPACK_IMPORTED_MODULE_8__fund_fund_component__["a" /* FundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__fxrate_fxrate_component__["a" /* FxrateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__global_global_component__["a" /* GlobalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__economic_economic_component__["a" /* EconomicComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vdata_page_component__["b" /* MyFilterPipe */]
            ]
        })
    ], VdataPageModule);
    return VdataPageModule;
}());

//# sourceMappingURL=vdata-page.module.js.map

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

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(1675) !== null) && (__webpack_require__(1676) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


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

/***/ 1521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_economic_service__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EconomicComponent = /** @class */ (function () {
    function EconomicComponent(fxrateSvc, translate, utilSvc) {
        var _this = this;
        this.fxrateSvc = fxrateSvc;
        this.translate = translate;
        this.utilSvc = utilSvc;
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getPriceData(event.lang);
            _this.getCapitalMarketData(event.lang);
            _this.getEconomicIndexData(event.lang);
        });
    }
    EconomicComponent.prototype.ngOnInit = function () {
        this.getPriceData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.getCapitalMarketData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.getEconomicIndexData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
    };
    EconomicComponent.prototype.onSelectedPrice = function (rateId) {
        var _this = this;
        this.fxrateSvc.getEconomic(rateId).subscribe(function (rate) {
            _this._priceData = rate.data;
            _this.priceRateKey = rate.label;
            _this.priceSeries = [{ label: rate.label, data: [] }];
            _this._priceData.forEach(function (r) { return _this.priceSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    EconomicComponent.prototype.onSelectedCapitalMarket = function (event) {
        var _this = this;
        this.fxrateSvc.getEconomic(event).subscribe(function (rate) {
            _this._capitalMarketData = rate.data;
            _this.capitalMarketRateKey = rate.label;
            _this.capitalMarketSeries = [{ label: rate.label, data: [] }];
            _this._capitalMarketData.forEach(function (r) { return _this.capitalMarketSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    EconomicComponent.prototype.onSelectedEconomicIndex = function (rateId) {
        var _this = this;
        this.fxrateSvc.getEconomic(rateId).subscribe(function (rate) {
            _this._economicIndexData = rate.data;
            _this.economicIndexRateKey = rate.label;
            _this.economicIndexSeries = [{ label: rate.label, data: [] }];
            _this._economicIndexData.forEach(function (r) { return _this.economicIndexSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    EconomicComponent.prototype.onFocusPrice = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.priceFocusData = data;
        this.focusPriceDataKey = Object.keys(this.priceFocusData).filter(function (k) { return k !== 'date'; })[0];
        this.priceFocusData.fx = this.priceFocusData[Object.keys(this.priceFocusData).filter(function (k) { return k !== 'date'; })[0]];
    };
    EconomicComponent.prototype.onFocusCapitalMarket = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.capitalMarketFocusData = data;
        this.focusCapitalMarketDataKey = Object.keys(this.capitalMarketFocusData).filter(function (k) { return k !== 'date'; })[0];
        this.capitalMarketFocusData.fx = this.capitalMarketFocusData[Object.keys(this.capitalMarketFocusData).filter(function (k) { return k !== 'date'; })[0]];
    };
    EconomicComponent.prototype.onFocusEconomicIndex = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.economicIndexFocusData = data;
        this.focusEconomicIndexDataKey = Object.keys(this.economicIndexFocusData).filter(function (k) { return k !== 'date'; })[0];
        this.economicIndexFocusData.fx = this.economicIndexFocusData[Object.keys(this.economicIndexFocusData).filter(function (k) { return k !== 'date'; })[0]];
    };
    EconomicComponent.prototype.onDownloadData = function (data, filename, subInfo) {
        var _this = this;
        if (subInfo === void 0) { subInfo = ''; }
        if (!data) {
            return;
        }
        var _data = [];
        data.forEach(function (d) {
            var _d = {};
            Object.keys(d).forEach(function (k) { return _d[_this.translate.transform('legend.' + k)] = d[k]; });
            _data.push(_d);
        });
        __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](this.utilSvc.toCSVFile(_data), this.translate.transform(filename) + (subInfo !== '' ? '_' + subInfo : ''));
    };
    EconomicComponent.prototype.getPriceData = function (lang) {
        var _this = this;
        this.fxrateSvc.getEconomicData(lang).subscribe(function (selections) {
            _this.priceSelections = selections.priceIndex;
            _this.priceRateId = selections.priceIndex[0].value;
            _this.onSelectedPrice(_this.priceRateId);
        });
    };
    EconomicComponent.prototype.getCapitalMarketData = function (lang) {
        var _this = this;
        this.fxrateSvc.getEconomicData(lang).subscribe(function (selections) {
            _this.capitalMarketSelections = selections.capitalMarket;
            _this.capitalMarketRateId = selections.capitalMarket[0].value;
            _this.onSelectedCapitalMarket(_this.capitalMarketRateId);
        });
    };
    EconomicComponent.prototype.getEconomicIndexData = function (lang) {
        var _this = this;
        this.fxrateSvc.getEconomicData(lang).subscribe(function (selections) {
            _this.economicIndexSelections = selections.economicIndex;
            _this.economicIndexRateId = selections.economicIndex[0].value;
            _this.onSelectedEconomicIndex(_this.economicIndexRateId);
        });
    };
    EconomicComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-economic',
            template: __webpack_require__(1660),
            styles: [__webpack_require__(1598)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_economic_service__["a" /* EconomicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_economic_service__["a" /* EconomicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */]) === "function" && _c || Object])
    ], EconomicComponent);
    return EconomicComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=economic.component.js.map

/***/ }),

/***/ 1522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apex_services_util_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apex_services__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FundComponent = /** @class */ (function () {
    function FundComponent(utilSvc, fundSvc) {
        this.utilSvc = utilSvc;
        this.fundSvc = fundSvc;
        this.isClickDetail = false;
        this.FundKeyWord = '';
        this.order = 'Name';
        this.reverse = false;
        this.filterargs = { TypeName: '' };
        this.locations = [];
    }
    FundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fundSvc.getFundType().subscribe(function (result) {
            _this.fundTypeData = result;
        });
    };
    FundComponent.prototype.getFundRet = function (name) {
        var _this = this;
        this.fundSvc.getFundRetName(name).subscribe(function (result) {
            _this.fundRetData = result;
        });
    };
    FundComponent.prototype.getFundRetHist = function (sn) {
        var _this = this;
        this.fundSvc.getFundRetHist(sn).subscribe(function (result) {
            _this.fundRetHistData = result;
            _this.isClickDetail = true;
        });
    };
    FundComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    FundComponent.prototype.back = function () {
        location.reload();
    };
    FundComponent.prototype.setTypeName = function (value, check) {
        if (this.locations.includes(value)) {
            var index = this.locations.indexOf(value);
            this.locations.splice(index, 1);
        }
        else {
            this.locations.push(value);
        }
        this.filterargs = { TypeName: this.locations };
    };
    FundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fund',
            template: __webpack_require__(1661),
            styles: [__webpack_require__(1599)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apex_services_util_service__["a" /* UtilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apex_services__["d" /* FundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apex_services__["d" /* FundService */]) === "function" && _b || Object])
    ], FundComponent);
    return FundComponent;
    var _a, _b;
}());

//# sourceMappingURL=fund.component.js.map

/***/ }),

/***/ 1523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FxrateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FxrateComponent = /** @class */ (function () {
    function FxrateComponent(fxrateSvc, translate, utilSvc) {
        var _this = this;
        this.fxrateSvc = fxrateSvc;
        this.translate = translate;
        this.utilSvc = utilSvc;
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getFXRateData(event.lang);
        });
    }
    FxrateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFXRateData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.fxrateSvc.getExchRate().subscribe(function (result) {
            _this.exchRateData = result;
        });
    };
    FxrateComponent.prototype.onSelectedFxRate = function (rateId) {
        var _this = this;
        this.fxrateSvc.getFXRate(rateId).subscribe(function (result) {
            _this._rate = result.data;
            _this.key = result.label;
            _this.rate = [{ label: result.label, data: [] }];
            _this._rate.forEach(function (r) { return _this.rate[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    FxrateComponent.prototype.onFocus = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.focusData = data;
        this.focusData.fx = this.focusData[Object.keys(this.focusData).filter(function (k) { return k !== 'date'; })[0]];
    };
    FxrateComponent.prototype.onDownloadData = function (data, filename, subInfo) {
        var _this = this;
        if (subInfo === void 0) { subInfo = ''; }
        if (!data) {
            return;
        }
        var _data = [];
        data.forEach(function (d) {
            var _d = {};
            Object.keys(d).forEach(function (k) { return _d[_this.translate.transform('legend.' + k)] = d[k]; });
            _data.push(_d);
        });
        __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](this.utilSvc.toCSVFile(_data), this.translate.transform(filename) + (subInfo !== '' ? '_' + subInfo : ''));
    };
    FxrateComponent.prototype.getFXRateData = function (lang) {
        var _this = this;
        this.fxrateSvc.getFXRateData(lang).subscribe(function (selections) {
            _this.selections = selections.fxrate;
            _this.rateId = selections.fxrate[0].value;
            _this.onSelectedFxRate(_this.rateId);
        });
    };
    FxrateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fxrate',
            template: __webpack_require__(1662),
            styles: [__webpack_require__(1600)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services__["c" /* FxrateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services__["c" /* FxrateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */]) === "function" && _c || Object])
    ], FxrateComponent);
    return FxrateComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=fxrate.component.js.map

/***/ }),

/***/ 1524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services_global_service__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GlobalComponent = /** @class */ (function () {
    function GlobalComponent(fxrateSvc, translate, utilSvc) {
        var _this = this;
        this.fxrateSvc = fxrateSvc;
        this.translate = translate;
        this.utilSvc = utilSvc;
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.getTurnoverData(event.lang);
            _this.getPeratioData(event.lang);
            _this.getStockPriceIndexData(event.lang);
        });
    }
    GlobalComponent.prototype.ngOnInit = function () {
        this.getPeratioData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.getStockPriceIndexData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
        this.getTurnoverData(__WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.currentLang);
    };
    GlobalComponent.prototype.onSelectedTurnover = function (rateId) {
        var _this = this;
        this.fxrateSvc.getGlobal(rateId).subscribe(function (rate) {
            _this._turnoverData = rate.data;
            _this.turnoverRateKey = rate.label;
            _this.turnoverSeries = [{ label: rate.label, data: [] }];
            _this._turnoverData.forEach(function (r) { return _this.turnoverSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    GlobalComponent.prototype.onSelectedPeratio = function (rateId) {
        var _this = this;
        this.fxrateSvc.getGlobal(rateId).subscribe(function (rate) {
            _this._peratioData = rate.data;
            _this.peratioRateKey = rate.label;
            _this.peratioSeries = [{ label: rate.label, data: [] }];
            _this._peratioData.forEach(function (r) { return _this.peratioSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    GlobalComponent.prototype.onSelectedStockPriceIndex = function (rateId) {
        var _this = this;
        this.fxrateSvc.getGlobal(rateId).subscribe(function (rate) {
            _this._stockPriceIndexData = rate.data;
            _this.stockPriceIndexRateKey = rate.label;
            _this.stockPriceIndexSeries = [{ label: rate.label, data: [] }];
            _this._stockPriceIndexData.forEach(function (r) { return _this.stockPriceIndexSeries[0].data.push({ date: r.date, value: r.fx }); });
        });
    };
    GlobalComponent.prototype.onFocusTurnover = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.focusTurnoverData = data;
        this.focusTurnoverDataKey = Object.keys(this.focusTurnoverData).filter(function (k) { return k !== 'date'; })[0];
        this.focusTurnoverData.fx = this.focusTurnoverData[Object.keys(this.focusTurnoverData).filter(function (k) { return k !== 'date'; })[0]];
    };
    GlobalComponent.prototype.onFocusPeratio = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.focusPeratioData = data;
        this.focusPeratioDataKey = Object.keys(this.focusPeratioData).filter(function (k) { return k !== 'date'; })[0];
        this.focusPeratioData.fx = this.focusPeratioData[Object.keys(this.focusPeratioData).filter(function (k) { return k !== 'date'; })[0]];
    };
    GlobalComponent.prototype.onFocusStockPriceIndex = function (event) {
        // FIXME: must using i18n file.
        var data = event;
        this.focusStockPriceIndexData = data;
        this.focusStockPriceIndexDataKey = Object.keys(this.focusStockPriceIndexData).filter(function (k) { return k !== 'date'; })[0];
        this.focusStockPriceIndexData.fx = this.focusStockPriceIndexData[Object.keys(this.focusStockPriceIndexData).filter(function (k) { return k !== 'date'; })[0]];
    };
    GlobalComponent.prototype.onDownloadData = function (data, filename, subInfo) {
        var _this = this;
        if (subInfo === void 0) { subInfo = ''; }
        if (!data) {
            return;
        }
        var _data = [];
        data.forEach(function (d) {
            var _d = {};
            Object.keys(d).forEach(function (k) { return _d[_this.translate.transform('legend.' + k)] = d[k]; });
            _data.push(_d);
        });
        __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](this.utilSvc.toCSVFile(_data), this.translate.transform(filename) + (subInfo !== '' ? '_' + subInfo : ''));
    };
    GlobalComponent.prototype.getTurnoverData = function (lang) {
        var _this = this;
        this.fxrateSvc.getGlobalData(lang).subscribe(function (selections) {
            _this.turnoverSelections = selections.turnover;
            _this.turnoverRateId = selections.turnover[0].value;
            _this.onSelectedTurnover(_this.turnoverRateId);
        });
    };
    GlobalComponent.prototype.getPeratioData = function (lang) {
        var _this = this;
        this.fxrateSvc.getGlobalData(lang).subscribe(function (selections) {
            _this.peratioSelections = selections.peratio;
            _this.peratioRateId = selections.peratio[0].value;
            _this.onSelectedPeratio(_this.peratioRateId);
        });
    };
    GlobalComponent.prototype.getStockPriceIndexData = function (lang) {
        var _this = this;
        this.fxrateSvc.getGlobalData(lang).subscribe(function (selections) {
            _this.stockPriceIndexSelections = selections.stockpriceIndex;
            _this.stockPriceIndexRateId = selections.stockpriceIndex[0].value;
            _this.onSelectedStockPriceIndex(_this.stockPriceIndexRateId);
        });
    };
    GlobalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-global',
            template: __webpack_require__(1663),
            styles: [__webpack_require__(1601)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services_global_service__["a" /* GolbalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services_global_service__["a" /* GolbalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apex_services_util_service__["a" /* UtilService */]) === "function" && _c || Object])
    ], GlobalComponent);
    return GlobalComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=global.component.js.map

/***/ }),

/***/ 1525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apex_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apex_objects__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StockComponent = /** @class */ (function () {
    function StockComponent(translate, stockSvc, utilSvc) {
        var _this = this;
        this.translate = translate;
        this.stockSvc = stockSvc;
        this.utilSvc = utilSvc;
        this.stockPrice = [];
        this.focusStockDividendYield = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["k" /* StockDividendYield */]('', 0);
        this.focusStockPER = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["i" /* StockPER */]('', 0);
        this.focusStockPBR = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["j" /* StockPBR */]('', 0);
        this.focusCompanyNumberData = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["o" /* CompanyNumber */]('', 0, 0, 0);
        this.focusCompanyValueData = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["n" /* CompanyValue */]('', 0, 0);
        this.focusInvestorsAccountNumberData = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["l" /* InvestorsAccountNumber */]('', 0);
        this.focusTradeRatioData = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["q" /* TradeRatio */]('', 0, 0, 0);
        this.focusBuySellAmountData = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["u" /* BuySellAmount */]('', 0, 0, 0);
        this.focusOtcStockDayTradeInfo = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["m" /* DayTradeInfo */]('', 0, 0);
        this.focusSecondaryDealAmount = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["t" /* DealAmount */]('', 0, 0, 0, 0);
        this.focusOtcDealAmount = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["t" /* DealAmount */]('', 0, 0, 0, 0);
        this.focusMarketDealPercentage = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["s" /* DealPercentage */]('', 0, 0, 0, 0, 0, 0, 0, 0);
        this.focusForeignInvestmentProfile = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["v" /* ForeignInvestment */]('', 0, 0, 0);
        this.focusTwseDealProfile = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["r" /* TwseDeal */]('', 0, 0, 0, 0, 0, 0, 0, 0, 0);
        this.focusInvestmentProfile = new __WEBPACK_IMPORTED_MODULE_5__apex_objects__["p" /* InvestmentProfile */]('', 0, 0);
        this.focusInvestmentProfileHoldShares = { date: '', share: 0 };
        this.focusInvestmentProfileHoldRatio = { date: '', ratio: 0 };
        __WEBPACK_IMPORTED_MODULE_2__translation_module__["a" /* TranslationModule */].translate.onLangChange.subscribe(function (event) {
            _this.generateCompanyNumberChart();
            _this.generateCompanyValueChart();
            _this.generateInvestorsAccountNumberChart();
            _this.generateStockPERChart();
            _this.generateStockPBRChart();
            _this.generateStockDividendYeildChart();
            _this.generateTradeRatioChart();
            _this.generateInstitutionalInvestorsBuySellAmountChart();
            _this.generateForeignInvestmentProfileChart();
            _this.generateOtcStockDayTradeChart();
            _this.generateSecondaryMarketDealAmountChart();
            _this.generateOtcMarketDealAmountChart();
            _this.generateMarketDealPercentageChart();
            _this.generateForeignInvestmentMarketChart();
            _this.generateTwseDealProfileChart();
        });
    }
    StockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockSvc.getCompanyNumber().subscribe(function (result) {
            _this._companyNumber = result;
            _this.generateCompanyNumberChart();
        });
        this.stockSvc.getCompanyValue().subscribe(function (result) {
            _this._companyValue = result;
            _this.generateCompanyValueChart();
        });
        this.stockSvc.getInvestorsAccountNumber().subscribe(function (result) {
            _this._investorsAccountNumber = result;
            _this.generateInvestorsAccountNumberChart();
        });
        this.stockSvc.getInstitutionalInvestorsTradeRatio().subscribe(function (tradeRatio) {
            _this._tradeRatio = tradeRatio;
            _this.generateTradeRatioChart();
        });
        this.stockSvc.getInstitutionalInvestorsBuySellAmount().subscribe(function (buySellAmount) {
            _this._buySellAmount = buySellAmount;
            _this.generateInstitutionalInvestorsBuySellAmountChart();
        });
        this.stockSvc.getCareerType().subscribe(function (careers) {
            _this.careers = careers;
            _this.stockSvc.getForeignInvestmentProfile(careers[0]).subscribe(function (investmentProfile) {
                _this._foreignInvestment = investmentProfile;
                _this.generateForeignInvestmentProfileChart();
            });
        });
        this.stockSvc.getSecondaryMarketDealAmount().subscribe(function (dealAmount) {
            _this._secondaryDealAmount = dealAmount;
            _this.generateSecondaryMarketDealAmountChart();
        });
        this.stockSvc.getOtcMarketDealAmount().subscribe(function (dealAmount) {
            _this._otcDealAmount = dealAmount;
            _this.generateOtcMarketDealAmountChart();
        });
        this.stockSvc.getMarketDealPercentage().subscribe(function (dealPercentage) {
            _this._marketDealPercentage = dealPercentage;
            _this.generateMarketDealPercentageChart();
        });
        this.stockSvc.getForeignInvestmentMarket().subscribe(function (foreignInvestment) {
            _this._foreignInvestmentMarket = foreignInvestment;
            _this.generateForeignInvestmentMarketChart();
        });
        this.stockSvc.getTwseDealProfile().subscribe(function (twseDeal) {
            _this._twseDealProfile = twseDeal;
            _this.generateTwseDealProfileChart();
        });
    };
    StockComponent.prototype.onDownloadData = function (data, filename, subInfo) {
        var _this = this;
        if (subInfo === void 0) { subInfo = ''; }
        if (!data) {
            return;
        }
        var _data = [];
        data.forEach(function (d) {
            var _d = {};
            Object.keys(d).forEach(function (k) { return _d[_this.translate.transform('legend.' + k)] = d[k]; });
            _data.push(_d);
        });
        __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](this.utilSvc.toCSVFile(_data), this.translate.transform(filename) + (subInfo !== '' ? '_' + subInfo : ''));
    };
    StockComponent.prototype.onCareerChange = function (event) {
        var _this = this;
        this.stockSvc.getForeignInvestmentProfile(event).subscribe(function (investmentProfile) {
            _this._foreignInvestment = investmentProfile;
            _this.generateForeignInvestmentProfileChart();
        });
    };
    StockComponent.prototype.onSelectStock = function (event) {
        this.searchStock = event;
    };
    StockComponent.prototype.onSelectStockForDealAmount = function (event) {
        this.searchDealAmountStock = event;
    };
    StockComponent.prototype.onSearchDealAmountStock = function () {
        var _this = this;
        this.dealAmountStockInfo = this.searchDealAmountStock;
        this.stockSvc.getDailyDealAmountStock(this.dealAmountStockInfo.Code)
            .subscribe(function (dailyDealAmount) { return _this.dealAmountStockData = dailyDealAmount; });
    };
    StockComponent.prototype.onSearchStock = function () {
        var _this = this;
        this.stockInfo = this.searchStock;
        this.stockSvc.getStockDailyPrice(this.stockInfo.Code)
            .subscribe(function (stockPrice) {
            _this.stockDailyPrice = stockPrice;
            _this.stockPrice = stockPrice;
        });
        this.stockSvc.getStockWeeklyPrice(this.stockInfo.Code)
            .subscribe(function (stockPrice) { return _this.stockWeeklyPrice = stockPrice; });
        this.stockSvc.getStockMonthlyPrice(this.stockInfo.Code)
            .subscribe(function (stockPrice) { return _this.stockMonthlyPrice = stockPrice; });
        this.stockSvc.getStockPERatio(this.stockInfo.Code)
            .subscribe(function (stockPER) {
            _this._stockPER = stockPER;
            _this.generateStockPERChart();
        });
        this.stockSvc.getStockDividendYield(this.stockInfo.Code).subscribe(function (stockDividendYield) {
            _this._stockDividendYield = stockDividendYield;
            _this.generateStockDividendYeildChart();
        });
        this.stockSvc.getStockPBRatio(this.stockInfo.Code).subscribe(function (stockPBR) {
            _this._stockPBR = stockPBR;
            _this.generateStockPBRChart();
        });
    };
    StockComponent.prototype.onSelectOtcStock = function (event) {
        this.searchOtcStock = event;
    };
    StockComponent.prototype.onSearchOtcStock = function () {
        var _this = this;
        this.otcStockInfo = this.searchOtcStock;
        this.stockSvc.getOtcStockDayTrade(this.otcStockInfo.Code).subscribe(function (dayTradeInfo) {
            _this._otcStockDayTrade = dayTradeInfo;
            _this.generateOtcStockDayTradeChart();
        });
    };
    StockComponent.prototype.onSelectEmergingStock = function (event) {
        this.searchEmergingStock = event;
    };
    StockComponent.prototype.onSearchEmergingStock = function () {
        var _this = this;
        this.emergingStockInfo = this.searchEmergingStock;
        this.stockSvc.getEmergingStockData(this.emergingStockInfo.Code)
            .subscribe(function (emergingStockData) { return _this.emergingStockData = emergingStockData; });
    };
    StockComponent.prototype.onOtcStockDayTradeFocus = function (event) {
        var _this = this;
        Object.keys(this.focusOtcStockDayTradeInfo).forEach(function (k) {
            _this.focusOtcStockDayTradeInfo[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onForeignInvestmentForcus = function (event) {
        var _this = this;
        Object.keys(this.focusInvestmentProfile).forEach(function (k) {
            _this.focusInvestmentProfile[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    // FIXME: should remove this method once the composite line chart is supported.
    StockComponent.prototype.onForeignInvestmentHoldShareFocus = function (event) {
        this.focusInvestmentProfileHoldShares.date = event.date;
        this.focusInvestmentProfileHoldShares.share = event[this.translate.transform('legend.share')];
    };
    // FIXME: should remove this method once the composite line chart is supported.
    StockComponent.prototype.onForeignInvestmentHoldRatioFocus = function (event) {
        this.focusInvestmentProfileHoldRatio.date = event.date;
        this.focusInvestmentProfileHoldRatio.ratio = event[this.translate.transform('legend.ratio')];
    };
    StockComponent.prototype.onBuySellAmountFocus = function (event) {
        var _this = this;
        Object.keys(this.focusBuySellAmountData).forEach(function (k) {
            _this.focusBuySellAmountData[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onTradeRatioFocus = function (event) {
        var _this = this;
        Object.keys(this.focusTradeRatioData).forEach(function (k) {
            if (k !== 'date') {
                var idx = event.label.indexOf(_this.translate.transform('legend.' + k));
                if (idx > -1) {
                    _this.focusTradeRatioData[k] = event.value[idx];
                }
            }
            else {
                _this.focusTradeRatioData[k] = event[k];
            }
        });
    };
    StockComponent.prototype.onStockPBRFocus = function (event) {
        var _this = this;
        Object.keys(this.focusStockPBR).forEach(function (k) {
            _this.focusStockPBR[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onStockDividendYieldFocus = function (event) {
        var _this = this;
        Object.keys(this.focusStockDividendYield).forEach(function (k) {
            _this.focusStockDividendYield[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onStockPERFocus = function (event) {
        var _this = this;
        Object.keys(this.focusStockPER).forEach(function (k) {
            _this.focusStockPER[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onStockPriceFocus = function (event) {
        this.focusStockPrice = event;
    };
    StockComponent.prototype.onInvestorsAccountNumberFocus = function (event) {
        var _this = this;
        Object.keys(this.focusInvestorsAccountNumberData).forEach(function (k) {
            _this.focusInvestorsAccountNumberData[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onCompanyValueFocus = function (event) {
        var _this = this;
        Object.keys(this.focusCompanyValueData).forEach(function (k) {
            _this.focusCompanyValueData[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onCompanyNumberFocus = function (event) {
        var _this = this;
        Object.keys(this.focusCompanyNumberData).forEach(function (k) {
            _this.focusCompanyNumberData[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onSecondaryDealAmountFocus = function (event) {
        var _this = this;
        Object.keys(this.focusSecondaryDealAmount).forEach(function (k) {
            _this.focusSecondaryDealAmount[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onOtcDealAmountFocus = function (event) {
        var _this = this;
        Object.keys(this.focusOtcDealAmount).forEach(function (k) {
            _this.focusOtcDealAmount[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onMarketDealPercentageFocus = function (event) {
        var _this = this;
        Object.keys(this.focusMarketDealPercentage).forEach(function (k) {
            _this.focusMarketDealPercentage[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onForeignInvestmentMarketFocus = function (event) {
        var _this = this;
        Object.keys(this.focusForeignInvestmentProfile).forEach(function (k) {
            _this.focusForeignInvestmentProfile[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.onTwseDealProfileFocus = function (event) {
        var _this = this;
        Object.keys(this.focusTwseDealProfile).forEach(function (k) {
            _this.focusTwseDealProfile[k] = k === 'date' ? event[k] : event[_this.translate.transform('legend.' + k)];
        });
    };
    StockComponent.prototype.generateTwseDealProfileChart = function () {
        var _this = this;
        if (!this._twseDealProfile || !this._twseDealProfile.length) {
            return;
        }
        this.twseDealProfile = [];
        Object.keys(this._twseDealProfile[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.twseDealProfile.push({ label: key, data: [] });
            _this._twseDealProfile.forEach(function (r) {
                _this.twseDealProfile.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateForeignInvestmentMarketChart = function () {
        var _this = this;
        if (!this._foreignInvestmentMarket || !this._foreignInvestmentMarket.length) {
            return;
        }
        this.foreignInvestmentMarket = [];
        Object.keys(this._foreignInvestmentMarket[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.foreignInvestmentMarket.push({ label: key, data: [] });
            _this._foreignInvestmentMarket.forEach(function (r) {
                _this.foreignInvestmentMarket.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateMarketDealPercentageChart = function () {
        var _this = this;
        if (!this._marketDealPercentage || !this._marketDealPercentage.length) {
            return;
        }
        this.marketDealPercentage = [];
        Object.keys(this._marketDealPercentage[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.marketDealPercentage.push({ label: key, data: [] });
            _this._marketDealPercentage.forEach(function (r) {
                _this.marketDealPercentage.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateSecondaryMarketDealAmountChart = function () {
        var _this = this;
        if (!this._secondaryDealAmount || !this._secondaryDealAmount.length) {
            return;
        }
        this.secondaryDealAmount = [];
        Object.keys(this._secondaryDealAmount[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.secondaryDealAmount.push({ label: key, data: [] });
            _this._secondaryDealAmount.forEach(function (r) {
                _this.secondaryDealAmount.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateOtcMarketDealAmountChart = function () {
        var _this = this;
        if (!this._otcDealAmount || !this._otcDealAmount.length) {
            return;
        }
        this.otcDealAmount = [];
        Object.keys(this._otcDealAmount[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.otcDealAmount.push({ label: key, data: [] });
            _this._otcDealAmount.forEach(function (r) {
                _this.otcDealAmount.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateOtcStockDayTradeChart = function () {
        var _this = this;
        if (!this._otcStockDayTrade || !this._otcStockDayTrade.length) {
            return;
        }
        this.otcStockDayTrade = [];
        Object.keys(this._otcStockDayTrade[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.otcStockDayTrade.push({ label: key, data: [] });
            _this._otcStockDayTrade.forEach(function (r) {
                _this.otcStockDayTrade.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateForeignInvestmentProfileChart = function () {
        var _this = this;
        if (!this._foreignInvestment || !this._foreignInvestment.length) {
            return;
        }
        this.foreignInvestment = [];
        Object.keys(this._foreignInvestment[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.foreignInvestment.push({ label: key, data: [] });
            _this._foreignInvestment.forEach(function (r) {
                _this.foreignInvestment.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
        // FIXME: Should remove below logic once the composite line chart is supported.
        this.foreignInvestmentHoldShares = [];
        this.foreignInvestmentHoldShares.push({
            label: this.translate.transform('legend.share'),
            data: []
        });
        this.foreignInvestmentHoldRatio = [];
        this.foreignInvestmentHoldRatio.push({
            label: this.translate.transform('legend.ratio'),
            data: []
        });
        this._foreignInvestment.forEach(function (r) {
            _this.foreignInvestmentHoldShares[0].data.push({ date: r.date, value: r.share });
            _this.foreignInvestmentHoldRatio[0].data.push({ date: r.date, value: r.ratio });
        });
    };
    StockComponent.prototype.generateTradeRatioChart = function () {
        var _this = this;
        if (!this._tradeRatio || !this._tradeRatio.length) {
            return;
        }
        this.tradeRatio = [];
        this._tradeRatio.forEach(function (t) { return _this.tradeRatio.push({
            date: t.date,
            label: Object.keys(t).filter(function (k) { return k !== 'date'; }).map(function (k) { return _this.translate.transform('legend.' + k); }),
            value: [t.investmentTrust, t.foreignInvestor, t.dealer]
        }); });
    };
    StockComponent.prototype.generateStockPBRChart = function () {
        var _this = this;
        if (!this._stockPBR || !this._stockPBR.length) {
            return;
        }
        this.stockPBR = [];
        Object.keys(this._stockPBR[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.stockPBR.push({ label: key, data: [] });
            _this._stockPBR.forEach(function (r) {
                _this.stockPBR.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateStockDividendYeildChart = function () {
        var _this = this;
        if (!this._stockDividendYield || !this._stockDividendYield.length) {
            return;
        }
        this.stockDividendYield = [];
        Object.keys(this._stockDividendYield[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.stockDividendYield.push({ label: key, data: [] });
            _this._stockDividendYield.forEach(function (r) {
                _this.stockDividendYield.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateStockPERChart = function () {
        var _this = this;
        if (!this._stockPER || !this._stockPER.length) {
            return;
        }
        this.stockPER = [];
        Object.keys(this._stockPER[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.stockPER.push({ label: key, data: [] });
            _this._stockPER.forEach(function (r) {
                _this.stockPER.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateInstitutionalInvestorsBuySellAmountChart = function () {
        var _this = this;
        if (!this._buySellAmount || !this._buySellAmount.length) {
            return;
        }
        this.buySellAmount = [];
        Object.keys(this._buySellAmount[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.buySellAmount.push({ label: key, data: [] });
            _this._buySellAmount.forEach(function (r) {
                _this.buySellAmount.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateInvestorsAccountNumberChart = function () {
        var _this = this;
        if (!this._investorsAccountNumber || !this._investorsAccountNumber.length) {
            return;
        }
        this.investorsAccountNumber = [];
        Object.keys(this._investorsAccountNumber[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.investorsAccountNumber.push({ label: key, data: [] });
            _this._investorsAccountNumber.forEach(function (r) {
                _this.investorsAccountNumber.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateCompanyValueChart = function () {
        var _this = this;
        if (!this._companyValue || !this._companyValue.length) {
            return;
        }
        this.companyValue = [];
        Object.keys(this._companyValue[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.companyValue.push({ label: key, data: [] });
            _this._companyValue.forEach(function (r) {
                _this.companyValue.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent.prototype.generateCompanyNumberChart = function () {
        var _this = this;
        if (!this._companyNumber || !this._companyNumber.length) {
            return;
        }
        this.companyNumber = [];
        Object.keys(this._companyNumber[0]).filter(function (k) { return k !== 'date'; })
            .forEach(function (k) {
            var key = _this.translate.transform('legend.' + k);
            _this.companyNumber.push({ label: key, data: [] });
            _this._companyNumber.forEach(function (r) {
                _this.companyNumber.find(function (line) { return line.label === key; }).data.push({ date: r.date, value: r[k] });
            });
        });
    };
    StockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(1664),
            styles: [__webpack_require__(1602)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslatePipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services__["e" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services__["e" /* StockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__apex_services__["f" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apex_services__["f" /* UtilService */]) === "function" && _c || Object])
    ], StockComponent);
    return StockComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=stock.component.js.map

/***/ }),

/***/ 1526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VdataPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VdataPageComponent = /** @class */ (function () {
    function VdataPageComponent() {
    }
    VdataPageComponent.prototype.ngOnInit = function () {
    };
    VdataPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vdata-page',
            template: __webpack_require__(1665),
            styles: [__webpack_require__(1603)]
        }),
        __metadata("design:paramtypes", [])
    ], VdataPageComponent);
    return VdataPageComponent;
}());

var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        var result = [];
        if (filter.TypeName.length > 0) {
            var _loop_1 = function (i) {
                result.push.apply(result, items.filter(function (item) { return item.TypeName.indexOf(filter.TypeName[i]) !== -1; }));
            };
            for (var i = 0; i < filter.TypeName.length; i++) {
                _loop_1(i);
            }
            return result;
        }
        else {
            return items.filter(function (item) { return item.TypeName.indexOf(filter.TypeName) !== -1; });
        }
    };
    MyFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fundfilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());

//# sourceMappingURL=vdata-page.component.js.map

/***/ }),

/***/ 1549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdata_page_component__ = __webpack_require__(1526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_stock_component__ = __webpack_require__(1525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fund_fund_component__ = __webpack_require__(1522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fxrate_fxrate_component__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_global_component__ = __webpack_require__(1524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__economic_economic_component__ = __webpack_require__(1521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__vdata_page_component__["a" /* VdataPageComponent */],
        children: [
            { path: '', redirectTo: 'stock', pathMatch: 'full' },
            { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_2__stock_stock_component__["a" /* StockComponent */] },
            { path: 'fund', component: __WEBPACK_IMPORTED_MODULE_3__fund_fund_component__["a" /* FundComponent */] },
            { path: 'fxrate', component: __WEBPACK_IMPORTED_MODULE_4__fxrate_fxrate_component__["a" /* FxrateComponent */] },
            { path: 'global', component: __WEBPACK_IMPORTED_MODULE_5__global_global_component__["a" /* GlobalComponent */] },
            { path: 'economic', component: __WEBPACK_IMPORTED_MODULE_6__economic_economic_component__["a" /* EconomicComponent */] }
        ]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=vdata-page.routing.js.map

/***/ }),

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".pointer {\n  color: #008dba; }\n\n.pointer:link {\n  text-decoration: none; }\n\n.pointer:visited {\n  text-decoration: none; }\n\n.pointer:hover {\n  color: #008dba;\n  cursor: pointer;\n  text-decoration: underline; }\n\n.pointer:active {\n  text-decoration: underline; }\n\nthead th {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px; }\n  thead th span {\n    visibility: hidden; }\n  thead th.active {\n    color: #000; }\n    thead th.active span {\n      visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".link {\n  color: #014c8c;\n  text-decoration: underline;\n  background-color: transparent; }\n\n.link:hover {\n  color: deepskyblue;\n  text-decoration: underline;\n  background-color: transparent; }\n\n.tableLine {\n  border-top: 40px #D6D3D6 solid;\n  width: 0px;\n  height: 0px;\n  border-left: 80px #BDBABD solid;\n  position: relative; }\n\nb {\n  font-style: normal;\n  font-size: small;\n  display: block;\n  position: absolute;\n  top: -40px;\n  left: -55px;\n  width: 55px; }\n\nem {\n  font-style: normal;\n  font-size: small;\n  display: block;\n  position: absolute;\n  top: -25px;\n  left: -70px;\n  width: 55px; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1660:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <ngb-tabset>\n        <ngb-tab id=\"first\">\n          <ng-template ngbTabTitle><span translate>{{ 'economic.price' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <h4 *ngFor=\"let item of priceSelections\">{{ item.key }}</h4>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_priceData, priceRateKey)\"\n                      [disabled]=\"!_priceData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ priceFocusData?.date }}</span>\n                <span >{{ priceRateKey }}</span>\n                <span class=\"mr-2\">: {{ priceFocusData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"priceSeries\" (onFocus)=\"onFocusPrice($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab id=\"second\">\n          <ng-template ngbTabTitle><span  translate>{{ 'economic.capital_market' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <select class=\"form-control\" [(ngModel)]=\"capitalMarketRateId\" name=\"rateId\" (ngModelChange)=\"onSelectedCapitalMarket($event)\">\n                <option *ngFor=\"let item of capitalMarketSelections\" [value]=\"item.value\">{{ item.key }}</option>\n              </select>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_capitalMarketData, capitalMarketRateKey)\"\n                      [disabled]=\"!_capitalMarketData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ capitalMarketFocusData?.date }}</span>\n                <span >{{ capitalMarketRateKey }}</span>\n                <span class=\"mr-2\">: {{ capitalMarketFocusData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"capitalMarketSeries\" (onFocus)=\"onFocusCapitalMarket($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab id=\"third\">\n          <ng-template ngbTabTitle><span translate>{{ 'economic.economic_index' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <select class=\"form-control\" [(ngModel)]=\"economicIndexRateId\" name=\"rateId\" (ngModelChange)=\"onSelectedEconomicIndex($event)\">\n                <option *ngFor=\"let item of economicIndexSelections\" [value]=\"item.value\">{{ item.key }}</option>\n              </select>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_economicIndexData, economicIndexRateKey)\"\n                      [disabled]=\"!_economicIndexData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ economicIndexFocusData?.date }}</span>\n                <span >{{ economicIndexRateKey }}</span>\n                <span class=\"mr-2\">: {{ economicIndexFocusData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"economicIndexSeries\" (onFocus)=\"onFocusEconomicIndex($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1661:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n\n      <div *ngIf=\"!isClickDetail\">\n        <div class=\"row\">\n          <div translate>{{ 'fund.input' }}</div>:\n          <input class=\"form-control form-control-sm mr-2 w-25\" type=\"text\" id=\"keyword\" name=\"keyword\"\n                 [(ngModel)]=\"FundKeyWord\">\n        </div>\n        <br>\n        <span *ngFor=\"let row of fundTypeData\">\n          <input type=\"checkbox\" (click)=\"setTypeName(row.Name, $event.target.checked)\">{{ row.Name }}\n        </span>\n        <br>\n        <button class=\"btn btn-primary\" (click)=\"getFundRet(FundKeyWord)\" translate>{{ 'fund.search' }}</button><br><br>\n\n        <table class=\"table table-sm table-bordered w-100\">\n          <thead>\n            <th class=\"pointer\" [class.active]=\"order === 'SN'\" (click)=\"setOrder('SN')\"><a translate>{{ 'fund.fund_number' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Name'\" (click)=\"setOrder('Name')\"><a translate>{{ 'fund.fund_name' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'YMD'\" (click)=\"setOrder('YMD')\"><a translate>{{ 'fund.fund_data' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'TypeName'\" (click)=\"setOrder('TypeName')\"><a translate>{{ 'fund.fund_type' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Nav'\" (click)=\"setOrder('Nav')\"><a translate>{{ 'fund.fund_nav' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_3M'\" (click)=\"setOrder('Ret_3M')\"><a translate>{{ 'fund.fund_three_month' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_6M'\" (click)=\"setOrder('Ret_6M')\"><a translate>{{ 'fund.fund_six_month' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_9M'\" (click)=\"setOrder('Ret_9M')\"><a translate>{{ 'fund.fund_nine_month' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_1Y'\" (click)=\"setOrder('Ret_1Y')\"><a translate>{{ 'fund.fund_one_year' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_2Y'\" (click)=\"setOrder('Ret_2Y')\"><a translate>{{ 'fund.fund_two_year' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n            <th class=\"pointer\" [class.active]=\"order === 'Ret_3Y'\" (click)=\"setOrder('Ret_3Y')\"><a translate>{{ 'fund.fund_three_year' }}</a><span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span></th>\n\n          </thead>\n          <tbody  *ngFor=\"let row of fundRetData | orderBy: order : reverse | fundfilter : filterargs\">\n            <td>{{ row.SN }}</td>\n            <td><span class=\"pointer\" (click)=\"getFundRetHist(row.SN)\">{{ row.Name }}</span></td>\n            <td>{{ row.YMD | date: 'yyyy/MM/dd' }}</td>\n            <td>{{ row.TypeName }}</td>\n            <td>{{ row.Nav }}</td>\n            <td>{{ row.Ret_3M }}<span *ngIf=\"!row.Ret_3M\">-</span></td>\n            <td>{{ row.Ret_6M }}<span *ngIf=\"!row.Ret_6M\">-</span></td>\n            <td>{{ row.Ret_9M }}<span *ngIf=\"!row.Ret_9M\">-</span></td>\n            <td>{{ row.Ret_1Y }}<span *ngIf=\"!row.Ret_1Y\">-</span></td>\n            <td>{{ row.Ret_2Y }}<span *ngIf=\"!row.Ret_2Y\">-</span></td>\n            <td>{{ row.Ret_3Y }}<span *ngIf=\"!row.Ret_3Y\">-</span></td>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngIf=\"isClickDetail\">\n        <br>\n        <button class=\"btn btn-secondary\" (click)=\"back()\">回上頁</button>\n        <table class=\"table table-sm table-bordered w-100\">\n          <thead>\n            <th translate>{{ 'fund.fund_name' }}</th>\n            <th translate>{{ 'fund.fund_data' }}</th>\n            <th translate>{{ 'fund.fund_three_month' }}</th>\n            <th translate>{{ 'fund.fund_six_month' }}</th>\n            <th translate>{{ 'fund.fund_nine_month' }}</th>\n            <th translate>{{ 'fund.fund_one_year' }}</th>\n            <th translate>{{ 'fund.fund_two_year' }}</th>\n            <th translate>{{ 'fund.fund_three_year' }}</th>\n          </thead>\n          <tbody *ngFor=\"let row of fundRetHistData | orderBy: 'YMD' : true\">\n          <td>{{ row.F_NM_C }}</td>\n          <td>{{ row.YMD | date: 'yyyy/MM/dd'  }}</td>\n          <td>{{ row.RET_3M }}<span *ngIf=\"!row.RET_3M\">-</span></td>\n          <td>{{ row.RET_6M }}<span *ngIf=\"!row.RET_6M\">-</span></td>\n          <td>{{ row.RET_9M }}<span *ngIf=\"!row.RET_9M\">-</span></td>\n          <td>{{ row.RET_1Y }}<span *ngIf=\"!row.RET_1Y\">-</span></td>\n          <td>{{ row.RET_2Y }}<span *ngIf=\"!row.RET_2Y\">-</span></td>\n          <td>{{ row.RET_3Y }}<span *ngIf=\"!row.RET_3Y\">-</span></td>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1662:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n\n      <select class=\"form-control\" [(ngModel)]=\"rateId\" name=\"rateId\" (ngModelChange)=\"onSelectedFxRate($event)\">\n      <option *ngFor=\"let item of selections\" [value]=\"item.value\">{{ item.key }}</option>\n      </select>\n      <button type=\"button\"\n      class=\"btn btn-sm btn-primary float-right\"\n      (click)=\"onDownloadData(_rate, key)\"\n      [disabled]=\"!_rate\"\n      translate>{{ 'common.button.download' }}</button>\n      <div>\n      <span translate>{{ 'common.content.date' }}</span>\n      <span class=\"mr-2\">: {{ focusData?.date }}</span>\n      <span translate>{{ 'chart.rate' }}</span>\n      <span class=\"mr-2\">: {{ focusData?.fx }}</span>\n      </div>\n      <app-line-chart [series]=\"rate\" (onFocus)=\"onFocus($event)\"></app-line-chart>\n\n      <br><br><br>\n      <h3 translate>{{ 'fxratetable.cross_currency_table' }}</h3>\n\n      <br>\n      <table class=\"table table-sm table-bordered w-100 small\">\n        <thead>\n          <tr>\n            <th translate>{{ 'vtrade.currency' }}</th>\n            <th translate>{{ 'common.dollar.usd' }}</th>\n            <th translate>{{ 'common.dollar.ntd' }}</th>\n            <th translate>{{ 'common.dollar.jpy' }}</th>\n            <th translate>{{ 'common.dollar.gbp' }}</th>\n            <th translate>{{ 'common.dollar.hkd' }}</th>\n            <th translate>{{ 'common.dollar.krw' }}</th>\n            <th translate>{{ 'common.dollar.cad' }}</th>\n            <th translate>{{ 'common.dollar.sgd' }}</th>\n            <th translate>{{ 'common.dollar.cny' }}</th>\n            <th translate>{{ 'common.dollar.aud' }}</th>\n            <th translate>{{ 'common.dollar.idr' }}</th>\n            <th translate>{{ 'common.dollar.thb' }}</th>\n            <th translate>{{ 'common.dollar.myr' }}</th>\n            <th translate>{{ 'common.dollar.php' }}</th>\n            <th translate>{{ 'common.dollar.eur' }}</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let row of exchRateData; let i = index\">\n          <tr>\n            <td *ngIf=\"i == 0\" translate>{{ 'common.dollar.usd' }}</td>\n            <td *ngIf=\"i == 1\" translate>{{ 'common.dollar.ntd' }}</td>\n            <td *ngIf=\"i == 2\" translate>{{ 'common.dollar.jpy' }}</td>\n            <td *ngIf=\"i == 3\" translate>{{ 'common.dollar.gbp' }}</td>\n            <td *ngIf=\"i == 4\" translate>{{ 'common.dollar.hkd' }}</td>\n            <td *ngIf=\"i == 5\" translate>{{ 'common.dollar.krw' }}</td>\n            <td *ngIf=\"i == 6\" translate>{{ 'common.dollar.cad' }}</td>\n            <td *ngIf=\"i == 7\" translate>{{ 'common.dollar.sgd' }}</td>\n            <td *ngIf=\"i == 8\" translate>{{ 'common.dollar.cny' }}</td>\n            <td *ngIf=\"i == 9\" translate>{{ 'common.dollar.aud' }}</td>\n            <td *ngIf=\"i == 10\" translate>{{ 'common.dollar.idr' }}</td>\n            <td *ngIf=\"i == 11\" translate>{{ 'common.dollar.thb' }}</td>\n            <td *ngIf=\"i == 12\" translate>{{ 'common.dollar.myr' }}</td>\n            <td *ngIf=\"i == 13\" translate>{{ 'common.dollar.php' }}</td>\n            <td *ngIf=\"i == 14\" translate>{{ 'common.dollar.eur' }}</td>\n\n            <td>{{ row.usd  }}</td>\n            <td>{{ row.ntd }}</td>\n            <td>{{ row.jpy }}</td>\n            <td>{{ row.gbp }}</td>\n            <td>{{ row.hkd }}</td>\n            <td>{{ row.krw }}</td>\n            <td>{{ row.cad }}</td>\n            <td>{{ row.sgd }}</td>\n            <td>{{ row.cny }}</td>\n            <td>{{ row.aud }}</td>\n            <td>{{ row.idr }}</td>\n            <td>{{ row.thb }}</td>\n            <td>{{ row.myr }}</td>\n            <td>{{ row.php }}</td>\n            <td>{{ row.eur }}</td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1663:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <ngb-tabset>\n        <ngb-tab id=\"first\">\n          <ng-template ngbTabTitle><span translate>{{ 'global.turnover' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <select class=\"form-control\" [(ngModel)]=\"turnoverRateId\" name=\"rateId\" (ngModelChange)=\"onSelectedTurnover($event)\">\n                <option *ngFor=\"let item of turnoverSelections\" [value]=\"item.value\">{{ item.key }}</option>\n              </select>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_turnoverData, turnoverRateKey)\"\n                      [disabled]=\"!_turnoverData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ focusTurnoverData?.date }}</span>\n                <span >{{ turnoverRateKey }}</span>\n                <span class=\"mr-2\">: {{ focusTurnoverData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"turnoverSeries\" (onFocus)=\"onFocusTurnover($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab id=\"second\">\n          <ng-template ngbTabTitle><span translate>{{ 'global.peratio' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <select class=\"form-control\" [(ngModel)]=\"peratioRateId\" name=\"rateId2\" (ngModelChange)=\"onSelectedPeratio($event)\">\n                <option *ngFor=\"let item of peratioSelections\" [value]=\"item.value\">{{ item.key }}</option>\n              </select>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_peratioData, peratioRateKey)\"\n                      [disabled]=\"!_peratioData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ focusPeratioData?.date }}</span>\n                <span >{{ peratioRateKey }}</span>\n                <span class=\"mr-2\">: {{ focusPeratioData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"peratioSeries\" (onFocus)=\"onFocusPeratio($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab id=\"third\">\n          <ng-template ngbTabTitle><span translate>{{ 'global.stock_price_Index' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n\n              <select class=\"form-control\" [(ngModel)]=\"stockPriceIndexRateId\" name=\"rateId3\" (ngModelChange)=\"onSelectedStockPriceIndex($event)\">\n                <option *ngFor=\"let item of stockPriceIndexSelections\" [value]=\"item.value\">{{ item.key }}</option>\n              </select>\n              <button type=\"button\"\n                      class=\"btn btn-sm btn-primary float-right\"\n                      (click)=\"onDownloadData(_stockPriceIndexData, stockPriceIndexRateKey)\"\n                      [disabled]=\"!_stockPriceIndexData\"\n                      translate>{{ 'common.button.download' }}</button>\n\n              <div>\n                <span translate>{{ 'common.content.date' }}</span>\n                <span class=\"mr-2\">: {{ focusStockPriceIndexData?.date }}</span>\n                <span >{{ stockPriceIndexRateKey }}</span>\n                <span class=\"mr-2\">: {{ focusStockPriceIndexData?.fx }}</span>\n              </div>\n              <app-line-chart [series]=\"stockPriceIndexSeries\" (onFocus)=\"onFocusStockPriceIndex($event)\"></app-line-chart>\n\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1664:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <ngb-tabset>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.stock_market_profile' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.company_number' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_companyNumber, 'vdata.company_number')\"\n                    [disabled]=\"!_companyNumber\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyNumberData?.date }}</span>\n                  <span translate>{{ 'chart.traded_company_number' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyNumberData?.tradedCompany }}</span>\n                  <span translate>{{ 'chart.otc_company_number' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyNumberData?.otcCompany }}</span>\n                  <span translate>{{ 'chart.non_otc_company_number' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyNumberData?.nonOtcCompany }}</span>\n                </div>\n                <app-line-chart [series]=\"companyNumber\" (onFocus)=\"onCompanyNumberFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.company_value' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_companyValue, 'vdata.company_value')\"\n                    [disabled]=\"!_companyValue\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyValueData?.date }}</span>\n                  <span translate>{{ 'chart.traded_company_value' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyValueData?.tradedCompany }}</span>\n                  <span translate>{{ 'chart.otc_company_value' }}</span>\n                  <span class=\"mr-2\">: {{ focusCompanyValueData?.otcCompany }}</span>\n                </div>\n                <app-line-chart [series]=\"companyValue\" (onFocus)=\"onCompanyValueFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.investors_account_number' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_investorsAccountNumber, 'vdata.investors_account_number')\"\n                    [disabled]=\"!_investorsAccountNumber\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestorsAccountNumberData?.date }}</span>\n                  <span translate>{{ 'chart.investors_account_number' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestorsAccountNumberData?.otcMarket }}</span>\n                </div>\n                <app-line-chart [series]=\"investorsAccountNumber\" (onFocus)=\"onInvestorsAccountNumberFocus($event)\"></app-line-chart>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.stock_profile' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <form class=\"form-inline\" (ngSubmit)=\"onSearchStock()\">\n                <label for=\"searchStock\" class=\"mr-2\" translate>{{ 'common.content.symbol' }}</label>\n                <app-stock-typeahead id=\"searchStock\" (onSelectStock)=\"onSelectStock($event)\"></app-stock-typeahead>\n                <button type=\"submit\" class=\"btn btn-primary btn-sm mr-2\" translate>{{ 'common.button.submit' }}</button>\n              </form>\n              <div>\n                <span translate>{{ 'common.content.stock_name' }}</span>\n                <span class=\"mr-2\">: {{ stockInfo?.Name }}</span>\n                <span translate>{{ 'common.content.symbol' }}</span>\n                <span class=\"mr-2\">: {{ stockInfo?.Code }}</span>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block mr-2\" translate>{{ 'vdata.stock_tech_analysis' }}</h4>\n                  <div class=\"btn-group\" [hidden]=\"!stockPrice || !stockPrice.length\">\n                    <button class=\"btn btn-sm\"\n                            [class.btn-primary]=\"stockPrice === stockDailyPrice\"\n                            [class.btn-secondary]=\"stockPrice !== stockDailyPrice\"\n                            (click)=\"stockPrice = stockDailyPrice\" translate>{{ 'chart.daily' }}</button>\n                    <button class=\"btn btn-sm\"\n                            [class.btn-primary]=\"stockPrice === stockWeeklyPrice\"\n                            [class.btn-secondary]=\"stockPrice !== stockWeeklyPrice\"\n                            (click)=\"stockPrice = stockWeeklyPrice\" translate>{{ 'chart.weekly' }}</button>\n                    <button class=\"btn btn-sm\"\n                            [class.btn-primary]=\"stockPrice === stockMonthlyPrice\"\n                            [class.btn-secondary]=\"stockPrice !== stockMonthlyPrice\"\n                            (click)=\"stockPrice = stockMonthlyPrice\" translate>{{ 'chart.monthly' }}</button>\n                  </div>\n                  <button type=\"button\"\n                          class=\"btn btn-sm btn-primary float-right\"\n                          (click)=\"onDownloadData(stockDailyPrice, 'legend.daily', stockInfo?.Name);onDownloadData(stockWeeklyPrice, 'legend.weekly', stockInfo?.Name);onDownloadData(stockMonthlyPrice, 'legend.monthly', stockInfo?.Name)\"\n                          [disabled]=\"!stockPrice || !stockPrice.length\"\n                          translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPrice?.date }}</span>\n                  <span translate>{{ 'chart.open' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPrice?.open }}</span>\n                  <span translate>{{ 'chart.high' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPrice?.high }}</span>\n                  <span translate>{{ 'chart.low' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPrice?.low }}</span>\n                  <span translate>{{ 'chart.close' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPrice?.close }}</span>\n                </div>\n                <app-candlestick-chart [allData]=\"stockPrice\" (onFocus)=\"onStockPriceFocus($event)\"></app-candlestick-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.stock_per' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_stockPER, 'vdata.stock_per', stockInfo?.Name)\"\n                    [disabled]=\"!_stockPER\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPER?.date }}</span>\n                  <span translate>{{ 'chart.per' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPER?.PER }}</span>\n                </div>\n                <app-line-chart [series]=\"stockPER\" (onFocus)=\"onStockPERFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.stock_dividend_yield' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_stockDividendYield, 'vdata.stock_dividend_yield', stockInfo?.Name)\"\n                    [disabled]=\"!_stockDividendYield\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockDividendYield?.date }}</span>\n                  <span translate>{{ 'chart.dividend_yield' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockDividendYield?.dividendYield }}</span>\n                </div>\n                <app-line-chart [series]=\"stockDividendYield\" (onFocus)=\"onStockDividendYieldFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.stock_pbr' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_stockPBR, 'vdata.stock_pbr', stockInfo?.Name)\"\n                    [disabled]=\"!_stockPBR\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPBR?.date }}</span>\n                  <span translate>{{ 'chart.pbr' }}</span>\n                  <span class=\"mr-2\">: {{ focusStockPBR?.PBR }}</span>\n                </div>\n                <app-line-chart [series]=\"stockPBR\" (onFocus)=\"onStockPBRFocus($event)\"></app-line-chart>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.institutional_investors' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.buy_sell_secondary_market' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_buySellAmount, 'vdata.buy_sell_secondary_market')\"\n                    [disabled]=\"!_buySellAmount\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusBuySellAmountData?.date }}</span>\n                  <span translate>{{ 'chart.investment_trust' }}</span>\n                  <span class=\"mr-2\">: {{ focusBuySellAmountData?.investmentTrust }}</span>\n                  <span translate>{{ 'chart.dealer' }}</span>\n                  <span class=\"mr-2\">: {{ focusBuySellAmountData?.dealer }}</span>\n                  <span translate>{{ 'chart.foreign_investor' }}</span>\n                  <span class=\"mr-2\">: {{ focusBuySellAmountData?.foreignInvestor }}</span>\n                </div>\n              </div>\n              <app-line-chart [series]=\"buySellAmount\" (onFocus)=\"onBuySellAmountFocus($event)\"></app-line-chart>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.trade_ratio_secondary_market' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_tradeRatio, 'vdata.trade_ratio_secondary_market')\"\n                    [disabled]=\"!_tradeRatio\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusTradeRatioData?.date }}</span>\n                  <span translate>{{ 'chart.investment_trust' }}</span>\n                  <span class=\"mr-2\">: {{ focusTradeRatioData?.investmentTrust }}</span>\n                  <span translate>{{ 'chart.dealer' }}</span>\n                  <span class=\"mr-2\">: {{ focusTradeRatioData?.dealer}}</span>\n                  <span translate>{{ 'chart.foreign_investor' }}</span>\n                  <span class=\"mr-2\">: {{ focusTradeRatioData?.foreignInvestor }}</span>\n                </div>\n                <app-stack-chart [allData]=\"tradeRatio\" (onFocus)=\"onTradeRatioFocus($event)\"></app-stack-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.foreign_investment' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_foreignInvestment, 'vdata.foreign_investment')\"\n                    [disabled]=\"!_foreignInvestment\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div class=\"form-inline\">\n                  <label for=\"careers\" class=\"mr-2\" translate>{{ 'vdata.careers' }}</label>\n                  <select id=\"careers\" class=\"form-control form-control-sm\" (change)=\"onCareerChange($event.target.value)\">\n                    <option *ngFor=\"let c of careers\" [value]=\"c\">{{ c }}</option>\n                  </select>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestmentProfileHoldShares?.date }}</span>\n                  <span translate>{{ 'chart.hold_share_number' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestmentProfileHoldShares?.share }}</span>\n                </div>\n                <app-line-chart [series]=\"foreignInvestmentHoldShares\" (onFocus)=\"onForeignInvestmentHoldShareFocus($event)\"></app-line-chart>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestmentProfileHoldRatio?.date }}</span>\n                  <span translate>{{ 'chart.hold_share_ratio' }}</span>\n                  <span class=\"mr-2\">: {{ focusInvestmentProfileHoldRatio?.ratio }}</span>\n                </div>\n                <app-line-chart [series]=\"foreignInvestmentHoldRatio\" (onFocus)=\"onForeignInvestmentHoldRatioFocus($event)\"></app-line-chart>\n<!--                <div>-->\n                  <!--<span translate>{{ 'common.content.date' }}</span>-->\n                  <!--<span class=\"mr-2\">: {{ focusInvestmentProfile?.date }}</span>-->\n                  <!--<span translate>{{ 'chart.hold_share_number' }}</span>-->\n                  <!--<span class=\"mr-2\">: {{ focusInvestmentProfile?.share }}</span>-->\n                  <!--<span translate>{{ 'chart.hold_share_ratio' }}</span>-->\n                  <!--<span class=\"mr-2\">: {{ focusInvestmentProfile?.ratio }}</span>-->\n                <!--</div>-->\n                <!--<app-line-chart [series]=\"foreignInvestment\" (onFocus)=\"onForeignInvestmentForcus($event)\"></app-line-chart>-->\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.otc_day_trade' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.otc_stock_day_trade_info' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_otcStockDayTrade, 'vdata.otc_stock_day_trade_info', otcStockInfo?.Name)\"\n                    [disabled]=\"!_otcStockDayTrade\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <form class=\"form-inline\" (ngSubmit)=\"onSearchOtcStock()\">\n                  <label for=\"searchOtcStock\" class=\"mr-2\" translate>{{ 'common.content.symbol' }}</label>\n                  <app-stock-typeahead id=\"searchOtcStock\" [otcStockOnly]=\"true\" (onSelectStock)=\"onSelectOtcStock($event)\"></app-stock-typeahead>\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm mr-2\" translate>{{ 'common.button.submit' }}</button>\n                </form>\n                <div>\n                  <span translate>{{ 'common.content.stock_name' }}</span>\n                  <span class=\"mr-2\">: {{ otcStockInfo?.Name }}</span>\n                  <span translate>{{ 'common.content.symbol' }}</span>\n                  <span class=\"mr-2\">: {{ otcStockInfo?.Code }}</span>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>\n                  <span class=\"mr-2\">: {{ focusOtcStockDayTradeInfo?.date }}</span>\n                  <span translate>{{ 'chart.day_buy' }}</span>\n                  <span class=\"mr-2\">: {{ focusOtcStockDayTradeInfo?.buy }}</span>\n                  <span translate>{{ 'chart.day_sell' }}</span>\n                  <span class=\"mr-2\">: {{ focusOtcStockDayTradeInfo?.sell }}</span>\n                </div>\n                <app-line-chart [series]=\"otcStockDayTrade\" (onFocus)=\"onOtcStockDayTradeFocus($event)\"></app-line-chart>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.emerging_stock_market_profile' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.emerging_stock_market_profile' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(emergingStockData, 'vdata.emerging_stock_market_profile', emergingStockInfo?.Name)\"\n                    [disabled]=\"!emergingStockData\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <form class=\"form-inline\" (ngSubmit)=\"onSearchEmergingStock()\">\n                  <label for=\"searchEmergingStock\" class=\"mr-2\" translate>{{ 'common.content.symbol' }}</label>\n                  <app-stock-typeahead id=\"searchEmergingStock\" [emergingStockOnly]=\"true\" (onSelectStock)=\"onSelectEmergingStock($event)\"></app-stock-typeahead>\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm mr-2\" translate>{{ 'common.button.submit' }}</button>\n                </form>\n                <div>\n                  <span translate>{{ 'common.content.stock_name' }}</span>\n                  <span class=\"mr-2\">: {{ emergingStockInfo?.Name }}</span>\n                  <span translate>{{ 'common.content.symbol' }}</span>\n                  <span class=\"mr-2\">: {{ emergingStockInfo?.Code }}</span>\n                </div>\n                <table class=\"table table-sm table-bordered mt-2\">\n                  <thead>\n                    <tr>\n                      <th translate>{{ 'vdata.date' }}</th>\n                      <th translate>{{ 'vdata.yesterday_avg' }}</th>\n                      <th translate>{{ 'vdata.buy_price' }}</th>\n                      <th translate>{{ 'vdata.buy_volume' }}</th>\n                      <th translate>{{ 'vdata.sell_price' }}</th>\n                      <th translate>{{ 'vdata.sell_volume' }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let e of emergingStockData\">\n                      <td>{{ e.date | date:'yyyy/MM/dd' }}</td>\n                      <td>{{ e.yesterday_avg | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td>{{ e.buy_price | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td>{{ e.buy_volume | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td>{{ e.sell_price | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td>{{ e.sell_volume | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.market_profile' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.secondary_market_deal_amount' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_secondaryDealAmount, 'vdata.secondary_market_deal_amount')\"\n                    [disabled]=\"!_secondaryDealAmount\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>:\n                  <span class=\"mr-2\">{{ focusSecondaryDealAmount?.date }}</span>\n                  <span translate>{{ 'chart.local_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusSecondaryDealAmount?.localInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.local_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusSecondaryDealAmount?.localNaturalPerson }}</span>\n                  <span translate>{{ 'chart.foreign_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusSecondaryDealAmount?.foreignInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.foreign_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusSecondaryDealAmount?.foreignNaturalPerson }}</span>\n                </div>\n                <app-line-chart [series]=\"secondaryDealAmount\" (onFocus)=\"onSecondaryDealAmountFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.otc_market_deal_amount' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_otcDealAmount, 'vdata.otc_market_deal_amount')\"\n                    [disabled]=\"!_otcDealAmount\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>:\n                  <span class=\"mr-2\">{{ focusOtcDealAmount?.date }}</span>\n                  <span translate>{{ 'chart.local_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusOtcDealAmount?.localInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.local_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusOtcDealAmount?.localNaturalPerson }}</span>\n                  <span translate>{{ 'chart.foreign_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusOtcDealAmount?.foreignInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.foreign_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusOtcDealAmount?.foreignNaturalPerson }}</span>\n                </div>\n                <app-line-chart [series]=\"otcDealAmount\" (onFocus)=\"onOtcDealAmountFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.market_deal_percentage' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_marketDealPercentage, 'vdata.market_deal_percentage')\"\n                    [disabled]=\"!_marketDealPercentage\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.date }}</span>\n                </div>\n                <div>\n                  <span translate>{{ 'chart.secondary_local_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.secondaryLocalInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.secondary_foreign_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.secondaryForeignInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.secondary_local_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.secondaryLocalNaturalPerson }}</span>\n                  <span translate>{{ 'chart.secondary_foreign_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.secondaryForeignNaturalPerson }}</span>\n                </div>\n                <div>\n                  <span translate>{{ 'chart.otc_local_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.otcLocalInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.otc_foreign_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.otcForeignInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.otc_local_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.otcLocalNaturalPerson }}</span>\n                  <span translate>{{ 'chart.otc_foreign_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusMarketDealPercentage?.otcForeignNaturalPerson }}</span>\n                </div>\n                <app-line-chart [series]=\"marketDealPercentage\" (onFocus)=\"onMarketDealPercentageFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.foreign_investment' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_foreignInvestmentMarket, 'vdata.foreign_investment')\"\n                    [disabled]=\"!_foreignInvestmentMarket\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>:\n                  <span class=\"mr-2\">{{ focusForeignInvestmentProfile?.date }}</span>\n                  <span translate>{{ 'chart.foreign_institution_investor' }}</span>:\n                  <span class=\"mr-2\">{{ focusForeignInvestmentProfile?.foreignInstitutionInvestor }}</span>\n                  <span translate>{{ 'chart.foreign_natural_person' }}</span>:\n                  <span class=\"mr-2\">{{ focusForeignInvestmentProfile?.foreignNaturalPerson }}</span>\n                  <span translate>{{ 'chart.total' }}</span>:\n                  <span class=\"mr-2\">{{ focusForeignInvestmentProfile?.total }}</span>\n                </div>\n                <app-line-chart [series]=\"foreignInvestmentMarket\" (onFocus)=\"onForeignInvestmentMarketFocus($event)\"></app-line-chart>\n              </div>\n              <div class=\"mt-4\">\n                <div class=\"clearfix\">\n                  <h4 translate>{{ 'vdata.deal_amount' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(dealAmountStockData, 'vdata.deal_amount', dealAmountStockInfo?.Name)\"\n                    [disabled]=\"!dealAmountStockData\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <form class=\"form-inline\" (ngSubmit)=\"onSearchDealAmountStock()\">\n                  <label for=\"searchStockForDealAmount\" class=\"mr-2\" translate>{{ 'common.content.symbol' }}</label>\n                  <app-stock-typeahead id=\"searchStockForDealAmount\" (onSelectStock)=\"onSelectStockForDealAmount($event)\"></app-stock-typeahead>\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm mr-2\" translate>{{ 'common.button.submit' }}</button>\n                </form>\n                <div>\n                  <span translate>{{ 'common.content.stock_name' }}</span>\n                  <span class=\"mr-2\">: {{ dealAmountStockInfo?.Name }}</span>\n                  <span translate>{{ 'common.content.symbol' }}</span>\n                  <span class=\"mr-2\">: {{ dealAmountStockInfo?.Code }}</span>\n                </div>\n                <table class=\"table table-sm table-bordered\">\n                  <thead>\n                    <tr>\n                      <th translate>{{ 'vdata.date' }}</th>\n                      <th translate>{{ 'vdata.deal_price' }}</th>\n                      <th translate>{{ 'vdata.deal_amount' }}</th>\n                      <th translate>{{ 'vdata.deal_total' }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let s of dealAmountStockData\">\n                      <td translate>{{ s.date | date:'yyyy/MM/dd' }}</td>\n                      <td translate>{{ s.deal_price | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td translate>{{ s.deal_amount | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                      <td translate>{{ s.deal_total | currency:'NTD':true:'.0' | replace:'NTD':'' }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span translate>{{ 'vdata.economic_product_trading_profile' }}</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"p-4\">\n              <div>\n                <div class=\"clearfix\">\n                  <h4 class=\"d-inline-block\" translate>{{ 'vdata.twse_deal_profile' }}</h4>\n                  <button type=\"button\"\n                    class=\"btn btn-sm btn-primary float-right\"\n                    (click)=\"onDownloadData(_twseDealProfile, 'vdata.twse_deal_profile')\"\n                    [disabled]=\"!_twseDealProfile\"\n                    translate>{{ 'common.button.download' }}</button>\n                </div>\n                <div>\n                  <span translate>{{ 'common.content.date' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.date }}</span>\n                  <span translate>{{ 'chart.stock_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.stockDealPrice }}</span>\n                  <span translate>{{ 'chart.exp_stock_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.expStockDealPrice }}</span>\n                  <span translate>{{ 'chart.closed_stock_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.closedStockDealPrice }}</span>\n                  <span translate>{{ 'chart.beneficiary_certificate_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.beneficiaryCertificateDealPrice }}</span>\n                  <span translate>{{ 'chart.warrant_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.warrantDealPrice }}</span>\n                  <span translate>{{ 'chart.tdr_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.tdrDealPrice }}</span>\n                  <span translate>{{ 'chart.bonds_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.bondsDealPrice }}</span>\n                  <span translate>{{ 'chart.ordinary_bonds_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.ordinaryBondsDealPrice }}</span>\n                  <span translate>{{ 'chart.convertible_bonds_deal_price' }}</span>:\n                  <span class=\"mr-2\">{{ focusTwseDealProfile?.convertibleBondsDealPrice }}</span>\n                </div>\n                <app-line-chart [series]=\"twseDealProfile\" (onFocus)=\"onTwseDealProfileFocus($event)\"></app-line-chart>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1665:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 1675:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

});
//# sourceMappingURL=4.chunk.js.map