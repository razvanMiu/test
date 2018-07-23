/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

Vue.component('image-modal', {
	props: ['src', 'alt'],

	template: '<div class="modal is-active">\n\t\t\t\t  <div class="modal-background"></div>\n\t\t\t\t  <div class="modal-content">\n\t\t   \t\t\t<slot></slot>\n\t\t\t\t  </div>\n\t\t\t\t  <button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button>\n\t\t\t\t</div>',

	mounted: function mounted() {
		ImageMap('img[usemap]');
	}
});

Vue.component('message', {
	props: ['title'],

	data: function data() {
		return {
			isVisible: true
		};
	},


	template: '<article class="message" v-show="isVisible">\n\t\t\t\t\t<div class="message-header">\n\t\t\t\t\t\t{{ title }}\n\n\t\t\t\t\t\t<button @click=\'isVisible = false\'>x</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="message-body">\n\t\t\t\t\t\t<slot></slot>\n\t\t\t\t\t</div>\n\t\t\t\t</article>'
});

new Vue({
	el: '#root',

	data: {
		showModal: false
	},

	methods: {
		toggleModal: function toggleModal() {
			this.showModal = true;
		}
	}
});

$(function () {
	ImageMap('img[usemap]');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);