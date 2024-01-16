(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 6048:
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-routing/admin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../guards/can-activate.guard */ 8919);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ 5520);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects/projects.component */ 2908);
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project-details/project-details.component */ 3502);
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/masters/masters.component */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








const routes = [{
  path: '',
  canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__.canActivateGuard],
  data: {
    role: 'Admin'
  },
  children: [{
    path: 'dashboard',
    component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
  }, {
    path: 'projects',
    component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent
  }, {
    path: 'projects/view/:projectid',
    component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailsComponent
  }, {
    path: 'masters',
    component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_4__.MastersComponent
  }]
}];
class AdminRoutingModule {}
_class = AdminRoutingModule;
_class.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 7008:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 5520);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projects/projects.component */ 2908);
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project/project.component */ 5615);
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project-details/project-details.component */ 3502);
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/masters/masters.component */ 6316);
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/countries/countries.component */ 3479);
/* harmony import */ var _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/client-locations/client-locations.component */ 8678);
/* harmony import */ var _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task-priorities/task-priorities.component */ 2363);
/* harmony import */ var _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/task-status/task-status.component */ 7894);
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-routing/admin-routing.module */ 6048);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;












class AdminModule {}
_class = AdminModule;
_class.ɵfac = function AdminModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent, _components_project_project_component__WEBPACK_IMPORTED_MODULE_2__.ProjectComponent, _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailsComponent, _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_4__.MastersComponent, _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_5__.CountriesComponent, _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_6__.ClientLocationsComponent, _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_7__.TaskPrioritiesComponent, _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_8__.TaskStatusComponent],
    imports: [_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
  });
})();

/***/ }),

/***/ 8678:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/client-locations/client-locations.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationsComponent: () => (/* binding */ ClientLocationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_client_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client-locations.service */ 3797);
/* harmony import */ var src_app_cache_services_projects_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cache-services/projects-cache.service */ 860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);
var _class;











