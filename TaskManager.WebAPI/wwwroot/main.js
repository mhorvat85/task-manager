"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9607);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ 6352);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2073);
/* harmony import */ var _guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/logged-in.guard */ 4113);
/* harmony import */ var _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/can-deactivate.guard */ 5965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
  canActivate: [_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__.loggedInGuard]
}, {
  path: 'signup',
  component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent,
  canActivate: [_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__.loggedInGuard],
  canDeactivate: [_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.canDeactivateGuard]
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'myprofile',
  component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__.MyProfileComponent
}, {
  path: 'admin',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7008)).then(m => m.AdminModule)
}, {
  path: 'employee',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee.module */ 4266)).then(m => m.EmployeeModule)
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/login.service */ 6138);
/* harmony import */ var _services_router_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/router-logger.service */ 8870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;






const _c0 = function () {
  return ["/admin", "dashboard"];
};
const _c1 = function () {
  return ["/admin", "projects"];
};
const _c2 = function () {
  return ["active"];
};
const _c3 = function () {
  return ["/admin", "masters"];
};
function AppComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 7)(5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 7)(8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Masters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2));
  }
}
const _c4 = function () {
  return ["/employee", "tasks"];
};
function AppComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 7)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2));
  }
}
const _c5 = function () {
  return ["/login"];
};
const _c6 = function () {
  return ["/signup"];
};
function AppComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 7)(5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c6));
  }
}
const _c7 = function () {
  return ["/myprofile"];
};
function AppComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 7)(5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_14_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.loginService.Logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.loginService.currentUserName);
  }
}
const _c8 = function () {
  return ["/about"];
};
class AppComponent {
  constructor(loginService, routerLoggerService, router) {
    this.loginService = loginService;
    this.routerLoggerService = routerLoggerService;
    this.router = router;
  }
  ngOnInit() {
    this.loginService.detectIfAlreadyLoggedIn();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        const userName = this.loginService.currentUserName ? this.loginService.currentUserName : 'anonymous';
        const logMsg = `${new Date().toLocaleString()}: ${userName} navigates to ${event.url}`;
        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_router_logger_service__WEBPACK_IMPORTED_MODULE_1__.RouterLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 17,
  vars: 6,
  consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand", "mb-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "ml-1"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "navbar-nav", "ml-1", "mr-1"], [1, "container-fluid"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], ["href", "#", 1, "nav-link", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Task Manager ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 10, 10, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_ng_container_8_Template, 4, 4, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_ng_container_9_Template, 7, 4, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_ng_container_14_Template, 7, 3, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c8));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ 6352);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2073);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9607);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/alert.directive */ 4142);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _interceptor_services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor-services/jwt-interceptor.service */ 8887);
/* harmony import */ var _interceptor_services_jwt_unauthorized_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptor-services/jwt-unauthorized-interceptor.service */ 1696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _interceptor_services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptorService,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _interceptor_services_jwt_unauthorized_interceptor_service__WEBPACK_IMPORTED_MODULE_9__.JwtUnauthorizedInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule.forRoot({
    config: {
      tokenGetter: () => {
        return sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).token : null;
      }
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__.MyProfileComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent, _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__.AlertDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule]
  });
})();

/***/ }),

