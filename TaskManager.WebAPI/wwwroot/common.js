"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["common"],{

/***/ 3989:
/*!*****************************************************************!*\
  !*** ./src/app/cache-services/task-priorities-cache.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPrioritiesCacheService: () => (/* binding */ TaskPrioritiesCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TaskPrioritiesCacheService {
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
_class = TaskPrioritiesCacheService;
_class.ɵfac = function TaskPrioritiesCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3746:
/*!***************************************************************!*\
  !*** ./src/app/cache-services/task-statuses-cache.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusesCacheService: () => (/* binding */ TaskStatusesCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TaskStatusesCacheService {
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
_class = TaskStatusesCacheService;
_class.ɵfac = function TaskStatusesCacheService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8919:
/*!**********************************************!*\
  !*** ./src/app/guards/can-activate.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canActivateGuard: () => (/* binding */ canActivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 6138);



const canActivateGuard = (route, state) => {
  const token = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).token : null;
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService).isAuthenticated() && (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService).decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == route.data['role']) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ 2203:
/*!*****************************************************!*\
  !*** ./src/app/services/task-priorities.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPrioritiesService: () => (/* binding */ TaskPrioritiesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_task_priorities_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/task-priorities-cache.service */ 3989);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class TaskPrioritiesService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getTaskPriorities() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/taskpriorities`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getTaskPrioritytByTaskPriorityID(taskPriorityID) {
    return this.httpClient.get(`${API_BASE_URL}/api/taskpriorities/searchbytaskpriorityid/${taskPriorityID}`, {
      responseType: 'json'
    });
  }
  insertTaskPriority(newTaskPriority) {
    return this.httpClient.post(`${API_BASE_URL}/api/taskpriorities`, newTaskPriority, {
      responseType: 'json'
    });
  }
  updateTaskPriority(existingTaskPriority) {
    return this.httpClient.put(`${API_BASE_URL}/api/taskpriorities`, existingTaskPriority, {
      responseType: 'json'
    });
  }
  deleteTaskPriority(taskPriorityID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/taskpriorities?TaskPriorityID=${taskPriorityID}`);
  }
}
_class = TaskPrioritiesService;
_class.ɵfac = function TaskPrioritiesService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_task_priorities_cache_service__WEBPACK_IMPORTED_MODULE_0__.TaskPrioritiesCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8260:
/*!***************************************************!*\
  !*** ./src/app/services/task-statuses.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusesService: () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_task_statuses_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/task-statuses-cache.service */ 3746);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class TaskStatusesService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getTaskStatuses() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/taskstatuses`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getTaskStatusByTaskStatusID(taskStatusID) {
    return this.httpClient.get(`${API_BASE_URL}/api/taskstatuses/searchbytaskstatusid/${taskStatusID}`, {
      responseType: 'json'
    });
  }
  insertTaskStatus(newTaskStatus) {
    return this.httpClient.post(`${API_BASE_URL}/api/taskstatuses`, newTaskStatus, {
      responseType: 'json'
    });
  }
  updateTaskStatus(existingTaskStatus) {
    return this.httpClient.put(`${API_BASE_URL}/api/taskstatuses`, existingTaskStatus, {
      responseType: 'json'
    });
  }
  deleteTaskStatus(taskStatusID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/taskstatuses?TaskStatusID=${taskStatusID}`);
  }
}
_class = TaskStatusesService;
_class.ɵfac = function TaskStatusesService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_task_statuses_cache_service__WEBPACK_IMPORTED_MODULE_0__.TaskStatusesCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map