const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["newClientLocationFormCancel"];
const _c3 = ["editClientLocationFormCancel"];
function ClientLocationsComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_23_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r12.sortBy = "clientLocationName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_24_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_25_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 56)(4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_28_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const clientLocation_r18 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.onEditClick(clientLocation_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_28_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const clientLocation_r18 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.onDeleteClick(clientLocation_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const clientLocation_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r18.clientLocationName);
  }
}
const _c4 = function (a0) {
  return {
    active: a0
  };
};
function ClientLocationsComponent_ng_container_37_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_37_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const page_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.onPageIndexClicked(page_r24.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c4, page_r24.pageIndex == ctx_r23.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r24.pageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientLocationsComponent_ng_container_37_li_1_Template, 3, 4, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
  }
}
function ClientLocationsComponent_ng_container_38_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_ng_container_38_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_38_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.onPageIndexClicked(ctx_r29.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r28.currentPageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_38_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_38_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ClientLocationsComponent_ng_container_38_li_7_Template, 2, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ClientLocationsComponent_ng_container_38_li_8_Template, 3, 2, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_38_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_38_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c4, ctx_r5.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c4, ctx_r5.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.pages.length);
  }
}
function ClientLocationsComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class ClientLocationsComponent {
  constructor(clientLocationsService, cacheService, formBuilder) {
    this.clientLocationsService = clientLocationsService;
    this.cacheService = cacheService;
    this.formBuilder = formBuilder;
    this.clientLocations = [];
    this.searchBy = '';
    this.sortBy = 'clientLocationName';
    this.sortOrder = 'ASC';
    this.currentPageIndex = 0;
    this.searchPageIndex = 0;
    this.previousSearchPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
  }
  ngOnInit() {
    this.subscription = this.clientLocationsService.getClientLocations().subscribe(response => {
      this.clientLocations = response;
      this.calculateNoOfPages();
    });
    this.newForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)])
    });
    this.editForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)])
    });
    this.deleteForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control({
        value: null,
        disabled: true
      })
    });
  }
  calculateNoOfPages() {
    const filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
    const noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    if (!this.searchText && ind >= 0 && ind < this.pages.length) {
      this.previousSearchPageIndex = ind;
      this.searchPageIndex = ind;
      this.currentPageIndex = ind;
    }
    this.searchPageIndex = this.previousSearchPageIndex;
    this.currentPageIndex = ind;
  }
  onNewClick() {
    this.newForm.reset({
      clientLocationID: 0
    });
    setTimeout(() => {
      this.defaultTextBox_New.nativeElement.focus();
    }, 10);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      const found = this.clientLocations.some(el => el.clientLocationName.split(/[ -]+/).join(' ').trim() == this.newForm.value.clientLocationName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That client location already exists!');
      this.newForm.value.clientLocationName = this.newForm.value.clientLocationName.charAt(0).toUpperCase().trimLeft() + this.newForm.value.clientLocationName.split(/[ ]+/).join(' ').slice(1);
      this.clientLocationsService.insertClientLocation(this.newForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
        next: response => {
          const p = {};
          p.clientLocationID = response.clientLocationID;
          p.clientLocationName = response.clientLocationName;
          this.clientLocations.push(p);
          this.clientLocations = this.clientLocations.sort((a, b) => a.clientLocationName > b.clientLocationName ? 1 : a.clientLocationName < b.clientLocationName ? -1 : 0);
          this.newForm.reset();
          this.newClientLocationFormCancel.nativeElement.click();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(clientLocation) {
    this.editForm.reset();
    setTimeout(() => {
      this.editForm.patchValue(clientLocation);
      this.editIndex = this.clientLocations.indexOf(clientLocation);
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 10);
  }
  onUpdateClick() {
    if (this.editForm.value) {
      const found = this.clientLocations.some(el => el.clientLocationName.split(/[ -]+/).join(' ').trim() == this.editForm.value.clientLocationName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That client location already exists!');
      this.editForm.value.clientLocationName = this.editForm.value.clientLocationName.charAt(0).toUpperCase().trimStart() + this.editForm.value.clientLocationName.split(/[ ]+/).join(' ').slice(1);
      this.clientLocationsService.updateClientLocation(this.editForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
        next: response => {
          this.cacheService.clear();
          this.clientLocations[this.editIndex] = response;
          this.clientLocations = this.clientLocations.sort((a, b) => a.clientLocationName > b.clientLocationName ? 1 : a.clientLocationName < b.clientLocationName ? -1 : 0);
          this.editForm.reset();
          this.editClientLocationFormCancel.nativeElement.click();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(clientLocation) {
    this.deleteForm.reset();
    setTimeout(() => {
      this.deleteForm.patchValue(clientLocation);
      this.deleteIndex = this.clientLocations.indexOf(clientLocation);
    }, 10);
  }
  onDeleteConfirmClick() {
    this.clientLocationsService.deleteClientLocation(this.deleteForm.value.clientLocationID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: () => {
        this.cacheService.clear();
        this.clientLocations.splice(this.deleteIndex, 1);
        this.deleteForm.reset();
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange() {
    this.calculateNoOfPages();
    if (!this.searchText) this.currentPageIndex = this.searchPageIndex;else this.currentPageIndex = 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = ClientLocationsComponent;
_class.ɵfac = function ClientLocationsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_client_locations_service__WEBPACK_IMPORTED_MODULE_1__.ClientLocationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cache_services_projects_cache_service__WEBPACK_IMPORTED_MODULE_2__.ProjectsCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-client-locations"]],
  viewQuery: function ClientLocationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newClientLocationFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editClientLocationFormCancel = _t.first);
    }
  },
  decls: 113,
  vars: 33,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-sm-2", "col-xl-4", "mb-1"], ["data-toggle", "modal", "data-target", "#newClientLocationModal", 1, "btn", "btn-primary", 3, "click"], [1, "col-6", "col-sm-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "clientLocationName"], [1, "input-group"], ["type", "text", "placeholder", "Search", "spellcheck", "false", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "160px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewClientLocationName", "placeholder", "Client Location Name", "spellcheck", "false", "formControlName", "clientLocationName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["newClientLocationFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditClientLocationName", "placeholder", "Client Location Name", "spellcheck", "false", "formControlName", "clientLocationName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["editClientLocationFormCancel", ""], [3, "formGroup"], ["role", "dialog", "id", "deleteClientLocationModal", 1, "modal"], [1, "text-danger", "mb-2"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "formControlName", "clientLocationName", 1, "form-control-plain-text", 2, "width", "300px"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-sort", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editClientLocationModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteClientLocationModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function ClientLocationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_5_listener() {
        return ctx.onNewClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Create Client Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6)(14, "div", 10)(15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function ClientLocationsComponent_Template_input_keyup_15_listener() {
        return ctx.onSearchTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 2)(17, "div", 1)(18, "div", 12)(19, "table", 13)(20, "tr", 14)(21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Client Location Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ClientLocationsComponent_i_23_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ClientLocationsComponent_i_24_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ClientLocationsComponent_i_25_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ClientLocationsComponent_tr_28_Template, 9, 1, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "ul", 21)(34, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_34_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ClientLocationsComponent_ng_container_37_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ClientLocationsComponent_ng_container_38_Template, 17, 16, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_39_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "form", 25)(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29)(47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "New Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 31)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 32)(53, "div", 3)(54, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 35, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ClientLocationsComponent_span_59_Template, 2, 0, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 38)(61, "button", 39, 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_64_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "form", 25)(67, "div", 42)(68, "div", 27)(69, "div", 28)(70, "div", 29)(71, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Edit Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "button", 31)(74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 32)(77, "div", 3)(78, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, ClientLocationsComponent_span_83_Template, 2, 0, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38)(85, "button", 39, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_88_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "form", 47)(91, "div", 48)(92, "div", 27)(93, "div", 28)(94, "div", 29)(95, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Delete Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 31)(98, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 32)(101, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Are you sure to delete this Client Location?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 3)(104, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 38)(109, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_111_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "clientLocationName");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](29, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](30, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](31, 23, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](27, _c5, ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted), ctx.newForm.get("clientLocationName").valid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted) && (ctx.newForm.get("clientLocationName").errors == null ? null : ctx.newForm.get("clientLocationName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](30, _c5, ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted), ctx.editForm.get("clientLocationName").valid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted) && (ctx.editForm.get("clientLocationName").errors == null ? null : ctx.editForm.get("clientLocationName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.deleteForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jbGllbnQtbG9jYXRpb25zL2NsaWVudC1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3479:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/countries/countries.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesComponent: () => (/* binding */ CountriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/countries.service */ 532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);
var _class;










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["newCountryFormCancel"];
const _c3 = ["editCountryFormCancel"];
function CountriesComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_23_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r12.sortBy = "countryName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_24_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_25_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_28_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.onEditClick(country_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_28_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.onDeleteClick(country_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const country_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](country_r18.countryName);
  }
}
const _c4 = function (a0) {
  return {
    active: a0
  };
};
function CountriesComponent_ng_container_37_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_37_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const page_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.onPageIndexClicked(page_r24.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c4, page_r24.pageIndex == ctx_r23.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r24.pageIndex + 1);
  }
}
function CountriesComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CountriesComponent_ng_container_37_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
  }
}
function CountriesComponent_ng_container_38_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_ng_container_38_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_38_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.onPageIndexClicked(ctx_r29.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r28.currentPageIndex + 1);
  }
}
function CountriesComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_38_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_38_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CountriesComponent_ng_container_38_li_7_Template, 2, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CountriesComponent_ng_container_38_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_38_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_38_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c4, ctx_r5.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c4, ctx_r5.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length);
  }
}
function CountriesComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class CountriesComponent {
  constructor(countriesService, formBuilder) {
    this.countriesService = countriesService;
    this.formBuilder = formBuilder;
    this.countries = [];
    this.searchBy = '';
    this.sortBy = 'countryName';
    this.sortOrder = 'ASC';
    this.currentPageIndex = 0;
    this.searchPageIndex = 0;
    this.previousSearchPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
  }
  ngOnInit() {
    this.subscription = this.countriesService.getCountries().subscribe(response => {
      this.countries = response;
      this.calculateNoOfPages();
    });
    this.newForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.editForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.deleteForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control({
        value: null,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  }
  calculateNoOfPages() {
    const filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
    const noOfPages = Math.ceil(filterPipe.transform(this.countries, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    if (!this.searchText && ind >= 0 && ind < this.pages.length) {
      this.previousSearchPageIndex = ind;
      this.searchPageIndex = ind;
      this.currentPageIndex = ind;
    }
    this.searchPageIndex = this.previousSearchPageIndex;
    this.currentPageIndex = ind;
  }
  onNewClick() {
    this.newForm.reset({
      countryID: 0
    });
    setTimeout(() => {
      this.defaultTextBox_New.nativeElement.focus();
    }, 10);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      const found = this.countries.some(el => el.countryName.split(/[ -]+/).join(' ').trim() === this.newForm.value.countryName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That country already exists!');
      this.newForm.value.countryName = this.newForm.value.countryName.charAt(0).toUpperCase().trimLeft() + this.newForm.value.countryName.split(/[ ]+/).join(' ').slice(1);
      this.countriesService.insertCountry(this.newForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          const p = {};
          p.countryID = response.countryID;
          p.countryName = response.countryName;
          this.countries.push(p);
          this.countries = this.countries.sort((a, b) => a.countryName > b.countryName ? 1 : a.countryName < b.countryName ? -1 : 0);
          this.newForm.reset();
          this.newCountryFormCancel.nativeElement.click();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(country) {
    this.editForm.reset();
    setTimeout(() => {
      this.editForm.patchValue(country);
      this.editIndex = this.countries.indexOf(country);
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 10);
  }
  onUpdateClick() {
    if (this.editForm.valid) {
      const found = this.countries.some(el => el.countryName.split(/[ -]+/).join(' ').trim() === this.editForm.value.countryName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That country already exists!');
      this.editForm.value.countryName = this.editForm.value.countryName.charAt(0).toUpperCase().trimStart() + this.editForm.value.countryName.split(/[ ]+/).join(' ').slice(1);
      this.countriesService.updateCountry(this.editForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          this.countries[this.editIndex] = response;
          this.countries = this.countries.sort((a, b) => a.countryName > b.countryName ? 1 : a.countryName < b.countryName ? -1 : 0);
          this.editForm.reset();
          this.editCountryFormCancel.nativeElement.click();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(country) {
    this.deleteForm.reset();
    setTimeout(() => {
      this.deleteForm.patchValue(country);
      this.deleteIndex = this.countries.indexOf(country);
    }, 10);
  }
  onDeleteConfirmClick() {
    this.countriesService.deleteCountry(this.deleteForm.value.countryID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: () => {
        this.countries.splice(this.deleteIndex, 1);
        this.deleteForm.reset();
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange() {
    this.calculateNoOfPages();
    if (!this.searchText) this.currentPageIndex = this.searchPageIndex;else this.currentPageIndex = 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = CountriesComponent;
_class.ɵfac = function CountriesComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_1__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-countries"]],
  viewQuery: function CountriesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newCountryFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editCountryFormCancel = _t.first);
    }
  },
  decls: 115,
  vars: 33,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-sm-2", "col-xl-4", "mb-1"], ["data-toggle", "modal", "data-target", "#newCountryModal", 1, "btn", "btn-primary", 3, "click"], [1, "col-6", "col-sm-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "countryName"], [1, "input-group"], ["type", "text", "placeholder", "Search", "spellcheck", "false", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "160px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newCountryModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewCountryName", 1, "col-sm-4", "col-form-label"], [2, "width", "40px", "display", "inline-block"], [1, "col-sm-8"], ["type", "text", "id", "txtNewCountryName", "placeholder", "Country Name", "spellcheck", "false", "formControlName", "countryName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["newCountryFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editCountryModal", 1, "modal"], ["for", "txtEditCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditCountryName", "placeholder", "Country Name", "spellcheck", "false", "formControlName", "countryName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["editCountryFormCancel", ""], [3, "formGroup"], ["role", "dialog", "id", "deleteCountryModal", 1, "modal"], [1, "text-danger", "mb-2"], ["for", "txtDeleteCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteCountryName", "placeholder", "Country Name", "formControlName", "countryName", 1, "form-control-plain-text", 2, "width", "300px"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-sort", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editCountryModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteCountryModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function CountriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_5_listener() {
        return ctx.onNewClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Create Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 10)(15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchText = $event;
      })("ngModelChange", function CountriesComponent_Template_input_ngModelChange_15_listener() {
        return ctx.onSearchTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 1)(18, "div", 12)(19, "table", 13)(20, "tr", 14)(21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Country Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CountriesComponent_i_23_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CountriesComponent_i_24_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CountriesComponent_i_25_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CountriesComponent_tr_28_Template, 9, 1, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20)(33, "ul", 21)(34, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_34_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CountriesComponent_ng_container_37_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CountriesComponent_ng_container_38_Template, 17, 16, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_39_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "form", 25)(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29)(47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "New Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 31)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 32)(53, "div", 3)(54, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CountriesComponent_span_60_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 39)(62, "button", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_65_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "form", 25)(68, "div", 43)(69, "div", 27)(70, "div", 28)(71, "div", 29)(72, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Edit Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 31)(75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 32)(78, "div", 3)(79, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 45, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, CountriesComponent_span_85_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39)(87, "button", 40, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "form", 48)(93, "div", 49)(94, "div", 27)(95, "div", 28)(96, "div", 29)(97, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Delete Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 31)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 32)(103, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Are you sure to delete this Country?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 3)(106, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39)(111, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "countryName");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](29, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](30, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](31, 23, ctx.countries, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](27, _c5, ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted), ctx.newForm.get("countryName").valid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted) && (ctx.newForm.get("countryName").errors == null ? null : ctx.newForm.get("countryName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](30, _c5, ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted), ctx.editForm.get("countryName").valid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted) && (ctx.editForm.get("countryName").errors == null ? null : ctx.editForm.get("countryName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.deleteForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__.SortPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5520:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class DashboardComponent {}
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dashboard"]],
  decls: 2,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6316:
/*!***************************************************************!*\
  !*** ./src/app/admin/components/masters/masters.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MastersComponent: () => (/* binding */ MastersComponent)
/* harmony export */ });
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/component-loader.directive */ 9575);
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries/countries.component */ 3479);
/* harmony import */ var _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-locations/client-locations.component */ 8678);
/* harmony import */ var _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-priorities/task-priorities.component */ 2363);
/* harmony import */ var _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-status/task-status.component */ 7894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;








const _c0 = function (a0) {
  return {
    active: a0
  };
};
function MastersComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_a_4_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const masterMenuItem_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.menuItemClick(masterMenuItem_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const masterMenuItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeItem == masterMenuItem_r3.itemName && ctx_r0.tabs.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", masterMenuItem_r3.displayName, " ");
  }
}
function MastersComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.activeItem = tab_r6.itemName);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_li_7_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.onCloseClick(tab_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "#" + tab_r6.itemName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r1.activeItem == tab_r6.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tab_r6.displayName, " ");
  }
}
function MastersComponent_div_9_ng_template_2_Template(rf, ctx) {}
function MastersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MastersComponent_div_9_ng_template_2_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", tab_r10.itemName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r2.activeItem == tab_r10.itemName));
  }
}
class MastersComponent {
  constructor() {
    this.masterMenuItems = [{
      itemName: 'Countries',
      displayName: 'Countries',
      component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__.CountriesComponent
    }, {
      itemName: 'ClientLocations',
      displayName: 'Client Locations',
      component: _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_2__.ClientLocationsComponent
    }, {
      itemName: 'TaskPriorities',
      displayName: 'Task Priorities',
      component: _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_3__.TaskPrioritiesComponent
    }, {
      itemName: 'TaskStatus',
      displayName: 'Task Status',
      component: _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_4__.TaskStatusComponent
    }];
    this.tabs = [];
  }
  menuItemClick(clickedMasterMenuItem) {
    this.activeItem = clickedMasterMenuItem.itemName;
    const matchingTabs = this.tabs.filter(tab => {
      return tab.itemName == clickedMasterMenuItem.itemName;
    });
    if (matchingTabs.length == 0) {
      this.tabs.push({
        tabIndex: this.tabs.length,
        itemName: clickedMasterMenuItem.itemName,
        displayName: clickedMasterMenuItem.displayName
      });
      setTimeout(() => {
        const componentLoadersArray = this.componentLoaders.toArray();
        const viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
        this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;
        viewContainterRef.createComponent(clickedMasterMenuItem.component);
      }, 10);
    }
  }
  onCloseClick(clickedTab) {
    clickedTab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
    if (this.tabs.length > 0) {
      this.activeItem = this.tabs[0].itemName;
    }
  }
}
_class = MastersComponent;
_class.ɵfac = function MastersComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-masters"]],
  viewQuery: function MastersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentLoaders = _t);
    }
  },
  decls: 10,
  vars: 3,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-md-2"], [1, "list-group", "mb-4"], ["href", "#", "class", "list-group-item list-group-item-action", "onclick", "return false", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane fade show", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "onclick", "return false", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "href", "ngClass", "click"], [1, "fa", "fa-window-close", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", 3, "id", "ngClass"], [1, "pl-md-3", "pr-md-3", "mx-auto"], ["appComponentLoader", ""]],
  template: function MastersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MastersComponent_a_4_Template, 2, 4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MastersComponent_li_7_Template, 4, 5, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, MastersComponent_div_9_Template, 3, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.masterMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3502:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-papaparse */ 8836);
/* harmony import */ var _cache_services_world_cities_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cache-services/world-cities-cache.service */ 1266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/number-to-words.pipe */ 649);
var _class;