/***/ 4083:
/*!***********************************************************!*\
  !*** ./src/app/cache-services/countries-cache.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesCacheService: () => (/* binding */ CountriesCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class CountriesCacheService {
  constructor() {
    this.cache = new Map();
  }
  set(key, data) {
    this.cache.set(key, data);
  }
  get(key) {
    return this.cache.get(key);
  }
  clear() {
    this.cache.clear();
  }
}
_class = CountriesCacheService;
_class.ɵfac = function CountriesCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3027:
/*!***********************************************************!*\
  !*** ./src/app/cache-services/employees-cache.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeesCacheService: () => (/* binding */ EmployeesCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class EmployeesCacheService {
  constructor() {
    this.cache = new Map();
  }
  set(key, data) {
    this.cache.set(key, data);
  }
  get(key) {
    return this.cache.get(key);
  }
  clear() {
    this.cache.clear();
  }
}
_class = EmployeesCacheService;
_class.ɵfac = function EmployeesCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 860:
/*!**********************************************************!*\
  !*** ./src/app/cache-services/projects-cache.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsCacheService: () => (/* binding */ ProjectsCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ProjectsCacheService {
  constructor() {
    this.cache = new Map();
  }
  set(key, data) {
    this.cache.set(key, data);
  }
  get(key) {
    return this.cache.get(key);
  }
  clear() {
    this.cache.clear();
  }
}
_class = ProjectsCacheService;
_class.ɵfac = function ProjectsCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4813:
/*!*******************************************************!*\
  !*** ./src/app/cache-services/tasks-cache.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksCacheService: () => (/* binding */ TasksCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TasksCacheService {
  constructor() {
    this.cache = new Map();
  }
  set(key, data) {
    this.cache.set(key, data);
  }
  get(key) {
    return this.cache.get(key);
  }
  clear() {
    this.cache.clear();
  }
}
_class = TasksCacheService;
_class.ɵfac = function TasksCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6352:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class AboutComponent {}
_class = AboutComponent;
_class.ɵfac = function AboutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-about"]],
  decls: 2,
  vars: 0,
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/login.service */ 6138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/alert.directive */ 4142);
var _class;







const _c0 = ["loginForm"];
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("error", ctx_r1.loginError);
  }
}
class LoginComponent {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
    this.loginViewModel = {};
  }
  ngOnInit() {}
  onLoginClick() {
    if (this.loginForm.valid) {
      this.loginService.Login(this.loginViewModel).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe({
        next: () => {
          if (this.loginService.currentUserRole == 'Admin') this.router.navigate(['/admin', 'dashboard']);else this.router.navigate(['/employee', 'tasks']);
        },
        error: error => {
          console.log(error);
          this.loginError = 'Invalid Username or Password';
        }
      });
    }
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    }
  },
  decls: 23,
  vars: 3,
  consts: [["loginForm", "ngForm"], [1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "autofocus", "autofocus", "name", "UserName", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", null, 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 1, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.loginViewModel.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.loginViewModel.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
        return ctx.onLoginClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.password);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _directives_alert_directive__WEBPACK_IMPORTED_MODULE_1__.AlertDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2073:
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProfileComponent: () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
var _class;


class MyProfileComponent {
  constructor(loginService) {
    this.loginService = loginService;
    this.user = this.loginService.currentUserName.split('@')[0];
  }
}
_class = MyProfileComponent;
_class.ɵfac = function MyProfileComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-my-profile"]],
  decls: 2,
  vars: 1,
  template: function MyProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.user, " works!");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9607:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 532);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/custom-validators.service */ 1482);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ 6138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;









function SignUpComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date of Birth can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Minimum Age must be 18");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password must contain 5-20 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirm Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password and Confirm Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const gender_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", gender_r20)("value", gender_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", gender_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](gender_r20);
  }
}
function SignUpComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r21.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", country_r21.countryName, " ");
  }
}
function SignUpComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SignUpComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 46)(4, "select", 47)(5, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 53)(16, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpComponent_div_85_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const i_r23 = restoredCtx.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.onRemoveSkill(i_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, skill_r22.get("skillName").invalid && (skill_r22.get("skillName").dirty || skill_r22.get("skillName").touched || ctx_r19.signUpForm.submitted), skill_r22.get("skillName").valid && (skill_r22.get("skillName").dirty || skill_r22.get("skillName").touched || ctx_r19.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, skill_r22.get("skillLevel").invalid && (skill_r22.get("skillLevel").dirty || skill_r22.get("skillLevel").touched || ctx_r19.signUpForm.submitted), skill_r22.get("skillLevel").valid && (skill_r22.get("skillLevel").dirty || skill_r22.get("skillLevel").touched || ctx_r19.signUpForm.submitted)));
  }
}
// enum Gender {
//   Male = 'male',
//   Female = 'female',
// }
class SignUpComponent {
  constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
    this.countriesService = countriesService;
    this.formBuilder = formBuilder;
    this.customValidatorsService = customValidatorsService;
    this.loginService = loginService;
    this.router = router;
    this.genders = ['male', 'female'];
  }
  ngOnInit() {
    // this.genders = Object.values(Gender);
    this.countries = this.countriesService.getCountries();
    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
      }, {
        updateOn: 'blur'
      }),
      email: [null, {
        updateOn: 'blur',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email],
        asyncValidators: [this.customValidatorsService.DuplicateEmailValidator()]
      }],
      mobile: [null, {
        updateOn: 'blur',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{9,10}$/)]
      }],
      dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.customValidatorsService.minimumAgeValidator(18)]],
      password: [null, {
        updateOn: 'blur',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)]
      }],
      confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      receiveNewsLetters: false,
      skills: this.formBuilder.array([])
    }, {
      validators: [this.customValidatorsService.compareValidator('confirmPassword', 'password')]
    });
  }
  onSubmitClick() {
    this.signUpForm['submitted'] = true;
    if (this.signUpForm.valid) {
      const signUpViewModel = this.signUpForm.value;
      this.loginService.Register(signUpViewModel).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
        next: () => {
          console.log('Hello');
          this.router.navigate(['/employee', 'tasks']);
        },
        error: error => {
          console.log(error);
          this.registerError = 'Unable to submit';
        }
      });
    }
  }
  onAddSkill() {
    const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      skillLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.signUpForm.get('skills').push(formGroup);
  }
  onRemoveSkill(index) {
    this.signUpForm.get('skills').removeAt(index);
  }
}
_class = SignUpComponent;
_class.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-sign-up"]],
  decls: 96,
  vars: 59,
  consts: [[1, "row"], [1, "col-md-8", "col-xl-6", "mx-auto"], ["spellcheck", "false", 3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "form-group", "form-row"], ["for", "firstName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "autocomplete", "off", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "lastName", "id", "lastName", "placeholder", "Last Name", "autocomplete", "off", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], ["for", "email", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "autocomplete", "off", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "mobile", "id", "mobile", "placeholder", "Mobile", "autocomplete", "off", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "placeholder", "Date of Birth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-4", "col-form-label"], [1, "col-md-8", "mt-2"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["for", "countryID", 1, "col-md-4", "col-form-label"], ["name", "countryID", "id", "countryID", "formControlName", "countryID", 1, "form-control", 3, "ngClass"], ["value", "null", "disabled", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "receiveNewsLetters", 1, "mr-4"], ["type", "checkbox", "name", "receiveNewsLetters", "id", "receiveNewsLetters", "formControlName", "receiveNewsLetters", 1, "form-check-input", "mb-1"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row mb-1", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-right"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [3, "value"], [1, "row", "mb-1", 3, "formGroupName"], [1, "col-5"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["name", "skillLevel", "id", "skillLevel", "formControlName", "skillLevel", 1, "form-control", 3, "ngClass"], ["value", "null"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmitClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SignUpComponent_span_13_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Last Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignUpComponent_span_20_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SignUpComponent_span_21_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SignUpComponent_span_27_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SignUpComponent_span_28_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SignUpComponent_span_29_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Mobile:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SignUpComponent_span_35_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, SignUpComponent_span_36_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13)(38, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Date of Birth:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, SignUpComponent_span_42_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SignUpComponent_span_43_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13)(45, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SignUpComponent_span_49_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, SignUpComponent_span_50_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 13)(52, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Confirm Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SignUpComponent_span_56_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, SignUpComponent_span_57_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 13)(59, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Gender:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, SignUpComponent_div_62_Template, 4, 4, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, SignUpComponent_span_63_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 13)(65, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Country:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 8)(68, "select", 28)(69, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, SignUpComponent_option_71_Template, 2, 2, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, SignUpComponent_span_73_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 8)(77, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Receive News Letters");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 13)(82, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Skills:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, SignUpComponent_div_85_Template, 18, 9, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_86_listener() {
        return ctx.onAddSkill();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Add Skill");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 36)(89, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](35, _c0, ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.firstName").valid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.minlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](38, _c0, ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.lastName").valid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.minlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c0, ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("email").valid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.email));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.uniqueEmail));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](44, _c0, ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("mobile").valid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.pattern));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](47, _c0, ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("dateOfBirth").valid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.minAge));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](50, _c0, ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("password").valid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted) && ((ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.minlength) || (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.maxlength)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](53, _c0, ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("confirmPassword").valid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.invalid && (ctx.signUpForm.dirty || ctx.signUpForm.touched || ctx.signUpForm.submitted) && (ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors.compareValidator));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.genders);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("gender").invalid && (ctx.signUpForm.get("gender").dirty || ctx.signUpForm.get("gender").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("gender").errors == null ? null : ctx.signUpForm.get("gender").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](56, _c0, ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("countryID").valid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 31, ctx.countries));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("countryID").errors == null ? null : ctx.signUpForm.get("countryID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.signUpForm.get("skills").controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.registerError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 33, ctx.signUpForm.value));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4142:
