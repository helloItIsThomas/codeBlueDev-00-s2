/*!
 * PixiJS - v8.6.6
 * Compiled Wed, 18 Dec 2024 12:46:36 UTC
 *
 * PixiJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";
var __defProp$19 = Object.defineProperty;
var __defProps$r = Object.defineProperties;
var __getOwnPropDescs$r = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$19 = Object.getOwnPropertySymbols;
var __hasOwnProp$19 = Object.prototype.hasOwnProperty;
var __propIsEnum$19 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$19 = (obj, key, value) => key in obj ? __defProp$19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$19 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$19.call(b, prop))
      __defNormalProp$19(a, prop, b[prop]);
  if (__getOwnPropSymbols$19)
    for (var prop of __getOwnPropSymbols$19(b)) {
      if (__propIsEnum$19.call(b, prop))
        __defNormalProp$19(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$r = (a, b) => __defProps$r(a, __getOwnPropDescs$r(b));
var ExtensionType = /* @__PURE__ */ ((ExtensionType2) => {
  ExtensionType2["Application"] = "application";
  ExtensionType2["WebGLPipes"] = "webgl-pipes";
  ExtensionType2["WebGLPipesAdaptor"] = "webgl-pipes-adaptor";
  ExtensionType2["WebGLSystem"] = "webgl-system";
  ExtensionType2["WebGPUPipes"] = "webgpu-pipes";
  ExtensionType2["WebGPUPipesAdaptor"] = "webgpu-pipes-adaptor";
  ExtensionType2["WebGPUSystem"] = "webgpu-system";
  ExtensionType2["CanvasSystem"] = "canvas-system";
  ExtensionType2["CanvasPipesAdaptor"] = "canvas-pipes-adaptor";
  ExtensionType2["CanvasPipes"] = "canvas-pipes";
  ExtensionType2["Asset"] = "asset";
  ExtensionType2["LoadParser"] = "load-parser";
  ExtensionType2["ResolveParser"] = "resolve-parser";
  ExtensionType2["CacheParser"] = "cache-parser";
  ExtensionType2["DetectionParser"] = "detection-parser";
  ExtensionType2["MaskEffect"] = "mask-effect";
  ExtensionType2["BlendMode"] = "blend-mode";
  ExtensionType2["TextureSource"] = "texture-source";
  ExtensionType2["Environment"] = "environment";
  ExtensionType2["ShapeBuilder"] = "shape-builder";
  ExtensionType2["Batcher"] = "batcher";
  return ExtensionType2;
})(ExtensionType || {});
const normalizeExtension = (ext) => {
  if (typeof ext === "function" || typeof ext === "object" && ext.extension) {
    if (!ext.extension) {
      throw new Error("Extension class must have an extension object");
    }
    const metadata = typeof ext.extension !== "object" ? { type: ext.extension } : ext.extension;
    ext = __spreadProps$r(__spreadValues$19({}, metadata), { ref: ext });
  }
  if (typeof ext === "object") {
    ext = __spreadValues$19({}, ext);
  } else {
    throw new Error("Invalid extension type");
  }
  if (typeof ext.type === "string") {
    ext.type = [ext.type];
  }
  return ext;
};
const normalizeExtensionPriority = (ext, defaultPriority) => {
  var _a;
  return (_a = normalizeExtension(ext).priority) != null ? _a : defaultPriority;
};
const extensions = {
  /** @ignore */
  _addHandlers: {},
  /** @ignore */
  _removeHandlers: {},
  /** @ignore */
  _queue: {},
  /**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed.
   * @returns {extensions} For chaining.
   */
  remove(...extensions2) {
    extensions2.map(normalizeExtension).forEach((ext) => {
      ext.type.forEach((type) => {
        var _a, _b;
        return (_b = (_a = this._removeHandlers)[type]) == null ? void 0 : _b.call(_a, ext);
      });
    });
    return this;
  },
  /**
   * Register new extensions with PixiJS.
   * @param extensions - The spread of extensions to add to PixiJS.
   * @returns {extensions} For chaining.
   */
  add(...extensions2) {
    extensions2.map(normalizeExtension).forEach((ext) => {
      ext.type.forEach((type) => {
        var _a, _b;
        const handlers = this._addHandlers;
        const queue = this._queue;
        if (!handlers[type]) {
          queue[type] = queue[type] || [];
          (_a = queue[type]) == null ? void 0 : _a.push(ext);
        } else {
          (_b = handlers[type]) == null ? void 0 : _b.call(handlers, ext);
        }
      });
    });
    return this;
  },
  /**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
   * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
   * @returns {extensions} For chaining.
   */
  handle(type, onAdd, onRemove) {
    var _a;
    const addHandlers = this._addHandlers;
    const removeHandlers = this._removeHandlers;
    if (addHandlers[type] || removeHandlers[type]) {
      throw new Error(`Extension type ${type} already has a handler`);
    }
    addHandlers[type] = onAdd;
    removeHandlers[type] = onRemove;
    const queue = this._queue;
    if (queue[type]) {
      (_a = queue[type]) == null ? void 0 : _a.forEach((ext) => onAdd(ext));
      delete queue[type];
    }
    return this;
  },
  /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns {extensions} For chaining.
   */
  handleByMap(type, map) {
    return this.handle(
      type,
      (extension) => {
        if (extension.name) {
          map[extension.name] = extension.ref;
        }
      },
      (extension) => {
        if (extension.name) {
          delete map[extension.name];
        }
      }
    );
  },
  /**
   * Handle a type, but using a list of extensions with a `name` property.
   * @param type - Type of extension to handle.
   * @param map - The array of named extensions.
   * @param defaultPriority - Fallback priority if none is defined.
   * @returns {extensions} For chaining.
   */
  handleByNamedList(type, map, defaultPriority = -1) {
    return this.handle(
      type,
      (extension) => {
        const index = map.findIndex((item) => item.name === extension.name);
        if (index >= 0)
          return;
        map.push({ name: extension.name, value: extension.ref });
        map.sort((a, b) => normalizeExtensionPriority(b.value, defaultPriority) - normalizeExtensionPriority(a.value, defaultPriority));
      },
      (extension) => {
        const index = map.findIndex((item) => item.name === extension.name);
        if (index !== -1) {
          map.splice(index, 1);
        }
      }
    );
  },
  /**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @param defaultPriority - The default priority to use if none is specified.
   * @returns {extensions} For chaining.
   */
  handleByList(type, list, defaultPriority = -1) {
    return this.handle(
      type,
      (extension) => {
        if (list.includes(extension.ref)) {
          return;
        }
        list.push(extension.ref);
        list.sort((a, b) => normalizeExtensionPriority(b, defaultPriority) - normalizeExtensionPriority(a, defaultPriority));
      },
      (extension) => {
        const index = list.indexOf(extension.ref);
        if (index !== -1) {
          list.splice(index, 1);
        }
      }
    );
  }
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var eventemitter3$1 = {exports: {}};

var eventemitter3 = eventemitter3$1.exports;

(function (module) {
	'use strict';

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	if ('undefined' !== 'object') {
	  module.exports = EventEmitter;
	} 
} (eventemitter3$1));

var eventemitter3Exports = eventemitter3$1.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return "string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return (r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return {r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return {r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return {h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return {r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return {h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return {h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e;},c=function(r){return {h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u;},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return {h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return [e,t[n][1]]}return [null,void 0]},x=function(r){return "string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return {h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return (299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return {h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1};}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i;},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u;},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u;},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r;},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r;},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return "number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t;},r.prototype.hue=function(r){var t=c(this.rgba);return "number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r));});},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};

function namesPlugin(e,f){var a={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var d in a)r[a[d]]=d;var l={};e.prototype.toName=function(f){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return "transparent";var d,i,n=r[this.toHex()];if(n)return n;if(null==f?void 0:f.closest){var o=this.toRgb(),t=1/0,b="black";if(!l.length)for(var c in a)l[c]=new e(a[c]).toRgb();for(var g in a){var u=(d=o,i=l[g],Math.pow(d.r-i.r,2)+Math.pow(d.g-i.g,2)+Math.pow(d.b-i.b,2));u<t&&(t=u,b=g);}return b}};f.string.push([function(f){var r=f.toLowerCase(),d="transparent"===r?"#0000":a[r];return d?new e(d).toRgb():null},"name"]);}

