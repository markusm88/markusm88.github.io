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

module.exports = "<section class=\"header-styleguide\">\n  <h1 class=\"display-2 disabled\">Nettbudsjett Styleguide</h1>\n</section>\n<app-typography></app-typography>\n<app-buttons></app-buttons>\n<app-forms></app-forms>\n<app-bars></app-bars>\n<app-table></app-table>\n<app-collapsible></app-collapsible>\n<app-modals></app-modals>\n<app-toasts></app-toasts>\n<app-loaders></app-loaders>\n<app-misc></app-misc>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toasts_toasts_component__ = __webpack_require__("../../../../../src/app/toasts/toasts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loaders_loaders_component__ = __webpack_require__("../../../../../src/app/loaders/loaders.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__collapsible_collapsible_component__["a" /* CollapsibleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__toasts_toasts_component__["a" /* ToastsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__loaders_loaders_component__["a" /* LoadersComponent */]
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

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Buttons</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <!-- /Left col -->\n  <div class=\"col s12 m6\">\n    <p class=\"secondary\">Buttons small</p>\n    <button class=\"waves-effect btn light-blue\">button</button>\n    <button class=\"waves-effect btn green\">button</button>\n    <button class=\"waves-effect waves-light btn red\">button</button>\n    <button class=\"waves-effect btn yellow\">button</button>\n    <button class=\"waves-effect waves-light btn dark-blue\">button</button>\n    <pre><code class=\"language-html\">class=\"waves-effect btn [add \"waves-light\" on dark colors]\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Default btns -->\n\n    <p class=\"secondary\">Buttons medium</p>\n    <button class=\"waves-effect btn light-blue btn-medium\">button</button>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-medium\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Medium btns -->\n\n    <p class=\"secondary\">Buttons large</p>\n    <button class=\"waves-effect  btn light-blue btn-large\">button</button>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-large\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Large btns -->\n\n    <p class=\"secondary\">Buttons x-large</p>\n    <button class=\"waves-effect btn light-blue btn-xl\">button</button>\n    <pre><code class=\"language-html\">class=\"waves-effect btn light-blue btn-xl\"</code></pre>\n    <div class=\"divider\"></div>\n\n    <p class=\"secondary\">Buttons flat</p>\n    <button class=\"btn-flat waves-effect\">button</button> <br><br>\n    <button class=\"btn-flat btn-medium waves-effect\">Button Medium</button> <br><br>\n    <button class=\"btn-flat btn-large waves-effect\">Button Large</button> <br><br>\n    <button class=\"btn-flat btn-xl waves-effect\">Button XL</button>\n    <pre><code class=\"language-html\">class=\"waves-effect btn-flat\"\n/* On dark bg */ Add class .white-text</code></pre>\n    <div class=\"divider\"></div>\n    <!-- XLarge btns -->\n\n    <p class=\"secondary\">Buttons Circle</p>\n    <button class=\"btn-floating waves-effect\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <button class=\"btn-floating waves-effect waves-light dark-blue\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <pre><code class=\"language-markup\">class=\"btn-floating waves-effect [waves-light dark-blue]\"</code></pre>\n    <div class=\"divider\"></div>\n    <!-- Floating btns -->\n\n    <button class=\"btn-floating btn-large waves-effect\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <button class=\"btn-floating btn-large waves-effect waves-light dark-blue\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <pre><code class=\"language-html\">class=\"btn-floating btn-large waves-effect [waves-light dark-blue]\"</code></pre>\n    <!-- Floating btns large -->\n\n    <div class=\"divider\"></div>\n    <p class=\"secondary\">Tooltips</p>\n    <button class=\"btn dark-blue tooltipped\" data-position=\"top\" data-delay=\"50\"  data-tooltip=\"I am a tooltip\">Hover me!</button>\n\n  <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n  &lt;a class=\"tooltipped\" data-position=\"top\" data-delay=\"50\"  data-tooltip=\"I am a tooltip\"&gt;     \n    Hover me!\n  &lt;/a&gt; \n  \n  TO-DO: Issue with multiple tooltips. Function \".open()\" not working.\n  </ngx-prism>\n\n    <a href=\"http://next.materializecss.com/tooltips.html\">http://next.materializecss.com/tooltips.html</a>\n    <!-- Tooltip -->\n\n  </div>\n  <!-- /Left col end -->\n\n\n  <!-- /Right col -->\n  <div class=\"col s12 m6 dark-blue\">\n\n    <!-- Dropdown Trigger -->\n    <p class=\"secondary-white\">Drop downs</p>\n    <a class='dropdown-trigger btn-flat' href='#' data-target='dropdown1'>\n      <h1 class=\"white-text\">September\n        <i class=\"large material-icons\">arrow_drop_down</i>\n      </h1>\n    </a>\n    <!-- Dropdown Structure -->\n    <ul id='dropdown1' class='dropdown-content'>\n      <li>\n        <a href=\"#!\">Januar</a>\n      </li>\n      <li>\n        <a href=\"#!\">Februar</a>\n      </li>\n      <li>\n        <a href=\"#!\">Mars</a>\n      </li>\n      <li>\n        <a href=\"#!\">April</a>\n      </li>\n      <li>\n        <a href=\"#!\">Mai</a>\n      </li>\n      <li>\n        <a href=\"#!\">Juni</a>\n      </li>\n      <li>\n        <a href=\"#!\">Juli</a>\n      </li>\n      <li>\n        <a href=\"#!\">August</a>\n      </li>\n    </ul>\n\n    <br>\n    <br>\n\n    <pre><code class=\"language-markup\">&lt;ul id=\"dropdown\" class=\"drowdown-content\"&gt;&lt;/ul&gt;</code></pre>\n    <p class=\"caption white-text\">Init and options:</p>\n<ngx-prism language=\"javascript\">\n  let elem = document.querySelector('.dropdown-trigger');\n\n  let options = &#123;\n    alignment: 'right',   // Defines the edge the menu is aligned to.\n    constrainWidth: true, // If true, constrainWidth to the size of the dropdown activator.\n    coverTrigger: true,   // If false, the dropdown will show below the trigger\n    closeOnClick: true,   // If true, close dropdown on item click.\n    hover: false,         // If true, the dropdown will open on hover.\n    inDuration: 150,      // The duration of the transition enter in milliseconds.\n    outDuration: 250,     // The duration of the transition out in milliseconds.\n    onOpenStart: null,    // Function called when dropdown starts entering.\n    onOpenEnd: null,      // Function called when dropdown finishes entering.\n    onCloseStart: null,   // Function called when dropdown starts exiting.\n    onCloseEnd: null      // Function called when dropdown finishes exiting.\n  &#125;\n\n  let instance = M.Dropdown.init(elem, options);\n\n</ngx-prism>\n<a href=\"http://next.materializecss.com/dropdown.html\">http://next.materializecss.com/dropdown.html</a>\n    <div class=\"divider\"></div>\n\n    <!-- Icon in containers -->\n    <p class=\"secondary-white\">Icon buttons</p>\n    <div class=\"icon-container yellow\">\n      <i class=\"material-icons\">home</i>\n    </div>\n\n    <div class=\"icon-container\">\n      <i class=\"material-icons\">home</i>\n    </div>\n\n    <div class=\"icon-container-dotted\">\n      <i class=\"material-icons\">add</i>\n    </div>\n\n    <br>\n    <br>\n\n    <ngx-prism language=\"html\">\n    &lt;div class=\"icon-container\"&gt;\n       &lt;i class=\"material-icons\"&gt; icon-name &lt;/i&gt;\n    &lt;/div&gt;\n        \n    /*\n    Icon with border:\n    icon-container-border\n    \n    Icon with dotted border:\n    icon-container-dotted\n    icon-container-dotted-dark\n    */\n\n    /*\n    Border Color classes: \n    border-dark\n    border-red\n    border-green\n    border-blue\n    */\n    </ngx-prism>\n\n    <div class=\"divider\"></div>\n\n    <!-- Button - Catergory Pickers -->\n    <p class=\"secondary-white\">Category picker</p>\n    <div class=\"row\">\n      <div class=\"col s12 m2\">\n        <a class=\"btn-category\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig</span>\n        </a>\n      </div>\n      <div class=\"col s12 m2\">\n        <a class=\"btn-category btn-category-active\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig\n            <i>Active</i>\n          </span>\n        </a>\n      </div>\n      <div class=\"col s12 m2\">\n        <a class=\"btn-category\">\n          <div class=\"icon-container\">\n            <i class=\"material-icons\">home</i>\n          </div>\n          <span class=\"body white-text\">Bolig</span>\n        </a>\n      </div>\n    </div>\n    <!-- Button Row end -->\n\n\n    <ngx-prism language=\"html\">\n    &lt;div class=\"btn-category\"&gt; \n      &lt;div class=\"icon-container\"&gt;\n         &lt;i class=\"material-icons\"&gt; icon-name &lt;/i&gt;\n      &lt;/div&gt;\n      &lt;span class=\"body white-text\"&gt; Bolig &lt;/span&gt;\n    &lt;/div&gt; \n    \n    Active class: btn-category btn-category-active\n    </ngx-prism>\n\n    </div>\n    <!-- /Right col end -->\n\n  </div>\n  <!-- /Row -->\n"

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

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: #fff;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Collapsible</h1>\n    <hr>\n  </div><!-- /Title head -->\n\n  <div class=\"col s12 m12\">\n\n    <ul class=\"collapsible popout\">\n      <!-- List-item -->\n      <li>\n        <!-- Collapsible-header -->\n        <div class=\"collapsible-header\">\n          <div class=\"row\">\n            <div class=\"col m2 l1 hide-on-small-and-down icon-col\">\n              <div class=\"icon-container-border border-dark-blue\">\n                <i class=\"material-icons\">home</i>\n              </div>\n            </div>\n            <div class=\"col s12 m10 l11\">\n              <div class=\"row\">\n                <div class=\"col s8\">\n                  <h3 class=\"headline\">Bolig</h3>\n                </div>\n                <div class=\"col s4 right-align\">\n                  <div class=\"icon-container icon-collapsible-rotate\">\n                    <i class=\"material-icons\">expand_more</i>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col s6\">\n                  <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                </div>\n                <div class=\"col s6 right-align\">\n                  <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col s12\">\n                  <div class=\"eco-bar\">\n                    <div class=\"determinate\" style=\"width: 70%\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Collapsible-header -->\n\n\n        <div class=\"collapsible-body\">\n          <!-- Collapsible-body -->\n          <div class=\"row\">\n            <!-- Table .row wrapper -->\n            <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n              <table class=\"editable-table responsive-table\">\n                <thead>\n                  <tr>\n                    <th class=\"th-checkbox\">\n                      <label>\n                        <input type=\"checkbox\" class=\"filled-in\" />\n                        <span class=\"caption secondary\">Dato</span>\n                      </label>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Forhandler</span>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Beløp</span>\n                    </th>\n                    <th>\n                      <span class=\"caption secondary\">Notat</span>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr><!-- Table Row 1 -->\n                    <td>\n                      <div class=\"input-field\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"\">21.01.2018</span>\n                        </label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                  </tr><!-- /Table Row 1 -->\n                  <tr><!-- Table Row 2 -->\n                    <td>\n                      <div class=\"input-field\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"\">21.01.2018</span>\n                        </label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                  </tr><!-- /Table Row 2 -->\n                  <tr><!-- Table Row 3 -->\n                    <td>\n                      <div class=\"input-field\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"\">21.01.2018</span>\n                        </label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"input-field\">\n                        <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                        <i class=\"material-icons icon-in-table\">edit</i>\n                      </div>\n                    </td>\n                  </tr><!-- /Table Row 3 -->\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /Table .row wrapper -->\n        </div>\n        <!-- /Collapsible-body -->\n      </li>\n      <!-- /List-item -->\n\n      <!-- List-item -->\n      <li>\n          <!-- Collapsible-header -->\n          <div class=\"collapsible-header\">\n            <div class=\"row\">\n              <div class=\"col m2 l1 hide-on-small-and-down icon-col\">\n                  <div class=\"icon-container-border border-dark-blue\">\n                  <i class=\"material-icons\">restaurant_menu</i>\n                </div>\n              </div>\n              <div class=\"col s12 m10 l11\">\n                <div class=\"row\">\n                  <div class=\"col s8\">\n                    <h3 class=\"headline\">Mat</h3>\n                  </div>\n                  <div class=\"col s4 right-align\">\n                    <div class=\"icon-container icon-collapsible-rotate\">\n                      <i class=\"material-icons\">expand_more</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s6\">\n                      <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                    </div>\n                    <div class=\"col s6 right-align\">\n                      <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                    </div>\n                  </div>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <div class=\"eco-bar\">\n                      <div class=\"determinate\" style=\"width: 70%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Collapsible-header -->\n  \n  \n          <div class=\"collapsible-body\">\n            <!-- Collapsible-body -->\n            <div class=\"row\">\n              <!-- Table .row wrapper -->\n              <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                <table class=\"editable-table responsive-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"th-checkbox\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"caption secondary\">Dato</span>\n                        </label>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Forhandler</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Beløp</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Notat</span>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"input-field\">\n                          <label>\n                            <input type=\"checkbox\" class=\"filled-in\" />\n                            <span class=\"\">21.01.2018</span>\n                          </label>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- /Table .row wrapper -->\n          </div>\n          <!-- /Collapsible-body -->\n        </li>\n        <!-- /List-item -->\n        <!-- List-item -->\n      <li>\n          <!-- Collapsible-header -->\n          <div class=\"collapsible-header\">\n            <div class=\"row\">\n              <div class=\"col m2 l1 hide-on-small-and-down icon-col\">\n                  <div class=\"icon-container-border border-dark-blue\">\n                  <i class=\"material-icons\">shopping_basket</i>\n                </div>\n              </div>\n              <div class=\"col s12 m10 l11\">\n                <div class=\"row\">\n                  <div class=\"col s8\">\n                    <h3 class=\"headline\">Klær</h3>\n                  </div>\n                  <div class=\"col s4 right-align\">\n                    <div class=\"icon-container icon-collapsible-rotate\">\n                      <i class=\"material-icons\">expand_more</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col s6\">\n                      <span class=\"body secondary\">Penger brukt: KR 4.231</span>\n                    </div>\n                    <div class=\"col s6 right-align\">\n                      <span class=\"body secondary\">Budsjett: KR 6.400</span>\n                    </div>\n                  </div>\n                <div class=\"row\">\n                  <div class=\"col s12\">\n                    <div class=\"eco-bar\">\n                      <div class=\"determinate\" style=\"width: 70%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Collapsible-header -->\n  \n  \n          <div class=\"collapsible-body\">\n            <!-- Collapsible-body -->\n            <div class=\"row\">\n              <!-- Table .row wrapper -->\n              <div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                <table class=\"editable-table responsive-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"th-checkbox\">\n                        <label>\n                          <input type=\"checkbox\" class=\"filled-in\" />\n                          <span class=\"caption secondary\">Dato</span>\n                        </label>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Forhandler</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Beløp</span>\n                      </th>\n                      <th>\n                        <span class=\"caption secondary\">Notat</span>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"input-field\">\n                          <label>\n                            <input type=\"checkbox\" class=\"filled-in\" />\n                            <span class=\"\">21.01.2018</span>\n                          </label>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"input-field\">\n                          <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n                          <i class=\"material-icons icon-in-table\">edit</i>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- /Table .row wrapper -->\n          </div>\n          <!-- /Collapsible-body -->\n        </li>\n        <!-- /List-item -->\n    </ul>\n\n\n<!-- Highlighted code -->\n<ngx-prism language=\"html\">\n    &lt;ul class=\"collapsible popout\">\n        &lt;li>\n          &lt;div class=\"collapsible-header\">\n            &lt;div class=\"row\">\n    \n                &lt;div class=\"col m2 l1 hide-on-small-and-down icon-col\">&lt;!-- Col - Icon -->\n                &lt;div class=\"icon-container-border border-dark-blue\">\n                    &lt;i class=\"material-icons\">home&lt;/i>\n                &lt;/div>\n                &lt;/div>&lt;!-- /Col - Icon -->\n    \n                &lt;div class=\"col s12 m10 l11\">&lt;!-- Col - Titles -->\n                &lt;div class=\"row\">\n                    &lt;div class=\"col s8\">\n                        &lt;h3 class=\"headline\">Bolig&lt;/h3>\n                    &lt;/div>\n                    &lt;div class=\"col s4 right-align\">\n                        &lt;div class=\"icon-container icon-collapsible-rotate\">\n                            &lt;i class=\"material-icons\">expand_more&lt;/i>\n                        &lt;/div>\n                    &lt;/div>\n                &lt;/div>\n    \n                &lt;div class=\"row\">\n                    &lt;div class=\"col s6\">\n                        &lt;span class=\"body secondary\">Penger brukt&lt;/span>\n                    &lt;/div>\n                    &lt;div class=\"col s6 right-align\">\n                        &lt;span class=\"body secondary\">Budsjett&lt;/span>\n                    &lt;/div>\n                &lt;/div>\n    \n                &lt;div class=\"row\">\n                    &lt;div class=\"col s12\">\n                        &lt;div class=\"eco-bar\">\n                            &lt;div class=\"determinate\" style=\"width: 70%\">&lt;/div>\n                        &lt;/div>\n                    &lt;/div>\n                &lt;/div>\n                &lt;/div>&lt;!-- /Col - Titles -->\n    \n            &lt;/div>&lt;!-- /Row -->\n          &lt;/div>&lt;!-- /Collapsible-header -->\n    \n    \n            &lt;div class=\"collapsible-body\">&lt;!-- Collapsible-body -->\n                &lt;div class=\"row\">\n                    &lt;div class=\"col s12 m10 l11 offset-m2 offset-l1\">\n                        &lt;table class=\"editable-table\">\n                            ... &lt;!-- Content here -->\n                        &lt;/table>\n                    &lt;/div>\n                &lt;/div>&lt;!-- /Table .row wrapper -->\n            &lt;/div>&lt;!-- /Collapsible-body -->\n        &lt;/li>&lt;!-- /List-item -->\n    &lt;/ul>\n    </ngx-prism>\n    <!-- /Highlighted code -->\n\n  </div>\n  <!-- /Col -->\n</div>\n<!-- /Row -->\n\n"

/***/ }),

