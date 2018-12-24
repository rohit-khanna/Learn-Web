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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _services_UIEventHandlerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/**
 * PURPOSE      :  This is the UI controller for Home Page
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */





var ShoppingCart = __webpack_require__(3).default;




var UIController =
/*#__PURE__*/
function () {
  function UIController(ShoppingCartInstance, templateServiceInstance, eventHandlerService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UIController);

    this.shoppingCartInstance = ShoppingCartInstance;
    this.instance = templateServiceInstance;
    this.eventHandlerService = eventHandlerService;
  }
  /**
   * This is the Entry method to Render this Page
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UIController, [{
    key: "render",
    value: function render() {
      //1. Fetch Offers List BANNERS - POpulate The UI offers list-corousal
      this.populateOfferBannerList(); //2. Fetch Home page -Quick Links Data-- POpulate UI for Categories

      this.populateUIProductCategoryQuickLinks(); //3. RefreshTotalItemsCount

      this.refreshTotalItemsCount();
    }
    /**
     * TODO
     */

  }, {
    key: "registerCorousalEvents",
    value: function registerCorousalEvents() {}
    /**
     * This method is used to register the ProductCategoryQuickLinks
     * Events
     */

  }, {
    key: "registerProductCategoryQuickLinkEvents",
    value: function registerProductCategoryQuickLinkEvents() {
      var _this = this;

      $(".home__section__prod-cat__quicklinks button").on("click", function (event) {
        return _this.eventHandlerService.productCategoryQuickLinkBUttonClick(event);
      });
    }
    /**
     * Refresh Total Items in Header
     */

  }, {
    key: "refreshTotalItemsCount",
    value: function refreshTotalItemsCount() {
      var totalItemCount = this.shoppingCartInstance.itemCount;
      $(".header__cart__item-count--value .value").text(totalItemCount);
    }
    /**
     * function to Create Corousal Nav
     * @param {*} labelTemplateFn tenplateFn for Label
     * @param {*} RadioTemplateFn tenplateFn for Radio
     * @param {*} offersCount totals Offers
     */

  }, {
    key: "createNavigations",
    value: function createNavigations(labelTemplateFn, RadioTemplateFn, offersCount) {
      var labelHolder = $(".section__corousal .corousal .slidesNavigation");
      var radioHolder = $(".section__corousal .corousal");

      for (var i = 0; i < offersCount; i++) {
        var tempStringLabel = labelTemplateFn(i + 1);
        var tempStringRadio = RadioTemplateFn(i + 1, i === 0);
        labelHolder.append(tempStringLabel);
        radioHolder.prepend(tempStringRadio);
      }
    }
    /**
     * function to Create Offers inside offer list container
     * @param {*} templateFn tenplate function for listitem
     * @param {*} arrayOfOffers array of Offers
     */

  }, {
    key: "populateOffers",
    value: function populateOffers(templateFn, arrayOfOffers) {
      var sortedArray = arrayOfOffers.sort(function (a, b) {
        return a.order - b.order;
      });
      var offerList = $(".section__corousal .corousal .images"); // console.log(sortedArray);

      sortedArray.forEach(function (offer) {
        if (offer.isActive) {
          var tempString = templateFn(offer);
          offerList.append(tempString);
        }
      });
    }
    /**
     * This function is used to Fetch Offers-Banners, fetch Template from Service and
     * then populate the data using templates
     */

  }, {
    key: "populateOfferBannerList",
    value: function populateOfferBannerList() {
      // 1. Fetch and Check Banners- Offers
      if (this.shoppingCartInstance.serviceInstance.banners && this.shoppingCartInstance.serviceInstance.banners.length > 0) {
        //2. Fetch Template String
        var listItemTemplate = this.instance.fetchBannerOfferTemplate(); //3. PopulateThe Offers List

        this.populateOffers(listItemTemplate.offers, this.shoppingCartInstance.serviceInstance.banners);
        this.createNavigations(listItemTemplate.navLabel, listItemTemplate.navButton, this.shoppingCartInstance.serviceInstance.banners.length); // Register Corousal Events

        this.registerCorousalEvents();
      }
    }
    /**
     * This method is used to Populate Products Category Quick Links
     */

  }, {
    key: "populateUIProductCategoryQuickLinks",
    value: function populateUIProductCategoryQuickLinks() {
      var _this2 = this;

      // 1. Check Data from service
      if (this.shoppingCartInstance.serviceInstance.categories && this.shoppingCartInstance.serviceInstance.categories.length > 0) {
        var enabledArray = this.shoppingCartInstance.serviceInstance.categories.filter(function (x) {
          return x.enabled;
        });
        var sortedArray = enabledArray.sort(function (a, b) {
          return a.order - b.order;
        }); //2. Create Quick Links

        sortedArray.forEach(function (element, index) {
          _this2.createQuickLinksForProductCategories(element, index);
        });
        this.registerProductCategoryQuickLinkEvents();
      }
    }
    /**
     * Create Quick Links for Product Categories
     * @param {*} categoryObject
     * @param {*} index
     */

  }, {
    key: "createQuickLinksForProductCategories",
    value: function createQuickLinksForProductCategories(categoryObject, index) {
      // fetch template string
      var itemTemplate = _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__["default"].fetchProductCategoryQuickLinksTemplate().quickLink(categoryObject, index % 2 == 1);
      var quickLinksContainer = $(".home__section__prod-cat__quicklinks");
      quickLinksContainer.append(itemTemplate);
    }
  }]);

  return UIController;
}(); // 1. Create Cart INstance