"use strict";
var __defProp$18 = Object.defineProperty;
var __getOwnPropSymbols$18 = Object.getOwnPropertySymbols;
var __hasOwnProp$18 = Object.prototype.hasOwnProperty;
var __propIsEnum$18 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$18 = (obj, key, value) => key in obj ? __defProp$18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$18 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$18.call(b, prop))
      __defNormalProp$18(a, prop, b[prop]);
  if (__getOwnPropSymbols$18)
    for (var prop of __getOwnPropSymbols$18(b)) {
      if (__propIsEnum$18.call(b, prop))
        __defNormalProp$18(a, prop, b[prop]);
    }
  return a;
};
k([namesPlugin]);
const _Color = class _Color {
  /**
   * @param {ColorSource} value - Optional value to use, if not provided, white is used.
   */
  constructor(value = 16777215) {
    this._value = null;
    this._components = new Float32Array(4);
    this._components.fill(1);
    this._int = 16777215;
    this.value = value;
  }
  /** Get red component (0 - 1) */
  get red() {
    return this._components[0];
  }
  /** Get green component (0 - 1) */
  get green() {
    return this._components[1];
  }
  /** Get blue component (0 - 1) */
  get blue() {
    return this._components[2];
  }
  /** Get alpha component (0 - 1) */
  get alpha() {
    return this._components[3];
  }
  /**
   * Set the value, suitable for chaining
   * @param value
   * @see Color.value
   */
  setValue(value) {
    this.value = value;
    return this;
  }
  /**
   * The current color source.
   *
   * When setting:
   * - Setting to an instance of `Color` will copy its color source and components.
   * - Otherwise, `Color` will try to normalize the color source and set the components.
   *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
   *
   * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
   * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
   *
   * When getting:
   * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
   *   {@link Color.premultiply premultiply} or {@link Color.round round}).
   * - Otherwise, the color source used when setting is returned.
   */
  set value(value) {
    if (value instanceof _Color) {
      this._value = this._cloneSource(value._value);
      this._int = value._int;
      this._components.set(value._components);
    } else if (value === null) {
      throw new Error("Cannot set Color#value to null");
    } else if (this._value === null || !this._isSourceEqual(this._value, value)) {
      this._value = this._cloneSource(value);
      this._normalize(this._value);
    }
  }
  get value() {
    return this._value;
  }
  /**
   * Copy a color source internally.
   * @param value - Color source
   */
  _cloneSource(value) {
    if (typeof value === "string" || typeof value === "number" || value instanceof Number || value === null) {
      return value;
    } else if (Array.isArray(value) || ArrayBuffer.isView(value)) {
      return value.slice(0);
    } else if (typeof value === "object" && value !== null) {
      return __spreadValues$18({}, value);
    }
    return value;
  }
  /**
   * Equality check for color sources.
   * @param value1 - First color source
   * @param value2 - Second color source
   * @returns `true` if the color sources are equal, `false` otherwise.
   */
  _isSourceEqual(value1, value2) {
    const type1 = typeof value1;
    const type2 = typeof value2;
    if (type1 !== type2) {
      return false;
    } else if (type1 === "number" || type1 === "string" || value1 instanceof Number) {
      return value1 === value2;
    } else if (Array.isArray(value1) && Array.isArray(value2) || ArrayBuffer.isView(value1) && ArrayBuffer.isView(value2)) {
      if (value1.length !== value2.length) {
        return false;
      }
      return value1.every((v, i) => v === value2[i]);
    } else if (value1 !== null && value2 !== null) {
      const keys1 = Object.keys(value1);
      const keys2 = Object.keys(value2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every((key) => value1[key] === value2[key]);
    }
    return value1 === value2;
  }
  /**
   * Convert to a RGBA color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
   */
  toRgba() {
    const [r, g, b, a] = this._components;
    return { r, g, b, a };
  }
  /**
   * Convert to a RGB color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
   */
  toRgb() {
    const [r, g, b] = this._components;
    return { r, g, b };
  }
  /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
  toRgbaString() {
    const [r, g, b] = this.toUint8RgbArray();
    return `rgba(${r},${g},${b},${this.alpha})`;
  }
  toUint8RgbArray(out) {
    const [r, g, b] = this._components;
    if (!this._arrayRgb) {
      this._arrayRgb = [];
    }
    out || (out = this._arrayRgb);
    out[0] = Math.round(r * 255);
    out[1] = Math.round(g * 255);
    out[2] = Math.round(b * 255);
    return out;
  }
  toArray(out) {
    if (!this._arrayRgba) {
      this._arrayRgba = [];
    }
    out || (out = this._arrayRgba);
    const [r, g, b, a] = this._components;
    out[0] = r;
    out[1] = g;
    out[2] = b;
    out[3] = a;
    return out;
  }
  toRgbArray(out) {
    if (!this._arrayRgb) {
      this._arrayRgb = [];
    }
    out || (out = this._arrayRgb);
    const [r, g, b] = this._components;
    out[0] = r;
    out[1] = g;
    out[2] = b;
    return out;
  }
  /**
   * Convert to a hexadecimal number.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toNumber(); // returns 16777215
   */
  toNumber() {
    return this._int;
  }
  /**
   * Convert to a BGR number
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
   */
  toBgrNumber() {
    const [r, g, b] = this.toUint8RgbArray();
    return (b << 16) + (g << 8) + r;
  }
  /**
   * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
   * @returns {number} - The color as a number in little endian format.
   */
  toLittleEndianNumber() {
    const value = this._int;
    return (value >> 16) + (value & 65280) + ((value & 255) << 16);
  }
  /**
   * Multiply with another color. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param {ColorSource} value - The color to multiply by.
   */
  multiply(value) {
    const [r, g, b, a] = _Color._temp.setValue(value)._components;
    this._components[0] *= r;
    this._components[1] *= g;
    this._components[2] *= b;
    this._components[3] *= a;
    this._refreshInt();
    this._value = null;
    return this;
  }
  /**
   * Converts color to a premultiplied alpha format. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {Color} - Itself.
   */
  premultiply(alpha, applyToRGB = true) {
    if (applyToRGB) {
      this._components[0] *= alpha;
      this._components[1] *= alpha;
      this._components[2] *= alpha;
    }
    this._components[3] = alpha;
    this._refreshInt();
    this._value = null;
    return this;
  }
  /**
   * Premultiplies alpha with current color.
   * @param {number} alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {number} tint multiplied by alpha
   */
  toPremultiplied(alpha, applyToRGB = true) {
    if (alpha === 1) {
      return (255 << 24) + this._int;
    }
    if (alpha === 0) {
      return applyToRGB ? 0 : this._int;
    }
    let r = this._int >> 16 & 255;
    let g = this._int >> 8 & 255;
    let b = this._int & 255;
    if (applyToRGB) {
      r = r * alpha + 0.5 | 0;
      g = g * alpha + 0.5 | 0;
      b = b * alpha + 0.5 | 0;
    }
    return (alpha * 255 << 24) + (r << 16) + (g << 8) + b;
  }
  /**
   * Convert to a hexadecimal string.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHex(); // returns "#ffffff"
   */
  toHex() {
    const hexString = this._int.toString(16);
    return `#${"000000".substring(0, 6 - hexString.length) + hexString}`;
  }
  /**
   * Convert to a hexadecimal string with alpha.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHexa(); // returns "#ffffffff"
   */
  toHexa() {
    const alphaValue = Math.round(this._components[3] * 255);
    const alphaString = alphaValue.toString(16);
    return this.toHex() + "00".substring(0, 2 - alphaString.length) + alphaString;
  }
  /**
   * Set alpha, suitable for chaining.
   * @param alpha
   */
  setAlpha(alpha) {
    this._components[3] = this._clamp(alpha);
    return this;
  }
  /**
   * Normalize the input value into rgba
   * @param value - Input value
   */
  _normalize(value) {
    let r;
    let g;
    let b;
    let a;
    if ((typeof value === "number" || value instanceof Number) && value >= 0 && value <= 16777215) {
      const int = value;
      r = (int >> 16 & 255) / 255;
      g = (int >> 8 & 255) / 255;
      b = (int & 255) / 255;
      a = 1;
    } else if ((Array.isArray(value) || value instanceof Float32Array) && value.length >= 3 && value.length <= 4) {
      value = this._clamp(value);
      [r, g, b, a = 1] = value;
    } else if ((value instanceof Uint8Array || value instanceof Uint8ClampedArray) && value.length >= 3 && value.length <= 4) {
      value = this._clamp(value, 0, 255);
      [r, g, b, a = 255] = value;
      r /= 255;
      g /= 255;
      b /= 255;
      a /= 255;
    } else if (typeof value === "string" || typeof value === "object") {
      if (typeof value === "string") {
        const match = _Color.HEX_PATTERN.exec(value);
        if (match) {
          value = `#${match[2]}`;
        }
      }
      const color = w(value);
      if (color.isValid()) {
        ({ r, g, b, a } = color.rgba);
        r /= 255;
        g /= 255;
        b /= 255;
      }
    }
    if (r !== void 0) {
      this._components[0] = r;
      this._components[1] = g;
      this._components[2] = b;
      this._components[3] = a;
      this._refreshInt();
    } else {
      throw new Error(`Unable to convert color ${value}`);
    }
  }
  /** Refresh the internal color rgb number */
  _refreshInt() {
    this._clamp(this._components);
    const [r, g, b] = this._components;
    this._int = (r * 255 << 16) + (g * 255 << 8) + (b * 255 | 0);
  }
  /**
   * Clamps values to a range. Will override original values
   * @param value - Value(s) to clamp
   * @param min - Minimum value
   * @param max - Maximum value
   */
  _clamp(value, min = 0, max = 1) {
    if (typeof value === "number") {
      return Math.min(Math.max(value, min), max);
    }
    value.forEach((v, i) => {
      value[i] = Math.min(Math.max(v, min), max);
    });
    return value;
  }
  /**
   * Check if the value is a color-like object
   * @param value - Value to check
   * @returns True if the value is a color-like object
   * @static
   * @example
   * import { Color } from 'pixi.js';
   * Color.isColorLike('white'); // returns true
   * Color.isColorLike(0xffffff); // returns true
   * Color.isColorLike([1, 1, 1]); // returns true
   */
  static isColorLike(value) {
    return typeof value === "number" || typeof value === "string" || value instanceof Number || value instanceof _Color || Array.isArray(value) || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Float32Array || value.r !== void 0 && value.g !== void 0 && value.b !== void 0 || value.r !== void 0 && value.g !== void 0 && value.b !== void 0 && value.a !== void 0 || value.h !== void 0 && value.s !== void 0 && value.l !== void 0 || value.h !== void 0 && value.s !== void 0 && value.l !== void 0 && value.a !== void 0 || value.h !== void 0 && value.s !== void 0 && value.v !== void 0 || value.h !== void 0 && value.s !== void 0 && value.v !== void 0 && value.a !== void 0;
  }
};
/**
 * Default Color object for static uses
 * @example
 * import { Color } from 'pixi.js';
 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
 */
_Color.shared = new _Color();
/**
 * Temporary Color object for static uses internally.
 * As to not conflict with Color.shared.
 * @ignore
 */
_Color._temp = new _Color();
/** Pattern for hex strings */
// eslint-disable-next-line @typescript-eslint/naming-convention
_Color.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Color = _Color;

"use strict";
const cullingMixin = {
  cullArea: null,
  cullable: false,
  cullableChildren: true
};

"use strict";
const PI_2 = Math.PI * 2;
const RAD_TO_DEG = 180 / Math.PI;
const DEG_TO_RAD = Math.PI / 180;

"use strict";
class Point {
  /**
   * Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(x = 0, y = 0) {
    /** Position of the point on the x axis */
    this.x = 0;
    /** Position of the point on the y axis */
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  /**
   * Creates a clone of this point
   * @returns A clone of this point
   */
  clone() {
    return new Point(this.x, this.y);
  }
  /**
   * Copies `x` and `y` from the given point into this point
   * @param p - The point to copy from
   * @returns The point instance itself
   */
  copyFrom(p) {
    this.set(p.x, p.y);
    return this;
  }
  /**
   * Copies this point's x and y into the given point (`p`).
   * @param p - The point to copy to. Can be any of type that is or extends `PointData`
   * @returns The point (`p`) with values updated
   */
  copyTo(p) {
    p.set(this.x, this.y);
    return p;
  }
  /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */
  equals(p) {
    return p.x === this.x && p.y === this.y;
  }
  /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the `x` axis
   * @param {number} [y=x] - position of the point on the `y` axis
   * @returns The point instance itself
   */
  set(x = 0, y = x) {
    this.x = x;
    this.y = y;
    return this;
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
  }
  /**
   * A static Point object with `x` and `y` values of `0`. Can be used to avoid creating new objects multiple times.
   * @readonly
   */
  static get shared() {
    tempPoint.x = 0;
    tempPoint.y = 0;
    return tempPoint;
  }
}
const tempPoint = new Point();

"use strict";
class Matrix {
  /**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */
  constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
    /** An array of the current matrix. Only populated when `toArray` is called */
    this.array = null;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  /**
   * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
   *
   * a = array[0]
   * b = array[1]
   * c = array[3]
   * d = array[4]
   * tx = array[2]
   * ty = array[5]
   * @param array - The array that the matrix will be populated from.
   */
  fromArray(array) {
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
  }
  /**
   * Sets the matrix properties.
   * @param a - Matrix component
   * @param b - Matrix component
   * @param c - Matrix component
   * @param d - Matrix component
   * @param tx - Matrix component
   * @param ty - Matrix component
   * @returns This matrix. Good for chaining method calls.
   */
  set(a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  }
  /**
   * Creates an array from the current Matrix object.
   * @param transpose - Whether we need to transpose the matrix or not
   * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
   * @returns The newly created array which contains the matrix
   */
  toArray(transpose, out) {
    if (!this.array) {
      this.array = new Float32Array(9);
    }
    const array = out || this.array;
    if (transpose) {
      array[0] = this.a;
      array[1] = this.b;
      array[2] = 0;
      array[3] = this.c;
      array[4] = this.d;
      array[5] = 0;
      array[6] = this.tx;
      array[7] = this.ty;
      array[8] = 1;
    } else {
      array[0] = this.a;
      array[1] = this.c;
      array[2] = this.tx;
      array[3] = this.b;
      array[4] = this.d;
      array[5] = this.ty;
      array[6] = 0;
      array[7] = 0;
      array[8] = 1;
    }
    return array;
  }
  /**
   * Get a new position with the current transformation applied.
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   * @param pos - The origin
   * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {Point} The new point, transformed through this matrix
   */
  apply(pos, newPos) {
    newPos = newPos || new Point();
    const x = pos.x;
    const y = pos.y;
    newPos.x = this.a * x + this.c * y + this.tx;
    newPos.y = this.b * x + this.d * y + this.ty;
    return newPos;
  }
  /**
   * Get a new position with the inverse of the current transformation applied.
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   * @param pos - The origin
   * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {Point} The new point, inverse-transformed through this matrix
   */
  applyInverse(pos, newPos) {
    newPos = newPos || new Point();
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const tx = this.tx;
    const ty = this.ty;
    const id = 1 / (a * d + c * -b);
    const x = pos.x;
    const y = pos.y;
    newPos.x = d * id * x + -c * id * y + (ty * c - tx * d) * id;
    newPos.y = a * id * y + -b * id * x + (-ty * a + tx * b) * id;
    return newPos;
  }
  /**
   * Translates the matrix on the x and y.
   * @param x - How much to translate x by
   * @param y - How much to translate y by
   * @returns This matrix. Good for chaining method calls.
   */
  translate(x, y) {
    this.tx += x;
    this.ty += y;
    return this;
  }
  /**
   * Applies a scale transformation to the matrix.
   * @param x - The amount to scale horizontally
   * @param y - The amount to scale vertically
   * @returns This matrix. Good for chaining method calls.
   */
  scale(x, y) {
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;
    return this;
  }
  /**
   * Applies a rotation transformation to the matrix.
   * @param angle - The angle in radians.
   * @returns This matrix. Good for chaining method calls.
   */
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const a1 = this.a;
    const c1 = this.c;
    const tx1 = this.tx;
    this.a = a1 * cos - this.b * sin;
    this.b = a1 * sin + this.b * cos;
    this.c = c1 * cos - this.d * sin;
    this.d = c1 * sin + this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;
    return this;
  }
  /**
   * Appends the given Matrix to this Matrix.
   * @param matrix - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */
  append(matrix) {
    const a1 = this.a;
    const b1 = this.b;
    const c1 = this.c;
    const d1 = this.d;
    this.a = matrix.a * a1 + matrix.b * c1;
    this.b = matrix.a * b1 + matrix.b * d1;
    this.c = matrix.c * a1 + matrix.d * c1;
    this.d = matrix.c * b1 + matrix.d * d1;
    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
    return this;
  }
  /**
   * Appends two matrix's and sets the result to this matrix. AB = A * B
   * @param a - The matrix to append.
   * @param b - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */
  appendFrom(a, b) {
    const a1 = a.a;
    const b1 = a.b;
    const c1 = a.c;
    const d1 = a.d;
    const tx = a.tx;
    const ty = a.ty;
    const a2 = b.a;
    const b2 = b.b;
    const c2 = b.c;
    const d2 = b.d;
    this.a = a1 * a2 + b1 * c2;
    this.b = a1 * b2 + b1 * d2;
    this.c = c1 * a2 + d1 * c2;
    this.d = c1 * b2 + d1 * d2;
    this.tx = tx * a2 + ty * c2 + b.tx;
    this.ty = tx * b2 + ty * d2 + b.ty;
    return this;
  }
  /**
   * Sets the matrix based on all the available properties
   * @param x - Position on the x axis
   * @param y - Position on the y axis
   * @param pivotX - Pivot on the x axis
   * @param pivotY - Pivot on the y axis
   * @param scaleX - Scale on the x axis
   * @param scaleY - Scale on the y axis
   * @param rotation - Rotation in radians
   * @param skewX - Skew on the x axis
   * @param skewY - Skew on the y axis
   * @returns This matrix. Good for chaining method calls.
   */
  setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
    this.a = Math.cos(rotation + skewY) * scaleX;
    this.b = Math.sin(rotation + skewY) * scaleX;
    this.c = -Math.sin(rotation - skewX) * scaleY;
    this.d = Math.cos(rotation - skewX) * scaleY;
    this.tx = x - (pivotX * this.a + pivotY * this.c);
    this.ty = y - (pivotX * this.b + pivotY * this.d);
    return this;
  }
  /**
   * Prepends the given Matrix to this Matrix.
   * @param matrix - The matrix to prepend
   * @returns This matrix. Good for chaining method calls.
   */
  prepend(matrix) {
    const tx1 = this.tx;
    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
      const a1 = this.a;
      const c1 = this.c;
      this.a = a1 * matrix.a + this.b * matrix.c;
      this.b = a1 * matrix.b + this.b * matrix.d;
      this.c = c1 * matrix.a + this.d * matrix.c;
      this.d = c1 * matrix.b + this.d * matrix.d;
    }
    this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
    this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
    return this;
  }
  /**
   * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
   * @param transform - The transform to apply the properties to.
   * @returns The transform with the newly applied properties
   */
  decompose(transform) {
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const pivot = transform.pivot;
    const skewX = -Math.atan2(-c, d);
    const skewY = Math.atan2(b, a);
    const delta = Math.abs(skewX + skewY);
    if (delta < 1e-5 || Math.abs(PI_2 - delta) < 1e-5) {
      transform.rotation = skewY;
      transform.skew.x = transform.skew.y = 0;
    } else {
      transform.rotation = 0;
      transform.skew.x = skewX;
      transform.skew.y = skewY;
    }
    transform.scale.x = Math.sqrt(a * a + b * b);
    transform.scale.y = Math.sqrt(c * c + d * d);
    transform.position.x = this.tx + (pivot.x * a + pivot.y * c);
    transform.position.y = this.ty + (pivot.x * b + pivot.y * d);
    return transform;
  }
  /**
   * Inverts this matrix
   * @returns This matrix. Good for chaining method calls.
   */
  invert() {
    const a1 = this.a;
    const b1 = this.b;
    const c1 = this.c;
    const d1 = this.d;
    const tx1 = this.tx;
    const n = a1 * d1 - b1 * c1;
    this.a = d1 / n;
    this.b = -b1 / n;
    this.c = -c1 / n;
    this.d = a1 / n;
    this.tx = (c1 * this.ty - d1 * tx1) / n;
    this.ty = -(a1 * this.ty - b1 * tx1) / n;
    return this;
  }
  /** Checks if this matrix is an identity matrix */
  isIdentity() {
    return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
  }
  /**
   * Resets this Matrix to an identity (default) matrix.
   * @returns This matrix. Good for chaining method calls.
   */
  identity() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
    return this;
  }
  /**
   * Creates a new Matrix object with the same values as this one.
   * @returns A copy of this matrix. Good for chaining method calls.
   */
  clone() {
    const matrix = new Matrix();
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  }
  /**
   * Changes the values of the given matrix to be the same as the ones in this matrix
   * @param matrix - The matrix to copy to.
   * @returns The matrix given in parameter with its values updated.
   */
  copyTo(matrix) {
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;
    return matrix;
  }
  /**
   * Changes the values of the matrix to be the same as the ones in given matrix
   * @param matrix - The matrix to copy from.
   * @returns this
   */
  copyFrom(matrix) {
    this.a = matrix.a;
    this.b = matrix.b;
    this.c = matrix.c;
    this.d = matrix.d;
    this.tx = matrix.tx;
    this.ty = matrix.ty;
    return this;
  }
  /**
   * check to see if two matrices are the same
   * @param matrix - The matrix to compare to.
   */
  equals(matrix) {
    return matrix.a === this.a && matrix.b === this.b && matrix.c === this.c && matrix.d === this.d && matrix.tx === this.tx && matrix.ty === this.ty;
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  /**
   * A default (identity) matrix.
   *
   * This is a shared object, if you want to modify it consider creating a new `Matrix`
   * @readonly
   */
  static get IDENTITY() {
    return identityMatrix$1.identity();
  }
  /**
   * A static Matrix that can be used to avoid creating new objects.
   * Will always ensure the matrix is reset to identity when requested.
   * Use this object for fast but temporary calculations, as it may be mutated later on.
   * This is a different object to the `IDENTITY` object and so can be modified without changing `IDENTITY`.
   * @readonly
   */
  static get shared() {
    return tempMatrix$6.identity();
  }
}
const tempMatrix$6 = new Matrix();
const identityMatrix$1 = new Matrix();

