"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["src_app_employee_employee_module_ts"],{

/***/ 4771:
/*!**************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTaskComponent: () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks.service */ 9940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);
/* harmony import */ var _services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/task-priorities.service */ 2203);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/login.service */ 6138);
/* harmony import */ var src_app_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cache-services/tasks-cache.service */ 4813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;











function CreateTaskComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Only 100 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Only 200 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", project_r9.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", project_r9.projectName, " ");
  }
}
function CreateTaskComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select project, to which the task belongs to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", employee_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r10.userName, " ");
  }
}
function CreateTaskComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select the employee, to whom the task is assigned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taskPriority_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taskPriority_r11.taskPriorityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", taskPriority_r11.taskPriorityName, " ");
  }
}
function CreateTaskComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select the priority of the task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/employee", "tasks"];
};
class CreateTaskComponent {
  constructor(tasksService, router, projectsService, taskPrioritiesService, loginService, cacheService) {
    this.tasksService = tasksService;
    this.router = router;
    this.projectsService = projectsService;
    this.taskPrioritiesService = taskPrioritiesService;
    this.loginService = loginService;
    this.cacheService = cacheService;
  }
  ngOnInit() {
    this.newTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      taskID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
      taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]),
      projectID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      taskPriorityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    this.projects = this.projectsService.getProjects();
    this.employees = this.loginService.getEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
  }
  onCreateTaskClick() {
    this.newTaskForm['submitted'] = true;
    if (this.newTaskForm.valid) {
      this.tasksService.insertTask(this.newTaskForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
        next: () => {
          this.cacheService.clear();
          this.router.navigate(['/employee', 'tasks']);
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      console.log(this.newTaskForm.errors);
    }
  }
}
_class = CreateTaskComponent;
_class.ɵfac = function CreateTaskComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_4__.TasksCacheService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-create-task"]],
  decls: 59,
  vars: 20,
  consts: [[1, "row", "mb-4"], ["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskName", 1, "text-info"], ["type", "text", "id", "taskName", "placeholder", "Task Name", "spellcheck", "false", "formControlName", "taskName", 1, "form-control", 2, "font-size", "20px", 3, "maxlength"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "spellcheck", "false", "formControlName", "description", 1, "form-control", 3, "maxlength"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control"], ["value", "null", "disabled", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control"], ["for", "taskStatus", 1, "text-info", "col-md-3", "col-form-label"], ["type", "text", "id", "taskStatus", "placeholder", "Task Status", "value", "Holding", "readonly", "readonly", 1, "form-control-plaintext"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-2", "mb-2", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
  template: function CreateTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Task Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateTaskComponent_span_8_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CreateTaskComponent_span_9_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CreateTaskComponent_span_15_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Project:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13)(21, "select", 14)(22, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CreateTaskComponent_option_24_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CreateTaskComponent_span_26_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 11)(28, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Assigned To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 13)(31, "select", 18)(32, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CreateTaskComponent_option_34_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CreateTaskComponent_span_36_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 10)(38, "div", 11)(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Priority:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 13)(42, "select", 20)(43, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CreateTaskComponent_option_45_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CreateTaskComponent_span_47_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 11)(49, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 23)(54, "div")(55, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_55_listener() {
        return ctx.onCreateTaskClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newTaskForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("taskName").invalid && (ctx.newTaskForm.get("taskName").dirty || ctx.newTaskForm.get("taskName").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("taskName").errors == null ? null : ctx.newTaskForm.get("taskName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("taskName").errors == null ? null : ctx.newTaskForm.get("taskName").errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("description").errors == null ? null : ctx.newTaskForm.get("description").errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 13, ctx.projects));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("projectID").invalid && (ctx.newTaskForm.get("projectID").dirty || ctx.newTaskForm.get("projectID").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("projectID").errors == null ? null : ctx.newTaskForm.get("projectID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 15, ctx.employees));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("assignedTo").invalid && (ctx.newTaskForm.get("assignedTo").dirty || ctx.newTaskForm.get("assignedTo").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("assignedTo").errors == null ? null : ctx.newTaskForm.get("assignedTo").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 17, ctx.taskPriorities));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("taskPriorityID").invalid && (ctx.newTaskForm.get("taskPriorityID").dirty || ctx.newTaskForm.get("taskPriorityID").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("taskPriorityID").errors == null ? null : ctx.newTaskForm.get("taskPriorityID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["select[_ngcontent-%COMP%] {\n  color: #6c757d;\n  height: calc(1.5em + 0.75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZWUvY29tcG9uZW50cy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6500:
/*!**********************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTaskComponent: () => (/* binding */ EditTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks.service */ 9940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);
/* harmony import */ var _services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/task-priorities.service */ 2203);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/login.service */ 6138);
/* harmony import */ var _cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cache-services/tasks-cache.service */ 4813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;











function EditTaskComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditTaskComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Only 100 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditTaskComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Only 200 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditTaskComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", project_r9.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", project_r9.projectName, " ");
  }
}
function EditTaskComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select project, to which the task belongs to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditTaskComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", employee_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r10.userName, " ");
  }
}
function EditTaskComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select the employee, to whom the task is assigned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditTaskComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taskPriority_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taskPriority_r11.taskPriorityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", taskPriority_r11.taskPriorityName, " ");
  }
}
function EditTaskComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select the priority of the task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/employee", "tasks"];
};
class EditTaskComponent {
  constructor(tasksService, router, projectsService, taskPrioritiesService, loginService, activatedRoute, cacheService) {
    this.tasksService = tasksService;
    this.router = router;
    this.projectsService = projectsService;
    this.taskPrioritiesService = taskPrioritiesService;
    this.loginService = loginService;
    this.activatedRoute = activatedRoute;
    this.cacheService = cacheService;
    this.task = {};
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.taskID = params['taskid'];
    });
    this.tasksService.getTaskByTaskID(this.taskID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(response => {
      this.task = response;
    });
    this.editTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      taskID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.taskID),
      taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.task.taskName, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.task.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]),
      projectID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.task.projectID, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.task.assignedTo, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      taskPriorityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.task.taskPriorityID, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
    });
    this.projects = this.projectsService.getProjects();
    this.employees = this.loginService.getEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
  }
  onEditTaskClick() {
    this.editTaskForm['submitted'] = true;
    if (this.editTaskForm.valid) {
      this.tasksService.editTask(this.editTaskForm.value).subscribe({
        next: () => {
          this.cacheService.clear();
          this.router.navigate(['/employee', 'tasks']);
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      console.log(this.editTaskForm.errors);
    }
  }
}
_class = EditTaskComponent;
_class.ɵfac = function EditTaskComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_4__.TasksCacheService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-edit-task"]],
  decls: 53,
  vars: 20,
  consts: [[1, "row", "mb-4"], ["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskName", 1, "text-info"], ["type", "text", "id", "taskName", "placeholder", "Task Name", "spellcheck", "false", "formControlName", "taskName", 1, "form-control", 2, "font-size", "20px", 3, "maxlength"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "spellcheck", "false", "formControlName", "description", 1, "form-control", 3, "maxlength"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control"], ["for", "taskStatus", 1, "text-info", "col-md-3", "col-form-label"], ["type", "text", "id", "taskStatus", "placeholder", "Task Status", "value", "Revert", "readonly", "readonly", 1, "form-control-plaintext"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-2", "mb-2", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
  template: function EditTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Task Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EditTaskComponent_span_8_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EditTaskComponent_span_9_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EditTaskComponent_span_15_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Project:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13)(21, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, EditTaskComponent_option_22_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, EditTaskComponent_span_24_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 11)(26, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Assigned To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 13)(29, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, EditTaskComponent_option_30_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EditTaskComponent_span_32_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 10)(34, "div", 11)(35, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Priority:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13)(38, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, EditTaskComponent_option_39_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, EditTaskComponent_span_41_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 11)(43, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 22)(48, "div")(49, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditTaskComponent_Template_button_click_49_listener() {
        return ctx.onEditTaskClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Edit Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editTaskForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("taskName").invalid && (ctx.editTaskForm.get("taskName").dirty || ctx.editTaskForm.get("taskName").touched || ctx.editTaskForm.submitted) && (ctx.editTaskForm.get("taskName").errors == null ? null : ctx.editTaskForm.get("taskName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("taskName").errors == null ? null : ctx.editTaskForm.get("taskName").errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("description").errors == null ? null : ctx.editTaskForm.get("description").errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 13, ctx.projects));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("projectID").invalid && (ctx.editTaskForm.get("projectID").dirty || ctx.editTaskForm.get("projectID").touched || ctx.editTaskForm.submitted) && (ctx.editTaskForm.get("projectID").errors == null ? null : ctx.editTaskForm.get("projectID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 15, ctx.employees));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("assignedTo").invalid && (ctx.editTaskForm.get("assignedTo").dirty || ctx.editTaskForm.get("assignedTo").touched || ctx.editTaskForm.submitted) && (ctx.editTaskForm.get("assignedTo").errors == null ? null : ctx.editTaskForm.get("assignedTo").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 17, ctx.taskPriorities));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editTaskForm.get("taskPriorityID").invalid && (ctx.editTaskForm.get("taskPriorityID").dirty || ctx.editTaskForm.get("taskPriorityID").touched || ctx.editTaskForm.submitted) && (ctx.editTaskForm.get("taskPriorityID").errors == null ? null : ctx.editTaskForm.get("taskPriorityID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3150:
/*!**************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks.service */ 9940);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/login.service */ 6138);
/* harmony import */ var _cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cache-services/tasks-cache.service */ 4813);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;






function TasksComponent_div_4_div_9_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const taskStatusDetail_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 5, taskStatusDetail_r9.statusUpdationDateTime, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r5.getTaskGroupTextCssClass(taskStatusDetail_r9.taskStatus.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r9.taskStatus.taskStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r9.user.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r9.description, " ");
  }
}
const _c0 = function (a2) {
  return ["/employee", "edittask", a2];
};
function TasksComponent_div_4_div_9_a_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, task_r3.taskID));
  }
}
function TasksComponent_div_4_div_9_a_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TasksComponent_div_4_div_9_a_50_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onDelete(task_r3.taskID, task_r3.taskName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a2) {
  return ["/employee", "updatetaskstatus", a2];
};
function TasksComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9)(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "table", 16)(11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Created:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Assigned to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tr")(27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Project:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 21)(33, "thead", 22)(34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, TasksComponent_div_4_div_9_tr_43_Template, 12, 8, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 25)(45, "div", 26)(46, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Change Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, TasksComponent_div_4_div_9_a_49_Template, 3, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, TasksComponent_div_4_div_9_a_50_Template, 3, 0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 31)(52, "div", 32)(53, "div", 33)(54, "div", 34)(55, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 36)(58, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Are you sure to delete this task?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 39)(63, "button", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TasksComponent_div_4_div_9_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.onConfirmDelete(ctx_r14.taskID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("#", i_r4 + 1, " \u00A0\u00A0 ", task_r3.taskName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.getTaskPriorityBadgeCssClass(task_r3.taskPriority.taskPriorityName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r3.taskPriority.taskPriorityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r3.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 15, task_r3.createdOn, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r3.assignedToUser.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", task_r3.project.projectName, " - ", task_r3.project.clientLocation.clientLocationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", task_r3.taskStatusDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c1, task_r3.taskID));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (task_r3.createdByUser == null ? null : task_r3.createdByUser.userName) == ctx_r2.loginService.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (task_r3.createdByUser == null ? null : task_r3.createdByUser.userName) == ctx_r2.loginService.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.taskName);
  }
}
function TasksComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TasksComponent_div_4_div_9_Template, 68, 20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.getTaskGroupBgCssClass(taskGroup_r1.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskGroup_r1.taskStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskGroup_r1.tasks.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", taskGroup_r1.tasks);
  }
}
const _c2 = function () {
  return ["/employee", "createtask"];
};
class TasksComponent {
  constructor(tasksService, loginService, cacheService) {
    this.tasksService = tasksService;
    this.loginService = loginService;
    this.cacheService = cacheService;
  }
  ngOnInit() {
    this.subscription = this.tasksService.getTasks().subscribe(response => {
      this.taskGroups = response;
    });
  }
  getTaskGroupBgCssClass(taskStatusName) {
    let className;
    switch (taskStatusName) {
      case 'Holding':
        className = 'bg-secondary text-white';
        break;
      case 'Prioritized':
        className = 'bg-primary text-white';
        break;
      case 'Started':
        className = 'bg-info text-white';
        break;
      case 'Finished':
        className = 'bg-success text-white';
        break;
      case 'Reverted':
        className = 'bg-danger text-white';
        break;
      default:
        className = 'bg-warning text-white';
    }
    return className;
  }
  getTaskPriorityBadgeCssClass(taskPriorityName) {
    let className;
    switch (taskPriorityName) {
      case 'Urgent':
        className = 'badge-danger';
        break;
      case 'Normal':
        className = 'badge-primary';
        break;
      case 'Below normal':
        className = 'badge-info';
        break;
      case 'Low':
        className = 'badge-secondary';
        break;
      default:
        className = 'badge-warning';
    }
    return className;
  }
  getTaskGroupTextCssClass(taskStatusName) {
    let className;
    switch (taskStatusName) {
      case 'Holding':
        className = 'text-secondary';
        break;
      case 'Prioritized':
        className = 'text-primary';
        break;
      case 'Started':
        className = 'text-info';
        break;
      case 'Finished':
        className = 'text-success';
        break;
      case 'Reverted':
        className = 'text-danger';
        break;
      default:
        className = 'text-warning';
    }
    return className;
  }
  onDelete(taskID, taskName) {
    this.taskID = taskID;
    this.taskName = taskName;
  }
  onConfirmDelete(taskID) {
    this.tasksService.deleteTask(taskID).subscribe({
      next: () => {
        this.cacheService.clear();
        this.tasksService.getTasks().subscribe(response => {
          this.taskGroups = response;
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
_class = TasksComponent;
_class.ɵfac = function TasksComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_2__.TasksCacheService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-tasks"]],
  decls: 5,
  vars: 3,
  consts: [[1, "row", "mb-4"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "row", "mt-1", "mb-2"], ["class", "col-lg-6 mb-1", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mb-1"], [1, "card", "card-primary"], [1, "card-header", 3, "ngClass"], [1, "card-title"], [1, "badge", "badge-warning", "float-right"], [1, "card-body"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "card", "mb-2"], [1, "card-header"], [1, "font-weight-bold"], [1, "badge", "float-right", "mr-1", "badge-primary", 2, "font-size", "15px", 3, "ngClass"], [1, "d-flex", "justify-content-between", "flex-wrap", "wrapword", "align-items-center", "pb-2", "mb-1", "border-bottom"], [1, "table", "table-sm", "table-borderless"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "fa", "fa-user-o"], [1, "fa", "fa-briefcase"], [1, "table", "table-sm", "table-bordered"], [1, "table-light"], [1, "hide-sm"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "fa", "fa-pencil"], ["class", "btn btn-sm btn-outline-secondary", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm btn-outline-secondary", "data-toggle", "modal", "data-target", "#deleteTaskModal", 3, "click", 4, "ngIf"], ["id", "deleteTaskModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["taskModalDismiss", ""], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "text-primary", 3, "ngClass"], [1, "wrapword"], [1, "fa", "fa-pencil-square-o"], ["data-toggle", "modal", "data-target", "#deleteTaskModal", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-trash-o"]],
  template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TasksComponent_div_4_Template, 10, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.taskGroups);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".wrapword[_ngcontent-%COMP%] {\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.clear-whitespace[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbG95ZWUvY29tcG9uZW50cy90YXNrcy90YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHdvcmQge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4uY2xlYXItd2hpdGVzcGFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4937:
/*!****************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTaskStatusComponent: () => (/* binding */ UpdateTaskStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/tasks.service */ 9940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_task_statuses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/task-statuses.service */ 8260);
/* harmony import */ var _cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cache-services/tasks-cache.service */ 4813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;









function UpdateTaskStatusComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Only 200 characters allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UpdateTaskStatusComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taskStatus_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", taskStatus_r3.taskStatusName == "Holding" || taskStatus_r3.taskStatusName == "Reverted")("value", taskStatus_r3.taskStatusName != "Holding" && taskStatus_r3.taskStatusName != "Reverted" ? taskStatus_r3.taskStatusID : "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", taskStatus_r3.taskStatusName, " ");
  }
}
function UpdateTaskStatusComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select current task status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/employee", "tasks"];
};
class UpdateTaskStatusComponent {
  constructor(tasksService, router, taskStatusesService, activatedRoute, cacheService) {
    this.tasksService = tasksService;
    this.router = router;
    this.taskStatusesService = taskStatusesService;
    this.activatedRoute = activatedRoute;
    this.cacheService = cacheService;
    this.currentTask = {};
    this.currentTaskStatusDetail = {};
  }
  ngOnInit() {
    this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(params => {
      this.taskID = params['taskid'];
    });
    this.editTaskStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      taskStatusDetailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
      taskID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
      taskStatusID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(200)])
    });
    this.taskStatuses = this.taskStatusesService.getTaskStatuses();
    this.tasksService.getTaskByTaskID(this.taskID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(task => {
      this.currentTask = task;
      this.currentTaskStatusDetail.taskID = this.taskID;
      this.currentTaskStatusDetail.description = '';
      this.currentTaskStatusDetail.taskStatusID = 0;
      this.currentTaskStatusDetail.taskStatusDetailID = 0;
      this.editTaskStatusForm.patchValue(this.currentTaskStatusDetail);
    });
  }
  onUpdateTaskStatusClick() {
    this.editTaskStatusForm['submitted'] = true;
    if (this.editTaskStatusForm.valid) {
      this.tasksService.updateTaskStatus(this.editTaskStatusForm.value).subscribe({
        next: () => {
          this.cacheService.clear();
          this.router.navigate(['/employee', 'tasks']);
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      console.log(this.editTaskStatusForm.errors);
    }
  }
}
_class = UpdateTaskStatusComponent;
_class.ɵfac = function UpdateTaskStatusComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_1__.TaskStatusesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_2__.TasksCacheService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-update-task-status"]],
  decls: 45,
  vars: 18,
  consts: [[1, "row", "mb-4"], ["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12", "mb-3"], [1, "d-flex", "justify-content-sm-around", "flex-wrap"], [1, "mr-3"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "fa", "fa-calendar-check-o"], [1, "col-lg-12"], [1, "form-group"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "spellcheck", "false", "formControlName", "description", 1, "form-control", 3, "maxlength"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "taskStatusID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "taskStatusID", "formControlName", "taskStatusID", 1, "form-control"], ["value", "null", "hidden", "", "disabled", "", "selected", ""], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-2", 3, "routerLink"], [1, "text-danger"], [3, "hidden", "value"]],
  template: function UpdateTaskStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Created by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Last Updated on:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, UpdateTaskStatusComponent_span_26_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14)(28, "div", 15)(29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17)(32, "select", 18)(33, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, UpdateTaskStatusComponent_option_35_Template, 2, 3, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, UpdateTaskStatusComponent_span_37_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 21)(39, "div")(40, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateTaskStatusComponent_Template_button_click_40_listener() {
        return ctx.onUpdateTaskStatusClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Update Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div")(43, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.editTaskStatusForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.currentTask.createdByUser == null ? null : ctx.currentTask.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 9, ctx.currentTask.createdOn, "short"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 12, ctx.currentTask.lastUpdatedOn, "short"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editTaskStatusForm.get("description").errors == null ? null : ctx.editTaskStatusForm.get("description").errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 15, ctx.taskStatuses));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editTaskStatusForm.get("taskStatusID").invalid && (ctx.editTaskStatusForm.get("taskStatusID").dirty || ctx.editTaskStatusForm.get("taskStatusID").touched || ctx.editTaskStatusForm.submitted) && (ctx.editTaskStatusForm.get("taskStatusID").errors == null ? null : ctx.editTaskStatusForm.get("taskStatusID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8266:
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeRoutingModule: () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../guards/can-activate.guard */ 8919);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tasks/tasks.component */ 3150);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create-task/create-task.component */ 4771);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/edit-task/edit-task.component */ 6500);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/update-task-status/update-task-status.component */ 4937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








const routes = [{
  path: '',
  canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__.canActivateGuard],
  data: {
    role: 'Employee'
  },
  children: [{
    path: 'tasks',
    component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__.TasksComponent
  }, {
    path: 'createtask',
    component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__.CreateTaskComponent
  }, {
    path: 'edittask/:taskid',
    component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_3__.EditTaskComponent
  }, {
    path: 'updatetaskstatus/:taskid',
    component: _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_4__.UpdateTaskStatusComponent
  }]
}];
class EmployeeRoutingModule {}
_class = EmployeeRoutingModule;
_class.ɵfac = function EmployeeRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4266:
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/tasks.component */ 3150);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/create-task/create-task.component */ 4771);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ 6500);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/update-task-status/update-task-status.component */ 4937);
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ 8266);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class EmployeeModule {}
_class = EmployeeModule;
_class.ɵfac = function EmployeeModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmployeeModule, {
    declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent, _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__.CreateTaskComponent, _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__.EditTaskComponent, _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_3__.UpdateTaskStatusComponent],
    imports: [_employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 9940:
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksService: () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache-services/tasks-cache.service */ 4813);
var _class;