/*!***********************************************!*\
  !*** ./src/app/directives/alert.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDirective: () => (/* binding */ AlertDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class AlertDirective {
  constructor(elementRef, renderer2) {
    this.elementRef = elementRef;
    this.renderer2 = renderer2;
  }
  ngOnInit() {
    /* div */
    this.divElement = this.renderer2.createElement('div');
    this.renderer2.setAttribute(this.divElement, 'role', 'alert');
    this.renderer2.setAttribute(this.divElement, 'class', 'alert alert-danger fade show');
    this.renderer2.setStyle(this.divElement, 'transition', 'transform 0.5s');
    /* span */
    this.spanElement = this.renderer2.createElement('span');
    this.renderer2.setAttribute(this.spanElement, 'class', 'message');
    /* span-node */
    this.spanText = this.renderer2.createText(this.error);
    this.renderer2.appendChild(this.spanElement, this.spanText);
    /* div-span */
    this.renderer2.appendChild(this.divElement, this.spanElement);
    this.elementRef.nativeElement.appendChild(this.divElement);
    this.title = 'Please try again!';
  }
  onMouseEnter(event) {
    this.renderer2.setStyle(this.divElement, 'transform', 'scale(1.1)');
  }
  onMouseLeave() {
    this.renderer2.setStyle(this.divElement, 'transform', 'scale(1)');
  }
}
_class = AlertDirective;
_class.ɵfac = function AlertDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appAlert", ""]],
  hostVars: 1,
  hostBindings: function AlertDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseEnter($event);
      })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseLeave($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("title", ctx.title);
    }
  },
  inputs: {
    error: "error"
  }
});

/***/ }),

/***/ 5581:
/*!**************************************************************************!*\
  !*** ./src/app/directives/client-location-status-validator.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationStatusValidatorDirective: () => (/* binding */ ClientLocationStatusValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class ClientLocationStatusValidatorDirective {
  constructor() {}
  validate(control) {
    let isValid = true;
    if (control.value.clientLocationID == 1 && control.value.status == 'Support') {
      isValid = false;
    }
    if (isValid == true) {
      return null;
    } else {
      return {
        clientLocationStatus: {
          valid: false
        }
      };
    }
  }
}
_class = ClientLocationStatusValidatorDirective;
_class.ɵfac = function ClientLocationStatusValidatorDirective_Factory(t) {
  return new (t || _class)();
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appClientLocationStatusValidator", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: _class,
    multi: true
  }])]
});

