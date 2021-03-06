/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    /* Contiene i link della navbar del Jumbotron, nella sezione "Jumbo/jumbo_nav" */
    jumboLinks: ["Home", "About", "Projects", "Process", "Testimonials"],

    /* Contiene i link della navbar della sezione "action" dell'HTML */
    actionLinks: ["All", "Institutional", "social", "events", "innovation", "environment", "technology"],

    /* Contiene le immagini e i testi della gallery nella sezione "action" dell'HTML. */
    actionGallery: [{
      picLink: "1.jpg",
      picText: "Academic professional program in social media"
    }, {
      picLink: "2.jpg",
      picText: "President's speech at the annual meeting"
    }, {
      picLink: "3.jpg",
      picText: "International business trip in Shangai"
    }, {
      picLink: "4.jpg",
      picText: "Technology workshop with education theme"
    }, {
      picLink: "5.jpg",
      picText: "Donation of clothes and food to the partner NGO"
    }, {
      picLink: "6.jpg",
      picText: "Confraternization of the procurement team"
    }],

    /* il contenuto delle carte nella sezione "main_cards" dell'HTML */
    threeCards: [{
      img: "fas fa-user-friends",
      title: "Human Capital",
      parag: "Humanizing business: Harness the power of technology to improve the way people work."
    }, {
      img: "fas fa-chart-pie",
      title: "Core Business",
      parag: "It takes innovative approaches to transform, and run existing platforms."
    }, {
      img: "fas fa-tachometer-alt",
      title: "Performance",
      parag: "Achieving maximum impact and value from investments in finance and supply chain"
    }],

    /* il contenuto dei contatori nella sezione "about" dell'HTML */
    subscribers: [{
      type: "Employees",
      users: 0,
      content: "Lorem ipsum dolor sit amet."
    }, {
      type: "Partners",
      users: 0,
      content: "Lorem ipsum dolor sit amet."
    }, {
      type: "Customers",
      users: 0,
      content: "Lorem ipsum dolor sit amet."
    }],

    /* il contenuto dei blocchi di informazione sulle azioni descritte nella sezione "process" dell'HTML */
    actions: [{
      position: "01",
      title: "Collection of information",
      paragraph: "Lorem ipsum dolor sit amet consectetur."
    }, {
      position: "02",
      title: "Strategic planning",
      paragraph: "Lorem ipsum dolor sit amet consectetur."
    }, {
      position: "03",
      title: "Assignment of responsibilities",
      paragraph: "Lorem ipsum dolor sit amet consectetur."
    }, {
      position: "04",
      title: "Formatting process",
      paragraph: "Lorem ipsum dolor sit amet consectetur."
    }, {
      position: "05",
      title: "Continuity formalization",
      paragraph: "Lorem ipsum dolor sit amet consectetur."
    }],

    /* il contenuto delle cards con i feedback di alcune fonti, nella sezione "feedback" dell'HTML */
    feedbacks: [{
      link: "-1.png",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
      conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita."
    }, {
      link: "-2.png",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
      conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita."
    }, {
      link: "-3.png",
      paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
      conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita."
    }]
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;