ShoppingCart.GetCartInstanceAsync().then(function (shoppingCartInstance) {
  var eventHandlerService = new _services_UIEventHandlerService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var controller = new UIController(shoppingCartInstance, _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__["default"], eventHandlerService);
  $().ready(function () {
    controller.render();
  });
}).catch(function (err) {
  console.error("Error While Creating Instance", err);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CartProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _services_ShoppingCartService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/**
 * PURPOSE      :  This is the Model for Shopping Cart Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */









var ShoppingCart =
/*#__PURE__*/
function () {
  function ShoppingCart() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShoppingCart);

    this.cartProducts = []; // can be 2 products with 2 instances each: hence count=2

    this.itemCount = 0; // will be 4

    this.total = 0;
    this.serviceInstance = new _services_ShoppingCartService__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }
  /**
   * PUBLIC API
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShoppingCart, [{
    key: "api",
    get: function get() {
      function addProduct(id) {
        var newProduct = new _CartProduct__WEBPACK_IMPORTED_MODULE_4__["default"](id);
        newProduct.prodDetails = fetchProductDetails(id);
        cartProducts.push(newProduct);
        this.itemCount++;
        incrementTotal(newProduct);
      }

      function removeProduct(id) {
        var product = this.cartProducts.find(function (x) {
          return x.id == id;
        });

        for (var i = 0; i < product.quantity; i++) {
          this.itemCount--;
          decrementTotal(product);
        }

        var index = this.cartProducts.findIndex(function (p) {
          return p.id == id;
        });
        this.cartProducts.splice(index, 1);
      }

      function editProduct(id, newQty) {
        var product = this.cartProducts.find(function (x) {
          return x.id == id;
        });

        if (newQty) {
          var diff = newQty - product.quantity;

          if (diff == 0) {// do nothing
          } else {
            for (var i = 0; i < Math.abs(diff); i++) {
              diff > 0 ? incrementProductQuantity(id) : decrementProductQuantity(id);
            }
          }
        }
      }

      function fetchProductDetails(id) {
        // ToDo
        console.log(this.itemCount);
        console.log(this.total);
        console.log(this.cartProducts);
      }
      /**
       * method to Increment The Product Quantity in cart
       * @param {*} id cartProductId
       */


      function incrementProductQuantity(id) {
        var product = this.cartProducts.find(function (x) {
          return x.id == id;
        });
        product.quantity += 1;
        this.itemCount += 1;
        this.incrementTotal(product);
      }

      function decrementProductQuantity(id) {
        var product = this.cartProducts.find(function (x) {
          return x.id == id;
        });
        product.quantity -= 1;
        this.itemCount -= 1;
        this.decrementTotal(product);
      }

      function incrementTotal() {
        this.total += product.prodDetails.price;
      }

      function decrementTotal() {
        this.total += product.prodDetails.price;
      }

      return {
        addProduct: addProduct,
        removeProduct: removeProduct,
        editProduct: editProduct,
        fetchProductDetails: fetchProductDetails
      };
    }
  }]);

  return ShoppingCart;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  GetCartInstanceAsync: function () {
    var _GetCartInstanceAsync = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var ins;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ins = new ShoppingCart();
              _context.next = 3;
              return ins.serviceInstance.loadMockDataAsync();

            case 3:
              return _context.abrupt("return", ins);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function GetCartInstanceAsync() {
      return _GetCartInstanceAsync.apply(this, arguments);
    }

    return GetCartInstanceAsync;
  }()
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(6);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/**
 * PURPOSE      :  This is the Model for CartProduct Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */




