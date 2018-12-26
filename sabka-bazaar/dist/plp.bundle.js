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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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

    Array.prototype.SortByOrder = function () {
      this.sort(function (a, b) {
        return a.order - b.order;
      });
    };
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
                  "name": "Fresho Kiwi - Green, 3 pcs",
                  "imageURL": "/images/products/fruit-n-veg/kiwi-green.jpg",
                  "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                  "price": 87,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-kiwi-3",
                  "id": "5b6c6a7f01a7c38429530883"
                }, {
                  "name": "Apple - Washington, Regular, 4 pcs",
                  "imageURL": "/images/products/fruit-n-veg/apple.jpg",
                  "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
                  "price": 187,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-apple-4",
                  "id": "5b6c6aeb01a7c38429530884"
                }, {
                  "name": "Fresho Pomegrante Peeled, 500 gm ",
                  "imageURL": "/images/products/fruit-n-veg/pomegrante.jpg",
                  "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
                  "price": 88,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-pomegranate-500",
                  "id": "5b6c6b7001a7c38429530885"
                }, {
                  "name": "Capsicum - Green, 1 kg",
                  "imageURL": "/images/products/fruit-n-veg/capsicum-green.jpg",
                  "description": "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
                  "price": 137,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-capsicum-1",
                  "id": "5b6c6bdc01a7c38429530886"
                }, {
                  "name": "Tomato - Local, Organically Grown, 500 gm",
                  "imageURL": "/images/products/fruit-n-veg/tomato.jpg",
                  "description": "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.",
                  "price": 12,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-tomatoes-500",
                  "id": "5b6c6c1801a7c38429530887"
                }, {
                  "name": "Sandwich Bread - White, Chemical Free, 400 gm",
                  "imageURL": "/images/products/bakery-cakes-dairy/bread.jpg",
                  "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
                  "price": 32,
                  "stock": 50,
                  "category": "5b6899123d1a866534f516de",
                  "sku": "bcd-bread-400",
                  "id": "5b6c6d3201a7c38429530888"
                }, {
                  "name": "Organic Fresh Paneer, 200 gm ",
                  "imageURL": "/images/products/bakery-cakes-dairy/paneer.jpg",
                  "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been certified organic for over 8 years. All feed is naturally grown with no pesticides or fertilizers.",
                  "price": 98,
                  "stock": 50,
                  "category": "5b6899123d1a866534f516de",
                  "sku": "bcd-paneer-200",
                  "id": "5b6c6d6201a7c38429530889"
                }, {
                  "name": "Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
                  "imageURL": "/images/products/bakery-cakes-dairy/yogurt-blue.jpg",
                  "description": "Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one of the most authentic yoghurts which advocates a healthy lifestyle with delicious taste. An excellent source of protein without the added fat.",
                  "price": 40,
                  "stock": 50,
                  "category": "5b6899123d1a866534f516de",
                  "sku": "bcd-yogurt-blue",
                  "id": "5b6c6d9e01a7c3842953088a"
                }, {
                  "name": "Epigamia Greek Yogurt - Strawberry, 90 gm",
                  "imageURL": "/images/products/bakery-cakes-dairy/yogurt-red.jpg",
                  "description": "Low Fat and High protein delicious and thick Greek Yogurt.",
                  "price": 40,
                  "stock": 50,
                  "category": "5b6899123d1a866534f516de",
                  "sku": "bcd-yogurt-red",
                  "id": "5b6c6dd701a7c3842953088b"
                }, {
                  "name": "Tata Tea Gold Leaf Tea, 500 gm",
                  "imageURL": "/images/products/beverages/tata-tea.jpg",
                  "description": "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
                  "price": 165,
                  "stock": 50,
                  "category": "5b675e5e5936635728f9fc30",
                  "sku": "bev-tata-tea-500",
                  "id": "5b6c6f4a01a7c3842953088c"
                }, {
                  "name": "Red Label Tea, 500 gm Carton",
                  "imageURL": "/images/products/beverages/red-label.jpg",
                  "description": "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.",
                  "price": 205,
                  "stock": 50,
                  "category": "5b675e5e5936635728f9fc30",
                  "sku": "bev-red-label-500",
                  "id": "5b6c6f8301a7c3842953088d"
                }, {
                  "name": "Bournvita Pro-Health Drink - Chocolate, 2x750 gm",
                  "imageURL": "/images/products/beverages/bournvita.jpg",
                  "description": "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.",
                  "price": 572,
                  "stock": 50,
                  "category": "5b675e5e5936635728f9fc30",
                  "sku": "bev-bournvita-750",
                  "id": "5b6c6fbf01a7c3842953088e"
                }, {
                  "name": "Coca Cola Soft Drink, 2x1.75 L",
                  "imageURL": "/images/products/beverages/bournvita.jpg",
                  "description": "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.",
                  "price": 150,
                  "stock": 50,
                  "category": "5b675e5e5936635728f9fc30",
                  "sku": "coke-175",
                  "id": "5b6c6fed01a7c3842953088f"
                }, {
                  "name": "Listerine Mouthwash - Cool Mint, 250 ml",
                  "imageURL": "/images/products/beauty-hygiene/listerine.jpg",
                  "description": "Listerine Cool mint Antibacterial Mouthwash is rapid & easy to use, a 30 second \"slosh\" with Listerine after brushing and flossing reaches parts of the mouth that may be missed. Used two times daily, Listerine provides 24-hour defence against plaque and lasting bright breath assurance.",
                  "price": 109,
                  "stock": 50,
                  "category": "5b68994e3d1a866534f516df",
                  "sku": "bh-listerine-250",
                  "id": "5b6c715f01a7c38429530890"
                }, {
                  "name": "TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml ",
                  "imageURL": "/images/products/beauty-hygiene/shampoo.jpg",
                  "description": "For the first time, at TRESemme , Our Professional combines luxurious ingredients to give you gorgeously smoother shiny hair every day , infused with keratin protein and lightweight argan oil , our advanced keratin smooth system gently nourishes hair and controls frizz for up to 3 days.",
                  "price": 410,
                  "stock": 50,
                  "category": "5b68994e3d1a866534f516df",
                  "sku": "bh-tresemme-580",
                  "id": "5b6c71a101a7c38429530891"
                }, {
                  "name": "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3",
                  "imageURL": "/images/products/beauty-hygiene/dove.jpg",
                  "description": "Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more glowing skin.",
                  "price": 622,
                  "stock": 50,
                  "category": "5b68994e3d1a866534f516df",
                  "sku": "bh-dove-combo",
                  "id": "5b6c71e601a7c38429530892"
                }, {
                  "name": "Premier Facial Tissue - Special, 400 pcs",
                  "imageURL": "/images/products/beauty-hygiene/tissues.jpg",
                  "description": "Let your beautiful face stay clean Here Premier Special Face Tissues are available, mostly prepared targeting to care for your face which has spongy and delicate skin.",
                  "price": 270,
                  "stock": 50,
                  "category": "5b68994e3d1a866534f516df",
                  "sku": "bh-tissue-400",
                  "id": "5b6c721d01a7c38429530893"
                }, {
                  "name": "Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm",
                  "imageURL": "/images/products/beauty-hygiene/closeup.jpg",
                  "description": " Closeup's unique Active Zinc Mouthwash not only cleans deep corners of your mouth of residual germs it also gives you upto 12 Hours Fresh Breath.",
                  "price": 82,
                  "stock": 50,
                  "category": "5b68994e3d1a866534f516df",
                  "sku": "bh-closeup-150",
                  "id": "5b6c727801a7c38429530894"
                }, {
                  "name": "Pampers Diapers Pants - Large Size, Monthly Box Pack, New, 128's pack",
                  "imageURL": "/images/products/baby/pampers.jpg",
                  "description": "Pampers dry, pants style diapers are the only pants in India with new air channels that provides your baby with breathable dryness overnight.",
                  "price": 1999,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-pamper-128",
                  "id": "5b6c746801a7c38429530895"
                }, {
                  "name": "Mamypoko Pants Style Diapers - Large, 62 pcs",
                  "imageURL": "/images/products/baby/mamy.jpg",
                  "description": "MamyPoko Pants Extra Absorb is a Pant Style diaper that can be used most comfortably for the baby at night Because of Powerful slim core that can absorb up to 12 hours, it prevents leakage till morning.",
                  "price": 930,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-mamy-62",
                  "id": "5b6c74d101a7c38429530896"
                }, {
                  "name": "Johnson & Johnson Baby skincare wipes, 20 pcs",
                  "imageURL": "/images/products/baby/wipes.jpg",
                  "description": "Johnsons Baby wipes gently cleanse and care for babys delicate skin. As mild as pure water, they can be used safely all over the body, even around eyes.",
                  "price": 70,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-wipes-20",
                  "id": "5b6c750701a7c38429530897"
                }, {
                  "name": "Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm",
                  "imageURL": "/images/products/baby/cerelac.jpg",
                  "description": "Nestle Multigrain Cerelac enriched with the goodness of five fruits is a complementary food which is given to babies above the age of six months.",
                  "price": 478,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-cerelac-300",
                  "id": "5b6c753c01a7c38429530898"
                }, {
                  "name": "Baby Dove Baby Bar - Rich Moisture, 50 gm",
                  "imageURL": "/images/products/baby/baby-dove.jpg",
                  "description": "Gentler and more nourishing than any other baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral formula thats ophthalmologist, dermatologist and pediatrician tested too.",
                  "price": 30,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-dove-50",
                  "id": "5b6c758301a7c38429530899"
                }, {
                  "name": "Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil, 100 ml",
                  "imageURL": "/images/products/baby/shampoo.jpg",
                  "description": "A hair care product range specifically for kids aged 2 years and above. This mild shiny drops shampoo formula has been developed to boost natural shine & help reduce frizz, leaving hair silky smooth and healthy looking.",
                  "price": 95,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-shampoo-100",
                  "id": "5b6c75e101a7c3842953089a"
                }, {
                  "name": "Baby Wipes - Cherry Blossom, 2x80 pcs",
                  "imageURL": "/images/products/baby/red-wipes.jpg",
                  "description": "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
                  "price": 300,
                  "stock": 50,
                  "category": "5b6899683d1a866534f516e0",
                  "sku": "baby-wipes-red-80",
                  "id": "5b6c761801a7c3842953089b"
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
        offers: function offers(_ref, width) {
          var id = _ref.id,
              bannerImageUrl = _ref.bannerImageUrl,
              bannerImageAlt = _ref.bannerImageAlt;
          return " <li  width=".concat(width, "% id='").concat(id, "'><img src='../..").concat(bannerImageUrl, "' alt=").concat(bannerImageAlt, " /></li>");
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
    /**
     * This method is used to Fetch the Template String
     * for Category Filter Links
     */

  }, {
    key: "fetchProductsTemplate",
    value: function fetchProductsTemplate(_ref3) {
      var name = _ref3.name,
          imageURL = _ref3.imageURL,
          price = _ref3.price,
          description = _ref3.description,
          id = _ref3.id;
      return " <div class=\"plp__section__products__product-row\" id=".concat(id, ">\n    <h2>").concat(name, "</h2>\n\n    <div class=\"plp__section__products__product-row__content\">\n      <img\n        src=\"../..").concat(imageURL, "\"\n        alt='").concat(name, "'\n      />\n      <div class=\"details\">\n        <p title=  '").concat(description, "'>\n        ").concat(description.substr(0, 120), "...\n        </p>\n        <div class=\"button-area\">\n          <span> MRP Rs. ").concat(price, " </span>\n          <button id=").concat(id, ">\n            Buy Now\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>");
    }
  }, {
    key: "fetchCategoryFilterTemplate",
    get: function get() {
      return {
        topBar: function topBar(_ref4) {
          var id = _ref4.id,
              name = _ref4.name;
          return " <li id='".concat(id, "'>\n      <span class=\"icon\"> <i class=\"material-icons\"> done </i> </span>\n      <span class=\"filter-name\"> ").concat(name, " </span>\n    </li>");
        },
        sideBar: function sideBar() {}
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
    /**
     * Handles the filter Top Bar Header Click
     * @param {*} filterValue
     * @param {*} isRequestFromCode
     */

  }, {
    key: "categoryFilterHeaderClick",
    value: function categoryFilterHeaderClick(filterValue, isRequestFromCode) {
      var element = $(".plp__section__category__filter__container .filter-header");

      if (!isRequestFromCode) {
        //element.next(".filter_list").toggleClass("hidden");
        element.next(".filter_list").slideToggle(300, function () {
          if ($(this).css("display") === "block") {
            element.children(".icon").children("i").text("keyboard_arrow_up");
          } else {
            element.children(".icon").children("i").text("keyboard_arrow_down");
          }
        });
      }

      if (filterValue) element.children(".filter-name").text(filterValue);
    }
    /**
     * handles the Top Bar FIlter Item Click
     * @param {*} element
     */

  }, {
    key: "categoryFilterListItemClick",
    value: function categoryFilterListItemClick(element) {
      var filtername = "";
      var categoryId = -1;

      if ($(element).children(".icon").children("i").hasClass("icon-selected")) {
        // case of Unset the Filter
        filtername = "Select a filter";
        categoryId = -1;
      } else {
        // new filter Selected By User
        filtername = $(element).children(".filter-name").text(); // clear All Selected Classes

        $(".plp__section__category__filter__container .filter_list li").children(".icon").children("i").removeClass("icon-selected");
        categoryId = $(element)[0].id;
      } // add this as Selected


      $(element).children(".icon").children("i").toggleClass(" icon-selected");
      return {
        filtername: filtername,
        categoryId: categoryId
      };
    }
  }, {
    key: "productClick",
    value: function productClick(event) {
      console.log("Button for Product ID:", event.currentTarget.id);
    }
    /**
     * this method handles the corousal dots click.
     * This will translate the images
     * @param {*} event
     */

  }, {
    key: "corousalDotsClick",
    value: function corousalDotsClick(event) {
      var id = event.target.id.toString().split("dotForRadio-")[1];
      $(event.target.parentNode).children().removeClass();
      $(event.target).addClass("selected");
      var ul = $(event.target.parentNode.parentNode).children(".images");
      var transformPx = (id - 1) * parseFloat($(ul).children().first().css("width"));
      $(".section__corousal .corousal .images").css("transform", "translate(".concat(-1 * transformPx, "px,0)"));
    }
  }, {
    key: "corousalPrevBtnClick",
    value: function corousalPrevBtnClick() {
      var selectedDot = $(".section__corousal .corousal .slidesNavigation").children("label.selected");
      var id = selectedDot[0].id.toString().split("dotForRadio-")[1];
      var ele = "";

      if (id == 1) {
        // left endpoint
        ele = $(".section__corousal .corousal .slidesNavigation").children().last();
      } else {
        ele = selectedDot.prev();
      }

      this.corousalDotsClick({
        target: ele[0]
      });
    }
  }, {
    key: "corousalNextBtnClick",
    value: function corousalNextBtnClick() {
      var selectedDot = $(".section__corousal .corousal .slidesNavigation").children("label.selected");
      var id = selectedDot[0].id.toString().split("dotForRadio-")[1];
      var ele = "";

      if (id == $(".section__corousal .corousal .slidesNavigation").children().length) {
        // right endpoint
        ele = $(".section__corousal .corousal .slidesNavigation").children().first();
      } else {
        ele = selectedDot.next();
      }

      this.corousalDotsClick({
        target: ele[0]
      });
    }
  }]);

  return EventHandlerService;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventHandlerService);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _services_UIEventHandlerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);