function ProjectDetailsComponent_div_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "numberToWords");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.project.teamSize), ")");
  }
}
function ProjectDetailsComponent_div_2_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](", ", ctx_r2.country, "");
  }
}
const _c0 = function () {
  return ["/admin", "projects"];
};
function ProjectDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "table", 6)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date of Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Team Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProjectDetailsComponent_div_2_span_19_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr")(21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr")(26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tr")(31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Client Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ProjectDetailsComponent_div_2_span_35_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9)(37, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", ctx_r0.project.projectID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.project.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.project.dateOfStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.project.teamSize, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.project.teamSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.project.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.project.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.project.clientLocation.clientLocationName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
  }
}
class ProjectDetailsComponent {
  constructor(activatedRoute, projectsService, httpClient, papa, cacheService) {
    this.activatedRoute = activatedRoute;
    this.projectsService = projectsService;
    this.httpClient = httpClient;
    this.papa = papa;
    this.cacheService = cacheService;
  }
  getData() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cachedData);
    } else {
      return this.httpClient.get('./assets/worldcities.csv', {
        responseType: 'text'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(params => {
      return this.projectsService.getProjectByProjectID(params['projectid']);
    })).subscribe(proj => {
      this.getData().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(csv => {
        let result = this.papa.parse(csv, {
          header: true,
          dynamicTyping: true
        });
        var re = new RegExp(proj.clientLocation.clientLocationName, 'y');
        this.country = result.data.find(c => c.city?.match(re))?.country;
        this.project = proj;
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = ProjectDetailsComponent;
_class.ɵfac = function ProjectDetailsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__.Papa), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cache_services_world_cities_cache_service__WEBPACK_IMPORTED_MODULE_1__.WorldCitiesCacheService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-project-details"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService])],
  decls: 3,
  vars: 1,
  consts: [[1, "row"], [1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], ["class", "card card-primary mb-1", 4, "ngIf"], [1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], ["class", "text-info", 4, "ngIf"], [4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-info", 3, "routerLink"], [1, "text-info"]],
  template: function ProjectDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProjectDetailsComponent_div_2_Template, 39, 11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.project);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__.NumberToWordsPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5615:
/*!***************************************************************!*\
  !*** ./src/app/admin/components/project/project.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/number-to-words.pipe */ 649);
var _class;






function ProjectComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "numberToWords");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](2, 1, ctx_r0.project.teamSize, " and ", " | ", 1), ")");
  }
}
const _c0 = function (a3) {
  return ["/admin", "projects", "view", a3];
};
class ProjectComponent {
  constructor(projectsService) {
    this.projectsService = projectsService;
    this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  onEditClick(i) {
    this.editClick.emit({
      i
    });
  }
  onDeleteClick(i) {
    this.deleteClick.emit({
      i
    });
  }
}
_class = ProjectComponent;
_class.ɵfac = function ProjectComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-project"]],
  inputs: {
    project: ["currentProject", "project"],
    i: ["recordIndex", "i"]
  },
  outputs: {
    editClick: "editClick",
    deleteClick: "deleteClick"
  },
  decls: 41,
  vars: 10,
  consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "card-body"], [1, "table", "table-borderless"], ["class", "text-info", 4, "ngIf"], [1, "card-footer"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "text-info"]],
  template: function ProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "table", 5)(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr")(16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProjectComponent_span_21_Template, 3, 6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr")(23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr")(28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7)(33, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_33_listener() {
        return ctx.onEditClick(ctx.i);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_36_listener() {
        return ctx.onDeleteClick(ctx.i);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.projectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.project.teamSize, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.project.teamSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.clientLocation.clientLocationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.project.projectID));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__.NumberToWordsPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2908:
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/projects/projects.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);
/* harmony import */ var _services_client_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client-locations.service */ 3797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/team-size-validator.directive */ 8981);
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/client-location-status-validator.directive */ 5581);
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/project-idunique-validator.directive */ 54);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project/project.component */ 5615);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
var _class;