/***/ "../../../../../src/app/collapsible/collapsible.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-col {\n  padding: 0;\n  text-align: center; }\n", ""]);

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

/***/ "../../../../../src/app/loaders/loaders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n    <div class=\"col m7 sg-row-title\"><h1 class=\"uppercase flow-text\">Loaders</h1><hr></div>\n    <!-- /Title head -->\n  \n    <div class=\"col s12 m6\">\n        <p>Loader Logo</p>\n        <div class=\"logo-nb logo-loader\">\n          <svg width=\"128px\" height=\"128px\" viewBox=\"0 0 128 128\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <clipPath id=\"cut-off-bottom\">\n              <circle cx=\"64\" cy=\"64\" r=\"55.8\"></circle>\n            </clipPath>\n            <defs>\n              <path d=\"M6.38411872,101.628542 L49.6981801,40.3406897 L49.6981801,40.3406897 C49.8575546,40.1151805 50.1695644,40.0615677 50.3950736,40.2209422 C50.4421878,40.2542393 50.483184,40.2954392 50.516247,40.342718 L73.8576684,73.7199289 L73.8576684,73.7199289 C74.0159227,73.9462255 74.3276628,74.0013848 74.5539595,73.8431305 C74.6016406,73.8097861 74.6431359,73.7683752 74.6765773,73.720762 L113.812414,18\"\n                id=\"path-1\"></path>\n            </defs>\n            <g id=\"Logo-group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Nettbudsjett-anim-logo\">\n                <g id=\"bars\" clip-path=\"url(#cut-off-bottom)\">\n                  <path d=\"M20.5,121 L20.5,40\" id=\"bar-line-1\" class=\"bar bar-1\"></path>\n                  <path d=\"M49.5,121 L49.5,40\" id=\"bar-line-2\" class=\"bar bar-2\"></path>\n                  <path d=\"M78.5,121 L78.5,40\" id=\"bar-line-3\" class=\"bar bar-3\"></path>\n                  <path d=\"M107.5,121 L107.5,40\" id=\"bar-line-4\" class=\"bar bar-4\"></path>\n                </g>\n                <g id=\"circles\">\n                  <circle class=\"nb-circle nb-circle-first\" cx=\"64\" cy=\"66\" r=\"57\"></circle>\n                  <circle class=\"nb-circle nb-circle-second\" cx=\"64\" cy=\"66\" r=\"57\"></circle>\n                </g>\n                <g id=\"Arrow-line\" class=\"arrow-line\">\n                  <use class=\"arrow-line-outside\" xlink:href=\"#path-1\"></use>\n                  <use class=\"arrow-line-inside\" xlink:href=\"#path-1\"></use>\n                </g>\n                <path d=\"M104.290456,12.0674221 L122.149807,24.5971978 L122.149807,24.5971978 C123.506146,25.5487797 125.377087,25.2206585 126.328669,23.8643187 C126.695506,23.3414456 126.885887,22.7151385 126.872099,22.0765651 L126.481919,4.00631946 L126.481919,4.00631946 C126.446152,2.34985131 125.074324,1.03601353 123.417856,1.07178063 C123.131904,1.07795503 122.848304,1.12499049 122.575669,1.2114587 L105.106498,6.75192866 L105.106498,6.75192866 C103.527172,7.252823 102.652931,8.93917484 103.153825,10.5185009 C103.352665,11.1454463 103.75203,11.6896725 104.290456,12.0674221 Z\"\n                  class=\"arrow-head\"></path>\n              </g>\n            </g>\n          </svg>\n        </div>\n        <ngx-prism language=\"html\">\n&lt;!-- Wrap svg with div class: \"logo-nb logo-loader\" -->\n&lt;!-- Copy and paste svg and use inline html  -->\n&lt;!-- Remove logo-loader for usage only logo  -->\n\n&lt;div class=\"logo-nb logo-loader\">\n  &lt;svg width=\"128px\" height=\"128px\" viewBox=\"0 0 128 128\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    &lt;clipPath id=\"cut-off-bottom\">\n        &lt;circle cx=\"64\" cy=\"64\" r=\"55.8\">&lt;/circle>\n    &lt;/clipPath>\n    &lt;defs>\n        &lt;path d=\"M6.38411872,101.628542 L49.6981801,40.3406897 L49.6981801,40.3406897 C49.8575546,40.1151805 50.1695644,40.0615677 50.3950736,40.2209422 C50.4421878,40.2542393 50.483184,40.2954392 50.516247,40.342718 L73.8576684,73.7199289 L73.8576684,73.7199289 C74.0159227,73.9462255 74.3276628,74.0013848 74.5539595,73.8431305 C74.6016406,73.8097861 74.6431359,73.7683752 74.6765773,73.720762 L113.812414,18\" id=\"path-1\">&lt;/path>\n    &lt;/defs>\n    &lt;g id=\"Logo-group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        &lt;g id=\"Nettbudsjett-anim-logo\">\n            &lt;g id=\"bars\" clip-path=\"url(#cut-off-bottom)\">\n                &lt;path d=\"M20.5,121 L20.5,40\" id=\"bar-line-1\" class=\"bar bar-1\">&lt;/path>\n                &lt;path d=\"M49.5,121 L49.5,40\" id=\"bar-line-2\" class=\"bar bar-2\">&lt;/path>\n                &lt;path d=\"M78.5,121 L78.5,40\" id=\"bar-line-3\" class=\"bar bar-3\">&lt;/path>\n                &lt;path d=\"M107.5,121 L107.5,40\" id=\"bar-line-4\" class=\"bar bar-4\">&lt;/path>\n            &lt;/g>\n            &lt;g id=\"circles\">\n              &lt;circle class=\"nb-circle nb-circle-first\" cx=\"64\" cy=\"66\" r=\"57\">&lt;/circle>\n              &lt;circle class=\"nb-circle nb-circle-second\" cx=\"64\" cy=\"66\" r=\"57\">&lt;/circle>\n            &lt;/g>\n            &lt;g id=\"Arrow-line\" class=\"arrow-line\">\n                &lt;use class=\"arrow-line-outside\" xlink:href=\"#path-1\">&lt;/use>\n                &lt;use class=\"arrow-line-inside\" xlink:href=\"#path-1\">&lt;/use>\n            &lt;/g>\n            &lt;path d=\"M104.290456,12.0674221 L122.149807,24.5971978 L122.149807,24.5971978 C123.506146,25.5487797 125.377087,25.2206585 126.328669,23.8643187 C126.695506,23.3414456 126.885887,22.7151385 126.872099,22.0765651 L126.481919,4.00631946 L126.481919,4.00631946 C126.446152,2.34985131 125.074324,1.03601353 123.417856,1.07178063 C123.131904,1.07795503 122.848304,1.12499049 122.575669,1.2114587 L105.106498,6.75192866 L105.106498,6.75192866 C103.527172,7.252823 102.652931,8.93917484 103.153825,10.5185009 C103.352665,11.1454463 103.75203,11.6896725 104.290456,12.0674221 Z\" class=\"arrow-head\">&lt;/path>\n        &lt;/g>\n    &lt;/g>\n  &lt;/svg>\n&lt;/div>\n      </ngx-prism>\n\n\n      <p>Loader defualt</p>\n      <div id=\"loaders-white\" class=\"row\">\n        \n        <div class=\"col s6\">\n          <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"col s6\">\n            <div class=\"preloader-wrapper active\">\n              <div class=\"spinner-layer\">\n                <div class=\"circle-clipper left\">\n                  <div class=\"circle\"></div>\n                </div>\n                <div class=\"gap-patch\">\n                  <div class=\"circle\"></div>\n                </div>\n                <div class=\"circle-clipper right\">\n                  <div class=\"circle\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n      </div>\n      <!-- /Spinner row -->\n  \n      <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n    &lt;div class=\"preloader-wrapper big active\">\n  \n      &lt;div class=\"spinner-layer\">\n        &lt;div class=\"circle-clipper left\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"gap-patch\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"circle-clipper right\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n      &lt;/div>\n  \n    &lt;/div>\n  \n    &lt;!-- \n    EXTRA CLASSES - Add to wrapper\n    Large loader add: .big\n    Disable/activate loader add: .active \n    -->\n  \n    &lt;!-- \n    COLOR CLASSES - Add to spinner layer:\n    .spinner-blue-only\n    .spinner-red-only\n    .spinner-yellow-only\n    .spinner-green-only\n    (Default color need no class)\n    -->\n  </ngx-prism>\n    <!-- /Highlighted code -->\n  \n    </div>\n    <!-- /Left col -->\n    \n    <div class=\"col s12 m6 dark-blue\">\n        <p class=\"white-text\">Loader Logo on dark bg</p>\n        <div class=\"logo-nb-on-dark logo-loader\">\n          <svg width=\"128px\" height=\"128px\" viewBox=\"0 0 128 128\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <clipPath id=\"cut-off-bottom\">\n              <circle cx=\"64\" cy=\"64\" r=\"55.8\"></circle>\n            </clipPath>\n            <defs>\n              <path d=\"M6.38411872,101.628542 L49.6981801,40.3406897 L49.6981801,40.3406897 C49.8575546,40.1151805 50.1695644,40.0615677 50.3950736,40.2209422 C50.4421878,40.2542393 50.483184,40.2954392 50.516247,40.342718 L73.8576684,73.7199289 L73.8576684,73.7199289 C74.0159227,73.9462255 74.3276628,74.0013848 74.5539595,73.8431305 C74.6016406,73.8097861 74.6431359,73.7683752 74.6765773,73.720762 L113.812414,18\"\n                id=\"path-1\"></path>\n            </defs>\n            <g id=\"Logo-group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Nettbudsjett-anim-logo\">\n                <g id=\"bars\" clip-path=\"url(#cut-off-bottom)\">\n                  <path d=\"M20.5,121 L20.5,40\" id=\"bar-line-1\" class=\"bar bar-1\"></path>\n                  <path d=\"M49.5,121 L49.5,40\" id=\"bar-line-2\" class=\"bar bar-2\"></path>\n                  <path d=\"M78.5,121 L78.5,40\" id=\"bar-line-3\" class=\"bar bar-3\"></path>\n                  <path d=\"M107.5,121 L107.5,40\" id=\"bar-line-4\" class=\"bar bar-4\"></path>\n                </g>\n                <g id=\"circles\">\n                  <circle class=\"nb-circle nb-circle-first\" cx=\"64\" cy=\"66\" r=\"57\"></circle>\n                  <circle class=\"nb-circle nb-circle-second\" cx=\"64\" cy=\"66\" r=\"57\"></circle>\n              </g>\n                <g id=\"Arrow-line\" class=\"arrow-line\">\n                  <use class=\"arrow-line-outside\" xlink:href=\"#path-1\"></use>\n                  <use class=\"arrow-line-inside\" xlink:href=\"#path-1\"></use>\n                </g>\n                <path d=\"M104.290456,12.0674221 L122.149807,24.5971978 L122.149807,24.5971978 C123.506146,25.5487797 125.377087,25.2206585 126.328669,23.8643187 C126.695506,23.3414456 126.885887,22.7151385 126.872099,22.0765651 L126.481919,4.00631946 L126.481919,4.00631946 C126.446152,2.34985131 125.074324,1.03601353 123.417856,1.07178063 C123.131904,1.07795503 122.848304,1.12499049 122.575669,1.2114587 L105.106498,6.75192866 L105.106498,6.75192866 C103.527172,7.252823 102.652931,8.93917484 103.153825,10.5185009 C103.352665,11.1454463 103.75203,11.6896725 104.290456,12.0674221 Z\"\n                  class=\"arrow-head\"></path>\n              </g>\n            </g>\n          </svg>\n        </div>\n        <ngx-prism language=\"html\">\n            &lt;!-- For logo / loader on dark bg add: -->\n            &lt;!-- \"logo-nb-on-dark logo-loader\" -->\n          </ngx-prism>\n\n          <div class=\"divider\"></div>\n      <p class=\"white-text\">Loader different colors</p>\n      <div id=\"loaders-dark\" class=\"row\">\n        <div class=\"col s6\">\n          <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-red\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-yellow\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-green\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s6\">\n          <div class=\"preloader-wrapper  active\">\n            <div class=\"spinner-layer spinner-blue\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-red\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-yellow\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n      \n            <div class=\"spinner-layer spinner-green\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Spinner row -->\n          <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n    &lt;div class=\"preloader-wrapper big active\">\n  \n      &lt;div class=\"spinner-layer-blue\">\n        &lt;div class=\"circle-clipper left\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"gap-patch\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"circle-clipper right\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n      &lt;/div>\n  \n      &lt;div class=\"spinner-layer-red\">\n        &lt;div class=\"circle-clipper left\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"gap-patch\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n        &lt;div class=\"circle-clipper right\">\n        &lt;div class=\"circle\">&lt;/div>\n        &lt;/div>\n      &lt;/div>\n  \n      ...\n  \n    &lt;/div>\n  \n    &lt;!-- \n    Multicolor Loader:\n    Place multiple spinners inside preloader-wrapper\n    -->\n  \n    &lt;!-- \n    COLOR CLASSES - Add to spinner layer (note \"-only\" is removed from classname):\n    .spinner-blue\n    .spinner-red\n    .spinner-yellow\n    .spinner-green\n    -->\n  </ngx-prism>\n    <!-- /Highlighted code -->\n    </div>\n    <!-- /Right col -->\n  \n  </div>\n  <!-- /Row -->"