var CartProduct = function CartProduct(productId) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CartProduct);

  this.id = productId;
  this.quantity = 1;
  this.prodDetails = {};
}; //module.exports = CartProduct;


/* harmony default export */ __webpack_exports__["default"] = (CartProduct);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FetchDAL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/**
 * PURPOSE      :  This is the Shopping Cart Service.
 *
 * NOTES/COLOR SCHEME    :
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */









var ShoppingCartService =
/*#__PURE__*/
function () {
  function ShoppingCartService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShoppingCartService);

    this.dataService = new _DataService__WEBPACK_IMPORTED_MODULE_5__["default"](new _FetchDAL__WEBPACK_IMPORTED_MODULE_4__["default"]());
    this.banners = [];
    this.categories = [];
    this.products = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShoppingCartService, [{
    key: "loadMockDataAsync",
    value: function loadMockDataAsync() {
      return Promise.all([this._fetchBanners(), this._fetchCategories(), this._fetchProducts()]);
    }
  }, {
    key: "_fetchBanners",
    value: function () {
      var _fetchBanners2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.banners = await this.dataService.fetchBannersAsync();
                this.banners = [{
                  bannerImageUrl: "/images/offers/offer1.jpg",
                  bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
                  isActive: true,
                  order: 1,
                  id: "5b6c38156cb7d770b7010ccc"
                }, {
                  bannerImageUrl: "/images/offers/offer2.jpg",
                  bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
                  isActive: true,
                  order: 14,
                  id: "5b6c38336cb7d770b7010ccd"
                }, {
                  bannerImageUrl: "/images/offers/offer3.jpg",
                  bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
                  isActive: true,
                  order: 3,
                  id: "5b6c38456cb7d770b7010cce"
                }, {
                  bannerImageUrl: "/images/offers/offer4.jpg",
                  bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
                  isActive: true,
                  order: 4,
                  id: "5b6c38576cb7d770b7010ccf"
                }, {
                  bannerImageUrl: "/images/offers/offer5.jpg",
                  bannerImageAlt: "Independence Day Deal - Rs70 off on tea",
                  isActive: true,
                  order: 5,
                  id: "5b6c386b6cb7d770b7010cd0"
                }];
                return _context.abrupt("return", Promise.resolve());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _fetchBanners() {
        return _fetchBanners2.apply(this, arguments);
      }

      return _fetchBanners;
    }()
  }, {
    key: "_fetchCategories",
    value: function () {
      var _fetchCategories2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // this.categories = await this.dataService.fetchCategoriesAsync();
                this.categories = [{
                  name: "Beverages",
                  key: "beverages",
                  description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
                  enabled: true,
                  order: 3,
                  imageUrl: "/images/category/beverages.png",
                  id: "5b675e5e5936635728f9fc30"
                }, {
                  name: "Bakery Cakes and Dairy",
                  key: "bakery-cakes-dairy",
                  description: "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
                  enabled: true,
                  order: 2,
                  imageUrl: "/images/category/bakery.png",
                  id: "5b6899123d1a866534f516de"
                }, {
                  name: "Beauty and Hygiene",
                  key: "beauty-hygiene",
                  description: "Buy beauty and personal care products online in India at best prices.",
                  enabled: true,
                  order: 4,
                  imageUrl: "/images/category/beauty.png",
                  id: "5b68994e3d1a866534f516df"
                }, {
                  name: "Baby Care",
                  key: "baby",
                  description: "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
                  enabled: true,
                  order: 5,
                  imageUrl: "/images/category/baby.png",
                  id: "5b6899683d1a866534f516e0"
                }, {
                  name: "Seafood",
                  key: "seafood",
                  description: "Great place to buy fresh seafood.",
                  enabled: false,
                  order: -1,
                  id: "5b68997d3d1a866534f516e1"
                }, {
                  name: "Fruits & Vegetables",
                  key: "fruit-and-veg",
                  description: "A variety of fresh fruits and vegetables.",
                  enabled: true,
                  order: 1,
                  imageUrl: "/images/category/fruits.png",
                  id: "5b6899953d1a866534f516e2"
                }];
                return _context2.abrupt("return", Promise.resolve());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _fetchCategories() {
        return _fetchCategories2.apply(this, arguments);
      }

      return _fetchCategories;
    }()
  }, {
    key: "_fetchProducts",
    value: function () {
      var _fetchProducts2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // this.products = await this.dataService.fetchProductsAsync();
                this.products = [{
                  name: "Fresho Kiwi - Green, 3 pcs",
                  imageURL: "/images/products/fruit-n-veg/kiwi-green.jpg",
                  description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                  price: 87,
                  stock: 50,
                  category: "5b6899953d1a866534f516e2",
                  sku: "fnw-kiwi-3",
                  id: "5b6c6a7f01a7c38429530883"
                }, {
                  name: "Apple - Washington, Regular, 4 pcs",
                  imageURL: "/images/products/fruit-n-veg/apple.jpg",
                  description: "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
                  price: 187,
                  stock: 50,
                  category: "5b6899953d1a866534f516e2",
                  sku: "fnw-apple-4",
                  id: "5b6c6aeb01a7c38429530884"
                }, {
                  name: "Fresho Pomegrante Peeled, 500 gm ",
                  imageURL: "/images/products/fruit-n-veg/pomegrante.jpg",
                  description: "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
                  price: 88,
                  stock: 50,
                  category: "5b6899953d1a866534f516e2",
                  sku: "fnw-pomegranate-500",
                  id: "5b6c6b7001a7c38429530885"
                }, {
                  name: "Capsicum - Green, 1 kg",
                  imageURL: "/images/products/fruit-n-veg/capsicum-green.jpg",
                  description: "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
                  price: 137,
                  stock: 50,
                  category: "5b6899953d1a866534f516e2",
                  sku: "fnw-capsicum-1",
                  id: "5b6c6bdc01a7c38429530886"
                }, {
                  name: "Tomato - Local, Organically Grown, 500 gm",
                  imageURL: "/images/products/fruit-n-veg/capsicum-green.jpg",
                  description: "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.",
                  price: 12,
                  stock: 50,
                  category: "5b6899953d1a866534f516e2",
                  sku: "fnw-tomatoes-500",
                  id: "5b6c6c1801a7c38429530887"
                }];
                return _context3.abrupt("return", Promise.resolve());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _fetchProducts() {
        return _fetchProducts2.apply(this, arguments);
      }

      return _fetchProducts;
    }()
  }]);

  return ShoppingCartService;
}(); // module.exports = ShoppingCartService;


