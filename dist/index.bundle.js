/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/newTask.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/newTask.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.newTask_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  z-index: 1;
  width: 400px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: var(--main-bg);

  display: flex;
  flex-direction: column;

  font-family: "Times New Roman", Times, serif;
}

.newPage-body {
  padding: 1rem;
}

.newPage-header {
  margin: 0;
  padding: 10px;
  border-bottom: 2px solid grey;
  text-align: left;
}

.newPage-title {
  font-weight: bolder;
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
}

.form-group {
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: start;
}

.form-control {
  width: calc(100% - 10px);
  padding: 3px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  border: 2px solid grey;
  border-radius: 0.25rem;
}

.form-control:focus {
  border-color: aqua;
  box-shadow: 2px solid aqua;
}

.custom-select {
  width: 100%;
  padding: 3px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  border: 2px solid grey;
  border-radius: 0.25rem;
  background-color: var(--main-bg);
}

.NewPageform_foot {
  display: flex;
  justify-content: end;
  gap: 10px;
  margin: 10px;
}

#AddNewTask {
  background-color: red;
  color: var(--header-font-color);
  padding: 2px;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  outline: none;
  border: 2px solid grey;
  cursor: pointer;
}

#CloseNewTaskWindow {
  color: var(--main-font-color);
  padding: 2px;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  outline: none;
  border: 2px solid grey;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/newTask.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;;EAEzC,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gCAAgC;;EAEhC,aAAa;EACb,sBAAsB;;EAEtB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;EAC/B,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB","sourcesContent":[".newTask_container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n\n  z-index: 1;\n  width: 400px;\n  padding: 10px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: var(--main-bg);\n\n  display: flex;\n  flex-direction: column;\n\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.newPage-body {\n  padding: 1rem;\n}\n\n.newPage-header {\n  margin: 0;\n  padding: 10px;\n  border-bottom: 2px solid grey;\n  text-align: left;\n}\n\n.newPage-title {\n  font-weight: bolder;\n  font-size: 1.25rem;\n  margin: 0;\n  padding: 0;\n}\n\n.form-group {\n  display: flex;\n  margin-bottom: 1rem;\n  flex-direction: column;\n  align-items: start;\n}\n\n.form-control {\n  width: calc(100% - 10px);\n  padding: 3px;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  outline: none;\n  border: 2px solid grey;\n  border-radius: 0.25rem;\n}\n\n.form-control:focus {\n  border-color: aqua;\n  box-shadow: 2px solid aqua;\n}\n\n.custom-select {\n  width: 100%;\n  padding: 3px;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  outline: none;\n  border: 2px solid grey;\n  border-radius: 0.25rem;\n  background-color: var(--main-bg);\n}\n\n.NewPageform_foot {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n  margin: 10px;\n}\n\n#AddNewTask {\n  background-color: red;\n  color: var(--header-font-color);\n  padding: 2px;\n  height: 40px;\n  width: 80px;\n  border-radius: 5px;\n  outline: none;\n  border: 2px solid grey;\n  cursor: pointer;\n}\n\n#CloseNewTaskWindow {\n  color: var(--main-font-color);\n  padding: 2px;\n  height: 40px;\n  width: 80px;\n  border-radius: 5px;\n  outline: none;\n  border: 2px solid grey;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/outline.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/outline.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.root {
  --header-bg: rgb(39, 39, 39);
  --header-font-color: white;

  --main-bg: white;

  --side-bar-bg: rgb(185, 185, 185);

  --modal-bg: grey;
}

