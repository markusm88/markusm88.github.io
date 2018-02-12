webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"header-styleguide\">\n  <h1 class=\"display-2 disabled\">Nettbudsjett Styleguide</h1>\n</section>\n<app-typography></app-typography>\n<app-buttons></app-buttons>\n<app-forms></app-forms>\n<app-bars></app-bars>\n<app-table></app-table>\n<app-collapsible></app-collapsible>\n<app-modals></app-modals>\n<app-misc></app-misc>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_prism_core__ = __webpack_require__("../../../../@ngx-prism/core/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__misc_misc_component__ = __webpack_require__("../../../../../src/app/misc/misc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_forms_component__ = __webpack_require__("../../../../../src/app/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bars_bars_component__ = __webpack_require__("../../../../../src/app/bars/bars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_modals_component__ = __webpack_require__("../../../../../src/app/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collapsible_collapsible_component__ = __webpack_require__("../../../../../src/app/collapsible/collapsible.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__misc_misc_component__["a" /* MiscComponent */],
                __WEBPACK_IMPORTED_MODULE_7__forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bars_bars_component__["a" /* BarsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__modals_modals_component__["a" /* ModalsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__collapsible_collapsible_component__["a" /* CollapsibleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_prism_core__["a" /* PrismModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bars/bars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Bars - Sliders</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m6\">\n    <!-- Eco-bar -->\n    <div class=\"eco-bar\">\n      <div class=\"determinate\" style=\"width: 70%\"></div>\n    </div>\n    <!-- /Eco-bar -->\n    \n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;!-- Eco-bar -->\n    &lt;div class=\"eco-bar\">\n      &lt;div class=\"determinate\" style=\"width: 70%\">&lt;/div>\n    &lt;/div>\n    &lt;!-- /Eco-bar -->\n    </ngx-prism>\n    <!-- Highlighted code -->\n\n    <div class=\"divider\"></div>\n\n    <div class=\"row\">\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body\">8500kr</span>\n        <div class=\"eco-bar-vertical\" style=\"height: 296px\">\n          <div class=\"determinate\" style=\"height: 50%\">\n            <span class=\"caption\">5500kr</span>\n          </div>\n        </div>\n        <h3>Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n\n\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body\">8500kr</span>\n        <div class=\"eco-bar-vertical\" style=\"height: 296px\">\n          <div class=\"determinate is-over\" style=\"height: 90%\">\n            <span class=\"caption\">7500kr</span>\n          </div>\n        </div>\n        <h3>Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body\">8500kr</span>\n        <div class=\"eco-bar-vertical\" style=\"height: 296px\">\n          <div class=\"determinate is-over red\" style=\"height: 100%\">\n            <span class=\"caption\">9000kr</span>\n          </div>\n        </div>\n        <h3>Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n\n    </div>\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;!-- Eco-bar-vertical -->\n    &lt;div class=\"col c7 eco-bar-container\">\n      &lt;span class=\"body\">cat.budget&lt;/span>\n      &lt;div class=\"eco-bar-vertical\" style=\"height: 296px\">\n        &lt;div class=\"determinate\" style=\"height: 50%\">\n          &lt;span class=\"caption\">cat.used&lt;/span>\n        &lt;/div>\n      &lt;/div>\n      &lt;h3>Bolig&lt;/h3>\n    &lt;/div>\n    &lt;!-- /Eco-bar-vertical -->\n  \n    &lt;!-- \n    Height >= 90%: add class \"is-over\" to \"determinate\"\n    Height &lt;= 100%: add class \"red\" to \"determinate\"\n  \n    E.g:  &lt;div class=\"determinate is-over red\" style=\"height: 100%\">\n    -->\n    </ngx-prism>\n    <!-- Highlighted code -->\n    <div class=\"divider\"></div>\n\n    <p class=\"secondary\">Slider</p>\n\n    <!-- Slider -->\n    <div id=\"test-slider1\" class=\"eco-slider\"></div>\n    <!-- /Slider -->\n    \n    <br><br>\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n      &lt;!-- Slider -->\n      &lt;div id=\"test-slider1\" class=\"eco-slider\">&lt;/div>\n      &lt;!-- /Slider -->\n    </ngx-prism>\n      <!-- /Highlighted code -->\n\n  </div>\n  <!-- /Left col -->\n\n\n\n\n  <div class=\"col s12 m6 dark-blue\">\n    <div class=\"eco-bar eco-on-dark\">\n      <div class=\"determinate\" style=\"width: 70%\"></div>\n    </div>\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;!-- Eco-bar -->\n    &lt;div class=\"eco-bar eco-on-dark\">\n      &lt;div class=\"determinate\" style=\"width: 70%\">&lt;/div>\n    &lt;/div>\n    &lt;!-- /Eco-bar -->\n    </ngx-prism>\n    <!-- Highlighted code -->\n\n    <div class=\"divider\"></div>\n\n    <div class=\"row\">\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body white-text\">8500kr</span>\n        <div class=\"eco-bar-vertical eco-on-dark\" style=\"height: 296px\">\n          <div class=\"determinate\" style=\"height: 50%\">\n            <span class=\"caption\">5500kr</span>\n          </div>\n        </div>\n        <h3 class=\"white-text\">Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n\n\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body white-text\">8500kr</span>\n        <div class=\"eco-bar-vertical eco-on-dark\" style=\"height: 296px\">\n          <div class=\"determinate is-over\" style=\"height: 90%\">\n            <span class=\"caption\">7500kr</span>\n          </div>\n        </div>\n        <h3 class=\"white-text\">Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n\n      <!-- Eco-bar-vertical -->\n      <div class=\"col m4 eco-bar-container\">\n        <span class=\"body white-text\">8500kr</span>\n        <div class=\"eco-bar-vertical eco-on-dark\" style=\"height: 296px\">\n          <div class=\"determinate is-over red\" style=\"height: 100%\">\n            <span class=\"caption\">9000kr</span>\n          </div>\n        </div>\n        <h3 class=\"white-text\">Bolig</h3>\n      </div>\n      <!-- /Eco-bar-vertical -->\n    </div>\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;!-- \n    On dark backgrounds:\n    Add class \"eco-on-dark\" to \"eco-bar-vertical\".\n    Add class \"white-text\" to span.body and h3.\n    \n    -->\n\n    &lt;!-- Eco-bar-vertical -->\n    &lt;div class=\"col c7 eco-bar-container\">\n      &lt;span class=\"body white-text\">cat.budget&lt;/span>\n      &lt;div class=\"eco-bar-vertical eco-on-dark\" style=\"height: 296px\">\n        &lt;div class=\"determinate\" style=\"height: 50%\">\n          &lt;span class=\"caption\">cat.used&lt;/span>\n        &lt;/div>\n      &lt;/div>\n      &lt;h3 class=\"white-text\">Bolig&lt;/h3>\n    &lt;/div>\n    &lt;!-- /Eco-bar-vertical -->\n    </ngx-prism>\n    <!-- /Highlighted code -->\n\n\n     <div class=\"divider\"></div>\n\n     <p class=\"secondary-white\">Slider</p>\n\n     <!-- Slider -->\n    <div id=\"test-slider2\" class=\"eco-slider-dark\"></div>\n    <!-- /Slider -->\n\n    <br><br>\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n      &lt;!-- Slider on dark bg -->\n      &lt;div id=\"test-slider2\" class=\"eco-slider-dark\">&lt;/div>\n      &lt;!-- /Slider -->\n    </ngx-prism>\n\n    <ngx-prism language=\"javascript\">\n      noUiSlider.create(testSlider2, &#123;\n        start: categoryBudget, // e.g\n        connect: [true, false],\n        step: 100,\n        tooltips: true,\n        range: range_all_sliders,\n        format: wNumb(&#123;\n          decimals: 0,\n          prefix: 'KR '\n          &#125;)\n        &#125;);\n      \n    </ngx-prism>\n      <!-- /Highlighted code -->\n  </div>\n  <!-- /Right col -->\n\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/bars/bars.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bars/bars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarsComponent = (function () {
    function BarsComponent() {
    }
    BarsComponent.prototype.ngOnInit = function () {
        var testSlider1 = document.getElementById('test-slider1'), testSlider2 = document.getElementById('test-slider2');
        var range_all_sliders = { 'min': [0], 'max': [10000] };
        var categoryBudget = 3500;
        noUiSlider.create(testSlider1, {
            start: categoryBudget,
            connect: [true, false],
            step: 100,
            range: range_all_sliders,
            format: wNumb({
                decimals: 0,
                prefix: 'KR '
            }),
        });
        noUiSlider.create(testSlider2, {
            start: categoryBudget,
            connect: [true, false],
            step: 100,
            tooltips: true,
            range: range_all_sliders,
            format: wNumb({
                decimals: 0,
                prefix: 'KR '
            })
        });
    };
    BarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-bars',
            template: __webpack_require__("../../../../../src/app/bars/bars.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bars/bars.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarsComponent);
    return BarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Buttons</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <!-- /Left col -->\n  <div class=\"col s12 m6\">\n    <p class=\"secondary\">Buttons small</p>\n    <a class=\"waves-effect btn light-blue\">button</a>\n    <a class=\"waves-effect btn green\">button</a>\n    <a class=\"waves-effect waves-light btn red\">button</a>\n    <a class=\"waves-effect btn yellow\">button</a>\n    <a class=\"waves-effect waves-light btn dark-blue\">button</a>\n    <pre><code class=\"language-html\">class=\"waves-effect btn [add \"waves-light\" on dark colors]\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Default btns -->\n\n    <p class=\"secondary\">Buttons medium</p>\n    <a class=\"waves-effect btn light-blue btn-medium\">button</a>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-medium\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Medium btns -->\n\n    <p class=\"secondary\">Buttons large</p>\n    <a class=\"waves-effect  btn light-blue btn-large\">button</a>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-large\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Large btns -->\n\n    <p class=\"secondary\">Buttons x-large</p>\n    <a class=\"waves-effect btn light-blue btn-xl\">button</a>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-xl\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- XLarge btns -->\n\n    <p class=\"secondary\">Buttons Circle</p>\n    <a class=\"btn-floating waves-effect\">\n      <i class=\"material-icons\">add</i>\n    </a>\n    <a class=\"btn-floating waves-effect waves-light dark-blue\">\n      <i class=\"material-icons\">add</i>\n    </a>\n    <pre><code class=\"language-markup\">class=\"btn-floating waves-effect [waves-light dark-blue]\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Floating btns -->\n\n    <a class=\"btn-floating btn-large waves-effect\">\n      <i class=\"material-icons\">add</i>\n    </a>\n    <a class=\"btn-floating btn-large waves-effect waves-light dark-blue\">\n      <i class=\"material-icons\">add</i>\n    </a>\n    <pre><code class=\"language-html\">class=\"btn-floating btn-large waves-effect [waves-light dark-blue]\"</code></pre>\n    <!-- Floating btns large -->\n\n    <div class=\"divider\"></div>\n    <p class=\"secondary\">Tooltips</p>\n    <a class=\"btn dark-blue tooltipped\" data-position=\"top\" data-delay=\"50\"  data-tooltip=\"I am a tooltip\">Hover me!</a>\n\n  <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n  &lt;a class=\"tooltipped\" data-position=\"top\" data-delay=\"50\"  data-tooltip=\"I am a tooltip\"&gt;     \n    Hover me!\n  &lt;/a&gt; \n  \n  TO-DO: Issue with multiple tooltips. Function \".open()\" not working.\n  </ngx-prism>\n\n    <a href=\"http://next.materializecss.com/tooltips.html\">http://next.materializecss.com/tooltips.html</a>\n    <!-- Tooltip -->\n\n  </div>\n  <!-- /Left col end -->\n\n\n  <!-- /Right col -->\n  <div class=\"col s12 m6 dark-blue\">\n\n    <!-- Dropdown Trigger -->\n    <p class=\"secondary-white\">Drop downs</p>\n    <a class='dropdown-trigger btn-flat' href='#' data-target='dropdown1'>\n      <h1 class=\"white-text\">September\n        <i class=\"large material-icons\">arrow_drop_down</i>\n      </h1>\n    </a>\n    <!-- Dropdown Structure -->\n    <ul id='dropdown1' class='dropdown-content'>\n      <li>\n        <a href=\"#!\">Januar</a>\n      </li>\n      <li>\n        <a href=\"#!\">Februar</a>\n      </li>\n      <li>\n        <a href=\"#!\">Mars</a>\n      </li>\n      <li>\n        <a href=\"#!\">April</a>\n      </li>\n      <li>\n        <a href=\"#!\">Mai</a>\n      </li>\n      <li>\n        <a href=\"#!\">Juni</a>\n      </li>\n      <li>\n        <a href=\"#!\">Juli</a>\n      </li>\n      <li>\n        <a href=\"#!\">August</a>\n      </li>\n    </ul>\n\n    <br>\n    <br>\n\n    <pre><code class=\"language-markup\">&lt;ul id=\"dropdown\" class=\"drowdown-content\"&gt;&lt;/ul&gt;</code></pre>\n    <p class=\"caption white-text\">Init and options:</p>\n<ngx-prism language=\"javascript\">\n  let elem = document.querySelector('.dropdown-trigger');\n\n  let options = &#123;\n    alignment: 'right',   // Defines the edge the menu is aligned to.\n    constrainWidth: true, // If true, constrainWidth to the size of the dropdown activator.\n    coverTrigger: true,   // If false, the dropdown will show below the trigger\n    closeOnClick: true,   // If true, close dropdown on item click.\n    hover: false,         // If true, the dropdown will open on hover.\n    inDuration: 150,      // The duration of the transition enter in milliseconds.\n    outDuration: 250,     // The duration of the transition out in milliseconds.\n    onOpenStart: null,    // Function called when dropdown starts entering.\n    onOpenEnd: null,      // Function called when dropdown finishes entering.\n    onCloseStart: null,   // Function called when dropdown starts exiting.\n    onCloseEnd: null      // Function called when dropdown finishes exiting.\n  &#125;\n\n  let instance = M.Dropdown.init(elem, options);\n\n</ngx-prism>\n<a href=\"http://next.materializecss.com/dropdown.html\">http://next.materializecss.com/dropdown.html</a>\n    <div class=\"divider\"></div>\n\n    <!-- Icon in containers -->\n    <p class=\"secondary-white\">Icon buttons</p>\n    <div class=\"icon-container yellow\">\n      <i class=\"material-icons\">home</i>\n    </div>\n\n    <div class=\"icon-container\">\n      <i class=\"material-icons\">home</i>\n    </div>\n\n    <div class=\"icon-container-dotted\">\n      <i class=\"material-icons\">add</i>\n    </div>\n\n    <br>\n    <br>\n\n    <ngx-prism language=\"html\">\n    &lt;div class=\"icon-container\"&gt;\n       &lt;i class=\"material-icons\"&gt; icon-name &lt;/i&gt;\n    &lt;/div&gt;\n        \n    Border class: icon-container-border, icon-container-border-dark\n    Dotted border class: icon-container-dotted\n    </ngx-prism>\n\n    <div class=\"divider\"></div>\n\n    <!-- Button - Catergory Pickers -->\n    <p class=\"secondary-white\">Category picker</p>\n    <div class=\"row\">\n      <div class=\"col s2\">\n        <a class=\"btn-category\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig</span>\n        </a>\n      </div>\n      <div class=\"col s2\">\n        <a class=\"btn-category btn-category-active\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig\n            <i>Active</i>\n          </span>\n        </a>\n      </div>\n      <div class=\"col s2\">\n        <a class=\"btn-category\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig</span>\n        </a>\n      </div>\n    </div>\n    <!-- Button Row end -->\n\n\n    <ngx-prism language=\"html\">\n    &lt;div class=\"btn-category\"&gt; \n      &lt;div class=\"icon-container\"&gt;\n         &lt;i class=\"material-icons\"&gt; icon-name &lt;/i&gt;\n      &lt;/div&gt;\n      &lt;span class=\"body white-text\"&gt; Bolig &lt;/span&gt;\n    &lt;/div&gt; \n    \n    Active class: btn-category btn-category-active\n    </ngx-prism>\n\n    </div>\n    <!-- /Right col end -->\n\n  </div>\n  <!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        /* Dropdown */
        var dropdownOptions = {
            alignment: 'right',
            constrainWidth: true,
            coverTrigger: true,
            closeOnClick: true,
            hover: false,
            inDuration: 150,
            outDuration: 250,
            onOpenStart: null,
            onOpenEnd: null,
            onCloseStart: null,
            onCloseEnd: null // Function called when dropdown finishes exiting.
        };
        var dropdownElem = document.querySelector('.dropdown-trigger');
        var dropdown = M.Dropdown.init(dropdownElem, dropdownOptions);
        /* Tooltips */
        var tooltipElem = document.querySelector('.tooltipped');
        var tooltipOptions = {
            html: "Tooltip text",
            position: 'top',
            margin: 5,
            transitionMovement: 10,
            inDuration: 150,
            outDuration: 250,
            exitDelay: 0,
            enterDelay: 200
        };
        var tooltip = M.Tooltip.init(tooltipElem, tooltipOptions);
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/collapsible/collapsible.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: #fff;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Collapsible</h1>\n    <hr>\n  </div><!-- /Title head -->\n\n  <div class=\"col s12 m12\">\n\n    <ul class=\"collapsible popout\">\n      <!-- List-item -->\n      <li>\n        <!-- Collapsible-header -->\n        <div class=\"collapsible-header\">\n          <div class=\"row\">\n            <div class=\"col m2 l1 hide-on-small-and-down\">\n              <div class=\"icon-container-border-dark\">\n                <i class=\"material-icons\">home</i>\n              </div>\n            </div>\n            <div class=\"col s12 m10 l11\">\n              <div class=\"row\">\n                <div class=\"col s8\">\n                  <h3 class=\"headline\">Bolig</h3>\n                </div>\n                <div class=\"col s4 right-align\">\n                  <div class=\"icon-container icon-collapsible icon-rotate\">\n                    <i class=\"material-icons\">expand_more</i>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col s6\">\n                  <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                </div>\n                <div class=\"col s6 right-align\">\n                  <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col s12\">\n                  <div class=\"eco-bar\">\n                    <div class=\"determinate\" style=\"width: 70%\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Collapsible-header -->\n\n\n        <div class=\"collapsible-body\">\n          <!-- Collapsible-body -->\n          <div class=\"row\">\n            <!-- Table .row wrapper -->\n            <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n              <table class=\"editable-table\">\n                <thead>\n                  <tr>\n                    <th class=\"th-checkbox\">\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" />\n                        <span class=\"caption secondary\">Dato</span>\n                      </label>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Forhandler</span>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Beløp</span>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Notat</span>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"input-field\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"\">21.01.2018</span>\n                        </label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /Table .row wrapper -->\n        </div>\n        <!-- /Collapsible-body -->\n      </li>\n      <!-- /List-item -->\n\n      <!-- List-item -->\n      <li>\n          <!-- Collapsible-header -->\n          <div class=\"collapsible-header\">\n            <div class=\"row\">\n              <div class=\"col m2 l1 hide-on-small-and-down\">\n                <div class=\"icon-container-border-dark\">\n                  <i class=\"material-icons\">restaurant_menu</i>\n                </div>\n              </div>\n              <div class=\"col s12 m10 l11\">\n                <div class=\"row\">\n                  <div class=\"col s8\">\n                    <h3 class=\"headline\">Mat</h3>\n                  </div>\n                  <div class=\"col s4 right-align\">\n                    <div class=\"icon-container icon-collapsible icon-rotate\">\n                      <i class=\"material-icons\">expand_more</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s6\">\n                      <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                    </div>\n                    <div class=\"col s6 right-align\">\n                      <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                    </div>\n                  </div>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <div class=\"eco-bar\">\n                      <div class=\"determinate\" style=\"width: 70%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Collapsible-header -->\n  \n  \n          <div class=\"collapsible-body\">\n            <!-- Collapsible-body -->\n            <div class=\"row\">\n              <!-- Table .row wrapper -->\n              <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                <table class=\"editable-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"th-checkbox\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"caption secondary\">Dato</span>\n                        </label>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Forhandler</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Beløp</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Notat</span>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"input-field\">\n                          <label>\n                            <input type=\"checkbox\" class=\"filled-in\" />\n                            <span class=\"\">21.01.2018</span>\n                          </label>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- /Table .row wrapper -->\n          </div>\n          <!-- /Collapsible-body -->\n        </li>\n        <!-- /List-item -->\n        <!-- List-item -->\n      <li>\n          <!-- Collapsible-header -->\n          <div class=\"collapsible-header\">\n            <div class=\"row\">\n              <div class=\"col m2 l1 hide-on-small-and-down\">\n                <div class=\"icon-container-border-dark\">\n                  <i class=\"material-icons\">shopping_basket</i>\n                </div>\n              </div>\n              <div class=\"col s12 m10 l11\">\n                <div class=\"row\">\n                  <div class=\"col s8\">\n                    <h3 class=\"headline\">Klær</h3>\n                  </div>\n                  <div class=\"col s4 right-align\">\n                    <div class=\"icon-container icon-collapsible icon-rotate\">\n                      <i class=\"material-icons\">expand_more</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s6\">\n                      <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                    </div>\n                    <div class=\"col s6 right-align\">\n                      <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                    </div>\n                  </div>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <div class=\"eco-bar\">\n                      <div class=\"determinate\" style=\"width: 70%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Collapsible-header -->\n  \n  \n          <div class=\"collapsible-body\">\n            <!-- Collapsible-body -->\n            <div class=\"row\">\n              <!-- Table .row wrapper -->\n              <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                <table class=\"editable-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"th-checkbox\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"caption secondary\">Dato</span>\n                        </label>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Forhandler</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Beløp</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Notat</span>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"input-field\">\n                          <label>\n                            <input type=\"checkbox\" class=\"filled-in\" />\n                            <span class=\"\">21.01.2018</span>\n                          </label>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- /Table .row wrapper -->\n          </div>\n          <!-- /Collapsible-body -->\n        </li>\n        <!-- /List-item -->\n    </ul>\n\n\n<!-- Highlighted code -->\n<ngx-prism language=\"html\">\n    &lt;ul class=\"collapsible popout\">\n        &lt;li>\n          &lt;div class=\"collapsible-header\">\n            &lt;div class=\"row\">\n    \n                &lt;div class=\"col m2 l1 hide-on-small-and-down\">&lt;!-- Col - Icon -->\n                &lt;div class=\"icon-container-border-dark\">\n                    &lt;i class=\"material-icons\">home&lt;/i>\n                &lt;/div>\n                &lt;/div>&lt;!-- /Col - Icon -->\n    \n                &lt;div class=\"col s12 m10 l11\">&lt;!-- Col - Titles -->\n                &lt;div class=\"row\">\n                    &lt;div class=\"col s8\">\n                        &lt;h3 class=\"headline\">Bolig&lt;/h3>\n                    &lt;/div>\n                    &lt;div class=\"col s4 right-align\">\n                        &lt;div class=\"icon-container icon-collapsible icon-rotate\">\n                            &lt;i class=\"material-icons\">expand_more&lt;/i>\n                        &lt;/div>\n                    &lt;/div>\n                &lt;/div>\n    \n                &lt;div class=\"row\">\n                    &lt;div class=\"col s6\">\n                        &lt;span class=\"body secondary\">Penger brukt&lt;/span>\n                    &lt;/div>\n                    &lt;div class=\"col s6 right-align\">\n                        &lt;span class=\"body secondary\">Budsjett&lt;/span>\n                    &lt;/div>\n                &lt;/div>\n    \n                &lt;div class=\"row\">\n                    &lt;div class=\"col s12\">\n                        &lt;div class=\"eco-bar\">\n                            &lt;div class=\"determinate\" style=\"width: 70%\">&lt;/div>\n                        &lt;/div>\n                    &lt;/div>\n                &lt;/div>\n                &lt;/div>&lt;!-- /Col - Titles -->\n    \n            &lt;/div>&lt;!-- /Row -->\n          &lt;/div>&lt;!-- /Collapsible-header -->\n    \n    \n            &lt;div class=\"collapsible-body\">&lt;!-- Collapsible-body -->\n                &lt;div class=\"row\">\n                    &lt;div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                        &lt;table class=\"editable-table\">\n                            ... &lt;!-- Content here -->\n                        &lt;/table>\n                    &lt;/div>\n                &lt;/div>&lt;!-- /Table .row wrapper -->\n            &lt;/div>&lt;!-- /Collapsible-body -->\n        &lt;/li>&lt;!-- /List-item -->\n    &lt;/ul>\n    </ngx-prism>\n    <!-- /Highlighted code -->\n\n  </div>\n  <!-- /Col -->\n</div>\n<!-- /Row -->\n\n"

/***/ }),

/***/ "../../../../../src/app/collapsible/collapsible.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collapsible/collapsible.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsibleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsibleComponent = (function () {
    function CollapsibleComponent() {
    }
    CollapsibleComponent.prototype.ngOnInit = function () {
        var elem = document.querySelector('.collapsible');
        var instance = M.Collapsible.init(elem);
    };
    CollapsibleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-collapsible',
            template: __webpack_require__("../../../../../src/app/collapsible/collapsible.component.html"),
            styles: [__webpack_require__("../../../../../src/app/collapsible/collapsible.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsibleComponent);
    return CollapsibleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Forms</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m6\">\n\n    <p>Input fields - Checkboxes - Datepickers</p>\n    <div class=\"row\">\n      <form class=\"col s12\">\n        <div class=\"row\">\n\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">account_circle</i>\n            <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix\">First Name</label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">phone</i>\n            <input id=\"icon_telephone\" type=\"tel\" class=\"validate\">\n            <label for=\"icon_telephone\">Telephone</label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <label>\n              <input type=\"checkbox\" class=\"filled-in\" />\n              <span class=\"dark-blue-text\">Fast utgift</span>\n            </label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons nett-blue-text prefix\">date_range</i>\n            <input type=\"text\" class=\"datepicker\" placeholder=\"{{currentDate}}\">\n          </div>\n\n        </div>\n        <!-- End Row -->\n      </form>\n      <!-- End From -->\n    </div>\n    <!-- Input Fields  -->\n\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;form class=\"col s12\">\n      &lt;div class=\"row\">\n\n        &lt;div class=\"input-field col s6\">\n          &lt;i class=\"material-icons prefix\">account_circle&lt;/i>\n          &lt;input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n          &lt;label for=\"icon_prefix\">First Name&lt;/label>\n        &lt;/div>\n\n        &lt;div class=\"input-field col s6\">\n          &lt;i class=\"material-icons prefix\">phone&lt;/i>\n          &lt;input id=\"icon_telephone\" type=\"tel\" class=\"validate\">\n          &lt;label for=\"icon_telephone\">Telephone&lt;/label>\n        &lt;/div>\n\n        &lt;div class=\"input-field col s6\">\n          &lt;label>\n            &lt;input type=\"checkbox\" class=\"filled-in\" />\n            &lt;span class=\"dark-blue-text\">Fast utgift&lt;/span>\n          &lt;/label>\n        &lt;/div>\n\n        &lt;div class=\"input-field col s6\">\n          &lt;i class=\"material-icons nett-blue-text prefix\">date_range&lt;/i>\n          &lt;input type=\"text\" class=\"datepicker\">\n        &lt;/div>\n\n      &lt;/div>\n      <!-- End Row -->\n    &lt;/form>\n    <!-- End From -->\n    </ngx-prism>\n    <!-- Highlighted code -->\n\n    <div class=\"divider\"></div>\n\n\n  </div>\n  <!-- /Left col -->\n\n  <div class=\"col s12 m6 dark-blue\">\n      <p class=\"secondary-white\">Input fields - Checkboxes - Datepickers</p>\n    <div class=\"row\">\n      \n      <form class=\"col s12 form-on-dark-bg\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">account_circle</i>\n            <input id=\"icon_prefix_dark\" type=\"text\" class=\"validate\">\n            <label for=\"icon_prefix_dark\">First Name</label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">phone</i>\n            <input id=\"icon_telephone_dark\" type=\"tel\" class=\"validate\">\n            <label for=\"icon_telephone_dark\">Telephone</label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <label>\n              <input type=\"checkbox\" class=\"filled-in\" />\n              <span class=\"\">Fast utgift</span>\n            </label>\n          </div>\n\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons nett-blue-text prefix\">date_range</i>\n            <input type=\"text\" class=\"datepicker2\" placeholder=\"{{currentDate}}\">\n          </div>\n\n        </div>\n        <!-- End Row -->\n      </form>\n      <!-- End From -->\n    </div>\n    <!-- Input Fields  -->\n\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n    &lt;form class=\"col s12 form-on-dark-bg\">\n      ...\n    &lt;/form>\n    <!-- End From col -->\n    </ngx-prism>\n    <!-- Highlighted code -->\n\n  </div>\n  <!-- /Right col -->\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = (function () {
    function FormsComponent() {
        this.currentDate = new Date;
    }
    FormsComponent.prototype.ngOnInit = function () {
        var d = new Date("January 1, 2017 11:13:00");
        var today = new Date;
        var options = {
            format: "dd.mmm yyyy",
            setDefaultDate: true,
            defaultDate: today,
            yearRange: 5,
            minDate: null,
            maxDate: null // Should set Todays date plus 2 years
        };
        var elem = document.querySelector('.datepicker');
        var elem2 = document.querySelector('.datepicker2');
        var instance = M.Datepicker.init(elem, options);
        var instance2 = M.Datepicker.init(elem2, options);
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-forms',
            template: __webpack_require__("../../../../../src/app/forms/forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/misc/misc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\"><h1 class=\"uppercase flow-text\">Miscellaneous</h1><hr></div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m6\"></div>\n  <!-- /Left col -->\n\n  <div class=\"col s12 m6 dark-blue\"></div>\n  <!-- /Right col -->\n\n</div>\n<!-- /Row -->"

/***/ }),

/***/ "../../../../../src/app/misc/misc.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/misc/misc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiscComponent = (function () {
    function MiscComponent() {
    }
    MiscComponent.prototype.ngOnInit = function () {
    };
    MiscComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-misc',
            template: __webpack_require__("../../../../../src/app/misc/misc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/misc/misc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MiscComponent);
    return MiscComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: white;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Modals</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12\">\n\n\n\n    <div class=\"card-modal\">\n      <div class=\"card-header\">\n        <div class=\"card-modal-header-nav-bar\">\n          <h3 class=\"subheader white-text\">Legg til utgift</h3>\n        </div>\n        <!-- /nav-bar -->\n\n\n        <div class=\"card-modal-header-category-picker\">\n          <span class=\"caption secondary-white\">Velg kategori</span>\n\n          <div class=\"row hide-on-med-and-up\">\n            <div class=\"input-field col s12 form-on-dark-bg\">\n              <select class=\"category-picker-mobile\">\n                <option value=\"\" disabled selected>Valg Kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport </option>\n              </select>\n            </div>\n          </div>\n          <!-- /cat-picker-mobile -->\n\n          <div class=\"row hide-on-small-only\">\n            <div class=\"col c7\">\n              <div class=\"btn-category btn-category-active\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n\n          </div>\n          <!-- /row categories -->\n\n        </div>\n        <!-- /cat picker -->\n      </div>\n      <!-- /card header -->\n\n      <div class=\"card-content row\">\n        <form class=\"col s12\">\n          <div class=\"row\">\n            <div class=\"input-field col s12 m6\">                \n              <i class=\"material-icons prefix\">monetization_on</i>\n              <input id=\"modal_amount\" type=\"text\" class=\"validate\">\n              <label for=\"modal_amount\">Beløp</label>\n            </div>\n\n            <div class=\"input-field col s12 m6\">\n              <i class=\"material-icons nett-blue-text prefix\">date_range</i>\n              <input type=\"text\" class=\"datepicker3\" value=\"{{currentDate}}\">\n            </div>\n\n            <div class=\"input-field col s12\">\n              <i class=\"material-icons prefix\">store</i>\n              <input id=\"modal_telephone\" type=\"tel\" class=\"validate\">\n              <label for=\"modal_telephone\">Butikknavn</label>\n            </div>\n\n            <div class=\"input-field col s12\">\n              <i class=\"material-icons prefix\">edit</i>\n              <input id=\"modal_note\" type=\"text\" class=\"validate\">\n              <label for=\"modal_note\">Notat</label>\n            </div>\n\n            <div class=\"input-field col s12\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"dark-blue-text\">Fast utgift</span>\n              </label>\n            </div>\n\n          </div>\n\n        </form>\n      </div>\n      <!-- Modal content -->\n\n      <div class=\"card-action\">\n        <div class=\"waves-effect btn green\">Large</div>\n        <div class=\"waves-effect btn light-blue\">Large, og legg til ny</div>\n      </div>\n\n    </div>\n    <!-- Card Model -->\n\n\n\n\n  </div>\n  <!-- /Left col -->\n\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/modals/modals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalsComponent = (function () {
    function ModalsComponent() {
        this.currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
    }
    ModalsComponent.prototype.ngOnInit = function () {
        var options = {
            format: "dd. mmm yyyy",
            setDefaultDate: true,
            defaultDate: this.currentDate,
            yearRange: 5,
            minDate: null,
            maxDate: null // Should set Todays date plus 2 years
        };
        var datepickerModal = document.querySelector('.datepicker3');
        var instance = M.Datepicker.init(datepickerModal, options);
        var categoryPickerMobile = document.querySelector('.category-picker-mobile');
        var instance2 = M.Select.init(categoryPickerMobile);
    };
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-modals',
            template: __webpack_require__("../../../../../src/app/modals/modals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modals/modals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: #fff;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Tables</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m12\">\n    <table class=\"editable-table\">\n      <thead>\n        <tr>\n          <th class=\"th-checkbox\">\n            <label>\n              <input type=\"checkbox\" class=\"filled-in\" />\n              <span class=\"caption secondary\">Dato</span>\n            </label>\n          </th>\n          <th><span class=\"caption secondary\">Forhandler</span></th>\n          <th><span class=\"caption secondary\">Beløp</span></th>\n          <th><span class=\"caption secondary\">Notat</span></th>\n          <th><span class=\"caption secondary\">Kategori</span></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr>\n          <td>\n            <div class=\"input-field\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"\">21.01.2018</span>\n              </label>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n\n          <td>\n            <div class=\"input-field\">\n              <select>\n                <option value=\"\" disabled selected>Velg kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport</option>\n              </select>\n              <!-- <label>Materialize Select</label> -->\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <br><br>\n    \n  <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n    &lt;!--\n    On dark backgrounds: TODO\n    -->\n\n    &lt;table class=\"editable-table\">\n      &lt;thead>\n        &lt;tr>\n          &lt;th class=\"th-checkbox\"> &lt;!-- Add th-checkbox if checkbox in tableheader-->\n            &lt;label>\n              &lt;input type=\"checkbox\" class=\"filled-in\" />\n              &lt;span class=\"caption secondary\">Dato&lt;/span>\n            &lt;/label>\n          &lt;/th>\n          &lt;th>&lt;span class=\"caption secondary\">Forhandler&lt;/span>&lt;/th>\n        &lt;/tr>\n      &lt;/thead>\n      &lt;tbody>\n        &lt;tr>\n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;label>\n                &lt;input type=\"checkbox\" class=\"filled-in\" />\n                &lt;span class=\"\">21.01.2018&lt;/span>\n              &lt;/label>\n            &lt;/div>\n          &lt;/td>\n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              &lt;i class=\"material-icons icon-in-table\">edit&lt;/i>\n            &lt;/div>\n          &lt;/td>\n          \n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;select>\n                &lt;option value=\"\" disabled selected>Velg kategori&lt;/option>\n                &lt;option value=\"1\">Bolig&lt;/option>\n                &lt;option value=\"2\">Mat&lt;/option>\n              &lt;/select>\n            &lt;/div>\n          &lt;/td>\n        &lt;/tr>\n      &lt;/tbody>\n    &lt;/table>\n    </ngx-prism>\n    <!-- /Highlighted code -->\n  </div>\n  <!-- /Col -->\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        var elem = document.querySelector('select');
        var instance = M.Select.init(elem);
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Typography</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m6\">\n    <h3 class=\"display-3\">Display 3</h3>\n    <pre><code class=\"language-html\">class=\"display-3\"</code></pre>\n\n    <h3 class=\"display-2\">Display 2</h3>\n    <pre><code class=\"language-html\">class=\"display-2\"</code></pre>\n\n    <h3 class=\"display-1\">Display 1</h3>\n    <pre><code class=\"language-html\">class=\"display-1\"</code></pre>\n\n    <h3 class=\"headline\">Headline</h3>\n    <pre><code class=\"language-html\">class=\"headline\" | h1</code></pre>\n\n    <h3 class=\"title\">Title</h3>\n    <pre><code class=\"language-html\">class=\"title\" | h2</code></pre>\n\n    <h3 class=\"subhead\">Subhead</h3>\n    <pre><code class=\"language-html\">class=\"subhead\" | h3</code></pre>\n\n    <p class=\"body\">Body</p>\n    <pre><code class=\"language-html\">class=\"body\" | p</code></pre>\n\n    <p class=\"body-2\">Body-2</p>\n    <pre><code class=\"language-html\">class=\"body-2\"</code></pre>\n\n    <p class=\"table-content\">Table Content</p>\n    <pre><code class=\"language-html\">class=\"table-content\"</code></pre>\n\n    <p class=\"caption\">Caption</p>\n    <pre><code class=\"language-html\">class=\"caption\"</code></pre>\n\n    <div class=\"divider\"></div>\n\n    <p class=\"secondary\">Secondary</p>\n    <pre><code class=\"language-html\">class=\"body secondary\" | p class=\"secondary\"</code></pre>\n    <p class=\"disabled\">Disabled</p>\n    <pre><code class=\"language-html\">class=\"body disabled\" | p class=\"disabled\"</code></pre>\n\n  </div>\n  <!-- /Left col -->\n\n  <div class=\"col s12 m6 dark-blue\">\n    <h3 class=\"display-3 white-text\">Display 3</h3>\n    <pre><code class=\"language-html\">class=\"display-3 white-text\"</code></pre>\n\n    <h3 class=\"display-2 white-text\">Display 2</h3>\n    <pre><code class=\"language-html\">class=\"display-2 white-text\"</code></pre>\n\n    <h3 class=\"display-1 white-text\">Display 1</h3>\n    <pre><code class=\"language-html\">class=\"display-1 white-text\"</code></pre>\n\n    <h3 class=\"headline white-text\">Headline</h3>\n    <pre><code class=\"language-markup\">class=\"headline white-text\" | h1 class=\"white-text\"</code></pre>\n\n    <h3 class=\"title white-text\">Title</h3>\n    <pre><code class=\"language-html\">class=\"title white-text | h2 class=\"white-text\"</code></pre>\n\n    <h3 class=\"subhead white-text\">Subhead</h3>\n    <pre><code class=\"language-html\">class=\"subhead white-text | h3 class=\"white-text\"</code></pre>\n\n    <p class=\"body white-text\">Body</p>\n    <pre><code class=\"language-html\">class=\"body white-text | p class=\"white-text\"</code></pre>\n\n    <p class=\"body-2 white-text\">Body-2</p>\n    <pre><code class=\"language-html\">class=\"body-2 white-text\"</code></pre>\n\n    <p class=\"table-content white-text\">Table Content</p>\n    <pre><code class=\"language-html\">class=\"table-content white-text\"</code></pre>\n\n    <p class=\"caption white-text\">Caption</p>\n    <pre><code class=\"language-html\">class=\"caption white-text\"</code></pre>\n\n    <div class=\"divider\"></div>\n\n    <p class=\"secondary-white\">Secondary</p>\n    <pre><code class=\"language-html\">class=\"body secondary-white\" | p class=\"secondary-white\"</code></pre>\n    <p class=\"disabled-white\">Disabled</p>\n    <pre><code class=\"language-html\">class=\"body disabled-white\" | p class=\"disabled-white\"</code></pre>\n\n  </div>\n  <!-- /Right col -->\n\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map