/***/ }),

/***/ 9575:
/*!**********************************************************!*\
  !*** ./src/app/directives/component-loader.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentLoaderDirective: () => (/* binding */ ComponentLoaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ComponentLoaderDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
}
_class = ComponentLoaderDirective;
_class.ɵfac = function ComponentLoaderDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appComponentLoader", ""]]
});

/***/ }),

/***/ 54:
/*!********************************************************************!*\
  !*** ./src/app/directives/project-idunique-validator.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectIDUniqueValidatorDirective: () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/projects.service */ 5650);
var _class;




class ProjectIDUniqueValidatorDirective {
  constructor(projectsService) {
    this.projectsService = projectsService;
  }
  validate(control) {
    return this.projectsService.getProjectByProjectID(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(projectExists => {
      if (projectExists) {
        return {
          uniqueProjectID: {
            valid: false
          }
        };
      } else {
        return null;
      }
    }));
  }
}
_class = ProjectIDUniqueValidatorDirective;
_class.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appProjectIDUniqueValidator", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_ASYNC_VALIDATORS,
    useExisting: _class,
    multi: true
  }])]
});

/***/ }),

/***/ 8981:
/*!*************************************************************!*\
  !*** ./src/app/directives/team-size-validator.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamSizeValidatorDirective: () => (/* binding */ TeamSizeValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class TeamSizeValidatorDirective {
  constructor() {}
  validate(control) {
    const currentValue = control.value;
    const isValid = currentValue % this.appTeamSizeValidator == 0;
    if (isValid) {
      return null;
    } else {
      return {
        divisible: {
          valid: false
        }
      };
    }
  }
}
_class = TeamSizeValidatorDirective;
_class.ɵfac = function TeamSizeValidatorDirective_Factory(t) {
  return new (t || _class)();
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appTeamSizeValidator", ""]],
  inputs: {
    appTeamSizeValidator: "appTeamSizeValidator"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: _class,
    multi: true
  }])]
});

/***/ }),

/***/ 5965:
/*!************************************************!*\
  !*** ./src/app/guards/can-deactivate.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canDeactivateGuard: () => (/* binding */ canDeactivateGuard)
/* harmony export */ });
const canDeactivateGuard = (route, state) => {
  if (route.signUpForm.pristine || route.signUpForm.status == 'VALID') {
    return true;
  } else {
    return confirm('Do you want to discard changes?');
  }
};

/***/ }),

/***/ 4113:
/*!*******************************************!*\
  !*** ./src/app/guards/logged-in.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loggedInGuard: () => (/* binding */ loggedInGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 6138);


const loggedInGuard = () => {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService).isAuthenticated()) {
    return false;
  } else {
    return true;
  }
};

/***/ }),

