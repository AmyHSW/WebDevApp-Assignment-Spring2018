webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\ninput.form-control {\n  margin-bottom: 5px;\n}\n\n.divider {\n  border-left: 1px solid #808080;\n  margin-top: -10px;\n  height: 92vh;\n}\n\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\n\na:hover{\n  text-decoration: none;\n}\n\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n\n.cl-text-white{\n  color: #fff;\n}\n\n.cl-text-black{\n  color: #000000;\n}\n\n.cl-text-bold{\n  font-weight: bold;\n}\n\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl-header-padding{\n  padding-left: 5%;\n}\n\n.cl-full-width{\n  width: 100%;\n}\n\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n\n.cl-widget-heading{\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.cl-widget-paragraph{\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n\n.cl-relative-position{\n  position: relative;\n}\n\n.cl-absolute-position{\n  position: absolute;\n}\n\n.cl-widget-list-icons{\n  top: 0;\n  right: 0;\n  z-index: 10;\n  background-color: white;\n}\n\n.cl-zero-right-padding{\n  padding-right: 0;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n.whiteBackground{\n  background-color: white;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__ = __webpack_require__("./src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_user_profile_profile_component__ = __webpack_require__("./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_user_register_register_component__ = __webpack_require__("./src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sortable_directive__ = __webpack_require__("./src/app/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeadingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_26__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_27__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_21__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_22__services_widget_service_client__["a" /* WidgetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_user_login_login_component__ = __webpack_require__("./src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__ = __webpack_require__("./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_user_register_register_component__ = __webpack_require__("./src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");


















var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__views_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeadingComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, email, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url, name) {
        this._id = _id;
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.text = text;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_page_model_client__ = __webpack_require__("./src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.getNewPage = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__models_page_model_client__["a" /* Page */](undefined, undefined, undefined, undefined);
    };
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__ = __webpack_require__("./src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.getNewUser = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */](undefined, undefined, undefined, undefined, undefined, undefined);
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_website_model_client__ = __webpack_require__("./src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.getNewWebsite = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__models_website_model_client__["a" /* Website */](undefined, undefined, undefined, undefined);
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("./src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.getNewWidget = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */](undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (pageId, startIndex, endIndex) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId
            + '/widget?initial=' + startIndex + '&final=' + endIndex, {})
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
                // console.log("start at: " + refe.initialIndex);
            },
            stop: function (event, ui) {
                // console.log("stop at: " + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updatePage()\"\n         routerLink=\"..\"\n         class=\"cl-icon-padding cl-text-black\">\n              <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Edit Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\" *ngIf=\"page\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             [ngModelOptions]=\"{standalone: true}\">\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"page\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\"\n             [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deletePage()\"\n     routerLink=\"..\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.page._id, this.page).subscribe(function (page) {
            _this.page = page;
            console.log('update page: ' + page._id + ' ' + page.name);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.page._id).subscribe(function (data) {
            console.log('delete page: ' + _this.page._id);
        }, function (error) { return console.log(error); });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params['pid']).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let page of pages\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"./{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageByWebsiteId(params['wid']).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"..\"\n         (click)=\"createPage()\"\n         [disabled]=\"!f.valid\"\n         class=\"btn btn-link cl-icon-padding cl-text-black\"\n              aria-hidden=\"true\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      New Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <form (ngSubmit)=\"createPage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             name=\"name\"\n             ngModel required\n             #name=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter a page name!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\"\n             name=\"title\"/>\n    </div>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webId = params['wid'];
        });
        this.page = __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */].getNewPage();
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.page.name = this.pageForm.value.name;
        this.pageService.createPage(this.webId, this.page).subscribe(function (page) {
            console.log('create page: ' + page._id + ' ' + page.name);
            _this.page = page;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input   placeholder=\"username\"\n               name=\"username\"\n               id=\"username\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n          Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input   placeholder=\"password\"\n               name=\"password\"\n               id=\"password\"\n               type=\"password\"\n               class=\"form-control\"\n               ngModel\n               required\n               #password=\"ngModel\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"register()\"\n            type=\"button\">Register</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (typeof user._id !== 'undefined') {
                console.log(user);
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/views/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{user?._id}}\">\n      Profile\n    </a>\n    <a (click)=\"updateUser()\"\n       routerLink=\"/user/{{user?._id}}\"\n       class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"updateFlag\" class=\"alert alert-success\">\n    {{updateMsg}}\n  </div>\n\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <form>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             id=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Username\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"user.email\"\n             id=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             placeholder=\"alice@wonderland.com\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             id=\"first-name\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Alice\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             id=\"last-name\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Wonderland\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            routerLink=\"./website\">Websites</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            routerLink=\"/login\">Logout</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"delete()\"\n            type=\"button\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\"></nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.updateFlag = false;
        this.userErrorFlag = false;
        if (this.username !== this.user.username) {
            this.userService.findUserByUsername(this.username).subscribe(function (user) {
                if (typeof user._id !== 'undefined') {
                    _this.userErrorFlag = true;
                }
                else {
                    _this.user.username = _this.username;
                    _this.update();
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.update();
        }
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user).subscribe(function (user) {
            _this.user = user;
            _this.updateFlag = true;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.delete = function () {
        var _this = this;
        this.userService.deleteUser(this.user._id).subscribe(function (user) {
            console.log('delete user: ' + _this.user._id);
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateFlag = false;
        this.userErrorFlag = false;
        this.updateMsg = 'Profile updated!';
        this.userErrorMsg = 'The username already exists! Please use a different name.';
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.findUserById(params['uid']).subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user.username;
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/views/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h1>Register</h1>\n\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input id=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <input id=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <input id=\"v_password\"\n             name=\"v_password\"\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #v_password=\"ngModel\"/>\n    </div>\n\n    <div *ngIf=\"pwErrorFlag\" class=\"alert alert-danger\">\n      {{pwErrorMsg}}\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            type=\"button\"\n            (click)=\"cancel()\">Cancel</button>\n\n  </form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user.username = this.registerForm.value.username;
        this.user.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.userErrorFlag = false;
        this.pwErrorFlag = false;
        this.userService.findUserByUsername(this.user.username).subscribe(function (user) {
            if (typeof user._id !== 'undefined') {
                _this.userErrorFlag = true;
            }
            else if (_this.v_password !== _this.user.password) {
                _this.pwErrorFlag = true;
            }
            else {
                return _this.userService.createUser(_this.user).subscribe(function (newUser) {
                    _this.router.navigate(['/user', newUser._id]);
                });
            }
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.userErrorMsg = 'The username already exists! Please use a different name.';
        this.pwErrorMsg = 'Password mis-matching!';
        this.user = __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */].getNewUser();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/views/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid row\">\n    <div class=\"col-xs-4\">\n\n      <p class=\"navbar-text pull-left\">\n        <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <a class=\"cl-text-white navbar-brand cl-text-bold hidden-xs\" routerLink=\"..\">\n        Websites\n      </a>\n\n      <a routerLink=\"../new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding hidden-xs\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n\n    </div>\n\n    <div class=\"col-xs-8\">\n\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\n        Edit Website\n      </a>\n\n      <a (click)=\"updateWebsite()\" routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor=\"let website_li of websites\" class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"../{{website_li._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right cl-icon-padding\"></span>\n        </a>\n        <a routerLink=\"../{{website_li._id}}/page\">\n          {{website_li.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n    <form>\n      <div class=\"form-group\" *ngIf=\"website\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"Blogger\"\n               [ngModelOptions]=\"{standalone: true}\">\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"website\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Blog is a blog-publishing service.\"\n                  [ngModelOptions]=\"{standalone: true}\"></textarea>\n      </div>\n\n      <br/>\n      <a class=\"btn btn-danger btn-block\"\n         (click)=\"deleteWebsite()\"\n         routerLink=\"..\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.updateWebsite = function () {
        this.websiteService.updateWebsite(this.website._id, this.website).subscribe(function (website) {
            console.log(website);
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.website._id).subscribe(function (data) {
            console.log('deleted website: ' + data._id);
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                console.log(error);
            });
            _this.websiteService.findWebsitesById(params['wid']).subscribe(function (website) {
                _this.website = website;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\n      Websites\n    </a>\n    <a routerLink=\"./new\"\n       class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./{{website._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right cl-icon-padding\"></span>\n      </a>\n      <a routerLink=\"./{{website._id}}/page\">\n        {{website.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid row\">\n    <div class=\"col-xs-4\">\n\n      <p class=\"navbar-text pull-left\">\n        <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <a class=\"cl-text-white navbar-brand cl-text-bold hidden-xs\" routerLink=\"..\">\n        Websites\n      </a>\n\n      <a routerLink=\"../new\"\n         class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding hidden-xs\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n\n    </div>\n\n    <div class=\"col-xs-8\">\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\n        New Websites\n      </a>\n\n      <button routerLink=\"..\"\n              (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              class=\"btn btn-link navbar-brand pull-right cl-text-white cl-icon-padding\"\n              aria-hidden=\"true\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"../{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right cl-icon-padding\"></span></a>\n        <a routerLink=\"../{{website._id}}\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n\n    <form (ngSubmit)=\"createWebsite()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"Name\"\n               name=\"name\"\n               ngModel required\n               #name=\"ngModel\">\n      </div>\n\n      <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter a website name!\n      </span>\n\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)]=\"website.description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  name=\"description\">\n        </textarea>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (websites) {
            _this.websites = websites;
        }, function (error) {
            console.log(error);
        });
        this.website = __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */].getNewWebsite();
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.website.name = this.webForm.value.name;
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (website) {
            _this.website = website;
            console.log('created website: ' + _this.website._id + ' ' + _this.website.name);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./header\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./text\">Text</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./image\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./youtube\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./html\">Html</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget\" [ngSwitch]=\"widget.type\" >\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-heading></app-widget-heading>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\"\n              class=\"btn btn-link cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             name=\"text\"\n             class=\"form-control\"\n             id=\"text\"\n             placeholder=\"{{widget?.text}}\"\n             ngModel required\n             #text=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!text.valid && text.touched\">\n          Please enter text!\n    </span>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             placeholder=\"1\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n       (click)=\"deleteWidget()\"\n       routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.webId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHeadingComponent.prototype.updateWidget = function () {
        this.widget.text = this.headerForm.value.text;
        if (this.widgetId === undefined) {
            this.widget.type = 'HEADER';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget header: ' + widget._id + ' ' + widget.text);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget header: ' + widget._id + ' ' + widget.text);
            }, function (error) { return console.log(error); });
        }
    };
    WidgetHeadingComponent.prototype.deleteWidget = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget header');
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetHeadingComponent.prototype, "headerForm", void 0);
    WidgetHeadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-heading',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n              class=\"btn btn-link cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             name=\"text\"\n             class=\"form-control\"\n             id=\"text\"\n             placeholder=\"{{widget?.text}}\"\n             ngModel required\n             #text=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!text.valid && text.touched\">\n          Please enter text!\n    </span>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"delete()\"\n            routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHtmlComponent.prototype.delete = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget html');
            }, function (error) { return console.log(error); });
        }
    };
    WidgetHtmlComponent.prototype.update = function () {
        this.widget.text = this.htmlForm.value.text;
        if (this.widgetId === undefined) {
            this.widget.type = 'HTML';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget html: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget html: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetHtmlComponent.prototype, "htmlForm", void 0);
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n              class=\"btn btn-link cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateImage()\" #f=\"ngForm\">\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-name\"\n             placeholder=\"name\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-text\"\n             placeholder=\"Text\"/>\n    </div>\n\n<!--    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\"\n             name=\"url\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             placeholder=\"{{widget?.url}}\"\n             ngModel required\n             #url=\"ngModel\"/>\n    </div>-->\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-url\">URL</label>\n      <input [(ngModel)]=\"widget.url\"\n             name=\"url\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-url\"\n             placeholder=\"url\"/>\n    </div>\n\n<!--    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n          Please enter URL!\n    </span>-->\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             name=\"width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             placeholder=\"100%\"/>\n    </div>\n\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <input  name=\"width\" value=\"{{widget?.width}}\"   style=\"display: none\"/>\n      <input  name=\"name\" value=\"{{widget?.name}}\"   style=\"display: none\"/>\n      <input  name=\"text\" value=\"{{widget?.text}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n\n    <button class=\"btn btn-danger  btn-block\"\n            (click)=\"deleteImage()\"\n            routerLink=\"..\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget image');
            }, function (error) { return console.log(error); });
        }
    };
    WidgetImageComponent.prototype.updateImage = function () {
        this.widget.url = this.imageForm.value.url;
        if (this.widgetId === undefined) {
            this.widget.type = 'IMAGE';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget image: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget image: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetImageComponent.prototype, "imageForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n              class=\"btn btn-link cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             name=\"text\"\n             class=\"form-control\"\n             id=\"text\"\n             placeholder=\"{{widget?.text}}\"\n             ngModel required\n             #text=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!text.valid && text.touched\">\n          Please enter text!\n    </span>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             placeholder=\"3\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"delete()\"\n            routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetTextComponent.prototype.delete = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget text');
            }, function (error) { return console.log(error); });
        }
    };
    WidgetTextComponent.prototype.update = function () {
        this.widget.text = this.textForm.value.text;
        if (this.widgetId === undefined) {
            this.widget.type = 'TEXT';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget text: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget text: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetTextComponent.prototype, "textForm", void 0);
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\"\n         class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <button (click)=\"f.ngSubmit.emit()\"\n              [disabled]=\"!f.valid\"\n              routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget\"\n              class=\"btn btn-link cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateYoutube()\" #f=\"ngForm\">\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-name\"\n             placeholder=\"Name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-text\"\n             placeholder=\"Text\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\"\n             name=\"url\"\n             class=\"form-control\"\n             id=\"youtube-URL\"\n             placeholder=\"{{widget?.url}}\"\n             ngModel required\n             #url=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n          Please enter URL!\n    </span>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-width\"\n             placeholder=\"100%\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"deleteYoutube()\"\n            routerLink=\"..\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.webId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget youtube');
            }, function (error) { return console.log(error); });
        }
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        this.widget.url = this.youtubeForm.value.url;
        if (this.widgetId === undefined) {
            this.widget.type = 'YOUTUBE';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget youtube: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget youtube: ' + widget._id + ' ' + widget.url);
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetYoutubeComponent.prototype, "youtubeForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets\n    </a>\n  </div>\n</nav>\n\n<div id=\"sortable\" class=\"container-fluid cl-container-padding\" appSortable (newIndexes)=\"reorderItems($event)\">\n\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.type\">\n\n      <div *ngSwitchCase=\"'HEADER'\">\n        <a routerLink=\".\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger whiteBackground\"></span>\n        </a>\n        <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog whiteBackground\"></span>\n        </a>\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"'1'\">\n            <h1>{{widget.text}}</h1>\n          </div>\n          <div *ngSwitchCase=\"'2'\">\n            <h2>{{widget.text}}</h2>\n          </div>\n          <div *ngSwitchCase=\"'3'\">\n            <h3>{{widget.text}}</h3>\n          </div>\n          <div *ngSwitchDefault>\n            <h1>{{widget.text}}</h1>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <a routerLink=\".\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger whiteBackground\"></span>\n        </a>\n        <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog whiteBackground\"></span>\n        </a>\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"'2'\">\n            <h2>{{widget.text}}</h2>\n          </div>\n          <div *ngSwitchCase=\"'3'\">\n            <h3>{{widget.text}}</h3>\n          </div>\n          <div *ngSwitchCase=\"'4'\">\n            <h4>{{widget.text}}</h4>\n          </div>\n          <div *ngSwitchCase=\"'5'\">\n            <h5>{{widget.text}}</h5>\n          </div>\n          <div *ngSwitchDefault>\n            <h3>{{widget.text}}</h3>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <a [innerHTML]=\"widget.text\"></a>\n        <a routerLink=\".\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger whiteBackground\"></span>\n        </a>\n        <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog whiteBackground\"></span>\n        </a>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe [src]=getUrl(widget.url)\n                  width=\"560\" height=\"315\"\n                  frameborder=\"0\"\n                  allowfullscreen></iframe>\n          <a routerLink=\".\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-menu-hamburger whiteBackground\"></span>\n          </a>\n          <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog whiteBackground\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <a routerLink=\".\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger whiteBackground\"></span>\n        </a>\n        <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog whiteBackground\"></span>\n        </a>\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             [src]=\"widget.url\"\n             width=\"{{widget.width}}\">\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n\n    <div class=\"pull-left navbar-text\">\n      <a routerLink=\".\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a routerLink=\".\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            return _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WidgetListComponent.prototype.getUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
    };
    WidgetListComponent.prototype.reorderItems = function (indexes) {
        this.widgetService.reorderWidgets(this.pageId, indexes.startIndex, indexes.endIndex)
            .subscribe(function (data) {
            console.log('start: ' + indexes.startIndex);
            console.log('stop: ' + indexes.endIndex);
        });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-list/widget-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map