/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartService);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/**
 * PURPOSE      :   This is the DAL layer with Generic 'Fetch API' Implementation
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
 //const fetch = require("node-fetch"); // to run fetch over NodeJS
//const fetch = require("node-fetch"); // to run fetch over NodeJS






var FetchDAL =
/*#__PURE__*/
function () {
  function FetchDAL() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FetchDAL);
  }
  /**
   * Fetch All Entities
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FetchDAL, [{
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(endpoint);

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAll(_x) {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }]);

  return FetchDAL;
}(); // module.exports = FetchDAL;


/* harmony default export */ __webpack_exports__["default"] = (FetchDAL);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/**
 * PURPOSE      :  This is the Data Service which is used to fetch all data from SERVER
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */







var DataService =
/*#__PURE__*/
function () {
  function DataService(DALObject) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DataService);

    this.dalObj = DALObject;
    this.endpointArray = {
      banner: "http://localhost:5000/banners",
      category: "http://localhost:5000/categories",
      products: "http://localhost:5000/products",
      addToCart: "http://localhost:5000/addToCart"
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DataService, [{
    key: "_handleDALResponse",
    value: function () {
      var _handleDALResponse2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(res.status === 200 || res.status === 201)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return res.json();

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 7:
                throw {
                  status: res.status,
                  message: res.statusText
                };

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handleDALResponse(_x) {
        return _handleDALResponse2.apply(this, arguments);
      }

      return _handleDALResponse;
    }()
  }, {
    key: "fetchBannersAsync",
    value: function fetchBannersAsync() {
      var _this = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.dalObj.findAll(_this.endpointArray.banner).then(function (res) {
                    return _this._handleDALResponse(res);
                  }).then(function (output) {
                    resolve(output);
                  }).catch(function (err) {
                    reject(err);
                  });

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "fetchCategoriesAsync",
    value: function fetchCategoriesAsync() {
      var _this2 = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resolve, reject) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this2.dalObj.findAll(_this2.endpointArray.category).then(function (res) {
                    return _this2._handleDALResponse(res);
                  }).then(function (output) {
                    resolve(output);
                  }).catch(function (err) {
                    reject(err);
                  });

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x4, _x5) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "fetchProductsAsync",
    value: function fetchProductsAsync() {
      var _this3 = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(resolve, reject) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _this3.dalObj.findAll(_this3.endpointArray.products).then(function (res) {
                    return _this3._handleDALResponse(res);
                  }).then(function (output) {
                    resolve(output);
                  }).catch(function (err) {
                    reject(err);
                  });

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x6, _x7) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);

  return DataService;
}(); // module.exports = DataService;


/* harmony default export */ __webpack_exports__["default"] = (DataService);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/**
 * PURPOSE      :  This is the Template service to provide the Template for UI
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */





var TemplateService =
/*#__PURE__*/
function () {
  function TemplateService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TemplateService);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TemplateService, [{
    key: "fetchBannerOfferTemplate",

    /**
     * This method is used to fetch the Template String
     * for Offer-Banner UI
     */
    value: function fetchBannerOfferTemplate() {
      return {
        offers: function offers(_ref) {
          var id = _ref.id,
              bannerImageUrl = _ref.bannerImageUrl,
              bannerImageAlt = _ref.bannerImageAlt;
          return " <li id='".concat(id, "'><img src='../..").concat(bannerImageUrl, "' alt=").concat(bannerImageAlt, " /></li>");
        },
        navButton: function navButton(id, checked) {
          return "<input type=\"radio\"  name=\"images\" id=\"radio-".concat(id, "\" ").concat(checked ? "checked" : "", " />");
        },
        navLabel: function navLabel(id) {
          return "  <label for=\"radio-".concat(id, "\" id=\"dotForRadio-").concat(id, "\"></label>");
        }
      };
    }
    /**
     * This method is used to Fetch Template string
     * for Product Category Quick Links
     */

  }, {
    key: "fetchProductCategoryQuickLinksTemplate",
    value: function fetchProductCategoryQuickLinksTemplate() {
      return {
        quickLink: function quickLink(_ref2, isReverse) {
          var name = _ref2.name,
              key = _ref2.key,
              description = _ref2.description,
              imageUrl = _ref2.imageUrl,
              id = _ref2.id;
          return " <div class=\"home__section__prod-cat__quicklinks__row".concat(isReverse ? "--reverse" : "", "\" id=").concat(id, ">\n      <img src='../..").concat(imageUrl, "' />\n      <div class=\"content\">\n        <h2>").concat(name, "</h2>\n        <p>").concat(description, "</p>\n        <button aria-label='Explore ").concat(name, " '>Explore ").concat(key, "</button>\n      </div>\n    </div>");
        }
      };
    }
  }]);

  return TemplateService;
}();

var instance = new TemplateService(); // module.exports = instance;

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * PURPOSE      :  This is the Ui Event Handler Service
 *
 * NOTES/COLOR SCHEME    :
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
var EventHandlerService =
/*#__PURE__*/
function () {
  function EventHandlerService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventHandlerService);
  }
  /**
   * Button Click Handler for Product Category Quick Link.
   * This will picks up the CLicked Product category ID, and launch the
   * PLP page with the cat_id as Query String 
   * @param {*} event Event Object
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventHandlerService, [{
    key: "productCategoryQuickLinkBUttonClick",
    value: function productCategoryQuickLinkBUttonClick(event) {
      // console.log(event.target.parentNode.parentNode.id);
      window.location.href = "../plp/index.html?cat_id=" + event.target.parentNode.parentNode.id;
    }
  }]);

  return EventHandlerService;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventHandlerService);

/***/ })
/******/ ]);
//# sourceMappingURL=home.bundle.js.map