/***/ 8887:
/*!*****************************************************************!*\
  !*** ./src/app/interceptor-services/jwt-interceptor.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptorService: () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class JwtInterceptorService {
  constructor() {}
  //invoked with every request
  intercept(request, next) {
    let currentUser = {
      token: ''
    };
    if (sessionStorage['currentUser'] != null) {
      currentUser = JSON.parse(sessionStorage['currentUser']);
    }
    //we cannot modify request obj directly
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`
      }
    });
    if (request.body?.teamSize == '') {
      request.body.teamSize = null;
    }
    //invokes the next interceptor if any otherwise invokes HttpXhrBackend(then the actual request will be sent to server)
    return next.handle(request);
  }
}
_class = JwtInterceptorService;
_class.ɵfac = function JwtInterceptorService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1696:
/*!******************************************************************************!*\
  !*** ./src/app/interceptor-services/jwt-unauthorized-interceptor.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtUnauthorizedInterceptorService: () => (/* binding */ JwtUnauthorizedInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class JwtUnauthorizedInterceptorService {
  constructor() {}
  intercept(req, next) {
    //by pipe we are catching success or error response
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)({
      next: event => {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
          //do something with response
        }
      },
      error: error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
          if (error.status === 401) {
            console.log(error);
            alert('401 Unauthorized');
          } else {
            console.log(error);
          }
        }
      }
    }));
  }
}
_class = JwtUnauthorizedInterceptorService;
_class.ɵfac = function JwtUnauthorizedInterceptorService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 23:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class FilterPipe {
  transform(value, searchBy, searchText) {
    if (value == null) return null;
    const resultArray = [];
    if (!searchText) {
      for (const item of value) resultArray.push(item);
      return resultArray;
    }
    for (const item of value) {
      if ((searchBy == 'countryName' || searchBy == 'clientLocationName') && String(item[searchBy]).toLowerCase().startsWith(searchText?.toLowerCase())) {
        resultArray.push(item);
      } else if (searchBy == 'dateOfStart' && String(item[searchBy]).toLowerCase().indexOf(searchText?.toLowerCase()) >= 0) {
        resultArray.push(item);
      } else if (searchBy != 'countryName' && searchBy != 'clientLocationName' && searchBy != 'dateOfStart' && String(item[searchBy]).toLowerCase().split(' ').map(w => w.startsWith(searchText?.toLowerCase())).includes(true)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
_class = FilterPipe;
_class.ɵfac = function FilterPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: _class,
  pure: false
});

/***/ }),

/***/ 649:
/*!***********************************************!*\
  !*** ./src/app/pipes/number-to-words.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberToWordsPipe: () => (/* binding */ NumberToWordsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class NumberToWordsPipe {
  constructor() {
    this.inWords = (n /* , separator: any */) => {
      const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
      const g = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'];
      const arr = x => {
        return Array.from(x);
      };
      const num = x => Number(x) || 0;
      const str = x => String(x);
      const isEmpty = xs => xs.length === 0;
      const take = n => xs => xs.slice(0, n);
      const drop = n => xs => xs.slice(n);
      const reverse = xs => {
        return xs.slice(0).reverse();
      };
      const comp = f => g => x => f(g(x));
      const not = x => !x;
      const chunk = n => xs => {
        return isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
      };
      const makeGroup = ([ones, tens, huns]) => {
        return [num(huns) === 0 ? '' : a[huns] + ' Hundred ', num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '', a[tens + ones] || a[ones]].join('');
      };
      const thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
      if (typeof n === 'number') return this.inWords(str(n) /* , separator */);else if (n === '0') return 'Zero';else {
        return comp(chunk(3))(reverse)(arr(n)).map(makeGroup).map(thousand).filter(comp(not)(isEmpty)).reverse().join( /* separator */' and ').trim();
      }
    };
  }
  transform(value, ...separators) {
    if (value == null) {
      return null;
    } else {
      return this.inWords(value /* , separators[0] */);
    }
  }
}
_class = NumberToWordsPipe;
_class.ɵfac = function NumberToWordsPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "numberToWords",
  type: _class,
  pure: true
});

/***/ }),

/***/ 8890:
/*!**************************************!*\
  !*** ./src/app/pipes/paging.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingPipe: () => (/* binding */ PagingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PagingPipe {
  transform(value, currentPageIndex, pageSize) {
    if (value == null) return null;
    const resultArray = [];
    for (let i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
      if (value[i]) {
        resultArray.push(value[i]);
      }
    }
    return resultArray;
  }
}
_class = PagingPipe;
_class.ɵfac = function PagingPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "paging",
  type: _class,
  pure: true
});

/***/ }),