/***/ }),

/***/ "../../../../../src/app/loaders/loaders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loaders/loaders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadersComponent; });
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

var LoadersComponent = (function () {
    function LoadersComponent() {
    }
    LoadersComponent.prototype.ngOnInit = function () {
    };
    LoadersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-loaders',
            template: __webpack_require__("../../../../../src/app/loaders/loaders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loaders/loaders.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/misc/misc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Miscellaneous</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m6\">\n  </div>\n  <!-- /Left col -->\n\n  <div class=\"col s12 m6 dark-blue\">\n  </div>\n  <!-- /Right col -->\n\n</div>\n<!-- /Row -->\n\n\n<!-- Row navbar with anim logo-->\n<div class=\"row\">\n    <nav>\n        <div class=\"nav-wrapper\">\n          <a href=\"#\" class=\"brand-logo center\">\n              <div class=\"logo\">\n                  <svg viewBox=\"0 0 522 128\"> <g id=\"bars\" clip-path=\"url(#cut-off-bottom)\"> <path data-spirit-id=\"bar-1\" d=\"M18.5,121 L18.5,40\" class=\"bar bar-1\"></path> <path data-spirit-id=\"bar-2\" d=\"M47.5,121 L47.5,40\" class=\"bar bar-2\"></path> <path data-spirit-id=\"bar-3\" d=\"M76.5,121 L76.5,40\" class=\"bar bar-3\"></path> <path data-spirit-id=\"bar-4\" d=\"M105.5,121 L105.5,40\" class=\"bar bar-4\"></path> </g> <circle data-spirit-id=\"cricle-border\" class=\"base-circle\" cx=\"62\" cy=\"66\" r=\"57.5\"></circle> <clipPath id=\"cut-off-bottom\"> <circle data-spirit-id=\"circle-mask\" cx=\"62\" cy=\"66\" r=\"57.5\"></circle> </clipPath> <defs> <path id=\"arrow-line-path\" d=\"M6.38411872,101.628542 L49.6981801,40.3406897 L49.6981801,40.3406897 C49.8575546,40.1151805 50.1695644,40.0615677 50.3950736,40.2209422 C50.4421878,40.2542393 50.483184,40.2954392 50.516247,40.342718 L73.8576684,73.7199289 L73.8576684,73.7199289 C74.0159227,73.9462255 74.3276628,74.0013848 74.5539595,73.8431305 C74.6016406,73.8097861 74.6431359,73.7683752 74.6765773,73.720762 L113.812414,18\"></path> </defs> <g id=\"arrow-line\"> <use data-spirit-id=\"arrow-line-outside\" class=\"arrow-line arrow-line-outside\" xlink:href=\"#arrow-line-path\"></use> <use data-spirit-id=\"arrow-line-inside\" class=\"arrow-line arrow-line-inside\" xlink:href=\"#arrow-line-path\"></use> </g> <path data-spirit-id=\"arrow-head\" d=\"M104.290456,12.0674221 L122.149807,24.5971978 L122.149807,24.5971978 C123.506146,25.5487797 125.377087,25.2206585 126.328669,23.8643187 C126.695506,23.3414456 126.885887,22.7151385 126.872099,22.0765651 L126.481919,4.00631946 L126.481919,4.00631946 C126.446152,2.34985131 125.074324,1.03601353 123.417856,1.07178063 C123.131904,1.07795503 122.848304,1.12499049 122.575669,1.2114587 L105.106498,6.75192866 L105.106498,6.75192866 C103.527172,7.252823 102.652931,8.93917484 103.153825,10.5185009 C103.352665,11.1454463 103.75203,11.6896725 104.290456,12.0674221 Z\" class=\"arrow-head\"></path>\n                  <path id=\"Nettbudsjett\" fill=\"#254F65\" d=\"M170.342476,53.8488381 C174.483429,53.8488381 178.072,55.3383619 181.009905,58.2755048 C183.947048,61.2134095 185.436571,64.8027429 185.436571,68.9436952 L185.436571,87.1136 C185.436571,88.129219 185.06781,89.0130286 184.339429,89.7406476 C183.634667,90.4454095 182.762286,90.8027429 181.747429,90.8027429 C180.732571,90.8027429 179.860952,90.4454095 179.160762,89.745219 C178.452952,89.0130286 178.094095,88.1276952 178.094095,87.1136 L178.094095,68.9436952 C178.094095,66.7814095 177.341333,64.9878857 175.794667,63.4625524 C174.265524,61.9341714 172.482667,61.1913143 170.342476,61.1913143 L170.094095,61.1913143 C167.930286,61.1913143 166.136762,61.9326476 164.610667,63.4587429 C163.084571,64.9848381 162.342476,66.7791238 162.342476,68.9436952 L162.342476,87.1136 C162.342476,88.1276952 161.986667,89.009219 161.294857,89.7269333 C160.544381,90.4507429 159.69181,90.8027429 158.689143,90.8027429 C157.67581,90.8027429 156.793524,90.4469333 156.07581,89.7551238 C155.352,89.0061714 155,88.1421714 155,87.1136 L155,57.5021714 C155,56.5124571 155.35581,55.6423619 156.046857,54.9246476 C156.797333,54.2008381 157.661333,53.8488381 158.689143,53.8488381 C160.236571,53.8488381 161.32381,54.4926476 161.918857,55.7627429 L162.097143,56.1429333 L162.458286,55.9280762 C164.782857,54.5482667 167.352,53.8488381 170.094095,53.8488381 L170.342476,53.8488381 Z M220.225219,72.5706667 C218.891886,74.8678095 216.870552,76.032 214.2176,76.032 L198.104076,76.0670476 L198.140648,76.4807619 C198.299886,78.3078095 199.031314,79.8499048 200.375314,81.192381 C201.900648,82.7184762 203.694933,83.4605714 205.859505,83.4605714 L206.107124,83.4605714 C208.748648,83.4605714 210.796648,82.408381 212.369219,80.2430476 C213.414552,78.8060952 214.802743,78.3786667 216.5056,78.9851429 C217.66979,79.3737143 218.446171,80.1653333 218.811124,81.3371429 C219.175314,82.536381 218.990933,83.6457143 218.26179,84.6354286 C215.253029,88.727619 211.163886,90.8030476 206.107124,90.8030476 L205.859505,90.8030476 C201.74141,90.8030476 198.165029,89.3257143 195.228648,86.4121905 C192.314362,83.5238095 190.81341,79.9710476 190.76541,75.8582857 L190.76541,69.0491429 C190.76541,64.9066667 192.254933,61.3295238 195.1936,58.4152381 C198.128457,55.479619 201.717029,53.9908571 205.859505,53.9908571 L206.107124,53.9908571 C210.296076,53.9908571 213.90979,55.5047619 216.847695,58.4899048 C218.244267,59.9108571 219.329981,61.5588571 220.076648,63.3874286 L220.07741,63.3897143 C220.486552,64.3779048 220.779886,65.4171429 220.950552,66.488381 L221.201219,67.7744762 L221.201219,69.0491429 C221.201219,70.3146667 220.874362,71.4979048 220.225219,72.5706667 Z M198.102552,68.7253333 L213.822933,68.7253333 L213.78179,68.3070476 C213.603505,66.4998095 212.8736,64.9592381 211.5456,63.5908571 C210.001219,62.071619 208.222171,61.3325714 206.107124,61.3325714 L205.859505,61.3325714 C203.695695,61.3325714 201.902171,62.0746667 200.375314,63.6 C199.025219,64.9508571 198.293029,66.4914286 198.1376,68.311619 L198.102552,68.7253333 Z M245.348038,87.1136762 C245.348038,88.1292952 244.979276,89.0131048 244.250895,89.7407238 C243.546133,90.4454857 242.673752,90.802819 241.658895,90.802819 C237.4928,90.802819 233.892038,89.3132952 230.955657,86.3753905 C228.018514,83.4390095 226.529752,79.8504381 226.529752,75.7079619 L226.529752,43.794819 C226.529752,42.8058667 226.885562,41.9342476 227.57661,41.2172952 C228.327086,40.4934857 229.191086,40.1414857 230.218133,40.1414857 C231.206324,40.1414857 232.077181,40.4965333 232.795657,41.1891048 C233.520229,41.938819 233.871467,42.7913905 233.871467,43.794819 L233.871467,54.4157714 L238.861181,54.4157714 C239.8768,54.4157714 240.748419,54.7731048 241.457752,55.4824381 C242.182324,56.1811048 242.549562,57.0512 242.549562,58.0691048 C242.549562,59.0862476 242.179276,59.9601524 241.437943,60.675581 C240.746133,61.3932952 239.879086,61.7582476 238.861181,61.7582476 L233.871467,61.7582476 L233.871467,75.7079619 C233.871467,77.8732952 234.613562,79.667581 236.139657,81.1929143 C237.66499,82.7182476 239.459276,83.4603429 241.623848,83.4603429 L241.658895,83.4603429 C242.674514,83.4603429 243.546895,83.8176762 244.250895,84.5224381 C244.979276,85.250819 245.348038,86.1224381 245.348038,87.1136762 Z M267.689219,84.5222095 C268.4176,85.2505905 268.786362,86.1229714 268.786362,87.1134476 C268.786362,88.1290667 268.4176,89.0136381 267.689219,89.7412571 C266.984457,90.4452571 266.112838,90.8025905 265.097981,90.8025905 C260.931886,90.8025905 257.331124,89.3130667 254.394743,86.3759238 C251.4576,83.4395429 249.968076,79.8502095 249.968076,75.7084952 L249.968076,43.7945905 C249.968076,42.8056381 250.323886,41.934781 251.014933,41.2170667 C251.766171,40.4932571 252.62941,40.1412571 253.657219,40.1412571 C254.64541,40.1412571 255.515505,40.4970667 256.233981,41.1888762 C256.958552,41.9385905 257.30979,42.7911619 257.30979,43.7945905 L257.30979,54.4155429 L262.299505,54.4155429 C263.315124,54.4155429 264.186743,54.7728762 264.896076,55.4829714 C265.620648,56.1816381 265.988648,57.0509714 265.988648,58.0688762 C265.988648,59.086019 265.6176,59.9606857 264.877029,60.6753524 C264.185219,61.3938286 263.318171,61.758019 262.299505,61.758019 L257.30979,61.758019 L257.30979,75.7084952 C257.30979,77.8723048 258.051886,79.6665905 259.577981,81.1926857 C261.103314,82.718781 262.8976,83.4601143 265.062171,83.4601143 L265.097981,83.4601143 C266.1136,83.4601143 266.985219,83.8174476 267.689219,84.5222095 Z M289.456533,53.8491429 C293.597486,53.8491429 297.186819,55.3386667 300.124724,58.2750476 C303.061867,61.2137143 304.550629,64.8030476 304.550629,68.9432381 L304.550629,75.7081905 C304.550629,79.8499048 303.061867,83.4384762 300.124724,86.375619 C297.187581,89.3127619 293.598248,90.8030476 289.456533,90.8030476 L289.208914,90.8030476 C286.465295,90.8030476 283.896152,90.103619 281.573105,88.7230476 L281.2112,88.5089524 L281.033676,88.8891429 C280.437867,90.1592381 279.35139,90.8030476 277.8032,90.8030476 C276.790629,90.8030476 275.908343,90.4472381 275.190629,89.7554286 C274.466819,89.0057143 274.114819,88.1417143 274.114819,87.1139048 L274.114819,43.6533333 C274.114819,42.663619 274.470629,41.7927619 275.161676,41.0750476 C275.91139,40.352 276.776152,40 277.8032,40 C278.792914,40 279.66301,40.3558095 280.380724,41.047619 C281.104533,41.7965714 281.456533,42.648381 281.456533,43.6533333 L281.456533,55.9824762 L282.021105,55.6731429 C284.226819,54.4624762 286.645105,53.8491429 289.208914,53.8491429 L289.456533,53.8491429 Z M297.208914,75.7081905 L297.208914,68.9432381 C297.208914,66.7809524 296.456152,64.9881905 294.908724,63.4628571 C293.380343,61.9344762 291.596724,61.1908571 289.456533,61.1908571 L289.208914,61.1908571 C287.045105,61.1908571 285.250819,61.9329524 283.724724,63.4590476 C282.198629,64.9851429 281.456533,66.7786667 281.456533,68.9432381 L281.456533,75.7081905 C281.456533,77.8727619 282.198629,79.6662857 283.724724,81.192381 C285.250057,82.7184762 287.044343,83.4605714 289.208914,83.4605714 L289.456533,83.4605714 C291.596724,83.4605714 293.379581,82.7184762 294.90339,81.1946667 C296.454629,79.6655238 297.208914,77.8712381 297.208914,75.7081905 Z M336.627048,53.8488381 C337.641905,53.8488381 338.514286,54.2061714 339.218286,54.9109333 C339.946667,55.6393143 340.315429,56.5109333 340.315429,57.5021714 L340.315429,87.1136 C340.315429,88.129219 339.946667,89.0130286 339.219048,89.7406476 C338.514286,90.4454095 337.641905,90.8027429 336.627048,90.8027429 C335.061333,90.8027429 333.972571,90.161219 333.389714,88.8964571 L333.213714,88.5124571 L332.849524,88.7280762 C330.528,90.1048381 327.961143,90.8027429 325.221333,90.8027429 L324.973714,90.8027429 C320.831238,90.8027429 317.242667,89.313219 314.306286,86.3753143 C311.369143,83.4396952 309.879619,79.8503619 309.879619,75.7078857 L309.879619,57.5021714 C309.879619,56.5124571 310.235429,55.6423619 310.926476,54.9246476 C311.67619,54.2008381 312.540952,53.8488381 313.568,53.8488381 C314.556952,53.8488381 315.427048,54.2046476 316.145524,54.8964571 C316.869333,55.6461714 317.221333,56.4987429 317.221333,57.5021714 L317.221333,75.7078857 C317.221333,77.8724571 317.963429,79.6667429 319.489524,81.1928381 C321.014857,82.7189333 322.809143,83.4602667 324.973714,83.4602667 L325.221333,83.4602667 C327.361524,83.4602667 329.144381,82.7189333 330.66819,81.1951238 C332.219429,79.665981 332.973714,77.8709333 332.973714,75.7078857 L332.973714,57.5021714 C332.973714,56.5124571 333.329524,55.6423619 334.025905,54.9200762 C334.736762,54.209981 335.61219,53.8488381 336.627048,53.8488381 Z M373.100038,40 C374.115657,40 374.987276,40.3573333 375.691276,41.0605714 C376.419657,41.7897143 376.788419,42.6628571 376.788419,43.6533333 L376.788419,87.1139048 C376.788419,88.1295238 376.419657,89.0133333 375.692038,89.7409524 C374.986514,90.4457143 374.114895,90.8030476 373.100038,90.8030476 C371.535086,90.8030476 370.445562,90.1615238 369.862705,88.8967619 L369.685943,88.5127619 L369.322514,88.728381 C367.00099,90.1051429 364.434133,90.8030476 361.694324,90.8030476 L361.446705,90.8030476 C357.304229,90.8030476 353.715657,89.3127619 350.779276,86.375619 C347.842133,83.4384762 346.35261,79.8506667 346.35261,75.7081905 L346.35261,68.9432381 C346.35261,64.8022857 347.842133,61.2129524 350.779276,58.2750476 C353.715657,55.3386667 357.30499,53.8491429 361.446705,53.8491429 L361.694324,53.8491429 C364.242133,53.8491429 366.660419,54.464 368.882895,55.6784762 L369.446705,55.9862857 L369.446705,43.6533333 C369.446705,42.663619 369.802514,41.7927619 370.498895,41.0704762 C371.20899,40.359619 372.084419,40 373.100038,40 Z M369.446705,75.7081905 L369.446705,68.9432381 C369.446705,66.7809524 368.693943,64.9881905 367.146514,63.4628571 C365.618133,61.9344762 363.834514,61.1908571 361.694324,61.1908571 L361.446705,61.1908571 C359.282895,61.1908571 357.48861,61.9329524 355.962514,63.4590476 C354.436419,64.9851429 353.695086,66.7786667 353.695086,68.9432381 L353.695086,75.7081905 C353.695086,77.8735238 354.436419,79.6670476 355.962514,81.192381 C357.487848,82.7184762 359.282133,83.4605714 361.446705,83.4605714 L361.694324,83.4605714 C363.834514,83.4605714 365.617371,82.7184762 367.141181,81.1946667 C368.692419,79.6655238 369.446705,77.8712381 369.446705,75.7081905 Z M407.334324,82.1084952 C406.652419,84.6616381 405.102705,86.7789714 402.727848,88.4018286 C400.385752,89.9949714 397.719086,90.8025905 394.803276,90.8025905 C392.223467,90.8025905 389.850133,90.1785905 387.75261,88.9488762 C385.690895,87.7115429 384.129752,86.0643048 383.110324,84.0483048 C382.491657,82.8635429 382.573943,81.6368762 383.343467,80.5077333 C384.16099,79.3724952 385.268038,78.8208762 386.727086,78.8208762 C388.3728,78.8208762 389.657371,79.5843048 390.44061,81.022781 C391.30461,82.6631619 392.708038,83.4601143 394.731657,83.4601143 L394.909181,83.4601143 C396.357562,83.4601143 397.537752,82.9846857 398.522133,82.0010667 C399.445562,81.0349714 399.826514,79.8989714 399.653562,78.622019 C399.500419,77.5576381 398.955657,76.686781 397.98499,75.9584 C397.047848,75.2673524 395.969752,74.9206857 394.691276,74.8985905 C390.937371,74.8254476 387.879848,73.4121143 385.60099,70.6959238 C383.262705,67.918781 382.607467,64.7553524 383.655848,61.294781 C384.337752,59.0517333 385.756419,57.1873524 387.866133,55.7564952 C389.977371,54.3736381 392.370514,53.6719238 394.980038,53.6719238 L395.085943,53.6719238 C399.637562,53.6719238 403.077562,55.5172571 405.310705,59.1576381 C406.071086,60.3904 406.057371,61.6277333 405.269562,62.8345905 C404.493943,64.0246857 403.332038,64.6273524 401.815848,64.6273524 C400.299657,64.6273524 399.101943,63.9644952 398.256229,62.6563048 C397.550705,61.566019 396.484038,61.0136381 395.085943,61.0136381 C394.124419,61.0136381 393.34499,61.2414476 392.631086,61.7313524 C391.923276,62.2250667 391.497371,62.8368762 391.328229,63.6010667 C391.093562,64.6448762 391.341943,65.5355429 392.08099,66.3149714 C392.828419,67.150019 393.753371,67.5561143 394.909181,67.5561143 C399.011276,67.5561143 402.390324,69.0273524 404.953371,71.9279238 C407.553752,74.9176381 408.354514,78.3416381 407.334324,82.1084952 Z M422.189257,44.5325714 C422.987733,45.3318095 423.393067,46.2986667 423.393067,47.4072381 C423.393067,48.5401905 422.988495,49.5192381 422.189257,50.3184762 C421.390781,51.1169524 420.411733,51.5215238 419.279543,51.5215238 C418.169448,51.5215238 417.201829,51.1169524 416.403352,50.3184762 C415.605638,49.52 415.201067,48.5409524 415.201067,47.4072381 C415.201067,46.2979048 415.605638,45.3310476 416.404114,44.5325714 C417.20259,43.7333333 418.17021,43.3287619 419.279543,43.3287619 C420.411733,43.3287619 421.390781,43.7333333 422.189257,44.5325714 Z M419.279238,53.9194667 C420.294095,53.9194667 421.166476,54.2768 421.87581,54.9853714 C422.600381,55.6855619 422.967619,56.5556571 422.967619,57.5728 L422.967619,89.8059429 C422.967619,93.9461333 421.478857,97.5354667 418.541714,100.473371 C415.60381,103.410514 412.014476,104.900038 407.873524,104.900038 C406.823619,104.900038 405.954286,104.554133 405.225905,103.851657 C404.501333,103.102705 404.149333,102.238705 404.149333,101.210895 C404.149333,100.221181 404.505143,99.3510857 405.196952,98.6341333 C405.947429,97.9095619 406.811429,97.5575619 407.838476,97.5575619 C410.025905,97.5575619 411.831619,96.8162286 413.357714,95.2901333 C414.88381,93.7632762 415.625905,91.9689905 415.625905,89.8059429 L415.625905,57.5728 C415.625905,56.557181 415.982476,55.6855619 416.687238,54.9815619 C417.392,54.2768 418.264381,53.9194667 419.279238,53.9194667 Z M458.890057,72.5706667 C457.556724,74.8678095 455.53539,76.032 452.882438,76.032 L436.768914,76.0670476 L436.805486,76.4807619 C436.964724,78.3078095 437.696152,79.8499048 439.040152,81.192381 C440.565486,82.7184762 442.359771,83.4605714 444.524343,83.4605714 L444.771962,83.4605714 C447.413486,83.4605714 449.461486,82.408381 451.034057,80.2430476 C452.080152,78.8060952 453.469867,78.3817143 455.170438,78.9851429 C456.334629,79.3737143 457.11101,80.1653333 457.475962,81.3371429 C457.840914,82.535619 457.655771,83.6457143 456.926629,84.6354286 C453.917867,88.727619 449.828724,90.8030476 444.771962,90.8030476 L444.524343,90.8030476 C440.40701,90.8030476 436.830629,89.3257143 433.893486,86.4121905 C430.9792,83.5238095 429.478248,79.9710476 429.430248,75.8582857 L429.430248,69.0491429 C429.430248,64.9066667 430.919771,61.3295238 433.858438,58.4152381 C436.793295,55.479619 440.381867,53.9908571 444.524343,53.9908571 L444.771962,53.9908571 C448.960914,53.9908571 452.57539,55.5047619 455.512533,58.4899048 C456.908343,59.9100952 457.994819,61.5580952 458.741486,63.3874286 L458.742248,63.3897143 C459.152152,64.3801905 459.445486,65.4186667 459.61539,66.488381 L459.866057,67.7744762 L459.866057,69.0491429 C459.866057,70.3146667 459.5392,71.4979048 458.890057,72.5706667 Z M436.76739,68.7253333 L452.487771,68.7253333 L452.446629,68.3070476 C452.268343,66.4998095 451.538438,64.9592381 450.210438,63.5908571 C448.666819,62.071619 446.887771,61.3325714 444.771962,61.3325714 L444.524343,61.3325714 C442.361295,61.3325714 440.56701,62.0746667 439.040152,63.6 C437.690057,64.9508571 436.957867,66.4914286 436.802438,68.311619 L436.76739,68.7253333 Z M484.013257,87.1136762 C484.013257,88.1292952 483.644495,89.0131048 482.916114,89.7407238 C482.211352,90.4454857 481.338971,90.802819 480.324114,90.802819 C476.158019,90.802819 472.557257,89.3132952 469.621638,86.3753905 C466.683733,83.4397714 465.194971,79.8504381 465.194971,75.7079619 L465.194971,43.794819 C465.194971,42.8058667 465.550781,41.9342476 466.241829,41.2172952 C466.992305,40.4934857 467.856305,40.1414857 468.883352,40.1414857 C469.871543,40.1414857 470.7424,40.4965333 471.460876,41.1891048 C472.185448,41.938819 472.536686,42.7906286 472.536686,43.794819 L472.536686,54.4157714 L477.5264,54.4157714 C478.542019,54.4157714 479.413638,54.7731048 480.122971,55.4824381 C480.847543,56.1811048 481.214781,57.0512 481.214781,58.0691048 C481.214781,59.0862476 480.844495,59.9601524 480.103162,60.675581 C479.411352,61.3932952 478.544305,61.7582476 477.5264,61.7582476 L472.536686,61.7582476 L472.536686,75.7079619 C472.536686,77.8732952 473.278781,79.667581 474.804876,81.1929143 C476.330971,82.7182476 478.124495,83.4603429 480.289067,83.4603429 L480.324114,83.4603429 C481.339733,83.4603429 482.212114,83.8176762 482.916114,84.5224381 C483.644495,85.250819 484.013257,86.1224381 484.013257,87.1136762 Z M507.451505,87.1136762 C507.451505,88.1292952 507.082743,89.0131048 506.354362,89.7407238 C505.6496,90.4454857 504.777219,90.802819 503.762362,90.802819 C499.596267,90.802819 495.995505,89.3132952 493.059124,86.3753905 C490.121981,83.4390095 488.633219,79.8504381 488.633219,75.7079619 L488.633219,43.794819 C488.633219,42.8058667 488.989029,41.9342476 489.680076,41.2172952 C490.430552,40.4934857 491.294552,40.1414857 492.3216,40.1414857 C493.30979,40.1414857 494.180648,40.4965333 494.899124,41.1891048 C495.623695,41.938819 495.974933,42.7913905 495.974933,43.794819 L495.974933,54.4157714 L500.964648,54.4157714 C501.980267,54.4157714 502.851886,54.7731048 503.561219,55.4824381 C504.28579,56.1811048 504.653029,57.0512 504.653029,58.0691048 C504.653029,59.0862476 504.282743,59.9601524 503.54141,60.675581 C502.8496,61.3932952 501.982552,61.7582476 500.964648,61.7582476 L495.974933,61.7582476 L495.974933,75.7079619 C495.974933,77.8732952 496.717029,79.667581 498.243124,81.1929143 C499.768457,82.7182476 501.562743,83.4603429 503.727314,83.4603429 L503.762362,83.4603429 C504.777981,83.4603429 505.650362,83.8176762 506.354362,84.5224381 C507.082743,85.250819 507.451505,86.1224381 507.451505,87.1136762 Z\"></path>\n                  </svg>\n              </div>\n          </a>\n          <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n          </ul>\n        </div>\n      </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/misc/misc.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  /* background: gray; */ }\n\n.logo svg {\n  /* opacity: 0; */\n  width: auto;\n  height: 40px;\n  margin-top: 10px; }\n\n.arrow-line {\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: transparent; }\n\n.arrow-line-inside {\n  stroke: #fff;\n  stroke-width: 9px; }\n\n.arrow-line-outside {\n  stroke: #254f65;\n  stroke-width: 24px; }\n\n.arrow-head {\n  fill: #fff; }\n\n.bar {\n  stroke-width: 21px; }\n\n.bar-1 {\n  stroke: #f4db5e; }\n\n.bar-2 {\n  stroke: #59c0f4; }\n\n.bar-3 {\n  stroke: #f0786e; }\n\n.bar-4 {\n  stroke: #5ac1ac; }\n\n.base-circle {\n  stroke: #fff;\n  stroke-width: 7px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: transparent; }\n\n#Nettbudsjett {\n  fill: #fff; }\n", ""]);

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
        /*
        TODO: Create logo anim i Haiku
        Rember to delete dependences: nettbudsjett.json and code inside angluar-cli.json
        */
        var animation = './assets/nettbudsjett.json';
        spirit.setup().then(function () { return spirit.load(animation); }).then(function (groups) {
            groups.get('Logo-wrapper').construct().yoyo(true).repeat(0).resume();
            groups.get('NB-Logo', 'Logo-wrapper').construct().yoyo(true).repeat(0).resume();
        });
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

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: white;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Modals and components</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n  <div class=\"col s12\">\n    <h2 id=\"add-expense\">Legg til utgift</h2>\n    <div class=\"card-modal\">\n      <div class=\"card-header\">\n        <div class=\"card-modal-header-nav-bar\">\n          <h3 class=\"subheader white-text\">Legg til utgift</h3>\n        </div>\n        <!-- /nav-bar -->\n        <div class=\"card-modal-header-category-picker\">\n          <span class=\"caption secondary-white\">Velg kategori</span>\n\n          <div class=\"row hide-on-med-and-up\">\n            <div class=\"input-field col s12 form-on-dark-bg\">\n              <select class=\"category-picker-mobile\">\n                <option value=\"\" disabled selected>Valg Kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport </option>\n              </select>\n            </div>\n          </div>\n          <!-- /cat-picker-mobile -->\n          <div class=\"row hide-on-small-only\">\n            <div class=\"col c7\">\n              <div class=\"btn-category btn-category-active\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n            <div class=\"col c7\">\n              <div class=\"btn-category\">\n                <div class=\"icon-container\">\n                  <i class=\"material-icons\">home</i>\n                </div>\n                <span class=\"body white-text\"> Bolig </span>\n              </div>\n              <!-- /category -->\n            </div>\n            <!-- /col category -->\n\n\n          </div>\n          <!-- /row categories -->\n\n        </div>\n        <!-- /cat picker -->\n      </div>\n      <!-- /card header -->\n\n      <div class=\"card-content row\">\n        <form class=\"col s12\">\n          <div class=\"row\">\n            <div class=\"input-field col s12 m6\">\n              <i class=\"material-icons prefix\">monetization_on</i>\n              <input id=\"modal_amount\" type=\"text\" class=\"validate\">\n              <label for=\"modal_amount\">Beløp</label>\n            </div>\n\n            <div class=\"input-field col s12 m6\">\n              <i class=\"material-icons nett-blue-text prefix\">date_range</i>\n              <input type=\"text\" class=\"datepicker3\" value=\"{{currentDate}}\">\n            </div>\n\n            <div class=\"input-field col s12\">\n              <i class=\"material-icons prefix\">store</i>\n              <input id=\"modal_telephone\" type=\"tel\" class=\"validate\">\n              <label for=\"modal_telephone\">Butikknavn</label>\n            </div>\n\n            <div class=\"input-field col s12\">\n              <i class=\"material-icons prefix\">edit</i>\n              <input id=\"modal_note\" type=\"text\" class=\"validate\">\n              <label for=\"modal_note\">Notat</label>\n            </div>\n\n            <div class=\"input-field col s12\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"dark-blue-text\">Fast utgift</span>\n              </label>\n            </div>\n\n          </div>\n\n        </form>\n      </div>\n      <!-- Modal content -->\n\n      <div class=\"card-action\">\n        <div class=\"waves-effect btn green\">Large</div>\n        <div class=\"waves-effect btn light-blue\">Large, og legg til ny</div>\n      </div>\n\n    </div>\n    <!-- Card Model -->\n    <br>\n    <div class=\"divider\"></div>\n\n    <h2 id=\"reccouring-expense\">Faste utgifter / Inntekt</h2>\n    <div class=\"row\">\n\n      <div class=\"col s4\">\n        <!-- Card Add -->\n        <div class=\"card-edit-budget\">\n          <div class=\"icon-container-dotted border-green\">\n            <i class=\"material-icons\">add</i>\n          </div>\n          <span class=\"subhead white-text block\">Legg til utgift</span>\n        </div>\n        <!-- /Card Add -->\n      </div>\n\n      <div class=\"col s4\">\n        <!-- Card Add -->\n        <div class=\"card-edit-budget\">\n          <span class=\"subhead white-text\">Lønn</span>\n          <div class=\"icon-and-text\">\n            <span class=\"body secondary-white\"><i class=\"material-icons\">account_circle</i>Petter</span>\n          </div>\n          <!-- <span class=\"headline white-text\">KR 60.000</span> -->\n\n          <form class=\"form-on-dark-bg\">\n          <div class=\"input-field\">\n            <input id=\"merchant\" type=\"text\" class=\"border-green validate\" value=\"Kiwi\">\n          </div>\n          </form>\n\n\n\n          <span class=\"body secondary-white\">KR 2.000 / dag</span>\n        </div>\n        <!-- /Card Add -->\n      </div>\n\n      <div class=\"col s4\"></div>\n    </div>\n\n  </div>\n  <!-- /Left col -->\n\n</div>\n<!-- /Row -->\n"

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

module.exports = "<div class=\"row z-depth-5 sg-display-row\" style=\"background: #fff;\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Tables</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n\n  <div class=\"col s12 m12\">\n    <table class=\"editable-table responsive-table\">\n      <thead>\n        <tr>\n          <th class=\"th-checkbox\">\n            <label>\n              <input type=\"checkbox\" class=\"filled-in\" />\n              <span class=\"caption secondary\">Dato</span>\n            </label>\n          </th>\n          <th><span class=\"caption secondary\">Forhandler</span></th>\n          <th><span class=\"caption secondary\">Beløp</span></th>\n          <th><span class=\"caption secondary\">Notat</span></th>\n          <th><span class=\"caption secondary\">Kategori</span></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr><!-- Table Row 1 -->\n          <td>\n            <div class=\"input-field\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"\">21.01.2018</span>\n              </label>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n\n          <td>\n            <div class=\"input-field\">\n              <select>\n                <option value=\"\" disabled selected>Velg kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport</option>\n              </select>\n            </div>\n          </td>\n        </tr><!-- /Table Row 1 -->\n        <tr><!-- Table Row 2 -->\n          <td>\n            <div class=\"input-field\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"\">21.01.2018</span>\n              </label>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n\n          <td>\n            <div class=\"input-field\">\n              <select class=\"select2\">\n                <option value=\"\" disabled selected>Velg kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport</option>\n              </select>\n            </div>\n          </td>\n        </tr><!-- /Table Row 2 -->\n        <tr><!-- Table Row 3 -->\n          <td>\n            <div class=\"input-field\">\n              <label>\n                <input type=\"checkbox\" class=\"filled-in\" />\n                <span class=\"\">21.01.2018</span>\n              </label>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"amount\" type=\"text\" class=\"validate\" value=\"Kr 350\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field\">\n              <input id=\"note\" type=\"text\" class=\"validate\" value=\"Middag\">\n              <i class=\"material-icons icon-in-table\">edit</i>\n            </div>\n          </td>\n\n          <td>\n            <div class=\"input-field\">\n              <select>\n                <option value=\"\" disabled selected>Velg kategori</option>\n                <option value=\"1\">Bolig</option>\n                <option value=\"2\">Mat</option>\n                <option value=\"3\">Transport</option>\n              </select>\n            </div>\n          </td>\n        </tr><!-- /Table Row 3 -->\n      </tbody>\n    </table>\n    <br><br>\n    \n  <!-- Highlighted code -->\n  <ngx-prism language=\"html\">\n    &lt;!--\n    On dark backgrounds: TODO\n    -->\n\n    &lt;table class=\"editable-table\">\n      &lt;thead>\n        &lt;tr>\n          &lt;th class=\"th-checkbox\"> &lt;!-- Add th-checkbox if checkbox in tableheader-->\n            &lt;label>\n              &lt;input type=\"checkbox\" class=\"filled-in\" />\n              &lt;span class=\"caption secondary\">Dato&lt;/span>\n            &lt;/label>\n          &lt;/th>\n          &lt;th>&lt;span class=\"caption secondary\">Forhandler&lt;/span>&lt;/th>\n        &lt;/tr>\n      &lt;/thead>\n      &lt;tbody>\n        &lt;tr>\n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;label>\n                &lt;input type=\"checkbox\" class=\"filled-in\" />\n                &lt;span class=\"\">21.01.2018&lt;/span>\n              &lt;/label>\n            &lt;/div>\n          &lt;/td>\n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;input id=\"merchant\" type=\"text\" class=\"validate\" value=\"Kiwi\">\n              &lt;i class=\"material-icons icon-in-table\">edit&lt;/i>\n            &lt;/div>\n          &lt;/td>\n          \n          &lt;td>\n            &lt;div class=\"input-field\">\n              &lt;select>\n                &lt;option value=\"\" disabled selected>Velg kategori&lt;/option>\n                &lt;option value=\"1\">Bolig&lt;/option>\n                &lt;option value=\"2\">Mat&lt;/option>\n              &lt;/select>\n            &lt;/div>\n          &lt;/td>\n        &lt;/tr>\n      &lt;/tbody>\n    &lt;/table>\n    </ngx-prism>\n    <!-- /Highlighted code -->\n  </div>\n  <!-- /Col -->\n</div>\n<!-- /Row -->\n"

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
        var elem2 = document.querySelector('.select2');
        var instance2 = M.Select.init(elem);
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

/***/ "../../../../../src/app/toasts/toasts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row z-depth-5 sg-display-row\">\n\n  <div class=\"col m7 sg-row-title\">\n    <h1 class=\"uppercase flow-text\">Toasts</h1>\n    <hr>\n  </div>\n  <!-- /Title head -->\n  <div class=\"col s12 m6\">\n    <!-- Toasts for dev:\n    <div id=\"toast-container\">\n      <div class=\"toast\">Toast</div>\n      <div class=\"toast\">Toast w/btn <button class=\"btn-flat\">Angre</button></div>\n\n      <div class=\"toast toast-on-dark\">Toast on dark</div>\n      <div class=\"toast toast-on-dark\">Toast on dark w/btn <button class=\"btn-flat white-text\">Angre</button></div>\n\n      <div class=\"toast toast-with-icon\"><div class=\"icon-container green\"><i class=\"material-icons\">done</i></div>Toast success w/btn <button class=\"btn-flat\">Angre</button></div>\n      <div class=\"toast toast-with-icon\"><div class=\"icon-container red\"><i class=\"material-icons\">priority_high</i></div>Toast error</div>\n      <div class=\"toast toast-with-icon\"><div class=\"icon-container yellow\"><i class=\"material-icons\">priority_high</i></div>Toast warning</div>\n    </div> -->\n\n    <div class=\"toast\">Toast</div>\n    <!-- Highlighted code -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast\">Toast&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast\">Toast w/btn\n      <button class=\"btn-flat\">Angre</button>\n    </div>\n    <!-- Highlighted code: Toast w/btn -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast\">Toast w/btn &lt;button class=\"btn-flat\">Angre&lt;/button>&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast toast-on-dark\">Toast on dark</div>\n    <!-- Highlighted code: Toast on dark -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast toast-on-dark\">Toast on dark&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast toast-on-dark\">Toast on dark w/btn\n      <button class=\"btn-flat white-text\">Angre</button>\n    </div>\n    <!-- Highlighted code: Toast on dark w/btn -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast toast-on-dark\">Toast on dark w/btn &lt;button class=\"btn-flat white-text\">Angre&lt;/button>&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast toast-with-icon\">\n      <div class=\"icon-container green\">\n        <i class=\"material-icons\">done</i>\n      </div>Toast success w/btn\n      <button class=\"btn-flat\">Angre</button>\n    </div>\n    <!-- Highlighted code: Toast success w/btn -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast toast-with-icon\">&lt;div class=\"icon-container green\">&lt;i class=\"material-icons\">done&lt;/i>&lt;/div>Toast\n      success w/btn &lt;button class=\"btn-flat\">Angre&lt;/button>&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast toast-with-icon\">\n      <div class=\"icon-container red\">\n        <i class=\"material-icons\">priority_high</i>\n      </div>Toast error</div>\n\n\n    <!-- Highlighted code: Toast error -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast toast-with-icon\">&lt;div class=\"icon-container red\">&lt;i class=\"material-icons\">priority_high&lt;/i>&lt;/div>Toast\n      error&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n\n    <div class=\"toast toast-with-icon\">\n      <div class=\"icon-container yellow\">\n        <i class=\"material-icons\">priority_high</i>\n      </div>Toast warning</div>\n    <!-- Highlighted code: Toast warning -->\n    <ngx-prism language=\"html\">\n      &lt;div class=\"toast toast-with-icon\">&lt;div class=\"icon-container yellow\">&lt;i class=\"material-icons\">priority_high&lt;/i>&lt;/div>Toast\n      warning&lt;/div>\n    </ngx-prism>\n    <!-- End highlighted code -->\n\n  </div>\n  <!-- /Left col -->\n\n  <div class=\"col s12 m6 dark-blue\">\n<!-- Highlighted code -->\n<ngx-prism language=\"javascript\">Example:\n\ntoastSuccess()&#123;\n  let toastHTML = '&lt;div class=\"icon-container green\">&lt;i class=\"material-icons\">done&lt;/i>&lt;/div>Toast\n  success w/btn &lt;button class=\"btn-flat\">Angre&lt;/button>';\n\n  M.toast(&#123;html: toastHTML, classes: 'toast-with-icon'});\n}\n\n/* OBS:\nAdd toast-type-class in M.toast function:\ntoast-on-dark\ntoast-with-icon\n\n(plain toast class is on by default)\n*/\n</ngx-prism>\n<!-- /Highlighted code -->\n\n    <div class=\"divider\"></div>\n    <p class=\"white-text\">Try toasts:</p>\n    <div class=\"btn green\" (click)=\"toastSuccess()\">Toast Success</div>\n\n    <div class=\"btn yellow\" (click)=\"toastWarning()\">Toast Warning</div>\n\n    <div class=\"btn red\" (click)=\"toastError()\">Toast Error</div>\n\n    <div class=\"btn white\" (click)=\"toastPlain()\">Toast plain</div>\n\n    <div class=\"btn dark-blue\" (click)=\"toastDark()\">Toast dark</div>\n  </div>\n  <!-- /Right col -->\n\n</div>\n<!-- /Row -->\n"

/***/ }),