const _c0 = ["newProjectFormCancel"];
const _c1 = ["editProjectFormCancel"];
const _c2 = ["disableAttr"];
const _c3 = function (a0) {
  return {
    "text-muted": a0
  };
};
function ProjectsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 87)(1, "app-project", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("editClick", function ProjectsComponent_div_24_Template_app_project_editClick_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const i_r30 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.onEditClick(i_r30 + ctx_r32.currentPageIndex * ctx_r32.pageSize));
    })("deleteClick", function ProjectsComponent_div_24_Template_app_project_deleteClick_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const i_r30 = restoredCtx.index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.onDeleteClick(i_r30 + ctx_r34.currentPageIndex * ctx_r34.pageSize));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentProject", project_r29)("recordIndex", i_r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, !project_r29.active));
  }
}
const _c4 = function (a0) {
  return {
    active: a0
  };
};
function ProjectsComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProjectsComponent_li_30_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const page_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.onPageIndexClicked(page_r35.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r35 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c4, page_r35.pageIndex == ctx_r1.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", page_r35.pageIndex + 1, " ");
  }
}
function ProjectsComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project ID can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project ID should contain numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Duplicate Project ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project Name can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project Name can contain alphabets, digits, dot, hyphen or space only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project Name should be at least 3 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Date of Start can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Team Size should be a number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Team Size should be divisible by 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please select status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", clientLocation_r38.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", clientLocation_r38.clientLocationName, " ");
  }
}
function ProjectsComponent_span_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please select client location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Support projects are not allowed at specified location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project Name can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project Name can contain alphabets, digits, dot, hyphen or space only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Project name should be at least 3 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Date of Start can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Team Size should be a number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Team Size should be divisible by 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please select status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", clientLocation_r39.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", clientLocation_r39.clientLocationName, " ");
  }
}
function ProjectsComponent_span_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please select client location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Support projects are not allowed at specified location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class ProjectsComponent {
  constructor(projectsService, clientLocationsService, formBuilder) {
    this.projectsService = projectsService;
    this.clientLocationsService = clientLocationsService;
    this.formBuilder = formBuilder;
    this.projects = [];
    this.searchBy = '';
    this.currentPageIndex = 0;
    this.searchPageIndex = 0;
    this.previousSearchPageIndex = 0;
    this.pages = [];
    this.pageSize = 3;
  }
  ngOnInit() {
    //new
    this.newForm = this.formBuilder.group({
      projectID: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[0-9]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]),
      projectName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[A-Za-z0-9 /-]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(30)]),
      dateOfStart: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      teamSize: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[0-9]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(7)]),
      active: this.formBuilder.control(null),
      status: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      clientLocationID: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.editForm = this.formBuilder.group({
      projectID: this.formBuilder.control(null),
      projectName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[A-Za-z0-9 /-]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(30)]),
      dateOfStart: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      teamSize: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[0-9]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(7)]),
      active: this.formBuilder.control(null),
      status: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      clientLocationID: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.deleteForm = this.formBuilder.group({
      projectID: this.formBuilder.control({
        value: null,
        disabled: true
      }),
      projectName: this.formBuilder.control({
        value: null,
        disabled: true
      })
    });
    this.subscription = this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
      this.calculateNoOfPages();
      this.currentPageIndex = 0;
    });
    this.clientLocations = this.clientLocationsService.getClientLocations();
  }
  onNewClick() {
    this.formDirective.resetForm();
    setTimeout(() => {
      this.newForm.get('active').setValue(true);
    });
  }
  onSaveClick() {
    if (this.newForm.valid) {
      this.projectsService.insertProject(this.newForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(response => {
        let p = {};
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.active = response.active;
        p.status = response.status;
        p.clientLocationID = response.clientLocationID;
        p.clientLocation = response.clientLocation;
        this.projects.push(p);
        this.newForm.reset();
        this.newProjectFormCancel.nativeElement.click();
        this.calculateNoOfPages();
      });
    }
  }
  onEditClick(index) {
    this.editForm.reset();
    this.disableAttr.nativeElement.disabled = true;
    setTimeout(() => {
      this.editForm.get('projectID').setValue(this.projects[index].projectID);
      this.editForm.get('projectName').setValue(this.projects[index].projectName);
      this.editForm.get('dateOfStart').setValue(this.projects[index].dateOfStart.split('/').reverse().join('-'));
      this.editForm.get('teamSize').setValue(this.projects[index].teamSize);
      this.editForm.get('active').setValue(this.projects[index].active);
      this.editForm.get('status').setValue(this.projects[index].status);
      this.editForm.get('clientLocationID').setValue(this.projects[index].clientLocationID);
      this.editIndex = index;
    });
  }
  onUpdateClick() {
    if (this.editForm.pristine) return;
    if (this.editForm.valid) {
      this.projectsService.updateProject(this.editForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(response => {
        let p = {};
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.active = response.active;
        p.status = response.status;
        p.clientLocationID = response.clientLocationID;
        p.clientLocation = response.clientLocation;
        this.projects[this.editIndex] = p;
        this.editForm.reset();
        this.editProjectFormCancel.nativeElement.click();
      });
    }
  }
  onDeleteClick(index) {
    this.deleteForm.reset();
    setTimeout(() => {
      this.deleteForm.get('projectID').setValue(this.projects[index].projectID);
      this.deleteForm.get('projectName').setValue(this.projects[index].projectName);
      this.deleteIndex = index;
    });
  }
  onDeleteConfirmClick() {
    this.projectsService.deleteProject(this.deleteForm.get('projectID').value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(() => {
      this.projects.splice(this.deleteIndex, 1);
      this.deleteForm.reset();
      this.calculateNoOfPages();
    });
  }
  calculateNoOfPages() {
    const filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
    const resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
    const noOfPages = Math.ceil(resultProjects?.length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = noOfPages - 1;
  }
  onSearchTextChange() {
    this.calculateNoOfPages();
    if (!this.searchText) this.currentPageIndex = this.searchPageIndex;else this.currentPageIndex = 0;
  }
  onPageIndexClicked(pageIndex) {
    if (!this.searchText) {
      this.previousSearchPageIndex = pageIndex;
      this.searchPageIndex = pageIndex;
      this.currentPageIndex = pageIndex;
    }
    this.searchPageIndex = this.previousSearchPageIndex;
    this.currentPageIndex = pageIndex;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = ProjectsComponent;
_class.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_client_locations_service__WEBPACK_IMPORTED_MODULE_2__.ClientLocationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-projects"]],
  viewQuery: function ProjectsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.newProjectFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.editProjectFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.disableAttr = _t.first);
    }
  },
  decls: 212,
  vars: 80,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-xl-12", "mx-auto"], [1, "form-group", "form-row"], [1, "col-sm-4", "col-xl-8", "mb-1"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "col-6", "col-sm-4", "col-xl-2"], ["name", "SearchBy", "title", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "projectID"], ["value", "projectName"], ["value", "dateOfStart"], ["value", "teamSize"], [1, "input-group"], ["type", "text", "placeholder", "Search", "spellcheck", "false", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-4 mb-1 projectcard", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", "", 3, "formGroup"], ["newform", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", "w-modal"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "formControlName", "projectID", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "120px", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "spellcheck", "false", "formControlName", "projectName", 1, "form-control", 3, "ngClass"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "formControlName", "dateOfStart", 1, "form-control", 2, "width", "150px", 3, "ngClass"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "formControlName", "teamSize", 1, "form-control", 2, "width", "150px", 3, "appTeamSizeValidator", "ngClass"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "formControlName", "active", 1, "form-check-input"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "formControlName", "status", 1, "form-check-input"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "formControlName", "status", "required", "required", 1, "form-check-input"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "formControlName", "clientLocationID", 1, "form-control", 3, "ngClass"], ["value", "null", "disabled", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["newProjectFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header", "bg-info", "text-white"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "formControlName", "projectID", 1, "form-control-plain-text", 2, "width", "100px"], ["disableAttr", ""], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "spellcheck", "false", "formControlName", "projectName", 1, "form-control", 3, "ngClass"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "formControlName", "dateOfStart", 1, "form-control", 2, "width", "150px", 3, "ngClass"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "formControlName", "teamSize", 1, "form-control", 2, "width", "150px", 3, "appTeamSizeValidator", "ngClass"], ["type", "checkbox", "id", "chkEditActive", "formControlName", "active", 1, "form-check-input"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "formControlName", "status", 1, "form-check-input"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "formControlName", "status", 1, "form-check-input"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "formControlName", "clientLocationID", 1, "form-control", 3, "ngClass"], ["editProjectFormCancel", ""], [3, "formGroup"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "modal-header", "bg-danger", "text-white"], [1, "text-danger", "mb-3"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "formControlName", "projectID", 1, "form-control-plain-text", 2, "width", "100px"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "formControlName", "projectName", 1, "form-control-plain-text"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "col-md-4", "mb-1", "projectcard"], [3, "currentProject", "recordIndex", "ngClass", "editClick", "deleteClick"], ["prj", ""], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], [1, "text-danger"], [3, "value"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_5_listener() {
        return ctx.onNewClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Create Project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 6)(20, "div", 13)(21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.searchText = $event;
      })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_21_listener() {
        return ctx.onSearchTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 2)(23, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, ProjectsComponent_div_24_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 1)(28, "div", 16)(29, "ul", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ProjectsComponent_li_30_Template, 3, 4, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "form", 19, 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "div", 24)(37, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "New Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "button", 26)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 27)(43, "div", 28)(44, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ProjectsComponent_span_48_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ProjectsComponent_span_49_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ProjectsComponent_span_50_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 28)(52, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, ProjectsComponent_span_56_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ProjectsComponent_span_57_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ProjectsComponent_span_58_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 28)(60, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, ProjectsComponent_span_64_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 28)(66, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, ProjectsComponent_span_70_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, ProjectsComponent_span_71_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 28)(73, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 30)(76, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 28)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 30)(84, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](89, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, ProjectsComponent_span_92_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 28)(94, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 30)(97, "select", 50)(98, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, ProjectsComponent_option_100_Template, 2, 2, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](101, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, ProjectsComponent_span_102_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](103, ProjectsComponent_span_103_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div", 53)(105, "button", 54, 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_108_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "form", 19)(111, "div", 57)(112, "div", 22)(113, "div", 23)(114, "div", 58)(115, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, "Edit Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "button", 26)(118, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "div", 27)(121, "div", 28)(122, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](125, "input", 60, 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 28)(128, "label", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](131, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](132, ProjectsComponent_span_132_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, ProjectsComponent_span_133_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](134, ProjectsComponent_span_134_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 28)(136, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](140, ProjectsComponent_span_140_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "div", 28)(142, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](145, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](146, ProjectsComponent_span_146_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](147, ProjectsComponent_span_147_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "div", 28)(149, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "div", 30)(152, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](153, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 28)(157, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 30)(160, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](161, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](165, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](168, ProjectsComponent_span_168_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "div", 28)(170, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "div", 30)(173, "select", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](174, ProjectsComponent_option_174_Template, 2, 2, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](175, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](176, ProjectsComponent_span_176_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](177, ProjectsComponent_span_177_Template, 2, 0, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "div", 53)(179, "button", 54, 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_182_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "form", 78)(185, "div", 79)(186, "div", 22)(187, "div", 23)(188, "div", 80)(189, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "Delete Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "button", 26)(192, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "div", 27)(195, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "Are you sure to delete this Project?");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "div", 28)(198, "label", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](201, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "div", 28)(203, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](206, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "div", 53)(208, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "button", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_210_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](211, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](25, 41, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](26, 45, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](53, _c5, ctx.newForm.get("projectID").invalid && (ctx.newForm.get("projectID").dirty || ctx.newForm.get("projectID").touched || _r2.submitted), ctx.newForm.get("projectID").valid && (ctx.newForm.get("projectID").dirty || ctx.newForm.get("projectID").touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectID").invalid && (ctx.newForm.get("projectID").dirty || ctx.newForm.get("projectID").touched || _r2.submitted) && ctx.newForm.get("projectID").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectID").invalid && (ctx.newForm.get("projectID").dirty || ctx.newForm.get("projectID").touched || _r2.submitted) && ctx.newForm.get("projectID").errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectID").invalid && (ctx.newForm.get("projectID").dirty || ctx.newForm.get("projectID").touched || _r2.submitted) && ctx.newForm.get("projectID").errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](56, _c5, ctx.newForm.get("projectName").invalid && (ctx.newForm.get("projectName").dirty || ctx.newForm.get("projectName").touched || _r2.submitted), ctx.newForm.get("projectName").valid && (ctx.newForm.get("projectName").dirty || ctx.newForm.get("projectName").touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectName").invalid && (ctx.newForm.get("projectName").dirty || ctx.newForm.get("projectName").touched || _r2.submitted) && ctx.newForm.get("projectName").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectName").invalid && (ctx.newForm.get("projectName").dirty || ctx.newForm.get("projectName").touched || _r2.submitted) && ctx.newForm.get("projectName").errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("projectName").invalid && (ctx.newForm.get("projectName").dirty || ctx.newForm.get("projectName").touched || _r2.submitted) && ctx.newForm.get("projectName").errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](59, _c5, ctx.newForm.get("dateOfStart").invalid && (ctx.newForm.get("dateOfStart").dirty || ctx.newForm.get("dateOfStart").touched || _r2.submitted), ctx.newForm.get("dateOfStart").valid && (ctx.newForm.get("dateOfStart").dirty || ctx.newForm.get("dateOfStart").touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("dateOfStart").invalid && (ctx.newForm.get("dateOfStart").dirty || ctx.newForm.get("dateOfStart").touched || _r2.submitted) && ctx.newForm.get("dateOfStart").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appTeamSizeValidator", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](62, _c5, ctx.newForm.get("teamSize").invalid && (ctx.newForm.get("teamSize").dirty || ctx.newForm.get("teamSize").touched || _r2.submitted), ctx.newForm.get("teamSize").valid && (ctx.newForm.get("teamSize").dirty || ctx.newForm.get("teamSize").touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("teamSize").invalid && (ctx.newForm.get("teamSize").dirty || ctx.newForm.get("teamSize").touched || _r2.submitted) && ctx.newForm.get("teamSize").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("teamSize").invalid && (ctx.newForm.get("teamSize").dirty || ctx.newForm.get("teamSize").touched || _r2.submitted) && ctx.newForm.get("teamSize").errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("status").invalid && (ctx.newForm.get("status").dirty || ctx.newForm.get("status").touched || _r2.submitted) && ctx.newForm.get("status").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](65, _c5, (ctx.newForm.errors ? ctx.newForm.get("clientLocationID").valid : ctx.newForm.get("clientLocationID").invalid) && (ctx.newForm.get("clientLocationID").dirty || ctx.newForm.get("clientLocationID").touched || _r2.submitted), ctx.newForm.get("clientLocationID").valid && (ctx.newForm.get("clientLocationID").dirty || ctx.newForm.get("clientLocationID").touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](101, 49, ctx.clientLocations));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.get("clientLocationID").invalid && (ctx.newForm.get("clientLocationID").dirty || ctx.newForm.get("clientLocationID").touched || _r2.submitted) && ctx.newForm.get("clientLocationID").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.newForm.invalid && (ctx.newForm.dirty || ctx.newForm.touched || _r2.submitted) && (ctx.newForm.errors ? ctx.newForm.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](68, _c5, ctx.editForm.get("projectName").invalid && (ctx.editForm.get("projectName").dirty || ctx.editForm.get("projectName").touched || ctx.editForm.submitted), ctx.editForm.get("projectName").valid && (ctx.editForm.get("projectName").dirty || ctx.editForm.get("projectName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("projectName").invalid && (ctx.editForm.get("projectName").dirty || ctx.editForm.get("projectName").touched || ctx.editForm.submitted) && ctx.editForm.get("projectName").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("projectName").invalid && (ctx.editForm.get("projectName").dirty || ctx.editForm.get("projectName").touched || ctx.editForm.submitted) && ctx.editForm.get("projectName").errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("projectName").invalid && (ctx.editForm.get("projectName").dirty || ctx.editForm.get("projectName").touched || ctx.editForm.submitted) && ctx.editForm.get("projectName").errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](71, _c5, ctx.editForm.get("dateOfStart").invalid && (ctx.editForm.get("dateOfStart").dirty || ctx.editForm.get("dateOfStart").touched || ctx.editForm.submitted), ctx.editForm.get("dateOfStart").valid && (ctx.editForm.get("dateOfStart").dirty || ctx.editForm.get("dateOfStart").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("dateOfStart").invalid && (ctx.editForm.get("dateOfStart").dirty || ctx.editForm.get("dateOfStart").touched || ctx.editForm.submitted) && ctx.editForm.get("dateOfStart").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appTeamSizeValidator", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](74, _c5, ctx.editForm.get("teamSize").invalid && (ctx.editForm.get("teamSize").dirty || ctx.editForm.get("teamSize").touched || ctx.editForm.submitted), ctx.editForm.get("teamSize").valid && (ctx.editForm.get("teamSize").dirty || ctx.editForm.get("teamSize").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("teamSize").invalid && (ctx.editForm.get("teamSize").dirty || ctx.editForm.get("teamSize").touched || ctx.editForm.submitted) && ctx.editForm.get("teamSize").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("teamSize").invalid && (ctx.editForm.get("teamSize").dirty || ctx.editForm.get("teamSize").touched || ctx.editForm.submitted) && ctx.editForm.get("teamSize").errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("status").invalid && (ctx.editForm.get("status").dirty || ctx.editForm.get("status").touched || ctx.editForm.submitted) && ctx.editForm.get("status").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](77, _c5, ctx.editForm.errors && (ctx.editForm.get("clientLocationID").dirty || ctx.editForm.get("clientLocationID").touched || ctx.editForm.submitted), ctx.editForm.get("clientLocationID").dirty || ctx.editForm.get("clientLocationID").touched || ctx.editForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](175, 51, ctx.clientLocations));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.get("clientLocationID").invalid && (ctx.editForm.get("clientLocationID").dirty || ctx.editForm.get("clientLocationID").touched || ctx.editForm.submitted) && ctx.editForm.get("clientLocationID").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editForm.invalid && (ctx.editForm.dirty || ctx.editForm.touched || ctx.editForm.submitted) && (ctx.editForm.errors ? ctx.editForm.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.deleteForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_3__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_4__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_5__.ProjectIDUniqueValidatorDirective, _project_project_component__WEBPACK_IMPORTED_MODULE_6__.ProjectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_7__.PagingPipe],
  styles: ["@media only screen and (min-width: 992px) {\n  .w-modal[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnctbW9kYWwge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2363:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/task-priorities/task-priorities.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPrioritiesComponent: () => (/* binding */ TaskPrioritiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_task_priorities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/task-priorities.service */ 2203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);
var _class;










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["newTaskPriorityFormCancel"];
const _c3 = ["editTaskPriorityFormCancel"];
function TaskPrioritiesComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_23_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r12.sortBy = "taskPriorityName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_24_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_25_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_28_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const taskPriority_r18 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.onEditClick(taskPriority_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_28_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const taskPriority_r18 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.onDeleteClick(taskPriority_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskPriority_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskPriority_r18.taskPriorityName);
  }
}
const _c4 = function (a0) {
  return {
    active: a0
  };
};
function TaskPrioritiesComponent_ng_container_37_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_37_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const page_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.onPageIndexClicked(page_r24.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c4, page_r24.pageIndex == ctx_r23.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r24.pageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskPrioritiesComponent_ng_container_37_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
  }
}
function TaskPrioritiesComponent_ng_container_38_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_ng_container_38_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_38_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.onPageIndexClicked(ctx_r29.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r28.currentPageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_38_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_38_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskPrioritiesComponent_ng_container_38_li_7_Template, 2, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskPrioritiesComponent_ng_container_38_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_38_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_38_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c4, ctx_r5.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c4, ctx_r5.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length);
  }
}
function TaskPrioritiesComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class TaskPrioritiesComponent {
  constructor(taskPrioritiesService, formBuilder) {
    this.taskPrioritiesService = taskPrioritiesService;
    this.formBuilder = formBuilder;
    this.taskPriorities = [];
    this.searchBy = '';
    this.sortBy = 'taskPriorityName';
    this.sortOrder = 'ASC';
    this.currentPageIndex = 0;
    this.searchPageIndex = 0;
    this.previousSearchPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
  }
  ngOnInit() {
    this.subscription = this.taskPrioritiesService.getTaskPriorities().subscribe(response => {
      this.taskPriorities = response;
      this.calculateNoOfPages();
    });
    this.newForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.editForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.deleteForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control({
        value: null,
        disabled: true
      })
    });
  }
  calculateNoOfPages() {
    const filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
    const noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    if (!this.searchText && ind >= 0 && ind < this.pages.length) {
      this.previousSearchPageIndex = ind;
      this.searchPageIndex = ind;
      this.currentPageIndex = ind;
    }
    this.searchPageIndex = this.previousSearchPageIndex;
    this.currentPageIndex = ind;
  }
  onNewClick() {
    this.newForm.reset({
      taskPriorityID: 0
    });
    setTimeout(() => {
      this.defaultTextBox_New.nativeElement.focus();
    }, 10);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      const found = this.taskPriorities.some(el => el.taskPriorityName.split(/[ -]+/).join(' ').trim() === this.newForm.value.taskPriorityName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That task priority already exists!');
      this.newForm.value.taskPriorityName = this.newForm.value.taskPriorityName.charAt(0).toUpperCase().trimLeft() + this.newForm.value.taskPriorityName.split(/[ ]+/).join(' ').slice(1);
      this.taskPrioritiesService.insertTaskPriority(this.newForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          this.taskPriorities.push(response);
          this.taskPriorities = this.taskPriorities.sort((a, b) => a.taskPriorityName > b.taskPriorityName ? 1 : a.taskPriorityName < b.taskPriorityName ? -1 : 0);
          this.newForm.reset();
          this.newTaskPriorityFormCancel.nativeElement.click();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(taskPriority) {
    this.editForm.reset();
    setTimeout(() => {
      this.editForm.patchValue(taskPriority);
      this.editIndex = this.taskPriorities.indexOf(taskPriority);
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 10);
  }
  onUpdateClick() {
    if (this.editForm.value) {
      const found = this.taskPriorities.some(el => el.taskPriorityName.split(/[ -]+/).join(' ').trim() === this.editForm.value.taskPriorityName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That task priority already exists!');
      this.editForm.value.taskPriorityName = this.editForm.value.taskPriorityName.charAt(0).toUpperCase().trimStart() + this.editForm.value.taskPriorityName.split(/[ ]+/).join(' ').slice(1);
      this.taskPrioritiesService.updateTaskPriority(this.editForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          this.taskPriorities[this.editIndex] = response;
          this.taskPriorities = this.taskPriorities.sort((a, b) => a.taskPriorityName > b.taskPriorityName ? 1 : a.taskPriorityName < b.taskPriorityName ? -1 : 0);
          this.editForm.reset();
          this.editTaskPriorityFormCancel.nativeElement.click();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(taskPriority) {
    this.deleteForm.reset();
    setTimeout(() => {
      this.deleteForm.patchValue(taskPriority);
      this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
    }, 10);
  }
  onDeleteConfirmClick() {
    this.taskPrioritiesService.deleteTaskPriority(this.deleteForm.value.taskPriorityID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: () => {
        this.taskPriorities.splice(this.deleteIndex, 1);
        this.deleteForm.reset();
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange() {
    this.calculateNoOfPages();
    if (!this.searchText) this.currentPageIndex = this.searchPageIndex;else this.currentPageIndex = 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = TaskPrioritiesComponent;
_class.ɵfac = function TaskPrioritiesComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_1__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-task-priorities"]],
  viewQuery: function TaskPrioritiesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newTaskPriorityFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editTaskPriorityFormCancel = _t.first);
    }
  },
  decls: 115,
  vars: 33,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-sm-2", "col-xl-4", "mb-1"], ["data-toggle", "modal", "data-target", "#newTaskPriorityModal", 1, "btn", "btn-primary", 3, "click"], [1, "col-6", "col-sm-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "taskPriorityName"], [1, "input-group"], ["type", "text", "placeholder", "Search", "spellcheck", "false", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "160px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskPriorityModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskPriorityName", 1, "col-sm-4", "col-form-label"], [2, "width", "20px", "display", "inline-block"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskPriorityName", "placeholder", "Task Priority Name", "spellcheck", "false", "formControlName", "taskPriorityName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["newTaskPriorityFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskPriorityModal", 1, "modal"], ["for", "txtEditTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskPriorityName", "placeholder", "Task Priority Name", "spellcheck", "false", "formControlName", "taskPriorityName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["editTaskPriorityFormCancel", ""], [3, "formGroup"], ["role", "dialog", "id", "deleteTaskPriorityModal", 1, "modal"], [1, "text-danger", "mb-2"], ["for", "txtDeleteTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskPriorityName", "placeholder", "Task Priority Name", "formControlName", "taskPriorityName", 1, "form-control-plain-text", 2, "width", "300px"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-sort", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskPriorityModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteTaskPriorityModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function TaskPrioritiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_5_listener() {
        return ctx.onNewClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Create Task Priority ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 10)(15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function TaskPrioritiesComponent_Template_input_keyup_15_listener() {
        return ctx.onSearchTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 1)(18, "div", 12)(19, "table", 13)(20, "tr", 14)(21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Task Priority Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TaskPrioritiesComponent_i_23_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, TaskPrioritiesComponent_i_24_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TaskPrioritiesComponent_i_25_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskPrioritiesComponent_tr_28_Template, 9, 1, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20)(33, "ul", 21)(34, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_34_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, TaskPrioritiesComponent_ng_container_37_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, TaskPrioritiesComponent_ng_container_38_Template, 17, 16, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_39_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "form", 25)(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29)(47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "New Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 31)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 32)(53, "div", 3)(54, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, TaskPrioritiesComponent_span_60_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 39)(62, "button", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_65_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "form", 25)(68, "div", 43)(69, "div", 27)(70, "div", 28)(71, "div", 29)(72, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Edit Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 31)(75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 32)(78, "div", 3)(79, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 45, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, TaskPrioritiesComponent_span_85_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39)(87, "button", 40, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "form", 48)(93, "div", 49)(94, "div", 27)(95, "div", 28)(96, "div", 29)(97, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Delete Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 31)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 32)(103, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Are you sure to delete this Task Priority?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 3)(106, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39)(111, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskPriorityName");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](29, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](30, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](31, 23, ctx.taskPriorities, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](27, _c5, ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted), ctx.newForm.get("taskPriorityName").valid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted) && (ctx.newForm.get("taskPriorityName").errors == null ? null : ctx.newForm.get("taskPriorityName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](30, _c5, ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted), ctx.editForm.get("taskPriorityName").valid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted) && (ctx.editForm.get("taskPriorityName").errors == null ? null : ctx.editForm.get("taskPriorityName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.deleteForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__.SortPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90YXNrLXByaW9yaXRpZXMvdGFzay1wcmlvcml0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7894:
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/task-status/task-status.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusComponent: () => (/* binding */ TaskStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_task_statuses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/task-statuses.service */ 8260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);
var _class;










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["newTaskStatusFormCancel"];
const _c3 = ["editTaskStatusFormCancel"];
function TaskStatusComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_23_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r12.sortBy = "taskStatusName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_24_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_25_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_tr_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_28_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const taskStatus_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.onEditClick(taskStatus_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_tr_28_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_28_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const taskStatus_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.onDeleteClick(taskStatus_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TaskStatusComponent_tr_28_button_4_Template, 2, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TaskStatusComponent_tr_28_button_6_Template, 2, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const taskStatus_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskStatus_r18.taskStatusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", taskStatus_r18.taskStatusName != "Holding" && taskStatus_r18.taskStatusName != "Reverted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", taskStatus_r18.taskStatusName != "Holding" && taskStatus_r18.taskStatusName != "Reverted");
  }
}
const _c4 = function (a0) {
  return {
    active: a0
  };
};
function TaskStatusComponent_ng_container_37_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_37_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const page_r29 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.onPageIndexClicked(page_r29.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c4, page_r29.pageIndex == ctx_r28.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r29.pageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskStatusComponent_ng_container_37_li_1_Template, 3, 4, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
  }
}
function TaskStatusComponent_ng_container_38_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_ng_container_38_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_38_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r33.currentPageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_38_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_38_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskStatusComponent_ng_container_38_li_7_Template, 2, 0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskStatusComponent_ng_container_38_li_8_Template, 3, 2, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_38_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.onPageIndexClicked(ctx_r39.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_38_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.onPageIndexClicked(ctx_r40.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c4, ctx_r5.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c4, ctx_r5.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentPageIndex > 1 && ctx_r5.currentPageIndex < ctx_r5.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c4, ctx_r5.currentPageIndex == ctx_r5.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.pages.length);
  }
}
function TaskStatusComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class TaskStatusComponent {
  constructor(taskStatusesService, formBuilder) {
    this.taskStatusesService = taskStatusesService;
    this.formBuilder = formBuilder;
    this.taskStatuses = [];
    this.searchBy = '';
    this.sortBy = 'taskStatusName';
    this.sortOrder = 'ASC';
    this.currentPageIndex = 0;
    this.searchPageIndex = 0;
    this.previousSearchPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
  }
  ngOnInit() {
    this.subscription = this.taskStatusesService.getTaskStatuses().subscribe(response => {
      this.taskStatuses = response;
      this.calculateNoOfPages();
    });
    this.newForm = this.formBuilder.group({
      taskStatusID: this.formBuilder.control(null),
      taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.editForm = this.formBuilder.group({
      taskStatusID: this.formBuilder.control(null),
      taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)])
    });
    this.deleteForm = this.formBuilder.group({
      taskStatusID: this.formBuilder.control(null),
      taskStatusName: this.formBuilder.control({
        value: null,
        disabled: true
      })
    });
  }
  calculateNoOfPages() {
    const filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
    const noOfPages = Math.ceil(filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    if (!this.searchText && ind >= 0 && ind < this.pages.length) {
      this.previousSearchPageIndex = ind;
      this.searchPageIndex = ind;
      this.currentPageIndex = ind;
    }
    this.searchPageIndex = this.previousSearchPageIndex;
    this.currentPageIndex = ind;
  }
  onNewClick() {
    this.newForm.reset({
      taskStatusID: 0
    });
    setTimeout(() => {
      this.defaultTextBox_New.nativeElement.focus();
    }, 10);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      const found = this.taskStatuses.some(el => el.taskStatusName.split(/[ -]+/).join(' ').trim() === this.newForm.value.taskStatusName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That task status already exists!');
      this.newForm.value.taskStatusName = this.newForm.value.taskStatusName.charAt(0).toUpperCase().trimLeft() + this.newForm.value.taskStatusName.split(/[ ]+/).join(' ').slice(1);
      this.taskStatusesService.insertTaskStatus(this.newForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          this.taskStatuses.push(response);
          this.taskStatuses = this.taskStatuses.sort((a, b) => a.taskStatusName > b.taskStatusName ? 1 : a.taskStatusName < b.taskStatusName ? -1 : 0);
          this.newForm.reset();
          this.newTaskStatusFormCancel.nativeElement.click();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(taskStatus) {
    this.editForm.reset();
    setTimeout(() => {
      this.editForm.patchValue(taskStatus);
      this.editIndex = this.taskStatuses.indexOf(taskStatus);
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 10);
  }
  onUpdateClick() {
    if (this.editForm.value) {
      const found = this.taskStatuses.some(el => el.taskStatusName.split(/[ -]+/).join(' ').trim() === this.editForm.value.taskStatusName.split(/[ -]+/).join(' ').trim());
      if (found) return alert('That task status already exists!');
      this.editForm.value.taskStatusName = this.editForm.value.taskStatusName.charAt(0).toUpperCase().trimStart() + this.editForm.value.taskStatusName.split(/[ ]+/).join(' ').slice(1);
      this.taskStatusesService.updateTaskStatus(this.editForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
        next: response => {
          this.taskStatuses[this.editIndex] = response;
          this.taskStatuses = this.taskStatuses.sort((a, b) => a.taskStatusName > b.taskStatusName ? 1 : a.taskStatusName < b.taskStatusName ? -1 : 0);
          this.editForm.reset();
          this.editTaskStatusFormCancel.nativeElement.click();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(taskStatus) {
    this.deleteForm.reset();
    setTimeout(() => {
      this.deleteForm.patchValue(taskStatus);
      this.deleteIndex = this.taskStatuses.indexOf(taskStatus);
    }, 10);
  }
  onDeleteConfirmClick() {
    this.taskStatusesService.deleteTaskStatus(this.deleteForm.value.taskStatusID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: () => {
        this.taskStatuses.splice(this.deleteIndex, 1);
        this.deleteForm.reset();
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange() {
    this.calculateNoOfPages();
    if (!this.searchText) this.currentPageIndex = this.searchPageIndex;else this.currentPageIndex = 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = TaskStatusComponent;
_class.ɵfac = function TaskStatusComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_1__.TaskStatusesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-task-status"]],
  viewQuery: function TaskStatusComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newTaskStatusFormCancel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editTaskStatusFormCancel = _t.first);
    }
  },
  decls: 115,
  vars: 33,
  consts: [[1, "row", "mb-4"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-sm-2", "col-xl-4", "mb-1"], ["data-toggle", "modal", "data-target", "#newTaskStatusModal", 1, "btn", "btn-primary", 3, "click"], [1, "col-6", "col-sm-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "taskStatusName"], [1, "input-group"], ["type", "text", "spellcheck", "false", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "160px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskStatusModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskStatusName", 1, "col-sm-4", "col-form-label"], [2, "width", "20px", "display", "inline-block"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskStatusName", "placeholder", "Task Status Name", "spellcheck", "false", "formControlName", "taskStatusName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["newTaskStatusFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskStatusModal", 1, "modal"], ["for", "txtEditTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskStatusName", "placeholder", "Task Status Name", "spellcheck", "false", "formControlName", "taskStatusName", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["editTaskStatusFormCancel", ""], [3, "formGroup"], ["role", "dialog", "id", "deleteTaskStatusModal", 1, "modal"], [1, "text-danger", "mb-2"], ["for", "txtDeleteTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskStatusName", "placeholder", "Task Status Name", "formControlName", "taskStatusName", 1, "form-control-plain-text", 2, "width", "300px"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-sort", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["class", "btn btn-info", "data-toggle", "modal", "data-target", "#editTaskStatusModal", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", "data-toggle", "modal", "data-target", "#deleteTaskStatusModal", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#editTaskStatusModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteTaskStatusModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function TaskStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_5_listener() {
        return ctx.onNewClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Create Task Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_select_ngModelChange_8_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 10)(15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function TaskStatusComponent_Template_input_keyup_15_listener() {
        return ctx.onSearchTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 1)(18, "div", 12)(19, "table", 13)(20, "tr", 14)(21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Task Status Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TaskStatusComponent_i_23_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, TaskStatusComponent_i_24_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TaskStatusComponent_i_25_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskStatusComponent_tr_28_Template, 7, 3, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20)(33, "ul", 21)(34, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_34_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, TaskStatusComponent_ng_container_37_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, TaskStatusComponent_ng_container_38_Template, 17, 16, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_39_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "form", 25)(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29)(47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "New Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 31)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 32)(53, "div", 3)(54, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, TaskStatusComponent_span_60_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 39)(62, "button", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_65_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "form", 25)(68, "div", 43)(69, "div", 27)(70, "div", 28)(71, "div", 29)(72, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Edit Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 31)(75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 32)(78, "div", 3)(79, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 45, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, TaskStatusComponent_span_85_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39)(87, "button", 40, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "form", 48)(93, "div", 49)(94, "div", 27)(95, "div", 28)(96, "div", 29)(97, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Delete Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 31)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 32)(103, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Are you sure to delete this Task Status?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 3)(106, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39)(111, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskStatusName");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](29, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](30, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](31, 23, ctx.taskStatuses, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](27, _c5, ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted), ctx.newForm.get("taskStatusName").valid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted) && (ctx.newForm.get("taskStatusName").errors == null ? null : ctx.newForm.get("taskStatusName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](30, _c5, ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted), ctx.editForm.get("taskStatusName").valid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted) && (ctx.editForm.get("taskStatusName").errors == null ? null : ctx.editForm.get("taskStatusName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.deleteForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_2__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__.SortPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90YXNrLXN0YXR1cy90YXNrLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 458:
/*!******************************************************************!*\
  !*** ./src/app/cache-services/client-locations-cache.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationsCacheService: () => (/* binding */ ClientLocationsCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ClientLocationsCacheService {
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
_class = ClientLocationsCacheService;
_class.ɵfac = function ClientLocationsCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1266:
/*!**************************************************************!*\
  !*** ./src/app/cache-services/world-cities-cache.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldCitiesCacheService: () => (/* binding */ WorldCitiesCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class WorldCitiesCacheService {
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
_class = WorldCitiesCacheService;
_class.ɵfac = function WorldCitiesCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3797:
/*!******************************************************!*\
  !*** ./src/app/services/client-locations.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationsService: () => (/* binding */ ClientLocationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_client_locations_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/client-locations-cache.service */ 458);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class ClientLocationsService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getClientLocations() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/clientlocations`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getClientLocationsByClientLocationID(clientLocationID) {
    return this.httpClient.get(`${API_BASE_URL}/api/clientlocations/searchbyclientlocationid/${clientLocationID}`, {
      responseType: 'json'
    });
  }
  insertClientLocation(newClientLocation) {
    return this.httpClient.post(`${API_BASE_URL}/api/clientlocations`, newClientLocation, {
      responseType: 'json'
    });
  }
  updateClientLocation(existingClientLocation) {
    return this.httpClient.put(`${API_BASE_URL}/api/clientlocations`, existingClientLocation, {
      responseType: 'json'
    });
  }
  deleteClientLocation(clientLocationID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/clientlocations?ClientLocationID=${clientLocationID}`);
  }
}
_class = ClientLocationsService;
_class.ɵfac = function ClientLocationsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_client_locations_cache_service__WEBPACK_IMPORTED_MODULE_0__.ClientLocationsCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7809:
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function s() {
  "use strict";

  var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
  var n = !f.document && !!f.postMessage,
    o = f.IS_PAPA_WORKER || !1,
    a = {},
    u = 0,
    b = {
      parse: function (e, t) {
        var r = (t = t || {}).dynamicTyping || !1;
        J(r) && (t.dynamicTypingFunction = r, r = {});
        if (t.dynamicTyping = r, t.transform = !!J(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
          var i = function () {
            if (!b.WORKERS_SUPPORTED) return !1;
            var e = (r = f.URL || f.webkitURL || null, i = s.toString(), b.BLOB_URL || (b.BLOB_URL = r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", i, ")();"], {
                type: "text/javascript"
              })))),
              t = new f.Worker(e);
            var r, i;
            return t.onmessage = _, t.id = u++, a[t.id] = t;
          }();
          return i.userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = J(t.step), t.chunk = J(t.chunk), t.complete = J(t.complete), t.error = J(t.error), delete t.worker, void i.postMessage({
            input: e,
            config: t,
            workerId: i.id
          });
        }
        var n = null;
        b.NODE_STREAM_INPUT, "string" == typeof e ? (e = function (e) {
          if (65279 === e.charCodeAt(0)) return e.slice(1);
          return e;
        }(e), n = t.download ? new l(t) : new p(t)) : !0 === e.readable && J(e.read) && J(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
        return n.stream(e);
      },
      unparse: function (e, t) {
        var n = !1,
          _ = !0,
          m = ",",
          y = "\r\n",
          s = '"',
          a = s + s,
          r = !1,
          i = null,
          o = !1;
        !function () {
          if ("object" != typeof t) return;
          "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function (e) {
            return -1 !== t.delimiter.indexOf(e);
          }).length || (m = t.delimiter);
          ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
          "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (r = t.skipEmptyLines);
          "string" == typeof t.newline && (y = t.newline);
          "string" == typeof t.quoteChar && (s = t.quoteChar);
          "boolean" == typeof t.header && (_ = t.header);
          if (Array.isArray(t.columns)) {
            if (0 === t.columns.length) throw new Error("Option columns is empty");
            i = t.columns;
          }
          void 0 !== t.escapeChar && (a = t.escapeChar + s);
          ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
        }();
        var u = new RegExp(Q(s), "g");
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
          if (!e.length || Array.isArray(e[0])) return h(null, e, r);
          if ("object" == typeof e[0]) return h(i || Object.keys(e[0]), e, r);
        } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || i), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), h(e.fields || [], e.data || [], r);
        throw new Error("Unable to serialize unrecognized input");
        function h(e, t, r) {
          var i = "";
          "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
          var n = Array.isArray(e) && 0 < e.length,
            s = !Array.isArray(t[0]);
          if (n && _) {
            for (var a = 0; a < e.length; a++) 0 < a && (i += m), i += v(e[a], a);
            0 < t.length && (i += y);
          }
          for (var o = 0; o < t.length; o++) {
            var u = n ? e.length : t[o].length,
              h = !1,
              f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
            if (r && !n && (h = "greedy" === r ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === r && n) {
              for (var d = [], l = 0; l < u; l++) {
                var c = s ? e[l] : l;
                d.push(t[o][c]);
              }
              h = "" === d.join("").trim();
            }
            if (!h) {
              for (var p = 0; p < u; p++) {
                0 < p && !f && (i += m);
                var g = n && s ? e[p] : p;
                i += v(t[o][g], p);
              }
              o < t.length - 1 && (!r || 0 < u && !f) && (i += y);
            }
          }
          return i;
        }
        function v(e, t) {
          if (null == e) return "";
          if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
          var r = !1;
          o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0);
          var i = e.toString().replace(u, a);
          return (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function (e, t) {
            for (var r = 0; r < t.length; r++) if (-1 < e.indexOf(t[r])) return !0;
            return !1;
          }(i, b.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i;
        }
      }
    };
  if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\ufeff", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = r, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
    var d = f.jQuery;
    d.fn.parse = function (o) {
      var r = o.config || {},
        u = [];
      return this.each(function (e) {
        if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;
        for (var t = 0; t < this.files.length; t++) u.push({
          file: this.files[t],
          inputElem: this,
          instanceConfig: d.extend({}, r)
        });
      }), e(), this;
      function e() {
        if (0 !== u.length) {
          var e,
            t,
            r,
            i,
            n = u[0];
          if (J(o.before)) {
            var s = o.before(n.file, n.inputElem);
            if ("object" == typeof s) {
              if ("abort" === s.action) return e = "AbortError", t = n.file, r = n.inputElem, i = s.reason, void (J(o.error) && o.error({
                name: e
              }, t, r, i));
              if ("skip" === s.action) return void h();
              "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
            } else if ("skip" === s) return void h();
          }
          var a = n.instanceConfig.complete;
          n.instanceConfig.complete = function (e) {
            J(a) && a(e, n.file, n.inputElem), h();
          }, b.parse(n.file, n.instanceConfig);
        } else J(o.complete) && o.complete();
      }
      function h() {
        u.splice(0, 1), e();
      }
    };
  }
  function h(e) {
    this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
      data: [],
      errors: [],
      meta: {}
    }, function (e) {
      var t = w(e);
      t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
      this._handle = new r(t), (this._handle.streamer = this)._config = t;
    }.call(this, e), this.parseChunk = function (e, t) {
      if (this.isFirstChunk && J(this._config.beforeFirstChunk)) {
        var r = this._config.beforeFirstChunk(e);
        void 0 !== r && (e = r);
      }
      this.isFirstChunk = !1, this._halted = !1;
      var i = this._partialLine + e;
      this._partialLine = "";
      var n = this._handle.parse(i, this._baseIndex, !this._finished);
      if (!this._handle.paused() && !this._handle.aborted()) {
        var s = n.meta.cursor;
        this._finished || (this._partialLine = i.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
        var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
        if (o) f.postMessage({
          results: n,
          workerId: b.WORKER_ID,
          finished: a
        });else if (J(this._config.chunk) && !t) {
          if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
          n = void 0, this._completeResults = void 0;
        }
        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !J(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
      }
      this._halted = !0;
    }, this._sendError = function (e) {
      J(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
        workerId: b.WORKER_ID,
        error: e,
        finished: !1
      });
    };
  }
  function l(e) {
    var i;
    (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), h.call(this, e), this._nextChunk = n ? function () {
      this._readChunk(), this._chunkLoaded();
    } : function () {
      this._readChunk();
    }, this.stream = function (e) {
      this._input = e, this._nextChunk();
    }, this._readChunk = function () {
      if (this._finished) this._chunkLoaded();else {
        if (i = new XMLHttpRequest(), this._config.withCredentials && (i.withCredentials = this._config.withCredentials), n || (i.onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)), i.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
          var e = this._config.downloadRequestHeaders;
          for (var t in e) i.setRequestHeader(t, e[t]);
        }
        if (this._config.chunkSize) {
          var r = this._start + this._config.chunkSize - 1;
          i.setRequestHeader("Range", "bytes=" + this._start + "-" + r);
        }
        try {
          i.send(this._config.downloadRequestBody);
        } catch (e) {
          this._chunkError(e.message);
        }
        n && 0 === i.status && this._chunkError();
      }
    }, this._chunkLoaded = function () {
      4 === i.readyState && (i.status < 200 || 400 <= i.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (e) {
        var t = e.getResponseHeader("Content-Range");
        if (null === t) return -1;
        return parseInt(t.substring(t.lastIndexOf("/") + 1));
      }(i), this.parseChunk(i.responseText)));
    }, this._chunkError = function (e) {
      var t = i.statusText || e;
      this._sendError(new Error(t));
    };
  }
  function c(e) {
    var i, n;
    (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), h.call(this, e);
    var s = "undefined" != typeof FileReader;
    this.stream = function (e) {
      this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((i = new FileReader()).onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)) : i = new FileReaderSync(), this._nextChunk();
    }, this._nextChunk = function () {
      this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
    }, this._readChunk = function () {
      var e = this._input;
      if (this._config.chunkSize) {
        var t = Math.min(this._start + this._config.chunkSize, this._input.size);
        e = n.call(e, this._start, t);
      }
      var r = i.readAsText(e, this._config.encoding);
      s || this._chunkLoaded({
        target: {
          result: r
        }
      });
    }, this._chunkLoaded = function (e) {
      this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
    }, this._chunkError = function () {
      this._sendError(i.error);
    };
  }
  function p(e) {
    var r;
    h.call(this, e = e || {}), this.stream = function (e) {
      return r = e, this._nextChunk();
    }, this._nextChunk = function () {
      if (!this._finished) {
        var e,
          t = this._config.chunkSize;
        return t ? (e = r.substring(0, t), r = r.substring(t)) : (e = r, r = ""), this._finished = !r, this.parseChunk(e);
      }
    };
  }
  function g(e) {
    h.call(this, e = e || {});
    var t = [],
      r = !0,
      i = !1;
    this.pause = function () {
      h.prototype.pause.apply(this, arguments), this._input.pause();
    }, this.resume = function () {
      h.prototype.resume.apply(this, arguments), this._input.resume();
    }, this.stream = function (e) {
      this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
    }, this._checkIsFinished = function () {
      i && 1 === t.length && (this._finished = !0);
    }, this._nextChunk = function () {
      this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r = !0;
    }, this._streamData = v(function (e) {
      try {
        t.push("string" == typeof e ? e : e.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
      } catch (e) {
        this._streamError(e);
      }
    }, this), this._streamError = v(function (e) {
      this._streamCleanUp(), this._sendError(e);
    }, this), this._streamEnd = v(function () {
      this._streamCleanUp(), i = !0, this._streamData("");
    }, this), this._streamCleanUp = v(function () {
      this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
    }, this);
  }
  function r(m) {
    var a,
      o,
      u,
      i = Math.pow(2, 53),
      n = -i,
      s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
      h = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
      t = this,
      r = 0,
      f = 0,
      d = !1,
      e = !1,
      l = [],
      c = {
        data: [],
        errors: [],
        meta: {}
      };
    if (J(m.step)) {
      var p = m.step;
      m.step = function (e) {
        if (c = e, _()) g();else {
          if (g(), 0 === c.data.length) return;
          r += e.data.length, m.preview && r > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
        }
      };
    }
    function y(e) {
      return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
    }
    function g() {
      return c && u && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), u = !1), m.skipEmptyLines && (c.data = c.data.filter(function (e) {
        return !y(e);
      })), _() && function () {
        if (!c) return;
        function e(e, t) {
          J(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
        }
        if (Array.isArray(c.data[0])) {
          for (var t = 0; _() && t < c.data.length; t++) c.data[t].forEach(e);
          c.data.splice(0, 1);
        } else c.data.forEach(e);
      }(), function () {
        if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;
        function e(e, t) {
          var r,
            i = m.header ? {} : [];
          for (r = 0; r < e.length; r++) {
            var n = r,
              s = e[r];
            m.header && (n = r >= l.length ? "__parsed_extra" : l[r]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
          }
          return m.header && (r > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + r, f + t) : r < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + r, f + t)), i;
        }
        var t = 1;
        !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
        m.header && c.meta && (c.meta.fields = l);
        return f += t, c;
      }();
    }
    function _() {
      return m.header && 0 === l.length;
    }
    function v(e, t) {
      return r = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[r] && (m.dynamicTyping[r] = m.dynamicTypingFunction(r)), !0 === (m.dynamicTyping[r] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function (e) {
        if (s.test(e)) {
          var t = parseFloat(e);
          if (n < t && t < i) return !0;
        }
        return !1;
      }(t) ? parseFloat(t) : h.test(t) ? new Date(t) : "" === t ? null : t) : t;
      var r;
    }
    function k(e, t, r, i) {
      var n = {
        type: e,
        code: t,
        message: r
      };
      void 0 !== i && (n.row = i), c.errors.push(n);
    }
    this.parse = function (e, t, r) {
      var i = m.quoteChar || '"';
      if (m.newline || (m.newline = function (e, t) {
        e = e.substring(0, 1048576);
        var r = new RegExp(Q(t) + "([^]*?)" + Q(t), "gm"),
          i = (e = e.replace(r, "")).split("\r"),
          n = e.split("\n"),
          s = 1 < n.length && n[0].length < i[0].length;
        if (1 === i.length || s) return "\n";
        for (var a = 0, o = 0; o < i.length; o++) "\n" === i[o][0] && a++;
        return a >= i.length / 2 ? "\r\n" : "\r";
      }(e, i)), u = !1, m.delimiter) J(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);else {
        var n = function (e, t, r, i, n) {
          var s, a, o, u;
          n = n || [",", "\t", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
          for (var h = 0; h < n.length; h++) {
            var f = n[h],
              d = 0,
              l = 0,
              c = 0;
            o = void 0;
            for (var p = new E({
                comments: i,
                delimiter: f,
                newline: t,
                preview: 10
              }).parse(e), g = 0; g < p.data.length; g++) if (r && y(p.data[g])) c++;else {
              var _ = p.data[g].length;
              l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
            }
            0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === u || u < l) && 1.99 < l && (a = d, s = f, u = l);
          }
          return {
            successful: !!(m.delimiter = s),
            bestDelimiter: s
          };
        }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
        n.successful ? m.delimiter = n.bestDelimiter : (u = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
      }
      var s = w(m);
      return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, r), g(), d ? {
        meta: {
          paused: !0
        }
      } : c || {
        meta: {
          paused: !1
        }
      };
    }, this.paused = function () {
      return d;
    }, this.pause = function () {
      d = !0, o.abort(), a = J(m.chunk) ? "" : a.substring(o.getCharIndex());
    }, this.resume = function () {
      t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
    }, this.aborted = function () {
      return e;
    }, this.abort = function () {
      e = !0, o.abort(), c.meta.aborted = !0, J(m.complete) && m.complete(c), a = "";
    };
  }
  function Q(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function E(j) {
    var z,
      M = (j = j || {}).delimiter,
      P = j.newline,
      U = j.comments,
      q = j.step,
      N = j.preview,
      B = j.fastMode,
      K = z = void 0 === j.quoteChar || null === j.quoteChar ? '"' : j.quoteChar;
    if (void 0 !== j.escapeChar && (K = j.escapeChar), ("string" != typeof M || -1 < b.BAD_DELIMITERS.indexOf(M)) && (M = ","), U === M) throw new Error("Comment character same as delimiter");
    !0 === U ? U = "#" : ("string" != typeof U || -1 < b.BAD_DELIMITERS.indexOf(U)) && (U = !1), "\n" !== P && "\r" !== P && "\r\n" !== P && (P = "\n");
    var W = 0,
      H = !1;
    this.parse = function (i, t, r) {
      if ("string" != typeof i) throw new Error("Input must be a string");
      var n = i.length,
        e = M.length,
        s = P.length,
        a = U.length,
        o = J(q),
        u = [],
        h = [],
        f = [],
        d = W = 0;
      if (!i) return L();
      if (j.header && !t) {
        var l = i.split(P)[0].split(M),
          c = [],
          p = {},
          g = !1;
        for (var _ in l) {
          var m = l[_];
          J(j.transformHeader) && (m = j.transformHeader(m, _));
          var y = m,
            v = p[m] || 0;
          for (0 < v && (g = !0, y = m + "_" + v), p[m] = v + 1; c.includes(y);) y = y + "_" + v;
          c.push(y);
        }
        if (g) {
          var k = i.split(P);
          k[0] = c.join(M), i = k.join(P);
        }
      }
      if (B || !1 !== B && -1 === i.indexOf(z)) {
        for (var b = i.split(P), E = 0; E < b.length; E++) {
          if (f = b[E], W += f.length, E !== b.length - 1) W += P.length;else if (r) return L();
          if (!U || f.substring(0, a) !== U) {
            if (o) {
              if (u = [], I(f.split(M)), F(), H) return L();
            } else I(f.split(M));
            if (N && N <= E) return u = u.slice(0, N), L(!0);
          }
        }
        return L();
      }
      for (var w = i.indexOf(M, W), R = i.indexOf(P, W), C = new RegExp(Q(K) + Q(z), "g"), S = i.indexOf(z, W);;) if (i[W] !== z) {
        if (U && 0 === f.length && i.substring(W, W + a) === U) {
          if (-1 === R) return L();
          W = R + s, R = i.indexOf(P, W), w = i.indexOf(M, W);
        } else if (-1 !== w && (w < R || -1 === R)) f.push(i.substring(W, w)), W = w + e, w = i.indexOf(M, W);else {
          if (-1 === R) break;
          if (f.push(i.substring(W, R)), D(R + s), o && (F(), H)) return L();
          if (N && u.length >= N) return L(!0);
        }
      } else for (S = W, W++;;) {
        if (-1 === (S = i.indexOf(z, S + 1))) return r || h.push({
          type: "Quotes",
          code: "MissingQuotes",
          message: "Quoted field unterminated",
          row: u.length,
          index: W
        }), T();
        if (S === n - 1) return T(i.substring(W, S).replace(C, z));
        if (z !== K || i[S + 1] !== K) {
          if (z === K || 0 === S || i[S - 1] !== K) {
            -1 !== w && w < S + 1 && (w = i.indexOf(M, S + 1)), -1 !== R && R < S + 1 && (R = i.indexOf(P, S + 1));
            var O = A(-1 === R ? w : Math.min(w, R));
            if (i.substr(S + 1 + O, e) === M) {
              f.push(i.substring(W, S).replace(C, z)), i[W = S + 1 + O + e] !== z && (S = i.indexOf(z, W)), w = i.indexOf(M, W), R = i.indexOf(P, W);
              break;
            }
            var x = A(R);
            if (i.substring(S + 1 + x, S + 1 + x + s) === P) {
              if (f.push(i.substring(W, S).replace(C, z)), D(S + 1 + x + s), w = i.indexOf(M, W), S = i.indexOf(z, W), o && (F(), H)) return L();
              if (N && u.length >= N) return L(!0);
              break;
            }
            h.push({
              type: "Quotes",
              code: "InvalidQuotes",
              message: "Trailing quote on quoted field is malformed",
              row: u.length,
              index: W
            }), S++;
          }
        } else S++;
      }
      return T();
      function I(e) {
        u.push(e), d = W;
      }
      function A(e) {
        var t = 0;
        if (-1 !== e) {
          var r = i.substring(S + 1, e);
          r && "" === r.trim() && (t = r.length);
        }
        return t;
      }
      function T(e) {
        return r || (void 0 === e && (e = i.substring(W)), f.push(e), W = n, I(f), o && F()), L();
      }
      function D(e) {
        W = e, I(f), f = [], R = i.indexOf(P, W);
      }
      function L(e) {
        return {
          data: u,
          errors: h,
          meta: {
            delimiter: M,
            linebreak: P,
            aborted: H,
            truncated: !!e,
            cursor: d + (t || 0)
          }
        };
      }
      function F() {
        q(L()), u = [], h = [];
      }
    }, this.abort = function () {
      H = !0;
    }, this.getCharIndex = function () {
      return W;
    };
  }
  function _(e) {
    var t = e.data,
      r = a[t.workerId],
      i = !1;
    if (t.error) r.userError(t.error, t.file);else if (t.results && t.results.data) {
      var n = {
        abort: function () {
          i = !0, m(t.workerId, {
            data: [],
            errors: [],
            meta: {
              aborted: !0
            }
          });
        },
        pause: y,
        resume: y
      };
      if (J(r.userStep)) {
        for (var s = 0; s < t.results.data.length && (r.userStep({
          data: t.results.data[s],
          errors: t.results.errors,
          meta: t.results.meta
        }, n), !i); s++);
        delete t.results;
      } else J(r.userChunk) && (r.userChunk(t.results, n, t.file), delete t.results);
    }
    t.finished && !i && m(t.workerId, t.results);
  }
  function m(e, t) {
    var r = a[e];
    J(r.userComplete) && r.userComplete(t), r.terminate(), delete a[e];
  }
  function y() {
    throw new Error("Not implemented.");
  }
  function w(e) {
    if ("object" != typeof e || null === e) return e;
    var t = Array.isArray(e) ? [] : {};
    for (var r in e) t[r] = w(e[r]);
    return t;
  }
  function v(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }
  function J(e) {
    return "function" == typeof e;
  }
  return o && (f.onmessage = function (e) {
    var t = e.data;
    void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
    if ("string" == typeof t.input) f.postMessage({
      workerId: b.WORKER_ID,
      results: b.parse(t.input, t.config),
      finished: !0
    });else if (f.File && t.input instanceof File || t.input instanceof Object) {
      var r = b.parse(t.input, t.config);
      r && f.postMessage({
        workerId: b.WORKER_ID,
        results: r,
        finished: !0
      });
    }
  }), (l.prototype = Object.create(h.prototype)).constructor = l, (c.prototype = Object.create(h.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(h.prototype)).constructor = g, b;
});

/***/ }),

/***/ 8836:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-papaparse/fesm2022/ngx-papaparse.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Papa: () => (/* binding */ Papa)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse/papaparse.min.js */ 7809);
var _class;



class Papa {
  constructor() {
    this._papa = /*#__PURE__*/ (papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_0__, 2)));
  }
  /**
   * Parse CSV to an array
   */
  parse(csv, config) {
    return this._papa.parse(csv, config);
  }
  /**
   * Convert an array into CSV
   */
  unparse(data, config) {
    return this._papa.unparse(data, config);
  }
  /**
   * Set the size in bytes of each file chunk.
   * Used when streaming files obtained from the DOM that
   * exist on the local computer. Default 10 MB.
   */
  setLocalChunkSize(value) {
    this._papa.LocalChunkSize = value;
  }
  /**
   * Set the size in bytes of each remote file chunk.
   * Used when streaming remote files. Default 5 MB.
   */
  setRemoteChunkSize(value) {
    this._papa.RemoteChunkSize = value;
  }
  /**
   * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
   */
  setDefaultDelimiter(value) {
    this._papa.DefaultDelimiter = value;
  }
  /**
   * An array of characters that are not allowed as delimiters.
   */
  get badDelimiters() {
    return this._papa.BAD_DELIMITERS;
  }
  /**
   * The true delimiter. Invisible. ASCII code 30.
   * Should be doing the job we strangely rely upon commas and tabs for.
   */
  get recordSeparator() {
    return this._papa.RECORD_SEP;
  }
  /**
   * Also sometimes used as a delimiting character. ASCII code 31.
   */
  get unitSeparator() {
    return this._papa.UNIT_SEP;
  }
  /**
   * Whether or not the browser supports HTML5 Web Workers.
   * If false, worker: true will have no effect.
   */
  get workersSupported() {
    return this._papa.WORKERS_SUPPORTED;
  }
}
_class = Papa;
_class.ɵfac = function _class_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Papa, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/*
 * Public API Surface of papaparse
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map