/***/ 1805:
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortPipe: () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class SortPipe {
  transform(value, sortBy, sortOrder) {
    if (value == null) return null;
    value.sort(function (a, b) {
      if (a[sortBy] && b[sortBy]) {
        return a[sortBy].toString().toLowerCase()[0] - b[sortBy].toString().toLowerCase()[0];
      } else {
        return 0;
      }
    });
    if (sortOrder == 'DESC') {
      value.reverse();
    }
    return value;
  }
}
_class = SortPipe;
_class.ɵfac = function SortPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sort",
  type: _class,
  pure: true
});

/***/ }),

/***/ 532:
/*!***********************************************!*\
  !*** ./src/app/services/countries.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesService: () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_countries_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/countries-cache.service */ 4083);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class CountriesService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getCountries() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/countries`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getCountryByCountryID(countryID) {
    return this.httpClient.get(`${API_BASE_URL}/api/countries/searchbycountryid/${countryID}`, {
      responseType: 'json'
    });
  }
  insertCountry(newCountry) {
    return this.httpClient.post(`${API_BASE_URL}/api/countries`, newCountry, {
      responseType: 'json'
    });
  }
  updateCountry(existingCountry) {
    return this.httpClient.put(`${API_BASE_URL}/api/countries`, existingCountry, {
      responseType: 'json'
    });
  }
  deleteCountry(countryID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/countries/${countryID}`);
  }
}
_class = CountriesService;
_class.ɵfac = function CountriesService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_countries_cache_service__WEBPACK_IMPORTED_MODULE_0__.CountriesCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1482:
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidatorsService: () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 6138);
var _class;



class CustomValidatorsService {
  constructor(loginService) {
    this.loginService = loginService;
  }
  minimumAgeValidator(minAge) {
    return control => {
      if (!control.value) return null;
      const today = new Date();
      const dateOfBirth = new Date(control.value);
      const diffMilliSeconds = today.getTime() - dateOfBirth.getTime();
      const diffYears = diffMilliSeconds / (1000 * 60 * 60 * 24) / 365.25;
      if (diffYears >= minAge) return null;else return {
        minAge: {
          valid: false
        }
      };
    };
  }
  compareValidator(controlToValidate, controlToCompare) {
    return control => {
      if (!control.get(controlToValidate).value) return null;
      if (control.get(controlToValidate).value == control.get(controlToCompare).value) return null;else {
        control.get(controlToValidate).setErrors({
          compareValidator: {
            valid: false
          }
        });
        return {
          compareValidator: {
            valid: false
          }
        };
      }
    };
  }
  DuplicateEmailValidator() {
    return control => {
      return this.loginService.getUserByEmail(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(existingUser => {
        if (existingUser) {
          return {
            uniqueEmail: {
              valid: false
            }
          };
        } else {
          return null;
        }
      }));
    };
  }
}
_class = CustomValidatorsService;
_class.ɵfac = function CustomValidatorsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6138:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _cache_services_employees_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/employees-cache.service */ 3027);
/* harmony import */ var _cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache-services/tasks-cache.service */ 4813);
var _class;