/***/ "../../../../../src/app/toasts/toasts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toasts/toasts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastsComponent; });
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

var ToastsComponent = (function () {
    function ToastsComponent() {
    }
    ToastsComponent.prototype.ngOnInit = function () {
        // Get toast DOM Element, get instance, then call dismiss function
        /* let toastSuccess = document.querySelector('.toast-success');
        let toastInstance = M.Toast.getInstance(toastSuccess); */
        /* toastInstance.dismiss(); */
    };
    ToastsComponent.prototype.toastPlain = function () {
        var toastHTML = 'Toast';
        M.toast({ html: toastHTML });
    };
    ToastsComponent.prototype.toastDark = function () {
        var toastHTML = 'Toast on dark w/btn <button class="btn-flat white-text">Angre</button>';
        M.toast({ html: toastHTML, classes: 'toast-on-dark' });
    };
    ToastsComponent.prototype.toastSuccess = function () {
        var toastHTML = '<div class="icon-container green"><i class="material-icons">done</i></div>Toast success w/btn <button class="btn-flat">Angre</button>';
        M.toast({ html: toastHTML, classes: 'toast-with-icon' });
    };
    ToastsComponent.prototype.toastWarning = function () {
        var toastHTML = '<div class="icon-container yellow"><i class="material-icons">priority_high</i></div>Toast warning';
        M.toast({ html: toastHTML, classes: 'toast-with-icon' });
    };
    ToastsComponent.prototype.toastError = function () {
        var toastHTML = '<div class="icon-container red"><i class="material-icons">priority_high</i></div>Toast error';
        M.toast({ html: toastHTML, classes: 'toast-with-icon' });
    };
    ToastsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toasts',
            template: __webpack_require__("../../../../../src/app/toasts/toasts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toasts/toasts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastsComponent);
    return ToastsComponent;
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