body {
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.header {
  height: 50px;
  padding: 20px;
  margin: 0;
  background-color: var(--header-bg);
}

.main {
  flex: 1;
  margin: 0;
  padding: 0;
  width: 100%;

  background-color: var(--main-bg);
  display: flex;
  flex-direction: row;
}

.foot {
  height: 40px;

  background-color: var(--header-bg);
}

.modal {
  position: fixed;
  background-color: var(--modal-bg);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.fade {
  opacity: 0;
  z-index: -1;
}

.show {
  opacity: 0.45;
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/styles/outline.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,0BAA0B;;EAE1B,gBAAgB;;EAEhB,iCAAiC;;EAEjC,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kCAAkC;AACpC;;AAEA;EACE,OAAO;EACP,SAAS;EACT,UAAU;EACV,WAAW;;EAEX,gCAAgC;EAChC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;;EAEZ,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,iCAAiC;EACjC,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;AACT;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,UAAU;AACZ","sourcesContent":[".root {\n  --header-bg: rgb(39, 39, 39);\n  --header-font-color: white;\n\n  --main-bg: white;\n\n  --side-bar-bg: rgb(185, 185, 185);\n\n  --modal-bg: grey;\n}\n\nbody {\n  margin: 0;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n.header {\n  height: 50px;\n  padding: 20px;\n  margin: 0;\n  background-color: var(--header-bg);\n}\n\n.main {\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n\n  background-color: var(--main-bg);\n  display: flex;\n  flex-direction: row;\n}\n\n.foot {\n  height: 40px;\n\n  background-color: var(--header-bg);\n}\n\n.modal {\n  position: fixed;\n  background-color: var(--modal-bg);\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.fade {\n  opacity: 0;\n  z-index: -1;\n}\n\n.show {\n  opacity: 0.45;\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sidebar {
  flex: 0 0 auto;
  width: 250px;
  background-color: var(--side-bar-bg);

  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 0px 20px 20px;
}

.sidebar_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  left: 30px;
  gap: 20px;
  padding: 20px;
  border-radius: 10px 0 0 10px;

  font-family: "Times New Roman", Times, serif;
  font-size: 1.6rem;
}

.sidebar_title:hover {
  background-color: var(--main-bg);
}

.sidebar-active {
  background-color: var(--main-bg);
}
`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,YAAY;EACZ,oCAAoC;;EAEpC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,4BAA4B;;EAE5B,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":[".sidebar {\n  flex: 0 0 auto;\n  width: 250px;\n  background-color: var(--side-bar-bg);\n\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px 0px 20px 20px;\n}\n\n.sidebar_title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n  left: 30px;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 10px 0 0 10px;\n\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1.6rem;\n}\n\n.sidebar_title:hover {\n  background-color: var(--main-bg);\n}\n\n.sidebar-active {\n  background-color: var(--main-bg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/html/new_task_page.html":
/*!*************************************!*\
  !*** ./src/html/new_task_page.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"newPage-header\">\n  <h5 class=\"newPage-title\">New Task</h5>\n</div>\n<div class=\"newPage-body\">\n  <form action=\"\" id=\"task-form\">\n    <div class=\"form-group\">\n      <label for=\"taskTitle\">Title:</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"taskTitle\"\n        maxlength=\"30\"\n        required\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"taskDesc\">Description:</label>\n      <textarea\n        type=\"text\"\n        class=\"form-control\"\n        id=\"taskDesc\"\n        rows=\"4\"\n        required\n      ></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"taskDueDate\">Due Date:</label>\n      <input\n        type=\"datetime-local\"\n        class=\"form-control\"\n        id=\"taskDueDate\"\n        max=\"2099-01-01T00:00\"\n        required\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"taskPriority\">Priority:</label>\n      <select id=\"taskPriority\" class=\"custom-select\" required>\n        <option value=\"Low\">Low</option>\n        <option value=\"Medium\">Medium</option>\n        <option value=\"High\">High</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"taskProject\">Project:</label>\n      <select id=\"taskProject\" class=\"custom-select\" required></select>\n    </div>\n    <div class=\"NewPageform_foot\">\n      <button id=\"CloseNewTaskWindow\">Close</button>\n      <button type=\"submit\" id=\"AddNewTask\">Add Task</button>\n    </div>\n  </form>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/sidebar.html":
/*!*******************************!*\
  !*** ./src/html/sidebar.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"sidebar_title\" id=\"inbox\">\n  <i class=\"fa-solid fa-inbox fa-lg\"></i>\n  <div>Inbox</div>\n</div>\n<div class=\"sidebar_title\" id=\"today\">\n  <i class=\"fa-solid fa-calendar-week fa-lg\"></i>\n  <div>Today</div>\n</div>\n<div class=\"sidebar_title\" id=\"projects\">\n  <i class=\"fa-solid fa-bars-progress fa-lg\"></i>\n  <div>Projects</div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/newTask.css":
/*!********************************!*\
  !*** ./src/styles/newTask.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_newTask_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./newTask.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/newTask.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_newTask_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_newTask_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_newTask_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_newTask_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/outline.css":
/*!********************************!*\
  !*** ./src/styles/outline.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_outline_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./outline.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/outline.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_outline_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_outline_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_outline_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_outline_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/sidebar.css":
/*!********************************!*\
  !*** ./src/styles/sidebar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/closeNewTaskPage.js":
/*!*******************************************!*\
  !*** ./src/functions/closeNewTaskPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const close_newTask_page = () => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.remove("show");

  const newTask_page = document.querySelector("#newPage");
  content.removeChild(newTask_page);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (close_newTask_page);


/***/ }),

/***/ "./src/functions/loadNewTaskPage.js":
/*!******************************************!*\
  !*** ./src/functions/loadNewTaskPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/createNewTask */ "./src/pages/createNewTask.js");


const load_newTask_page = () => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.add("show");

  const page = (0,_pages_createNewTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
  content.appendChild(page);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_newTask_page);


/***/ }),

/***/ "./src/functions/loadSideBar.js":
/*!**************************************!*\
  !*** ./src/functions/loadSideBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/sidebar */ "./src/pages/sidebar.js");


const loadSideBar = () => {
  const main_container = document.querySelector(".main");
  let sidebar_container = (0,_pages_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  main_container.appendChild(sidebar_container);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSideBar);


/***/ }),

/***/ "./src/functions/outline.js":
/*!**********************************!*\
  !*** ./src/functions/outline.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_outline_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/outline.css */ "./src/styles/outline.css");


const load_outline = () => {
  const content = document.querySelector("#content");
  content.classList.add("content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  const foot = document.createElement("div");
  foot.classList.add("foot");
  content.appendChild(foot);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = "modalForAll";
  modal.classList.add("fade");
  content.appendChild(modal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_outline);


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing */ "./src/modules/thing.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ "./src/modules/todolist.js");



class StorageAPI {
  static get_new_Tid() {
    if (!localStorage.getItem("tid")) {
      StorageAPI.save_Tid(-1);
    }
    return parseInt(localStorage.getItem("tid"), 10) + 1;
  }

  //save the tid, tid: num
  static save_Tid(tid) {
    localStorage.setItem("tid", tid);
  }

  //refresh latest tid number
  static refresh_Tid(tid) {
    this.get_new_Tid();
    let latest_tid = parseInt(localStorage.getItem("tid"), 10);
    if (latest_tid < tid) StorageAPI.save_Tid(tid);
  }

  static get_ProjectsList() {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", "[]");
    }
    return JSON.parse(localStorage.getItem("projects"));
  }

  //add a new project into project list;
  static ProjectsList_push(project) {
    let projects_list = StorageAPI.get_ProjectsList();
    if (!projects_list.includes(project)) {
      projects_list.push(project);
      localStorage.setItem("projects", JSON.stringify(projects_list));
    }
  }

  static ProjectList_rm(project) {
    let projects_list = StorageAPI.get_ProjectsList();
    if (projects_list.includes(project)) {
      projects_list = projects_list.filter((item) => item != project);
      localStorage.setItem("projects", JSON.stringify(projects_list));
    }
  }

  //get a projecthinglist which is a list(instead of string)
  static get_projectThingList(project) {
    if (!localStorage.getItem(project)) {
      localStorage.setItem(project, "[]");
    }
    return JSON.parse(localStorage.getItem(project));
  }

  //add a thing's id into projectThingList
  static ProjectThingList_push(thing) {
    let project_thing_list = StorageAPI.get_projectThingList(thing.project);
    if (!project_thing_list.includes(thing.tid)) {
      project_thing_list.push(thing.tid);
      localStorage.setItem(thing.project, JSON.stringify(project_thing_list));
    }
  }

  //remove a thing from a projectThingList
  static ProjectThingList_rm(thing) {
    let project_thing_list = StorageAPI.get_projectThingList(thing.project);
    if (project_thing_list.includes(thing.tid)) {
      project_thing_list = project_thing_list.filter(
        (item) => item != thing.tid
      );
      localStorage.setItem(thing.project, JSON.stringify(project_thing_list));
    }
  }

  //thing: Thing Class
  static saveThing(thing) {
    StorageAPI.refresh_Tid(thing.tid);
    StorageAPI.ProjectsList_push(thing.project);
    StorageAPI.ProjectThingList_push(thing);
    localStorage.setItem(thing.tid.toString(), JSON.stringify(thing));
  }

  static get_idlist_byProject(project) {
    let id_list;
    if (localStorage.getItem(project))
      id_list = JSON.parse(localStorage.getItem(project));
    else id_list = [];

    return id_list;
  }

  static get_thing_byId(id) {
    let thing = Object.assign(
      new _thing__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem(id))
    );

    return thing;
  }

  static retrieve_todolist_byProject(project) {
    let todolist = new _todolist__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let id_list = StorageAPI.get_idlist_byProject(project);

    for (let id of id_list) {
      let thing = StorageAPI.get_thing_byId(id);
      todolist.add(thing);
    }

    return todolist;
  }

  static retrieve_todolist_byDate(date) {
    let todolist = new _todolist__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let project_list = StorageAPI.get_ProjectsList();

    for (let project of project_list) {
      let id_list = StorageAPI.get_idlist_byProject(project);

      for (let id of id_list) {
        let thing = StorageAPI.get_thing_byId(id);
        //console.log(thing.dueDate);
        //console.log(date);
        if (thing.dueDate.getTime() == date.getTime()) todolist.add(thing);
      }
    }

    return todolist;
  }

  //remove a thing from storage
  static remove_thing(thing) {
    StorageAPI.ProjectThingList_rm(thing);
    localStorage.removeItem(thing.tid);
  }

  //remove a project from storage
  static remove_project(project) {
    //step1: clear the things in that project
    let todolist = StorageAPI.retrieve_todolist_byProject(project).list;
    for (let thing of todolist) localStorage.removeItem(thing.tid);
    //step2: clear the project thing list
    localStorage.removeItem(project);
    //step3: remove the project from projectlist
    StorageAPI.ProjectList_rm(project);
  }

  static update_thing(thing) {
    //revise infor

    //save it
    StorageAPI.saveThing(thing);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageAPI);


/***/ }),

/***/ "./src/modules/thing.js":
/*!******************************!*\
  !*** ./src/modules/thing.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


class Thing {
  constructor(project, title, desc, dueDate, pp) {
    //console.log(StorageAPI.get_new_Tid());
    this.tid = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].get_new_Tid();
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.pp = pp;
    this.done = false;
  }

  get tid() {
    return this._tid;
  }

  set tid(id) {
    this._tid = id;
  }

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get desc() {
    return this._desc;
  }
  set desc(value) {
    this._desc = value;
  }

  get dueDate() {
    if (!(this._dueDate instanceof Date))
      this._dueDate = new Date(this._dueDate);
    return this._dueDate;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  get pp() {
    return this._pp;
  }
  set pp(value) {
    this._pp = value;
  }

  get done() {
    return this._done;
  }
  set done(value) {
    this._done = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thing);


/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");


class TodoList {
  constructor() {
    this.list = [];
  }

  //todo list is a queue
  add(thing) {
    this.list.push(thing);
  }

  //sort the list
  sort() {
    this.list.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.compareAsc)(a.dueDate, b.dueDate));
  }

  get list() {
    return this._list;
  }

  set list(l) {
    this._list = l;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/pages/createNewTask.js":
/*!************************************!*\
  !*** ./src/pages/createNewTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_newTask_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/newTask.css */ "./src/styles/newTask.css");
/* harmony import */ var _html_new_task_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/new_task_page.html */ "./src/html/new_task_page.html");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _functions_closeNewTaskPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/closeNewTaskPage */ "./src/functions/closeNewTaskPage.js");
/* harmony import */ var _modules_thing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/thing */ "./src/modules/thing.js");






const newTask_page = () => {
  const container = document.createElement("div");
  container.classList.add("newTask_container");
  container.id = "newPage";

  container.innerHTML += _html_new_task_page_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  let project_list = _modules_storage__WEBPACK_IMPORTED_MODULE_2__["default"].get_ProjectsList();

  const project_select = container.querySelector("#taskProject");
  for (let project of project_list) {
    const project_option = document.createElement("option");
    project_option.value = project;
    project_option.innerText = project;
    project_select.append(project_option);
  }

  const button_close = container.querySelector("#CloseNewTaskWindow");
  button_close.addEventListener("click", _functions_closeNewTaskPage__WEBPACK_IMPORTED_MODULE_3__["default"]);

  const newTaskPage_form = container.querySelector("#task-form");
  newTaskPage_form.onsubmit = () => {
    let thing = new _modules_thing__WEBPACK_IMPORTED_MODULE_4__["default"](
      document.getElementById("taskProject").value,
      document.getElementById("taskTitle").value,
      document.getElementById("taskDesc").value,
      document.getElementById("taskDueDate").value,
      document.getElementById("taskPriority").value
    );
    _modules_storage__WEBPACK_IMPORTED_MODULE_2__["default"].saveThing(thing);
    (0,_functions_closeNewTaskPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
  };

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask_page);


/***/ }),

/***/ "./src/pages/sidebar.js":
/*!******************************!*\
  !*** ./src/pages/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sidebar.css */ "./src/styles/sidebar.css");
/* harmony import */ var _html_sidebar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/sidebar.html */ "./src/html/sidebar.html");



const remove_active = () => {
  let parentElement = document.querySelector(".sidebar");
  parentElement.querySelectorAll("*").forEach((child) => {
    child.classList.remove("sidebar-active");
  });
};

const sidebar = () => {
  const container = document.createElement("div");
  container.classList.add("sidebar");

  container.innerHTML = _html_sidebar_html__WEBPACK_IMPORTED_MODULE_1__["default"];

  const inbox = container.querySelector("#inbox");
  inbox.addEventListener("click", () => {
    remove_active();
    inbox.classList.add("sidebar-active");
  });

  const today = container.querySelector("#today");
  today.addEventListener("click", () => {
    remove_active();
    today.classList.add("sidebar-active");
  });

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);


/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_outline_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/outline.css */ "./src/styles/outline.css");
/* harmony import */ var _src_modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/thing */ "./src/modules/thing.js");
/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todolist */ "./src/modules/todolist.js");
/* harmony import */ var _functions_outline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/outline.js */ "./src/functions/outline.js");
/* harmony import */ var _functions_loadNewTaskPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/loadNewTaskPage.js */ "./src/functions/loadNewTaskPage.js");
/* harmony import */ var _functions_loadSideBar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/loadSideBar.js */ "./src/functions/loadSideBar.js");








//load outline
(0,_functions_outline_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
//load_newTask_page();
(0,_functions_loadSideBar_js__WEBPACK_IMPORTED_MODULE_6__["default"])();

//test block
let t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"](
  "ProjectA",
  "title 1",
  "For test",
  new Date(2024, 2, 3),
  "High"
);
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"]("ProjectA", "title 2", "For test", new Date(2024, 0, 31), "High");
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

let tm = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"](
  "ProjectA",
  "title 3",
  "For test",
  new Date(2024, 2, 28),
  "High"
);
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(tm);

t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"](
  "ProjectB",
  "title 21",
  "For test",
  new Date(2024, 1, 31),
  "High"
);
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"](
  "ProjectB",
  "title 11111",
  "For test",
  new Date(2024, 2, 3),
  "High"
);
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"](
  "ProjectB",
  "title 211",
  "For test",
  new Date(2023, 1, 31),
  "High"
);
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

t = new _src_modules_thing__WEBPACK_IMPORTED_MODULE_2__["default"]("ProjectC", "title 1", "For test", new Date(2024, 10, 31), "Mid");
_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveThing(t);

let l = _src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve_todolist_byProject("ProjectA");
console.log(l.list);

l = _src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve_todolist_byDate(new Date(2024, 2, 3));
console.log(l.list);

_src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].remove_project("ProjectA");
l = _src_modules_storage__WEBPACK_IMPORTED_MODULE_1__["default"].retrieve_todolist_byProject("ProjectA");
console.log(l.list);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekR0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ2tCO0FBQ1A7QUFDQztBQUNRO0FBQ2E7QUFDVjs7QUFFckQ7QUFDQSxpRUFBWTtBQUNaO0FBQ0EscUVBQVc7O0FBRVg7QUFDQSxZQUFZLDBEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFVOztBQUVWLFFBQVEsMERBQUs7QUFDYiw0REFBVTs7QUFFVixhQUFhLDBEQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFVOztBQUVWLFFBQVEsMERBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBVTs7QUFFVixRQUFRLDBEQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQVU7O0FBRVYsUUFBUSwwREFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFVOztBQUVWLFFBQVEsMERBQUs7QUFDYiw0REFBVTs7QUFFVixRQUFRLDREQUFVO0FBQ2xCOztBQUVBLElBQUksNERBQVU7QUFDZDs7QUFFQSw0REFBVTtBQUNWLElBQUksNERBQVU7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvbmV3VGFzay5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy9vdXRsaW5lLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2h0bWwvbmV3X3Rhc2tfcGFnZS5odG1sIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9odG1sL3NpZGViYXIuaHRtbCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzL25ld1Rhc2suY3NzPzhlZjkiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy9vdXRsaW5lLmNzcz83MGU5Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3M/NDgxNiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9mdW5jdGlvbnMvY2xvc2VOZXdUYXNrUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZnVuY3Rpb25zL2xvYWROZXdUYXNrUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZnVuY3Rpb25zL2xvYWRTaWRlQmFyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9mdW5jdGlvbnMvb3V0bGluZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3RoaW5nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wYWdlcy9jcmVhdGVOZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb21wYXJlQXNjLm1qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uZXdUYXNrX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG5cbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5ld1BhZ2UtYm9keSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5uZXdQYWdlLWhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uZXdQYWdlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xuICBib3gtc2hhZG93OiAycHggc29saWQgYXF1YTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XG59XG5cbi5OZXdQYWdlZm9ybV9mb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jQWRkTmV3VGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI0Nsb3NlTmV3VGFza1dpbmRvdyB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiAycHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25ld1Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QseUNBQXlDOztFQUV6QyxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdDQUFnQzs7RUFFaEMsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdUYXNrX2NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcblxcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4ubmV3UGFnZS1ib2R5IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5uZXdQYWdlLWhlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubmV3UGFnZS10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xcbiAgYm94LXNoYWRvdzogMnB4IHNvbGlkIGFxdWE7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uTmV3UGFnZWZvcm1fZm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNBZGROZXdUYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxuICBwYWRkaW5nOiAycHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jQ2xvc2VOZXdUYXNrV2luZG93IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucm9vdCB7XG4gIC0taGVhZGVyLWJnOiByZ2IoMzksIDM5LCAzOSk7XG4gIC0taGVhZGVyLWZvbnQtY29sb3I6IHdoaXRlO1xuXG4gIC0tbWFpbi1iZzogd2hpdGU7XG5cbiAgLS1zaWRlLWJhci1iZzogcmdiKDE4NSwgMTg1LCAxODUpO1xuXG4gIC0tbW9kYWwtYmc6IGdyZXk7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xufVxuXG4ubWFpbiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mb290IHtcbiAgaGVpZ2h0OiA0MHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5mYWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zaG93IHtcbiAgb3BhY2l0eTogMC40NTtcbiAgei1pbmRleDogMTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9vdXRsaW5lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7O0VBRTFCLGdCQUFnQjs7RUFFaEIsaUNBQWlDOztFQUVqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXOztFQUVYLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gIC0taGVhZGVyLWJnOiByZ2IoMzksIDM5LCAzOSk7XFxuICAtLWhlYWRlci1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXG4gIC0tbWFpbi1iZzogd2hpdGU7XFxuXFxuICAtLXNpZGUtYmFyLWJnOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxuXFxuICAtLW1vZGFsLWJnOiBncmV5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mb290IHtcXG4gIGhlaWdodDogNDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1iZyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMC40NTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNpZGViYXIge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhci1iZyk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDIwcHg7XG59XG5cbi5zaWRlYmFyX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBsZWZ0OiAzMHB4O1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG5cbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5zaWRlYmFyX3RpdGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBb0M7O0VBRXBDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYiw0QkFBNEI7O0VBRTVCLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXIge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhci1iZyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMjBweDtcXG59XFxuXFxuLnNpZGViYXJfdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgbGVmdDogMzBweDtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnNpZGViYXJfdGl0bGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5zaWRlYmFyLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJuZXdQYWdlLWhlYWRlclxcXCI+XFxuICA8aDUgY2xhc3M9XFxcIm5ld1BhZ2UtdGl0bGVcXFwiPk5ldyBUYXNrPC9oNT5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJuZXdQYWdlLWJvZHlcXFwiPlxcbiAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGlkPVxcXCJ0YXNrLWZvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJ0YXNrVGl0bGVcXFwiPlRpdGxlOjwvbGFiZWw+XFxuICAgICAgPGlucHV0XFxuICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgIGlkPVxcXCJ0YXNrVGl0bGVcXFwiXFxuICAgICAgICBtYXhsZW5ndGg9XFxcIjMwXFxcIlxcbiAgICAgICAgcmVxdWlyZWRcXG4gICAgICAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwidGFza0Rlc2NcXFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XFxuICAgICAgPHRleHRhcmVhXFxuICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgIGlkPVxcXCJ0YXNrRGVzY1xcXCJcXG4gICAgICAgIHJvd3M9XFxcIjRcXFwiXFxuICAgICAgICByZXF1aXJlZFxcbiAgICAgID48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwidGFza0R1ZURhdGVcXFwiPkR1ZSBEYXRlOjwvbGFiZWw+XFxuICAgICAgPGlucHV0XFxuICAgICAgICB0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICBpZD1cXFwidGFza0R1ZURhdGVcXFwiXFxuICAgICAgICBtYXg9XFxcIjIwOTktMDEtMDFUMDA6MDBcXFwiXFxuICAgICAgICByZXF1aXJlZFxcbiAgICAgIC8+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJ0YXNrUHJpb3JpdHlcXFwiPlByaW9yaXR5OjwvbGFiZWw+XFxuICAgICAgPHNlbGVjdCBpZD1cXFwidGFza1ByaW9yaXR5XFxcIiBjbGFzcz1cXFwiY3VzdG9tLXNlbGVjdFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJMb3dcXFwiPkxvdzwvb3B0aW9uPlxcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiTWVkaXVtXFxcIj5NZWRpdW08L29wdGlvbj5cXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkhpZ2hcXFwiPkhpZ2g8L29wdGlvbj5cXG4gICAgICA8L3NlbGVjdD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInRhc2tQcm9qZWN0XFxcIj5Qcm9qZWN0OjwvbGFiZWw+XFxuICAgICAgPHNlbGVjdCBpZD1cXFwidGFza1Byb2plY3RcXFwiIGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIiByZXF1aXJlZD48L3NlbGVjdD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIk5ld1BhZ2Vmb3JtX2Zvb3RcXFwiPlxcbiAgICAgIDxidXR0b24gaWQ9XFxcIkNsb3NlTmV3VGFza1dpbmRvd1xcXCI+Q2xvc2U8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgaWQ9XFxcIkFkZE5ld1Rhc2tcXFwiPkFkZCBUYXNrPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyX3RpdGxlXFxcIiBpZD1cXFwiaW5ib3hcXFwiPlxcbiAgPGkgY2xhc3M9XFxcImZhLXNvbGlkIGZhLWluYm94IGZhLWxnXFxcIj48L2k+XFxuICA8ZGl2PkluYm94PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwic2lkZWJhcl90aXRsZVxcXCIgaWQ9XFxcInRvZGF5XFxcIj5cXG4gIDxpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1jYWxlbmRhci13ZWVrIGZhLWxnXFxcIj48L2k+XFxuICA8ZGl2PlRvZGF5PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwic2lkZWJhcl90aXRsZVxcXCIgaWQ9XFxcInByb2plY3RzXFxcIj5cXG4gIDxpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1iYXJzLXByb2dyZXNzIGZhLWxnXFxcIj48L2k+XFxuICA8ZGl2PlByb2plY3RzPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdUYXNrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3VGFzay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3V0bGluZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL291dGxpbmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2xvc2VfbmV3VGFza19wYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxGb3JBbGxcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gIGNvbnN0IG5ld1Rhc2tfcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UGFnZVwiKTtcbiAgY29udGVudC5yZW1vdmVDaGlsZChuZXdUYXNrX3BhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VfbmV3VGFza19wYWdlO1xuIiwiaW1wb3J0IG5ld1Rhc2tfcGFnZSBmcm9tIFwiLi4vcGFnZXMvY3JlYXRlTmV3VGFza1wiO1xuXG5jb25zdCBsb2FkX25ld1Rhc2tfcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsRm9yQWxsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICBjb25zdCBwYWdlID0gbmV3VGFza19wYWdlKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkX25ld1Rhc2tfcGFnZTtcbiIsImltcG9ydCBzaWRlYmFyIGZyb20gXCIuLi9wYWdlcy9zaWRlYmFyXCI7XG5cbmNvbnN0IGxvYWRTaWRlQmFyID0gKCkgPT4ge1xuICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgbGV0IHNpZGViYXJfY29udGFpbmVyID0gc2lkZWJhcigpO1xuICBtYWluX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyX2NvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2lkZUJhcjtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9vdXRsaW5lLmNzc1wiO1xuXG5jb25zdCBsb2FkX291dGxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICBjb25zdCBmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdC5jbGFzc0xpc3QuYWRkKFwiZm9vdFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290KTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcIm1vZGFsRm9yQWxsXCI7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRfb3V0bGluZTtcbiIsImltcG9ydCBUaGluZyBmcm9tIFwiLi90aGluZ1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5cbmNsYXNzIFN0b3JhZ2VBUEkge1xuICBzdGF0aWMgZ2V0X25ld19UaWQoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRpZFwiKSkge1xuICAgICAgU3RvcmFnZUFQSS5zYXZlX1RpZCgtMSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRpZFwiKSwgMTApICsgMTtcbiAgfVxuXG4gIC8vc2F2ZSB0aGUgdGlkLCB0aWQ6IG51bVxuICBzdGF0aWMgc2F2ZV9UaWQodGlkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aWRcIiwgdGlkKTtcbiAgfVxuXG4gIC8vcmVmcmVzaCBsYXRlc3QgdGlkIG51bWJlclxuICBzdGF0aWMgcmVmcmVzaF9UaWQodGlkKSB7XG4gICAgdGhpcy5nZXRfbmV3X1RpZCgpO1xuICAgIGxldCBsYXRlc3RfdGlkID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aWRcIiksIDEwKTtcbiAgICBpZiAobGF0ZXN0X3RpZCA8IHRpZCkgU3RvcmFnZUFQSS5zYXZlX1RpZCh0aWQpO1xuICB9XG5cbiAgc3RhdGljIGdldF9Qcm9qZWN0c0xpc3QoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIFwiW11cIik7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICB9XG5cbiAgLy9hZGQgYSBuZXcgcHJvamVjdCBpbnRvIHByb2plY3QgbGlzdDtcbiAgc3RhdGljIFByb2plY3RzTGlzdF9wdXNoKHByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdHNfbGlzdCA9IFN0b3JhZ2VBUEkuZ2V0X1Byb2plY3RzTGlzdCgpO1xuICAgIGlmICghcHJvamVjdHNfbGlzdC5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgcHJvamVjdHNfbGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c19saXN0KSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIFByb2plY3RMaXN0X3JtKHByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdHNfbGlzdCA9IFN0b3JhZ2VBUEkuZ2V0X1Byb2plY3RzTGlzdCgpO1xuICAgIGlmIChwcm9qZWN0c19saXN0LmluY2x1ZGVzKHByb2plY3QpKSB7XG4gICAgICBwcm9qZWN0c19saXN0ID0gcHJvamVjdHNfbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT0gcHJvamVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzX2xpc3QpKTtcbiAgICB9XG4gIH1cblxuICAvL2dldCBhIHByb2plY3RoaW5nbGlzdCB3aGljaCBpcyBhIGxpc3QoaW5zdGVhZCBvZiBzdHJpbmcpXG4gIHN0YXRpYyBnZXRfcHJvamVjdFRoaW5nTGlzdChwcm9qZWN0KSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdCwgXCJbXVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkpO1xuICB9XG5cbiAgLy9hZGQgYSB0aGluZydzIGlkIGludG8gcHJvamVjdFRoaW5nTGlzdFxuICBzdGF0aWMgUHJvamVjdFRoaW5nTGlzdF9wdXNoKHRoaW5nKSB7XG4gICAgbGV0IHByb2plY3RfdGhpbmdfbGlzdCA9IFN0b3JhZ2VBUEkuZ2V0X3Byb2plY3RUaGluZ0xpc3QodGhpbmcucHJvamVjdCk7XG4gICAgaWYgKCFwcm9qZWN0X3RoaW5nX2xpc3QuaW5jbHVkZXModGhpbmcudGlkKSkge1xuICAgICAgcHJvamVjdF90aGluZ19saXN0LnB1c2godGhpbmcudGlkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaW5nLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3RfdGhpbmdfbGlzdCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vcmVtb3ZlIGEgdGhpbmcgZnJvbSBhIHByb2plY3RUaGluZ0xpc3RcbiAgc3RhdGljIFByb2plY3RUaGluZ0xpc3Rfcm0odGhpbmcpIHtcbiAgICBsZXQgcHJvamVjdF90aGluZ19saXN0ID0gU3RvcmFnZUFQSS5nZXRfcHJvamVjdFRoaW5nTGlzdCh0aGluZy5wcm9qZWN0KTtcbiAgICBpZiAocHJvamVjdF90aGluZ19saXN0LmluY2x1ZGVzKHRoaW5nLnRpZCkpIHtcbiAgICAgIHByb2plY3RfdGhpbmdfbGlzdCA9IHByb2plY3RfdGhpbmdfbGlzdC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtICE9IHRoaW5nLnRpZFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaW5nLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3RfdGhpbmdfbGlzdCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vdGhpbmc6IFRoaW5nIENsYXNzXG4gIHN0YXRpYyBzYXZlVGhpbmcodGhpbmcpIHtcbiAgICBTdG9yYWdlQVBJLnJlZnJlc2hfVGlkKHRoaW5nLnRpZCk7XG4gICAgU3RvcmFnZUFQSS5Qcm9qZWN0c0xpc3RfcHVzaCh0aGluZy5wcm9qZWN0KTtcbiAgICBTdG9yYWdlQVBJLlByb2plY3RUaGluZ0xpc3RfcHVzaCh0aGluZyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpbmcudGlkLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KHRoaW5nKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0X2lkbGlzdF9ieVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCBpZF9saXN0O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSlcbiAgICAgIGlkX2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICBlbHNlIGlkX2xpc3QgPSBbXTtcblxuICAgIHJldHVybiBpZF9saXN0O1xuICB9XG5cbiAgc3RhdGljIGdldF90aGluZ19ieUlkKGlkKSB7XG4gICAgbGV0IHRoaW5nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBUaGluZygpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGluZztcbiAgfVxuXG4gIHN0YXRpYyByZXRyaWV2ZV90b2RvbGlzdF9ieVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCB0b2RvbGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgIGxldCBpZF9saXN0ID0gU3RvcmFnZUFQSS5nZXRfaWRsaXN0X2J5UHJvamVjdChwcm9qZWN0KTtcblxuICAgIGZvciAobGV0IGlkIG9mIGlkX2xpc3QpIHtcbiAgICAgIGxldCB0aGluZyA9IFN0b3JhZ2VBUEkuZ2V0X3RoaW5nX2J5SWQoaWQpO1xuICAgICAgdG9kb2xpc3QuYWRkKHRoaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kb2xpc3Q7XG4gIH1cblxuICBzdGF0aWMgcmV0cmlldmVfdG9kb2xpc3RfYnlEYXRlKGRhdGUpIHtcbiAgICBsZXQgdG9kb2xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICBsZXQgcHJvamVjdF9saXN0ID0gU3RvcmFnZUFQSS5nZXRfUHJvamVjdHNMaXN0KCk7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RfbGlzdCkge1xuICAgICAgbGV0IGlkX2xpc3QgPSBTdG9yYWdlQVBJLmdldF9pZGxpc3RfYnlQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICBmb3IgKGxldCBpZCBvZiBpZF9saXN0KSB7XG4gICAgICAgIGxldCB0aGluZyA9IFN0b3JhZ2VBUEkuZ2V0X3RoaW5nX2J5SWQoaWQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaW5nLmR1ZURhdGUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGUpO1xuICAgICAgICBpZiAodGhpbmcuZHVlRGF0ZS5nZXRUaW1lKCkgPT0gZGF0ZS5nZXRUaW1lKCkpIHRvZG9saXN0LmFkZCh0aGluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG9saXN0O1xuICB9XG5cbiAgLy9yZW1vdmUgYSB0aGluZyBmcm9tIHN0b3JhZ2VcbiAgc3RhdGljIHJlbW92ZV90aGluZyh0aGluZykge1xuICAgIFN0b3JhZ2VBUEkuUHJvamVjdFRoaW5nTGlzdF9ybSh0aGluZyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpbmcudGlkKTtcbiAgfVxuXG4gIC8vcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHN0b3JhZ2VcbiAgc3RhdGljIHJlbW92ZV9wcm9qZWN0KHByb2plY3QpIHtcbiAgICAvL3N0ZXAxOiBjbGVhciB0aGUgdGhpbmdzIGluIHRoYXQgcHJvamVjdFxuICAgIGxldCB0b2RvbGlzdCA9IFN0b3JhZ2VBUEkucmV0cmlldmVfdG9kb2xpc3RfYnlQcm9qZWN0KHByb2plY3QpLmxpc3Q7XG4gICAgZm9yIChsZXQgdGhpbmcgb2YgdG9kb2xpc3QpIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaW5nLnRpZCk7XG4gICAgLy9zdGVwMjogY2xlYXIgdGhlIHByb2plY3QgdGhpbmcgbGlzdFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QpO1xuICAgIC8vc3RlcDM6IHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHByb2plY3RsaXN0XG4gICAgU3RvcmFnZUFQSS5Qcm9qZWN0TGlzdF9ybShwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVfdGhpbmcodGhpbmcpIHtcbiAgICAvL3JldmlzZSBpbmZvclxuXG4gICAgLy9zYXZlIGl0XG4gICAgU3RvcmFnZUFQSS5zYXZlVGhpbmcodGhpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VBUEk7XG4iLCJpbXBvcnQgU3RvcmFnZUFQSSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNsYXNzIFRoaW5nIHtcbiAgY29uc3RydWN0b3IocHJvamVjdCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHBwKSB7XG4gICAgLy9jb25zb2xlLmxvZyhTdG9yYWdlQVBJLmdldF9uZXdfVGlkKCkpO1xuICAgIHRoaXMudGlkID0gU3RvcmFnZUFQSS5nZXRfbmV3X1RpZCgpO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnBwID0gcHA7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gIH1cblxuICBnZXQgdGlkKCkge1xuICAgIHJldHVybiB0aGlzLl90aWQ7XG4gIH1cblxuICBzZXQgdGlkKGlkKSB7XG4gICAgdGhpcy5fdGlkID0gaWQ7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHZhbHVlKSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2M7XG4gIH1cbiAgc2V0IGRlc2ModmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICBpZiAoISh0aGlzLl9kdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSkpXG4gICAgICB0aGlzLl9kdWVEYXRlID0gbmV3IERhdGUodGhpcy5fZHVlRGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgZHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGRhdGU7XG4gIH1cblxuICBnZXQgcHAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BwO1xuICB9XG4gIHNldCBwcCh2YWx1ZSkge1xuICAgIHRoaXMuX3BwID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9uZTtcbiAgfVxuICBzZXQgZG9uZSh2YWx1ZSkge1xuICAgIHRoaXMuX2RvbmUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGluZztcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIC8vdG9kbyBsaXN0IGlzIGEgcXVldWVcbiAgYWRkKHRoaW5nKSB7XG4gICAgdGhpcy5saXN0LnB1c2godGhpbmcpO1xuICB9XG5cbiAgLy9zb3J0IHRoZSBsaXN0XG4gIHNvcnQoKSB7XG4gICAgdGhpcy5saXN0LnNvcnQoKGEsIGIpID0+IGNvbXBhcmVBc2MoYS5kdWVEYXRlLCBiLmR1ZURhdGUpKTtcbiAgfVxuXG4gIGdldCBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9XG5cbiAgc2V0IGxpc3QobCkge1xuICAgIHRoaXMuX2xpc3QgPSBsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL25ld1Rhc2suY3NzXCI7XG5pbXBvcnQgbmV3cGFnZUh0bWwgZnJvbSBcIi4uL2h0bWwvbmV3X3Rhc2tfcGFnZS5odG1sXCI7XG5pbXBvcnQgU3RvcmFnZUFQSSBmcm9tIFwiLi4vbW9kdWxlcy9zdG9yYWdlXCI7XG5pbXBvcnQgY2xvc2VfbmV3VGFza19wYWdlIGZyb20gXCIuLi9mdW5jdGlvbnMvY2xvc2VOZXdUYXNrUGFnZVwiO1xuaW1wb3J0IFRoaW5nIGZyb20gXCIuLi9tb2R1bGVzL3RoaW5nXCI7XG5cbmNvbnN0IG5ld1Rhc2tfcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrX2NvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmlkID0gXCJuZXdQYWdlXCI7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCArPSBuZXdwYWdlSHRtbDtcblxuICBsZXQgcHJvamVjdF9saXN0ID0gU3RvcmFnZUFQSS5nZXRfUHJvamVjdHNMaXN0KCk7XG5cbiAgY29uc3QgcHJvamVjdF9zZWxlY3QgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrUHJvamVjdFwiKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0X2xpc3QpIHtcbiAgICBjb25zdCBwcm9qZWN0X29wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdF9vcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgIHByb2plY3Rfb3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3Q7XG4gICAgcHJvamVjdF9zZWxlY3QuYXBwZW5kKHByb2plY3Rfb3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbl9jbG9zZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI0Nsb3NlTmV3VGFza1dpbmRvd1wiKTtcbiAgYnV0dG9uX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZV9uZXdUYXNrX3BhZ2UpO1xuXG4gIGNvbnN0IG5ld1Rhc2tQYWdlX2Zvcm0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG4gIG5ld1Rhc2tQYWdlX2Zvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgbGV0IHRoaW5nID0gbmV3IFRoaW5nKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJvamVjdFwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY1wiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKS52YWx1ZVxuICAgICk7XG4gICAgU3RvcmFnZUFQSS5zYXZlVGhpbmcodGhpbmcpO1xuICAgIGNsb3NlX25ld1Rhc2tfcGFnZSgpO1xuICB9O1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdUYXNrX3BhZ2U7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvc2lkZWJhci5jc3NcIjtcbmltcG9ydCBzaWRlYmFyX3RlbXBsZXRlIGZyb20gXCIuLi9odG1sL3NpZGViYXIuaHRtbFwiO1xuXG5jb25zdCByZW1vdmVfYWN0aXZlID0gKCkgPT4ge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHNpZGViYXJfdGVtcGxldGU7XG5cbiAgY29uc3QgaW5ib3ggPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcbiAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVfYWN0aXZlKCk7XG4gICAgaW5ib3guY2xhc3NMaXN0LmFkZChcInNpZGViYXItYWN0aXZlXCIpO1xuICB9KTtcblxuICBjb25zdCB0b2RheSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZV9hY3RpdmUoKTtcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hY3RpdmVcIik7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICpcbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IGRpZmYgPSBfZGF0ZUxlZnQuZ2V0VGltZSgpIC0gX2RhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb21wYXJlQXNjO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL291dGxpbmUuY3NzXCI7XG5pbXBvcnQgU3RvcmFnZUFQSSBmcm9tIFwiLi4vc3JjL21vZHVsZXMvc3RvcmFnZVwiO1xuaW1wb3J0IFRoaW5nIGZyb20gXCIuLi9zcmMvbW9kdWxlcy90aGluZ1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvdG9kb2xpc3RcIjtcbmltcG9ydCBsb2FkX291dGxpbmUgZnJvbSBcIi4vZnVuY3Rpb25zL291dGxpbmUuanNcIjtcbmltcG9ydCBsb2FkX25ld1Rhc2tfcGFnZSBmcm9tIFwiLi9mdW5jdGlvbnMvbG9hZE5ld1Rhc2tQYWdlLmpzXCI7XG5pbXBvcnQgbG9hZFNpZGVCYXIgZnJvbSBcIi4vZnVuY3Rpb25zL2xvYWRTaWRlQmFyLmpzXCI7XG5cbi8vbG9hZCBvdXRsaW5lXG5sb2FkX291dGxpbmUoKTtcbi8vbG9hZF9uZXdUYXNrX3BhZ2UoKTtcbmxvYWRTaWRlQmFyKCk7XG5cbi8vdGVzdCBibG9ja1xubGV0IHQgPSBuZXcgVGhpbmcoXG4gIFwiUHJvamVjdEFcIixcbiAgXCJ0aXRsZSAxXCIsXG4gIFwiRm9yIHRlc3RcIixcbiAgbmV3IERhdGUoMjAyNCwgMiwgMyksXG4gIFwiSGlnaFwiXG4pO1xuU3RvcmFnZUFQSS5zYXZlVGhpbmcodCk7XG5cbnQgPSBuZXcgVGhpbmcoXCJQcm9qZWN0QVwiLCBcInRpdGxlIDJcIiwgXCJGb3IgdGVzdFwiLCBuZXcgRGF0ZSgyMDI0LCAwLCAzMSksIFwiSGlnaFwiKTtcblN0b3JhZ2VBUEkuc2F2ZVRoaW5nKHQpO1xuXG5sZXQgdG0gPSBuZXcgVGhpbmcoXG4gIFwiUHJvamVjdEFcIixcbiAgXCJ0aXRsZSAzXCIsXG4gIFwiRm9yIHRlc3RcIixcbiAgbmV3IERhdGUoMjAyNCwgMiwgMjgpLFxuICBcIkhpZ2hcIlxuKTtcblN0b3JhZ2VBUEkuc2F2ZVRoaW5nKHRtKTtcblxudCA9IG5ldyBUaGluZyhcbiAgXCJQcm9qZWN0QlwiLFxuICBcInRpdGxlIDIxXCIsXG4gIFwiRm9yIHRlc3RcIixcbiAgbmV3IERhdGUoMjAyNCwgMSwgMzEpLFxuICBcIkhpZ2hcIlxuKTtcblN0b3JhZ2VBUEkuc2F2ZVRoaW5nKHQpO1xuXG50ID0gbmV3IFRoaW5nKFxuICBcIlByb2plY3RCXCIsXG4gIFwidGl0bGUgMTExMTFcIixcbiAgXCJGb3IgdGVzdFwiLFxuICBuZXcgRGF0ZSgyMDI0LCAyLCAzKSxcbiAgXCJIaWdoXCJcbik7XG5TdG9yYWdlQVBJLnNhdmVUaGluZyh0KTtcblxudCA9IG5ldyBUaGluZyhcbiAgXCJQcm9qZWN0QlwiLFxuICBcInRpdGxlIDIxMVwiLFxuICBcIkZvciB0ZXN0XCIsXG4gIG5ldyBEYXRlKDIwMjMsIDEsIDMxKSxcbiAgXCJIaWdoXCJcbik7XG5TdG9yYWdlQVBJLnNhdmVUaGluZyh0KTtcblxudCA9IG5ldyBUaGluZyhcIlByb2plY3RDXCIsIFwidGl0bGUgMVwiLCBcIkZvciB0ZXN0XCIsIG5ldyBEYXRlKDIwMjQsIDEwLCAzMSksIFwiTWlkXCIpO1xuU3RvcmFnZUFQSS5zYXZlVGhpbmcodCk7XG5cbmxldCBsID0gU3RvcmFnZUFQSS5yZXRyaWV2ZV90b2RvbGlzdF9ieVByb2plY3QoXCJQcm9qZWN0QVwiKTtcbmNvbnNvbGUubG9nKGwubGlzdCk7XG5cbmwgPSBTdG9yYWdlQVBJLnJldHJpZXZlX3RvZG9saXN0X2J5RGF0ZShuZXcgRGF0ZSgyMDI0LCAyLCAzKSk7XG5jb25zb2xlLmxvZyhsLmxpc3QpO1xuXG5TdG9yYWdlQVBJLnJlbW92ZV9wcm9qZWN0KFwiUHJvamVjdEFcIik7XG5sID0gU3RvcmFnZUFQSS5yZXRyaWV2ZV90b2RvbGlzdF9ieVByb2plY3QoXCJQcm9qZWN0QVwiKTtcbmNvbnNvbGUubG9nKGwubGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=