const API_BASE_URL = 'https://localhost:7036';
class LoginService {
  constructor(httpBackend, jwtHelperService, employeesCacheService, tasksCacheService) {
    this.httpBackend = httpBackend;
    this.jwtHelperService = jwtHelperService;
    this.employeesCacheService = employeesCacheService;
    this.tasksCacheService = tasksCacheService;
  }
  Login(loginViewModel) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient(this.httpBackend);
    return this.httpClient.post(`${API_BASE_URL}/authenticate`, loginViewModel, {
      responseType: 'json',
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response) {
        this.currentUserName = response.body.userName;
        this.currentUserRole = response.body.role;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
      }
      return response;
    }));
  }
  detectIfAlreadyLoggedIn() {
    if (this.jwtHelperService.isTokenExpired() == false) {
      const currentUser = JSON.parse(sessionStorage['currentUser']);
      this.currentUserName = currentUser.userName;
      this.currentUserRole = currentUser.role;
    }
  }
  Register(signUpViewModel) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient(this.httpBackend);
    return this.httpClient.post(`${API_BASE_URL}/register`, signUpViewModel, {
      responseType: 'json',
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response) {
        this.employeesCacheService.clear();
        this.currentUserName = response.body.userName;
        this.currentUserRole = response.body.role;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
      }
      return response;
    }));
  }
  getUserByEmail(email) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient(this.httpBackend);
    return this.httpClient.get(`${API_BASE_URL}/api/getuserbyemail/${email}`, {
      responseType: 'json'
    });
  }
  Logout() {
    this.currentUserName = null;
    this.currentUserRole = null;
    sessionStorage.removeItem('currentUser');
    this.tasksCacheService.clear();
  }
  isAuthenticated() {
    if (this.jwtHelperService.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }
  getEmployees() {
    const cachedData = this.employeesCacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cachedData);
    } else {
      this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient(this.httpBackend);
      return this.httpClient.get(`${API_BASE_URL}/api/getallemployees`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
        this.employeesCacheService.set('cachedData', data);
      }));
    }
  }
}
_class = LoginService;
_class.ɵfac = function LoginService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_cache_services_employees_cache_service__WEBPACK_IMPORTED_MODULE_0__.EmployeesCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_1__.TasksCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5650:
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_projects_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/projects-cache.service */ 860);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class ProjectsService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getProjects() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/projects`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getProjectByProjectID(projectID) {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData.filter(el => el.projectID == projectID)[0]);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/projects/searchbyprojectid/${projectID}`, {
        responseType: 'json'
      });
    }
  }
  searchProjects(searchBy, searchText) {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      let filteredCache = cachedData;
      switch (searchBy) {
        case 'projectID':
          filteredCache = cachedData.filter(el => el.projectID.toString() == searchText);
          break;
        case 'projectName':
          filteredCache = cachedData.filter(el => el.projectName.toLowerCase().includes(searchText));
          break;
        case 'dateOfStart':
          filteredCache = cachedData.filter(el => el.dateOfStart.includes(searchText));
          break;
        case 'teamSize':
          filteredCache = cachedData.filter(el => el.teamSize.toString().includes(searchText));
          break;
        default:
          filteredCache;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(filteredCache);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/projects/search/${searchBy}/${searchText}`, {
        responseType: 'json'
      });
    }
  }
  insertProject(newProject) {
    return this.httpClient.post(`${API_BASE_URL}/api/projects`, newProject, {
      responseType: 'json'
    });
  }
  updateProject(existingProject) {
    return this.httpClient.put(`${API_BASE_URL}/api/projects`, existingProject, {
      responseType: 'json'
    });
  }
  deleteProject(projectID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/projects/${projectID}`);
  }
}
_class = ProjectsService;
_class.ɵfac = function ProjectsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_projects_cache_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8870:
/*!***************************************************!*\
  !*** ./src/app/services/router-logger.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterLoggerService: () => (/* binding */ RouterLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const API_BASE_URL = 'https://localhost:7036';
class RouterLoggerService {
  constructor(httpBackend) {
    this.httpBackend = httpBackend;
  }
  log(logMsg) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.post(`${API_BASE_URL}/api/routerlogger`, logMsg, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('content-type', 'text/plain')
    });
  }
}
_class = RouterLoggerService;
_class.ɵfac = function RouterLoggerService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/team-size-validator.directive */ 8981);
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/client-location-status-validator.directive */ 5581);
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/project-idunique-validator.directive */ 54);
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/component-loader.directive */ 9575);
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/number-to-words.pipe */ 649);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter.pipe */ 23);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/sort.pipe */ 1805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;












class SharedModule {}
_class = SharedModule;
_class.ɵfac = function SharedModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective, _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderDirective, _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__.NumberToWordsPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__.SortPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective, _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_3__.ComponentLoaderDirective, _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__.NumberToWordsPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_6__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__.SortPipe]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map