"use strict";
class ObservablePoint {
  /**
   * Creates a new `ObservablePoint`
   * @param observer - Observer to pass to listen for change events.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(observer, x, y) {
    this._x = x || 0;
    this._y = y || 0;
    this._observer = observer;
  }
  /**
   * Creates a clone of this point.
   * @param observer - Optional observer to pass to the new observable point.
   * @returns a copy of this observable point
   */
  clone(observer) {
    return new ObservablePoint(observer != null ? observer : this._observer, this._x, this._y);
  }
  /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=x] - position of the point on the y axis
   * @returns The observable point instance itself
   */
  set(x = 0, y = x) {
    if (this._x !== x || this._y !== y) {
      this._x = x;
      this._y = y;
      this._observer._onUpdate(this);
    }
    return this;
  }
  /**
   * Copies x and y from the given point (`p`)
   * @param p - The point to copy from. Can be any of type that is or extends `PointData`
   * @returns The observable point instance itself
   */
  copyFrom(p) {
    if (this._x !== p.x || this._y !== p.y) {
      this._x = p.x;
      this._y = p.y;
      this._observer._onUpdate(this);
    }
    return this;
  }
  /**
   * Copies this point's x and y into that of the given point (`p`)
   * @param p - The point to copy to. Can be any of type that is or extends `PointData`
   * @returns The point (`p`) with values updated
   */
  copyTo(p) {
    p.set(this._x, this._y);
    return p;
  }
  /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */
  equals(p) {
    return p.x === this._x && p.y === this._y;
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=${0} y=${0} scope=${this._observer}]`;
  }
  /** Position of the observable point on the x axis. */
  get x() {
    return this._x;
  }
  set x(value) {
    if (this._x !== value) {
      this._x = value;
      this._observer._onUpdate(this);
    }
  }
  /** Position of the observable point on the y axis. */
  get y() {
    return this._y;
  }
  set y(value) {
    if (this._y !== value) {
      this._y = value;
      this._observer._onUpdate(this);
    }
  }
}

"use strict";
const uidCache = {
  default: -1
};
function uid$1(name = "default") {
  if (uidCache[name] === void 0) {
    uidCache[name] = -1;
  }
  return ++uidCache[name];
}
function resetUids() {
  for (const key in uidCache) {
    delete uidCache[key];
  }
}

"use strict";
const warnings = {};
const v8_0_0 = "8.0.0";
const v8_3_4 = "8.3.4";
function deprecation(version, message, ignoreDepth = 3) {
  if (warnings[message]) {
    return;
  }
  let stack = new Error().stack;
  if (typeof stack === "undefined") {
    console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
  } else {
    stack = stack.split("\n").splice(ignoreDepth).join("\n");
    if (console.groupCollapsed) {
      console.groupCollapsed(
        "%cPixiJS Deprecation Warning: %c%s",
        "color:#614108;background:#fffbe6",
        "font-weight:normal;color:#614108;background:#fffbe6",
        `${message}