const API_BASE_URL = 'https://localhost:7036';
class TasksService {
  constructor(httpClient, cacheService) {
    this.httpClient = httpClient;
    this.cacheService = cacheService;
  }
  getTasks() {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/tasks`, {
        responseType: 'json'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cacheService.set('cachedData', data);
      }));
    }
  }
  getTaskByTaskID(taskID) {
    const cachedData = this.cacheService.get('cachedData');
    if (cachedData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cachedData.flatMap(el => el.tasks).filter(el => el.taskID == taskID)[0]);
    } else {
      return this.httpClient.get(`${API_BASE_URL}/api/tasks/searchbytaskid/${taskID}`, {
        responseType: 'json'
      });
    }
  }
  insertTask(newTask) {
    return this.httpClient.post(`${API_BASE_URL}/api/createtask`, newTask, {
      responseType: 'json'
    });
  }
  updateTaskStatus(taskStatusDetail) {
    return this.httpClient.put(`${API_BASE_URL}/api/updatetaskstatus`, taskStatusDetail, {
      responseType: 'json'
    });
  }
  editTask(editTask) {
    return this.httpClient.put(`${API_BASE_URL}/api/edittask`, editTask, {
      responseType: 'json'
    });
  }
  deleteTask(taskID) {
    return this.httpClient.delete(`${API_BASE_URL}/api/deletetask/${taskID}`);
  }
}
_class = TasksService;
_class.ɵfac = function TasksService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cache_services_tasks_cache_service__WEBPACK_IMPORTED_MODULE_0__.TasksCacheService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_employee_employee_module_ts.js.map