var ShoppingCart = __webpack_require__(3).default;




var UIController =
/*#__PURE__*/
function () {
  function UIController(ShoppingCartInstance, templateServiceInstance, eventHandlerService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UIController);

    this.shoppingCartInstance = ShoppingCartInstance;
    this.instance = templateServiceInstance;
    this.eventHandlerService = eventHandlerService;

    if (!Array.prototype.SortByOrder) {
      Array.prototype.SortByOrder = function () {
        this.sort(function (a, b) {
          return a.order - b.order;
        });
      };
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UIController, [{
    key: "render",
    value: function render() {
      var _this = this;

      var categoryID = this.getUrlParameter("cat_id");
      $().ready(function () {
        // 1. refreshTotalItemsCount
        _this.refreshTotalItemsCount(); //2. Fetch Categories and Populate Category FIlter


        _this.populateCategoryFilters(); //3. Apply Filters


        _this.applyCategoryFilter(categoryID);
      });
    }
    /**
     * method to fetch teh Queyr Params from URL
     * @param {*} name key to search
     */

  }, {
    key: "getUrlParameter",
    value: function getUrlParameter(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(location.search);
      return results === null ? -1 : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    /**
     * This method will filter the Products based on Ctaegory ID.
     * If Cat_ID:-1, fetch ALL
     * @param {*} categoryId
     */

  }, {
    key: "applyCategoryFilter",
    value: function applyCategoryFilter(categoryId) {
      var _this2 = this;

      //1. Select the Ui ELement with input Cat ID;
      $(".plp__section__category__filter__container .filter_list").children().toArray().forEach(function (element) {
        if (element.id == categoryId) {
          var _this2$eventHandlerSe = _this2.eventHandlerService.categoryFilterListItemClick(element),
              filtername = _this2$eventHandlerSe.filtername;

          _this2.eventHandlerService.categoryFilterHeaderClick(filtername, true);
        }
      }); //2. Filter Products

      this.rePopulateProductsList(categoryId);
    }
  }, {
    key: "rePopulateProductsList",
    value: function rePopulateProductsList(categoryId) {
      //1. clear Current Items
      $(".plp__section__products").empty(); //2. populate New Filtered Items

      this.populateProductsFromService(categoryId);
    }
    /**
     * Populate products from Service and Update in Ui
     * @param {*} categoryId
     */

  }, {
    key: "populateProductsFromService",
    value: function populateProductsFromService(categoryId) {
      //1. fetch Items from service
      if (this.shoppingCartInstance.serviceInstance.products && this.shoppingCartInstance.serviceInstance.products.length > 0) {
        var filteredProducts = this.shoppingCartInstance.serviceInstance.products; //  console.log(filteredProducts, categoryId);

        if (categoryId != -1) {
          filteredProducts = this.shoppingCartInstance.serviceInstance.products.filter(function (x) {
            return x.category === categoryId;
          });
        }

        this.populateProductsOnUI(filteredProducts);
        this.registerProductClickEvent(); // this.registerFilterClickEvents();
      } else {
        console.log("nothing");
      }
    }
  }, {
    key: "registerProductClickEvent",
    value: function registerProductClickEvent() {
      var _this3 = this;

      $(".plp__section__products__product-row").on("click", function (e) {
        // console.log(e.target.id);
        if (event.target.nodeName == "BUTTON") _this3.eventHandlerService.productClick(event);
      });
    }
    /**
     * populateProductsOnUI
     * @param {*} arrayOfProducts
     */

  }, {
    key: "populateProductsOnUI",
    value: function populateProductsOnUI(arrayOfProducts) {
      var _this4 = this;

      arrayOfProducts.forEach(function (element) {
        var template = _this4.instance.fetchProductsTemplate(element);

        $(".plp__section__products").append(template);
      });
    }
    /**
     * This method is used to Populate Category Filters
     */

  }, {
    key: "populateCategoryFilters",
    value: function populateCategoryFilters() {
      if (this.shoppingCartInstance.serviceInstance.categories && this.shoppingCartInstance.serviceInstance.categories.length > 0) {
        this.populateCategoryList(this.instance.fetchCategoryFilterTemplate, this.shoppingCartInstance.serviceInstance.categories.filter(function (x) {
          return x.enabled;
        }));
        this.registerFilterClickEvents();
      }
    }
    /**
     * register Click Events of Filter Items
     */

  }, {
    key: "registerFilterClickEvents",
    value: function registerFilterClickEvents() {
      var _this5 = this;

      $(".plp__section__category__filter__container .filter-header").on("click", function () {
        _this5.eventHandlerService.categoryFilterHeaderClick();
      });
      var self = this;
      $(".plp__section__category__filter__container .filter_list li").on("click", function () {
        var _self$eventHandlerSer = self.eventHandlerService.categoryFilterListItemClick(this),
            filtername = _self$eventHandlerSer.filtername,
            categoryId = _self$eventHandlerSer.categoryId;

        self.rePopulateProductsList(categoryId); // close the filter list

        self.eventHandlerService.categoryFilterHeaderClick(filtername);
      });
    }
    /**
     * Methos to Populate the Catgeory List on UI
     * @param {*} templateFn
     * @param {*} arrayOfCategories
     */

  }, {
    key: "populateCategoryList",
    value: function populateCategoryList(templateFn, arrayOfCategories) {
      // console.log(arrayOfCategories);
      arrayOfCategories.SortByOrder();
      var topBarFilter = $(".plp__section__category__filter__container");
      var sideBarFilter = $(".plp__section__category__filter__bar");

      if (topBarFilter) {
        arrayOfCategories.forEach(function (ele) {
          var template = templateFn.topBar(ele);
          $(topBarFilter).children(".filter_list").append(template);
        });
      }

      if (sideBarFilter) {
        console.log("lkjlkj");
      }
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
  }]);

  return UIController;
}();

var cartInstance = JSON.parse(sessionStorage.getItem("cartInstance"));

if (!cartInstance) {
  ShoppingCart.GetCartInstanceAsync().then(function (shoppingCartInstance) {
    var eventHandlerService = new _services_UIEventHandlerService__WEBPACK_IMPORTED_MODULE_3__["default"]();
    var controller = new UIController(shoppingCartInstance, _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__["default"], eventHandlerService);
    sessionStorage.setItem("cartInstance", JSON.stringify(shoppingCartInstance));
    controller.render();
  }).catch(function (err) {
    console.error("Error While Creating Instance", err);
  });
} else {
  var eventHandlerService = new _services_UIEventHandlerService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var controller = new UIController(cartInstance, _services_TemplateService__WEBPACK_IMPORTED_MODULE_2__["default"], eventHandlerService);
  controller.render();
}

/***/ })
/******/ ]);
//# sourceMappingURL=plp.bundle.js.map