Deprecated since v${version}`
      );
      console.warn(stack);
      console.groupEnd();
    } else {
      console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
      console.warn(stack);
    }
  }
  warnings[message] = true;
}

"use strict";
class Pool {
  /**
   * Constructs a new Pool.
   * @param ClassType - The constructor of the items in the pool.
   * @param {number} [initialSize] - The initial size of the pool.
   */
  constructor(ClassType, initialSize) {
    this._pool = [];
    this._count = 0;
    this._index = 0;
    this._classType = ClassType;
    if (initialSize) {
      this.prepopulate(initialSize);
    }
  }
  /**
   * Prepopulates the pool with a given number of items.
   * @param total - The number of items to add to the pool.
   */
  prepopulate(total) {
    for (let i = 0; i < total; i++) {
      this._pool[this._index++] = new this._classType();
    }
    this._count += total;
  }
  /**
   * Gets an item from the pool. Calls the item's `init` method if it exists.
   * If there are no items left in the pool, a new one will be created.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */
  get(data) {
    var _a;
    let item;
    if (this._index > 0) {
      item = this._pool[--this._index];
    } else {
      item = new this._classType();
    }
    (_a = item.init) == null ? void 0 : _a.call(item, data);
    return item;
  }
  /**
   * Returns an item to the pool. Calls the item's `reset` method if it exists.
   * @param {T} item - The item to return to the pool.
   */
  return(item) {
    var _a;
    (_a = item.reset) == null ? void 0 : _a.call(item);
    this._pool[this._index++] = item;
  }
  /**
   * Gets the number of items in the pool.
   * @readonly
   * @member {number}
   */
  get totalSize() {
    return this._count;
  }
  /**
   * Gets the number of items in the pool that are free to use without needing to create more.
   * @readonly
   * @member {number}
   */
  get totalFree() {
    return this._index;
  }
  /**
   * Gets the number of items in the pool that are currently in use.
   * @readonly
   * @member {number}
   */
  get totalUsed() {
    return this._count - this._index;
  }
  /** clears the pool - mainly used for debugging! */
  clear() {
    this._pool.length = 0;
    this._index = 0;
  }
}

"use strict";
class PoolGroupClass {
  constructor() {
    /**
     * A map to store the pools by their class type.
     * @private
     */
    this._poolsByClass = /* @__PURE__ */ new Map();
  }
  /**
   * Prepopulates a specific pool with a given number of items.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {number} total - The number of items to add to the pool.
   */
  prepopulate(Class, total) {
    const classPool = this.getPool(Class);
    classPool.prepopulate(total);
  }
  /**
   * Gets an item from a specific pool.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */
  get(Class, data) {
    const pool = this.getPool(Class);
    return pool.get(data);
  }
  /**
   * Returns an item to its respective pool.
   * @param {PoolItem} item - The item to return to the pool.
   */
  return(item) {
    const pool = this.getPool(item.constructor);
    pool.return(item);
  }
  /**
   * Gets a specific pool based on the class type.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} ClassType - The constructor of the items in the pool.
   * @returns {Pool<T>} The pool of the given class type.
   */
  getPool(ClassType) {
    if (!this._poolsByClass.has(ClassType)) {
      this._poolsByClass.set(ClassType, new Pool(ClassType));
    }
    return this._poolsByClass.get(ClassType);
  }
  /** gets the usage stats of each pool in the system */
  stats() {
    const stats = {};
    this._poolsByClass.forEach((pool) => {
      const name = stats[pool._classType.name] ? pool._classType.name + pool._classType.ID : pool._classType.name;
      stats[name] = {
        free: pool.totalFree,
        used: pool.totalUsed,
        size: pool.totalSize
      };
    });
    return stats;
  }
}
const BigPool = new PoolGroupClass();

"use strict";
const cacheAsTextureMixin = {
  /**
   * Is this container cached as a texture?
   * @readonly
   * @type {boolean}
   * @memberof scene.Container#
   */
  get isCachedAsTexture() {
    var _a;
    return !!((_a = this.renderGroup) == null ? void 0 : _a.isCachedAsTexture);
  },
  cacheAsTexture(val) {
    if (typeof val === "boolean" && val === false) {
      this.disableRenderGroup();
    } else {
      this.enableRenderGroup();
      this.renderGroup.enableCacheAsTexture(val === true ? {} : val);
    }
  },
  /**
   * Updates the cached texture. Will flag that this container's cached texture needs to be redrawn.
   * This will happen on the next render.
   * @memberof scene.Container#
   */
  updateCacheTexture() {
    var _a;
    (_a = this.renderGroup) == null ? void 0 : _a.updateCacheTexture();
  },
  /**
   * Allows backwards compatibility with pixi.js below version v8. Use `cacheAsTexture` instead.
   * @deprecated
   */
  get cacheAsBitmap() {
    return this.isCachedAsTexture;
  },
  /**
   * @deprecated
   */
  set cacheAsBitmap(val) {
    deprecation("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead.");
    this.cacheAsTexture(val);
  }
};

"use strict";
function removeItems(arr, startIdx, removeCount) {
  const length = arr.length;
  let i;
  if (startIdx >= length || removeCount === 0) {
    return;
  }
  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
  const len = length - removeCount;
  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }
  arr.length = len;
}

"use strict";
const childrenHelperMixin = {
  allowChildren: true,
  /**
   * Removes all children from this container that are within the begin and end indexes.
   * @param beginIndex - The beginning position.
   * @param endIndex - The ending position. Default value is size of the container.
   * @returns - List of removed children
   * @memberof scene.Container#
   */
  removeChildren(beginIndex = 0, endIndex) {
    const end = endIndex != null ? endIndex : this.children.length;
    const range = end - beginIndex;
    const removed = [];
    if (range > 0 && range <= end) {
      for (let i = end - 1; i >= beginIndex; i--) {
        const child = this.children[i];
        if (!child)
          continue;
        removed.push(child);
        child.parent = null;
      }
      removeItems(this.children, beginIndex, end);
      const renderGroup = this.renderGroup || this.parentRenderGroup;
      if (renderGroup) {
        renderGroup.removeChildren(removed);
      }
      for (let i = 0; i < removed.length; ++i) {
        this.emit("childRemoved", removed[i], this, i);
        removed[i].emit("removed", this);
      }
      return removed;
    } else if (range === 0 && this.children.length === 0) {
      return removed;
    }
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  },
  /**
   * Removes a child from the specified index position.
   * @param index - The index to get the child from
   * @returns The child that was removed.
   * @memberof scene.Container#
   */
  removeChildAt(index) {
    const child = this.getChildAt(index);
    return this.removeChild(child);
  },
  /**
   * Returns the child at the specified index
   * @param index - The index to get the child at
   * @returns - The child at the given index, if any.
   * @memberof scene.Container#
   */
  getChildAt(index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`getChildAt: Index (${index}) does not exist.`);
    }
    return this.children[index];
  },
  /**
   * Changes the position of an existing child in the container
   * @param child - The child Container instance for which you want to change the index number
   * @param index - The resulting index number for the child container
   * @memberof scene.Container#
   */
  setChildIndex(child, index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`The index ${index} supplied is out of bounds ${this.children.length}`);
    }
    this.getChildIndex(child);
    this.addChildAt(child, index);
  },
  /**
   * Returns the index position of a child Container instance
   * @param child - The Container instance to identify
   * @returns - The index position of the child container to identify
   * @memberof scene.Container#
   */
  getChildIndex(child) {
    const index = this.children.indexOf(child);
    if (index === -1) {
      throw new Error("The supplied Container must be a child of the caller");
    }
    return index;
  },
  /**
   * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
   * If the child is already in this container, it will be moved to the specified index.
   * @param {Container} child - The child to add.
   * @param {number} index - The absolute index where the child will be positioned at the end of the operation.
   * @returns {Container} The child that was added.
   * @memberof scene.Container#
   */
  addChildAt(child, index) {
    if (!this.allowChildren) {
      deprecation(v8_0_0, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
    }
    const { children } = this;
    if (index < 0 || index > children.length) {
      throw new Error(`${child}addChildAt: The index ${index} supplied is out of bounds ${children.length}`);
    }
    if (child.parent) {
      const currentIndex = child.parent.children.indexOf(child);
      if (child.parent === this && currentIndex === index) {
        return child;
      }
      if (currentIndex !== -1) {
        child.parent.children.splice(currentIndex, 1);
      }
    }
    if (index === children.length) {
      children.push(child);
    } else {
      children.splice(index, 0, child);
    }
    child.parent = this;
    child.didChange = true;
    child._updateFlags = 15;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.addChild(child);
    }
    if (this.sortableChildren)
      this.sortDirty = true;
    this.emit("childAdded", child, this, index);
    child.emit("added", this);
    return child;
  },
  /**
   * Swaps the position of 2 Containers within this container.
   * @param child - First container to swap
   * @param child2 - Second container to swap
   * @memberof scene.Container#
   */
  swapChildren(child, child2) {
    if (child === child2) {
      return;
    }
    const index1 = this.getChildIndex(child);
    const index2 = this.getChildIndex(child2);
    this.children[index1] = child2;
    this.children[index2] = child;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.structureDidChange = true;
    }
    this._didContainerChangeTick++;
  },
  /**
   * Remove the Container from its parent Container. If the Container has no parent, do nothing.
   * @memberof scene.Container#
   */
  removeFromParent() {
    var _a;
    (_a = this.parent) == null ? void 0 : _a.removeChild(this);
  },
  /**
   * Reparent the child to this container, keeping the same worldTransform.
   * @param child - The child to reparent
   * @returns The first child that was reparented.
   * @memberof scene.Container#
   */
  reparentChild(...child) {
    if (child.length === 1) {
      return this.reparentChildAt(child[0], this.children.length);
    }
    child.forEach((c) => this.reparentChildAt(c, this.children.length));
    return child[0];
  },
  /**
   * Reparent the child to this container at the specified index, keeping the same worldTransform.
   * @param child - The child to reparent
   * @param index - The index to reparent the child to
   * @memberof scene.Container#
   */
  reparentChildAt(child, index) {
    if (child.parent === this) {
      this.setChildIndex(child, index);
      return child;
    }
    const childMat = child.worldTransform.clone();
    child.removeFromParent();
    this.addChildAt(child, index);
    const newMatrix = this.worldTransform.clone();
    newMatrix.invert();
    childMat.prepend(newMatrix);
    child.setFromMatrix(childMat);
    return child;
  }
};

"use strict";
class FilterEffect {
  constructor() {
    /** the pipe that knows how to handle this effect */
    this.pipe = "filter";
    /** the priority of this effect */
    this.priority = 1;
  }
  destroy() {
    for (let i = 0; i < this.filters.length; i++) {
      this.filters[i].destroy();
    }
    this.filters = null;
    this.filterArea = null;
  }
}

"use strict";
class MaskEffectManagerClass {
  constructor() {
    /**
     * @private
     */
    this._effectClasses = [];
    this._tests = [];
    this._initialized = false;
  }
  init() {
    if (this._initialized)
      return;
    this._initialized = true;
    this._effectClasses.forEach((test) => {
      this.add({
        test: test.test,
        maskClass: test
      });
    });
  }
  add(test) {
    this._tests.push(test);
  }
  getMaskEffect(item) {
    if (!this._initialized)
      this.init();
    for (let i = 0; i < this._tests.length; i++) {
      const test = this._tests[i];
      if (test.test(item)) {
        return BigPool.get(test.maskClass, item);
      }
    }
    return item;
  }
  returnMaskEffect(effect) {
    BigPool.return(effect);
  }
}
const MaskEffectManager = new MaskEffectManagerClass();
extensions.handleByList(ExtensionType.MaskEffect, MaskEffectManager._effectClasses);

"use strict";
var __defProp$17 = Object.defineProperty;
var __getOwnPropSymbols$17 = Object.getOwnPropertySymbols;
var __hasOwnProp$17 = Object.prototype.hasOwnProperty;
var __propIsEnum$17 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$17 = (obj, key, value) => key in obj ? __defProp$17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$17 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$17.call(b, prop))
      __defNormalProp$17(a, prop, b[prop]);
  if (__getOwnPropSymbols$17)
    for (var prop of __getOwnPropSymbols$17(b)) {
      if (__propIsEnum$17.call(b, prop))
        __defNormalProp$17(a, prop, b[prop]);
    }
  return a;
};
const effectsMixin = {
  _maskEffect: null,
  _maskOptions: {
    inverse: false
  },
  _filterEffect: null,
  /**
   * @todo Needs docs.
   * @memberof scene.Container#
   * @type {Array<Effect>}
   */
  effects: [],
  _markStructureAsChanged() {
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.structureDidChange = true;
    }
  },
  /**
   * @todo Needs docs.
   * @param effect - The effect to add.
   * @memberof scene.Container#
   * @ignore
   */
  addEffect(effect) {
    const index = this.effects.indexOf(effect);
    if (index !== -1)
      return;
    this.effects.push(effect);
    this.effects.sort((a, b) => a.priority - b.priority);
    this._markStructureAsChanged();
    this._updateIsSimple();
  },
  /**
   * @todo Needs docs.
   * @param effect - The effect to remove.
   * @memberof scene.Container#
   * @ignore
   */
  removeEffect(effect) {
    const index = this.effects.indexOf(effect);
    if (index === -1)
      return;
    this.effects.splice(index, 1);
    this._markStructureAsChanged();
    this._updateIsSimple();
  },
  set mask(value) {
    const effect = this._maskEffect;
    if ((effect == null ? void 0 : effect.mask) === value)
      return;
    if (effect) {
      this.removeEffect(effect);
      MaskEffectManager.returnMaskEffect(effect);
      this._maskEffect = null;
    }
    if (value === null || value === void 0)
      return;
    this._maskEffect = MaskEffectManager.getMaskEffect(value);
    this.addEffect(this._maskEffect);
  },
  /**
   * Used to set mask and control mask options.
   * @param options
   * @example
   * import { Graphics, Sprite } from 'pixi.js';
   *
   * const graphics = new Graphics();
   * graphics.beginFill(0xFF3300);
   * graphics.drawRect(50, 250, 100, 100);
   * graphics.endFill();
   *
   * const sprite = new Sprite(texture);
   * sprite.setMask({
   *     mask: graphics,
   *     inverse: true,
   * });
   * @memberof scene.Container#
   */
  setMask(options) {
    this._maskOptions = __spreadValues$17(__spreadValues$17({}, this._maskOptions), options);
    if (options.mask) {
      this.mask = options.mask;
    }
    this._markStructureAsChanged();
  },
  /**
   * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
   * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
   * {@link Graphics} or a {@link Sprite} object. This allows for much faster masking in canvas as it
   * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
   * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
   * To remove a mask, set this property to `null`.
   *
   * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
   * @example
   * import { Graphics, Sprite } from 'pixi.js';
   *
   * const graphics = new Graphics();
   * graphics.beginFill(0xFF3300);
   * graphics.drawRect(50, 250, 100, 100);
   * graphics.endFill();
   *
   * const sprite = new Sprite(texture);
   * sprite.mask = graphics;
   * @memberof scene.Container#
   */
  get mask() {
    var _a;
    return (_a = this._maskEffect) == null ? void 0 : _a.mask;
  },
  set filters(value) {
    var _a;
    if (!Array.isArray(value) && value)
      value = [value];
    const effect = this._filterEffect || (this._filterEffect = new FilterEffect());
    value = value;
    const hasFilters = (value == null ? void 0 : value.length) > 0;
    const hadFilters = ((_a = effect.filters) == null ? void 0 : _a.length) > 0;
    const didChange = hasFilters !== hadFilters;
    value = Array.isArray(value) ? value.slice(0) : value;
    effect.filters = Object.freeze(value);
    if (didChange) {
      if (hasFilters) {
        this.addEffect(effect);
      } else {
        this.removeEffect(effect);
        effect.filters = value != null ? value : null;
      }
    }
  },
  /**
   * Sets the filters for the displayObject.
   * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
   * To remove filters simply set this property to `'null'`.
   * @memberof scene.Container#
   */
  get filters() {
    var _a;
    return (_a = this._filterEffect) == null ? void 0 : _a.filters;
  },
  set filterArea(value) {
    this._filterEffect || (this._filterEffect = new FilterEffect());
    this._filterEffect.filterArea = value;
  },
  /**
   * The area the filter is applied to. This is used as more of an optimization
   * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
   *
   * Also works as an interaction mask.
   * @memberof scene.Container#
   */
  get filterArea() {
    var _a;
    return (_a = this._filterEffect) == null ? void 0 : _a.filterArea;
  }
};

"use strict";
const findMixin = {
  /**
   * The instance label of the object.
   * @memberof scene.Container#
   * @member {string} label
   */
  label: null,
  /**
   * The instance name of the object.
   * @deprecated since 8.0.0
   * @see scene.Container#label
   * @member {string} name
   * @memberof scene.Container#
   */
  get name() {
    deprecation(v8_0_0, "Container.name property has been removed, use Container.label instead");
    return this.label;
  },
  set name(value) {
    deprecation(v8_0_0, "Container.name property has been removed, use Container.label instead");
    this.label = value;
  },
  /**
   * @method getChildByName
   * @deprecated since 8.0.0
   * @param {string} name - Instance name.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @returns {Container} The child with the specified name.
   * @see scene.Container#getChildByLabel
   * @memberof scene.Container#
   */
  getChildByName(name, deep = false) {
    return this.getChildByLabel(name, deep);
  },
  /**
   * Returns the first child in the container with the specified label.
   *
   * Recursive searches are done in a pre-order traversal.
   * @memberof scene.Container#
   * @param {string|RegExp} label - Instance label.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @returns {Container} The child with the specified label.
   */
  getChildByLabel(label, deep = false) {
    const children = this.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.label === label || label instanceof RegExp && label.test(child.label))
        return child;
    }
    if (deep) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const found = child.getChildByLabel(label, true);
        if (found) {
          return found;
        }
      }
    }
    return null;
  },
  /**
   * Returns all children in the container with the specified label.
   * @memberof scene.Container#
   * @param {string|RegExp} label - Instance label.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @param {Container[]} [out=[]] - The array to store matching children in.
   * @returns {Container[]} An array of children with the specified label.
   */
  getChildrenByLabel(label, deep = false, out = []) {
    const children = this.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.label === label || label instanceof RegExp && label.test(child.label)) {
        out.push(child);
      }
    }
    if (deep) {
      for (let i = 0; i < children.length; i++) {
        children[i].getChildrenByLabel(label, true, out);
      }
    }
    return out;
  }
};

"use strict";
const tempPoints = [new Point(), new Point(), new Point(), new Point()];
class Rectangle {
  /**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */
  constructor(x = 0, y = 0, width = 0, height = 0) {
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'rectangle'
     */
    this.type = "rectangle";
    this.x = Number(x);
    this.y = Number(y);
    this.width = Number(width);
    this.height = Number(height);
  }
  /** Returns the left edge of the rectangle. */
  get left() {
    return this.x;
  }
  /** Returns the right edge of the rectangle. */
  get right() {
    return this.x + this.width;
  }
  /** Returns the top edge of the rectangle. */
  get top() {
    return this.y;
  }
  /** Returns the bottom edge of the rectangle. */
  get bottom() {
    return this.y + this.height;
  }
  /** Determines whether the Rectangle is empty. */
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
  /** A constant empty rectangle. This is a new object every time the property is accessed */
  static get EMPTY() {
    return new Rectangle(0, 0, 0, 0);
  }
  /**
   * Creates a clone of this Rectangle
   * @returns a copy of the rectangle
   */
  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
  /**
   * Converts a Bounds object to a Rectangle object.
   * @param bounds - The bounds to copy and convert to a rectangle.
   * @returns Returns itself.
   */
  copyFromBounds(bounds) {
    this.x = bounds.minX;
    this.y = bounds.minY;
    this.width = bounds.maxX - bounds.minX;
    this.height = bounds.maxY - bounds.minY;
    return this;
  }
  /**
   * Copies another rectangle to this one.
   * @param rectangle - The rectangle to copy from.
   * @returns Returns itself.
   */
  copyFrom(rectangle) {
    this.x = rectangle.x;
    this.y = rectangle.y;
    this.width = rectangle.width;
    this.height = rectangle.height;
    return this;
  }
  /**
   * Copies this rectangle to another one.
   * @param rectangle - The rectangle to copy to.
   * @returns Returns given parameter.
   */
  copyTo(rectangle) {
    rectangle.copyFrom(this);
    return rectangle;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this Rectangle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rectangle
   */
  contains(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (x >= this.x && x < this.x + this.width) {
      if (y >= this.y && y < this.y + this.height) {
        return true;
      }
    }
    return false;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @param alignment - The alignment of the stroke, 0.5 by default
   * @returns Whether the x/y coordinates are within this rectangle
   */
  strokeContains(x, y, strokeWidth, alignment = 0.5) {
    const { width, height } = this;
    if (width <= 0 || height <= 0)
      return false;
    const _x = this.x;
    const _y = this.y;
    const strokeWidthOuter = strokeWidth * (1 - alignment);
    const strokeWidthInner = strokeWidth - strokeWidthOuter;
    const outerLeft = _x - strokeWidthOuter;
    const outerRight = _x + width + strokeWidthOuter;
    const outerTop = _y - strokeWidthOuter;
    const outerBottom = _y + height + strokeWidthOuter;
    const innerLeft = _x + strokeWidthInner;
    const innerRight = _x + width - strokeWidthInner;
    const innerTop = _y + strokeWidthInner;
    const innerBottom = _y + height - strokeWidthInner;
    return x >= outerLeft && x <= outerRight && y >= outerTop && y <= outerBottom && !(x > innerLeft && x < innerRight && y > innerTop && y < innerBottom);
  }
  /**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   * Returns true only if the area of the intersection is >0, this means that Rectangles
   * sharing a side are not overlapping. Another side effect is that an arealess rectangle
   * (width or height equal to zero) can't intersect any other rectangle.
   * @param {Rectangle} other - The Rectangle to intersect with `this`.
   * @param {Matrix} transform - The transformation matrix of `other`.
   * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
   */
  intersects(other, transform) {
    if (!transform) {
      const x02 = this.x < other.x ? other.x : this.x;
      const x12 = this.right > other.right ? other.right : this.right;
      if (x12 <= x02) {
        return false;
      }
      const y02 = this.y < other.y ? other.y : this.y;
      const y12 = this.bottom > other.bottom ? other.bottom : this.bottom;
      return y12 > y02;
    }
    const x0 = this.left;
    const x1 = this.right;
    const y0 = this.top;
    const y1 = this.bottom;
    if (x1 <= x0 || y1 <= y0) {
      return false;
    }
    const lt = tempPoints[0].set(other.left, other.top);
    const lb = tempPoints[1].set(other.left, other.bottom);
    const rt = tempPoints[2].set(other.right, other.top);
    const rb = tempPoints[3].set(other.right, other.bottom);
    if (rt.x <= lt.x || lb.y <= lt.y) {
      return false;
    }
    const s = Math.sign(transform.a * transform.d - transform.b * transform.c);
    if (s === 0) {
      return false;
    }
    transform.apply(lt, lt);
    transform.apply(lb, lb);
    transform.apply(rt, rt);
    transform.apply(rb, rb);
    if (Math.max(lt.x, lb.x, rt.x, rb.x) <= x0 || Math.min(lt.x, lb.x, rt.x, rb.x) >= x1 || Math.max(lt.y, lb.y, rt.y, rb.y) <= y0 || Math.min(lt.y, lb.y, rt.y, rb.y) >= y1) {
      return false;
    }
    const nx = s * (lb.y - lt.y);
    const ny = s * (lt.x - lb.x);
    const n00 = nx * x0 + ny * y0;
    const n10 = nx * x1 + ny * y0;
    const n01 = nx * x0 + ny * y1;
    const n11 = nx * x1 + ny * y1;
    if (Math.max(n00, n10, n01, n11) <= nx * lt.x + ny * lt.y || Math.min(n00, n10, n01, n11) >= nx * rb.x + ny * rb.y) {
      return false;
    }
    const mx = s * (lt.y - rt.y);
    const my = s * (rt.x - lt.x);
    const m00 = mx * x0 + my * y0;
    const m10 = mx * x1 + my * y0;
    const m01 = mx * x0 + my * y1;
    const m11 = mx * x1 + my * y1;
    if (Math.max(m00, m10, m01, m11) <= mx * lt.x + my * lt.y || Math.min(m00, m10, m01, m11) >= mx * rb.x + my * rb.y) {
      return false;
    }
    return true;
  }
  /**
   * Pads the rectangle making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   * @returns Returns itself.
   */
  pad(paddingX = 0, paddingY = paddingX) {
    this.x -= paddingX;
    this.y -= paddingY;
    this.width += paddingX * 2;
    this.height += paddingY * 2;
    return this;
  }
  /**
   * Fits this rectangle around the passed one.
   * @param rectangle - The rectangle to fit.
   * @returns Returns itself.
   */
  fit(rectangle) {
    const x1 = Math.max(this.x, rectangle.x);
    const x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
    const y1 = Math.max(this.y, rectangle.y);
    const y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
    this.x = x1;
    this.width = Math.max(x2 - x1, 0);
    this.y = y1;
    this.height = Math.max(y2 - y1, 0);
    return this;
  }
  /**
   * Enlarges rectangle that way its corners lie on grid
   * @param resolution - resolution
   * @param eps - precision
   * @returns Returns itself.
   */
  ceil(resolution = 1, eps = 1e-3) {
    const x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
    const y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
    this.x = Math.floor((this.x + eps) * resolution) / resolution;
    this.y = Math.floor((this.y + eps) * resolution) / resolution;
    this.width = x2 - this.x;
    this.height = y2 - this.y;
    return this;
  }
  /**
   * Enlarges this rectangle to include the passed rectangle.
   * @param rectangle - The rectangle to include.
   * @returns Returns itself.
   */
  enlarge(rectangle) {
    const x1 = Math.min(this.x, rectangle.x);
    const x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
    const y1 = Math.min(this.y, rectangle.y);
    const y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
    this.x = x1;
    this.width = x2 - x1;
    this.y = y1;
    this.height = y2 - y1;
    return this;
  }
  /**
   * Returns the framing rectangle of the rectangle as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */
  getBounds(out) {
    out || (out = new Rectangle());
    out.copyFrom(this);
    return out;
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}

"use strict";
const defaultMatrix = new Matrix();
class Bounds {
  constructor(minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity) {
    /** @default Infinity */
    this.minX = Infinity;
    /** @default Infinity */
    this.minY = Infinity;
    /** @default -Infinity */
    this.maxX = -Infinity;
    /** @default -Infinity */
    this.maxY = -Infinity;
    this.matrix = defaultMatrix;
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  /**
   * Checks if bounds are empty.
   * @returns - True if empty.
   */
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  /** The bounding rectangle of the bounds. */
  get rectangle() {
    if (!this._rectangle) {
      this._rectangle = new Rectangle();
    }
    const rectangle = this._rectangle;
    if (this.minX > this.maxX || this.minY > this.maxY) {
      rectangle.x = 0;
      rectangle.y = 0;
      rectangle.width = 0;
      rectangle.height = 0;
    } else {
      rectangle.copyFromBounds(this);
    }
    return rectangle;
  }
  /** Clears the bounds and resets. */
  clear() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.matrix = defaultMatrix;
    return this;
  }
  /**
   * Sets the bounds.
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */
  set(x0, y0, x1, y1) {
    this.minX = x0;
    this.minY = y0;
    this.maxX = x1;
    this.maxY = y1;
  }
  /**
   * Adds sprite frame
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   * @param matrix
   */
  addFrame(x0, y0, x1, y1, matrix) {
    matrix || (matrix = this.matrix);
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    let x = a * x0 + c * y0 + tx;
    let y = b * x0 + d * y0 + ty;
    if (x < minX)
      minX = x;
    if (y < minY)
      minY = y;
    if (x > maxX)
      maxX = x;
    if (y > maxY)
      maxY = y;
    x = a * x1 + c * y0 + tx;
    y = b * x1 + d * y0 + ty;
    if (x < minX)
      minX = x;
    if (y < minY)
      minY = y;
    if (x > maxX)
      maxX = x;
    if (y > maxY)
      maxY = y;
    x = a * x0 + c * y1 + tx;
    y = b * x0 + d * y1 + ty;
    if (x < minX)
      minX = x;
    if (y < minY)
      minY = y;
    if (x > maxX)
      maxX = x;
    if (y > maxY)
      maxY = y;
    x = a * x1 + c * y1 + tx;
    y = b * x1 + d * y1 + ty;
    if (x < minX)
      minX = x;
    if (y < minY)
      minY = y;
    if (x > maxX)
      maxX = x;
    if (y > maxY)
      maxY = y;
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  /**
   * Adds a rectangle to the bounds.
   * @param rect - The rectangle to be added.
   * @param matrix - The matrix to apply to the bounds.
   */
  addRect(rect, matrix) {
    this.addFrame(rect.x, rect.y, rect.x + rect.width, rect.y + rect.height, matrix);
  }
  /**
   * Adds other {@link Bounds}.
   * @param bounds - The Bounds to be added
   * @param matrix
   */
  addBounds(bounds, matrix) {
    this.addFrame(bounds.minX, bounds.minY, bounds.maxX, bounds.maxY, matrix);
  }
  /**
   * Adds other Bounds, masked with Bounds.
   * @param mask - The Bounds to be added.
   */
  addBoundsMask(mask) {
    this.minX = this.minX > mask.minX ? this.minX : mask.minX;
    this.minY = this.minY > mask.minY ? this.minY : mask.minY;
    this.maxX = this.maxX < mask.maxX ? this.maxX : mask.maxX;
    this.maxY = this.maxY < mask.maxY ? this.maxY : mask.maxY;
  }
  /**
   * Adds other Bounds, multiplied with matrix.
   * @param matrix - The matrix to apply to the bounds.
   */
  applyMatrix(matrix) {
    const minX = this.minX;
    const minY = this.minY;
    const maxX = this.maxX;
    const maxY = this.maxY;
    const { a, b, c, d, tx, ty } = matrix;
    let x = a * minX + c * minY + tx;
    let y = b * minX + d * minY + ty;
    this.minX = x;
    this.minY = y;
    this.maxX = x;
    this.maxY = y;
    x = a * maxX + c * minY + tx;
    y = b * maxX + d * minY + ty;
    this.minX = x < this.minX ? x : this.minX;
    this.minY = y < this.minY ? y : this.minY;
    this.maxX = x > this.maxX ? x : this.maxX;
    this.maxY = y > this.maxY ? y : this.maxY;
    x = a * minX + c * maxY + tx;
    y = b * minX + d * maxY + ty;
    this.minX = x < this.minX ? x : this.minX;
    this.minY = y < this.minY ? y : this.minY;
    this.maxX = x > this.maxX ? x : this.maxX;
    this.maxY = y > this.maxY ? y : this.maxY;
    x = a * maxX + c * maxY + tx;
    y = b * maxX + d * maxY + ty;
    this.minX = x < this.minX ? x : this.minX;
    this.minY = y < this.minY ? y : this.minY;
    this.maxX = x > this.maxX ? x : this.maxX;
    this.maxY = y > this.maxY ? y : this.maxY;
  }
  /**
   * Resizes the bounds object to include the given rectangle.
   * @param rect - The rectangle to be included.
   */
  fit(rect) {
    if (this.minX < rect.left)
      this.minX = rect.left;
    if (this.maxX > rect.right)
      this.maxX = rect.right;
    if (this.minY < rect.top)
      this.minY = rect.top;
    if (this.maxY > rect.bottom)
      this.maxY = rect.bottom;
    return this;
  }
  /**
   * Resizes the bounds object to include the given bounds.
   * @param left - The left value of the bounds.
   * @param right - The right value of the bounds.
   * @param top - The top value of the bounds.
   * @param bottom - The bottom value of the bounds.
   */
  fitBounds(left, right, top, bottom) {
    if (this.minX < left)
      this.minX = left;
    if (this.maxX > right)
      this.maxX = right;
    if (this.minY < top)
      this.minY = top;
    if (this.maxY > bottom)
      this.maxY = bottom;
    return this;
  }
  /**
   * Pads bounds object, making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   */
  pad(paddingX, paddingY = paddingX) {
    this.minX -= paddingX;
    this.maxX += paddingX;
    this.minY -= paddingY;
    this.maxY += paddingY;
    return this;
  }
  /** Ceils the bounds. */
  ceil() {
    this.minX = Math.floor(this.minX);
    this.minY = Math.floor(this.minY);
    this.maxX = Math.ceil(this.maxX);
    this.maxY = Math.ceil(this.maxY);
    return this;
  }
  /** Clones the bounds. */
  clone() {
    return new Bounds(this.minX, this.minY, this.maxX, this.maxY);
  }
  /**
   * Scales the bounds by the given values
   * @param x - The X value to scale by.
   * @param y - The Y value to scale by.
   */
  scale(x, y = x) {
    this.minX *= x;
    this.minY *= y;
    this.maxX *= x;
    this.maxY *= y;
    return this;
  }
  /** the x value of the bounds. */
  get x() {
    return this.minX;
  }
  set x(value) {
    const width = this.maxX - this.minX;
    this.minX = value;
    this.maxX = value + width;
  }
  /** the y value of the bounds. */
  get y() {
    return this.minY;
  }
  set y(value) {
    const height = this.maxY - this.minY;
    this.minY = value;
    this.maxY = value + height;
  }
  /** the width value of the bounds. */
  get width() {
    return this.maxX - this.minX;
  }
  set width(value) {
    this.maxX = this.minX + value;
  }
  /** the height value of the bounds. */
  get height() {
    return this.maxY - this.minY;
  }
  set height(value) {
    this.maxY = this.minY + value;
  }
  /** the left value of the bounds. */
  get left() {
    return this.minX;
  }
  /** the right value of the bounds. */
  get right() {
    return this.maxX;
  }
  /** the top value of the bounds. */
  get top() {
    return this.minY;
  }
  /** the bottom value of the bounds. */
  get bottom() {
    return this.maxY;
  }
  /** Is the bounds positive. */
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
  }
  get isValid() {
    return this.minX + this.minY !== Infinity;
  }
  /**
   * Adds screen vertices from array
   * @param vertexData - calculated vertices
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   * @param matrix
   */
  addVertexData(vertexData, beginOffset, endOffset, matrix) {
    let minX = this.minX;
    let minY = this.minY;
    let maxX = this.maxX;
    let maxY = this.maxY;
    matrix || (matrix = this.matrix);
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    for (let i = beginOffset; i < endOffset; i += 2) {
      const localX = vertexData[i];
      const localY = vertexData[i + 1];
      const x = a * localX + c * localY + tx;
      const y = b * localX + d * localY + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
    }
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  /**
   * Checks if the point is contained within the bounds.
   * @param x - x coordinate
   * @param y - y coordinate
   */
  containsPoint(x, y) {
    if (this.minX <= x && this.minY <= y && this.maxX >= x && this.maxY >= y) {
      return true;
    }
    return false;
  }
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
  }
  /**
   * Copies the bounds from another bounds object.
   * @param bounds - The bounds to copy from.
   * @returns - This bounds object.
   */
  copyFrom(bounds) {
    this.minX = bounds.minX;
    this.minY = bounds.minY;
    this.maxX = bounds.maxX;
    this.maxY = bounds.maxY;
    return this;
  }
}

"use strict";
const matrixPool = new Pool(Matrix);
const boundsPool = new Pool(Bounds);

"use strict";
function getGlobalBounds(target, skipUpdateTransform, bounds) {
  bounds.clear();
  let parentTransform;
  let pooledMatrix;
  if (target.parent) {
    if (!skipUpdateTransform) {
      pooledMatrix = matrixPool.get().identity();
      parentTransform = updateTransformBackwards(target, pooledMatrix);
    } else {
      parentTransform = target.parent.worldTransform;
    }
  } else {
    parentTransform = Matrix.IDENTITY;
  }
  _getGlobalBounds(target, bounds, parentTransform, skipUpdateTransform);
  if (pooledMatrix) {
    matrixPool.return(pooledMatrix);
  }
  if (!bounds.isValid) {
    bounds.set(0, 0, 0, 0);
  }
  return bounds;
}
function _getGlobalBounds(target, bounds, parentTransform, skipUpdateTransform) {
  var _a, _b;
  if (!target.visible || !target.measurable)
    return;
  let worldTransform;
  if (!skipUpdateTransform) {
    target.updateLocalTransform();
    worldTransform = matrixPool.get();
    worldTransform.appendFrom(target.localTransform, parentTransform);
  } else {
    worldTransform = target.worldTransform;
  }
  const parentBounds = bounds;
  const preserveBounds = !!target.effects.length;
  if (preserveBounds) {
    bounds = boundsPool.get().clear();
  }
  if (target.boundsArea) {
    bounds.addRect(target.boundsArea, worldTransform);
  } else {
    if (target.bounds) {
      bounds.matrix = worldTransform;
      bounds.addBounds(target.bounds);
    }
    for (let i = 0; i < target.children.length; i++) {
      _getGlobalBounds(target.children[i], bounds, worldTransform, skipUpdateTransform);
    }
  }
  if (preserveBounds) {
    for (let i = 0; i < target.effects.length; i++) {
      (_b = (_a = target.effects[i]).addBounds) == null ? void 0 : _b.call(_a, bounds);
    }
    parentBounds.addBounds(bounds, Matrix.IDENTITY);
    boundsPool.return(bounds);
  }
  if (!skipUpdateTransform) {
    matrixPool.return(worldTransform);
  }
}
function updateTransformBackwards(target, parentTransform) {
  const parent = target.parent;
  if (parent) {
    updateTransformBackwards(parent, parentTransform);
    parent.updateLocalTransform();
    parentTransform.append(parent.localTransform);
  }
  return parentTransform;
}

"use strict";
function multiplyHexColors(color1, color2) {
  if (color1 === 16777215 || !color2)
    return color2;
  if (color2 === 16777215 || !color1)
    return color1;
  const r1 = color1 >> 16 & 255;
  const g1 = color1 >> 8 & 255;
  const b1 = color1 & 255;
  const r2 = color2 >> 16 & 255;
  const g2 = color2 >> 8 & 255;
  const b2 = color2 & 255;
  const r = r1 * r2 / 255 | 0;
  const g = g1 * g2 / 255 | 0;
  const b = b1 * b2 / 255 | 0;
  return (r << 16) + (g << 8) + b;
}

"use strict";
const WHITE_BGR = 16777215;
function multiplyColors(localBGRColor, parentBGRColor) {
  if (localBGRColor === WHITE_BGR) {
    return parentBGRColor;
  }
  if (parentBGRColor === WHITE_BGR) {
    return localBGRColor;
  }
  return multiplyHexColors(localBGRColor, parentBGRColor);
}

"use strict";
function bgr2rgb(color) {
  return ((color & 255) << 16) + (color & 65280) + (color >> 16 & 255);
}
const getGlobalMixin = {
  /**
   * Returns the global (compound) alpha of the container within the scene.
   * @param skipUpdate - Performance optimization flag:
   *   - If false (default): Recalculates the entire alpha chain through parents for accuracy
   *   - If true: Uses cached worldAlpha from the last render pass for better performance
   * @returns The resulting alpha value (between 0 and 1)
   * @example
   * // Accurate but slower - recalculates entire alpha chain
   * const preciseAlpha = container.getGlobalAlpha();
   *
   * // Faster but may be outdated - uses cached alpha
   * const cachedAlpha = container.getGlobalAlpha(true);
   */
  getGlobalAlpha(skipUpdate) {
    if (skipUpdate) {
      if (this.renderGroup) {
        return this.renderGroup.worldAlpha;
      }
      if (this.parentRenderGroup) {
        return this.parentRenderGroup.worldAlpha * this.alpha;
      }
      return this.alpha;
    }
    let alpha = this.alpha;
    let current = this.parent;
    while (current) {
      alpha *= current.alpha;
      current = current.parent;
    }
    return alpha;
  },
  /**
   * Returns the global transform matrix of the container within the scene.
   * @param matrix - Optional matrix to store the result. If not provided, a new Matrix will be created.
   * @param skipUpdate - Performance optimization flag:
   *   - If false (default): Recalculates the entire transform chain for accuracy
   *   - If true: Uses cached worldTransform from the last render pass for better performance
   * @returns The resulting transformation matrix (either the input matrix or a new one)
   * @example
   * // Accurate but slower - recalculates entire transform chain
   * const preciseTransform = container.getGlobalTransform();
   *
   * // Faster but may be outdated - uses cached transform
   * const cachedTransform = container.getGlobalTransform(undefined, true);
   *
   * // Reuse existing matrix
   * const existingMatrix = new Matrix();
   * container.getGlobalTransform(existingMatrix);
   */
  getGlobalTransform(matrix, skipUpdate) {
    if (skipUpdate) {
      return matrix.copyFrom(this.worldTransform);
    }
    this.updateLocalTransform();
    const parentTransform = updateTransformBackwards(this, matrixPool.get().identity());
    matrix.appendFrom(this.localTransform, parentTransform);
    matrixPool.return(parentTransform);
    return matrix;
  },
  /**
   * Returns the global (compound) tint color of the container within the scene.
   * @param skipUpdate - Performance optimization flag:
   *   - If false (default): Recalculates the entire tint chain through parents for accuracy
   *   - If true: Uses cached worldColor from the last render pass for better performance
   * @returns The resulting tint color as a 24-bit RGB number (0xRRGGBB)
   * @example
   * // Accurate but slower - recalculates entire tint chain
   * const preciseTint = container.getGlobalTint();
   *
   * // Faster but may be outdated - uses cached tint
   * const cachedTint = container.getGlobalTint(true);
   */
  getGlobalTint(skipUpdate) {
    if (skipUpdate) {
      if (this.renderGroup) {
        return bgr2rgb(this.renderGroup.worldColor);
      }
      if (this.parentRenderGroup) {
        return bgr2rgb(
          multiplyColors(this.localColor, this.parentRenderGroup.worldColor)
        );
      }
      return this.tint;
    }
    let color = this.localColor;
    let parent = this.parent;
    while (parent) {
      color = multiplyColors(color, parent.localColor);
      parent = parent.parent;
    }
    return bgr2rgb(color);
  }
};

"use strict";
let warnCount = 0;
const maxWarnings = 500;
function warn(...args) {
  if (warnCount === maxWarnings)
    return;
  warnCount++;
  if (warnCount === maxWarnings) {
    console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.");
  } else {
    console.warn("PixiJS Warning: ", ...args);
  }
}

"use strict";
function getLocalBounds(target, bounds, relativeMatrix) {
  bounds.clear();
  relativeMatrix || (relativeMatrix = Matrix.IDENTITY);
  _getLocalBounds(target, bounds, relativeMatrix, target, true);
  if (!bounds.isValid) {
    bounds.set(0, 0, 0, 0);
  }
  return bounds;
}
function _getLocalBounds(target, bounds, parentTransform, rootContainer, isRoot) {
  var _a, _b;
  let relativeTransform;
  if (!isRoot) {
    if (!target.visible || !target.measurable)
      return;
    target.updateLocalTransform();
    const localTransform = target.localTransform;
    relativeTransform = matrixPool.get();
    relativeTransform.appendFrom(localTransform, parentTransform);
  } else {
    relativeTransform = matrixPool.get();
    relativeTransform = parentTransform.copyTo(relativeTransform);
  }
  const parentBounds = bounds;
  const preserveBounds = !!target.effects.length;
  if (preserveBounds) {
    bounds = boundsPool.get().clear();
  }
  if (target.boundsArea) {
    bounds.addRect(target.boundsArea, relativeTransform);
  } else {
    if (target.renderPipeId) {
      bounds.matrix = relativeTransform;
      bounds.addBounds(target.bounds);
    }
    const children = target.children;
    for (let i = 0; i < children.length; i++) {
      _getLocalBounds(children[i], bounds, relativeTransform, rootContainer, false);
    }
  }
  if (preserveBounds) {
    for (let i = 0; i < target.effects.length; i++) {
      (_b = (_a = target.effects[i]).addLocalBounds) == null ? void 0 : _b.call(_a, bounds, rootContainer);
    }
    parentBounds.addBounds(bounds, Matrix.IDENTITY);
    boundsPool.return(bounds);
  }
  matrixPool.return(relativeTransform);
}
function getParent(target, root, matrix) {
  const parent = target.parent;
  if (!parent) {
    warn("Item is not inside the root container");
    return;
  }
  if (parent !== root) {
    getParent(parent, root, matrix);
    parent.updateLocalTransform();
    matrix.append(parent.localTransform);
  }
}

"use strict";
function checkChildrenDidChange(container, previousData) {
  const children = container.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const uid = child.uid;
    const didChange = (child._didViewChangeTick & 65535) << 16 | child._didContainerChangeTick & 65535;
    const index = previousData.index;
    if (previousData.data[index] !== uid || previousData.data[index + 1] !== didChange) {
      previousData.data[previousData.index] = uid;
      previousData.data[previousData.index + 1] = didChange;
      previousData.didChange = true;
    }
    previousData.index = index + 2;
    if (child.children.length) {
      checkChildrenDidChange(child, previousData);
    }
  }
  return previousData.didChange;
}

"use strict";
const tempMatrix$5 = new Matrix();
const measureMixin = {
  _localBoundsCacheId: -1,
  _localBoundsCacheData: null,
  _setWidth(value, localWidth) {
    const sign = Math.sign(this.scale.x) || 1;
    if (localWidth !== 0) {
      this.scale.x = value / localWidth * sign;
    } else {
      this.scale.x = sign;
    }
  },
  _setHeight(value, localHeight) {
    const sign = Math.sign(this.scale.y) || 1;
    if (localHeight !== 0) {
      this.scale.y = value / localHeight * sign;
    } else {
      this.scale.y = sign;
    }
  },
  /**
   * Retrieves the local bounds of the container as a Bounds object.
   * @returns - The bounding area.
   * @memberof scene.Container#
   */
  getLocalBounds() {
    if (!this._localBoundsCacheData) {
      this._localBoundsCacheData = {
        data: [],
        index: 1,
        didChange: false,
        localBounds: new Bounds()
      };
    }
    const localBoundsCacheData = this._localBoundsCacheData;
    localBoundsCacheData.index = 1;
    localBoundsCacheData.didChange = false;
    if (localBoundsCacheData.data[0] !== this._didViewChangeTick) {
      localBoundsCacheData.didChange = true;
      localBoundsCacheData.data[0] = this._didViewChangeTick;
    }
    checkChildrenDidChange(this, localBoundsCacheData);
    if (localBoundsCacheData.didChange) {
      getLocalBounds(this, localBoundsCacheData.localBounds, tempMatrix$5);
    }
    return localBoundsCacheData.localBounds;
  },
  /**
   * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link Rectangle}.
   * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
   *  being updated. This means the calculation returned MAY be out of date BUT will give you a
   *  nice performance boost.
   * @param bounds - Optional bounds to store the result of the bounds calculation.
   * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
   * @memberof scene.Container#
   */
  getBounds(skipUpdate, bounds) {
    return getGlobalBounds(this, skipUpdate, bounds || new Bounds());
  }
};

"use strict";
const onRenderMixin = {
  _onRender: null,
  set onRender(func) {
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (!func) {
      if (this._onRender) {
        renderGroup == null ? void 0 : renderGroup.removeOnRender(this);
      }
      this._onRender = null;
      return;
    }
    if (!this._onRender) {
      renderGroup == null ? void 0 : renderGroup.addOnRender(this);
    }
    this._onRender = func;
  },
  /**
   * This callback is used when the container is rendered. This is where you should add your custom
   * logic that is needed to be run every frame.
   *
   * In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
   * and "updateTransform" is no longer called every frame
   * @example
   * const container = new Container();
   * container.onRender = () => {
   *    container.rotation += 0.01;
   * };
   * @memberof scene.Container#
   */
  get onRender() {
    return this._onRender;
  }
};

"use strict";
const sortMixin = {
  _zIndex: 0,
  /**
   * Should children be sorted by zIndex at the next render call.
   *
   * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
   * @type {boolean}
   * @memberof scene.Container#
   */
  sortDirty: false,
  /**
   * If set to true, the container will sort its children by `zIndex` value
   * when the next render is called, or manually if `sortChildren()` is called.
   *
   * This actually changes the order of elements in the array, so should be treated
   * as a basic solution that is not performant compared to other solutions,
   * such as {@link https://github.com/pixijs/layers PixiJS Layers}
   *
   * Also be aware of that this may not work nicely with the `addChildAt()` function,
   * as the `zIndex` sorting may cause the child to automatically sorted to another position.
   * @type {boolean}
   * @memberof scene.Container#
   */
  sortableChildren: false,
  /**
   * The zIndex of the container.
   *
   * Setting this value, will automatically set the parent to be sortable. Children will be automatically
   * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
   * and thus rendered on top of other display objects within the same container.
   * @see scene.Container#sortableChildren
   * @memberof scene.Container#
   */
  get zIndex() {
    return this._zIndex;
  },
  set zIndex(value) {
    if (this._zIndex === value)
      return;
    this._zIndex = value;
    this.depthOfChildModified();
  },
  depthOfChildModified() {
    if (this.parent) {
      this.parent.sortableChildren = true;
      this.parent.sortDirty = true;
    }
    if (this.parentRenderGroup) {
      this.parentRenderGroup.structureDidChange = true;
    }
  },
  /**
   * Sorts children by zIndex.
   * @memberof scene.Container#
   */
  sortChildren() {
    if (!this.sortDirty)
      return;
    this.sortDirty = false;
    this.children.sort(sortChildren);
  }
};
function sortChildren(a, b) {
  return a._zIndex - b._zIndex;
}

"use strict";
const toLocalGlobalMixin = {
  /**
   * Returns the global position of the container.
   * @param point - The optional point to write the global value to.
   * @param skipUpdate - Should we skip the update transform.
   * @returns - The updated point.
   * @memberof scene.Container#
   */
  getGlobalPosition(point = new Point(), skipUpdate = false) {
    if (this.parent) {
      this.parent.toGlobal(this._position, point, skipUpdate);
    } else {
      point.x = this._position.x;
      point.y = this._position.y;
    }
    return point;
  },
  /**
   * Calculates the global position of the container.
   * @param position - The world origin to calculate from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform.
   * @returns - A point object representing the position of this object.
   * @memberof scene.Container#
   */
  toGlobal(position, point, skipUpdate = false) {
    const globalMatrix = this.getGlobalTransform(matrixPool.get(), skipUpdate);
    point = globalMatrix.apply(position, point);
    matrixPool.return(globalMatrix);
    return point;
  },
  /**
   * Calculates the local position of the container relative to another point.
   * @param position - The world origin to calculate from.
   * @param from - The Container to calculate the global position from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform
   * @returns - A point object representing the position of this object
   * @memberof scene.Container#
   */
  toLocal(position, from, point, skipUpdate) {
    if (from) {
      position = from.toGlobal(position, point, skipUpdate);
    }
    const globalMatrix = this.getGlobalTransform(matrixPool.get(), skipUpdate);
    point = globalMatrix.applyInverse(position, point);
    matrixPool.return(globalMatrix);
    return point;
  }
};

"use strict";
class InstructionSet {
  constructor() {
    /** a unique id for this instruction set used through the renderer */
    this.uid = uid$1("instructionSet");
    /** the array of instructions */
    this.instructions = [];
    /** the actual size of the array (any instructions passed this should be ignored) */
    this.instructionSize = 0;
    this.renderables = [];
    /** used by the garbage collector to track when the instruction set was last used */
    this.gcTick = 0;
  }
  /** reset the instruction set so it can be reused set size back to 0 */
  reset() {
    this.instructionSize = 0;
  }
  /**
   * Add an instruction to the set
   * @param instruction - add an instruction to the set
   */
  add(instruction) {
    this.instructions[this.instructionSize++] = instruction;
  }
  /**
   * Log the instructions to the console (for debugging)
   * @internal
   * @ignore
   */
  log() {
    this.instructions.length = this.instructionSize;
    console.table(this.instructions, ["type", "action"]);
  }
}

"use strict";
function nextPow2(v) {
  v += v === 0 ? 1 : 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}
function isPow2(v) {
  return !(v & v - 1) && !!v;
}
function log2(v) {
  let r = (v > 65535 ? 1 : 0) << 4;
  v >>>= r;
  let shift = (v > 255 ? 1 : 0) << 3;
  v >>>= shift;
  r |= shift;
  shift = (v > 15 ? 1 : 0) << 2;
  v >>>= shift;
  r |= shift;
  shift = (v > 3 ? 1 : 0) << 1;
  v >>>= shift;
  r |= shift;
  return r | v >> 1;
}

"use strict";
function definedProps(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== void 0) {
      result[key] = obj[key];
    }
  }
  return result;
}

"use strict";
var __defProp$16 = Object.defineProperty;
var __getOwnPropSymbols$16 = Object.getOwnPropertySymbols;
var __hasOwnProp$16 = Object.prototype.hasOwnProperty;
var __propIsEnum$16 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$16 = (obj, key, value) => key in obj ? __defProp$16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$16 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$16.call(b, prop))
      __defNormalProp$16(a, prop, b[prop]);
  if (__getOwnPropSymbols$16)
    for (var prop of __getOwnPropSymbols$16(b)) {
      if (__propIsEnum$16.call(b, prop))
        __defNormalProp$16(a, prop, b[prop]);
    }
  return a;
};
const idHash$1 = /* @__PURE__ */ Object.create(null);
function createResourceIdFromString(value) {
  const id = idHash$1[value];
  if (id === void 0) {
    idHash$1[value] = uid$1("resource");
  }
  return id;
}
const _TextureStyle = class _TextureStyle extends EventEmitter {
  /**
   * @param options - options for the style
   */
  constructor(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    super();
    this._resourceType = "textureSampler";
    this._touched = 0;
    /**
     * Specifies the maximum anisotropy value clamp used by the sampler.
     * Note: Most implementations support {@link GPUSamplerDescriptor#maxAnisotropy} values in range
     * between 1 and 16, inclusive. The used value of {@link GPUSamplerDescriptor#maxAnisotropy} will
     * be clamped to the maximum value that the platform supports.
     * @internal
     * @ignore
     */
    this._maxAnisotropy = 1;
    /**
     * Has the style been destroyed?
     * @readonly
     */
    this.destroyed = false;
    options = __spreadValues$16(__spreadValues$16({}, _TextureStyle.defaultOptions), options);
    this.addressMode = options.addressMode;
    this.addressModeU = (_a = options.addressModeU) != null ? _a : this.addressModeU;
    this.addressModeV = (_b = options.addressModeV) != null ? _b : this.addressModeV;
    this.addressModeW = (_c = options.addressModeW) != null ? _c : this.addressModeW;
    this.scaleMode = options.scaleMode;
    this.magFilter = (_d = options.magFilter) != null ? _d : this.magFilter;
    this.minFilter = (_e = options.minFilter) != null ? _e : this.minFilter;
    this.mipmapFilter = (_f = options.mipmapFilter) != null ? _f : this.mipmapFilter;
    this.lodMinClamp = options.lodMinClamp;
    this.lodMaxClamp = options.lodMaxClamp;
    this.compare = options.compare;
    this.maxAnisotropy = (_g = options.maxAnisotropy) != null ? _g : 1;
  }
  set addressMode(value) {
    this.addressModeU = value;
    this.addressModeV = value;
    this.addressModeW = value;
  }
  /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
  get addressMode() {
    return this.addressModeU;
  }
  set wrapMode(value) {
    deprecation(v8_0_0, "TextureStyle.wrapMode is now TextureStyle.addressMode");
    this.addressMode = value;
  }
  get wrapMode() {
    return this.addressMode;
  }
  set scaleMode(value) {
    this.magFilter = value;
    this.minFilter = value;
    this.mipmapFilter = value;
  }
  /** setting this will set magFilter,minFilter and mipmapFilter all at once!  */
  get scaleMode() {
    return this.magFilter;
  }
  /** Specifies the maximum anisotropy value clamp used by the sampler. */
  set maxAnisotropy(value) {
    this._maxAnisotropy = Math.min(value, 16);
    if (this._maxAnisotropy > 1) {
      this.scaleMode = "linear";
    }
  }
  get maxAnisotropy() {
    return this._maxAnisotropy;
  }
  // TODO - move this to WebGL?
  get _resourceId() {
    return this._sharedResourceId || this._generateResourceId();
  }
  update() {
    this.emit("change", this);
    this._sharedResourceId = null;
  }
  _generateResourceId() {
    const bigKey = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
    this._sharedResourceId = createResourceIdFromString(bigKey);
    return this._resourceId;
  }
  /** Destroys the style */
  destroy() {
    this.destroyed = true;
    this.emit("destroy", this);
    this.emit("change", this);
    this.removeAllListeners();
  }
};
/** default options for the style */
_TextureStyle.defaultOptions = {
  addressMode: "clamp-to-edge",
  scaleMode: "linear"
};
let TextureStyle = _TextureStyle;

"use strict";
var __defProp$15 = Object.defineProperty;
var __getOwnPropSymbols$15 = Object.getOwnPropertySymbols;
var __hasOwnProp$15 = Object.prototype.hasOwnProperty;
var __propIsEnum$15 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$15 = (obj, key, value) => key in obj ? __defProp$15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$15 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$15.call(b, prop))
      __defNormalProp$15(a, prop, b[prop]);
  if (__getOwnPropSymbols$15)
    for (var prop of __getOwnPropSymbols$15(b)) {
      if (__propIsEnum$15.call(b, prop))
        __defNormalProp$15(a, prop, b[prop]);
    }
  return a;
};
const _TextureSource = class _TextureSource extends EventEmitter {
  /**
   * @param options - options for creating a new TextureSource
   */
  constructor(options = {}) {
    var _a, _b, _c;
    super();
    this.options = options;
    /** unique id for this Texture source */
    this.uid = uid$1("textureSource");
    /**
     * The resource type used by this TextureSource. This is used by the bind groups to determine
     * how to handle this resource.
     * @ignore
     * @internal
     */
    this._resourceType = "textureSource";
    /**
     * i unique resource id, used by the bind group systems.
     * This can change if the texture is resized or its resource changes
     */
    this._resourceId = uid$1("resource");
    /**
     * this is how the backends know how to upload this texture to the GPU
     * It changes depending on the resource type. Classes that extend TextureSource
     * should override this property.
     * @ignore
     * @internal
     */
    this.uploadMethodId = "unknown";
    // dimensions
    this._resolution = 1;
    /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */
    this.pixelWidth = 1;
    /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */
    this.pixelHeight = 1;
    /**
     * the width of this texture source, accounting for resolution
     * eg pixelWidth 200, resolution 2, then width will be 100
     */
    this.width = 1;
    /**
     * the height of this texture source, accounting for resolution
     * eg pixelHeight 200, resolution 2, then height will be 100
     */
    this.height = 1;
    /**
     * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
     * To enable multisample for a texture, set antialias to true
     * @internal
     * @ignore
     */
    this.sampleCount = 1;
    /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */
    this.mipLevelCount = 1;
    /**
     * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
     * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
     * can look better when scaled down.
     *
     * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
     * If you do, make sure to call `updateMipmaps` after you update the texture.
     */
    this.autoGenerateMipmaps = false;
    /** the format that the texture data has */
    this.format = "rgba8unorm";
    /** how many dimensions does this texture have? currently v8 only supports 2d */
    this.dimension = "2d";
    /**
     * Only really affects RenderTextures.
     * Should we use antialiasing for this texture. It will look better, but may impact performance as a
     * Blit operation will be required to resolve the texture.
     */
    this.antialias = false;
    /**
     * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
     * @protected
     */
    this._touched = 0;
    /**
     * Used by the batcher to build texture batches. faster to have the variable here!
     * @protected
     */
    this._batchTick = -1;
    /**
     * A temporary batch location for the texture batching. Here for performance reasons only!
     * @protected
     */
    this._textureBindLocation = -1;
    options = __spreadValues$15(__spreadValues$15({}, _TextureSource.defaultOptions), options);
    this.label = (_a = options.label) != null ? _a : "";
    this.resource = options.resource;
    this.autoGarbageCollect = options.autoGarbageCollect;
    this._resolution = options.resolution;
    if (options.width) {
      this.pixelWidth = options.width * this._resolution;
    } else {
      this.pixelWidth = this.resource ? (_b = this.resourceWidth) != null ? _b : 1 : 1;
    }
    if (options.height) {
      this.pixelHeight = options.height * this._resolution;
    } else {
      this.pixelHeight = this.resource ? (_c = this.resourceHeight) != null ? _c : 1 : 1;
    }
    this.width = this.pixelWidth / this._resolution;
    this.height = this.pixelHeight / this._resolution;
    this.format = options.format;
    this.dimension = options.dimensions;
    this.mipLevelCount = options.mipLevelCount;
    this.autoGenerateMipmaps = options.autoGenerateMipmaps;
    this.sampleCount = options.sampleCount;
    this.antialias = options.antialias;
    this.alphaMode = options.alphaMode;
    this.style = new TextureStyle(definedProps(options));
    this.destroyed = false;
    this._refreshPOT();
  }
  /** returns itself */
  get source() {
    return this;
  }
  /** the style of the texture */
  get style() {
    return this._style;
  }
  set style(value) {
    var _a, _b;
    if (this.style === value)
      return;
    (_a = this._style) == null ? void 0 : _a.off("change", this._onStyleChange, this);
    this._style = value;
    (_b = this._style) == null ? void 0 : _b.on("change", this._onStyleChange, this);
    this._onStyleChange();
  }
  /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
  get addressMode() {
    return this._style.addressMode;
  }
  set addressMode(value) {
    this._style.addressMode = value;
  }
  /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */
  get repeatMode() {
    return this._style.addressMode;
  }
  set repeatMode(value) {
    this._style.addressMode = value;
  }
  /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */
  get magFilter() {
    return this._style.magFilter;
  }
  set magFilter(value) {
    this._style.magFilter = value;
  }
  /** Specifies the sampling behavior when the sample footprint is larger than one texel. */
  get minFilter() {
    return this._style.minFilter;
  }
  set minFilter(value) {
    this._style.minFilter = value;
  }
  /** Specifies behavior for sampling between mipmap levels. */
  get mipmapFilter() {
    return this._style.mipmapFilter;
  }
  set mipmapFilter(value) {
    this._style.mipmapFilter = value;
  }
  /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
  get lodMinClamp() {
    return this._style.lodMinClamp;
  }
  set lodMinClamp(value) {
    this._style.lodMinClamp = value;
  }
  /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */
  get lodMaxClamp() {
    return this._style.lodMaxClamp;
  }
  set lodMaxClamp(value) {
    this._style.lodMaxClamp = value;
  }
  _onStyleChange() {
    this.emit("styleChange", this);
  }
  /** call this if you have modified the texture outside of the constructor */
  update() {
    if (this.resource) {
      const resolution = t